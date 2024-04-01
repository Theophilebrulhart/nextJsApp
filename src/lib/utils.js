const { default: mongoose } = require('mongoose');

const connection = {
};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database: ', error);
        throw new Error('Error connecting to the database');
    }
}