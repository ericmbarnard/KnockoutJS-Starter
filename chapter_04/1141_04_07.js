var dep1 = ko.observable(1);
var dep2 = ko.observable(2);

var skipDep1 = false;

var comp = ko.computed(function () {
    dep2(); // register dep2 as dependency
    
    if(!skipDep1) {
        dep1(); // register dep1 as dependency
    }

    console.log('evaluated');
});
// console: evaluated

dep1(99); // console: evaluated
skipDep1 = true;
dep2(98); // console: evaluated
dep1(97); // (nothing logged)
