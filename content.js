

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
console.log(request);
});

document.addEventListener("click", onFileInputClick, false);

function onFileInputClick(e) {
  if (e.target.tagName == "INPUT" && e.target.type == "file") {
    //window.addEventListener("focus", onFocus, true);

/*  var w = 440,
      h = 220,
      left = (screen.width/2)-(w/2),
      top = (screen.height/2)-(h/2);
    window.open(chrome.extension.getURL("popup.html"), "Open", "width="+w+",height="+h+",top="+top+",left="+left+",resizable,scrollbars,status");*/

    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
      if (response.popupId) {
        popupId = response.popupId;
      }
      console.log(response);
    });
    e.preventDefault();
  }
}
var popupId;
function onFocus(e) {
  console.log("restore focus to " + popupId);
  chrome.runtime.sendMessage({ cmd: "focus", popupId: popupId }, function(response) {
    console.log(response);
  });
e.preventDefault();
return false;
}
