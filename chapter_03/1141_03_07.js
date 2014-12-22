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