import { supabase } from './supabase';
import { Product, BlogPost, Article } from '@/types';

// Product functions
export async function getAllProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data || [];
}

export async function getFeaturedProducts(limit: number = 6): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .or('is_bestseller.eq.true,is_new.eq.true')
    .limit(limit)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }

  return data || [];
}

// Blog functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
}

export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('featured', true)
    .limit(limit)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }

  return data || [];
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('category', category)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }

  return data || [];
}

// Article functions
export async function getAllArticles(): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }

  return data;
}

export async function getFeaturedArticles(limit: number = 3): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('featured', true)
    .limit(limit)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching featured articles:', error);
    return [];
  }

  return data || [];
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('category', category)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles by category:', error);
    return [];
  }

  return data || [];
}

// Search functions
export async function searchProducts(query: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error searching products:', error);
    return [];
  }

  return data || [];
}

export async function searchContent(query: string): Promise<(BlogPost | Article)[]> {
  const [blogResult, articleResult] = await Promise.all([
    supabase
      .from('blog_posts')
      .select('*')
      .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,category.ilike.%${query}%`),
    supabase
      .from('articles')
      .select('*')
      .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,category.ilike.%${query}%`)
  ]);

  if (blogResult.error) {
    console.error('Error searching blog posts:', blogResult.error);
  }

  if (articleResult.error) {
    console.error('Error searching articles:', articleResult.error);
  }

  const blogs = blogResult.data || [];
  const articles = articleResult.data || [];
  
  return [...blogs, ...articles];
}

// Category functions
export async function getAllCategories(): Promise<string[]> {
  const [productResult, blogResult, articleResult] = await Promise.all([
    supabase.from('products').select('category'),
    supabase.from('blog_posts').select('category'),
    supabase.from('articles').select('category')
  ]);

  const productCategories = productResult.data?.map(p => p.category) || [];
  const blogCategories = blogResult.data?.map(b => b.category) || [];
  const articleCategories = articleResult.data?.map(a => a.category) || [];
  
  const allCategories = [...productCategories, ...blogCategories, ...articleCategories];
  return [...new Set(allCategories)].sort();
}

export async function getProductCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('products')
    .select('category');

  if (error) {
    console.error('Error fetching product categories:', error);
    return [];
  }

  const categories = data?.map(p => p.category) || [];
  return [...new Set(categories)].sort();
}

