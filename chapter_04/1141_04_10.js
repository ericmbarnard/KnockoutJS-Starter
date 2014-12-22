// extend usage
var a = { val: 1 },
    b = { val: 2 };

ko.utils.extend(a, b);

console.log(a.val); // console: 2

// unwrapObservable usage
var c = ko.observable(99),
    d = 98;

console.log(ko.utils.unwrapObservable(c)); // console: 99
console.log(ko.utils.unwrapObservable(d)); // console: 98

// array "map" utility function usage
var arr = [100, 101];

var mapped = ko.utils.arrayMap(arr, function (item) {
    return item + 50;
})

console.log(arr); // console: [ 150, 151 ]