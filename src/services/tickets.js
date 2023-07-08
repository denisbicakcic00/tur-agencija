const ticketService = { 
    buy
}


async function buy(data){
    const res = await fetch('/api/tickets/buy', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
return await res.json()
}

export default ticketService;