/**
 * Created by 岩 on 2016/5/26.
 */
//事件响应，网页互交
window.onunload = onunload_message;
function onunload_message(){
    alert("卸载事件，当用户退出页面时（页面关闭、页面刷新等），触发onunload()事件")
}

//点击事件
function openwin(){
    //在约定位置及约定大小打开新窗口
    //open()方法
    window.open('http://www.imooc.com','_blank','height=600,width=400,top=100,toolbar=no,left=0,menubar=no,scrollbars=no,status=no');
}

function message(){
    //弹出新窗口
    confirm("鼠标经过事件");
}

function mouseout(){
    //弹出指定内容
    alert("鼠标移开事件");
}

function focuss(){
    alert("鼠标聚焦事件");
}

function blurs(){
    alert("鼠标失焦事件");
}

function selectss(){
    alert("内容选中事件");
}

function changess(){
    alert("文本框内容改变事件")
}

//function load(){
//    alert("页面加载事件，页面加载完成后立即发生")
//}

var j = setInterval("click()",100);////////////这里如果用i会与下边for循环的i产生冲突，造成定时器无法停止
function click(){
    document.getElementById("click").value = new Date();
    //clearInterval(j);
}
var m = 0,i = 0;
function start(){
    document.getElementById("cound").value = m;
    m++;
    clearTimeout(i);//首先取消之前的计时器，以免多个计时器同时工作
    i = setTimeout("start()",1000);//setTimeout("code",time)的递归调用实现计数
}
function stop(){
    clearTimeout(i);
}
/**
 * setInterval("code",time);//每隔time时间执行一次code
 * clearInterval(id_of_setInterval)//id_of_setInterval：由 setInterval() 返回的 ID 值。
 * setTimeout("code",time);//仅在time时间后执行一次code
 *clearTimeout(id_of_setTimeout)//id_of_setTimeout：由 setTimeout() 返回的 ID 值,表示取消对应计时器的执行
 */

//Internet Explorer 会忽略节点间生成的空白文本节点（例如，换行符号），而其它浏览器不会忽略。通过函数判断忽略空白文本节点
function get_nextSibling(n){//获取当前节点的下一个节点（n为当前节点）
    var x=n.nextSibling;
    while (x && x.nodeType!=1){
        x=x.nextSibling;
    }return x;
}
function get_previousSibling(n){//获取当前节点的上一个节点（n为当前节点）
    var x=n.previousSibling;
    while (x && x.nodeType!=1){
        x=x.previousSibling;
    }return x;
}
function clearText(){
    var otest = document.getElementsByTagName("form");
    alert(otest[0]);
    alert(otest[0].firstChild.nodeType);
    var x = otest[0].removeChild(otest[0].firstChild);//从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL
    alert(x);
}
function replaceMessage(){///////////////////////////////////////////////////////////////////————————————————————————————————————
    alert(1111);
    var oldnode = document.getElementById("oldnode")
    var newnode = document.createElement("i");
    newnode.innerHTML = oldnode.innerHTML;
    console.log(newnode);
    oldnode.parentNode.replaceChild(newnode,oldnode);//replaceChild 实现子节点(对象)的替换。返回被替换对象的引用         node.replaceChild (newnode,oldnew )
}



//文档对象模型DOM（Document Object Model）
document.writeln("————————DOM对象，控制HTML元素————————"+"<br>");
var anode = document.getElementsByTagName("p");
var anodee = document.getElementById("click");
document.writeln("通过ID获取元素（document.getElementById(id)）："+document.getElementById("click")+"<br>");//通过ID查询元素
document.writeln("通过name属性查询元素（document.getElementsByName(name)）："+document.getElementsByName("button")+"<br>");//返回带有指定名称的节点对象的集合
document.writeln("通过标签名称获取节点对象（document.getElementsByTagName(Tagname)）："+document.getElementsByTagName("input")+"<br>");//按在文档中的顺序返回带有指定标签名的节点对象的集合
document.writeln("通过元素节点属性名获取属性的值（elementNode.getAttribute(name)）："+anode[2].getAttribute("name")+"<br>");//elementNode：使用getElementById()、getElementsByTagName()等方法，获取到的元素节点;name：要想查询的元素节点的属性名字
anode[2].setAttribute("name","HTML");//elementNode.setAttribute(name,value)方法增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。name: 要设置的属性名;value: 要设置的属性值。
document.writeln("修改后的name值："+anode[2].getAttribute("name")+"<br>");
document.writeln("通过nodeName属性获取节点名称："+anode[1].nodeName+"<br>");//节点名称，只读，元素——与标签名相同；属性——属性名；文本——#text；文档——#document
document.writeln("通过nodeType属性获取节点类型："+anode[1].nodeType+"<br>");//节点类型，元素——1；属性——2；文本——3；注释——8；文档——9
document.writeln("通过nodeValue属性获取节点值："+anode[1].nodeValue+"<br>");//节点的值，元素——undefined 或 null；文本——文本自身；属性——属性值
document.writeln("通过childNodes获取指定节点的子节点（elementNode.childNodes）："+anode[3].childNodes.length+"<br>");//访问选定元素节点下的所有子节点，返回的值可以看作是一个数组，具有length属性；若选定的节点没有子节点，则返回不包含节点的 NodeList。

