import Router from 'koa-router';
import * as aphvCtrl from './aphv.ctrl';

const aphv = new Router();

aphv.post('/', aphvCtrl.write);

export default aphv;
