import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Hotel from './components/Hotel';
import Booking from './components/Booking';

import {BrowserRouter, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/hotel" exact component={Hotel} />
        <Route path="/booking" exact component={Booking} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
