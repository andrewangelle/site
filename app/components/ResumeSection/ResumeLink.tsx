import { motion } from 'motion/react';

export function ResumeLink({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="pdf-link">
      <motion.h3
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {
            scaleX: 0,
            opacity: 0,
          },
          visible: {
            scaleX: 1,
            opacity: 1,
          },
        }}
      >
        {label}
      </motion.h3>

      <motion.div
        className="links"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {
            scaleX: 0,
            opacity: 0,
          },
          visible: {
            scaleX: 1,
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
