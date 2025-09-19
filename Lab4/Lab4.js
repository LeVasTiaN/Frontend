function ChangeColorOfFirstElement() {
    let elem = document.getElementById("element5");
    if (elem.style.backgroundColor == '') {
        elem.style.backgroundColor = 'green';
        elem.style.color = 'red';
    }
    else if (elem.style.backgroundColor == 'green') {
        elem.style.backgroundColor = 'yellow';
        elem.style.color = 'blue';
    }
    else {
        elem.style.backgroundColor = '';
        elem.style.color = 'black';
    }
}

function ChangeColorOfSecondElement() {
    let elem = document.querySelector("#element6");
    if (elem.style.backgroundColor == '') {
        elem.style.backgroundColor = 'grey';
        elem.style.color = 'white';
    }
    else if (elem.style.backgroundColor == 'grey') {
        elem.style.backgroundColor = 'blue';
        elem.style.color = 'yellow';
    }
    else {
        elem.style.backgroundColor = '';
        elem.style.color = 'black';
    }
}

const imageUpload = document.getElementById("uploadImage");
let imageDiv = document.getElementById("images");
imageUpload.addEventListener('change', () => {
    let file = imageUpload.files[0];
    if (file) {
        let image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        image.className = "imgElement";
        imageDiv.appendChild(image);
    }
});

function ChangeSize(e) {
    if (e == 1) {
        let image = document.querySelectorAll('img');
        image.forEach( img => {
            img.style.width = img.offsetWidth + 10;
        });
    }
    else if (e == 0) {
        let image = document.querySelectorAll('img');
        image.forEach( img => {
            img.style.width = img.offsetWidth - 10;
        });
    };
}

function DeleteFile() {
    imgList = document.getElementsByClassName("imgElement");
    if (imgList.length > 0) {
        imgList[imgList.length - 1].remove();
    }
}