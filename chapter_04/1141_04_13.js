// invisible -> the inverse of 'visible'
ko.bindingHandlers['invisible'] = {
    update: function (element, valueAccessor) {
        var newValueAccessor = function () {
            // just return the opposite of the visible flag!
            return !ko.utils.unwrapObservable(valueAccessor());
        };
        return ko.bindingHandlers.visible.update(element, newValueAccessor);
    }
};