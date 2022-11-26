const element = (
  <div className="card_background">
    <div className="card-heading">
      <h1 className="card-text">Congratulations</h1>
    </div>
    <div className="card-container">
      <img
        className="card-profile"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="profile-name">Kiran V</p>
      <p className="profile-description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram{" "}
      </p>
      <img
        className="watch-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
