import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
      name: "Test user",
      userId: 1,
      profilePicture:
        "https://cdn.create.vista.com/downloads/95fde899-9c9b-448e-abcd-d74ff7854b6c_640.jpeg",
    },
    {
      id: 2,
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
      name: "Test man",
      userId: 2,
      profilePicture:
        "https://cdn.create.vista.com/downloads/95fde899-9c9b-448e-abcd-d74ff7854b6c_640.jpeg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="imgofpic" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="imgofpic" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
