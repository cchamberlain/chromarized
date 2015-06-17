/*
 global.chrome.extension.sendMessage({}, function(response) {
 console.log(response);
 var readyStateCheckInterval = setInterval(function() {
 if (global.document.readyState === "complete") {
 clearInterval(readyStateCheckInterval);

 var allcolors = require('./allcolors');
 console.log('- allcolors -');
 console.dir(allcolors());
 }
 }, 10);
 });


 //example of using a message handler from the inject scripts
 chrome.extension.onMessage.addListener(
 function(request, sender, sendResponse) {
 chrome.pageAction.show(sender.tab.id);
 sendResponse();
 });
 */

var allcolors = require('./allcolors');
console.log('- allcolors -');
console.dir(allcolors());
