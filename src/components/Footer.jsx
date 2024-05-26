import React, { useState, useEffect } from 'react';

function Footer({ loadMore }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className='text-center mb-4'>
      {showButton && (
        <button type="button" className="btn btn-danger" onClick={loadMore}>
          See more
        </button>
      )}
    </div>
  );
}

export default Footer;
