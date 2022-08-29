import { Routes, Route } from 'react-router-dom';

import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import SingleVideoPage from './pages/singleVideoPage/SingleVideoPage';



function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Homepage />}/>
      <Route path="/product/:productId" element={<SingleVideoPage />} />
    </Routes>
    </>
  );
}

export default App;
