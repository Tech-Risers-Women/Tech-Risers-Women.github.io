import React from 'react';
import './error.css';

function Error() {
  return (
    <div className='error'>
      <h2>404 - Page Not Found</h2>
      <p>
        <a
          href='https://www.techriserswomen.com/'
          title='Tech risers Women main page'>
          Click here
        </a>{' '}
        to go back to the main page, or use the menu to find a page that does
        exist.
      </p>
    </div>
  );
}

export default Error;
