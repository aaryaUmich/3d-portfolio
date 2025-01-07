import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {github} from '../assets';
import { SectionWrapper } from '../hoc';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className = {styles.sectionSubText}>My work</p>
      <h2 className = {styles.sectionHeadText}>Projects</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p
        variants = {fadeIn("","", 0.1,1)}
        className = "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I've worked on a lot of projects over the years, and these are some of my favorites. 
        I'm always up for starting something new and seeing where it goes, and applying the skills I am actively learning in school. 
        I've attatched brief descriptions of each project, as well as links to their respective GitHub repositories.
        I hope you enjoy them as much as I enjoyed making them!

      </motion.p>
    </div>
    </>
  )
}

export default SectionWrapper(Works, "")