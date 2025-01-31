import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
)

export class ExerciseList extends Component {
    constructor (props){
        super (props)

        this.state = { 
            exercises: []
        }
        this.deleteExercise = this.deleteExercise.bind(this)
    }

    componentDidMount () {
        axios.get('http://localhost:5000/exercise/')
        .then(response => {
            this.setState({
                exercises: response.data
            })
        })
        .catch ((error) => {
            console.log(error);
        })
    }

    deleteExercise (id) {
        axios.delete('http://localhost:5000/exercise/'+id)
        .then(res => console.log (res.data))

        this.setState({
            exercises: this.state.exercises.filter(element => element._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }

    render() {
        return (
            <div>
            <h3>エクササイズ・リスト</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>ユーザー名</th>
                  <th>エクササイズ詳細</th>
                  <th>エクササイズ時間　(分）</th>
                  <th>日付</th>
                  <th>変更</th>
                </tr>
              </thead>
              <tbody>
                { this.exerciseList() }
              </tbody>
            </table>
          </div>
        )
    }
}

export default ExerciseList
