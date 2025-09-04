import { Award, Globe, Leaf, Users} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";

export default function HeritageSection(){

    const heritageStats = [
        {
            icon: Leaf,
            number: "50+",
            label: "Years of Ayurvedic Wisdom",
            description: "Rooted in ancient traditions",
        },
        {
            icon: Users,
            number: "1,00,000+",
            label: "Happy Customers",
            description: "Trusted by wellness enthusiasts",
        },
        {
            icon: Award,
            number: "100%",
            label: "Natural Products",
            description: "No artificial additives",
        },
        {
            icon: Globe,
            number: "50+",
            label: "Cities Served",
            description: "Nation wide wellness community",
        },
    ];

    return(
        <>
            {/* Heritage & Legacy Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-[montserrat] font-bold text-foreground mb-4">
                            Our Ayurvedic Heritage
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Corner Ayurveda has been preserving and sharing the ancient wisdom of Ayurveda
                            for generations. Our commitment to authenticity and quality ensures that every
                            product carries the essence of traditional healing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {heritageStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <Card
                                    key={stat.label}
                                    className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                            <Icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className="text-3xl font-bold text-foreground mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="font-semibold text-foreground mb-2">
                                            {stat.label}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {stat.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}