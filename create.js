

myApp.controller('myCtrlForm', ['$scope','$state','$stateParams','myService','$timeout',function($scope ,$state,$stateParams ,myService, $timeout ) {
       var tableData = [];
        $scope.myHide = true ;
        $scope.paraHide = true ;
               $scope.myName = $stateParams.name ;
               $scope.myEmail = $stateParams.email ; 
               $scope.myPhone = $stateParams.phone ; 
               if($stateParams.index != -1){
               	 $scope.mysrc = $stateParams.image ;
               	 imgName = $stateParams.image ;
               	 $scope.paraHide = false ;
               }
               else{
               	imgName = "" ;
               }
              //  $scope.imageFunction = function(){
              //  	imgName = $("#myimage").val().replace(/^C:\\fakepath\\/, "");
        	     // $scope.mysrc = imgName ;
        	     // $scope.paraHide = false ;
              //     }
             $scope.submitData = function(){
        	console.log("in fun");
        	//console.log($scope.myImage);
        	  if($("#myimage").val()){
        	  imgName = $("#myimage").val().replace(/^C:\\fakepath\\/, "");
        	  }
              myService.putData($scope.myName,$scope.myEmail,$scope.myPhone,imgName,$stateParams.index);

               $scope.myName = "";
               $scope.myEmail = "";
               $scope.myPhone = "";
               $scope.mysrc="";
               $scope.myHide = false ;
               $scope.paraHide = true ;
               $timeout(function () {
                $scope.myHide = true ;
               }, 2000);
               if($stateParams.index != -1){
               $timeout(function () {
                 $state.go('viewform');
               }, 2000);}
             // $state.go('createform');
        }
        /*  var tableData = [];
        $scope.myHide = true ;
        $scope.myFunc = function(){

        tableData = JSON.parse(localStorage.getItem("tableData"));
       // $scope.myImage = $scope.myImage.replace(/C:\\fakepath\\/, '') 
      // alert(JSON.stringify($scope.myImage));
        var data={
        	"Name":$scope.myName,
        	"Email":$scope.myEmail,
        	"Phone":$scope.myPhone//,
        	//"Image":$scope.myImage.name
        };
        if(tableData){
         }
        else{ tableData = [] ;
            }
            tableData.push(data);
        localStorage.setItem("tableData",JSON.stringify(tableData));
        $scope.myHide = false ;
        $scope.myName = "";
        $scope.myEmail = "";
        $scope.myPhone = "";
         $timeout(function () {
                $scope.myHide = true ;
               }, 2000);
        }*/
}]);
