undef=undefined
var P=require("eel-parser");
var C=require("eel-compiler");
print=function(){
    var a=[];
    for(var n=0;n<arguments.length;n++)
	a.push(arguments[n])
    document.write("<li>" + a)
}
KeyDecoder=require('./keydecoder.js');
DivUtils  =require('./divutils.js');
KeyMappify=require('./keymappify.js');

setTimeout(function(){
    document.write("<pre id='t' contenteditable=true>\n\n</pre>");
    document.write("<pre id='m' contenteditable=true> U:**---  app.js-------BOT  L164----[(Javascript)]------------------------------\n</pre>");
    document.write("<pre id='e' contenteditable=true>\n</pre>");
    t = document.getElementById('t'); // text area
    m = document.getElementById('m'); // mode line
    e = document.getElementById('e'); // echo area / mini buffer
    t.focus();
    var keyDecoder = new KeyDecoder(KeyMappify.isDone,KeyMappify.done);
    t.onkeydown = keyDecoder.d.bind(keyDecoder);
    t.onkeypress= keyDecoder.p.bind(keyDecoder);
    var keyDecoder2= new KeyDecoder(KeyMappify.isDone,KeyMappify.doneMinibuf);
    e.onkeydown = keyDecoder2.d.bind(keyDecoder2);
    e.onkeypress= keyDecoder2.p.bind(keyDecoder2);
},5);
