
var app = angular.module('bookCmsApp',['ngRoute']);

app.controller("bookAppCon",['$scope',function($scope){
	//设置分类选中的标识值
	$scope.bookclass={
		"cata":true,
		"content" : false
	};
	
	$scope.tabNav = function(key){
		//修改分类选中的标识值为全部不选中
		$scope.bookclass={
			"cata":false,
			"content" : false
		};
		//设置点击的分类为选中状态
		$scope.bookclass[key] = true;
	}
}]);

app.controller('cataClass',["$scope","$http",function($scope,$http){
	$scope.addCata = function(){
		console.log($scope.cataData)
		$http.post("/add/cata/type",$scope.cataData)
		.then(function(res){
			console.log(res);
		})
	}
}]);


app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/cata',{
			//加载分类的页面
			templateUrl : './cata.html',
			controller : "cataClass"
		})
		.when('/content',{
			template : '我是内容'
		})
		//其它，没有匹配到路由时
    	.otherwise({
    		//重定向，把当前的路由指向到 /
    		redirectTo:'/cata'
    	});
}])
