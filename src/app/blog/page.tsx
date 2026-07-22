"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Cell, Grid, Section, Skeleton } from "fj-elements";
import styles from "./Blog.module.css";
import SectionTitle from "../components/Global/SectionTitle/SectionTitle";
import ViewAllLink from "../components/Global/ViewAllLink/ViewAllLink";

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  snippet: string;
  categories: string[];
};

interface RSS2JsonItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  [key: string]: unknown;
}

interface RSS2JsonResponse {
  status: string;
  items?: RSS2JsonItem[];
  feed?: Record<string, unknown>;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joshhallan",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json() as Promise<RSS2JsonResponse>; // Explicitly cast the JSON promise response shape
      })
      .then((data) => {
        if (data.status === "ok" && Array.isArray(data.items)) {
          const mappedPosts: MediumPost[] = data.items.map(
            (item: RSS2JsonItem) => {
              const cleanSnippet = item.description
                ? item.description
                    .replace(/<[^>]*>/g, "")
                    .substring(0, 250)
                    .trim() + "..."
                : "";

              return {
                title: item.title || "",
                link: item.link || "",
                pubDate: item.pubDate || "",
                snippet: cleanSnippet,
                categories: item.categories || [],
              };
            },
          );

          const sorted = mappedPosts.sort(
            (a, b) =>
              new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
          );

          setPosts(sorted);
        }
      })
      .catch((err: unknown) => {
        // Enforce safe type validation on the caught error
        if (err instanceof Error) {
          console.error("Error loading blog posts:", err.message);
        } else {
          console.error("An unexpected error occurred:", err);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main>
        <Section>
          <Section>
            <Skeleton height={"20%"} width={"100%"} />
            <Skeleton height={"20%"} width={"100%"} />
            <Skeleton height={"20%"} width={"100%"} />
          </Section>
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section>
        <Section>
          <Grid gap="md">
            <Cell small={12}>
              <SectionTitle color="white" underline={true}>
                Blog
              </SectionTitle>
            </Cell>

            {posts.map((post, index) => {
              const variant = index % 2 === 0 ? "cyan" : "pink";

              return (
                <Cell key={post.link} small={12}>
                  <Card variant={variant} className={styles.summaryCard}>
                    <Card.Header>
                      <div className={styles.headerFlex}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        {index === 0 && (
                          <span className={styles.pulseIndicator} />
                        )}
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

                    <Card.Footer>
                      <div className="">
                        <div className={`${styles.techPills} w-full sm:w-auto`}>
                          {post.categories.map((tag, i) => (
                            <Badge key={i}>#{tag}</Badge>
                          ))}
                        </div>

                        <ViewAllLink href={post.link} target="_blank">
                          Read Article
                        </ViewAllLink>
                      </div>
                    </Card.Footer>
                  </Card>
                </Cell>
              );
            })}
          </Grid>
        </Section>
      </Section>
    </main>
  );
}
