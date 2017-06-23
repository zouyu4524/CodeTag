# 简介

在html的编辑页面为所选内容添加指定的html标签。例如为某段代码添加\<code\>...\</code\>标签
Chrome插件下载地址： [Code Tag](https://chrome.google.com/webstore/detail/code-tag/nglfhnmgedigeapkbmmgcngomahhbdol)

# 开发日志

## 2017-06-14

通过copy方法结合info.selectionText属性实现了文本内容的复制；然后通过复制（Ctrl+V）操作将内容粘贴至所选位置（替换原本内容）

问题：selectionText 将替换所选文本内容中的换行符为空格，导致失去多行格式，不符合要求。

## 2017-06-20

明确了background与content script间的区别，通过Messaging的方式建立两者间的联系从而实现对所选内容的直接替换

## 2017-06-23

上传至谷歌应用商店