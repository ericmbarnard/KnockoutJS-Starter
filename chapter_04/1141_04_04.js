// Very Simple Knockout Observable Array Implementation

// function factory for observable arrays
ko.observableArray = function (initialValues) {

    // make sure we have an array
    initialValues = initialValues || [];

    // create a Knockout Observable around our Array
    var result = ko.observable(initialValues);

    // add our Observable Array member functions
    // like "push", "pop", and so forth
    ko.utils.extend(result, ko.observableArray['fn']);

    // hand back the Observable we've created
    return result;
};