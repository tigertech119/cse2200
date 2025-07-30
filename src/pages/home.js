// src/pages/home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;
  const totalComments = 20;

  /// some sample comments are given below 
  const comments = [
    { id: 1, author: 'Author Name, 7 January 2025', text: 'This webpage is working fine ' },
    { id: 2, author: 'Author Name, 10 February 2025', text: ' Nice work men ' },
    { id: 3, author: 'Author Name, 10 February 2025', text: 'this needs alot of style ' },
    { id: 4, author: 'Author Name, 12 March 2025', text: 'Expecting some interesting and fantastic changes to this website ' },
    { id: 5, author: 'Author Name, 15 April 2025', text: 'noice.' },
    { id: 6, author: 'Author Name, 20 May 2025', text: ' belissimo ..' },
    { id: 7, author: 'Author Name, 25 June 2025', text: ' vai amr website ta ki baniyediben .' },
    { id: 8, author: 'Author Name, 30 July 2025', text: 'ak dui tin char ahbab vai er mon udar ' },
    { id: 9, author: 'Author Name, 5 August 2025', text: 'really nothing special ' },
    { id: 10, author: 'Author Name, 10 September 2025', text: 'expectation was quite high got disappointed ' },
    { id: 11, author: 'Author Name, 15 October 2025', text: 'Make the website much more interesting plz' },
    { id: 12, author: 'Author Name, 20 November 2025', text: 'grammer chachato vai ke cse te vorti korale ja hoy ' },
    { id: 13, author: 'Author Name, 25 December 2025', text: ' Build it like you want to win ' },
    { id: 14, author: 'Author Name, 30 January 2026', text: 'Vai ami vule dui minute age amr phone number ' },
    { id: 15, author: 'Author Name, 5 February 2026', text: 'my phone number is 01651612165165' },
    { id: 16, author: 'Author Name, 10 March 2026', text: 'nothing flashy but atleast it works men ' },
    { id: 17, author: 'Author Name, 15 April 2026', text: 'I am amazed what can be achieved .' },
    { id: 18, author: 'Author Name, 20 May 2026', text: 'Best wishes men  ' },
    { id: 19, author: 'Author Name, 25 June 2026', text: 'Anonymous comment korar thakle valo hoto ' },
    { id: 20, author: 'Author Name, 30 July 2026', text: 'hebbi hoyeche bro' },
  ];

  // pagination stuff is written here 
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  const totalPages = Math.ceil(totalComments / commentsPerPage);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction === selectedReaction ? null : reaction);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4">
      <h2>Home Page</h2>
      <h1 className={styles.heading}>Welcome to My Home Page</h1>
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-text">
            Welcome to my home page , we are going to explore a tech cave built by a newbie in cse . But we have a long way to go and learning is just the fun part of it 
          </p>
          <div style={{ height: '150px', backgroundColor: 'green' }} className="mb-3"></div>
          <Link to="/about" className="text-primary fw-bold">
            <span className="badge bg-primary">Author Name</span> <small>7 July 2025</small>
          </Link>
        </div>
        <div className="card-footer bg-light">
          <Button
            variant={selectedReaction === 'Like' ? 'primary' : 'outline-primary'}
            className="m-1"
            onClick={() => handleReactionClick('Like')}
          >
            Like 20%
          </Button>
          <Button
            variant={selectedReaction === 'Love' ? 'danger' : 'outline-danger'}
            className="m-1"
            onClick={() => handleReactionClick('Love')}
          >
            Love 60%
          </Button>
          <Button
            variant={selectedReaction === 'Angry' ? 'warning' : 'outline-warning'}
            className="m-1"
            onClick={() => handleReactionClick('Angry')}
          >
            Angry 5%
          </Button>
          <Button
            variant={selectedReaction === 'Sad' ? 'info' : 'outline-info'}
            className="m-1"
            onClick={() => handleReactionClick('Sad')}
          >
            Sad 5%
          </Button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5>{totalComments} Comments</h5>
          {currentComments.map((comment) => (
            <div key={comment.id} className="mb-2">
              <Link to="/about" className="text-primary">
                <span className="badge bg-primary">{comment.author}</span>
              </Link>
              <p className="text-muted">{comment.text}</p>
            </div>
          ))}
          <div className="d-flex justify-content-center mt-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'primary' : 'outline-primary'}
                className="m-1"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          <div className="input-group mt-3">
            <input type="text" className="form-control" placeholder="Write your comment..." />
            <Button variant="primary">→</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;