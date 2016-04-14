undef=undefined
require('./eel-funcs.js');
function isDone(s){
    if(s==="")
	return false;
    if(s==="C-x" || s==="C-c")
	return false;
    if(s==="C-h" || s==="C-h k")
	return false;
    if(s==="ESC" || s==="ESC ESC")
	return false;
    if(s==="ESC :" || s==="ESC !")
	return false;
    if(s==="ESC x")
	return false;
    if(s==="M-x")
	return false;
    if(s==="C-x C-x")
	return false;
    return true;
}
function done(x){
    if(x==='TAB')$insert('\t');
    else if(x==='RET')$insert('\n');
    else if(x==='SPC')$insert(' ');
    else if(x==='DEL')$delete_backward_char();
    else if(x==='C-x C-s')$save_buffer();
    else if(x==='C-x C-f')$find_file();
    else if(x==='C-x o')$other_window();
    else $insert(x);
}
function doneMinibuf(x){
    print(x)
    if(x==='RET'){
	print("REALLY LOAD IT", e.innerHTML);
	$empty_buffer();
	t.focus();
	$insert_file_contents(e.innerHTML);
    }else if(x==='SPC')$insert(' ');
    else if(x==='DEL')$delete_backward_char();
    else if(x==='C-x C-s')$save_buffer();
    else if(x==='C-x C-f')$find_file();
    else if(x==='C-x o')$other_window();
    else $insert(x);
}
module.exports.isDone     =isDone;
module.exports.done       =done;
module.exports.doneMinibuf=doneMinibuf;
