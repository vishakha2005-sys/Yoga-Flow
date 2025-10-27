import { motion } from "framer-motion";
import classes from "../data/classes.json";

export default function Classes() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Free Trial for 7 Days</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={cls.img} alt={cls.name} className="h-48 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{cls.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
