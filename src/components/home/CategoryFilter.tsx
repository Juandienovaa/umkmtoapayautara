"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  activeCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              "relative px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-colors duration-300",
              isActive ? "text-brand-background" : "text-brand-dark hover:bg-brand-dark/5"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-brand-forest rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {category}
          </button>
        );
      })}
    </div>
  );
}
