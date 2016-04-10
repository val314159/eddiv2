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
module.exports={saveSelection:      saveSelection,
		restoreSelection:   restoreSelection,
		clearDivAtCursor:   clearDivAtCursor,
		insertTextAtCursor: insertTextAtCursor,
		insertTextAtCursor2:insertTextAtCursor2,}
