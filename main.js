// ==UserScript==
// @name         超星原画讲坛
// @namespace    https://qinlili.bid
// @version      0.1
// @description  自动切换到原画画质
// @author     琴梨梨
// @match        *://pro.superlib.com/pc/video/video/play?*
// @icon         http://cs.ananas.chaoxing.com/favicon.ico
// @grant        none
//@run-at        document-body
// ==/UserScript==

(function() {
    'use strict';
    var targetNode = document.body;
    var observer = new MutationObserver(function(){
        if((document.querySelector("#player > source").src.indexOf("chaoxing")>1)){
            document.querySelector("#player").src="https://cs.ananas.chaoxing.com/download/"+document.querySelector("#player > source").src.substring(0,document.querySelector("#player > source").src.indexOf("?")).substring(0,document.querySelector("#player > source").src.substring(0,document.querySelector("#player > source").src.indexOf("?")).lastIndexOf("/")).substring(document.querySelector("#player > source").src.substring(0,document.querySelector("#player > source").src.indexOf("?")).substring(0,document.querySelector("#player > source").src.substring(0,document.querySelector("#player > source").src.indexOf("?")).lastIndexOf("/")).lastIndexOf("/")+1);
            document.querySelector("#player").removeChild(document.querySelector("#player > source"))
            document.querySelector("#player").poster="data:image/png;base64,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";

        }
    });
    observer.observe(targetNode, { attributes: true, childList: true });

})();
