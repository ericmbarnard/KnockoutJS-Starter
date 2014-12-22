// Products ViewModel
(function (myApp) {

    // constructor function
    function ProductsViewModel() {
        var self = this;

        // the product that we want to view/edit
        self.selectedProduct = ko.observable();

        // the product collection
        self.productCollection = ko.observableArray([]);

        // product list view selected item
        self.listViewSelectedItem = ko.observable(null);

        // push any changes in the list view to our 
        // main selectedProduct
        self.listViewSelectedItem.subscribe(function (product) {
            if (product) {
                self.selectedProduct(product);
            }
        });

        // creates a new product and sets it up
        // for editing
        self.addNewProduct = function () {
            // create a new instance of a Product
            var p = new myApp.Product();

            // set the selected Product to our new instance
            self.selectedProduct(p);
        };

        // logic that is called whenever a user is done editing
        // a product or done adding a product
        self.doneEditingProduct = function () {
            // get a reference to our currently selected product
            var p = self.selectedProduct();

            // ignore if it is null
            if (!p) {
                return;
            }

            // check to see that the product
            // doesn't already exist in our list
            if (self.productCollection.indexOf(p) > -1) {
                return;
            }

            // add the product to the collection
            self.productCollection.push(p);

            // clear out the selected product
            self.selectedProduct(null);
        };

        // logic that removes the selected product
        // from the collection
        self.removeProduct = function () {
            // get a reference to our currently selected product
            var p = self.selectedProduct();

            // ignore if it is null
            if (!p) {
                return;
            }

            // empty the selectedProduct
            self.selectedProduct(null);

            // simply remove the item from the collection
            return self.productCollection.remove(p);
        };
    }

    // add our ViewModel to the public namespace
    myApp.ProductsViewModel = ProductsViewModel;

} (window.myApp));