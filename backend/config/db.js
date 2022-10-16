import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://MilanReyFeynman:DaVinci06@cluster0.qzyp02k.mongodb.net/?retryWrites=true&w=majority ' ,{ 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const url = `${db.connection.host}:${db.connection.port}`
    console.log(`MongoDB conectado en: ${url}`)

  } catch (error) {
    console.log(`error: ${error.message}`)
    process.exit(1);
  	
  }
}

export default conectarDB;
