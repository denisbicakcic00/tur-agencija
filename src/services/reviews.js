const reviewsService = {
    load
}


async function load(){
    const res = await fetch('/api/reviews/load')
    const reviews = await res.json()

    return reviews
}

export default reviewsService