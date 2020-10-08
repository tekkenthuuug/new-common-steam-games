export interface ActionType<T = string> {
  type: T;
  payload?: any;
}

export type GuideTypesUnion =
  | 'TYPE_URL'
  | 'CLICK_PLUS'
  | 'ADD_TWO'
  | 'CLICK_FIND';

export interface GuideItem {
  type: GuideTypesUnion;
  text: string;
  isDone: boolean;
}
