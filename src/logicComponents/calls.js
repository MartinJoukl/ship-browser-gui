const baseUri = "http://localhost:9000/api/v1";

async function listShips(dtoIn, pageInfo) {
    return await callPost(`${baseUri}/listShips`, dtoIn, pageInfo);
}

async function getShipImage(id) {
    return await callImageGet(`${baseUri}/getShipImage`, id);
}

async function getSkinImage(id) {
    return await callImageGet(`${baseUri}/getSkinImage`, id);
}

async function getSkillImage(id) {
    return await callImageGet(`${baseUri}/getSkillImage`, id);
}

async function getSkinBackground(id) {
    return await callImageGet(`${baseUri}/getSkinBackground`, id);
}

async function getSkinChibi(id) {
    return await callImageGet(`${baseUri}/getSkinChibi`, id);
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

async function callImageGet(uri, id) {
    const response = await fetch(`${uri}?id=${id}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        //  credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "image/png",
        }, redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return await response.blob();
}

export default {
    listShips,
    getShipImage,
    getShip,
    listSkinsByShipId,
    getSkinImage,
    getSkinChibi,
    getSkinBackground,
    getSkillImage
}