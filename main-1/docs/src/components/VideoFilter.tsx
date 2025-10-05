import { motion } from "framer-motion";
import { categories } from "@/lib/videoData";
import { cn } from "@/lib/utils";

interface VideoFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function VideoFilter(
    {
        activeCategory,
        onCategoryChange
    }: VideoFilterProps
) {
    return (
        <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
                {categories.map(category => <motion.button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                        activeCategory === category ? "bg-indigo-600 text-white shadow-md hover:shadow-lg hover:bg-indigo-700" : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    )}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}>
                    {category}
                </motion.button>)}
            </div>
        </div>
    );
}