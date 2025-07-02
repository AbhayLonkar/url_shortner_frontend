import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { Provider } from 'react-redux'

import './index.css'
import { routeTree } from './routing/routeTree.js'
import { store } from '../store/store.js'

const queryClient = new QueryClient()
const router = createRouter({
  routeTree, context: {
    queryClient,
    store,
  }
})

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
)
