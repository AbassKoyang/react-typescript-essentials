import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();
// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <QueryClientProvider client={queryClient}>
//         <App />
//     </QueryClientProvider>
// );

import { Provider } from 'react-redux';
import { store } from './store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>

);
