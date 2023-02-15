//! fetch API - It will return promise - so, we can use then, catch and finally block.
//! res.json() - It will also return promise - so, we can use then, catch and finally block.


let article = document.querySelector("article")

fetch("https://api.github.com/users")
    .then(res => {
        //? console.log(res);
        res.json()
            .then(data => {
                //? console.log(data);
                data.map(value => {
                    //* console.log(value);
                    let { avatar_url, login, html_url } = value;
                    //* console.log(avatar_url, login, html_url);
                    article.innerHTML += `
                    <div class="card">
                        <img src="${avatar_url}" alt="">
                        <h2>${login}</h2>
                        <a href="${html_url}" target="blank">Go to Profile</a>
                    </div>`;
                })
            })
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("Server responded ....");
    })
