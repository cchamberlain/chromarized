




chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      var allcolors = require('./allcolors');
      console.log('- allcolors -');
      console.dir(allcolors);
    }
  }, 10);
});