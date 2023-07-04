import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { useState } from 'react';
import userService from '@/services/user';

const Login = () =>{
  const router = useRouter();
  const [message, setMessage] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
      const kupac = await userService.login(data);
  
      if (kupac.status === 500) {
        return setMessage(kupac.message);
      }
        router.push('/');
  };
    return (
        <>
        <div class="forma" style={{margin: '20px', display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            <div style={{width: '400px', color: "white", backgroundColor: '#F94144',display: "flex", alignItems:"center", justifyContent: "center"}}>
            <h2>LOGIN</h2>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{margin: '20px', width: '400p',xdisplay:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
                <div style={{height: '60px', width: '400p',display:"flex", justifyContent: "space-between", alignItems:"space-around"}}>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required style={{height: '25px', borderRadius: '10px', padding: '5px'}} {...register("email")}></input>
                </div>
                <div style={{height: '60px', width: '400p',display:"flex", justifyContent: "space-between", alignItems:"space-around"}}>
                    <label for="Password">Password:</label>
                    <input type="password" id="password" name="password" required style={{height: '25px', borderRadius: '10px', padding: '5px'}} {...register("password")}></input>
                </div>
                <div style={{height: '60px', display:"flex", justifyContent: "center", alignItems:"center", backgroundColor: '#F94144'}}>
                    <button type="submit" style={{height: '25px', width: '100px', borderRadius: '10px', border:'none', outline: 'none', padding: '5px'}}>Login</button>
                    <Link href="/users/register">
                        <button style={{height: '25px', width: '100px', borderRadius: '10px', border:'none', outline: 'none', padding: '5px'}}>Registruj se</button>
                    </Link>
                </div>
            </div>
            </form>
            
        </div>
        </>
    );
}

export default Login;