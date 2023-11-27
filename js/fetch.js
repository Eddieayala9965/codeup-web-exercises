import {keys} from "./keys.js";
const userInfo = (username) => {
    const url = `https://api.github.com/users/${username}`;
    const options = {
        method: "GET",
        headers: {
            "Authorization": `token ${keys.github}`

        }
    };
    return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

const userCommit = (user) => {
    const url = `https://api.github.com/users/${user}/events`
    const options = {
        method: "GET",
        headers: {
            "Authorization": `token${keys.github}`
        }
    };
    return fetch (url, options)
        .then(response => response.json())
        .catch(error => console.log(error));
    // should return error vs console.log due to it showing in the main function.



}

//Main
(()=>{
userCommit("Eddieayala9965").then((events) => {
    const pushEvent = events.filter((event) => {
        return event.type === "PushEvent";
    })
    console.log(pushEvent)
    console.log(events);
    console.log(pushEvent[0].created_at);
})


})();