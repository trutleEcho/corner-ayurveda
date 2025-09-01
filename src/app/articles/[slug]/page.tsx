import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getAllArticles, getAllProducts } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BlogCard from "@/components/ui/BlogCard";
import ProductCard from "@/components/ui/ProductCard";
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  BookOpen, 
  Tag,
  ArrowLeft,
  Heart,
  Leaf,
  Award
} from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} - CMS Articles`,
    description: article.excerpt,
    keywords: [article.title, ...article.tags, article.category],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const [allArticles, allProducts] = await Promise.all([
    getAllArticles(),
    getAllProducts()
  ]);

  const relatedArticles = allArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const relatedProducts = article.relatedProducts 
    ? allProducts.filter(p => article.relatedProducts!.includes(p.id)).slice(0, 4)
    : [];

  const publishedDate = new Date(article.publishedAt || new Date());
  const updatedDate = article.updatedAt ? new Date(article.updatedAt) : null;

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-primary">Articles</Link>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline">{article.category}</Badge>
              {article.featured && (
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              {article.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{publishedDate.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min read</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video bg-muted/30 rounded-lg overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                About the Author
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {article.author} is a certified Ayurvedic practitioner and wellness expert with extensive 
                knowledge in traditional healing practices, herbal medicine, and holistic health approaches.
              </p>
            </CardContent>
          </Card>

          {/* Back to Articles */}
          <div className="mt-8 pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link href="/articles">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <BlogCard key={relatedArticle.slug} {...relatedArticle} type="article" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Educational Resources */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Continue Your Ayurvedic Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore more educational content and discover products that support your wellness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  More Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deepen your understanding of Ayurvedic principles and practices
                </p>
                <Button asChild>
                  <Link href="/articles">Browse Articles</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Ayurvedic Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover authentic Ayurvedic products for your wellness routine
                </p>
                <Button asChild>
                  <Link href="/products">Shop Products</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">
                Stay Updated with Educational Content
              </CardTitle>
              <p className="text-muted-foreground">
                Get the latest Ayurvedic research and educational articles delivered to your inbox
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
