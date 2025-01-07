import React, { useRef, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";
import { TiLocationArrow } from "react-icons/ti";

export const BentoCard = ({ src, title, description, isComingSoon, post }) => {
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
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover "
        style={{ objectPosition: "0 -30px" }}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div className="mb-4">
          <h1 className="bento-title special-font text-[#f0f0f0]">{title}</h1>
          {description && (
            <p
              className="mt-3 max-w-64 text-xs md:text-base text-[#f0f0f0] "
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20 text-[#ccc] " />
            <p className="relative z-20 text-[#ccc] ">{post}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className="pt-32 bg-black pb-8">
      <div className="container mx-auto px-3 md:px-10">
        <AnimatedTitle
          title="Meet Developers"
          className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
        />
      </div>

      <div className="seperator mt-8"></div>

      <div className="grid min-h-[100vh] w-full grid-cols-2 grid-rows-4 md:grid-rows-2 gap-7 px-4 md:px-16">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 row-span-2">
          <BentoCard
            src="img/team/tauseef ahmad.png"
            title={
              <>
                Tauseef <b>A</b>hm<b>A</b>d
              </>
            }
            description="<b>SY.IT Student</b>"
            isComingSoon
            post={"Software Developer"}
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 row-span-2">
          <BentoCard
            src="img/team/ammar.png"
            title={
              <>
                Mohammad <b>A</b>mm<b>A</b>r
              </>
            }
            description="<b>SY.IT Student</b>"
            isComingSoon
            post={"Fullstack Developer"}
          />
        </BentoTilt>
      </div>
    </section>
  );
};

export default OurTeam;
