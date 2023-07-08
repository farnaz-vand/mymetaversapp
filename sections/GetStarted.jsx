'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";

const GetStarted = () => (

    <section className={ `${ styles.paddings } relative z-[10]` }>
      <div className="gradient-04 z-0"/>
      <motion.div
        variants={ staggerContainer }
        initial="hidden"
        whileInView="show"
        viewport={ { once: 'false', amount: 0.25 } }
        className={ `${ styles.innerWidth } mx-auto flex lg:flex-row flex-col gap-8` }
      >
        <motion.div
          variants={ planetVariants('left') }
          className={ `${ styles.flexCenter } flex-1` }
        >

          <img 
            src="assets/get-started.png"
            alt="a fantasy globe of bright blue, pink and purple lands and shades"
            className="w-[90%] h-[90%] object-contain"
          />

        </motion.div>

        <motion.div
          variants={ fadeIn('left', 'tween', 0.2, 1) }
          className="flex-[0.75] flex flex-col justify-center"
        >

        <TypingText title="| How Metaversus Works" />
        <TitleText title={ <>Get started with just a few clicks</> } />

        <div className="flex flex-col mt-[31px] max-w-[370px] gap-[24px]">
          { startingFeatures.map((feature, index) => (
            <StartSteps 
              key={ feature }
              number={ index + 1 }
              text={ feature }
            />
          )) }
        </div>

        </motion.div>

      </motion.div>
    </section>
);
  
export default GetStarted;