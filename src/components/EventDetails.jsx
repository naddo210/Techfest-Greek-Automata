// import React, { useRef, useState } from "react";
// import { BentoTilt } from "./Features";
// import AnimatedTitle from "./AnimatedTitle";
// import { TiLocationArrow } from "react-icons/ti";

// export const BentoCard = ({ src, title, description, isComingSoon }) => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   const [hoverOpacity, setHoverOpacity] = useState(0);
//   const hoverButtonRef = useRef(null);

//   const handleMouseMove = (event) => {
//     if (!hoverButtonRef.current) return;
//     const rect = hoverButtonRef.current.getBoundingClientRect();

//     setCursorPosition({
//       x: event.clientX - rect.left,
//       y: event.clientY - rect.top,
//     });
//   };

//   const handleMouseEnter = () => setHoverOpacity(1);
//   const handleMouseLeave = () => setHoverOpacity(0);

//   return (
//     <div className="relative size-full">
//       <img
//         src={src}
//         className="absolute left-0 top-0 size-full object-cover object-center"
//       />
//       <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
//         <div className="mb-4">
//           <h1 className="bento-title special-font">{title}</h1>
//           {description && (
//             <p
//               className="mt-3 max-w-64 text-xs md:text-base"
//               dangerouslySetInnerHTML={{ __html: description }}
//             ></p>
//           )}
//         </div>

//         {isComingSoon && (
//           <div
//             ref={hoverButtonRef}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className=" border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-gray-400"
//           >
//             {/* Radial gradient hover effect */}
//             <div
//               className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
//               style={{
//                 opacity: hoverOpacity,
//                 background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
//               }}
//             />
//             <TiLocationArrow className="relative z-20" />
//             <p className="relative z-20 ">18 Jan 2025</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const EventDetails = () => {
//   return (
//     <section className="pt-32 bg-black pb-52">
//       <div className="container mx-auto px-3 md:px-10">
//         <AnimatedTitle
//           title="Event Details"
//           className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
//         />

//         <div className="seperator mt-8"></div>

//         <div className="grid min-h-[135vh] w-full grid-cols-2 gap-7">
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/web development.avif"
//               title={
//                 <>
//                   Web <b>D</b>evelopment
//                 </>
//               }
//               description="Starting At 8:20 AM <br /> Room No: 601"
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/blind coding.jpg"
//               title={
//                 <>
//                   Blind Co<b>D</b>ing
//                 </>
//               }
//               description="Starting At 8:20 AM <br /> Room No: 301"
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/ludo.avif"
//               title={
//                 <>
//                   Lu<b>D</b>o
//                 </>
//               }
//               description="Starting At 8:20 AM <br /> Room No: 508"
//               isComingSoon
//             />
//           </BentoTilt>

//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/carrom.png"
//               title={
//                 <>
//                   Ca<b>r</b>rom
//                 </>
//               }
//               description="Starting At 8:20 AM <br /> Room No: 508"
//               isComingSoon
//             />
//           </BentoTilt>

//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/bgmi.png"
//               title={
//                 <>
//                   BG<b>M</b>I
//                 </>
//               }
//               description="Starting At 8:20 AM <br /> Room No: 308"
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/freefire.png"
//               title={
//                 <>
//                   Free Fi<b>r</b>e
//                 </>
//               }
//               description="Starting At 9:20 AM <br /> Room No: 308"
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="https://cdn.pixabay.com/photo/2022/02/09/14/22/chess-7003571_1280.jpg"
//               title={
//                 <>
//                   Che<b>s</b>s
//                 </>
//               }
//               description="Starting At 9:20 AM <br /> Room No: 508"
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/debugging.png"
//               title={
//                 <>
//                   De<b>b</b>ugging
//                 </>
//               }
//               description="Starting At 9:20 AM <br /> Room No: 301"
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/presentation.png"
//               title={
//                 <>
//                   Present<b>a</b>tion
//                 </>
//               }
//               description="Starting At 9:20 AM <br /> Room No: 601"
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/challenge.png"
//               title={
//                 <>
//                   Challe<b>n</b>ges
//                 </>
//               }
//               description="
//               Starting At 9:20 AM
//                <br />
//                 BGMI - Room No: 601
//                 <br />
//                 FREE FIRE - Any Class 20min
//                 <br />
//                 Ludo, Carrom - Room No: 508
//                 <br />
//                 QUIZ - Room No: 301
//                 "
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/final round.png"
//               title={
//                 <>
//                   Final R<b>o</b>und
//                 </>
//               }
//               description="
//               Starting At 12:20 PM
//                <br />
//                 BGMI Final - Room No: 301
//                 <br />
//                 FREE FIRE Final - Room No: 601
//                 <br />
//                 QUIZ Final - Room No: 601
//                 "
//               isComingSoon
//             />
//           </BentoTilt>
//           <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
//             <BentoCard
//               src="img/prize.png"
//               title={
//                 <>
//                   Prize Dist<b>r</b>ibution
//                 </>
//               }
//               description="Starting At 1:00 AM"
//               isComingSoon
//             />
//           </BentoTilt>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default EventDetails;

