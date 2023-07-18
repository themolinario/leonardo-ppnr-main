import { DefaultOptions, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useLayoutEffect } from "react";

const QUERY_CLIENT_DEFAULTS: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: (attempt) => attempt * 1000, // retry after 1s
    staleTime: 1 * 60 * 1000 // 1min
  },
  mutations: {}
};

const queryClient = new QueryClient();

export function QueryClientCustomProvider({ children }: { children: ReactNode }): JSX.Element {
  useLayoutEffect(() => {
    queryClient.setDefaultOptions({
      queries: {
        ...QUERY_CLIENT_DEFAULTS.queries,
        onError: (err) => {
          console.error(err);
        }
      },
      mutations: {
        ...QUERY_CLIENT_DEFAULTS.mutations,
        onError: (err) => {
          console.error(err);
        }
      }
    });
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
