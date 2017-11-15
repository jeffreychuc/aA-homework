import React from 'react';

import GiphysIndexItem from './giphys_index_item';

function GiphysIndex({ giphys }) {
  console.log("index");
  return (
    <ul>
      { giphys.map(giphy => <GiphysIndexItem key={giphy.id} giphy={giphy} />) }
    </ul>
  );
}

export default GiphysIndex;
