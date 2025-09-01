import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Product, BlogPost, Article } from '@/types';

const contentDirectory = path.join(process.cwd(), 'src/content');
const dataDirectory = path.join(process.cwd(), 'src/data');

// Product functions
export function getAllProducts(): Product[] {
  const productsPath = path.join(dataDirectory, 'products.json');
  const fileContents = fs.readFileSync(productsPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProductById(id: string): Product | null {
  const products = getAllProducts();
  return products.find(product => product.id === id) || null;
}

export function getProductsByCategory(category: string): Product[] {
  const products = getAllProducts();
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedProducts(limit: number = 6): Product[] {
  const products = getAllProducts();
  return products
    .filter(product => product.isBestseller || product.isNew)
    .slice(0, limit);
}

// Blog functions
export function getAllBlogPosts(): BlogPost[] {
  const blogsDirectory = path.join(contentDirectory, 'blogs');
  
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, 'blogs', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getFeaturedBlogPosts(limit: number = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts
    .filter(post => post.featured)
    .slice(0, limit);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

// Article functions
export function getAllArticles(): Article[] {
  const articlesDirectory = path.join(contentDirectory, 'articles');
  
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as Article;
    });

  return allArticlesData.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(contentDirectory, 'articles', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as Article;
  } catch (error) {
    return null;
  }
}

export function getFeaturedArticles(limit: number = 3): Article[] {
  const articles = getAllArticles();
  return articles
    .filter(article => article.featured)
    .slice(0, limit);
}

export function getArticlesByCategory(category: string): Article[] {
  const articles = getAllArticles();
  return articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
}

// Search functions
export function searchProducts(query: string): Product[] {
  const products = getAllProducts();
  const searchTerm = query.toLowerCase();
  
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

export function searchContent(query: string): (BlogPost | Article)[] {
  const blogs = getAllBlogPosts();
  const articles = getAllArticles();
  const allContent = [...blogs, ...articles];
  const searchTerm = query.toLowerCase();
  
  return allContent.filter(content => 
    content.title.toLowerCase().includes(searchTerm) ||
    content.excerpt.toLowerCase().includes(searchTerm) ||
    content.category.toLowerCase().includes(searchTerm) ||
    content.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

// Category functions
export function getAllCategories(): string[] {
  const products = getAllProducts();
  const blogs = getAllBlogPosts();
  const articles = getAllArticles();
  
  const productCategories = products.map(p => p.category);
  const blogCategories = blogs.map(b => b.category);
  const articleCategories = articles.map(a => a.category);
  
  const allCategories = [...productCategories, ...blogCategories, ...articleCategories];
  return [...new Set(allCategories)].sort();
}

export function getProductCategories(): string[] {
  const products = getAllProducts();
  const categories = products.map(p => p.category);
  return [...new Set(categories)].sort();
}

