// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/styles.css';
// import Nav from './Nav';
// import Sidenav from './Sidenav';
// import Panel from './Panel';
// import Footer from './Footer';

// const Test = () => {
//   const [value, setValue] = useState('');

//   const fetchCommands = async () => {
//     try {
//       const res = await axios.post('http://localhost:3001/commands', {
//         name: value,
//       });
//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // const handleOnChange = e => {
//   //   if (e.currentTarget.value) setValue(e.currentTarget.value);
//   // };

//   // const handleOnSubmit = e => {
//   //   e.preventDefault();
//   //   fetchCommands();
//   // };

//   // return (
//   //   <>
//   //     <form>
//   //       <input type="text" classNameName="form-control"
//   // value={value} onChange={e => handleOnChange(e)} />
//   //       <input type="submit" classNameName="btn btn-discord btn-lg"
//   // value="Submit" onClick={e => handleOnSubmit(e)} />
//   //     </form>
//   //   </>
//   // );

//   return (
//     <>
//       <Nav />
//       <div id="layoutSidenav">
//         <Sidenav />
//         <div id="layoutSidenav_content">
//           <Panel />
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test;
