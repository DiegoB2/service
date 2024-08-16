import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://LavanderiaBella:qbB8CBspmGiIxBVb@clusterlaundry.azqwhay.mongodb.net/db-laundry-system?retryWrites=true&w=majority",
      "mongodb+srv://eskala1105:XDSnYD9eVarYWjFK@cluster0.ljcnjjt.mongodb.net/db-diego?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Terminar el proceso con error
  }
};

export default mongoose;
