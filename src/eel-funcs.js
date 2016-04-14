DivUtils  =require('./divutils.js');
$empty_buffer=function(){
    DivUtils.clearDivAtCursor();
}
$insert=function(s){
    DivUtils.insertTextAtCursor2(s);
}
var escape2=require('escape2');
$insert_file_contents=function(FILENAME,completeCallback){
    print("INSERT FILE CONTENTS ", FILENAME);
    $empty_buffer();
    var http = require('http');
    http.get({ path : 'src/app.js' }, function (res) {
	print('GET src/app.js');
	res.on('data', function (buf) {
            $insert(escape2.encode(String(buf)));
	});
	res.on('end', function () {
            print('__END__');
	    completeCallback();
	});
    });
}
$find_file=function(filename, wildcards){
    print("FIND FILE");
    e.focus(); // focus on echo area
    $insert("src/app.js");
}
$next_window=function(WINDOW,MINIBUF,ALL_FRAMES){
    print("NEXT WINDOW");
}
$save_buffer=function(){
    print("SAVE BUFFER");
}
$other_window=function(count, all_frames){
    print("OTHER WINDOW");
    $next_window();
}
$delete_backward_char=function(count, all_frames){
    print("DELETE BACKWARD CHAR");
    DivUtils.deleteBackwardChar();    
}
