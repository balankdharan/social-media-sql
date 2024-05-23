import { makeRequest } from "../../axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      makeRequest.get("/posts?userId=" + userId).then((res) => res.data),
  });

  // const posts = [
  //   {
  //     id: "1",
  //     name: "Test man",
  //     userId: 1,
  //     profilePic:
  //       "https://www.thecompassncsd.com/wp-content/uploads/2024/02/child-phone-Social-Media-1387329287-967x544-1.jpg",
  //     desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
  //     img: "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Editable-Food-Instagram-Story-Design-1180x664.jpg",
  //   },
  //   {
  //     id: "2",
  //     name: "Test man",
  //     userId: 1,
  //     profilePic:
  //       "https://www.thecompassncsd.com/wp-content/uploads/2024/02/child-phone-Social-Media-1387329287-967x544-1.jpg",
  //     desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
  //     img: "https://elements-cover-images-0.imgix.net/6f1931c7-7147-425a-814d-b76263f567cf?auto=compress%2Cformat&fit=max&w=900&s=3673bd225fcbd2d9e03fda00fbb1566a",
  //   },
  // ];
  return (
    <div className="posts">
      {error
        ? "Something went wrong "
        : isLoading
        ? "Loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
