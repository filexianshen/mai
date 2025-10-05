import { motion } from "framer-motion";

export default function PortfolioHeader() {
    return (
        <header className="mb-12 text-center">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -20
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.7
                }}>
                <h1
                    className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">视频作品集
                            </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">探索我的拍摄与剪辑作品，每一部视频都讲述着独特的故事与创意视角
                            </p>
            </motion.div>
            <motion.div
                className="mt-8 h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"
                initial={{
                    width: 0
                }}
                animate={{
                    width: "100%"
                }}
                transition={{
                    duration: 1,
                    delay: 0.3
                }} />
        </header>
    );
}