import {Metadata} from "next";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Badge} from "@/components/ui/badge";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    Send,
    Leaf
} from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us - Corner Ayurveda",
    description: "Get in touch with Corner Ayurveda for Ayurvedic wellness consultations, product inquiries, or any questions about natural health solutions.",
    keywords: ["contact corner ayurveda", "ayurvedic consultation", "customer support", "wellness inquiry"],
};

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Our Store",
        details: [
            "Corner Ayurveda",
            "123 Wellness Street, Andheri West",
            "Mumbai, Maharashtra 400058",
            "India"
        ],
    },
    {
        icon: Phone,
        title: "Call Us",
        details: [
            "+91 98765 43210",
            "+91 22 2674 5678",
            "Mon-Sat: 9:00 AM - 7:00 PM",
            "Sunday: 10:00 AM - 5:00 PM"
        ],
    },
    {
        icon: Mail,
        title: "Email Us",
        details: [
            "info@cornerayurveda.com",
            "support@cornerayurveda.com",
            "orders@cornerayurveda.com",
            "consultation@cornerayurveda.com"
        ],
    },
];

const faqs = [
    {
        question: "Do you offer Ayurvedic consultations?",
        answer: "Yes, we provide personalized Ayurvedic consultations with certified practitioners to help you choose the right products for your constitution and health goals."
    },
    {
        question: "How long does shipping take?",
        answer: "We offer free shipping on orders over ₹999. Delivery typically takes 3-7 business days within India, and 7-14 days for international orders."
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-8">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                        <MessageCircle className="h-4 w-4 mr-2"/>
                        Get in Touch
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl font-[montserrat] font-bold text-foreground mb-6">
                        We&apos;re Here to Help
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Have questions about our products, need wellness guidance, or want to learn more
                        about Ayurveda? Our expert team is ready to assist you on your journey to natural wellness.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="border-0 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl font-[montserrat] flex items-center gap-2">
                                    <Leaf className="h-6 w-6 text-primary"/>
                                    Send us a Message
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-foreground mb-2 block">
                                            First Name *
                                        </label>
                                        <Input placeholder="Enter your first name"/>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-foreground mb-2 block">
                                            Last Name *
                                        </label>
                                        <Input placeholder="Enter your last name"/>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">
                                        Email Address *
                                    </label>
                                    <Input type="email" placeholder="Enter your email"/>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">
                                        Phone Number
                                    </label>
                                    <Input type="tel" placeholder="Enter your phone number"/>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">
                                        Subject *
                                    </label>
                                    <Input placeholder="What is this regarding?"/>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">
                                        Message *
                                    </label>
                                    <Textarea
                                        placeholder="Tell us how we can help you..."
                                        className="min-h-[120px]"
                                    />
                                </div>

                                <Button className="w-full" size="lg">
                                    <Send className="h-4 w-4 mr-2"/>
                                    Send Message
                                </Button>

                                <p className="text-xs text-muted-foreground">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <Card key={info.title} className="border-0 bg-card/50 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-primary/10">
                                                    <Icon className="h-6 w-6 text-primary"/>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold font-[montserrat] text-foreground mb-2">
                                                        {info.title}
                                                    </h3>
                                                    <div className="space-y-1">
                                                        {info.details.map((detail, index) => (
                                                            <p key={index} className="text-sm text-muted-foreground">
                                                                {detail}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Hours */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-[montserrat] font-bold text-foreground mb-4">
                            Business Hours
                        </h2>
                        <p className="text-muted-foreground">
                            We&apos;re here to serve you during these hours
                        </p>
                    </div>

                    <Card className="max-w-2xl mx-auto border-0 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="text-center">
                                    <Clock className="h-8 w-8 text-primary mx-auto mb-3"/>
                                    <h3 className="font-semibold font-[montserrat] text-foreground mb-2">Store
                                        Hours</h3>
                                    <div className="space-y-1 text-sm text-muted-foreground">
                                        <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3"/>
                                    <h3 className="font-semibold font-[montserrat] text-foreground mb-2">Customer
                                        Support</h3>
                                    <div className="space-y-1 text-sm text-muted-foreground">
                                        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                                        <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-muted-foreground">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-[montserrat] font-bold text-foreground mb-4">
                            Visit Our Store
                        </h2>
                        <p className="text-muted-foreground">
                            Experience our products in person at our Mumbai location
                        </p>
                    </div>


                    <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                        <div className="relative aspect-video">
                            {/* Google Maps Embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.5902893957259!2d75.90422958359039!3d17.67644375825776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da7e3d5d87e7%3A0x92044951e9d28303!2sCorner%20Medical%20Stores!5e0!3m2!1sen!2sin!4v1756698020433!5m2!1sen!2sin"
                                autoFocus
                                className="absolute inset-0 w-full h-full rounded-2xl"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Card>

                </div>
            </section>
        </div>
    );
}

