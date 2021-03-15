import { EntityManager } from './entity-manager.js';

export const System = function() { 

    this.checkEntity = function(entity) { 
        if(this.isEntityValid(entity)) { this.entities.add(entity); }
        else { this.entities.remove(entity); }
    }

    this.isEntityValid = function(entity) { 
        throw('not implemented');
    }

    this.update = function(delta) { 
        throw('not implemented');
    }

    this.entities = new EntityManager();

    return this;
}