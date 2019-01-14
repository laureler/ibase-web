## 语法说明

####  为什么建议使用 `===` 或者 `!==` 而非 `==` 或者 `!=` ?

因为JavaScript 在 `==`的时候内部做了强制类型转换（具体转换规则查看JavaScript真值表）

例如：
```javascript
console.log([] == false);		//true
console.log([] == ![])			//true
console.log(3=='03')			//true
```
所以，除非你真的很用心记忆了所有的JavaScript真值转换类型，所以从避免bug的角度出发，
强烈建议使用 `===` 而非 `==`

 -------------------------------------------
 #### 为什么不建议使用 `undefined` 字符?
 `undefined` 实际上是一个JavaScript 全局变量，
 事实上，在es3中经常就能够重写整个全局变量 `undefined` 
 ，在es5中禁止了全局变量`undefined`的重写功能，但是依然可能会被影响
 例如：
```javascript
function demoFunction(){
	var undefined = "hello";
	
	// 在这里 你再次使用全局变量的属性 `undefined` 得到的效果却和你希望的效果并非一致
	if(data === undefined){
		// ………………
	}
	// 你可以使用下面方式来代替
	if(typeof data === 'undefined'){
		
	}
	//或者也可以使用下面方式来代替
	if(data === void 0){
		
	}
}
```
-------------------------------------------
 
 #### 为什么会提示我 `变量已经声明`('yourVariableName' is already defined)  
 例如：
```javascript
var demoFunction = function (name, password) {
	switch (name) {
		case '1':
			var date = new Date().getDate();
			console.log(date)
			break;
		case '2':
			var date = new Date().getDate(); // 'date' is already defined
			console.log(date)
			break;
	}
}
// todo 待完善
// 注意 JavaScript的变量提升特性
```
 