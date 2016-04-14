function saveSelection() {
    var sel = window.getSelection();
    return sel.getRangeAt(0);
}
function restoreSelection(range) {
    if (range) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}
function getDivAtCursor() {
    if (window.getSelection().focusNode.nodeType==3) // TEXT node
	return window.getSelection().focusNode.parentNode;
    else
	return window.getSelection().focusNode;
}
function clearDivAtCursor() {
    getDivAtCursor().innerHTML='';
}
function insertTextAtCursor(text) {
    var sel, range, html;
    sel = window.getSelection();
    range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode( document.createTextNode(text) );
}
function insertTextAtCursor2(text) { // moves cursor
    var sel, range, html; 
    sel = window.getSelection();
    range = sel.getRangeAt(0); 
    range.deleteContents(); 
    var textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    sel.removeAllRanges();
    sel.addRange(range);        
}
function deleteBackwardChar(){
    try{
	print("REALLY DELETE THAT THING");
	var sel = window.getSelection();
	//console.log("SEL =", sel);
	var range = sel.getRangeAt(0); 
	//range.deleteContents()
	console.log("RNG =", range);
	var common = range.commonAncestorContainer;
	console.log("RCOM =", range.commonAncestorContainer.nodeType, 
		    range.commonAncestorContainer);
	console.log("COM =", common.nodeType, common);

	console.log("STA =", range.startOffset, range.startContainer);
	//console.log("END =", range.endOffset, range.endContainer);

	console.log("RNG2 =", range);
	
	var parent;
	if(common.nodeType==3){
	    print("common type is 3!!! (get real parent)");
	    var parent = range.startContainer.parentNode;    
	    parent.removeChild(common);
	} else {
	    print("common type is NOT 3!!!");
	    var parent = range.startContainer;
	    console.log("new parent !!!", parent);
	    console.log("RNG3 =", range);
	    console.log("RNG4 =", range.startContainer);
	    console.log("RNG5 =", range.startOffset);
	    console.log("RNG6 =", range.startContainer.childNodes);

	    var offset = 0;
	    var x = range.startContainer.childNodes.item(range.startOffset-offset);
	    console.log("RNG8 =", x);
	    console.log("RNG8.1 =", x.nodeValue);

	    while (x.nodeValue===""){
		parent.removeChild(x);
		offset++;
		x = range.startContainer.childNodes.item(range.startOffset-offset);
		console.log("RNG8 =", x);
		console.log("RNG8.1 =", x.nodeValue);
	    }
    
	    parent.removeChild(x);
	    console.log("RNG99 =", parent);
	}
    }catch(e){
	console.log(e);
    }
}
module.exports={saveSelection:      saveSelection,
		restoreSelection:   restoreSelection,
		deleteBackwardChar: deleteBackwardChar,
		clearDivAtCursor:   clearDivAtCursor,
		insertTextAtCursor: insertTextAtCursor,
		insertTextAtCursor2:insertTextAtCursor2,}
