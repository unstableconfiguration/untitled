import { System } from '../system.js';
import { icons } from '../../assets/icons-list.js';

export const GraphicsSystem = function(game) { 
    Object.assign(this, new System());
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d', { alpha : false });
        
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
        context.fillStyle = 'rgba(40,40,40,1)';
        context.fillRect(0,0,window.innerWidth,window.innerHeight);
    }

    this.drawOnMap = function(entity) {
        let left = entity.position.x * font.width;
        let top = entity.position.y * font.height;
        let icon = icons[entity.graphics.icon];
        if(!icon.imageData) { 
            icon.imageData = this.getImageData(icon);
        }
        context.putImageData(icon.imageData, left, top)
    }

    this.getImageData = function(icon) { 
        context.font = 'bold 20px Courier New, Courier, monospace';
        context.fillStyle = icon.color || 'white';
        let width = context.measureText(icon.char).width;
        console.log(width)
        context.fillText(icon.char, 0, width + 2);
        return context.getImageData(0, 0, width, width + 2);
    }


    return this;

}