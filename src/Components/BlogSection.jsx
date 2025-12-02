import { motion } from "framer-motion";
import { useRef } from "react";

const BlogSection = () => {
  const parallaxRef = useRef(null);

  // Parallax effect
  const handleParallax = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;
    parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const blogs = [
    {
      id: 1,
      title: "Top 10 Games You Shouldn’t Miss This Year",
      desc: "Explore the hottest games dominating the charts!",
      image: "https://i.ibb.co.com/xqSxKHcJ/image.png",
    },
    {
      id: 2,
      title: "Why Indie Games Are Taking Over",
      desc: "Small teams, big ideas — indie games are booming!",
      image: "https://i.ibb.co.com/SX5dfG0N/image.png",
    },
    {
      id: 3,
      title: "Upcoming Releases You Must Watch",
      desc: "Get a peek at next season’s most hyped games.",
      image: "https://i.ibb.co.com/BVMKbdk9/image.png",
    },
    {
      id: 4,
      title: "Upcoming Releases You Must Watch",
      desc: "Get a peek at next season’s most hyped games.",
      image: "https://i.ibb.co.com/BVMKbdk9/image.png",
    },
  ];

  return (
    <div
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
      onMouseMove={handleParallax}
    >
      {/*  Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-[url('https://i.imgur.com/0fI7wGK.jpeg')] bg-cover bg-center opacity-20"
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-11/12 mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center text-red-500 drop-shadow-lg"
        >
          Latest From Our Blog ⚡
        </motion.h2>

        {/* Blog Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.07,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.9)",
              }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-transform cursor-pointer"
            >
              <img
                src={blog.image}
                alt="Blog Preview"
                className="w-full h-48 object-cover"
              />

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-red-400">{blog.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {blog.desc}
                </p>

                <button className="text-red-400 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
