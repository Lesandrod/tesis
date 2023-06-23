import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI =  process.env.MONGODB_URI;
const conectarDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`BD conectada`);

    } catch (error) {
        console.log(error);
        process.exit(1); //Detiene la app
    }
}
export default conectarDB;