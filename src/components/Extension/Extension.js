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
import "./Extension.css"; // Link to your CSS file

const Extension = () => {
  return (
    <div className="container1">
      <div className="headline1">
        <h1>Use as Extension</h1>
        <p className="description1">
        Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

        </p>
        <button className="btn-get-started">
          <span>Let's Go</span>
          <div className="icon">
            <div className="group">
              {/* <div className="vector horizontal"></div>
              <div className="vector vertical"></div> */}
            </div>
          </div>
        </button>
      </div>
      <div className="image-container1"></div>
    </div>
  );
};

export default Extension;