document.writeln("通过parentNode获取指定节点的父节点："+anodee.parentNode.parentNode.lastChild.childNodes[2]+"<br>");//获取指定节点的父节点——————问题待解决

var newnode1 = document.createElement("p");//创建一个新的元素节点
newnode1.innerHTML = "在指定节点的最后一个子节点列表之后添加一个新的子节点：JS创建的新节点";
var newnode2 = document.createElement("p");//document.createElement(tagName)     tagName：字符串值，这个字符串用来指明创建元素的类型
newnode2.innerHTML = "在已有的子节点前插入一个新的子节点（insertBefore(newnode,node)）";
var otest = document.getElementsByTagName("form");
otest[0].appendChild(newnode1);//插入一个新的节点     appendChild(newnode)——newnode：指定追加的节点。
otest[0].insertBefore(newnode2,anode[5]);//在已有的子节点前插入一个新的子节点   insertBefore(newnode,node)——newnode: 要插入的新节点;node: 指定此节点前插入节点
otest[0].insertBefore(newnode2,anode[anode.length]);//一个节点只能被插入一次，若存在多次插入，则以最后一次的插入为准（仅最后一次的插入有效）

var element = document.createElement("div");//创建一个元素标签
//element.className = "message";//为标签设置class属性
element.setAttribute("class","message");//为标签设置class属性  二者具有相同的效果
var node = document.createTextNode("I Love JavaScript!");//创建一个文本节点
element.appendChild(node);//将创建的文本节点添加到元素标签中
document.body.appendChild(element);//将元素标签添加到页面中

var w = window.innerWidth;//浏览器窗口的内部高度（浏览器的视口，不包括工具栏和滚动条）
var h = window.innerHeight;//浏览器窗口的内部宽度（浏览器的视口，不包括工具栏和滚动条）
var w0 = document.documentElement.clientWidth || document.body.clientWidth;//为兼容不同浏览器的通用解决方案
var h0 = document.documentElement.clientHeight || document.body.clientHeight;//为兼容不同浏览器的通用解决方案
var sw=document.documentElement.scrollWidth || document.body.scrollWidth;
var sh=document.documentElement.scrollHeight || document.body.scrollHeight;//是网页内容实际高度，可以小于 clientHeight与否以不同浏览器而定
var ow= document.documentElement.offsetWidth|| document.body.offsetWidth;//获取网页内容高度和宽度(包括滚动条等边线，会随窗口的显示大小改变)。
var oh= document.documentElement.offsetHeight || document.body.offsetHeight;//offsetHeight = clientHeight + 滚动条 + 边框。
//alert(element.offsetHeight);
document.writeln("当前浏览器的可视窗口宽度为："+w+"<br>");
document.writeln("当前浏览器的可视窗口高度为："+h+"<br>");

function req(){
    var div = document.getElementById("div1");
    document.getElementById("li1").innerHTML = (div.offsetTop)+"px";//div1距离屏幕顶部的距离
    document.getElementById("li2").innerHTML = (div.offsetLeft)+"px";//div1距离屏幕左部的距离
    document.getElementById("li3").innerHTML = (div.scrollTop)+"px";//div1纵向滚动条滚动的距离
    document.getElementById("li4").innerHTML = (div.scrollLeft)+"px";//div1横向滚动条滚动的距离
}





document.writeln("<br>");
/**
 * element.setAttribute(attributename,attributevalue)//添加指定的属性，并为其赋指定的值,如果这个指定的属性已存在，则仅设置/更改值  attributename:必需。您希望添加的属性的名称;attributevalue:必需。您希望添加的属性值。
 * //节点属性
 * nodeNme——返回一个字符串，其内容是给定节点的名字
 * nodeType——返回一个整数，代表给定节点的类型
 * nodeValue——返回给定节点的当前值
 * //遍历节点树
 * childNodes——返回一个由给定元素节点的子节点构成的数组
 * firstChild——返回第一个子节点
 * lastChild——返回最后一个子节点
 * parentNode——返回一个给定节点的父节点
 * nextSibling——返回给定节点的下一个子节点
 * previousSibling——返回给定节点的上一个子节点
 * //DOM操作
 * createElement(element)——创建一个新的元素节点
 * createTextNode()——创建一个包含给定文本的新文本节点
 * appendChild()——在指定节点的最后一个子节点列表之后添加一个新的子节点
 * insertBefore()——将一个给定节点插入到一个给定元素节点的给定子节点的前面
 * nodeObject.removeChild(node)——从一个给定的元素中删除一个子节点
 * replaceChile()——把一个给定父元素的一个子节点替换为另一个节点
 */

