var btnTranslate = document.querySelector("#btn-translate");
var inputText= document.querySelector("#text-input");

var textOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function fetchUrl(input){
    return serverURL +"?" +"text=" + input
}

function clickHandler() {
    var textInput = inputText.value;
    fetch(fetchUrl(textInput))
        .then(response =>  response.json())
        .then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText; 
    })
    .catch(errorHandler);
}
function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wrong With server.. Try after some time");
}
btnTranslate.addEventListener("click", clickHandler);
