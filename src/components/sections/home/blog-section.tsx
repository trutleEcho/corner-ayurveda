import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { BlogPost, Article } from "@/types";

interface BlogSectionProps {
  featuredBlogs: BlogPost[];
  featuredArticles: Article[];
}

export default function BlogSection({ featuredBlogs, featuredArticles }: BlogSectionProps){
    // Combine featured blogs and articles, prioritizing blogs first
    const featuredContent = [
      ...featuredBlogs.slice(0, 2),
      ...featuredArticles.slice(0, 1)
    ].slice(0, 3);

    return(
        <>
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-[montserrat] font-bold text-foreground mb-4">
                                Wellness Insights
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Expert knowledge and insights on Ayurvedic wellness
                            </p>
                        </div>
                        <div className="hidden sm:flex gap-4">
                            <Button variant="outline" asChild>
                                <Link href="/articles">
                                    View Articles
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/blog">
                                    View Blog
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {featuredContent.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {featuredContent.map((content) => (
                                <BlogCard 
                                    key={content.slug} 
                                    {...content} 
                                    type={featuredBlogs.includes(content) ? "blog" : "article"}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No featured content available at the moment.</p>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:hidden">
                        <Button variant="outline" asChild>
                            <Link href="/articles">
                                View Articles
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/blog">
                                View Blog
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}