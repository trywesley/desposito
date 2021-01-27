module.exports = function upload(url) {
    const data = fetch("https://api.imgur.com/3/image", {
        method: 'POST',
        headers: { 
            'Authorization': "Client-ID " + process.env.IMGUR_CLIENT_ID
        },
        body: url
    })
    .then (res => res.json())
    .then(js => js.data)
     
     return data.url
}
