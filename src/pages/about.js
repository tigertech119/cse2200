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

         <h6>About Myself</h6>
         <p>I am a student of Computer Science and Engineering who wants to explore 
            and learn alot in his life . I live in Dhaka , Bangladesh . I am currently 
            studying in Ahansullah Univarsity of Science and Technology . My aim in life 
            is to build amazing software that helps our people and inspires others to do 
            good in life . Hope to see you again . We can connect through my email - 
            hasan.official@gmail.com , LinkedIn - hasan02 
         </p>

    </div>

     
  );
};

export default About;