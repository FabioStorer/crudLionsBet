import 'dotenv/config'
import express from 'express';
import user_router from './http/routers/user_router.js';
import competitor_router from './http/routers/competitor_router.js';
import jackpotBet_router from './http/routers/jackpotBet_router.js';
import rouletteBet_router from './http/routers/rouleteBet_router.js';
import matchBet_router from './http/routers/matchBet_router.js'
import match_router from './http/routers/match_router.js';
const app = express();

app.use(express.json());

app.use('/User', user_router);
app.use('/Competitor', competitor_router);
app.use('/Jackpot', jackpotBet_router);
app.use('/Roulette', rouletteBet_router);
app.use('/MatchBet', matchBet_router);
app.use('/Match', match_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at port ${process.env.API_PORT}.`);
});