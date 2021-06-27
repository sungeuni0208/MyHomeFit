import React from 'react';
import { Route, Link } from 'react-router-dom';
import MakeYourSet from "./pages/MakeYourSet";
import Training from "./pages/Training";
import FitNotes from "./pages/FitNotes";
import Calender from "./pages/Calender";
import SideMenubar from "./pages/menu/SideMenubar";
import './css/App.css'

const App = () => {
  return (
      <div className='main-container'>
          <SideMenubar />
          <Route path="/makeyourset" exact={true} component={MakeYourSet} />
          <Route path="/training" component={Training} />
          <Route path="/fitnotes" component={FitNotes} />
          <Route path="/calender" component={Calender} />
      </div>
  );
};

export default App;