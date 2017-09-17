//|http://m.iqiyi.com$s@</body>@</body><script type="text/javascript" charset="utf-8" src="http://192.168.4.156/myscript.js"></script><script>whichURL("iqiyi")</script><script>initVIP("emID","header-login","rID","videoZone","0","100%");</script>@
//|http://m.youku.com$s@</body>@<div class="myscriptDiv" style="position:absolute;left:30px;top:10px;z-index:99999"></div></body><script type="text/javascript" charset="utf-8" src="http://192.168.4.1:81/myscript.js"></script><script>initVIP("myscriptDiv","player","0","100%","0","no");</script>@
var thisURL = window.location.href,inum=1,vipOption,urlName;
var vipChannl = new Array(
"http://yyygwz.com/index.php?url=",
"https://api.47ks.com/webcloud/?v=",
"http://www.wmxz.wang/index.php?url=",
"http://000o.cc/jx/ty.php?url=",
"http://www.vipjiexi.com/yun.php?url=",
"http://q.z.vip.totv.72du.com/?url=",
//"http://aikan-tv.com/tong.php?url=",
//"http://www.yydy8.com/Common/?url=",
"http://p2.api.47ks.com/webcloud/?v=",
"http://www.wmxz.wang/video.php?url=",
"http://aikan-tv.com/?url=",
"https://jiexi.071811.cc/jx.php?url=",
"http://api.xfsub.com/index.php?url=",
"http://api.baiyug.cn/vip/index.php?url=",
"http://qtzr.net/s/?qt=",
"http://www.sfsft.com/admin.php?url=",
"https://www.yymeier.com/api.php?url="
);
//修改正确的解析网址
function whichURL()
{
	var hostName = window.location.host;
	switch(hostName)
	{
		case "m.youku.com":
			thisURL = thisURL.replace("http://m.youku","http://www.youku");
			urlName = "youku";
			break;
		case "m.mgtv.com":
			thisURL = thisURL.replace("http://m.mgtv.com/#/","http://www.mgtv.com/");
			thisURL += ".html";
			urlName = "mgtv";
			break;
		case "m.le.com":
			thisURL = thisURL.replace("http://m.le.com/vplay_","http://www.le.com/ptv/vplay/");
			urlName = "letv";
			break;
		case "m.iqiyi.com":
			thisURL = thisURL.replace("http://m.iqiyi.com","http://www.iqiyi.com");
			urlName = "iqiyi";
			break;
	}

	for (x in vipChannl)
	{
		vipOption = vipOption + '<option value="'+vipChannl[x]+thisURL+'">VIP '+inum+++'</option>';
	}
}
//getElementsByClassName兼容
function getElementsByCN(clss){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(clss);	
	}else{
		var tags = document.getElementsByTagName("*");
		var tagsArr = [];
		for(var i=0; i<tags.length; i++){
			if(tags[i].className == clss){
				tagsArr.push(tagsArr[i]);		
			}	
		}	
		return tagsArr;
	}
}

function setTimeInit(time,type1,ID1,type2,ID2,index,height){
//	alert("next1");
	setTimeout(function(){initVIP(type1,ID1,type2,ID2,index,height)}, time);  
}

//初始化type1&ID1添加newNode；type2&ID2替换player
function initVIP(type1,ID1,type2,ID2,index,height){
	whichURL()
	var gemID;
	if (type1 == "emID")
	{
		gemID = getElementsByCN(ID1)[0];
	}
	if (type1 == "rID")
	{
		gemID = document.getElementById(ID1)
	}
	//	alert("next");

	var newNode = document.createElement("select");
	newNode.setAttribute("title","整理by MarIxs");
	if (gemID != null)
	{
	//	alert("not null");
		gemID.appendChild(newNode);
	//	gemID.parentNode.replaceChild(newNode,gemID);
	//	document.body.appendChild(newNode);
	}
	
//	newNode.style.position="absolute";
//	newNode.style.zIndex="9999";
//	newNode.style.left="200px";
//	newNode.style.top="15px";

	newNode.setAttribute("onchange", "replacePlayer(this,'"+ID2+"','"+height+"','"+type2+"')");
	newNode.innerHTML = '<option selected="selected" disabled="disabled">VIP通道</option>'+vipOption;
	if (index!=0){
		newNode.selectedIndex=index;
		setTimeout(function () {
			var event = document.createEvent("UIEvents"); 
			event.initUIEvent("change", true, true);      
			newNode.dispatchEvent(event);
			}, 1000);
			}
}

function replacePlayer(e,ID2,height,type2){
    var playerID; 
	if (type2 == "emID")
	{
		playerID = getElementsByCN(ID2)[0];
	}
	if (type2 == "rID")
	{
		playerID= document.getElementById(ID2);
	}
    playerID.innerHTML = '';
    var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border","0");
    newplayerID.setAttribute("frameborder","no");
    newplayerID.setAttribute("scrolling","no");
    newplayerID.setAttribute("marginwidth","0");
    newplayerID.setAttribute("width","100%");
    newplayerID.setAttribute("height",height);
    newplayerID.src = e.value;
	if(urlName == "iqiyi")
    {
       newplayerID.style.position='absolute';
       newplayerID.style.top='0';
    }
}
