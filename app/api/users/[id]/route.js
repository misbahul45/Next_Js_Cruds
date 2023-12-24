import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

//get 1 user spesific
export const GET=async(_, res)=>{
    const { id }=await res.params;
    const user=users.find((u)=>u.id===id);
    return NextResponse.json({data:user, ok:true },{ status:200 } )
}

//login user
export const POST=async(req, res)=>{
    let { name, email, password }=await req.json();
    const { id }= await res.params;
    const { name:uName, email:uEmail, password:uPassword }=users.find((u)=>u.id===id)
    if(uName===name && uEmail===email && uPassword===password){
        return NextResponse.json({ result:"succesfully logged in"})
    }else if(!name || !email || !password){
        return NextResponse.json({result:"Please fill all fields"})
    }else{
         return NextResponse.json({ result:"Invalid credential" })
    }
}

