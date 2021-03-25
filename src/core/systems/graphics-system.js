import { System } from '../system.js';

export const GraphicsSystem = function(game) { 
    Object.assign(this, new System());
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    this.isEntityValid = function(entity) { 
        return false; 
    }

    this.update = function(delta) { 
        this.clear();
    }

    this.clear = function() { 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = 'rgba(0,0,0,1)';
        context.fillRect(0,0,window.innerWidth,window.innerHeight);
    }

    return this;

}