// Products ViewModel
(function (myApp) {

    // constructor function
    function ProductsViewModel() {
        var self = this;

        // the product that we want to view/edit
        self.selectedProduct = ko.observable();
    }

    // add our ViewModel to the public namespace
    myApp.ProductsViewModel = ProductsViewModel;

} (window.myApp));