import axios from 'axios'
import styles from './styles/ModalRegister.module.css'
import { useState } from 'react'
export default function ModalRegister({ isOpen1, onClose1, children }) {
    if (!isOpen1) {
        return null
    }
    const [passwordMatch, setPasswordMatch] = useState(true)
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const endpoint = process.env.API_SIGNIN
        const email = formData.get('email')
        const pass = formData.get('password')
        const repeatpass = formData.get('repeatpass')

        const data = {
            email: email,
            password: pass,
        }

        if (pass === repeatpass) {
            setPasswordMatch(true)

            try {
                response = await axios.post(endpoint, data)

                console.log(`%c${response}`, 'color: yellow');


            } catch (error) {
                console.log(`%cError al Registrarse: ${error}`, 'color: yellow')
                alert('Error al Iniciar sesion');
            }

        } else {
            setPasswordMatch(false)
        }

    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <button
                    className={styles.modalclose} onClick={onClose1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
                <div className={styles.modalimage}>
                    <img className={styles.img} src="https://i.ibb.co/1Ljr66D/ee0bc4dd-5fef-42ae-b834-7bbf5bb6764c.jpg" alt="Imagen" />
                </div>
                <div className={styles.modalform}>
                    <form className={styles.loginform} onSubmit={handleSubmit}>
                        <h2 className={styles.welcome}>Crea tu cuenta YAAAA!!!!</h2><br />

                        <input

                            type="email"
                            placeholder="Ingrese un correo electronico"
                            name='email'

                        />
                        <input

                            type="password"
                            placeholder="Ingrese una contraseña"
                            name='password'
                        />
                        <input

                            type="password"
                            placeholder="repita su contraseña"
                            name='repeatpass'
                        />
                        {!passwordMatch && <p className={styles.errorpass}>Las contraseñas no coinciden.</p>}

                        <br />
                        <button className={styles.boton} type="submit">
                            Iniciar sesión
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}