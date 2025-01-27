const Newsletter = () => {
  return (
    <div className=" text-white pb-6">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter for updates on medical camps and special events.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-96 bg-white text-black focus:outline-none"
          />
          <button className="btn bg-[#2B4E86] text-white px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
