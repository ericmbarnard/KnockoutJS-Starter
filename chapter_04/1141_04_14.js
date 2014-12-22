// simple number parsing
function parseNumber(strVal){
    return parseInt(strVal, 10);
}

// very basic two-way binding handler
ko.bindingHandlers['number'] = {
    init: function (element, valueAccessor, allBindingsAccessor) {

        //handle the input changing
        ko.utils.registerEventHandler(element, "change", function () {
            var observable = valueAccessor();
            var number = parseNumber(element.value);

            if (number !== NaN) {
                observable(element.value);
            }
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var number = parseNumber(value);

        if (number !== NaN) {
            element.setAttribute("value", number);
        }
    }
};
