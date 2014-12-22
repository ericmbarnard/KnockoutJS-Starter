var a = ko.observable(1);
var b = ko.observable(2);

var sum = ko.computed(function () {
    var total = a() + b();

    // let's log every time this runs
    console.log(total);
    return total;
});
// console: 3

a(2); // console: 4
b(3); // console: 5
b(3); // (nothing logged)