class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(name) {
        this.subscribers.push(name)
    }

    notify(message) {
        this.subscribers.map(subscriber => console.log(message));
    }
}

interface IYoutubeSubscriber {
    sendNotification(): void;
}

class YoutubeUser implements IYoutubeSubscriber {

    
    static sendNotification(event) {
        console.log(event);
    }
}