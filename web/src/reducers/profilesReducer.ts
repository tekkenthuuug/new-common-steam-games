import { ActionType } from 'src/types';

interface IInitial {
  profiles: string[];
  searchInput: string;
}

type profilesReducerTypes = 'SET_SEARCH' | 'ADD_PROFILE' | 'DELETE_PROFILE';

export const profilesReducerInitial = {
  profiles: [],
  searchInput: '',
} as IInitial;

const deleteProfile = (profilesSlice: string[], url: string) => {
  return profilesSlice.filter(profileUrl => profileUrl !== url);
};

const profilesReducer = (
  state = profilesReducerInitial,
  action: ActionType<profilesReducerTypes>
): IInitial => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchInput: action.payload };
    case 'ADD_PROFILE':
      if (state.profiles.includes(state.searchInput)) {
        return state;
      }

      return {
        ...state,
        profiles: [state.searchInput, ...state.profiles],
        searchInput: '',
      };
    case 'DELETE_PROFILE':
      return {
        ...state,
        profiles: deleteProfile(state.profiles, action.payload),
      };
    default:
      return state;
  }
};

export default profilesReducer;
