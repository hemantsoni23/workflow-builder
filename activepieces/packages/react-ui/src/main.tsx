// import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';

// import './i18n';
// import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );





import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './i18n';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <BrowserRouter basename="/activepieces">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
