import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { useState } from 'react';
import reviewsService from '@/services/reviews';

const Recenzija = () =>{
  const router = useRouter();
  const [message, setMessage] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
        try {
          const { ocjena, komentar } = data;
          const recenzija = await reviewsService.post({
            kupac_id: 1, // Prilagodite prema vašoj aplikaciji
            ocjena: parseInt(ocjena),
            komentar: komentar
          });
    
          if (recenzija.status === 500) {
            return setMessage(recenzija.message);
          }
    
          router.push(`/users/profile`);
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <>
        <div class="forma" style={{margin: '20px', display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            <img src="/logo.png"></img>
            <div style={{width: '400px', color: "white", backgroundColor: '#F94144',display: "flex", alignItems:"center", justifyContent: "center"}}>
            <h2>RECENZIJA</h2>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{margin: '20px', width: '400p',xdisplay:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
                <div style={{height: '60px', width: '400p',display:"flex", justifyContent: "space-between", alignItems:"space-around", margin: '5px'}}>
                    <label for="ocjena">Ocjena: </label>
                    <input type="number" id="ocjena" name="ocjena" min={1} max={5} required style={{height: '25px', borderRadius: '10px', padding: '5px'}} {...register("ocjena")}></input>
                </div>
                <div style={{height: '60px', width: '400p',display:"flex", justifyContent: "space-between", alignItems:"space-around", margin: '5px'}}>
                    <label for="komentar">Komentar:</label>
                    <input type="text" id="komentar" name="komentar" required style={{height: '25px', borderRadius: '10px', padding: '5px'}} {...register("komentar")}></input>
                </div>
                <div style={{height: '60px', width: '400px', display:"flex", justifyContent: "space-around", alignItems:"center", backgroundColor: '#F94144'}}>
                    <button type="submit" style={{height: '25px', width: '100px', borderRadius: '10px', border:'none', outline: 'none', padding: '5px'}}>Ostavi recenziju</button>
                </div>
            </div>
            </form>
            
        </div>
        </>
    );
}

export default Recenzija;