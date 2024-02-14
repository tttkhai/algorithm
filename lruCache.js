var values = new Map();
var maxEntries = 3;

class LRUClass {
    constructor() {
        this.map = new Map();
        this.maxEntries = 100;
    }
    get = (key) => {
        let value = null;
        if (this.map.has(key)) {
            value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
        }
    
        return value;
    }
    
    put = (key, value) => {
        if (this.map.size() >= maxEntries) {
            [...this.map].pop();
        }
        this.map.set(key, value)
    }
}

const a = new LRUClass();
a.set("A", 1)
a.set("B", 2)
const entry = get("A")
console.log(entry)
console.log(values)
put("C", 3)
console.log(values)
