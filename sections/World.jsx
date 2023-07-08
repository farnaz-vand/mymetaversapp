'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
    <section className={ `${ styles.paddings } relative z-10` }>
      <motion.div
        variants={ staggerContainer }
        initial="hidden"
        whileInView="show"
        viewport={ { once: 'false', amount: 0.25 } }
        className={ `${ styles.innerWidth } flex flex-col gap-8 mx-auto` }
      >
        <TypingText
          title="| People on the World"
          textStyles="text-center"
        />
        <TitleText
          title={ 
                  <>
                    Track friends around you and invite them to play together in the same world
                  </> 
                }
          textStyles="text-center"
        />

        <motion.div
          variant={ fadeIn('up', 'tween', 0.3, 1) }
          className="flex w-full h0 [550px] relative"
        >
          <img 
            src="/assets/map.png"
            alt="A map of the world with various pointers of people's location and activities pinpointed"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </motion.div>
    </section>
);
  
export default World;