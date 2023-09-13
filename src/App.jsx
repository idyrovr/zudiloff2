import './assets/styles/index.scss'

import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from './conf/router/routerProvider';
export const App = () => {

  return (
    
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  );
}


