var btnTranslate = document.querySelector("#btnTranslate")
var txtInput = document.querySelector("#txtInput")
var output = document.querySelector("#output")
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text)
{
    console.log(serverURL+"?" + "text="+text)
    return serverURL+"?" + "text="+text;
}""
function catchHandler(error)
{
    console.log(error)
    alert("Something wrong with the server. Please try again after some time")
}

function eventHandler() 
{
        console.log("Clicked");
        fetch(getTranslatedURL(txtInput.value))
        .then(response=> response.json())
        .then(json => {
            output.innerText = json.contents.translated
        })
        .catch(catchHandler)
};

btnTranslate.addEventListener("click", eventHandler);
