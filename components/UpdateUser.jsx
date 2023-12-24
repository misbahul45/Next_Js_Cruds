'use client';
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from 'react';

const UpdateUser = ({ uId, uName, uEmail, uPassword, setOpen }) => {
    const [id, setId]=useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(()=>{
        if(uId, uName, uPassword, uEmail){
            setId(uId)
            setName(uName)
            setEmail(uEmail)
            setPassword(uPassword)
        }
    },[uId,uEmail,uName,uPassword])
    const handleUpdate = async()=>{
      try{
        const response=await fetch('http://localhost:3000/api/users',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                id,
                name,
                password,
                email
            })
        })
        setEmail('')
        setName('')
        setPassword('')
        setId('')
        setOpen(1)
      }catch(e){
        console.log(e)
      }
    };

    return (
        <>
            {uName && uId && uEmail && uPassword ? (
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Name
                        </Typography>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            size="lg"
                            placeholder="example_name_123"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="lg"
                            type="email"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button onClick={handleUpdate} className="mt-6" fullWidth>
                        Update
                    </Button>
                </form>
            ) : (
                <p>User data not available</p>
            )}
        </>
    );
};

export default UpdateUser;
