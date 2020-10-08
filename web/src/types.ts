export interface ActionType<T = string> {
  type: T;
  payload?: any;
}
