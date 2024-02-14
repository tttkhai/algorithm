class Singleton {
    static instance;

    constructor() {
    }

    static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    logMessage(message) {
        console.log(message);
    } 
}

const singleton1 = Singleton.getInstance();
singleton1.logMessage("alo 1")
const singleton2 = Singleton.getInstance();
singleton2.logMessage("alo 3")
console.log(singleton1 === singleton2);