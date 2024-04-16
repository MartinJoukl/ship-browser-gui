const baseUri = "http://localhost:9000/api/v1";

async function listShips(dtoIn, pageInfo) {
    return await callPost(`${baseUri}/listShips`, dtoIn, pageInfo);
}

async function login(username, password) {
    const base64encodedData = btoa(`${username}:${password}`);

    return await fetch(`${baseUri}/login`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        //  credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Basic ${base64encodedData}`
        }, redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
}

function getShipImageUrl(id) {
    return getImageUrl(`${baseUri}/getShipImage`, id);
}

function getSkinImageUrl(id) {
    return getImageUrl(`${baseUri}/getSkinImage`, id);
}

function getSkillImageUrl(id) {
    return getImageUrl(`${baseUri}/getSkillImage`, id);
}

function getSkinBackgroundUrl(id) {
    return getImageUrl(`${baseUri}/getSkinBackground`, id);
}

function getSkinChibiUrl(id) {
    return getImageUrl(`${baseUri}/getSkinChibi`, id);
}

async function getShip(id) {
    return await callGet(`${baseUri}/getShip`, {id: id});
}

async function listSkinsByShipId(id) {
    return await callGet(`${baseUri}/listSkinsByShipId`, {shipId: id});
}

async function callPost(uri, dtoIn, pageInfo) {
    const response = await fetch(uri, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        //  credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        }, redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({...dtoIn, pageInfo}), // body data type must match "Content-Type" header
    });
    return await response.json();
}

async function callGet(uri, dtoIn) {
    if (Object.keys(dtoIn).length > 0) {
        uri += "?";
        for (const key in dtoIn) {
            uri += `${key}=${dtoIn[key]}&&`
        }
        uri = uri.slice(0, uri.length - 2);
    }
    const response = await fetch(uri, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        //  credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        }, redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return await response.json();
}

function getImageUrl(uri, id) {
    return `${uri}?id=${id}`;
}

export default {
    listShips,
    getShipImageUrl,
    getShip,
    listSkinsByShipId,
    getSkinImageUrl,
    getSkinChibiUrl,
    getSkinBackgroundUrl,
    getSkillImageUrl,
    login
}