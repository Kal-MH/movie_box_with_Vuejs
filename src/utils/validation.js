import { ERROR_MESSAGE } from './constants.js';

const {
  ERROR_TYPE_OBJECT,
  ERROR_TYPE_ARRAY,
  ERROR_TYPE_BOOLEAN,
  ERROR_TYPE_STRING,
} = ERROR_MESSAGE;

const TARGET_TYPE = {
  ARRAY: 'array',
  BOOLEAN: 'boolean',
  STRING: 'string',
  OBJECT: 'object',
};

const { ARRAY, BOOLEAN, STRING, OBJECT } = TARGET_TYPE;

const TARGET_TYPE_MAGIG_NUMBER = {
  START: 8,
  END: -1,
};

const { START, END } = TARGET_TYPE_MAGIG_NUMBER;

const getTargetType = target => {
  return Object.prototype.toString.call(target).slice(START, END);
};

const _checkTargetIsObject = target => {
  if (target === undefined || getTargetType(target) !== 'Object')
    throw new Error(ERROR_TYPE_OBJECT);
};

const _checkTargetIsArray = target => {
  if (target === undefined || getTargetType(target) !== 'Array')
    throw new Error(ERROR_TYPE_ARRAY);
};

const _checkTargetIsBoolean = target => {
  if (target === undefined || typeof target !== 'boolean')
    throw new Error(ERROR_TYPE_BOOLEAN);
};

const _checkTargetIsString = target => {
  if (!target || typeof target !== 'string') throw new Error(ERROR_TYPE_STRING);
};

const checkType = (type, target) => {
  switch (type) {
    case 'object':
      _checkTargetIsObject(target);
      break;
    case 'array':
      _checkTargetIsArray(target);
      break;
    case 'boolean':
      _checkTargetIsBoolean(target);
      break;
    case 'string':
      _checkTargetIsString(target);
      break;
    default:
      break;
  }
};

export const checkTypeIsBoolean = target => {
  checkType(BOOLEAN, target);
};

export const checkTypeIsString = target => {
  checkType(STRING, target);
};

export const checkTypeIsArray = target => {
  checkType(ARRAY, target);
};

export const checkTypeIsObject = target => {
  checkType(OBJECT, target);
};
