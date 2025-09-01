import { MetadataRoute } from 'next'
import { getAllBlogPosts, getAllArticles, getAllProducts } from '@/lib/content'

// Helper function to safely parse dates
function safeParseDate(dateString: string | null | undefined): Date {
  if (!dateString) {
    return new Date();
  }
  
  try {
    const date = new Date(dateString);
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return new Date();
    }
    return date;
  } catch (error) {
    return new Date();
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cornerayurveda.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  try {
    // Fetch data from Supabase
    const [products, blogPosts, articles] = await Promise.all([
      getAllProducts(),
      getAllBlogPosts(),
      getAllArticles()
    ]);

    // Product pages
    const productPages = products.map((product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    // Blog posts
    const blogPostPages = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: safeParseDate(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    // Articles
    const articlePages = articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: safeParseDate(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [
      ...staticPages,
      ...productPages,
      ...blogPostPages,
      ...articlePages,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return only static pages if there's an error
    return staticPages;
  }
}

