import Router from 'koa-router';
import athletes from './athletes';
import auth from './auth';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/athletes', athletes.routes());

export default api;