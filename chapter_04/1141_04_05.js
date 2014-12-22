ko.observableArray.fn['filter'] = function (filterFunc) {
    // get the array
    var underlyingArray = this();
    var result = [];

    for (var i = 0; i < underlyingArray.length; i++) {
        var value = underlyingArray[i];

        // execute filter logic
        if (filterFunc(value)) {
            result.push(value);
        }
    }
    return result;
};

var list = ko.observableArray([1, 2, 3]);

// filter down the list to only odd numbers
var odds = list.filter(function (item) {
    return (item % 2 === 1);
});

console.log(odds); // [1, 3]