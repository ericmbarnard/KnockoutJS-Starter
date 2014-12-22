var depPrimitive = ko.observable(1);
var depObj = ko.observable({ val: 1 });

var comp = ko.computed(function () {
    // register dependencies
    var prim = depPrimitive();
    var obj = depObj();

    console.log("evaluated");
});
// console: evaluated


depPrimitive(1); // (nothing logged)
var previous = depObj();
depObj(previous); // console: evaluated