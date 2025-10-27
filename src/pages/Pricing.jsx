import { motion } from "framer-motion";
import plans from "../data/pricing.json";

export default function Pricing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 text-center"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white shadow rounded-lg overflow-hidden p-6 hover:shadow-xl transition"
          >
            <img src={plan.img} alt={plan.name} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">{plan.name}</h3>
            <p className="text-purple-600 font-bold">{plan.price}</p>
            <p className="text-gray-600 text-sm mt-2">{plan.details}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
