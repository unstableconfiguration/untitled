
import { GameEngine } from './core/game-engine.js';
import { TestSystem } from './core/systems/test-system.js';


export const main = function() {

    new GameEngine({
        systems : [
            new TestSystem()
        ],
        entities : [
            { test : { text : 'testing', time : 500 } }
        ]
    });

}