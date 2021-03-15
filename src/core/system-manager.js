export const SystemManager = function() {
    
    this.add = function(systems) {
        if(!Array.isArray(systems)) { systems = [systems]; }
        systems.forEach(system => {
            this.__collection.push(system);
        });
    }

    this.update = function(delta) { 
        this.forEach(system => { 
            system.update(delta);
        });
    }

    this.checkEntity = function(entity) { 
        this.forEach(system => { 
            system.checkEntity(entity);
        });
    }

    this.forEach = function(callback) { 
        for(const idx in this.__collection) {
            const system = this.__collection[idx];
            callback(system, idx, this.__collection);        
        }
    }

    this.__collection = [];

    return this;
}

