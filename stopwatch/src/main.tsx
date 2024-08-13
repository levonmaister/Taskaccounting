import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux'
import {store} from './reducers/store.ts'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'





const client = new ApolloClient({
  uri: 'http://localhost:3003',
  cache: new InMemoryCache(),
})




ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
  <Provider  store={store}>
    <App />
  </Provider>
  </ApolloProvider>
  ,
)
