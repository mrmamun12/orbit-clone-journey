
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Hosting Plan for Your Website",
      excerpt: "Selecting the right hosting plan is crucial for your website's performance. In this article, we break down the differences between shared, VPS, and dedicated hosting to help you make the best choice.",
      date: "June 12, 2023",
      author: "Alex Johnson",
      category: "Hosting Tips",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "5 Ways to Improve Your Website Security",
      excerpt: "Website security should be a top priority for any business. Discover five essential methods to protect your website from common security threats and keep your data safe.",
      date: "May 28, 2023",
      author: "Samantha Lee",
      category: "Security",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Benefits of Cloud Hosting for E-commerce Websites",
      excerpt: "Cloud hosting offers unique advantages for online stores. Learn how cloud infrastructure can help your e-commerce site handle traffic spikes and improve customer experience.",
      date: "April 15, 2023",
      author: "Michael Wong",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Optimizing WordPress Performance: A Comprehensive Guide",
      excerpt: "Is your WordPress site running slow? Discover proven techniques to optimize your WordPress installation and dramatically improve loading times.",
      date: "March 8, 2023",
      author: "Emily Carter",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Why Website Speed Matters for SEO and User Experience",
      excerpt: "Website speed impacts both search engine rankings and user satisfaction. Learn why a fast website is essential and how to measure and improve your site's performance.",
      date: "February 20, 2023",
      author: "David Nguyen",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Latest news, guides, and insights about web hosting and website management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center ml-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 hover:text-orbit-blue transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">
                        By {post.author}
                      </p>
                    </div>
                    <a 
                      href={`/blog/${post.id}`} 
                      className="text-sm font-medium text-orbit-blue hover:text-blue-700 inline-flex items-center"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
