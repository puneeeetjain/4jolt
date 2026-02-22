const defaultSiteData = {
  siteName: "4Jolt",
  headerTypes: ["Trending", "Stories", "Videos", "Quizzes", "Memes"],
  defaultType: "Trending",
  hamburgerItems: [
    { label: "Admin Panel", href: "admin.html" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Advertise", href: "#" },
    { label: "Careers", href: "#" }
  ],
  carousel: [
    { image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80", href: "#story-tech-trends" },
    { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80", href: "#video-music-fest" },
    { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80", href: "#quiz-knowledge" },
    { image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80", href: "#story-travel-hacks" }
  ],
  ads: {
    top: "Top Campaign Banner — Summer Mega Sale",
    middle: "Middle Campaign Banner — Partner Promo",
    bottom: "Bottom Campaign Banner — Newsletter Signup",
    left: "Left Vertical Ad — Sponsored",
    right: "Right Vertical Ad — Sponsored"
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
    { id: "post-1", title: "Top 5 AI Tools for Everyday Work", categoryId: "cat-tech", type: "Trending", image: "https://images.unsplash.com/photo-1677442135968-6f8e9e4fce4f?auto=format&fit=crop&w=500&q=80", excerpt: "Explore practical AI tools you can use daily.", content: "AI assistants, note-taking copilots, and automation dashboards are changing daily workflows. In this guide we compare practical tools and best use-cases.", publishAt: "", status: "published" },
    { id: "post-2", title: "How to Start a 10-Minute Morning Routine", categoryId: "cat-life", type: "Stories", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80", excerpt: "Build habits with a sustainable routine.", content: "Start with hydration, stretching, and a quick planning ritual. Consistency beats intensity when building routines.", publishAt: "", status: "published" },
    { id: "post-3", title: "Viral Challenge Roundup", categoryId: "cat-fun", type: "Videos", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80", excerpt: "The latest challenges everyone is talking about.", content: "This week’s internet challenges include dance edits, speed drawing, and reaction compilations.", publishAt: "", status: "published" },
    { id: "post-4", title: "Ultimate Weekend Quiz", categoryId: "cat-fun", type: "Quizzes", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80", excerpt: "Test your weekend knowledge.", content: "Take this 12-question mix of pop culture and current events to see where you rank.", publishAt: "", status: "published" },
    { id: "post-5", title: "Best Meme Templates This Week", categoryId: "cat-fun", type: "Memes", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80", excerpt: "Fresh templates to keep your page alive.", content: "From side-eye reaction shots to wholesome twist endings, here are the best meme templates this week.", publishAt: "", status: "published" },
    { id: "post-6", title: "Simple Home Workout for Beginners", categoryId: "cat-health", type: "Trending", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80", excerpt: "A no-equipment fitness plan.", content: "A beginner circuit using bodyweight only—squats, pushups, planks, and mobility drills.", publishAt: "", status: "published" },
    { id: "post-7", title: "Street Food Videos You Must Watch", categoryId: "cat-food", type: "Videos", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=500&q=80", excerpt: "Visual treat for food lovers.", content: "An irresistible selection of global street food videos with crisp storytelling and vibrant visuals.", publishAt: "", status: "published" },
    { id: "post-8", title: "Hidden Travel Spots to Bookmark", categoryId: "cat-travel", type: "Stories", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=500&q=80", excerpt: "Less crowded destinations worth exploring.", content: "Explore quieter destinations, smarter packing workflows, and budget planning shortcuts.", publishAt: "", status: "published" },
    { id: "post-9", title: "Budget Gadgets Under $25", categoryId: "cat-tech", type: "Trending", image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=500&q=80", excerpt: "Useful mini gadgets worth trying.", content: "A curated list of affordable gadgets that genuinely improve work and everyday productivity.", publishAt: "", status: "published" },
    { id: "post-10", title: "Late Night Match Highlights", categoryId: "cat-sports", type: "Videos", image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=500&q=80", excerpt: "Catch up in 3 minutes.", content: "Quick highlights and tactical recaps from yesterday’s biggest games.", publishAt: "", status: "published" },
    { id: "post-11", title: "Can You Guess the Country by Food?", categoryId: "cat-food", type: "Quizzes", image: "https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=500&q=80", excerpt: "A tasty geography challenge.", content: "Identify 15 dishes from around the world. Perfect for your next group challenge.", publishAt: "", status: "published" },
    { id: "post-12", title: "Museum Memes You’ll Relate To", categoryId: "cat-culture", type: "Memes", image: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?auto=format&fit=crop&w=500&q=80", excerpt: "Art world humor done right.", content: "Classic paintings, modern captions, and surprisingly relatable moments.", publishAt: "", status: "published" },
    { id: "post-13", title: "Minimal Desk Setup in 2026", categoryId: "cat-tech", type: "Stories", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80", excerpt: "Calm and productive workspace ideas.", content: "Declutter strategy, cable control, and ergonomic essentials for focused work.", publishAt: "", status: "published" },
    { id: "post-14", title: "15-Minute Healthy Meal Prep", categoryId: "cat-health", type: "Trending", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80", excerpt: "Fast meals without compromise.", content: "A realistic meal prep method using pantry basics and batch-friendly recipes.", publishAt: "", status: "published" },
    { id: "post-15", title: "Spring Festival Behind the Scenes", categoryId: "cat-culture", type: "Videos", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80", excerpt: "How creators build event magic.", content: "A short documentary-style post on production, rehearsals, and execution.", publishAt: "", status: "published" },
    { id: "post-16", title: "Next Week’s Mega Quiz", categoryId: "cat-fun", type: "Quizzes", image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80", excerpt: "Scheduled sample post.", content: "This post demonstrates scheduling and auto-publish in the admin panel.", publishAt: "2030-01-01T10:00", status: "scheduled" }
  ],
  users: [
    { name: "Owner", role: "Admin" },
    { name: "Nina", role: "Editor" },
    { name: "Ravi", role: "Moderator" },
    { name: "Sana", role: "Editor" }
  ],
  analytics: {
    pageViews: 24540,
    activeUsers: 712,
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
