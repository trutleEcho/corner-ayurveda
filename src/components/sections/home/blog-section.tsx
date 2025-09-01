import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";

export default function BlogSection(){

    const featuredBlogs = [
        {
            slug: "ayurveda-modern-wellness",
            title: "How Ancient Ayurveda Meets Modern Wellness",
            excerpt: "Discover how traditional Ayurvedic principles are being validated by modern science and integrated into contemporary wellness practices.",
            image: "/images/blog/ayurveda-modern.jpg",
            author: "Dr. Priya Sharma",
            publishedAt: "2024-01-15",
            readTime: 8,
            category: "Wellness",
            featured: true,
            type: "blog" as const,
        },
        {
            slug: "benefits-of-ashwagandha",
            title: "The Science Behind Ashwagandha's Stress-Relief Properties",
            excerpt: "Explore the research-backed benefits of Ashwagandha and how this adaptogenic herb can help manage stress and improve overall well-being.",
            image: "/images/blog/ashwagandha-benefits.jpg",
            author: "Dr. Rajesh Kumar",
            publishedAt: "2024-01-10",
            readTime: 6,
            category: "Herbs",
            type: "article" as const,
        },
    ];

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

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredBlogs.map((blog) => (
                            <BlogCard key={blog.slug} {...blog} />
                        ))}
                    </div>

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