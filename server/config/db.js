import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://LavanderiaBella:qbB8CBspmGiIxBVb@clusterlaundry.azqwhay.mongodb.net/db-laundry-system?retryWrites=true&w=majority&appName=ClusterLaundry",
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
