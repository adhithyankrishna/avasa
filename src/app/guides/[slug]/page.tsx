import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDE_ARTICLES } from "@/data/guides";
import ArticleClient from "./article-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const article = GUIDE_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | AVASA Nature`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | AVASA Nature`,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: "article",
      publishedTime: article.datePublished,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | AVASA Nature`,
      description: article.excerpt,
      images: [article.image],
    }
  };
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params;
  const article = GUIDE_ARTICLES.find((a) => a.slug === slug);
  
  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AVASA Nature",
      "logo": {
        "@type": "ImageObject",
        "url": "https://avasaexperiences.com/assets/logo.webp"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleClient article={article} />
    </>
  );
}
