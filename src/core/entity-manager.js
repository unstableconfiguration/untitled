
export const EntityManager = function() { 
    
    this.add = function(entities) { 
        if(!Array.isArray(entities)) { entities = [entities]; }
        entities.forEach(entity => {
            if(!entity.id) { entity.id = this.__getNextId(); }
            this.__collection[entity.id] = entity;
            this.onEntityAdded(entity);
        });
    }

    this.remove = function(entities) { 
        if(!Array.isArray(entities)) { entities = [entities]; }
        entities.forEach(entity => { 
            delete this.__collection[entity.id];
            this.onEntityRemoved(entity);
        });
    }

    this.forEach = function(callback) {
        for(const id in this.__collection) {
            const entity = this.__collection[id];
            callback(entity, id, this.__collection)
        }
    }

    this.onEntityAdded = function(entity) { }
    this.onEntityChanged = function(entity) { }
    this.onEntityRemoved = function(entity) { }

    this.__id = 0;
    this.__getNextId = function() { 
        return this.__id++;
    }
    this.__collection = {};

    return this;
}