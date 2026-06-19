import express from 'express';
import { bulkevents,getsessions,getsessionevents,getheatmap } from '../controllers/events.controllers.js'
const routee = express.Router();


routee.post('/create', bulkevents);
routee.get('/sessioneventcount', getsessions);
routee.get('/events/:sessionId', getsessionevents);
routee.get('/click-data', getheatmap);

export default routee;