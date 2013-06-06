
document.addEventListener("click", onFileInputClick, false);

function onFileInputClick(e) {
  if (e.target.tagName == "INPUT" && e.target.type == "file") {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
      console.log(response);
    });
    e.preventDefault();
  }
}
