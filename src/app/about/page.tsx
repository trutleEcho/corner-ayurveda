import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Leaf, 
  Heart, 
  Shield, 
  BookOpen,
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Corner Medical Stores' journey in preserving Ayurvedic wisdom and our commitment to authentic, natural wellness solutions rooted in 5000 years of tradition.",
  keywords: ["about corner medical stores", "ayurvedic heritage", "company story", "traditional medicine", "natural wellness"],
};

const values = [
  {
    icon: Leaf,
    title: "Authenticity",
    description: "We preserve the original Ayurvedic formulations and traditional preparation methods passed down through generations.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Every product undergoes rigorous testing to ensure purity, potency, and safety while maintaining traditional efficacy.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe in healing that encompasses the whole person - body, mind, and spirit - with genuine care and understanding.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "We continuously study and share Ayurvedic wisdom, bridging ancient knowledge with modern scientific understanding.",
  },
];

const milestones = [
  {
    year: "1985",
    title: "Foundation",
    description: "Corner Medical Stores was founded with a vision to preserve and share authentic Ayurvedic wisdom.",
  },
  {
    year: "1995",
    title: "First Products",
    description: "Launched our first line of traditional Ayurvedic formulations, focusing on digestive and respiratory health.",
  },
  {
    year: "2005",
    title: "Quality Certification",
    description: "Achieved ISO certification and established our modern quality control laboratory.",
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Began serving customers worldwide, bringing authentic Ayurveda to the global wellness community.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched our comprehensive online platform to make Ayurvedic wellness accessible to everyone.",
  },
  {
    year: "2024",
    title: "Innovation Continues",
    description: "Continuing to innovate while staying true to traditional Ayurvedic principles and values.",
  },
];

const team = [
  {
    name: "Anil Tanksali",
    role: "Founder",
    image: "/images/team/rajesh.jpg",
    bio: "Expert in herbal medicine quality control with extensive knowledge of traditional preparation methods.",
  },
  {
    name: "Prashant Tanksali",
    role: "Founder",
    image: "/images/team/anita.jpg",
    bio: "Leading our efforts to validate traditional formulations through modern scientific research.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        {/* Background video */}
        <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.pixabay.com/video/2025/06/24/287510_large.mp4" // Put your video file in public/videos
            autoPlay
            loop
            muted
            playsInline
        />

        {/* Overlay (optional, for readability) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Foreground content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Story
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
                Preserving Ayurvedic Heritage for Modern Wellness
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                For nearly four decades, Corner Medical Stores has been dedicated to preserving
                the ancient wisdom of Ayurveda while making it accessible to the modern world.
                Our journey began with a simple belief: that traditional healing wisdom,
                when combined with modern quality standards, can transform lives.
              </p>
              <Button asChild size="lg">
                <Link href="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative bg-muted/30 rounded-lg overflow-hidden">
                <Image
                    src="/images/about/heritage.png"
                    alt="Ayurvedic Heritage"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make authentic Ayurvedic wellness accessible to everyone by preserving 
                  traditional knowledge, ensuring the highest quality standards, and 
                  educating people about the benefits of natural, holistic health solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the world&apos;s most trusted source for authentic Ayurvedic products,
                  bridging ancient wisdom with modern science to create a healthier, 
                  more balanced world where traditional healing is valued and accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to global reach, our commitment to authentic Ayurveda has never wavered
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <Card className="border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-primary text-primary-foreground">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  <div className="flex-1 lg:block hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Meet Our Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team combines deep traditional knowledge with modern expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-muted/50 rounded-full"></div>
                  <h3 className="font-semibold text-foreground mb-1 font-[montserrat]">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">39+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Natural Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Join Our Wellness Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the transformative power of authentic Ayurveda. Start your journey 
            to natural wellness with Corner Medical Stores today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">
                Shop Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

