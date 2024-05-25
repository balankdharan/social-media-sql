import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "Test man",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmntayKq1xRQ2h06lToEYqZGjBJLevK63Cc_DpBgpmQ&s",
    },
    {
      id: 2,
      name: "Test man",
      img: "https://i.pinimg.com/originals/74/c0/6d/74c06dd03468d7a3aba5a0ee63bc3553.jpg",
    },
    {
      id: 3,
      name: "Test man",
      img: "https://img.freepik.com/free-vector/food-instagram-stories-template-collection_52683-11440.jpg",
    },
    {
      id: 4,
      name: "Test man",
      img: "https://i.pinimg.com/originals/74/c0/6d/74c06dd03468d7a3aba5a0ee63bc3553.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="storyImage" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="storyImage" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
