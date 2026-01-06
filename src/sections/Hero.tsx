import { motion } from "framer-motion";

const scrollToInventory = () => {
  const element = document.querySelector("#inventory");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const openWhatsApp = () => {
  const message = encodeURIComponent(
    "Hi MotorShow LB, I'm interested in one of your cars. Can you share details?"
  );
  window.open(`https://wa.me/961788888842?text=${message}`, "_blank");
};

const features = [
  { label: "Verified Cars", icon: "✓" },
  { label: "Fair Deals", icon: "✓" },
  { label: "Fast Response", icon: "✓" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover z-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            // Show fallback gradient if image fails
            const fallback = document.querySelector(
              ".hero-fallback-gradient"
            ) as HTMLElement;
            if (fallback) fallback.style.display = "block";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#363946]/70 via-[#819595]/60 to-[#B1B6A6]/50 dark:from-[#1a1a1a]/70 dark:via-[#363946]/60 dark:to-[#819595]/50 z-10" />
      </div>

      {/* Fallback gradient if image fails */}
      <div
        className="hero-fallback-gradient absolute inset-0 bg-gradient-to-br from-[#363946] via-[#819595] to-[#B1B6A6] dark:from-[#1a1a1a] dark:via-[#363946] dark:to-[#819595] z-0"
        style={{ display: "none" }}
      />

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Next Car with
            <span className="block text-[#B1B6A6]">MotorShow LB</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg  md:text-xl lg:text-2xl text-white/90 mb-10 max-w-9xl"
        >
          Premium used cars, carefully selected. Fast contact, trusted deals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 mb-12 justify-center items-center"
        >
          <button
            onClick={openWhatsApp}
            className="px-8 py-4 bg-[#363946] dark:bg-[#819595] text-white rounded-full font-semibold text-lg hover:bg-[#819595] dark:hover:bg-[#B1B6A6] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            WhatsApp Us
          </button>
          <button
            onClick={scrollToInventory}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
          >
            Browse Inventory
          </button>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <span className="text-[#B1B6A6] font-bold">{feature.icon}</span>
              <span className="text-white font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
