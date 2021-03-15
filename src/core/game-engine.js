import { SystemManager } from './system-manager.js';
import { EntityManager } from './entity-manager.js';

export const GameEngine = function(options) { 
    let game = this;
    
    game.systems = new SystemManager();
    game.systems.onSystemAdded = function(system) { 
        system.game = game;
    }
    if(options.systems) { game.systems.add(options.systems); }

    game.entities = new EntityManager();
    game.entities.onEntityChanged = function(entity) { 
        game.systems.checkEntity(entity);
    }
    game.entities.onEntityAdded = function(entity) { 
        game.systems.checkEntity(entity);
    }
    if(options.entities) { game.entities.add(options.entities); }

    
    let fps = 60,
        timeStep = 1000/fps, 
        lastTimestamp = 0,
        delta = 0;
    
    game.main = function(timestamp) { 
        
        if(timestamp < (lastTimestamp + timeStep)) {
            return requestAnimationFrame(game.main);
        }

        delta += timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        while(delta >= timeStep) {
            // delta will build up a backlog if its been a while since the last anim frame 
            // this prevents that backlog from getting massive. 
            if(delta >= (timeStep * 12)) {
                delta = timeStep * 12;
            }
            
            game.systems.update(timeStep);
            delta -= timeStep

        }
        requestAnimationFrame(game.main);
    }
    requestAnimationFrame(game.main);

    return game;
}