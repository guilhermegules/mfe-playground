import React from "react";
import { getPosts } from "../../requests/posts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const HomeContent = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <>
      <Header title={"Home title"} />
      <section className="grid grid-cols-4 gap-5 p-10">
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-lg font-bold mb-1">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};
