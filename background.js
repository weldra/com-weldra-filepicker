
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  var cmd = request.cmd, popupId;
console.log('sender', sender);
  switch (cmd) {
    case 'focus':
      //chrome.windows.getLastFocused(function(w) {console.log(w);
      chrome.windows.update(request.popupId, { focused: true });
//});
      return;
  }

  console.log(request);
  //sendResponse({ file: 'abc' });

  var w = 440,
      h = 220,
      left = (screen.width/2)-(w/2),
      top = (screen.height/2)-(h/2); 

  chrome.windows.create({
      url: chrome.extension.getURL("popup.html?for=" + sender.tab.windowId + "." + sender.tab.id), type: "popup", "width": w, "height": h, "left": left, "top": top
    },
    function(w) {
      popupId = w.id;
      //sendResponse({ popupId: w.id });
    console.log(w);
  });

  //return true;
});