// Very Simple Knockout Observable Implementation

// ko.observable is actually a function factory
ko.observable = function (initialValue) {

    // private variable to hold the Observable's value
    var _latestValue = initialValue;

    // the actual "Observable" function
    function observable() {
        
        // one or more args, so it's a Write
        if (arguments.length > 0) {
            
            // set the private variable
            _latestValue = arguments[0];

            // tell any subscribers that things have changed
            observable["notifySubscribers"](_latestValue);

            return this; // Permits chained assignments
        }
        else { // no args, so it's a Read            

            // just hand back the private variable's value
            return _latestValue;
        }
    }

    // inherit from Subscribable
    ko.subscribable.call(observable);

    // return the freshly created Observable function
    return observable;
};