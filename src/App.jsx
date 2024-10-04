import { BrowserRouter } from 'react-router-dom';
import './App.css'
import AppRouter from './component/appRouter/AppRouter';

function App() {
  return(
    <div className='w-full min-h-screen flex flex-col justify-between font-montserrat'>
      <div className='grow'>
        <BrowserRouter>
        <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App
