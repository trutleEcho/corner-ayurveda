import Hero from "@/components/sections/home/Hero";
import HeritageSection from "@/components/sections/home/heritage-section";
import CtaSection from "@/components/sections/home/cta-section";
import ProductSection from "@/components/sections/home/product-section";
import BlogSection from "@/components/sections/home/blog-section";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero/>

            {/* Heritage Section */}
            <HeritageSection/>

            {/* Featured Products Section */}
            <ProductSection/>

            {/* Featured Articles & Blog Section */}
            <BlogSection/>

            {/* Call to Action Section */}
            <CtaSection/>
        </div>
    );
}

