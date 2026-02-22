import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SEO from '@/components/SEO';
import { blogCategories, getBlogPostsByCategory } from '@/data/blogPosts';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = getBlogPostsByCategory(selectedCategory);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <SEO 
        title="Phone Case Design Blog | Wedding Favours & Exhibition Ideas | PictureCase UK"
        description="Expert tips on phone case design, wedding favour ideas, exhibition stand giveaways, and gift inspiration. Learn how to create stunning personalised cases."
        canonical="https://www.picturephonecase.co.uk/blog"
        keywords="phone case design tips, wedding favours blog UK, exhibition giveaway ideas, gift ideas blog, personalised case inspiration"
      />

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.picturephonecase.co.uk/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog & Gift Ideas",
              "item": "https://www.picturephonecase.co.uk/blog"
            }
          ]
        })}
      </script>

      {/* Blog Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "PictureCase UK Blog",
          "description": "Design tips, gift ideas, and inspiration for custom phone cases",
          "url": "https://www.picturephonecase.co.uk/blog",
          "publisher": {
            "@type": "Organization",
            "name": "PictureCase UK",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.picturephonecase.co.uk/logo.png"
            }
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4">
            Gift Ideas & Design Inspiration
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover creative ways to use custom phone cases for weddings, corporate events, seasonal celebrations, and everyday gifts. Expert tips and inspiration from our design team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-primary">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles found in this category yet. Check back soon!</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Create Your Custom Phone Case?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Turn your favourite photos into a stunning phone case. From £19.99 with fast UK delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Start Designing Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
