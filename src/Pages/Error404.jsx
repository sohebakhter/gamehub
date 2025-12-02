const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-10 min-h-screen">
      <h1 className="text-red-500 text-8xl">404</h1>
      <h1 className="font-semibold text-3xl mt-10 text-center">OPPS!! PAGE NOT FOUND</h1>

      <a href="/">
        <button className="btn btn-ghost block mx-auto mt-5 bg-red-700 text-white">
          Go Back
        </button>
      </a>
    </div>
  );
};

export default Error404;
