import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/navbar.js";
import ExerciseList from "./components/exercise-list.js";
import ExerciseEdit from "./components/exercise-edit.js";
import ExerciseCreate from "./components/exercise-create.js";
import UserCreate from "./components/user-create.js";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" component={ExerciseList} />
        <Route path="/edit/:id" component={ExerciseEdit} />
        <Route path="/create" component={ExerciseCreate} />
        <Route path="/user" component={UserCreate} />
      </div>
    </Router>
  );
}

export default App;
