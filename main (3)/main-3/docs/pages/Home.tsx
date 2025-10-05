import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioHeader from "@/components/PortfolioHeader";
import VideoFilter from "@/components/VideoFilter";
import VideoCard from "@/components/VideoCard";
import { videoProjects, VideoProject } from "@/lib/videoData";
import { Empty } from "@/components/Empty";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("全部");
  
  // Filter projects based on active category
  const filteredProjects: VideoProject[] = activeCategory === "全部"
    ? videoProjects
    : videoProjects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PortfolioHeader />
        
        <VideoFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <VideoCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <div className="mt-16">
            <Empty />
          </div>
        )}
        
        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 视频作品集 | 使用React与Tailwind构建</p>
        </footer>
      </div>
    </div>
  );
}