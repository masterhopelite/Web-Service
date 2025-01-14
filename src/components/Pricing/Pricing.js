import React from "react";
import "./pricing.css"; // Linking the CSS file

const Pricing = () => {
  return (
    <><div className="choose-plan-container">
      {/* Background Vectors */}
      <div className="vector vector-1"></div>
      <div className="vector vector-2"></div>
      <div className="vector vector-3"></div>
      <div className="vector vector-4"></div>
      <div className="vector vector-5"></div>
      <div className="vector vector-6"></div>
      <div className="vector vector-7"></div>
      <div className="vector vector-8"></div>
      <div className="vector vector-9"></div>
      <div className="vector vector-10"></div>
      {/* Add more vector divs as needed */}

      {/* Title */}
      <h1 className="choose-plan-title">Choose Your Plan</h1>

      {/* Description */}
      <p className="choose-plan-description">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
    </div>
    <div className="price-board">
        <div className="text-block-01">
          <div className="free">Free</div>
          <div className="zero">$0</div>
          <div className="capture-ideas">
            Capture ideas and find them quickly
          </div>
        </div>

        <div className="bullet-points">
          {['Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets', 'Connect primary Google Calendar account', 'Add due dates, reminders, and notifications to your tasks'].map((text, index) => (
            <div key={index} className="point">
              <div className="icon"></div>
              <div className={`sync-devices ${index === 1 ? 'uploads' : ''} ${index === 2 ? 'note-size' : ''} ${index === 3 ? 'dashboard' : ''} ${index === 4 ? 'calendar' : ''} ${index === 5 ? 'due-dates' : ''}`}>
                {text}
              </div>
            </div>
          ))}
        </div>

        <div className="btn-get-started">
          <div className="get-started">Get Started</div>
          
        </div>
      </div>
      <div className="price-board">
      <div className="text-block">
        <div className="personal">Personal</div>
        <div className="price">$11.99</div>
        <div className="description">Keep home and family on track</div>
      </div>

      <div className="bullet-points">
        {[
          'Sync unlimited devices',
          '10 GB monthly uploads',
          '200 MB max. note size',
          'Customize Home dashboard and access extra widgets',
          'Connect primary Google Calendar account',
          'Add due dates, reminders, and notifications to your tasks',
        ].map((text, index) => (
          <div key={index} className="point">
            <div className="icon"></div>
            <div className="feature-text">{text}</div>
          </div>
        ))}
      </div>

      <div className="btn-get-started">
        <div className="get-started">Get Started</div>
      </div>
    </div>
    <div className="price-board">
      <div className="text-block-01">
        <div className="organization">Organization Name</div>
        <div className="price">$49.99</div>
        <div className="tagline">Capture ideas and find them quickly</div>
      </div>
      <div className="bullet-points">
        <div className="point">
          <div className="icon"></div>
          <div className="point-text">Sync unlimited devices</div>
        </div>
        <div className="point">
          <div className="icon"></div>
          <div className="point-text">10 GB monthly uploads</div>
        </div>
        <div className="point">
          <div className="icon"></div>
          <div className="point-text">200 MB max. note size</div>
        </div>
        <div className="point">
          <div className="icon"></div>
          <div className="point-text">Customize Home dashboard and access extra widgets</div>
        </div>
        <div className="point">
          <div className="icon"></div>
          <div className="point-text">Connect primary Google Calendar account</div>
        </div>
        <div className="point">
          <div className="icon"></div>
          <div className="point-text">Add due dates, reminders, and notifications to your tasks</div>
        </div>
      </div>
      <div className="btn-get-started">
        <span className="get-started-text">Get Started</span>
      </div>
    </div>
    </>
  
  );
};

export default Pricing;
