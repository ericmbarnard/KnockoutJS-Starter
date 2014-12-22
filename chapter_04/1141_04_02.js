// Dummy Subscribable
function PubSub(){
    
    // inherit Subscribable
    ko.subscribable.call(this);
}

// create an instance of our Subscribable
var pubsub = new PubSub();

// make a subscription
var subscription = pubsub.subscribe(function (val) {
    console.log(val);
}, pubsub, 'test-topic');

pubsub.notifySubscribers("hello world", "test-topic");
// console: "hello world"

// clean up things
subscription.dispose();