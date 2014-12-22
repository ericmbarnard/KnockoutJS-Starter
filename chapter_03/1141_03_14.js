// "Quantity" property
self.quantity = ko.observable(0);

// Computed Observables

// simply combines the Sku and Description properties
self.skuAndDescription = ko.computed(function () {
	var sku = self.sku() || "";
	var description = self.description() || "";

	return sku + ": " + description;
});