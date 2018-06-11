app.controller('BodyController', ["$scope", function ($scope) {
    $scope.list = [
        {
            first_name: "carlos",
            last_name: "velasquez",
            email: "carlos@gmail.com"
        }
    ];
    $scope.new = {};
    $scope.add = function() {
        console.log($scope.new)
        $scope.list.push($scope.new);
        $scope.new = {};
    };
}]);
