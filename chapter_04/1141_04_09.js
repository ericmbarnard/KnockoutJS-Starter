var _val = ko.observable(1);

var vm = {
    val: ko.computed({
        read: function () {
            return _val();
        },
        write: function (newVal) {
            _val(newVal);
        }
    })
};

vm.val(2);
console.log(_val()); // console: 2

_val(3);
console.log(vm.val()); // console: 3