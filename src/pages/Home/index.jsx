import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
import styles from './index.css';
import { Button } from 'storybook-project/dist/';
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1> Hello World! </h1>
        <h4>Links:</h4>
         <Button text="Press me!"></Button>
        <div className={styles.customHome} >
          <Link href="a" to="/somethingNotFound"> Go to Not Found page! </Link>
        </div>
      </div>
    );
  }
}
