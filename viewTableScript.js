
myApp.controller('myTableCtrl', function($scope , $state , myService) {
        var obj1 = myService.forTable();
        //console.log(obj1);
        $scope.td = obj1 ;
        $scope.save = function(){
        	myService.uploadData();
        }
        $scope.delete = function(){
        	myService.deleteData();
        	obj1 = myService.forTable();
            $scope.td = obj1 ;
        }
        $scope.deleteRow = function(index){
			var obj1 = myService.forTable();
			obj1.splice(index,1);  
            myService.changeTemp(obj1);
        }
        $scope.updateRow = function(index){
        	var obj1 = myService.forTable();
         	$state.go('createform', {'name':obj1[index].name,'email':obj1[index].email,'phone':obj1[index].phone,'image':obj1[index].image,'index':index} );
        }
});




