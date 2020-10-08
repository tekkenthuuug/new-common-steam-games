import { GuideItem } from 'src/types';

export const GUIDE_KEY = 'guided';

export const GUIDE_INITIAL_DATA: GuideItem[] = [
  {
    type: 'TYPE_URL',
    text: 'Type in a Profile URL / Steam ID into search bar below',
    isDone: false,
  },
  {
    type: 'CLICK_PLUS',
    text: 'Click plus button, when finished typing',
    isDone: false,
  },
  {
    type: 'ADD_TWO',
    text: 'Add at least two profiles like this',
    isDone: false,
  },
  {
    type: 'CLICK_FIND',
    text: 'Click "Find common" button and have fun with you friends!',
    isDone: false,
  },
];
