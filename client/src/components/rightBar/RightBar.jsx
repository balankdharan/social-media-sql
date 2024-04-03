import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <span>Test User</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <span>Test User</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Actvities</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <p>
                <span>Test User</span> changed cover
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <p>
                <span>Test User</span> changed cover
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <p>
                <span>Test User</span> changed cover
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <p>
                <span>Test User</span> changed cover
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <div className="online" />
              <span>Test User</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <div className="online" />
              <span>Test User</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <div className="online" />
              <span>Test User</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
                alt="profile"
              />
              <div className="online" />
              <span>Test User</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
