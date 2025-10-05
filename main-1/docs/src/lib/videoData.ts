export interface VideoProject {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  date: string;
  tags: string[];
}

export const videoProjects: VideoProject[] = [
  {
    id: 1,
    title: "科技产品口播评测",
    description: "深入解析最新科技产品的功能特点与使用体验，提供专业购买建议。",
    category: "口播",
  thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Technology%20product%20review%20video%20with%20host%20speaking&sign=8042b7b34fff0a3a15ae34d36f173ea3",
  videoUrl: "/videos/tech-review.mp4",
  duration: "05:20",
  date: "2025-09-15",
  tags: ["科技", "口播", "评测"]
  },
  {
    id: 2,
    title: "每日新闻资讯",
    description: "快速浏览当日重要新闻事件，把握时事热点与社会动态。",
    category: "信息流",
  thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=News%20information%20flow%20interface%20with%20multiple%20topics&sign=2967553c0461723cc50108e63c215136",
  videoUrl: "/videos/news-update.mp4",
  duration: "03:45",
  date: "2025-09-10",
  tags: ["新闻", "资讯", "信息流"]
  },
  {
    id: 3,
    title: "城市街头时尚",
    description: "捕捉城市街头的时尚元素与潮流穿搭，展现都市年轻人的生活态度。",
    category: "街拍",
    thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Urban%20street%20fashion%20photography%20with%20stylish%20people&sign=364d2a35e5f72f1cb97603771f30e379",
    duration: "04:15",
    date: "2025-09-05",
    tags: ["时尚", "街拍", "城市"]
  },
  {
    id: 4,
    title: "秋季服装搭配指南",
    description: "展示最新秋季服装搭配技巧，提供实用的日常穿搭灵感。",
    category: "服装街拍",
    thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fashion%20street%20photography%20with%20autumn%20clothing&sign=5069e76c5bdc8ca729b7cac9b1240d13",
    duration: "06:30",
    date: "2025-09-01",
    tags: ["时尚", "服装", "搭配"]
  },
  {
    id: 5,
    title: "运动饮料TVC广告",
    description: "为知名运动饮料品牌打造的电视广告，展现活力与运动精神。",
    category: "TVC广告",
    thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Sports%20drink%20TVC%20commercial%20with%20athletes%20in%20action&sign=db810052eaa5632bd202a4c25f367bb1",
    duration: "00:45",
    date: "2025-08-20",
    tags: ["广告", "TVC", "运动"]
  },
  {
    id: 6,
    title: "产品广告片 - 智能手表",
    description: "为新款智能手表打造的产品展示视频，突出设计美学与功能特点。",
    category: "商业广告",
    thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smartwatch%20product%20advertisement%20with%20modern%20design&sign=974961ab30036289767d1996a29638e2",
    duration: "01:30",
    date: "2025-08-15",
    tags: ["商业", "产品", "科技"]
  },
  {
    id: 7,
    title: "舞蹈艺术短片",
    description: "结合光影效果与现代舞蹈的艺术表现力，创造视觉冲击力。",
    category: "艺术创作",
    thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Dance%20art%20short%20film%20with%20light%20and%20shadow%20effects&sign=3032126bd8f0964cf8d205d7bb8eae1e",
    duration: "04:20",
    date: "2025-08-10",
    tags: ["艺术", "舞蹈", "创意"]
  },
  {
    id: 8,
    title: "旅行Vlog - 冰岛探险",
    description: "记录冰岛的壮丽自然风光与探险旅程，展现极地独特魅力。",
    category: "Vlog",
    thumbnailUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Iceland%20travel%20vlog%20with%20northern%20lights%20and%20mountains&sign=a6fbd9a48354ee5b3a4391ac252761f0",
    duration: "12:30",
    date: "2025-06-18",
    tags: ["旅行", "Vlog", "自然"]
  }
];

export const categories = [
  "全部",
  "商业广告",
  "艺术创作",
  "Vlog",
  "口播",
  "信息流",
  "街拍",
  "服装街拍",
  "TVC广告"
];