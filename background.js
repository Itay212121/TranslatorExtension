/*
This function takes text to be translated, sending an api call to a
translator api and sends the translated text to the content script
@param text - the text to be translated
*/
function translateText(text){

    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|he`).then(res => res.json()).then(data => {

        var translatedText = data.responseData.translatedText;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if(tabs.length > 0){
                chrome.tabs.sendMessage(tabs[0].id, {from: text, translated: translatedText});
            }
        });
});
    
}
/*
This function will be called once the extension is getting called
@param info , tab - parameter containing information about the website
*/
function onTextClick(info , tab){
    let textToTranslate = info.selectionText; // the selected text
    translateText(textToTranslate);
}




chrome.contextMenus.create({
    "contexts": ["selection"],
    "title": "Translate this text",
    "onclick": onTextClick
});