const baseUri = "http://localhost:9000/api/v1";

async function synchronizeShips(token) {
    return await callPut(`${baseUri}/synchronizeShips`, null, null, token);
}

async function createSkinImagesPreviews(token) {
    return await callPost(`${baseUri}/createSkinImagesPreviews`, null, null, token);
}

async function listShips(dtoIn, pageInfo) {
    return await callPost(`${baseUri}/listShips`, dtoIn, pageInfo);
}

async function listSkins(dtoIn, pageInfo) {
    return await callPost(`${baseUri}/listSkins`, dtoIn, pageInfo);
}

async function login(username, password) {
    const base64encodedData = btoa(`${username}:${password}`);

    const response = await fetch(`${baseUri}/login`, {
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
    if (response.status !== 200) {
        if (response.status === 401) {
            throw new Error("unauthorized");
        }
        throw new Error("Unknown error");
    }
    return await response.text();
}

function getShipImageUrl(id) {
    return getImageUrl(`${baseUri}/getShipImage`, id);
}

function getSkinImageUrl(id) {
    return getImageUrl(`${baseUri}/getSkinImage`, id);
}

function getSkinImageUrlPreview(id) {
    return getImageUrl(`${baseUri}/getSkinImagePreview`, id);
}

function getSkillImageUrl(id) {
    return getImageUrl(`${baseUri}/getSkillImage`, id);
}

function getSkinBackgroundUrl(id) {
    return getImageUrl(`${baseUri}/getSkinBackground`, id);
}

function getSkinBackgroundUrlPreview(id) {
    return getImageUrl(`${baseUri}/getSkinBackgroundPreview`, id);
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

async function callPost(uri, dtoIn, pageInfo, token) {
    const request = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        //  credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        }, redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({...dtoIn, pageInfo}), // body data type must match "Content-Type" header
    }
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    const response = await fetch(uri, request);
    if (response.status !== 200 && response.status !== 201) {
        throw new Error("Server responded with status " + response.status);
    }
    return await response.json();
}

async function callPut(uri, dtoIn, pageInfo, token) {
    const request = {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        //  credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        }, redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({...dtoIn, pageInfo}), // body data type must match "Content-Type" header
    };
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(uri, request);
    if (response.status !== 200 && response.status !== 201) {
        throw new Error("Server responded with status " + response.status);
    }
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
    if (response.status !== 200 && response.status !== 201) {
        throw new Error("Server responded with status " + response.status);
    }
    return await response.json();
}

function getImageUrl(uri, id) {
    return `${uri}?id=${id}`;
}

export default {
    listShips,
    listSkins,
    getShipImageUrl,
    getShip,
    getSkinImageUrl,
    getSkinImageUrlPreview,
    getSkinBackgroundUrlPreview,
    getSkinChibiUrl,
    getSkinBackgroundUrl,
    getSkillImageUrl,
    login,
    synchronizeShips,
    createSkinImagesPreviews
}