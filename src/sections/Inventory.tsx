import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { vehicles, type Vehicle } from "../data/vehicles";
import classNames from "classnames";

type FilterType = "all" | "sedan" | "suv";

const openWhatsApp = (carName: string) => {
  const message = encodeURIComponent(
    `Hi MotorShow LB, I'm interested in the ${carName}. Can you share more details?`
  );
  window.open(`https://wa.me/961788888842?text=${message}`, "_blank");
};

export const Inventory = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    const handleFilterChange = (event: CustomEvent) => {
      setFilter(event.detail.filter);
    };
    window.addEventListener(
      "filterChange",
      handleFilterChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "filterChange",
        handleFilterChange as EventListener
      );
    };
  }, []);

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (filter === "all") return true;
    return vehicle.type.toLowerCase() === filter;
  });

  const filters: { label: string; value: FilterType }[] = [
    { label: "All Vehicles", value: "all" },
    { label: "Sedans", value: "sedan" },
    { label: "SUVs", value: "suv" },
  ];

  return (
    <section id="inventory" className="py-20 bg-white dark:bg-[#1a1a1a]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-[#363946] dark:text-[#B1B6A6]"
        >
          Inventory
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#819595] dark:text-[#819595] mb-12 text-lg"
        >
          Browse our carefully selected collection
        </motion.p>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={classNames(
                "px-6 py-3 rounded-full font-medium transition-all duration-200",
                filter === filterOption.value
                  ? "bg-[#363946] dark:bg-[#819595] text-white"
                  : "bg-[#f8f9fa] dark:bg-[#2d2d2d] text-[#363946] dark:text-[#B1B6A6] hover:bg-[#e2e8f0] dark:hover:bg-[#4a5568]"
              )}
            >
              {filterOption.label}
            </button>
          ))}
        </motion.div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VehicleCard = ({
  vehicle,
  index,
}: {
  vehicle: Vehicle;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-[#2d2d2d] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#363946] to-[#819595] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              vehicle.type === "SUV"
                ? "bg-[#819595] text-white"
                : "bg-[#B1B6A6] text-[#363946]"
            }`}
          >
            {vehicle.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#363946] dark:text-[#B1B6A6] mb-2">
          {vehicle.name}
        </h3>
        <p className="text-[#819595] dark:text-[#819595] mb-4">
          {vehicle.year} • {vehicle.mileage}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-[#363946] dark:text-[#819595]">
            {vehicle.price}
          </span>
        </div>
        <button
          onClick={() => openWhatsApp(vehicle.name)}
          className="w-full py-3 bg-[#363946] dark:bg-[#819595] text-white rounded-full font-medium hover:bg-[#819595] dark:hover:bg-[#B1B6A6] transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp to Inquire
        </button>
      </div>
    </motion.div>
  );
};
