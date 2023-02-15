import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import LimitIPAddressTracking from './components/LimitIPAddressTracking'
import Test from './components/Test'
import FourOFour from './components/FourOFour'

function App() {
  return (
    <div className="app">
      
      <main>
        <BrowserRouter>
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Layout />}>
              <Route index element={ <Home /> } /> 
              <Route path={process.env.PUBLIC_URL + '/limit-ip-address-tracking'} element={ <LimitIPAddressTracking /> } />
              <Route path="test" element={ <Test /> } />
              <Route path="*" element={<FourOFour />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
