import { motion } from 'framer-motion';

export const Maps = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#1a1a1a]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-[#363946] dark:text-[#B1B6A6]"
        >
          Visit Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#819595] dark:text-[#819595] mb-8 text-lg"
        >
          Location available on request
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.5!2d35.5!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiTiAzNcKwMzAnMDAuMCJF!5e0!3m2!1sen!2slb!4v1234567890123!5m2!1sen!2slb"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="MotorShow LB Location"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[#819595] dark:text-[#819595] mt-6 text-sm"
        >
          Contact us for exact location details
        </motion.p>
      </div>
    </section>
  );
};

