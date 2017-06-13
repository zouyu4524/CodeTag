function copyToClipboard(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
	//document.execCommand("delete");
	//document.execCommand("insertText", false, text);
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