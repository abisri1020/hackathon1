document.body.innerHTML = `<section class="user-container"></section>`;
async function getAllUsers() {
    let data = await fetch("https://617128f9c20f3a001705fb0b.mockapi.io/users");
    let users = await data.json();
    let userContainer = document.querySelector(".user-container");
    users.forEach((user) => {
        let x = user.name;
        if (user.name == x) {
            userContainer.innerHTML += `
            <h3>${user.country[0].country_id}</h3>
            <h3>${user.country[0].probability}</h3>
            <h3>${user.country[1].country_id}</h3>
            <h3>${user.country[1].probability}</h3>
            <br>
            `;
        } else {
            userContainer.innerHTML += `
            <h3>user not found</h3>
            `;
        }
    });
    console.log(users);
}
getAllUsers();