// src/pages/about.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <div className="text-center">
      <h2>About Page</h2>
      <h1 className={styles.heading}>Welcome to the About Page</h1>
      <Button as={Link} to="/" variant="primary" className="m-2">
        Go to Home
      </Button>
      <Button variant="secondary" className="m-2">
        Stay on About
      </Button>
    </div>
  );
};

export default About;