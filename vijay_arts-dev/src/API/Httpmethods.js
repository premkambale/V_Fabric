export const APImethod = async (url, token, body, method) => {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    if (method === "POST" || method === "PUT") {
        options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);
    return await res.json();
};