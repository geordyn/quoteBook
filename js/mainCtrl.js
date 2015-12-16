angular.module('quoteBook').controller('mainCtrl', function ($scope, dataService) {


$scope.data = dataService.getData();

$scope.pushData = dataService.addData;
$scope.deleteData = dataService.removeData;




});
