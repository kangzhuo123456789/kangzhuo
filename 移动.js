//功能；运动；
//参数;(dom元素，属性，起始值，结束值，步长，间隔)
//返回值；无；
function mover1(ojb,arrt,startValue,endValue,step,timesplace){

		var value = startValue;
		let myTime = setInterval(function(){
			value+=step;
			if (value>=endValue) {
				value =endValue;
				clearInterval(myTime);
			}
		ojb.style[arrt] = value+'px';	
		},timesplace)

	
}