import Router from 'koa-router';
import athletes from './athletes';
import auth from './auth';
import aphv from './aphv';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/athletes', athletes.routes());
api.use('/aphv', aphv.routes());

export default api;