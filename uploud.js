const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", ()=>{
    fileInput.click();
});
fileInput.onchange = ({target}) =>{
    let file = target.files[0];
    if(file){
        let fileName = file.name;
        uploadFile(fileName);
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest(); //criando um novo obj xml(AJAX)
    xhr.open("POST", "php/upload.php"); 
    xhr.upload.addEventListener("progress", ({loaded, total}) =>{
        let fileLoaded = Math.floor((loaded / total)*100);
        let fileTotal = Math.floor(total / 1000);
        let progressHTML = '';

        console. log(fileLoaded, fileTotal);
    });
    let formData = new FormData(form);
    xhr.send(formData);
}