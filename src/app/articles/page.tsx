import { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Leaf, Brain, Heart, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurvedic Articles - In-Depth Wellness Education",
  description: "Explore comprehensive Ayurvedic articles covering herbs, treatments, doshas, and holistic healing practices. Deep dive into traditional wisdom.",
  keywords: ["ayurvedic articles", "ayurveda education", "natural remedies", "holistic healing", "doshas"],
};

const categories = [
  "All Articles",
  "Herbs",
  "Treatments",
  "Constitution",
  "Doshas",
  "Seasonal Care",
  "Research"
];

const educationalTopics = [
  {
    icon: Leaf,
    title: "Herbal Medicine",
    description: "In-depth guides on Ayurvedic herbs, their properties, and therapeutic uses",
    count: 18
  },
  {
    icon: Brain,
    title: "Ayurvedic Principles",
    description: "Fundamental concepts of Ayurveda including doshas, constitution, and balance",
    count: 24
  },
  {
    icon: Heart,
    title: "Holistic Healing",
    description: "Comprehensive approaches to health covering mind, body, and spirit",
    count: 16
  }
];

export default async function ArticlesPage() {
  const articles = await getAllArticles();
  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Ayurvedic Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore comprehensive Ayurvedic articles covering herbs, treatments, doshas, and holistic healing practices. 
              Deep dive into traditional wisdom for modern understanding.
            </p>
          </div>

          {/* Educational Topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {educationalTopics.map((topic) => {
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <BlogCard key={article.slug} {...article} type="article" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Recent Articles
              </h2>
              <p className="text-muted-foreground">
                Latest educational content and research insights
              </p>
            </div>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Sort by
            </Button>
          </div>

          {recentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <BlogCard key={article.slug} {...article} type="article" />
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
                Check back soon for new educational content
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
                Stay Updated with Educational Content
              </CardTitle>
              <p className="text-muted-foreground">
                Get the latest Ayurvedic research and educational articles delivered to your inbox
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button disabled>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

