import Router from 'koa-router';
import * as athletesCtrl from './athletes.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const athletes = new Router();

athletes.get('/', athletesCtrl.list);
athletes.get('/count', athletesCtrl.count);
athletes.get('/search', athletesCtrl.search);
athletes.post('/', /*checkLoggedIn,*/ athletesCtrl.write);
athletes.get('/:id', athletesCtrl.getAthleteById, athletesCtrl.read);
athletes.delete(
  '/:id',
  checkLoggedIn,
  athletesCtrl.getAthleteById,
  athletesCtrl.remove,
);
athletes.patch(
  '/:id',
  checkLoggedIn,
  athletesCtrl.getAthleteById,
  athletesCtrl.update,
);

athletes.post('/:id/write', checkLoggedIn, athletesCtrl.writeMeasure);

export default athletes;
