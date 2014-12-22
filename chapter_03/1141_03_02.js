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
    }

    // add to our namespace
    myApp.Product = Product;

} (window.myApp));