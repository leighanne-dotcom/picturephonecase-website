import { ArrowRight, Smartphone, Gift, Star, CheckCircle, Heart, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function HomePage() {
  return (
    <div className="w-full">
      <SEO 
        title="Custom Phone Cases UK | Personalised Photo Cases from £19.99 | PictureCase"
        description="Turn your favourite photos into premium custom phone cases. Printed in the UK with vibrant, fade-proof colours. Standard £19.99 | Premium MagSafe £24.99. Fast delivery for iPhone, Samsung & Google Pixel."
        canonical="https://www.picturephonecase.co.uk/"
        keywords="custom phone case UK, personalised phone case, photo phone case UK, iPhone case custom, Samsung custom case, MagSafe case, wedding favours, corporate gifts UK, phone case printing"
        ogImage="https://cdn.wegic.ai/assets/onepage/agent/images/1767091402215.jpg?imageMogr2/format/webp"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-label="Background video showing custom phone cases being created and used in everyday life"
          >
            <source src="https://cdn.wegic.ai/assets/onepage/agent/videos/01KDQDNMHGTCR3DGTGRVPHPRR8.webm" type="video/webm" />
            <track kind="captions" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-6 py-32 md:py-0 max-w-4xl mx-auto">
          <span className="inline-block py-2 px-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs md:text-sm font-medium mb-6">
            🇬🇧 No.1 Personalized Cases in UK
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-7xl mb-6 leading-tight tracking-tight drop-shadow-2xl">
            Custom Photo Phone Cases<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
              Printed in the UK
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/95 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Turn your favourite photos into premium personalised phone cases. From £19.99 with fast UK delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/contact" className="btn-primary bg-white text-dark hover:bg-gray-100 hover:text-primary w-full sm:w-auto">
              Start Designing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/gallery" className="btn-secondary border-white text-white hover:bg-white/10 w-full sm:w-auto">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-dark mb-4">Why Choose PictureCase UK</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just print cases; we create durable pieces of art that you carry every day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-primary" />,
                title: "Premium Quality",
                desc: "Choose Basic or Premium MagSafe cases. High-impact resistant with vibrant, fade-proof printing."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-secondary" />,
                title: "MagSafe Compatible",
                desc: "Upgrade to Premium cases with built-in magnets for wireless charging and magnetic accessories."
              },
              {
                icon: <Gift className="w-8 h-8 text-accent" />,
                title: "Fast Delivery",
                desc: "Designed and printed in the UK. Orders dispatched within 24 hours with tracked shipping."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-dark">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Styles Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Choose Your Style</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mt-2 mb-4">
              Standard vs Premium MagSafe Cases
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our affordable Standard or Premium MagSafe phone cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Case */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-dark mb-2">Standard Case</h3>
                  <p className="text-gray-500">Lightweight & Slim</p>
                  <p className="text-3xl font-bold text-dark mt-3">
                    £19.99
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">Slim, lightweight protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">Vibrant edge-to-edge printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">Scratch-resistant finish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">Precise button cutouts</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="btn-secondary w-full justify-center"
              >
                Order Standard Case
              </Link>
            </div>

            {/* Premium MagSafe Case */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 shadow-lg border-2 border-primary hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold">
                RECOMMENDED
              </div>
              <div className="flex items-start justify-between mb-6 mt-4">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-dark mb-2">Premium Case</h3>
                  <p className="text-gray-600 font-medium">MagSafe Compatible</p>
                  <p className="text-3xl font-bold text-dark mt-3">
                    £24.99
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700 font-medium">Built-in MagSafe magnets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">Wireless charging compatible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">Works with magnetic accessories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">Enhanced drop protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-700">All Basic case features included</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="btn-primary w-full justify-center"
              >
                Order Premium Case
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            💡 Both styles feature your custom design with vibrant, fade-proof printing
          </p>
        </div>
      </section>

      {/* How It Works - Step Process */}
      <section className="py-20 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="font-heading font-bold text-4xl text-dark mb-6">Create in 3 Simple Steps</h2>
              <p className="text-gray-600 mb-10 text-lg">Our design process is built for simplicity. You don't need to be a designer to create something beautiful.</p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Upload Your Photo", desc: "Select your favourite image from your phone or Instagram." },
                  { step: "02", title: "Choose Your Model", desc: "Pick your phone model and case style (Snap or Tough)." },
                  { step: "03", title: "We Print & Ship", desc: "We print it with love and ship it straight to your door." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="flex-shrink-0 font-heading font-bold text-5xl text-gray-200">{item.step}</span>
                    <div>
                      <h4 className="font-heading font-bold text-xl text-dark mb-2">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/contact" className="btn-primary">
                  Start Creating Now
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
              <img 
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1767091402215.jpg?imageMogr2/format/webp" 
                alt="How to design custom phone case UK - upload photo, choose style, order personalised case online" 
                loading="lazy"
                width="600"
                height="800"
                className="relative rounded-3xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">Community Creations</h2>
              <p className="text-gray-600">See what others are designing</p>
            </div>
            <Link to="/gallery" className="hidden md:flex items-center text-primary font-medium hover:text-secondary transition-colors">
              View Full Gallery <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">
              <img 
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1767091401917.jpg?imageMogr2/format/webp" 
                alt="Travel photo collage phone case design - custom holiday memories printed on iPhone case UK" 
                loading="lazy"
                width="400"
                height="500"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">Collage</span>
                  <h3 className="text-white font-bold text-xl">Travel Memories</h3>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer md:mt-12">
              <img 
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1767091402215.jpg?imageMogr2/format/webp" 
                alt="Custom pet portrait phone case - dog photo printed on personalised case UK" 
                loading="lazy"
                width="400"
                height="500"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">Pet Portrait</span>
                  <h3 className="text-white font-bold text-xl">Golden Retriever Love</h3>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2929&auto=format&fit=crop" 
                alt="Abstract art phone case design - custom artistic pattern for iPhone Samsung UK" 
                loading="lazy"
                width="400"
                height="500"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">Pattern</span>
                  <h3 className="text-white font-bold text-xl">Abstract Vibes</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="btn-secondary w-full">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Corporate Services Banner */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
                Exhibition Stand Solution
              </h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Draw crowds to your booth with free personalised phone cases. Each case features your company logo, QR code, and the visitor's personal photo.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">3-5x More Booth Traffic</p>
                    <p className="text-white/80 text-sm">Stand out from competitors handing out pens and flyers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Instant Lead Capture</p>
                    <p className="text-white/80 text-sm">QR codes link directly to your demos, offers, or sign-up forms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Long-Lasting Brand Exposure</p>
                    <p className="text-white/80 text-sm">Cases stay in pockets - not in the bin like traditional giveaways</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/corporate" 
                className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center"
              >
                Explore Corporate Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1767967607584.jpg?imageMogr2/format/webp"
                alt="Exhibition stand ideas UK - phone case printing station integrated into trade show booth for lead generation and branded corporate giveaways"
                loading="lazy"
                width="700"
                height="500"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-dark p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
                <p className="font-bold text-2xl text-primary mb-1">From £899</p>
                <p className="text-xs text-gray-500 mb-1">+ VAT</p>
                <p className="text-sm text-gray-600">Exhibition packages available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Star className="w-10 h-10 text-accent mx-auto mb-6" />
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8 leading-tight">
            "I was amazed by the print quality. The colours are so vibrant and the case feels really sturdy. Definitely ordering more for Christmas gifts!"
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" alt="Sarah - Happy Customer" loading="lazy" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Sarah Jenkins</div>
              <div className="text-gray-400 text-sm">London, UK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Section with Keyword-Rich Links */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mb-4">
              Professional Phone Case Services Across the UK
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From personal gifts to large-scale commercial events, we provide custom phone case solutions that make lasting impressions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wedding Favours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-pink-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">
                    Wedding Favours Hire UK
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Looking for unique wedding favours guests will actually keep? Our <strong>wedding favours hire UK</strong> service provides on-site phone case printing for your special day. Guests design personalised cases with wedding photos and take them home as instant keepsakes. Perfect for weddings, parties, and festivals across England, Scotland, and Wales.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Wedding entertainment hire</strong> - Professional operator included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Festival merchandise</strong> - Unlimited printing during hire period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Party favours</strong> that guests treasure for years</span>
                    </li>
                  </ul>
                  <Link 
                    to="/events"
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                  >
                    Explore Wedding Favours Hire <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Exhibition Stand Ideas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">
                    Exhibition Stand Ideas UK
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Stand out at your next trade show with our <strong>exhibition stand ideas UK</strong> service. Offer free branded phone cases as <strong>trade show giveaways</strong> that visitors actually want. Each case features your logo and QR code for instant lead capture. Perfect for NEC Birmingham, ExCeL London, Manchester Central, and exhibitions nationwide.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Trade show giveaways</strong> with 3-5x more stand traffic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Lead generation stand</strong> solutions with QR tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Conference swag UK</strong> that becomes walking advertising</span>
                    </li>
                  </ul>
                  <Link 
                    to="/corporate"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Explore Exhibition Stand Solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
