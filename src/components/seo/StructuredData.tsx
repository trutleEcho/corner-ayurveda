'use client';

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Corner Ayurveda",
  "alternateName": "Corner Ayurveda | Ayurvedic Heritage",
  "url": "https://cornerayurveda.com",
  "logo": "https://cornerayurveda.com/logo.png",
  "description": "Authentic Ayurvedic products and natural wellness solutions rooted in 5000 years of traditional wisdom.",
  "foundingDate": "1985",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Wellness Street, Andheri West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400058",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98765-43210",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://facebook.com/cornerayurveda",
    "https://twitter.com/cornerayurveda",
    "https://instagram.com/cornerayurveda",
    "https://youtube.com/cornerayurveda"
  ]
};

// Website structured data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Corner Ayurveda",
  "url": "https://cornerayurveda.com",
  "description": "Authentic Ayurvedic products and natural wellness solutions",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://cornerayurveda.com/products?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Product structured data generator
export const generateProductStructuredData = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": "Corner Ayurveda"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Corner Ayurveda"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviewCount
  }
});

// Article structured data generator
export const generateArticleStructuredData = (article: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Corner Ayurveda",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cornerayurveda.com/logo.png"
    }
  },
  "datePublished": article.date,
  "dateModified": article.date,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://cornerayurveda.com/articles/${article.slug}`
  }
});

