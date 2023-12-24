'use client'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { useState } from "react";
import AllUsers from "./AllUsers";
import SpesificUser from "./SpesificUser";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const AccordingUI = () => {
    const [open, setOpen]=useState(1)
    const [updateItem, setUpdateItem]=useState()
    const handleOpen=(value)=>setOpen(open===value?0:value)
  return (
    <section className="px-20">
      <Accordion open={open==2}>
        <AccordionHeader className="text-slate-100 hover:text-blue-700" onClick={()=>handleOpen(2)}>
           Search For Spesific User
        </AccordionHeader> 
        <AccordionBody>
            <SpesificUser />
        </AccordionBody>
      </Accordion>

      <Accordion open={open==1}>
        <AccordionHeader className="text-slate-100 hover:text-orange-500" onClick={()=>handleOpen(1)}>
           All Users
        </AccordionHeader> 
        <AccordionBody className="">
            <AllUsers open={open} setUpdateItem={setUpdateItem} setOpen={setOpen} />
        </AccordionBody>
      </Accordion>
      <Accordion open={open==3}>
        <AccordionHeader className="text-slate-100 hover:text-orange-500" onClick={()=>handleOpen(3)}>
          Create User
        </AccordionHeader> 
        <AccordionBody className="flex flex-col justify-center items-center">
           <CreateUser setOpen={setOpen} />
        </AccordionBody>
      </Accordion>
      <Accordion open={open==4}>
        <AccordionHeader className="text-slate-100 hover:text-orange-500">
          Update
        </AccordionHeader> 
        <AccordionBody className="flex flex-col justify-center items-center">
           <UpdateUser uId={updateItem?.id} uName={updateItem?.name} uEmail={updateItem?.email} uPassword={updateItem?.password} setOpen={setOpen} />
        </AccordionBody>
      </Accordion>
    </section>
  )
}

export default AccordingUI
