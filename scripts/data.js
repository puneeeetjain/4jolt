const defaultSiteData = {
  siteName: "4Jolt",
  headerTypes: ["Trending", "Stories", "Videos", "Quizzes", "Memes"],
  defaultType: "Trending",
  hamburgerItems: [
    { label: "Admin Panel", href: "admin.html" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" }
  ],
  carousel: [
    { image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80", href: "#" },
    { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", href: "#" },
    { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", href: "#" }
  ],
  ads: {
    top: "Top Campaign Banner",
    middle: "Middle Campaign Banner",
    bottom: "Bottom Campaign Banner",
    left: "Left Vertical Ad",
    right: "Right Vertical Ad"
  },
  categories: [
    { id: "cat-tech", name: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80" },
    { id: "cat-life", name: "Lifestyle", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80" },
    { id: "cat-fun", name: "Fun", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80" },
    { id: "cat-sports", name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&q=80" },
    { id: "cat-food", name: "Food", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" },
    { id: "cat-travel", name: "Travel", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=500&q=80" },
    { id: "cat-health", name: "Health", image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=500&q=80" },
    { id: "cat-culture", name: "Culture", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80" }
  ],
  posts: [
    { id: "post-1", title: "Top 5 AI Tools for Everyday Work", categoryId: "cat-tech", type: "Trending", image: "https://images.unsplash.com/photo-1677442135968-6f8e9e4fce4f?auto=format&fit=crop&w=500&q=80", excerpt: "Explore practical AI tools you can use daily.", content: "Detailed content for AI tools post.", publishAt: "", status: "published" },
    { id: "post-2", title: "How to Start a 10-Minute Morning Routine", categoryId: "cat-life", type: "Stories", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80", excerpt: "Build habits with a sustainable routine.", content: "Detailed morning routine post.", publishAt: "", status: "published" },
    { id: "post-3", title: "Viral Challenge Roundup", categoryId: "cat-fun", type: "Videos", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80", excerpt: "The latest challenges everyone is talking about.", content: "Detailed viral challenge post.", publishAt: "", status: "published" },
    { id: "post-4", title: "Ultimate Weekend Quiz", categoryId: "cat-fun", type: "Quizzes", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80", excerpt: "Test your weekend knowledge.", content: "Detailed quiz post.", publishAt: "", status: "published" },
    { id: "post-5", title: "Best Meme Templates This Week", categoryId: "cat-fun", type: "Memes", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80", excerpt: "Fresh templates to keep your page alive.", content: "Detailed meme post.", publishAt: "", status: "published" },
    { id: "post-6", title: "Simple Home Workout for Beginners", categoryId: "cat-health", type: "Trending", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80", excerpt: "A no-equipment fitness plan.", content: "Detailed workout post.", publishAt: "", status: "published" },
    { id: "post-7", title: "Street Food Videos You Must Watch", categoryId: "cat-food", type: "Videos", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=500&q=80", excerpt: "Visual treat for food lovers.", content: "Detailed street food post.", publishAt: "", status: "published" },
    { id: "post-8", title: "Hidden Travel Spots to Bookmark", categoryId: "cat-travel", type: "Stories", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=500&q=80", excerpt: "Less crowded destinations worth exploring.", content: "Detailed travel post.", publishAt: "", status: "published" }
  ],
  users: [
    { name: "Owner", role: "Admin" },
    { name: "Nina", role: "Editor" },
    { name: "Ravi", role: "Moderator" }
  ],
  analytics: {
    pageViews: 12540,
    activeUsers: 312,
    topCategory: "Technology"
  }
};

function getSiteData() {
  const saved = localStorage.getItem("fourJoltData");
  if (!saved) return structuredClone(defaultSiteData);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(defaultSiteData);
  }
}

function saveSiteData(data) {
  localStorage.setItem("fourJoltData", JSON.stringify(data));
}

function ensureScheduledPostsPublished(data) {
  const now = new Date();
  data.posts = data.posts.map((post) => {
    if (post.status === "scheduled" && post.publishAt && new Date(post.publishAt) <= now) {
      return { ...post, status: "published" };
    }
    return post;
  });
}
