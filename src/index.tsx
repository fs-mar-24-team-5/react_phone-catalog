import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';

import { App } from './App';

import './providers/i18n/i18n';

import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';

import('./mocks/browser').then(({ worker }) => {
  worker.start({
      onUnhandledRequest: 'bypass',
  });
});

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Suspense>
  </Provider>,
);
