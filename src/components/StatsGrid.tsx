import { motion } from 'framer-motion';
import { Factory, Droplets, Printer, Shirt, Scissors, PenTool, Activity } from 'lucide-react';

const stats = [
  { icon: Factory, label: '20 Factories', value: '550,000 Garments/Day' },
  { icon: Activity, label: 'BIA Textiles', value: '35 Tons Fabric/Day' },
  { icon: Printer, label: 'Printing', value: '150,000 Garments/Day' },
  { icon: Droplets, label: 'Laundry', value: '85,000 Garments/Day (incl. Wet & Dry)' },
  { icon: Scissors, label: 'Laser Cutting', value: '100,000 Garments/Day' },
  { icon: PenTool, label: 'Embroidery', value: '100,000 Garments/Day' },
  { icon: Shirt, label: 'Seamless Garments', value: '10,000 Garments/Day' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function StatsGrid() {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {stats.map((stat, idx) => (
        <motion.div key={idx} variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors">
          <div className="bg-brand-coral/20 p-3 rounded-lg text-brand-coral">
            <stat.icon size={24} />
          </div>
          <div>
            <h4 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-1">{stat.label}</h4>
            <p className="text-white text-xl font-bold">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}