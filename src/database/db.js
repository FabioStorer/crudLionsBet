import mongoose from 'mongoose';
const mongoDB = 'mongodb://localhost:27017/';
const database = 'lionsbet';

const main = async () => {
    try {
        await mongoose.connect(mongoDB + database);
        console.log('Successfully connected.');
    } catch (error) {
        console.log(error);
    }
};

main();

export default mongoose;