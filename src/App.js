import React from 'react';
import ProfileCard from './components/ProfileCard';
import BlogCard from './components/BlogCard';
import Form from './components/Form';
import './App.css';
import profileImage from './assets/profile.jpg';
import blogImage from './assets/blog.jpg';

function App() {
  return (
    <div className="App">
      <h1 className="header">My Profile</h1>

      <div className="profile-section">
        <ProfileCard
          name="Azima Tostonova"
          image={profileImage}
          description="I am a UCA Computer Science Student, class of 2027."
        />
      </div>

      <div className="blog-section">
        <BlogCard
          title="How to Deal with IT Operation Problems"
          description="IT operations can be tricky, but here are some tips on troubleshooting and solving common issues."
          imageUrl={blogImage}
        />
      </div>

      <div className="form-section">
        <Form />
      </div>
    </div>
  );
}

export default App;
