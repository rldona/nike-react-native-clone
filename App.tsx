import 'react-native-gesture-handler';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {AppStack} from './src/routes/AppStack';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStack />
    </QueryClientProvider>
  );
};
