import React from "react";
import userService from '@/services/user'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/router'
import bcrypt from 'bcryptjs'

function Register(){
    const router = useRouter();
    const [message, setMessage] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
    
        const kupac = await userService.register(data);
    
        if (kupac.status === 500) {
          return setMessage(kupac.message);
        }
    
        router.push('/users/login');
    };
    
    return (
        <>
        <div class="forma" style={{ margin: '20px', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: '400px', color: "white", backgroundColor: '#F94144', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h2>REGISTRACIJA</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ margin: '20px', width: '400p', xdisplay: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ height: '60px', width: '400px', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="ime">Ime:</label>
                        <input type="text" id="ime" name="ime" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("ime")}></input>
                    </div>
                    <div style={{ height: '60px', width: '400p', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="prezime">Prezime:</label>
                        <input type="text" id="prezime" name="prezime" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("prezime")}></input>
                    </div>
                    <div style={{ height: '60px', width: '400p', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("email")}></input>
                    </div>
                    <div style={{ height: '60px', width: '400p', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="Password">Password:</label>
                        <input type="password" id="password" name="password" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("password")}></input>
                    </div>
                    <div style={{ height: '60px', display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: '#F94144' }}>
                        <button type="submit" style={{ height: '25px', width: '100px', borderRadius: '10px', border: 'none', outline: 'none', padding: '5px' }}>Registruj se</button>
                    </div>
                </div>
            </form>

        </div>
        </>
    );
}

export default Register;