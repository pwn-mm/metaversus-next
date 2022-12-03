'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TypingText, StartSteps, TitleText } from '../components';
import { startingFeatures } from "../constants";

// Project revision

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* Planet */}
      <motion.div
        variants={planetVariants('left')} c
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      {/* Text */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.25, 10)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title=" | How Metaverse Works " />
        <TitleText title={<>Get started with just a few click</>} />
        {/* Starting features */}
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
