import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'


import {  BrowserRouter, Routes, Route} from "react-router";
import Public from './Public/Public.tsx';
//import Private from './Private/Private.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Public/>}/>
        {/* <Route path='/private/*' element={<Private/>}/> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
