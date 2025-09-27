function getInfo() {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        const info = data["results"][0];
        const name = info["name"];
        let userInfo = {
            "picture": info["picture"]["large"],
            "name": `${name["title"]} ${name["first"]} ${name["last"]}`,
            "city": info["location"]["city"],
            "postcode": info["location"]["postcode"],
            "phone": info["phone"]
        };
        console.log(userInfo);
        outputUser(userInfo);
    })
    .catch(err => {
        console.error("Error fetching user:", err);
        alert("Could not load user data. Please try again later.");
    });
}

function outputUser(user) {
    let container = document.getElementById('userTable');

    container.innerHTML +=`  <div class="userDIV">
                            <img class="userImg" src="${user["picture"]}">
                            <p class="userInfo">${user["name"]}</p>
                            <p class="userInfo">${user["city"]}</p>
                            <p class="userInfo">${user["postcode"]}</p>
                            <p class="userInfo">${user["phone"]}</p>
                        </div>`
}

function deleteUser() {
    let users = document.getElementsByClassName('userDIV');
    if (users.length > 0) {
        users[users.length - 1].remove();
    }
}

function deleteAll() {
    let users = document.querySelectorAll('.userDIV');
    users.forEach(e => {e.remove()});
}