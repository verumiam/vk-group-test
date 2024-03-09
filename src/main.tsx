import '@/styles/globals.scss';
import '@vkontakte/vkui/dist/vkui.css';

import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/app/app';
import { store } from '@/shared/store';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AdaptivityProvider>
  </ConfigProvider>
);
