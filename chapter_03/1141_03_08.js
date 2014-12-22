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