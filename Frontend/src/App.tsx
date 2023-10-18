import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<IndexPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>

              <Route path='/place/:id' element={<PlacePage/>}/>
          </Route>
      </Routes>
  );
}

export default App;
