var test = ko.observable();

// create a subscription for the "test-event"
test.subscribe(function (val) {   
    console.log(val);
}, test, "test-event");

test.notifySubscribers("Hello World", "test-event");