import React, { useRef, useState } from "react";
import { BentoTilt } from "./Features";
import AnimatedTitle from "./AnimatedTitle";
import { TiLocationArrow } from "react-icons/ti";

export const BentoCard = ({ src, videoSrc, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);  // To handle image/video switch on hover
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoverOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverOpacity(0);
  };

  return (
    <div className="relative size-full">
      {/* Image or video depending on hover state */}
      <div className="absolute left-0 top-0 size-full object-cover object-center">
        {isHovered ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="size-full object-cover object-center"
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="size-full object-cover object-center"
          />
        )}
      </div>

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div className="mb-4">
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p
              className="mt-3 max-w-64 text-xs md:text-base"
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
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-gray-400"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">18 Jan 2025</p>
          </div>
        )}
      </div>
    </div>
  );
};

const EventDetails = () => {
  return (
    <section className="pt-32 bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <AnimatedTitle
          title="Event Details"
          className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
        />

        <div className="seperator mt-8"></div>

        <div className="grid min-h-[135vh] w-full grid-cols-2 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/web development.avif"
              videoSrc="https://videos.pexels.com/video-files/2759477/2759477-sd_640_360_30fps.mp4"
              title={<>Web <b>D</b>evelopment</>}
              description="Starting At 8:20 AM <br /> Room No: 601"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/blind coding.jpg"
              videoSrc="/videos/feature-2.mp4"
              title={<>Blind Co<b>D</b>ing</>}
              description="Starting At 8:20 AM <br /> Room No: 301"
              isComingSoon
            />
          </BentoTilt>
         
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/ludo.avif"
              videoSrc="https://videos.pexels.com/video-files/4168972/4168972-sd_640_360_25fps.mp4"
              title={<>Lu<b>D</b>o</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/carrom.png"
              videoSrc="https://videos.pexels.com/video-files/5657107/5657107-sd_640_360_25fps.mp4"
              title={<>carr<b>o</b>m</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/bgmi.png"
              videoSrc="/videos/youtube_video_downloader.mp4"
              title={<>bg<b>m</b>i</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/freefire.png"
              videoSrc="/videos/freefire.mp4"
              title={<>free<b>f</b>ire</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="https://cdn.pixabay.com/photo/2022/02/09/14/22/chess-7003571_1280.jpg"
              videoSrc="https://videos.pexels.com/video-files/6688632/6688632-uhd_2560_1440_25fps.mp4"
              title={<>c<b>h</b>ess</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="/img/debugging.png"
              videoSrc="https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4"
              title={<><b>d</b>ebugging</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/presentation.png"
              videoSrc="https://videos.pexels.com/video-files/5725960/5725960-uhd_2560_1440_30fps.mp4"
              title={<>prese<b>n</b>tatio<b>n</b></>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/challenge.png"
              videoSrc="/videos/challenges.mp4"
              title={<>ch<b>a</b>lle<b>n</b>ges</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/final round.png"
              videoSrc="/videos/feature-3.mp4"
              title={<>fi<b>n</b>al r<b>o</b>und</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="img/prize.png"
              videoSrc="/videos/victory.mp4"
              title={<>pri<b>z</b>e distrib<b>u</b>tion</>}
              description="Starting At 8:20 AM <br /> Room No: 508"
              isComingSoon
            />
          </BentoTilt>


          {/* Additional BentoCards can go here */}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
