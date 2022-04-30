import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// enable cors


const client = new ApolloClient({
  uri: "http://51.89.148.172:8080/o/graphql",
  cache: new InMemoryCache(),
  headers:{
    Authorization: `Basic dGRlbW5hdGlAZW5jYWphbWUuZXM6dGVzdDE=`
  }
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </ApolloProvider>
    );
  }
};

AppRegistry.registerComponent('MyApplication', () => App);