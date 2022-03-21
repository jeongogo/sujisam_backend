import Athlete from '../../models/athlete';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const getAthleteById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const athlete = await Athlete.findById(id);
    if (!athlete) {
      ctx.status = 404;
      return;
    }
    ctx.state.athlete = athlete;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const search = async (ctx) => {
  const { name } = ctx.query;

  try {
    const athlete = await Athlete.find({ name: name });
    if (!athlete) {
      ctx.status = 404;
      return;
    }
    ctx.body = athlete;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const write = async (ctx) => {
  const {
    name,
    gender,
    birthday,
    height,
    weight,
    phone,
    career,
    sports,
    dominance_hand,
    dominance_leg,
    team,
  } = ctx.request.body;
  const athlete = new Athlete({
    name,
    gender,
    birthday,
    height,
    weight,
    phone,
    career,
    sports,
    dominance_hand,
    dominance_leg,
    team,
  });
  try {
    await athlete.save();
    ctx.body = athlete;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  try {
    const athletes = await Athlete.find().sort({ _id: -1 });
    ctx.body = athletes;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const count = async (ctx) => {
  try {
    const count = await Athlete.count();
    ctx.body = count;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  ctx.body = ctx.state.athlete;
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Athlete.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const athlete = await Athlete.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!athlete) {
      ctx.status = 404;
      return;
    }
    ctx.body = athlete;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const writeMeasure = async (ctx) => {
  const { id } = ctx.params;
  const { category } = ctx.params;
  const data = ctx.request.body;
  const measure = 'measure_' + category;
  try {
    const athlete = await Athlete.findByIdAndUpdate(id, {
      $push: {
        [measure]: data,
      },
    }).exec();
    if (!athlete) {
      ctx.status = 404;
      return;
    }
    ctx.body = athlete;
  } catch (e) {
    ctx.throw(500, e);
  }
};
