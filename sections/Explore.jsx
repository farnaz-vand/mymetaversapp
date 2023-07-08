'use client';

import { usestate } from 'react'
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';  
import {ExploreCard, TitleText, TypingText} from  '../components'
import {exploreWords} from '../constants'




const Explore = () => (
  <section className={`${styles.paddings}`}
  id="explore">

<motion.div
variants={staggerContainer}
initial="hidden"
whileInView="show"
viewport={{once: false, amount:0.25}}
className={`{styles.innerWidth} mx-auto flex flex-col`}
>
<TypingText title="| The World"
textStyles="text-center"
/>
<TitleText title={<>Choose the world you want
<br className="md-block hidden"/> to explore </>} textStyles="text-center" />



</motion.div>
  </section>
);

export default Explore;
