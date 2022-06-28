/*
This function takes messages from the background, and replaces appearances of the text to the translated text
*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    from = request.from;
    translated = request.translated;
    document.body.innerHTML = document.body.innerHTML.replaceAll(from, translated);
});
