import express from 'express';
import user_router from './http/routers/user_router.js';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/User', user_router);

app.listen(port, () => {
    console.log(`Server running at port $${port}.`);
});