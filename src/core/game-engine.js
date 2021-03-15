import { SystemManager } from './system-manager.js';
import { EntityManager } from './entity-manager.js';

export const GameEngine = function(options) { 

    this.systems = new SystemManager();
    if(options.systems) { this.systems.add(options.systems); }

    this.entities = new EntityManager();
    if(options.entities) { this.entities.add(options.entities); }
    
    let fps = 60,
        timeStep = 1000/fps, 
        lastTimestamp = 0,
        delta = 0;
    this.main = function(timestamp) { 

        if(timestamp < (lastTimestamp + timeStep)) {
            return requestAnimationFrame(this.main);
        }

        delta += timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        while(delta >= timeStep) {
            // delta will build up a backlog if its been a while since the last anim frame 
            // this prevents that backlog from getting massive. 
            if(delta >= (timeStep * 12)) {
                delta = timeStep * 12;
            }
            
            engine.systems.update(timeStep);
            delta -= timeStep

        }
        requestAnimationFrame(this.main);
    }
    requestAnimationFrame(this.main);

    return this;
}