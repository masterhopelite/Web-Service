import React from "react";
import "./p2.css"; // Link to your CSS file

const Customize = () => {
  return (
    <div className="container3">
      <div className="image-container3"></div>
      <div className="content-container3">
        <div className="headline3">
          <h1>Customise it
          to your needs</h1>
          <p className="description3">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="btn-get-started3">
            <span>Let's Go</span>
            <div className="icon3">
              <div className="group3">
                {/* <div className="vector horizontal2"></div>
                <div className="vector vertical2"></div> */}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
