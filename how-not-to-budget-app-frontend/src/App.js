import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';


// import Transactions from './Components/Transactions';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:id" element={<Show />} />
          <Route path="/transactions/:id/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
