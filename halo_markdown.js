// ==UserScript==
// @name         编辑器注入_测试2222
// @namespace    http://sxh705.github.io/
// @version      0.1
// @description  尝试注入halo博客文章编辑页面
// @author       github sxh705
// @include      *admin*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @require      https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js
// @require      https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js

// ==/UserScript==

(function () {
        //'use strict';
        // Your code here...
        var reg = /^.*admin#\/posts\/.*$/
        if (!reg.test(window.location.href))
            return
        console.log("halo编辑器脚本启用. ", window.location.href)
        const stackedit = new Stackedit()

        function add_direct() {
            $('body').append(`
         <button id="7051"
         style='right: 10px;bottom: 10px;background: #1a59b7;color:#ffffff;overflow: hidden;z-index: 9999;position: fixed;padding:5px;text-align:center;width: 175px;height: 40px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;border-top-left-radius: 4px;border-top-right-radius: 4px;'>
            SE编辑器
         </button>`)
            $('#7051').click(function () {
                // Open the iframe
                stackedit.openFile({
                    name: 'Filename', // with an optional filename
                    content: {
                        text: localStorage.getItem('7051' + window.location.href)
                    }
                })
            })
        }

        setTimeout(add_direct, 2000)

        // Listen to StackEdit events and apply the changes to the textarea.
        stackedit.on('fileChange', (file) => {
            localStorage.setItem('7051' + window.location.href, file.content.text)
        })
    }
)
()
