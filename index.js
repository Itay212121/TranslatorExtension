/*
This function takes messages from the background, and replaces appearances of the text to the translated text
*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let baseHTML = document.body.innerHTML;
    var from = request.from;
    var translated = request.translated;
    document.body.innerHTML = document.body.innerHTML.replaceAll(from, translated);
    setTimeout(() => {
        document.body.innerHTML = baseHTML; //reloading the page to be the text it was before
    }, 30000);
});
