
import { GameEngine } from './core/game-engine.js';
import { systems } from './core/systems/systems.js';


export const main = function() {

    new GameEngine({
        systems : systems,
        entities : [
            { test : { text : 'testing', time : 500 } }
        ]
    });

}