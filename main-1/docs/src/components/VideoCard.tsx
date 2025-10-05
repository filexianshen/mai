import { motion } from "framer-motion";
import { VideoProject } from "@/lib/videoData";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  project: VideoProject;
}

export default function VideoCard({ project }: VideoCardProps) {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <video
          poster={project.thumbnailUrl}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          controls
        >
          <source src={project.videoUrl} type="video/mp4" />
          您的浏览器不支持视频播放
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {project.duration}
            </span>
            <div className="flex gap-1">
              {project.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <i className="fa-solid fa-play text-white text-xl ml-1"></i>
          </div>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
          <span className={cn(
            "text-xs px-2 py-1 rounded-full",
             project.category === "口播" ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" :
             project.category === "信息流" ? "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" :
             project.category === "街拍" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" :
             project.category === "TVC广告" ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" :
             project.category === "信息流" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
             project.category === "街拍" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" :
             project.category === "创意" ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" :
             project.category === "其他" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" :
             "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          )}>
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}