import React from 'react';

function GiphysIndexItem({ giphy }) {
  console.log('index item rendering ', giphy);
  return (
    <li className="giphy-li">
      <img src={giphy.images.fixed_height.url} />
    </li>
  );
}

export default GiphysIndexItem;
