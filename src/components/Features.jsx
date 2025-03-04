import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { Link } from "react-router-dom";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
          >
            {/* Radial gradient hover effect */}
            {/* <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p   className="relative z-20">Register Now</p> */}
            <div
  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
  style={{
    opacity: hoverOpacity,
    background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
  }}
/>
<TiLocationArrow className="relative z-20" />
{/* <a 
  href="https://forms.gle/Czq5aWTjg5U3TDJn9" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="relative z-20"
> */}
  <p>Register Now</p>
{/* </a> */}

          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52" id="events">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Explore the Events
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Join us for exciting competitions in web development, blind coding,
          PPT presentations, and gaming. Showcase your skills, connect with
          innovators, and elevate your digital experience!
        </p>
          
        <div className="flex justify-center items-center mt-5"> 

        <h1 className="text-white/50 font-normal text-xl">EVENT SATRTS ON : 18/01/2025</h1>
        </div>

      </div>
    

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
      <a href="https://forms.gle/3VEZhXP88Rf7nktZ9">
        <BentoCard
        
        
          src="videos/feature-1.mp4"
    
          title={
            <>
              G<b>a</b>ming
            </>
          }
          description="Compete in popular games like Free Fire, BGMI, and more. Show off your gaming skills and dominate the leaderboard!"
          isComingSoon
        />
       </a>
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <a href="https://forms.gle/1K9QdpvKPBeayGRY7">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Blind ty<b>p</b>ing
              </>
            }
            description="Showcase your coding skills without real-time feedback. Trust your logic to write flawless code and outshine the competition!"
            isComingSoon
          />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-10 md:col-span-1 md:ms-0">
          <a href="https://forms.gle/1K9QdpvKPBeayGRY7">
          <BentoCard
            src="https://videos.pexels.com/video-files/2759477/2759477-sd_640_360_30fps.mp4"
            title={
              <>
                Web <b>D</b>esign
              </>
            }
            description="Showcase your coding skills without real-time feedback. Trust your logic to write flawless code and outshine the competition!"
            isComingSoon
          />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
               <b>a</b>wa<b>r</b>ds
              </>
            }
            description="Celebrate the winners with exciting prizes for top performances in all competitions!"
            isComingSoon
          />
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt> */}
        <Link to="https://fuchsia-shirline-90.tiiny.site/">
          {/* <Button
            id="watch-trailer"
            title="Event Details"
            leftIcon={<TiLocationArrow />}
            containerClass="flex items-center justify-center self-center"
          /> */}
            <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-white p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
            f<b>o</b>r  m<b>o</b>re Abo<b>u</b>t the greek a<b>u</b>to<b>m</b>ata
            </h1>
            {/* <p className=" mr-5border-black rounded-full bg-black font-robert-medium text-center text-white" >Connect with us!</p> */}


            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
        </Link>

        <Link to="/events">
          {/* <Button
            id="watch-trailer"
            title="Event Details"
            leftIcon={<TiLocationArrow />}
            containerClass="flex items-center justify-center self-center"
          /> */}
            <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-white p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              f<b>o</b>r m<b>o</b>re i<b>n</b>fo Ab<b>o</b>ut the e<b>v</b>ents.
            </h1>
            {/* <p className=" mr-5border-black rounded-full bg-black font-robert-medium text-center text-white" >Connect with us!</p> */}


            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
        </Link>
      </div>
    </div>
  </section>
);

export default Features;
