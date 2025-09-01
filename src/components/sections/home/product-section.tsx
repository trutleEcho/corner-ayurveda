import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

// Sample data - will be replaced with actual data later
const featuredProducts = [
    {
        id: "1",
        name: "Ashwagandha Premium Capsules",
        description: "Pure Ashwagandha extract for stress relief and vitality enhancement",
        price: 899,
        originalPrice: 1199,
        image: "/images/products/ashwagandha.jpg",
        rating: 4.8,
        reviewCount: 256,
        category: "Wellness",
        isBestseller: true,
    },
    {
        id: "2",
        name: "Turmeric Curcumin Complex",
        description: "High-potency turmeric with black pepper for maximum absorption",
        price: 749,
        image: "/images/products/turmeric.jpg",
        rating: 4.7,
        reviewCount: 189,
        category: "Anti-inflammatory",
        isNew: true,
    },
    {
        id: "3",
        name: "Brahmi Memory Booster",
        description: "Traditional Brahmi formula for cognitive enhancement and mental clarity",
        price: 649,
        originalPrice: 799,
        image: "/images/products/brahmi.jpg",
        rating: 4.6,
        reviewCount: 142,
        category: "Brain Health",
    },
];

export default function ProductSection(){
    return(
        <>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-[montserrat] font-bold text-foreground mb-4">
                                Featured Products
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Discover our most popular Ayurvedic wellness solutions
                            </p>
                        </div>
                        <Button variant="outline" asChild className="hidden sm:flex">
                            <Link href="/products">
                                View All Products
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    <div className="text-center mt-8 sm:hidden">
                        <Button variant="outline" asChild>
                            <Link href="/products">
                                View All Products
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}