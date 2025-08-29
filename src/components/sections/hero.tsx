import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Element, Link as ScrollLink } from "react-scroll";
import Marquee from "react-fast-marquee";
import { FaDiamond } from "react-icons/fa6";

import AceternityIcon from "~/components/common/aceternity-btn";
import useIsMobile from "~/hooks/useIsMobile";
import { ANIMATION_CONFIG, TAGS } from "~/data";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <Element name="hero" id="hero">
      <AnimatePresence>
        <main className="relative flex min-h-screen flex-col items-center gap-7 pt-24 sm:justify-center sm:pt-0 ">
          <Image
            src={"/assets/spotlight-left.svg"}
            alt={"spotlight"}
            width={1000}
            height={1000}
            onDragStart={(e) => e.preventDefault()}
            className="absolute left-0 top-0  object-contain"
          />
          <Image
            src={"/assets/spotlight-right.svg"}
            alt={"spotlight"}
            width={1000}
            height={1000}
            onDragStart={(e) => e.preventDefault()}
            className="absolute right-0 top-0 object-contain"
          />
          <motion.div
            {...ANIMATION_CONFIG}
            layout
            className="relative mt-0 flex w-full flex-col items-center justify-center gap-3 px-[4%] sm:mt-16 sm:px-[6%]"
          >
            <div
              style={{
                background:
                  "radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%) ",
              }}
              className="mb-4 mt-20 rounded-lg border border-[rgba(105,113,162,0.16)] px-2.5 py-[5px] text-sm text-tertiary text-opacity-80 shadow-deep-inset sm:text-lg"
            >
              🚀 Many Web Applications In Production
            </div>
            <div className="flex flex-col text-center mt-4 font-thunder-semibold text-4xl tracking-wider sm:max-w-[80vw] md:text-8xl">
              <span>Design Meets Functionality </span>
              <div className="mt-2">
                <span className="uppercase text-blue">I Code </span> 
                What You Imagine.....
              </div>
            </div>

            <p className=" max-w-[90vw] text-lg text-tertiary md:max-w-[60vw]">
             I create modern, responsive web applications with clean code and scalable design.
Turning complex ideas into simple, powerful digital solutions
            </p>
          </motion.div>

          <ScrollLink
            activeClass="about"
            to="about"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            <AceternityIcon className="!rounded-[14px] capitalize">
              explore more
            </AceternityIcon>
          </ScrollLink>

          <div className="clipbg mt-12 flex w-[93vw] justify-self-center bg-[#c2cde7] pt-1 sm:mt-28 sm:pb-0.5 sm:pt-2 ">
            <Marquee
              speed={100}
              gradient={true}
              gradientColor={"#c2cde7"}
              gradientWidth={isMobile ? 180 : 430}
            >
              <div className="flex w-full grid-flow-col items-center justify-between  text-primary">
                {TAGS.map((t, i) => (
                  <div key={i} className="mx-2 flex items-center sm:mx-7 ">
                    <div className="font-thunder-semibold text-lg uppercase tracking-wider sm:text-2xl">
                      {t}
                    </div>
                    <FaDiamond className="mb-1 ml-3 text-[8px] sm:ml-10 sm:text-sm" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </main>
      </AnimatePresence>
    </Element>
  );
};

export default Hero;
