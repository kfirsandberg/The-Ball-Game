function onBallClick(){
    var element =document.querySelector("div")
    var currentTesxt = Number(element.innerText)
    element.style.width = currentTesxt+ 50+'px'
    element.style.height = currentTesxt+ 50+'px'
    element.innerText = currentTesxt +50
}