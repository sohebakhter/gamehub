import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import { FaBackward } from "react-icons/fa";
import Footer from "../Components/Footer";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Best PUBG Survival Tips",
      author: "Arif_Gamer",
      content:
        "Let’s discuss how to survive till the last zone — any pro strategies?",
    },
    {
      id: 2,
      title: "Favorite Game of 2025?",
      author: "LunaPlayz",
      content: "Which game blew your mind this year? Share your experiences!",
    },
    {
      id: 3,
      title: "New Esports Tournament!",
      author: "GameMasterX",
      content: "We’re organizing a local Esports event — who’s joining?",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.author && newPost.content) {
      const post = { id: Date.now(), ...newPost };
      setPosts([post, ...posts]);
      setNewPost({ title: "", author: "", content: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <title>GameHub | Community</title>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-2 text-blue-400">
            GameHub Community
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join discussions, share your gaming experiences, and connect with
            other players worldwide. Be part of our growing gaming community!
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-semibold transition"
          >
            {showForm ? "Cancel" : "Create Post"}
          </button>
        </div>

        {/* Create Post Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-800 p-6 rounded-2xl shadow-md mb-10"
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-300">
              Create New Post
            </h2>
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Author Name"
              value={newPost.author}
              onChange={(e) =>
                setNewPost({ ...newPost, author: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Write your content..."
              rows="4"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-semibold transition"
            >
              Post
            </button>
          </form>
        )}

        {/* Posts Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-300 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 mb-3">By {post.author}</p>
              <p className="text-gray-200 text-sm">{post.content}</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Join Discussion
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-30 text-gray-400 text-sm">
          <Link to="/" className="btn bg-blue-600 border-blue-600 text-white">
            <FaBackward />
            Back To Home
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Community;
