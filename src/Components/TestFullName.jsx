import { motion } from "framer-motion";

export default function FullName() {
    const name = "John Paul Larkin";
    const nameArray = name.split("");
  
    const capitals = (index) => {
      const jPos = 0;
      const pPos = 5;
      const lPos = 10;
  
      if (index === jPos || index === pPos || index === lPos) {
        return { delay: 0.2 + index * 0.1 };
      } else if (index === 1 || index === 2 || index === 3) {
        return { delay: 2.3, duration: 0.9 };
      } else if (index === 6 || index === 7 || index === 8) {
        return { delay: 2.8, duration: 0.8 };
      } else {
        return { delay: 3.4, duration: 0.7 };
      }
    };

    
  return (
    <>
      <div className="name">
        {nameArray.map((letter, index) => {
          return (
            <motion.div className="letters" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={capitals(index)}>
              {letter}
            </motion.div>
          );
        })}
      </div>

      <motion.div className="web-design" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.3, duration: 1 }}>
        Front-end web design
      </motion.div>
    </>
  );
}
