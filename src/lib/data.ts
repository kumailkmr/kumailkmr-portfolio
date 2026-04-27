import type {
  FAQItem,
  PersonalInfo,
  PricingTier,
  ProjectItem,
  ServiceItem,
  SkillsMap,
  StatItem,
  TestimonialItem,
  TimelineItem,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Kumail Kmr",
  role: "Freelance Web Developer & AI Automation Specialist",
  tagline: "Helping businesses automate operations, capture leads, and scale 24/7",
  subTagline: "I Build Fast, Modern Web Apps + AI Automation Systems",
  email: "kumailkmr.dev@gmail.com",
  phone: "+91 6006121193",
  whatsapp: "916006121193",
  whatsappUrl: "https://wa.me/916006121193",
  upi: "6006121193@upi",
  location: "Srinagar, Kashmir, India",
  locationEmoji: "🏔️",
  available: true,
  responseTime: "2 hours on WhatsApp",
  social: {
    linkedin: "https://www.linkedin.com/in/kumail-kmr-6196a0384/",
    github: "https://github.com/kumailkmr",
    twitter: "#",
    calendly: "#",
  },
};

export const stats: StatItem[] = [
  { label: "Projects", value: 10, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "+" },
  { label: "Faster Delivery", value: 2, suffix: "x" },
  { label: "Support", value: 24, suffix: "/7" },
];

export const services: ServiceItem[] = [
  { id: "saas", icon: "🚀", title: "SaaS Applications", description: "Full-stack SaaS apps with authentication, payments, dashboards, and everything your product needs to launch and scale fast.", features: ["User Authentication", "Payment Integration", "Admin Dashboard", "API Development"] },
  { id: "ecommerce", icon: "🛒", title: "E-Commerce Stores", description: "Complete online stores with product management, cart, secure payments, and powerful admin panels.", features: ["Product Management", "Cart & Checkout", "Razorpay / Stripe", "Order Management"] },
  { id: "websites", icon: "🌐", title: "Business Websites", description: "Fast, SEO-optimized business websites that look professional and convert visitors into paying customers.", features: ["SEO Optimized", "Mobile Responsive", "Fast Loading (90+ score)", "CMS Integration"] },
  { id: "automation", icon: "🤖", title: "AI Automation", description: "Automate your business operations, lead capture, follow-ups, and workflows using cutting-edge AI tools.", features: ["Workflow Automation", "Lead Capture Bots", "AI Chatbots", "24/7 Operations"] },
  { id: "ai-features", icon: "⚡", title: "AI-Powered Features", description: "Integrate powerful AI capabilities into your existing product or build AI-first applications from scratch.", features: ["OpenAI Integration", "Chatbot Development", "Streaming Responses", "Custom AI Workflows"] },
  { id: "support", icon: "🔧", title: "Maintenance & Support", description: "Ongoing maintenance, bug fixes, performance optimization, and feature additions for your existing projects.", features: ["Bug Fixes", "Performance Tuning", "Feature Additions", "Priority Support"] },
];

