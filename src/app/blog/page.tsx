import React from "react";
import Parser from "rss-parser";
import Card from "@/components/Global/Card/Card";
import styles from "./Blog.module.css";
import { Metadata } from "next";

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  snippet: string;
  categories: string[];
};

type MediumItem = Parser.Item & {
  "content:encodedSnippet"?: string;
};

async function getMediumPosts() {
  const parser: Parser<string, MediumItem> = new Parser();
  const feed = await parser.parseURL("https://medium.com/feed/@joshhallan");

  return feed.items.map((item: MediumItem) => {
    const rawSnippet =
      item["content:encodedSnippet"] || item.contentSnippet || "";
    const truncatedSnippet =
      rawSnippet.length > 250
        ? rawSnippet.substring(0, 250).trim() + "..."
        : rawSnippet;

    return {
      title: item.title || "",
      link: item.link || "",
      pubDate: item.pubDate || "",
      snippet: truncatedSnippet,
      categories: item.categories || [],
    };
  }) as MediumPost[];
}

export default async function BlogPage() {
  const allPosts = await getMediumPosts();

  const posts = [...allPosts].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  );

  return (
    <main className="page-wrapper bg-mesh">
      <div className="container">
        <header className="mb-16">
          <h2 className="section-title--underline">Blog Posts</h2>
        </header>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {posts.map((post, index) => {
            const variant = index % 2 === 0 ? "cyan" : "pink";

            return (
              <Card
                key={post.link}
                variant={variant}
                className={styles.summaryCard}
              >
                <Card.Header>
                  <div className={styles.headerFlex}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    {index === 0 && <span className={styles.pulseIndicator} />}
                  </div>
                </Card.Header>

                <Card.Body className={styles.cardBody}>
                  <p className={styles.date}>
                    {new Date(post.pubDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p className={styles.postCopy}>{post.snippet}</p>
                </Card.Body>

                <Card.Footer
                  className={`${styles.cardFooter} mt-8 pt-6 border-t border-white/5`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-6">
                    <div className={`${styles.techPills} w-full sm:w-auto`}>
                      {post.categories.map((tag, i) => (
                        <span key={i} className={styles.techPill}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.viewAllLink} w-full sm:w-auto justify-center sm:justify-start`}
                    >
                      <span>Read Article</span>
                      <span className="arrow">→</span>
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Blog",
};
