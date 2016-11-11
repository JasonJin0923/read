//导入 mongodb 模块
var mongodb = require("mongodb");

var server_options={
	'auto_reconnect':false,
	//连接池
	poolSize:10
};
var db_options={
	w:-1
};
var mongoserver = new mongodb.Server('127.0.0.1', 27017, server_options );
//进入到数据库
var db=new mongodb.Db('test', mongoserver, db_options);
//打开数据库
db.open(function(err,dbserver){
	if(err){
		//打开失败
		return false;
	}
	//打开数据库的下一条
	var foo = dbserver.collection('foo');   
	
	var data = {
		"name" : "小明",
		"age" : "22",
		"sex" : "男"
	}
	
	//添加数据
//	foo.save(data,function(e,result){
//		console.log(result);
//	})
	//等价于这个，但install会遇到id相同时出错,save 会update
//	foo.install(data,function(e,result){
//		console.log(result);
//	})

	//查询所有
	foo.find().toArray(function(e,result){
		console.log(result);
	})


	//查询符合条件的信息
//	foo.find({
//		"name" : "小明"
//	}).toArray(function(e,result){
//		console.log(result);
//		db.close();
//	})                                                  

	//修改信息
//	var oldwhere = {
//		"age" : "22"
//	};
//	var newData = {
//		"name" : "小刚",
//		"age" : "23",
//		"sex" : "男"
//	}
//	foo.update(oldwhere,newData,function(e,result){
//		db.close();
//		console.log(result);
//	})

	//删除数据
//	foo.remove({
//		"name" : "小刚"
//	},function(e,result){
//		console.log(result);
//		db.close();
//	})

})
