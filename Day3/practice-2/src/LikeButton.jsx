import React, { useState } from 'react';

export default function LikeButton() {
  // boolean: true when liked, false when unliked
  const [liked, setLiked] = useState(false);
  // number: how many likes (starts at 0)
  const [count, setCount] = useState(0);

  // toggle handler: flips liked state and updates count
  function handleToggle() {
    setLiked(prevLiked => {
      const nowLiked = !prevLiked;
      setCount(prevCount => Math.max(0, prevCount + (nowLiked ? 1 : -1)));
      return nowLiked;
    });
  }

  // UI text & emoji based on liked state
  const emoji = liked ? '❤️' : '🤍';
  const label = liked ? 'Liked' : 'Like';
  const likesText = `${count} ${count === 1 ? 'like' : 'likes'}`;

  return (
    <div style={{ display: 'inline-block', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <button
        onClick={handleToggle}
        aria-pressed={liked}
        style={{
          cursor: 'pointer',
          padding: '10px 14px',
          borderRadius: 8,
          border: 'none',
          fontSize: 16,
          background: liked ? '#ffe6ea' : '#f2f2f2',
          color: liked ? '#c00' : '#333',
        }}
      >
        {emoji} {label}
      </button>

      <div style={{ marginTop: 8, fontSize: 14 }}>{likesText}</div>
      <div style={{ fontSize: 12, color: '#666', marginTop: 6 }}>(Click to toggle)</div>
    </div>
  );
}
