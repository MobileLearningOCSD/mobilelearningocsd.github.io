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
            <Route path="/" element={<Layout />}>
              <Route index element={ <Home /> } /> 
              <Route path="/limit-ip-address-tracking" element={ <LimitIPAddressTracking /> } />
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
