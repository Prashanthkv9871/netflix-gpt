const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6  text-lg w-2/5">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white hover:opacity-80 rounded-md px-10 text-xl text-black py-2.5">▶️ Play</button>
        <button className="bg-gray-600 hover:opacity-80 rounded-md px-10 text-xl text-white py-2.5">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
