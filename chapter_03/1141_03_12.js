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