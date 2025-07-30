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

  // Sample comments data (static, no database)
  const comments = [
    { id: 1, author: 'Author Name, 7 January 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 2, author: 'Author Name, 10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 3, author: 'Author Name, 10 February 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 4, author: 'Author Name, 12 March 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 5, author: 'Author Name, 15 April 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 6, author: 'Author Name, 20 May 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 7, author: 'Author Name, 25 June 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 8, author: 'Author Name, 30 July 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 9, author: 'Author Name, 5 August 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 10, author: 'Author Name, 10 September 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 11, author: 'Author Name, 15 October 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 12, author: 'Author Name, 20 November 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 13, author: 'Author Name, 25 December 2025', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 14, author: 'Author Name, 30 January 2026', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 15, author: 'Author Name, 5 February 2026', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 16, author: 'Author Name, 10 March 2026', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 17, author: 'Author Name, 15 April 2026', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 18, author: 'Author Name, 20 May 2026', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 19, author: 'Author Name, 25 June 2026', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
    { id: 20, author: 'Author Name, 30 July 2026', text: 'Lorem ipsum Dolor Lorem ipsum Dolor...' },
  ];

  // Pagination logic
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
            Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor
          </p>
          <div style={{ height: '150px', backgroundColor: 'maroon' }} className="mb-3"></div>
          <Link to="/about" className="text-primary fw-bold">
            <span className="badge bg-primary">Author Name</span> <small>7 January 2025</small>
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