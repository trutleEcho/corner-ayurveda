import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types";

interface ProductSectionProps {
  featuredProducts: Product[];
}

export default function ProductSection({ featuredProducts }: ProductSectionProps){
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

                    {featuredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No featured products available at the moment.</p>
                        </div>
                    )}

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