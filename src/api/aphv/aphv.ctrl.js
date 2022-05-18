import Aphv from '../../models/aphv';

export const write = async (ctx) => {
  const { gender, age, date, height, sittingHeight, weight, data } = ctx.request.body;
  const aphv = new Aphv({ gender, age, date, height, sittingHeight, weight, data });
  try {
    await aphv.save();
    ctx.body = aphv;
  } catch (e) {
    ctx.throw(500, e);
  }
};
