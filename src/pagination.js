// import React from 'react'

// const  Pagination = ({postPerpage,totalPost}) => {
  
//     const PageNumber =[]

//     for (let i = 1; i <= Math.ceil(totalPost/postPerpage); i++) {
//       PageNumber.push(i)
//     }
  
//     return (
//     <nav>
//         <ul className="pagination">
//             {PageNumber.map(number => (
//                 <li key={number} className="page-item">
//                     <a className="page-link" href="#">
//                         {number}
//                     </a>
//                     </li>
//         ))}
//         </ul>
//     </nav>
//   )
// }

// export default Pagination