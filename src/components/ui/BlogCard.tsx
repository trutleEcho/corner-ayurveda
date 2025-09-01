import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  featured?: boolean;
  type?: "blog" | "article";
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  image,
  author,
  publishedAt,
  readTime,
  category,
  featured = false,
  type = "blog",
}: BlogCardProps) {
  const href = type === "blog" ? `/blog/${slug}` : `/articles/${slug}`;
  
  return (
    <Card className={`group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm ${
      featured ? "lg:col-span-2" : ""
    }`}>
      <div className="relative overflow-hidden">
        <Link href={href}>
          <div className={`relative bg-muted/30 ${
            featured ? "aspect-[2/1]" : "aspect-[4/3]"
          }`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge 
            variant="secondary" 
            className="bg-primary/90 text-primary-foreground backdrop-blur-sm"
          >
            {category}
          </Badge>
        </div>
        
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge 
              variant="secondary" 
              className="bg-accent/90 text-accent-foreground backdrop-blur-sm"
            >
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <Link href={href}>
          <h3 className={`font-[montserrat] font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 ${
            featured ? "text-xl" : "text-lg"
          }`}>
            {title}
          </h3>
        </Link>
        
        <p className={`text-muted-foreground mb-4 ${
          featured ? "line-clamp-3" : "line-clamp-2"
        }`}>
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" asChild className="group/btn p-0 h-auto">
          <Link href={href} className="flex items-center gap-2">
            <span>Read {type === "blog" ? "Post" : "Article"}</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

