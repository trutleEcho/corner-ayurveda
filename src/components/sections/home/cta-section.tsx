import {ArrowRight} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection(){
    return(
        <>
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Card className="border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm">
                        <CardContent className="p-12">
                            <h2 className="text-3xl sm:text-4xl font-[montserrat] font-bold text-foreground mb-4">
                                Begin Your Wellness Journey Today
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join thousands of satisfied customers who have discovered the power of
                                authentic Ayurvedic wellness with Corner Ayurveda.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="/products">
                                        Shop Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/contact">
                                        Get Consultation
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    )
}