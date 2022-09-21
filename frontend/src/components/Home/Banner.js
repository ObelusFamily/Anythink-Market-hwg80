import React from 'react';

const Banner = (props) => {
  const { onSearch } = props;
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <div>
          <span id="get-part">A place to get</span>
          <input
            onChange={(e) => onSearch(e.target.value)}
            type="text"
            id="search-box"
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
