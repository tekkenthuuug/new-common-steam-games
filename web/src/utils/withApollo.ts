import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { NextPageContext } from 'next';
import { createWithApollo } from './createWithApollo';

const httpLink = (ctx: NextPageContext) =>
  new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
  });

const link = (ctx: NextPageContext) => ApolloLink.from([httpLink(ctx)]);

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    link: link(ctx),
    cache: new InMemoryCache(),
  });

export const withApollo = createWithApollo(createClient);
