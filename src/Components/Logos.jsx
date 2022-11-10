//hooks
import useWindowDimensions from "../Hooks/useWindowDimensions";
// Logo images
import cssLogo from "../Assets/Tech-logos/CSS3_logo_and_wordmark.svg.png";
import html5Logo from "../Assets/Tech-logos/HTML5_logo_and_wordmark.svg.png";
import reactLogo from "../Assets/Tech-logos/React-icon.svg.png";
import tailwindLogo from "../Assets/Tech-logos/Tailwind_CSS_Logo.svg.png";
//
import { motion } from "framer-motion";

export default function Logos() {
  const logoArray = [cssLogo, html5Logo, reactLogo, tailwindLogo];
  const { width } = useWindowDimensions();

  let moveLogosBy = width > 1024 ? -50 : 0;
  const animateSettings = { scale: 0.7, translateY: moveLogosBy };

  return (
    <motion.div className="logos-wrapper" initial={{ scale: 1, translateY: 0 }} animate={animateSettings} transition={{ delay: 7, duration: 0.6 }}>
      {logoArray.map((logo, index) => {
        return (
          <motion.div
            key={index}
            className="technologies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.3 + index * 0.2, duration: 1 }}
          >
            <img className="logo" src={logo} alt="" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