//History 对象
document.writeln("————————History对象————————"+"<br>");
var m = window.history.length;//返回浏览器历史列表中的URL数量
document.writeln("History 对象（页面URL个数）："+m+"<br>");
document.writeln("<br>");
/**
 * history对象记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。
 * 从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。
 * window.history.[属性|方法]
 * window.history.back()//加载上一个URL
 * window.history.forward()//加载下一个URL
 * window.history.go(x)//加载第x个URL,当前窗口x值为0
 */

//location对象
document.writeln("————————location对象————————"+"<br>");
document.writeln("设置或返回完整的URL:"+location.href+"<br>");
document.writeln("设置或返回完整的URL主机名和端口号:"+location.host+"<br>");
document.writeln("设置或返回完整的URL路径:"+location.pathname+"<br>");
document.writeln("<br>");
/**
 * hash——从#开始的URL
 * search——从？开始的URL（查询部分）
 * ........
 * assign()——加载新的文档
 * reload()——重新加载当前文档
 * replace()——用新的文档替换当前文档
 */

//screen对象
document.writeln("————————screen对象————————"+"<br>");
document.writeln("屏幕宽度："+screen.width+"<br>");
document.writeln("屏幕高度："+screen.height+"<br>");
document.writeln("窗口可用屏幕宽度："+screen.availWidth+"<br>");
document.writeln("窗口可用屏幕高度："+screen.availHeight+"<br>");
document.writeln("用户浏览器表示的颜色位数："+screen.colorDepth+"<br>");
document.writeln("<br>");
/**
 * colorDepth——用户浏览器表示的颜色位数
 */

//Date日期对象
document.writeln("————————Date日期对象————————"+"<br>");
var nowdate = new Date();
var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
document.write("当前时间："+nowdate + "<br>");
nowdate.setFullYear(nowdate.getFullYear() - 13);
nowdate.setTime(nowdate.getTime() + 1000*60*60);//将当前时间推后一小时
document.writeln("一个小时之后的时间是："+nowdate + "<br>");
document.writeln("返回/设置年份用四位数表示（get/setFullYear()）："+nowdate.getFullYear() + "<br>");//获取当前年份并输出
document.writeln("返回/设置年份（get/setYear()）："+nowdate.getYear() + "<br>");//获取当前年份并输出
document.writeln("返回/设置月份（get/setMonth()）："+(nowdate.getMonth()+1)+"<br>");//由于返回值为0~11，所以结果要加一
document.writeln("今天是："+weekday[nowdate.getDay()] + "<br>");//获取当前星期并输出
document.writeln("<br>");
/**
 * get/setHours()//返回/设置小时，24小时制
 * get/setMinutes()//返回/设置分钟数
 * get/setSeconds()//返回/设置秒钟数
 * get/setTime()//返回/设置时间（以毫秒为单位）
 */


//字符串对象
document.writeln("————————字符串对象————————"+"<br>");
var mystr = "I Love You!";
document.writeln("示例字符串："+mystr+"<br>");
document.write("字符串长度：" + mystr.length + "<br>");//统计字符串长度
document.write("字符串全部转化为大写字母：" + mystr.toUpperCase() + "<br>");
document.writeln("字符串全部转化为小写字母：" + mystr.toLowerCase() + "<br>");
document.writeln("返回指定位置字符："+mystr.charAt(5)+"<br>");//返回指定位置字符串，越界返回空，最大下标为mystr.length-1
document.writeln("返回指定字符串首次出现的位置："+mystr.indexOf("You",5)+"<br>");//第一的参数为必选参数，第二个参数可选，若省略则从0开始，若未检索到则返回-1
document.writeln("字符串分割："+mystr.split(" ",2)+"<br>");//第一个参数必选，为分割标记,若参数为"",则分割成单个字符，第二个参数可选，为分割后字符数组的长度
document.writeln("提取字符串（substring(starPos,stopPos)）："+mystr.substring(2,6)+"<br>");//提取两个非负整数之间的字符串，第一个参数必填，第二个参数省略则默认提取到原字符串尾部
document.writeln("提取指定数目的字符串（substr(startPos,length)）："+mystr.substr(2,4)+"<br>");
document.writeln("<br>");

