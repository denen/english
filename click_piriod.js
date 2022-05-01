document.onselectionchange = function (){
	var selection = getSelection();
	oP = selection.anchorNode;
	click = selection.anchorOffset;
	console.log(oP);
	console.log("click : "+click);
	//2つのレンジに分割
	range1 = document.createRange();
	range2 = document.createRange();
	//range1は0からクリックまで
	range1.setStart(oP,0);
	range1.setEnd(oP,click);
	//range2はclick+1から文字数まで
	textlength = oP.length;
	range2.setStart(oP,click+1);
	range2.setEnd(oP,textlength);
	//ピリオドの位置を探す
	piriod1 = range1.toString().lastIndexOf(".");//
	piriod2 = range2.toString().indexOf(".");//
	//最後から検索する
	cRange = document.createRange();
	piriod1 = piriod1+1;
	piriod2 = click+piriod2+2;
	console.log("piriod1 : "+piriod1);
	console.log("piriod2 : "+piriod2);
	cRange.setStart(oP,piriod1);
	cRange.setEnd(oP,piriod2);
	console.log(cRange.toString());
}
