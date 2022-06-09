import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import Home from './components/Home/Home';
import Report from './components/Content/Directory';

function App(){
  const params = useParams();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/daily/galley" element={<Home />}>
            <Route index element={<defaultPage />} />
            <Route path=":pages" element={<Report/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
