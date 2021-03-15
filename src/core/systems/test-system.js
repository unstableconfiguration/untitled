import { System } from '../system.js';

export const TestSystem = function(game) {
    Object.assign(this, new System());

    this.isEntityValid = function(entity) { 
        return entity.test && entity.test.text;
    }

    this.update = function(delta) { 
        this.entities.forEach(entity => { 
            if(!entity.test.el) { entity.test.el = createElement(entity); }

            let test = entity.test,
                el = entity.test.el;

            if(test.time <= 0) {
                el.innerHTML = el.innerHTML + test.text[0];
                test.text = test.text.substr(1);
                test.time = 500;
                if(!test.text) {
                    delete entity.test;
                    this.game.entities.onEntityChanged(entity);
                }
            }
            else {
                test.time -= delta;
            }
        });
    }


    const createElement = function(entity) { 
        let span = document.createElement('span');
        span.id = entity.id;
        document.body.appendChild(span);
        return span;
    }
    
    return this;
}