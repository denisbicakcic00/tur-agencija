    import { setAccessToken } from "@/utils/auth";

    const storeToken = (token) => {
        localStorage.setItem('accessToken', token);
    };

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

    async function login(data) {
        try {
        const response = await fetch('/api/users/login', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            const { token } = await response.json();
            storeToken(token); // Spremanje tokena u lokalno skladište
            return true;
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
        } catch (error) {
        throw new Error('Greška prilikom prijave korisnika');
        }
    }


    export default userService