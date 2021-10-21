$(document).ready(function(){
	var stars=800;
	var $stars=$(".stars");
	var r=800;
	for(var i=0;i<stars;i++){
			var $star=$("<div/>").addClass("star");
			$stars.append($star);
	}
	$(".star").each(function(){
			var cur=$(this);
			var s=0.2+(Math.random()*1);
			var curR=r+(Math.random()*300);
			cur.css({
					transformOrigin:"0 0 "+curR+"px",
					transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"

			})
	})
})

x = 1;
f =2;
r = f * 1000;

x2 = 1;
f2 =2;
r2 = f2 * 5000;


var Num = new Array(f - 1);
var Chk = new Array(f - 1);
var Mess = new Array(f - 1);

var Num2 = new Array(f2 - 1);
var Chk2 = new Array(f2 - 1);
var Mess2 = new Array(f2 - 1);

var main,test,test2,test3,test4;

main = '<div class="testArea"><h2>test</h2></div>'
test = '<div class="test clearFix"><div class="fl">';
Mess[00] = '<div id="01"><figure><img src="01.png" alt=""></figure><p>스기</p></div>';
Mess[01] = '<div id="02"><figure><img src="04.png" alt=""></figure><p>삼젯스기</p></div>';
// Mess[02] = '<div id="03"><figure><img src="03.jpg" alt=""></figure><p>test3</p></div>';
// Mess[03] = '<div id="04"><figure><img src="04.jpg" alt=""></figure><p>test4</p></div>';
// Mess[04] = '<div id="05"><figure><img src="05.jpg" alt=""></figure><p>test5</p></div>';
// Mess[05] = '<div id="05"><figure><img src="05.jpg" alt=""></figure><p>test5</p></div>';
// Mess[06] = '<div id="06"><figure><img src="04.jpg" alt=""></figure><p>test6</p></div>';
// Mess[07] = '<div id="07"><figure><img src="03.jpg" alt=""></figure><p>test7</p></div>';
// Mess[08] = '<div id="08"><figure><img src="02.jpg" alt=""></figure><p>test8</p></div>';
// Mess[09] = '<div id="09"><figure><img src="01.jpg" alt=""></figure><p>test9</p></div>';

test2 = '<div class="fr">';
Mess2[00] = '<div id="10"><figure><img src="02.png" alt=""></figure><p>백야차</p></div>';
Mess2[01] = '<div id="11"><figure><img src="03.png" alt=""></figure><p>구미긴</p></div>';
// Mess2[02] = '<div id="12"><figure><img src="03.jpg" alt=""></figure><p>test3</p></div>';
// Mess2[03] = '<div id="13"><figure><img src="02.jpg" alt=""></figure><p>test4</p></div>';
// Mess2[04] = '<div id="14"><figure><img src="01.jpg" alt=""></figure><p>test5</p></div>';
// Mess2[05] = '<div id="14"><figure><img src="01.jpg" alt=""></figure><p>test5</p></div>';
// Mess2[06] = '<div id="15"><figure><img src="02.jpg" alt=""></figure><p>test6</p></div>';
// Mess2[07] = '<div id="16"><figure><img src="03.jpg" alt=""></figure><p>test7</p></div>';
// Mess2[08] = '<div id="17"><figure><img src="04.jpg" alt=""></figure><p>test8</p></div>';
// Mess2[09] = '<div id="18"><figure><img src="05.jpg" alt=""></figure><p>test9</p></div>';
test3 = '</div>';
test4 = '</div></div>';


num=Math.round(Math.random()*r) - 1;

if(Mess[num]){
	document.write(Mess[num]);
}else{
	for (i=0;i<f;i++) {
		Num[i] = Math.floor(Math.random()*f);
		if (Chk[Num[i]]  === 1){
			while(Chk[Num[i]] === 1){
			Num[i] = Math.floor(Math.random()*f);
			}
			Chk[Num[i]] = 1;
		}
		else {
			Chk[Num[i]] = 1;
		}
	}
}

for(i=0;i<x;i++){
	document.write(main);
	document.write(test);
	document.write(Mess[Num[i]]);
	document.write(test3);
}

num2=Math.round(Math.random()*r2) - 1;

if(Mess2[num2]){
	document.write(Mess2[num2]);
}else{
	for (j=0;j<f2;j++) {
		Num2[j] = Math.floor(Math.random()*f2);
		if (Chk2[Num2[j]]  === 1){
			while(Chk2[Num2[j]] === 1){
			Num2[j] = Math.floor(Math.random()*f2);
			}
			Chk2[Num2[j]] = 1;
		}
		else {
			Chk2[Num2[j]] = 1;
		}
	}
}

	for(j=0;j<x2;j++){
		document.write(test2);
		document.write(Mess2[Num2[j]]);
		document.write(test4);
	}


