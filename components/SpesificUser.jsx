'use client'
import { Button, Card, Input, List, ListItem } from "@material-tailwind/react"
import { useState } from "react"


const SpesificUser = () => {
    const [userId, setUserId]=useState('')
    const [userData, setUserData]=useState(null)

    const fetchUserData=async()=>{
        const response=await fetch(`http://localhost:3000/api/users/${userId}`)
        if(response.ok){
            const data=await response.json()
            setUserData(data.data)
        }else{
            console.log("error")
            setUserData(null)
        }
    }
  return (
    <div>
        <div>
            <Input label="Enter User Id" type="text" value={userId} className=" text-white"  onChange={(e)=>setUserId(e.target.value)} />
            <Button onClick={fetchUserData} className="mt-4" >Fetch User</Button>
        </div>
        <div className="mt-5">
            {
                userData?(
                    <Card>
                        <List className="px-7 ">
                            <ListItem className="border-2 border-slate-900 shadow-lg shadow-slate-500">Id :{userData.id}</ListItem>
                            <ListItem className="border-2 border-slate-900 shadow-lg shadow-slate-500">name :{userData.name}</ListItem>
                            <ListItem className="border-2 border-slate-900 shadow-lg shadow-slate-500">email :{userData.email}</ListItem>
                            <ListItem className="border-2 border-slate-900 shadow-lg shadow-slate-500">Password :{userData.password}</ListItem>
                        </List>
                    </Card>
                )
                :
                <p className="text-3xl text-center text-white opacity-70"> Search Spesific User</p>
            }
        </div>
    </div>
  )
}

export default SpesificUser
