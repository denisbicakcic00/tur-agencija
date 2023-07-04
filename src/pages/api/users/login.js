import knex from '../../../database';
import { compare } from 'bcryptjs';

export default async function handler(req, res) {
 const data = req.body
 let kupac = await knex('kupac').where("email", data.email)

 // return res.status(200).json({status:200, message: 'Logged in successfully', user:userData});
 if (kupac.length==0){
   return res.status(500).json({status:500, message:'User not found, please register'})
 }
 
   const isPasswordMatch = await compare(data.password, kupac[0].password);

   if(!isPasswordMatch){
      return res.status(500).json({status:500, message:'Please check your credentials'})
   }
 
   res.status(200).json({status:200, message: 'Logged in successfully', kupac});
}