export const projects: ProjectItem[] = [
  { id: "p1", title: "SaaS Dashboard Platform", description: "Complete SaaS platform with user auth, subscription management, analytics dashboard, and team collaboration features.", tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"], badge: "Featured", category: "SaaS", badgeColor: "bg-violet-500/20 text-violet-300", gradient: "from-violet-500 to-cyan-500", liveUrl: "#", githubUrl: "https://github.com/kumailkmr", image: "/saas-dashboard.jpg" },
  { id: "p2", title: "E-Commerce Store + Admin", description: "Full-featured online store with product catalog, cart, Razorpay integration, and comprehensive admin panel.", tags: ["Next.js", "TypeScript", "MongoDB", "Razorpay", "Tailwind"], badge: "E-Commerce", category: "E-Commerce", badgeColor: "bg-cyan-500/20 text-cyan-300", gradient: "from-cyan-500 to-violet-500", liveUrl: "#", githubUrl: "https://github.com/kumailkmr" },
  { id: "p3", title: "AI Business Automation Bot", description: "AI-powered automation system for lead capture, customer follow-ups, and business operations running 24/7.", tags: ["Next.js", "OpenAI", "TypeScript", "n8n", "Vercel AI"], badge: "AI Tool", category: "AI Tools", badgeColor: "bg-emerald-500/20 text-emerald-300", gradient: "from-emerald-500 to-cyan-500", liveUrl: "#", githubUrl: "https://github.com/kumailkmr" },
  { id: "p4", title: "Booking & Appointment System", description: "Complete booking platform for service businesses with calendar, email notifications, WhatsApp reminders, and payment.", tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "Resend"], badge: "Booking", category: "Automation", badgeColor: "bg-orange-500/20 text-orange-300", gradient: "from-orange-500 to-rose-500", liveUrl: "#", githubUrl: "https://github.com/kumailkmr" },
  { id: "p5", title: "Agency Portfolio Website", description: "High-converting agency website with animations, case studies, team section, and contact system.", tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"], badge: "Website", category: "Websites", badgeColor: "bg-blue-500/20 text-blue-300", gradient: "from-blue-500 to-cyan-500", liveUrl: "#", githubUrl: "https://github.com/kumailkmr" },
  { id: "p6", title: "Real-Time Chat Application", description: "Full-featured chat app with real-time messaging, file sharing, user presence, and room management.", tags: ["Next.js", "TypeScript", "Pusher", "Prisma", "PostgreSQL"], badge: "Web App", category: "SaaS", badgeColor: "bg-pink-500/20 text-pink-300", gradient: "from-pink-500 to-violet-500", liveUrl: "#", githubUrl: "https://github.com/kumailkmr" },
];

export const testimonials: TestimonialItem[] = [
  { id: "t1", stars: "⭐⭐⭐⭐⭐", quote: "Kumail delivered our entire web application in just 2 weeks. Clean code, great communication, and exactly what we needed.", name: "Tariq Bhat", role: "Founder, TechStartup", avatar: "TB" },
  { id: "t2", stars: "⭐⭐⭐⭐⭐", quote: "Our e-commerce sales increased 40% after the redesign. The AI automation he set up saves us 3 hours every day.", name: "Saima Mir", role: "Owner, Fashion Store", avatar: "SM" },
  { id: "t3", stars: "⭐⭐⭐⭐⭐", quote: "Integrated AI features into our platform seamlessly. Very skilled with Next.js and TypeScript. Highly recommend.", name: "Amit Kumar", role: "CTO, AI Startup", avatar: "AK" },
  { id: "t4", stars: "⭐⭐⭐⭐⭐", quote: "Kumail transformed our retail business into a high-end digital gallery. His attention to detail and ability to capture the essence of luxury in our 'Royal Gift Gallery' platform has significantly boosted our customer engagement in Pulwama.", name: "Abid Amin Wani", role: "Owner, Royal Gift Gallery", avatar: "AW" },
  { id: "t5", stars: "⭐⭐⭐⭐⭐", quote: "The restaurant booking system Kumail built is flawless. It’s elegant, fast, and has completely automated our reservation process here in California. A true professional who understands both design and functionality.", name: "Suzette Sova Robertson", role: "Restaurateur, California", avatar: "SR" },
  { id: "t6", stars: "⭐⭐⭐⭐⭐", quote: "Working with Kumail was a game-changer for INR Heights. The 4D menu he developed is a masterpiece that wows our guests daily. He didn’t just build a website; he built an experience.", name: "INR Heights", role: "Management, Delhi", avatar: "IH" },
  { id: "t7", stars: "⭐⭐⭐⭐⭐", quote: "Our dry fruits and saffron business needed a world-class platform to match the quality of our products. Kumail delivered a stunning, high-performance store that has opened up new markets for us.", name: "Sadaf Bashir", role: "Entrepreneur, Pulwama", avatar: "SB" },
  { id: "t8", stars: "⭐⭐⭐⭐⭐", quote: "In the competitive DC real estate market, our website needs to stand out. Kumail built a platform that is both visually stunning and technically superior. Our lead generation has never been better.", name: "Brecken Realtor", role: "Real Estate Agent, DC", avatar: "BR" },
];

export const pricingTiers: PricingTier[] = [
  { id: "starter", name: "STARTER", price: "₹15,000 - ₹30,000", delivery: "3-5 days", bestFor: "Small businesses & landing pages", features: ["Up to 5 Pages", "Mobile Responsive", "Basic SEO Setup", "Contact Form", "WhatsApp Button Integration", "Vercel Deployment", "1 Round of Revisions"], excludedFeatures: ["CMS Integration", "Authentication", "Payment Integration", "AI Features"], ctaLabel: "Get Started", ctaLink: "https://wa.me/916006121193?text=Hi%20Kumail!%20I'm%20interested%20in%20the%20Starter%20package." },
  { id: "business", name: "BUSINESS", price: "₹40,000 - ₹80,000", delivery: "1-2 weeks", bestFor: "Growing businesses & startups", features: ["Up to 15 Pages", "Mobile Responsive", "Advanced SEO", "CMS Integration", "Blog System", "Analytics Setup", "Basic AI Chatbot", "WhatsApp Integration", "3 Rounds of Revisions", "1 Month Support"], excludedFeatures: ["Custom Backend", "Full AI Automation"], ctaLabel: "Get Started", ctaLink: "https://wa.me/916006121193?text=Hi%20Kumail!%20I'm%20interested%20in%20the%20Business%20package.", popular: true },
  { id: "premium", name: "PREMIUM", price: "₹80,000+", delivery: "2-4 weeks", bestFor: "Full web apps, SaaS & AI automation", features: ["Unlimited Pages", "User Authentication", "Payment Integration", "Custom Dashboard", "API Development", "Database Design", "Full AI Automation Setup", "24/7 Bot Integration", "Performance Optimization", "3 Months Support", "Source Code Included", "Unlimited Revisions"], excludedFeatures: [], ctaLabel: "Get Started", ctaLink: "https://wa.me/916006121193?text=Hi%20Kumail!%20I'm%20interested%20in%20the%20Premium%20package." },
];

export const skills: SkillsMap = {
  frontend: [
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Three.js", level: 75 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 80 }
  ],
  backend: [{ name: "Node.js", level: 80 }, { name: "Prisma ORM", level: 75 }, { name: "PostgreSQL", level: 70 }, { name: "REST APIs", level: 80 }],
  aiAutomation: [{ name: "OpenAI API", level: 80 }, { name: "AI Automation", level: 75 }, { name: "n8n Workflows", level: 70 }, { name: "Chatbot Dev", level: 80 }],
  tools: [{ name: "Git & GitHub", level: 90 }, { name: "Cursor AI IDE", level: 90 }, { name: "Vercel", level: 80 }, { name: "Figma (basics)", level: 60 }],
};

export const timeline: TimelineItem[] = [
  { year: "2022", text: "Started learning web development with HTML, CSS, JavaScript" },
  { year: "2023", text: "Mastered React & Node.js, built first full-stack projects" },
  { year: "2023", text: "Discovered Next.js & TypeScript - everything changed" },
  { year: "2026", text: "Started freelancing - landed first paying clients" },
  { year: "2026", text: "Integrated AI tools - doubled delivery speed" },
  { year: "2026", text: "Added AI automation to services - clients loved it" },
  { year: "2027", text: "Now helping businesses worldwide from Srinagar, Kashmir 🏔️" },
];

export const faqs: FAQItem[] = [
  { question: "How do I get started?", answer: "Simple - message me on WhatsApp or fill the contact form. I usually respond within 2 hours." },
  { question: "How long does a project take?", answer: "Landing pages: 3-5 days. Full web apps: 1-4 weeks. AI automation: 1-2 weeks. Depends on complexity." },
  { question: "What are your payment terms?", answer: "50% upfront to start, 50% on completion. UPI and Bank transfers are accepted." },
  { question: "Do you provide source code?", answer: "Yes, complete source code and deployment access is included in all packages. Also available on GitHub." },
  { question: "Can you work with my existing website?", answer: "Absolutely. Redesign, new features, speed optimization, or AI integration - I can work with what you have." },
  { question: "Do you offer AI automation separately?", answer: "Yes! AI automation can be added to any project or done as a standalone service. Starting from ₹20,000." },
  { question: "Where can I see your code?", answer: "Check out my GitHub: github.com/kumailkmr. All project code with documentation." },
];
