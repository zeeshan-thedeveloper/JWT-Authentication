function generateToken(){
    const generatedToken = document.getElementById('tokenHolder')
    fetch('http://localhost:3000/tokenManager/generate',{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({}) // body data type must match "Content-Type" header
      })
    .then(response =>   response.json()).then((data)=>{
        generatedToken.value = data.token
    })
}

function verifyToken(){
    const tokenToVerify = document.getElementById('tokenToVerify').value
    fetch('http://localhost:3000/tokenManager/verify',{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'AuthToken':tokenToVerify
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({}) // body data type must match "Content-Type" header
      })
    .then(response =>   response.json()).then((data)=>{
       alert(data.responseMessage)
    })
}
