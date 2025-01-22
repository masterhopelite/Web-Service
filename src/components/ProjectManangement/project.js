// import React from "react";
// import "./project.css"; // Link to your CSS file

// const Project = () => {
//   return (
//     <div className="container">
//       <div className="headline">
//         <h1>Project Management</h1>
//         <p>
//           Images, videos, PDFs and audio files are supported. Create math
//           expressions and diagrams directly from the app. Take photos with the
//           mobile app and save them to a note.
//         </p>
//       </div>
//       <button className="btn-get-started">
//         <span>Get Started</span>
//         <div className="icon">
//           <div className="group">
//             <div className="vector horizontal"></div>
//             <div className="vector vertical"></div>
//           </div>
//         </div>
//       </button>
//       <div className="image-container"></div>
//     </div>
//   );
// };

// export default Project;
import React from "react";
import "./p2.css"; // Link to your CSS file

const Project = () => {
  return (
    <div className="container2">
      <div className="headline2">
        <h1>Project Management</h1>
        <p className="description2">
          Manage your projects efficiently with our comprehensive tools. Create, edit,
          and track your work with ease. Enhance productivity and streamline collaboration.
        </p>
        <button className="btn-get-started2">
          <span>Get Started</span>
          <div className="icon2">
            <div className="group2">
              {/* <div className="vector horizontal2"></div>
              <div className="vector vertical2"></div> */}
            </div>
          </div>
        </button>
      </div>
      <div className="image-container2"></div>
    </div>
  );
};

export default Project;
