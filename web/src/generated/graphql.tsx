import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  steamProfileSummary?: Maybe<ProfileSummaryResponse>;
  steamId?: Maybe<Scalars['String']>;
  steamOwnedApps?: Maybe<Array<OwnedGame>>;
  steamCommonApps?: Maybe<Array<OwnedGame>>;
};


export type QuerySteamProfileSummaryArgs = {
  url: Scalars['String'];
};


export type QuerySteamIdArgs = {
  url: Scalars['String'];
};


export type QuerySteamOwnedAppsArgs = {
  url: Scalars['String'];
};


export type QuerySteamCommonAppsArgs = {
  urls: Array<Scalars['String']>;
};

export type ProfileSummaryResponse = {
  __typename?: 'ProfileSummaryResponse';
  summary: UserSummary;
  steamId: Scalars['Float'];
};

export type UserSummary = {
  __typename?: 'UserSummary';
  avatar: Avatar;
  personaName: Scalars['String'];
  profileUrl: Scalars['String'];
  personaState: Scalars['Float'];
  communityVisibilityState: Scalars['Float'];
  profileState: Scalars['Float'];
  lastLogoff: Scalars['Float'];
  commentPermission?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  primaryClanId?: Maybe<Scalars['String']>;
  timeCreated?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['String']>;
  gameServerIp?: Maybe<Scalars['String']>;
  gameExtraInfo?: Maybe<Scalars['String']>;
  locCountyCode?: Maybe<Scalars['String']>;
  locStateCode?: Maybe<Scalars['String']>;
  locCityId?: Maybe<Scalars['String']>;
};

export type Avatar = {
  __typename?: 'Avatar';
  default: Scalars['String'];
  medium: Scalars['String'];
  full: Scalars['String'];
};

export type OwnedGame = {
  __typename?: 'OwnedGame';
  name: Scalars['String'];
  appId: Scalars['String'];
  playtimeTotal: Scalars['Float'];
  playtime2weeks: Scalars['Float'];
  imgIconUrl: Scalars['String'];
  imgLogoUrl: Scalars['String'];
};

export type CommonAppFragment = (
  { __typename?: 'OwnedGame' }
  & Pick<OwnedGame, 'name' | 'appId' | 'imgLogoUrl' | 'imgIconUrl'>
);

export type SteamCommonAppsQueryVariables = Exact<{
  urls: Array<Scalars['String']>;
}>;


export type SteamCommonAppsQuery = (
  { __typename?: 'Query' }
  & { steamCommonApps?: Maybe<Array<(
    { __typename?: 'OwnedGame' }
    & CommonAppFragment
  )>> }
);

export type SteamProfileSummaryQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type SteamProfileSummaryQuery = (
  { __typename?: 'Query' }
  & { steamProfileSummary?: Maybe<(
    { __typename?: 'ProfileSummaryResponse' }
    & Pick<ProfileSummaryResponse, 'steamId'>
    & { summary: (
      { __typename?: 'UserSummary' }
      & Pick<UserSummary, 'personaName' | 'profileUrl' | 'personaState' | 'communityVisibilityState'>
      & { avatar: (
        { __typename?: 'Avatar' }
        & Pick<Avatar, 'full'>
      ) }
    ) }
  )> }
);

export const CommonAppFragmentDoc = gql`
    fragment CommonApp on OwnedGame {
  name
  appId
  imgLogoUrl
  imgIconUrl
}
    `;
export const SteamCommonAppsDocument = gql`
    query SteamCommonApps($urls: [String!]!) {
  steamCommonApps(urls: $urls) {
    ...CommonApp
  }
}
    ${CommonAppFragmentDoc}`;

/**
 * __useSteamCommonAppsQuery__
 *
 * To run a query within a React component, call `useSteamCommonAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSteamCommonAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSteamCommonAppsQuery({
 *   variables: {
 *      urls: // value for 'urls'
 *   },
 * });
 */
export function useSteamCommonAppsQuery(baseOptions?: Apollo.QueryHookOptions<SteamCommonAppsQuery, SteamCommonAppsQueryVariables>) {
        return Apollo.useQuery<SteamCommonAppsQuery, SteamCommonAppsQueryVariables>(SteamCommonAppsDocument, baseOptions);
      }
export function useSteamCommonAppsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SteamCommonAppsQuery, SteamCommonAppsQueryVariables>) {
          return Apollo.useLazyQuery<SteamCommonAppsQuery, SteamCommonAppsQueryVariables>(SteamCommonAppsDocument, baseOptions);
        }
export type SteamCommonAppsQueryHookResult = ReturnType<typeof useSteamCommonAppsQuery>;
export type SteamCommonAppsLazyQueryHookResult = ReturnType<typeof useSteamCommonAppsLazyQuery>;
export type SteamCommonAppsQueryResult = Apollo.QueryResult<SteamCommonAppsQuery, SteamCommonAppsQueryVariables>;
export const SteamProfileSummaryDocument = gql`
    query SteamProfileSummary($url: String!) {
  steamProfileSummary(url: $url) {
    steamId
    summary {
      avatar {
        full
      }
      personaName
      profileUrl
      personaState
      communityVisibilityState
    }
  }
}
    `;

/**
 * __useSteamProfileSummaryQuery__
 *
 * To run a query within a React component, call `useSteamProfileSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSteamProfileSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSteamProfileSummaryQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useSteamProfileSummaryQuery(baseOptions?: Apollo.QueryHookOptions<SteamProfileSummaryQuery, SteamProfileSummaryQueryVariables>) {
        return Apollo.useQuery<SteamProfileSummaryQuery, SteamProfileSummaryQueryVariables>(SteamProfileSummaryDocument, baseOptions);
      }
export function useSteamProfileSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SteamProfileSummaryQuery, SteamProfileSummaryQueryVariables>) {
          return Apollo.useLazyQuery<SteamProfileSummaryQuery, SteamProfileSummaryQueryVariables>(SteamProfileSummaryDocument, baseOptions);
        }
export type SteamProfileSummaryQueryHookResult = ReturnType<typeof useSteamProfileSummaryQuery>;
export type SteamProfileSummaryLazyQueryHookResult = ReturnType<typeof useSteamProfileSummaryLazyQuery>;
export type SteamProfileSummaryQueryResult = Apollo.QueryResult<SteamProfileSummaryQuery, SteamProfileSummaryQueryVariables>;