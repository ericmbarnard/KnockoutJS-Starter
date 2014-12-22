(function (myApp) {

    // Product Constructor Function
    function Product() {
        var self = this;

        // "SKU" property
        self.sku = ko.observable("");

        // "Description" property
        self.description = ko.observable("");

        // "Price" property
        self.price = ko.observable(0.00);

        // "Cost" property
        self.cost = ko.observable(0.00);

        // "Quantity" property
        self.quantity = ko.observable(0);

        // Computed Observables

        // simply combines the Sku and Description properties
        self.skuAndDescription = ko.computed(function () {
            var sku = self.sku() || "";
            var description = self.description() || "";

            return sku + ": " + description;
        });
    }

    // add to our namespace
    myApp.Product = Product;

} (window.myApp));