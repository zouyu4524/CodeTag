// parent menu
var parent = chrome.contextMenus.create({
        "title": "Code Tag",
        "contexts": ["selection"]
    });

// sub-menu for block style
chrome.contextMenus.create({
    "title": "Block",
    "parentId": parent,
    "contexts": ["selection"],
    "onclick": function (info, tab) {
        if (info.editable) {
            chrome.tabs.query({
                "active": true,
                "currentWindow": true
            }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    // codetag message, indicating block style
                    "codetag": "block"
                });
            });
        }
    }
});

// sub-menu for inline style
chrome.contextMenus.create({
    "title": "Inline",
    "parentId": parent,
    "contexts": ["selection"],
    "onclick": function (info, tab) {
        if (info.editable) {
            chrome.tabs.query({
                "active": true,
                "currentWindow": true
            }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    // codetag message, indicating inline style
                    "codetag": "inline"
                });
            });
        }
    }
});