import { System } from '../system.js';

export const GraphicsSystem = function(game) { 
    Object.assign(this, new System());
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    this.isEntityValid = function(entity) {
        if(entity.graphics && entity.graphics.line) { return true; }

        //.graphics.line { from : coord, to : coord, color : rgb }
        return false; 
    }

    this.update = function(delta) { 
        this.clear();
        this.entities.forEach(entity => { 
            if(entity.graphics.line) { this.drawLine(entity); };
        });
    }

    this.clear = function() { 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = 'rgba(0,0,0,1)';
        context.fillRect(0,0,window.innerWidth,window.innerHeight);
    }

    this.drawLine = function(entity) { 
        context.beginPath();
        let line = entity.graphics.line;
        context.moveTo(line.from.x, line.from.y);
        context.lineTo(line.to.x, line.to.y);
        context.strokeStyle = line.color || 'white';
        context.stroke();
    }

    return this;

}