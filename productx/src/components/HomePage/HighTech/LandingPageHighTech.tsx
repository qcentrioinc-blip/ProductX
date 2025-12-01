// import { Link } from "react-router-dom";

const LandingPageHighTech = () => {
  return (
    <div className="w-full bg-black">
      <video
        className="w-full h-auto max-h-screen object-cover"
        src="/HighTech/HighTechVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LandingPageHighTech;
