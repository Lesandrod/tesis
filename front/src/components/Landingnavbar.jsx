"use client"
import { useState } from "react"
import ModalLogin from "./ModalLogin";
export function Landingnavbar({ openModal }) {
    
    

    return (
        <header className="">
            <nav className="flex justify-between items-center px-4 py-2">
                <div>
                    <img src="https://i.ibb.co/zP2fkYq/logotipo.png" style={{ width: 45 }} alt="" />
                </div>
                <div className="flex items-center mt-3">
                    <div className="mx-4">
                        <button className="underline hover:text-purple-800 font-semibold" style={{ textDecoration: 'none', color: "white" }} onClick={openModal}>Sign In</button>
                    </div>
                    <div className="mx-4">
                        <button className="underline hover:text-purple-800 font-semibold" style={{ textDecoration: 'none', color: "white" }}>Sign Up</button>
                    </div>
                </div>

            </nav>
           
        </header>
    )
}




