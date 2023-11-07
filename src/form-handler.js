async function logMovies() {
    const response = await fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge");
    const movies = await response.json();
    console.log(movies);
}

document
    .getElementById("githubForm")
    .addEventListener("submit", onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    let email = document.getElementById("email");
    let githubRepoUrl = document.getElementById("githubRepoUrl");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        email,
        githubRepoUrl
    });

    const requestOptions = {
        method: "POST",
        headers: headers,
        body: raw
    };

    fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}