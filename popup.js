
var ids, wid, tid;

ids = unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]for(?:\\=([^&]*))?)?.*$", "i"), "$1")).split(".");
wid = parseInt(ids[0]);
tid = parseInt(ids[1]);

console.log(wid, tid);

//var port = chrome.tabs.connect(tid);
//port.postMessage("CONNECTED");

chrome.tabs.sendMessage(tid, "CONNECTED");

window.addEventListener("blur2", function() {
  setTimeout(function() {alert(1);
    window.focus();
  }, 1);
}, false);

var focussing = false;
window.addEventListener("focus", function() {
if (!focussing) {
  focussing = true;
  chrome.tabs.update(tid, { active: true }, function() {
    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { focused: true }, function() {
      focussing = false;
    });
  });
}
return;
chrome.windows.get(wid, function(info) {
console.log(info);
});
return;
  chrome.windows.update(wid, { focused: true }, function() {
    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { focused: true });
  });
}, false);

document.addEventListener("click", onButtonClick, false);

function onButtonClick(e) {
  if (e.target.tagName == "BUTTON") {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
      console.log(response);
    });
    e.preventDefault();
  }
}


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
console.log(request);
});