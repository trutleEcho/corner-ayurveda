import Hero from "@/components/sections/home/Hero";
import HeritageSection from "@/components/sections/home/heritage-section";
import CtaSection from "@/components/sections/home/cta-section";
import ProductSection from "@/components/sections/home/product-section";
import BlogSection from "@/components/sections/home/blog-section";
import { getFeaturedProducts, getFeaturedBlogPosts, getFeaturedArticles } from "@/lib/content";

export default async function Home() {
    const [featuredProducts, featuredBlogs, featuredArticles] = await Promise.all([
        getFeaturedProducts(6),
        getFeaturedBlogPosts(3),
        getFeaturedArticles(3)
    ]);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero/>

            {/* Heritage Section */}
            <HeritageSection/>

            {/* Featured Products Section */}
            <ProductSection featuredProducts={featuredProducts} />

            {/* Featured Articles & Blog Section */}
            <BlogSection featuredBlogs={featuredBlogs} featuredArticles={featuredArticles} />

            {/* Call to Action Section */}
            <CtaSection/>
        </div>
    );
}

