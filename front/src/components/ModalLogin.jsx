"use client"
import { data } from 'autoprefixer';
import styles from './styles/ModalLogin.module.css';
import axios from 'axios';
import { FormEvent } from 'react';
import { useState } from 'react';
import { saveUser } from '@/controllers/loginController';
export default function ModalLogin({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);

        // saveUser(data);


    }
    
    return (
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <button
                    className={styles.modalclose} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillOpacity="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
                <div className={styles.modalimage}>
                    <img className={styles.img} src="https://i.ibb.co/K7Htms6/OIG.jpg" alt="Imagen" />
                </div>
                <div className={styles.modalform}>
                    <form className={styles.loginform} onSubmit={handleSubmit}>
                        <h2>Bienvenido de Nuevo</h2><br />

                        <input

                            type="email"
                            placeholder="user@example.com"
                            name='email'

                        />
                        <input

                            type="password"
                            placeholder="password"
                            name='password'
                        />

                        <button className={styles.boton} type="submit">
                            Iniciar sesión
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

