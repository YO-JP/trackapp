import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render () {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExerciseAPP</Link>
                <div className=" navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to ="/" className="nav-link">エクササイズ・リスト</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to ="/create" className="nav-link">ログ入力</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to ="/user" className="nav-link">新ユーザー登録</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}