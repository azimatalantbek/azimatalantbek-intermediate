import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt="profile" className="profile-img" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
}

export default ProfileCard;
