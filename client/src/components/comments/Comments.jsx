import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import moment from "moment";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["comments"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId: postId });
    setDesc("");
  };
  // const comments = [
  //   {
  //     id: 1,
  //     desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
  //     name: "Test user",
  //     userId: 1,
  //     profilePicture:
  //       "https://cdn.create.vista.com/downloads/95fde899-9c9b-448e-abcd-d74ff7854b6c_640.jpeg",
  //   },
  //   {
  //     id: 2,
  //     desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
  //     name: "Test man",
  //     userId: 2,
  //     profilePicture:
  //       "https://cdn.create.vista.com/downloads/95fde899-9c9b-448e-abcd-d74ff7854b6c_640.jpeg",
  //   },
  // ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="imgofpic" />
        <input
          type="text"
          placeholder="Write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? "Loading"
        : data.map((comment) => (
            <div className="comment">
              <img src={comment.profilePic} alt="imgofpic" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
