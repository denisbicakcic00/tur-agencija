import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { useState } from 'react';
import userService from '@/services/user';
import { setAccessToken } from "@/utils/auth";

const Login = () =>{
  const router = useRouter();
  const [message, setMessage] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
      const kupac = await userService.login(data);
      console.log(data)

      if (kupac.status === 500) {
        return setMessage(kupac.message);
      }
      await setAccessToken(data.token);
        await router.push('/');
  };
    return (
        <>
        <div className="forma" style={{margin: '20px', display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            <img src="/logo.png"></img>
            <div style={{width: '400px', color: "white", backgroundColor: '#F94144',display: "flex", alignItems:"center", justifyContent: "center"}}>
            <h2>LOGIN</h2>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{margin: '20px', width: '400p',xdisplay:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
                <div style={{height: '60px', width: '400p',display:"flex", justifyContent: "space-between", alignItems:"space-around", margin: '5px'}}>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required style={{height: '25px', borderRadius: '10px', padding: '5px'}} {...register("email")}></input>
                </div>
                <div style={{height: '60px', width: '400p',display:"flex", justifyContent: "space-between", alignItems:"space-around", margin: '5px'}}>
                    <label for="Password">Password:</label>
                    <input type="password" id="password" name="password" required style={{height: '25px', borderRadius: '10px', padding: '5px'}} {...register("password")}></input>
                </div>
                <div style={{height: '60px', width: '400px', display:"flex", justifyContent: "space-around", alignItems:"center", backgroundColor: '#F94144'}}>
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