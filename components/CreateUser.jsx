'use client'
import {
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
const CreateUser = ({ setOpen }) => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [CheckboxCreate,setCheckboxCreate]=useState(false)

    const handleCreateUser=async()=>{
        try{
            if(CheckboxCreate){
                if( name && email && password){
                    const data=await fetch('http://localhost:3000/api/users',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            name,
                            password,
                            email
                        })

                    })
                    setEmail('')
                    setName('')
                    setPassword('')
                    setOpen(1)
                    setCheckboxCreate(false)
                }
            }else{
                alert('please checklist it')
            }
        }catch(e){
            console.log(e)
        }
    }

  return (
    <>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Name
                </Typography>
                <Input
                value={name}
                onChange={(e)=>setName(e.target.value)}
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
                onChange={(e)=>setEmail(e.target.value)}
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
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                />
            </div>
            <Checkbox
                value={CheckboxCreate}
                onChange={()=>setCheckboxCreate(!CheckboxCreate)}
                label={
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                >
                    I agree the
                    <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                    >
                    &nbsp;Terms and Conditions
                    </a>
                </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
            />
            <Button onClick={handleCreateUser} className="mt-6" fullWidth>
                Create
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="#" className="font-medium text-gray-900">
                Sign In
                </a>
            </Typography>
        </form>
    </>
  )
}

export default CreateUser
