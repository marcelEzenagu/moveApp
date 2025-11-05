import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Universities in Canada for International Students",
    excerpt:
      "Discover the best Canadian universities offering world-class education and excellent post-study work opportunities.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Study Destinations",
  },
  {
    id: 2,
    title: "Complete Guide to Student Visa Application",
    excerpt:
      "Everything you need to know about preparing documents, interviews, and increasing your visa approval chances.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "Visa Guide",
  },
  {
    id: 3,
    title: "Scholarship Opportunities for 2025 Intake",
    excerpt:
      "Comprehensive list of fully-funded and partial scholarships available for international students worldwide.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Scholarships",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Insights & Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and guides for studying abroad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="shadow-card hover:shadow-xl transition-smooth cursor-pointer group border-0"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-accent font-semibold mb-3">
                  {post.category}
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <Button
                  variant="link"
                  className="text-primary p-0 mt-4 group-hover:gap-2 transition-smooth"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
