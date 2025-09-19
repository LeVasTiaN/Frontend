if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

function formValidation() {
    const form = document.forms['infoForm'];
    let infoDictionary = {
        "name":form['fName'].value,
        "id":form['fID'].value,
        "faculty":form['fFaculty'].value,
        "birthdate":form['fDate'].value,
        "address":form['fAddress'].value
    }
    validateInfo(infoDictionary);
}

function validateInfo(dictionary) {
    let name_re = /^[a-zA-Zа-яА-ЯіІ]+ [a-zA-Zа-яА-ЯіІ]\.[a-zA-Zа-яА-ЯіІ]\.$/;
    let id_re = /^[a-zA-Zа-яА-ЯіІ]{2} \№[0-9]{6}$/;
    let faculty_re = /^[a-zA-Zа-яА-ЯіІ]{4}$/;
    let address_re = /\м\. [a-zA-Zа-яА-ЯіІ]+/;
    let isValid = true;

    if (!name_re.test(dictionary['name'])) {
        let input_form = document.getElementsByName("fName");
        input_form[0].classList.add('invalid');
        isValid = false;
    }
    if (!id_re.test(dictionary['id'])) {
        let input_form = document.getElementsByName("fID");
        input_form[0].classList.add('invalid');
        isValid = false;
    }
    if (!faculty_re.test(dictionary['faculty'])) {
        let input_form = document.getElementsByName("fFaculty");
        input_form[0].classList.add('invalid');
        isValid = false;
    }

    if (dictionary['birthdate'] == "") {
        let input_form = document.getElementsByName("fDate");
        input_form[0].classList.add('invalid');
        isValid = false;
    }
    
    if (!address_re.test(dictionary['address'])) {
        let input_form = document.getElementsByName("fAddress");
        input_form[0].classList.add('invalid');
        isValid = false;
    }

    if (isValid) {
        document.querySelectorAll('.invalid').forEach(e => e.classList.remove('invalid'));
        outputResult(dictionary);
    }
}

function outputResult(dictionary) {
    result = document.getElementById('infoTable');
    result.style.display = 'inline-block';
    result.innerHTML = `<h2>Отримана інформація про користувача</h2>\n
                        <p><b>ПІБ</b>:<span>${dictionary["name"]}</span></p>\n
                        <p><b>ID-Card</b>:<span>${dictionary["id"]}</span></p>\n
                        <p><b>Факультет</b>:<span>${dictionary["faculty"]}</span></p>\n
                        <p><b>Дата Народження</b>:<span>${dictionary["birthdate"]}</span></p>\n
                        <p><b>Адреса</b>:<span>${dictionary["address"]}</span></p>`;
}


/*----------------------------------------------------------------------------------------------------------*/


function randomRGB(elem) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    elem.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
}

function changeColorOnClick(elem) {
    elem.style.backgroundColor = document.getElementById("colorInput").value;
}

let isColored = false;
function changeColorOnDblClick() {
    if (isColored) {
        document.querySelectorAll(".dblClick").forEach(
            e => e.style.backgroundColor = ""
        );
        isColored = false;
    }

    else {
        document.querySelectorAll(".dblClick").forEach(
            e => e.style.backgroundColor = document.getElementById("colorInput").value
        );
        isColored = true;
    }
}