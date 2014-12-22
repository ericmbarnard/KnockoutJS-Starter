// Define the namespace
window.myApp = {};

(function(myApp){

    // constructor functio for App
    function App(){
        
        // core logic to run when all
        // dependencies are loaded
        this.run = function(){
            
            // create an instance of our ViewModel
            var vm = new myApp.ProductsViewModel();

            // tell Knockout to process our bindings 
            ko.applyBindings(vm);
        }
    }    

    // make sure its public
    myApp.App = App;

}(window.myApp));
