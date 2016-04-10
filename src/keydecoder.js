function KeyDecoder(isDoneCb, doneCb){
    this.cache    = "";
    this.isDoneCb = isDoneCb;
    this.doneCb   = doneCb;
}
KeyDecoder.prototype.d=function(e){
    var x = keyEvent2str(e);
    if(x){
	this.cache=this.cache?this.cache+" "+x:x;
	if(!this.isDoneCb(this.cache)){
	    print(this.cache);
	    return false;
	}
	try{
	    this.doneCb(this.cache);
	}catch(e){
	    print("ERR");
	}
	this.cache="";
	return false;
    }
};
KeyDecoder.prototype.p=function(e){
    var x = keyEvent2str(e);
    if(x){
	this.cache=this.cache?this.cache+" "+x:x;
	if(!this.isDoneCb(this.cache)){
	    print(this.cache);
	    return false;
	}
	try{
	    this.doneCb(this.cache);
	}catch(e){
	    print("ERR");
	}
	this.cache="";
	return false;
    }
};
function keyEvent2str(e){
    if(e.keyCode==16)return;//shift
    if(e.keyCode==17)return;//ctl
    if(e.keyCode==18)return;//alt
    if(e.keyCode==20)return "ESC";//caps lock
    if(e.keyCode==20)return;//caps lock
    if(e.keyCode==91)return;//left os
    if(e.keyCode==93)return;//right os
    var ident = e.keyIdentifier;
    if(e.keyCode==27){
	return "ESC";
    }else if(e.keyCode==9){
	var s="TAB";
	if(e.shiftKey   ){s="S-"+s;}
	return s;
    }else if(e.keyCode==8){
	var s="DEL";
	if(e.shiftKey   ){s="S-"+s;}
	if(e.altKey     ){s="M-"+s;}
	if(e.altGraphKey){s="G-"+s;}
	if(e.ctrlKey    ){s="C-"+s;}
	return s;
    }else if(e.keyCode==32){
	var s="SPC";
	if(e.shiftKey   ){s="S-"+s;}
	if(e.altKey     ){s="M-"+s;}
	if(e.altGraphKey){s="G-"+s;}
	if(e.ctrlKey    ){s="C-"+s;}
	return s;
    }else if(ident==='Enter'){
	var s="RET";
	if(e.shiftKey   ){s="S-"+s;}
	if(e.altKey     ){s="M-"+s;}
	if(e.altGraphKey){s="G-"+s;}
	if(e.ctrlKey    ){s="C-"+s;}
	return s;
    }
    if(e.charCode)
	return String.fromCharCode(e.charCode);
    if((e.ctrlKey||e.altKey) && e.keyCode) {
	var c=String.fromCharCode(e.keyCode).toLowerCase();
	if(e.shiftKey&&(c<'a'||c>'z')) c="S-"+c;
	if(e.ctrlKey) c="C-"+c;
	if(e.altKey)  c="M-"+c;
	return c;
    }
}
module.exports=KeyDecoder;
