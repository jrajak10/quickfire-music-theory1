




function clickStartButton() {
    let notesArray = ['C.png', 'E.png', 'G.png'];


    function randomNote(notesArray){
        let randomNum;
        for(let i=0; i< notesArray.length; i++){
            randomNum = Math.floor(Math.random(i) * notesArray.length)
        }
        return notesArray[randomNum]
    }
    

    
   
    
    if (document.getElementById("image").childNodes.length <= 8){
        let newImage = document.createElement("IMG");
        newImage.setAttribute("src", randomNote(notesArray));
        newImage.setAttribute("id", "note");
        newImage.setAttribute("height", "250");
        newImage.setAttribute("width", "250");
        newImage.setAttribute("alt", "Note");
        document.getElementById("image").appendChild(newImage);
    }
    else{
        let note = document.getElementById("note")
        note.parentNode.removeChild(note);
        let newImage = document.createElement("IMG");
        newImage.setAttribute("src", randomNote(notesArray));
        newImage.setAttribute("id", "note");
        newImage.setAttribute("height", "250");
        newImage.setAttribute("width", "250");
        newImage.setAttribute("alt", "Note");
        document.getElementById("image").appendChild(newImage);
    }
   
    
}