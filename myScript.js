var myApp = angular.module('myApp1', ['ui.router']);

myApp.controller('myCtrlIndex', ['$scope',function($scope) {

}]);

myApp.config(function($stateProvider) {
  $stateProvider
  // .state("createform", {
  //     url: "/create",
  //     templateUrl: "create.html",
  //     controller: 'myCtrlForm'
  //   })
    .state('createform', {
  templateUrl:'create.html',
  controller:'myCtrlForm',
  params: {
    'name': '', 
    'email': '', 
    'phone': '',
    'image': '' ,
    'index' : '-1'}
})
  .state('viewform', {
      url: "/form",
      templateUrl: "viewTable.html",
      controller: 'myTableCtrl'
    })
});

myApp.service('myService',function() {
  var obj=[];
  var row = {} ;
  if(localStorage.getItem("tableData")){ obj = JSON.parse(localStorage.getItem("tableData"));}
  else{obj = [] ;}
    this.putData = function (name1,email1,phone1,img1,index) {
       
          row={
            "name":name1,
            "email":email1,
            "phone":phone1,
            "image":img1
          } ;
         // console.log(row);
         if(index == -1){
          obj.push(row);
          //console.log(JSON.stringify(obj));
          }
          else{
          obj.splice(index,1,row);
          }
    }
    this.uploadData = function(){
    // console.log("in update");
     //var obj1 = localStorage.getItem("tableData");
      //obj = obj1 + obj ;
     localStorage.setItem("tableData",JSON.stringify(obj));
    }
    this.deleteData = function()
    {
     // console.log("in delete");
      obj = [] ;
       localStorage.removeItem("tableData");
    }
    this.forTable = function(){
      return obj ;
    }
    this.changeTemp = function(ob){
      obj = ob ;
    }
    // this.updateRow = function(ob){
    //   obj = ob ;
    // }
});
