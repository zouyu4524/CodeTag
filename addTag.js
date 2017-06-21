// trancode "<" and ">" in code snippet into html coding
function transCode(text) {
    var newStr;
    newStr = text.replace(/</g, "&lt;");
    newStr = newStr.replace(/>/g, "&gt;");
    return newStr;
}

// register listener on message, fired when a sendMessage called in background
// in this function, selection is recognized and replaced with tag added context
// different tags are determined by the message sent from background
chrome.extension.onMessage.addListener(function (message, sender, callback) {
    // get selection
    var sel = window.getSelection();
    var codeWithTag;

    if (message.codetag == "block") {
        codeWithTag = "<pre><code>" + transCode(sel.toString()) + "</code></pre>";
    }
    if (message.codetag === "inline") {
        codeWithTag = "<code>" + transCode(sel.toString()) + "</code>";
    }
    var elem = document.activeElement;
    var start = elem.selectionStart;
    var end = elem.selectionEnd;
    elem.value = elem.value.slice(0, start) + codeWithTag + elem.value.substr(end);
    // Set cursor after selected text
    elem.selectionStart = start + codeWithTag.length;
    elem.selectionEnd = elem.selectionStart;
});