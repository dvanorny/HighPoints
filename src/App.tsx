import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import USMap from './components/USMap';
import About from './components/About';
import StateDetail from './components/StateDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<USMap />} />
          <Route path="about" index element={<About />} />
          <Route path="state/:stateCode" element={<StateDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;