import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I am good at</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((tech, index) => {
          return (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
