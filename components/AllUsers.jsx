'use client'
import { List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";



const AllUsers = ({setUpdateItem, setOpen, open}) => {
    const [users, setUsers]=useState('')

      const fecthUsers=async()=>{
         const response=await fetch("http://localhost:3000/api/users")
         const data=await response.json()
         setUsers(data.data)
      } 
    useEffect(()=>{
     fecthUsers() 
    },[])
    useEffect(()=>{
      fecthUsers() 
     },[open])
    const handleUpdateUser=(user)=>{
      setUpdateItem(user)
      setOpen(4)
    }
    const handleDeleteUser=async(id)=>{
      try{
         await fetch('http://localhost:3000/api/users',{
            method:'DELETE',
            body:JSON.stringify({ id })
         })
         setOpen(5)
         setTimeout(()=>{
            setOpen(1)
         },300)
      }catch(e){
         console.log(e)
      }
    }
  return (
    <>
     {
        users&&
        <Card className="px-7">
            <List>
                    {
                        users.map((user)=>(
                        <ListItem key={user.name} className="flex justify-between items-center mb-3 border-2 shadow-lg hover:scale-105 transition-all duration-300">
                           <span>{user.name}</span>
                           <div>
                              <button onClick={()=>handleDeleteUser(user.id)} className="px-4 py-1 mr-2 bg-red-600 text-white rounded-full">Delete</button>
                              <button onClick={()=>handleUpdateUser(user)} className="px-4 py-1 bg-green-600 text-white rounded-full">Edit</button>
                           </div>
                        </ListItem>
                        ))
                    }
            </List>
        </Card>
     }
    </>
  )
}

export default AllUsers
