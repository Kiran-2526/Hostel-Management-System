// import React from 'react'
// import {StudentLogin} from './components/auth/StudentLogin';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { StudentRegister } from './components/auth/StudentRegister';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<StudentLogin/>}/>
//             <Route path='/register' element={StudentRegister}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/auth/StudentLogin.jsx";
import StudentRegister from "./components/auth/StudentRegister.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;