import { ProfileSummaryResponse } from 'src/generated/graphql';
import { ActionType } from 'src/types';

export type ProfileType = (ProfileSummaryResponse & { for: string })

interface IInitial {
  profileUrls: string[];
  profiles: ProfileType[],
  isLoading: boolean,
  searchInput: string;
}

type ProfilesReducerTypes = 'SET_SEARCH' | 'ADD_PROFILE_URL' | 'ADD_PROFILE' | 'DELETE_PROFILE';

export const profilesReducerInitial: IInitial = {
  profileUrls: [],
  profiles: [],
  isLoading: false,
  searchInput: '',
};

const deleteProfileUrl = (profileUrlsSlice: string[], url: string) => {
  return profileUrlsSlice.filter(profileUrl => profileUrl !== url);
};

const deleteProfile = (profileSlice: ProfileType[], url: string) => {
  return profileSlice.filter(profile => profile.for !== url);
}

const profilesReducer = (
  state = profilesReducerInitial,
  action: ActionType<ProfilesReducerTypes>
): IInitial => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchInput: action.payload };
    case 'ADD_PROFILE':
      return {
        ...state,
        isLoading: false,
        profiles: [...state.profiles, action.payload]
      }
    case 'ADD_PROFILE_URL':
      if (state.profileUrls.includes(state.searchInput)) {
        return state;
      }

      return {
        ...state,
        profileUrls: [state.searchInput, ...state.profileUrls],
        isLoading: true,
        searchInput: '',
      };
    case 'DELETE_PROFILE':
      return {
        ...state,
        isLoading: false,
        profileUrls: deleteProfileUrl(state.profileUrls, action.payload),
        profiles: deleteProfile(state.profiles, action.payload)
      };
    default:
      return state;
  }
};

export default profilesReducer;
