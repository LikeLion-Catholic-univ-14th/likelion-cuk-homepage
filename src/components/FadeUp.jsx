import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, y: { duration: 0.7 } },
  },
};

const FadeUp = ({ children, className, onClick }) => (
  <motion.div
    className={className}
    onClick={onClick}
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default FadeUp;
