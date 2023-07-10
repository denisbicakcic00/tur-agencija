const profileService = {
    load
}


async function load(id){
    const res = await fetch(`/api/profile/load?id=${id}`)
    const users = await res.json()

    return users
}

export default profileService;