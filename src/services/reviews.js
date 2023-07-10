const reviewsService = {
    load,
    post
}


async function load(){
    const res = await fetch('/api/reviews/load')
    const reviews = await res.json()

    return reviews
}

async function post(data){
    const res = await fetch('/api/reviews/post', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
return  res.json()
}


export default reviewsService