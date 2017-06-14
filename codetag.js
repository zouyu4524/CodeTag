function copyToClipboard(text) {
	// window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
	copy(text);
	//paste();
}

var parent = chrome.contextMenus.create({
		"title": "Code Tag",
		"contexts": ["selection"]
	});

chrome.contextMenus.create({
		"title": "Block",
		"parentId": parent,
		"contexts": ["selection"],
		"onclick": function(info, tab) {
			if (info.editable){
					copyToClipboard("<pre><code>" + info.selectionText + "</pre></code>");
			}
		}
});

chrome.contextMenus.create({
		"title": "Inline",
		"parentId": parent,
		"contexts": ["selection"],
		"onclick": function(info, tab) {
			if (info.editable){
					copyToClipboard("<code>" + info.selectionText + "</code>");
			}
		}
});

function copy(str) {
    var sandbox = $('#sandbox').val(str).select();
    document.execCommand('copy');
    sandbox.val('');
}

function paste() {
    var result = '',
        sandbox = $('#sandbox').val('').select();
    if (document.execCommand('paste')) {
        result = $("#sandbox").val();
    }
    sandbox.val('');
    return result;
}