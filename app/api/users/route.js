import { users } from "@/app/util/db";
import { NextResponse } from 'next/server';
import fs from 'fs'

//get all users
export const GET=()=>{
       const data=users
       return NextResponse.json({data}, { status:200 } ) 
}

export async function POST(req, res) {
       const id=String(users.length>0?Number(users[users.length-1].id)+1:1)
       let { name, email, password } = await req.json();
     
       if (!name || !email || !password) {
         return NextResponse.json(
           { result: "required field not found" },
           { status: 400 }
         );
       } else {
         users.push({ id, name, email, password });

         const updatedUsersArray = users;
         const updatedData = JSON.stringify(updatedUsersArray, null, 2);

         fs.writeFileSync(
           "./app/util/db.js",
           `export const users = ${updatedData};`,
           "utf-8"
         );
     
         return NextResponse.json({ success: "User Successfully Created" });
       }
}

export const PUT=async(req,res)=>{
       let { id,name, password, email}=await req.json()
       const userIndex=users.findIndex((u)=>u.id===id)
       if(userIndex!==-1){
              if(name)users[userIndex].name=name;
              if(password)users[userIndex].password=password;
              if(email)users[userIndex].email=email

              const updatedUersArray=users;
              const updateData=JSON.stringify(updatedUersArray,null, 2)
              fs.writeFileSync('./app/util/db.js',`export const users = ${updateData};`,"utf-8");
              return NextResponse.json({succes:"Succesfully Change Data" })
       }else{
              return NextResponse.json({ response:"eror cannot change Data"})
       }
}
export const DELETE=async(req,_)=>{
       const { id }=await req.json()
       const updateUserArray=users.filter((u)=>u.id!==id)
       const updateData=JSON.stringify(updateUserArray,null,2)
       fs.writeFileSync('./app/util/db.js',`export const users=${updateData}`,'utf-8')
       return NextResponse.json({respon:"Succesfully Deleted"})
}