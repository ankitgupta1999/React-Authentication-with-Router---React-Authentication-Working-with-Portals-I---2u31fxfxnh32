// import React from 'react';

// function Store() {
    
//     return (
//         <div className='store'>
//             <h2>Welcome to the store!</h2>
//             <button className="logout-btn">Logout</button>
//         </div>
//     );
// }

// export default Store;

import React from 'react';
import { Redirect } from 'react-router-dom';

const Store = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="store">
      <h1>Welcome to the Store</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Store;
