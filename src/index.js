
import { GameEngine } from './core/game-engine.js';
import { systems } from './core/systems/systems.js';


export const main = function() {

    new GameEngine({
        systems : systems,
        entities : [
            { graphics : { line : { from : { x : 10, y : 10 }, to : { x : 100, y : 100 } } } }
        ]
    });

}