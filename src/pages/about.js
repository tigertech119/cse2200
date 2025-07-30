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
        Stay on About author
      </Button>

         <h6>About author</h6>
         <p>I am a student of Computer Science and Engineering who wants to explore 
            and learn alot in his life . I live in Dhaka , Bangladesh . I am currently 
            studying in Ahansullah Univarsity of Science and Technology . My aim in life 
            is to build amazing software that helps our people and inspires others to do 
            good in life . Hope to see you again . 
         </p>

         <p>
          The author is a person who loves to learn new things, especially about technology. He spends a lot of time reading and watching videos 
          about computer programming and different programming languages. He enjoys trying out small projects and solving problems using code. 
          Artificial intelligence is another topic that excites him. He likes to understand how machines can think and learn like humans. Bitcoin 
          and other digital currencies are also interesting to him. He wants to know how they work and how they are changing the future of money. 
          Besides these, the author also enjoys learning about new gadgets, apps, and tech news. He believes that technology is always growing and 
          there is always something new to explore. His curiosity keeps him motivated to read, learn, and try new things. He hopes that one day his 
          knowledge can help others or maybe build something useful for the world. Learning is his passion.
         </p>

    </div>

     
  );
};

export default About;