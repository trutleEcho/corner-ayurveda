import { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, BookOpen, Leaf, Brain, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurvedic Articles - Educational Resources",
  description: "Comprehensive educational articles about Ayurveda, herbs, treatments, and traditional healing practices. Learn from expert practitioners and researchers.",
  keywords: ["ayurvedic articles", "herbal medicine", "traditional healing", "ayurveda education", "natural remedies"],
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

export default function ArticlesPage() {
  const articles = getAllArticles();
  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Ayurvedic Knowledge Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deepen your understanding of Ayurveda with our comprehensive collection of 
              educational articles. From ancient wisdom to modern applications, explore 
              the science and art of traditional healing.
            </p>
          </div>

          {/* Educational Topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card key={topic.title} className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
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

      {/* Search and Filters */}
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
                  variant={category === "All Articles" ? "secondary" : "outline"}
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article) => (
                <BlogCard key={article.slug} {...article} type="article" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Latest Articles
              </h2>
              <p className="text-muted-foreground">
                Educational content on Ayurvedic principles and practices
              </p>
            </div>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Sort by Topic
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
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No articles available yet
              </h3>
              <p className="text-muted-foreground">
                Educational content is being prepared. Check back soon!
              </p>
            </div>
          )}

          {recentArticles.length > 6 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Start Your Ayurvedic Learning Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're new to Ayurveda or looking to deepen your knowledge, 
              our structured learning path will guide you through the essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <CardTitle className="text-lg">Foundations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn the basic principles of Ayurveda, including the three doshas, 
                  constitution types, and fundamental concepts.
                </p>
                <Button variant="outline" size="sm">
                  Start Learning
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <CardTitle className="text-lg">Herbs & Remedies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore the world of Ayurvedic herbs, their properties, 
                  and how to use them for various health conditions.
                </p>
                <Button variant="outline" size="sm">
                  Explore Herbs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <CardTitle className="text-lg">Lifestyle Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover how to integrate Ayurvedic principles into your 
                  daily routine for optimal health and wellness.
                </p>
                <Button variant="outline" size="sm">
                  Apply Knowledge
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            While our articles provide comprehensive information, nothing replaces 
            personalized consultation with our Ayurvedic experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Book Consultation
            </Button>
            <Button variant="outline" size="lg">
              Contact Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

