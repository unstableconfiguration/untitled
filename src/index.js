
import { GameEngine } from './core/game-engine.js';
import { systems } from './core/systems/systems.js';


export const main = function() {

    new GameEngine({
        systems : systems,
        entities : [
            //{ graphics : { line : { from : { x : 10, y : 10 }, to : { x : 100, y : 100 } } } },
            //{ graphics : { text : { string : 't', color : 'red', x : 150, y : 150 } } }
            {
                position: { x: 1, y: 1 },
                graphics: { icon : 'test' }
            },{
                position: { x: 2, y: 1 },
                graphics: { icon : 'test' }
            },{
                position: { x: 1, y: 2 },
                graphics: { icon : 'test' }
            },{
                position: { x: 2, y: 2 },
                graphics: { icon : 'test' }
            },
        ]
    });

}
