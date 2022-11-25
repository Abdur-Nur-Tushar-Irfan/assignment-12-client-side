import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className=' mx-auto'>
      <RouterProvider
        const router={routes}

      >
      </RouterProvider>
    </div>
  );
}

export default App;
