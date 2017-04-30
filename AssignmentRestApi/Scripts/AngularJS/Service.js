app.service('customerService', function ($http) {
    //Get All customers
    this.getCustomers = function () {
        return $http.get("/api/Customers");
    }

});