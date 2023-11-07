document
    .getElementById("githubForm")
    .addEventListener("submit", onSubmit);

async function onSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("githubForm");
    const email = document.getElementById("email");
    const githubRepoUrl = document.getElementById("githubRepoUrl");

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
        .then(response => {
            if (!response.ok) {
                return response.json().then(response => {
                        throw new Error(response.error || "Something went wrong");
                });
            }
            return response.json();
        })
        .then(result => {
            alert(result.message);
            form.reset();
        })
        .catch(error => {
            alert(error.message);
            console.error("Error:", error.message)
        });
}