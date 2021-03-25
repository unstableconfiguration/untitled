import { System } from '../system.js';

export const GraphicsSystem = function(game) { 
    Object.assign(this, new System());
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    /* font family and size can be configurable in the future if desired */
    let font = {
        family : 'Courier New, Courier, monospace',
        size : '20px',
        width : 13, // adjusting these to get more square-like
        height : 15 //
    }

    this.isEntityValid = function(entity) {
        if(entity.graphics) { return true; }
        return false; 
    }

    this.update = function(delta) { 
        this.clear();
        this.entities.forEach(entity => { 
            if(entity.position && entity.graphics.icon) { this.drawOnMap(entity); }

        });
    }

    this.clear = function() { 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = 'rgba(0,0,0,1)';
        context.fillRect(0,0,window.innerWidth,window.innerHeight);
    }

    this.drawOnMap = function(entity) {
        let left = entity.position.x * font.width - font.width;
        let top = entity.position.y * font.height;
        this.drawText(left, top, entity.graphics.icon);
    }

    this.drawLine = function(entity) { 
        let line = entity.graphics.line;
        context.beginPath();
        context.moveTo(line.from.x, line.from.y);
        context.lineTo(line.to.x, line.to.y);
        context.strokeStyle = line.color || 'white';
        context.stroke();
    }

    this.drawText = function(canvasX, canvasY, string, color) { 
        context.font = font.size + ' ' + font.family; 
        context.fillStyle = 'white';
        context.fillText(string, canvasX, canvasY); 
    }

    return this;

}