import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/navbar.js";
import ExerciseList from "./components/exercise-list";
import ExerciseEdit from "./components/exercise-edit";
import ExerciseCreate from "./components/exercise-create";
import UserCreate from "./components/user-create";


function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={ExerciseList} />
      <Route path="/edit/:id" component={ExerciseEdit} />
      <Route path="/create" component={ExerciseCreate} />
      <Route path="/user" component={UserCreate} />
    </Router>
  );
}

export default App;
