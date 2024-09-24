
import { RouterProvider } from 'react-router-dom';
import RoutesWrap from './routes/Route';

function App() {

  const routes = RoutesWrap()
  
  return (
    <div className='app'>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App