// src/pages/home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className="text-center">
      <h2>Home Page</h2>
      <h1 className={styles.heading}>Welcome to My Home Page</h1> {/* Changed text */}
      <Button variant="primary" className="m-2">
        Stay on Home
      </Button>
      <Button as={Link} to="/about" variant="secondary" className="m-2">
        Go to About
      </Button>
    </div>
  );
};

export default Home;