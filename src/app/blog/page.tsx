import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/content";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, BookOpen, TrendingUp, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurvedic Blog - Wellness Insights & Tips",
  description: "Discover expert insights on Ayurvedic wellness, natural remedies, and holistic health practices. Learn from ancient wisdom for modern living.",
  keywords: ["ayurvedic blog", "wellness tips", "natural remedies", "holistic health", "lifestyle tips"],
};

const categories = [
  "All Posts",
  "Wellness",
  "Herbs",
  "Lifestyle",
  "Nutrition",
  "Mental Health",
  "Seasonal Care"
];

const featuredTopics = [
  {
    icon: BookOpen,
    title: "Ayurvedic Fundamentals",
    description: "Learn the basics of Ayurvedic principles and how to apply them in daily life",
    count: 12
  },
  {
    icon: TrendingUp,
    title: "Trending Wellness",
    description: "Latest trends in natural health and wellness practices",
    count: 8
  },
  {
    icon: Calendar,
    title: "Seasonal Wellness",
    description: "Seasonal health tips and Ayurvedic practices for year-round wellness",
    count: 15
  }
];

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Ayurvedic Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover expert insights on Ayurvedic wellness, natural remedies, and holistic health practices. 
              Learn from ancient wisdom for modern living.
            </p>
          </div>

          {/* Featured Topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card key={topic.title} className="text-center border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{topic.description}</p>
                    <Badge variant="secondary">{topic.count} articles</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} {...post} type="blog" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Recent Articles
              </h2>
              <p className="text-muted-foreground">
                Latest insights and tips for your wellness journey
              </p>
            </div>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Sort by
            </Button>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} {...post} type="blog" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Check back soon for new wellness insights
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">
                Stay Updated with Wellness Insights
              </CardTitle>
              <p className="text-muted-foreground">
                Get the latest Ayurvedic tips and wellness advice delivered to your inbox
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

