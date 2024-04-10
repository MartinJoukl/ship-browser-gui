const baseUri = "http://localhost:9000/api/v1";

async function listShips(dtoIn) {
    return await callPost(`${baseUri}/listShips`, dtoIn);
}

async function callPost(uri, dtoIn) {
    const response = await fetch(uri, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //  credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(dtoIn), // body data type must match "Content-Type" header
    });
    return await response.json();
}

export default {
    listShips
}