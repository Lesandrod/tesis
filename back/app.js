import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from './src/models/user.js';
import conectarDB from './src/lib/database.js';

const app = express();
const PORT = 4000;

conectarDB();
app.use(express.json(),cors());

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

//solicitud de registro
app.post('/api/signup', async (req, res) => {

    const { username, password, email } = req.body;
    console.log(username, email);

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    //verificar si el usuario existe
    const Userexists = await User.findOne({ email });
    if (Userexists) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const passwordEncrypted = await bcrypt.hash(password, 10);

    let dataUser = { email, username, password: passwordEncrypted }
    const user = new User(dataUser);

    const savedUser = await user.save();
    console.log(savedUser);

    // Generar un token
    const mytoken = jwt.sign({ userId: savedUser._id }, 'secreto', { expiresIn: '3h' });


    return res.status(200).json({ message: 'User created successfully', token: mytoken });

});

app.listen(PORT, () => {
    console.log('Server on port 4000');
});
