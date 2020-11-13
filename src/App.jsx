import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import APPROUTER from '../src/Components/Router';


class APP extends React.Component {
  render() {
    return (
      <div>

        <APPROUTER />

      </div>
    )

  }
}

export default APP;
