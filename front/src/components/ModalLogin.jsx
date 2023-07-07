"use client"
import { useState } from 'react';
import styles from './styles/ModalLogin.module.css';
import axios from 'axios';

export default function ModalLogin({ isOpen, onClose, }) {
    const [showPassword, setShowPassword] = useState(false);
    if (!isOpen) {
        return null;
    }
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    //funcion para inicia sesión
    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.target)
        const email = formData.get('email')
        const pass = formData.get('password')
        const endpoint = process.env.API_SIGNUP

        const data = { email: email, password: pass }

        try {
            response = await axios.post(endpoint, data)
            console.log(response);

        } catch (error) {
            console.log(`%cError al Iniciar sesión: ${error}`, 'color: yellow')
            alert('Error al Iniciar sesion');
        }




    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <button
                    className={styles.modalclose} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
                <div className={styles.modalimage}>
                    <img className={styles.img} src="https://i.ibb.co/K7Htms6/OIG.jpg" alt="Imagen" />
                </div>
                <div className={styles.modalform}>

                    <form className={styles.loginform} onSubmit={handleSubmit}>
                        <h2 className={styles.welcome}>Bienvenido de Nuevo</h2><br />


                        <input

                            type="email"
                            placeholder="Ingrese su correo"
                            name='email'

                        />


                        <input

                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingrese su scontraseña"
                            name='password'
                        />

                        <button type="button" onClick={handleTogglePassword}>
                            {showPassword ? <p className={styles.showpass}>Ocultar</p> : <p className={styles.showpass}> Ver</p>}
                        </button>
                        <br />



                        <button className={styles.boton} type="submit">
                            Iniciar sesión
                        </button>

                    </form>
                </div>


            </div>
        </div>
    );
};