//Math对象
document.writeln("————————Math对象————————"+"<br>");
document.writeln("向上取整（Math.ceil(x)）："+Math.ceil(-2.99)+"<br>");//向上取整，返回的是大于或等于x，并且与x最接近的整数。
document.writeln("向下取整（Math.floor(x)）："+Math.floor(2.99)+"<br>");//向下取整，返回的是小于或等于x，并且与 x 最接近的整数。
document.writeln("四舍五入（Math.round(x)）"+Math.round(1.5)+"<br>");//四舍五入，返回与 x 最接近的整数；如果 x 与两侧整数同等接近，则结果接近 +∞方向的数字值（5.5——6、-5.5——--5） 。
document.writeln("随机数（Math.random()）："+Math.random()+"<br>");//随机数，返回一个大于或等于0且小于1的随机正数
document.writeln("Math对象组合产生0~99的随机整数："+Math.floor((Math.random())*100)+"<br>");
document.writeln(Math.valueOf()+"<br>");
document.writeln(Math.E+"<br>");//返回算数常数e
document.writeln("<br>");
/**
 * *******属性
 * E——算数常数e，自然对数的底数
 * LN2——2的自然对数（0.693.。。）
 * LN10——10的自然对数（2.302...）
 * LOG2E——以2为底e的对数
 * LOG10E——以10为底e的对数
 * PI——圆周率
 * SQRT2——2的平方根
 * SQRT1_2——2的平方根的倒数
 * *******方法
 * abs(x)//返回x的绝对值
 * atan2(y,x)//返回由x轴到点（x，y）的角度（一弧度为单位）------注意坐标是反的
 * exp(x)//返回e的x次幂
 * pow(x,y)//返回x的y次幂
 * log(x)//返回x的自然对数（底为e）
 * max(x,y)//返回x、y的最大值，参数个数不限
 * min(x,y)//返回x、y的最小值，参数个数不限
 * sqrt(x)//返回x的平方根
 * toSource()//返回该对象的源代码
 * valueOf()//返回Math对象的原始值
 * sin(x)
 * asin(x)
 * ...
 */

//Array数组对象
document.writeln("————————Array数组对象————————"+"<br>");
var myarr = new Array();
myarr[0] = new Array("Hello!");
myarr[1] = new Array("I","Love","You");
myarr[2] = new Array("JavaScript","!");
myarr[3] = new Array("65","29","59","99","1");
document.writeln("四个示例数组："+"<br>");
for (var i=0;i<=3;i++){
    document.writeln(""+myarr[i]+"<br>");
}
document.writeln("数组连接（arrayObject.concat(array1,array2,...,arrayN)）："+myarr[0].concat(myarr[1],myarr[2])+"<br>");//数组连接，参数个数不限
document.writeln("指定分隔符连接数组元素（arrayObject.join(分隔符)）："+myarr.join(" ")+"<br>");//参数为返回字符串分隔符号，省略则默认为逗号
document.writeln("颠倒数组元素顺序（arrayObject.reverse()）："+myarr[1].reverse()+"<br>");//颠倒数组元素顺序，该方法会改变原来的数组，而不会创建新的数组。
document.writeln("选定元素（arrayObject.slice(start,end)）："+myarr.slice(1,2)+"<br>");//start必须，end可选，若为负，则表示从数组尾部算起，返回一个新的数组，包含从 start 到 end 的 arrayObject 中的元素，不会修改原数组。
document.writeln("数组排序（arrayObject.sort(方法函数)）："+myarr[3].sort(sortName)+"<br>");//方法函数有两个参数，返回值<=-1——A应在B之前；返回值>-1 && <1——A、B顺序相同；返回值>=1——A应在B之后
function sortName(a,b) {
    return a - b;//升序。若降序则改”a-b“为”b-a“
}
document.writeln("<br>");
/**
 * shift()//删除并返回数组中的第一的元素
 * pop()//删除并返回数组的最后一个元素
 * unshift()//向数组开头添加一个或更多元素，并返回新的数组长度
 * push()//向数组的末尾添加一个或更多元素，并返回新的数组长度
 * reverse()//颠倒数组中的元素（会改变原数组）
 * splice()//删除元素，并向数组添加新元素
 * toSource()//返回该对象的源代码
 * toString()//把数组转化为字符串，并返回结果
 * toLocaleString()//把数组转换为本地数组，并返回结果
 * valueOf()//返回数组对象的元素值
 */

//文档对象模型DOM（Document Object Model）





