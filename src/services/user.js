const userService = { 
    register,
    login
}


async function register(data){
    const res = await fetch('/api/users/register', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
return await res.json()
}

async function login(data){
    const res = await fetch('/api/users/login', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
return await res.json()
}


export default userService