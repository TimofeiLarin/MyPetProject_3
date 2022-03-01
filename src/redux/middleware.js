import { COMMENT_CREATE } from './types';
import { errorOn } from './action';
const badWords = ['stupid', 'shit']

export function spamFilter({dispatch}) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some(res => action.data.text.includes(res))
        if (hasBadWords) {
          return dispatch(errorOn('Stop scolding!'))
        }
      }
      return next(action);
    };
  };
}
