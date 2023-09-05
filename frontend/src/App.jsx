// // // import React from 'react';
// // // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // // import WebFont from 'webfontloader'; // Import WebFont

// // // // import Home_Page from './home_page';
// // // // import Cart_Page from './Cart_Page';
// // // // import Login_Page from './Login_Page';

// // // // import React from 'react'
// // // import Login_Page from './Login-Page'
// // // // import WebFont from 'webfontloader';
// // // import Home_Page from './home_page';
// // // // import { Routes, Route } from 'react-router-dom';
// // // import Cart_Page from './Cart_Page';

import React from 'react'
import Login_Page from './Login-Page'
import WebFont from 'webfontloader';
import Home_Page from './home_page';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Cart_Page from './Cart_Page';
import Register from './Register';


WebFont.load({
  google: {
    families: ['Montaga', 'Homemade Apple', 'Jomolhari', 'Oswald'],
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/login" element={<Login_Page />} />
        <Route path="/cart" element={<Cart_Page />} />
        <Route path = "/register" element = {<Register />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import React from 'react'
// import Login_Page from './Login-Page'
// import WebFont from 'webfontloader';
// import Home_Page from './home_page';
// import { Routes, Route } from 'react-router-dom';
// import Cart_Page from './Cart_Page';
// import Register from './Register';


// WebFont.load({
//   google: {
//     families: ['Montaga', 'Homemade Apple','Jomolhari','Oswald']
//   },
// });
// function App() {

//   return (
//     <>

//   <Routes>
    
//   <Route path="/" element={<Login_Page/>} />
//   <Route path="home/shistiiii/Documents/shistii/Kings_Canteen/src/home_page.jsx" element={<Home_Page/>} />
//   <Route path="home/shistiiii/Documents/shistii/Kings_Canteen/src/Cart_Page.jsx" element={<Cart_Page/>} />


//   </Routes>

//     </>

//   )
// }

// export default App



// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
// import WebFont from 'webfontloader';
// import home_Page from './home_page';
// import Login_Page from './Login-Page'; // Corrected component name
// import Cart_Page from './Cart_Page';

// WebFont.load({
//   google: {
//     families: ['Montaga', 'Homemade Apple', 'Jomolhari', 'Oswald'],
//   },
// });

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<home_Page />} />
//         <Route path="/login" element={<Login_Page />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
