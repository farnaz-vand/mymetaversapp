'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, alt, index }) => (
    <motion.div
      variants={ fadeIn('up', 'spring', index * 0.5, 1) }
      className="flex flex-col md:flex-row gap-4"
    >
      <img
        src={ imgUrl }
        alt={ alt }
        className="w-full h-[250px] md:w-[270px] rounded-[32px] object-cover"
      />

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col flex-1 md:ml-[62px] max-w-[650px]">
          <span className="font-normal lg:text-[42px] text-[26px] text-white">{ title }</span>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-ChineseSilver">{ subtitle }</p>
        </div>

        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white cursor-pointer hover:scale-105 transition-all">
          <img
            src="/assets/arrow.svg"
            alt="A white arrow pointing north east"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>

      </div>

    </motion.div>
  );
  
  export default InsightCard;