import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const templates = [
    {
      id: 1,
      name: "Avada",
      category: "Multipurpose",
      price: "$69",
      image: "/api/placeholder/400/300",
      description: "The most popular multipurpose theme with 744,000+ sales. Perfect for any website with unlimited design possibilities.",
      features: ["Fusion Builder", "100+ Demo Sites", "WooCommerce Ready", "Responsive Design", "SEO Optimized"]
    },
    {
      id: 2,
      name: "The7",
      category: "Multipurpose",
      price: "$39",
      image: "/api/placeholder/400/300", 
      description: "Most customizable WordPress theme with 246,000+ sales. Features 25+ pre-built demos and 630+ design options.",
      features: ["Visual Composer", "25+ Demos", "Ultimate Addons", "Design Wizard", "WooCommerce"]
    },
    {
      id: 3,
      name: "BeTheme",
      category: "Multipurpose",
      price: "$60",
      image: "/api/placeholder/400/300",
      description: "Multipurpose responsive theme with 240,000+ sales. Over 650+ pre-built websites for any industry.",
      features: ["650+ Pre-built Sites", "Muffin Builder", "Responsive", "One-Click Install", "Admin Panel"]
    },
    {
      id: 4,
      name: "Enfold",
      category: "Multipurpose", 
      price: "$59",
      image: "/api/placeholder/400/300",
      description: "Clean and super flexible theme with 232,000+ sales. Features powerful drag & drop editor.",
      features: ["Advanced Layout Builder", "18+ Demos", "WooCommerce", "Custom Widgets", "Portfolio"]
    },
    {
      id: 5,
      name: "Jupiter",
      category: "Creative",
      price: "$59",
      image: "/api/placeholder/400/300",
      description: "Best Elementor theme with 158,000+ sales. Perfect for creating stunning websites with Elementor.",
      features: ["Elementor Pro", "150+ Templates", "Header Builder", "WooCommerce", "One Click Import"]
    },
    {
      id: 6,
      name: "Salient",
      category: "Creative",
      price: "$60", 
      image: "/api/placeholder/400/300",
      description: "Popular theme with 123,000+ sales. Front-end editing and extensive template collection.",
      features: ["Visual Composer", "Portfolio Options", "WooCommerce", "Custom Post Types", "Responsive"]
    },
    {
      id: 7,
      name: "X Theme", 
      category: "Creative",
      price: "$59",
      image: "/api/placeholder/400/300",
      description: "Versatile theme with 100,000+ sales. Four unique design stacks in one powerful theme.",
      features: ["4 Unique Stacks", "Visual Composer", "Cornerstone Page Builder", "WooCommerce", "Extensions"]
    },
    {
      id: 8,
      name: "Uncode",
      category: "Creative",
      price: "$59",
      image: "/api/placeholder/400/300", 
      description: "Creative multiuse theme perfect for agencies and freelancers. Modern and pixel-perfect design.",
      features: ["Frontend Editor", "70+ Concepts", "WooCommerce", "Portfolio Layouts", "Adaptive Images"]
    },
    {
      id: 9,
      name: "Bridge", 
      category: "Creative",
      price: "$69",
      image: "/api/placeholder/400/300",
      description: "Creative multipurpose theme with 376+ demos. Perfect for agencies and creative professionals.",
      features: ["376+ Demos", "QODE Framework", "Visual Composer", "Revolution Slider", "WooCommerce"]
    },
    {
      id: 10,
      name: "Total",
      category: "Business",
      price: "$59", 
      image: "/api/placeholder/400/300",
      description: "Responsive multipurpose theme with live Customizer. Built-in drag & drop page builder.",
      features: ["Live Customizer", "40+ Demos", "Total Theme Core", "WooCommerce", "Custom Post Types"]
    },
    {
      id: 11,
      name: "Kalium",
      category: "Creative",
      price: "$39",
      image: "/api/placeholder/400/300",
      description: "Creative theme for professionals and businesses. Portfolio and blog capabilities.",
      features: ["Portfolio Layouts", "Blog Styles", "WooCommerce", "Visual Composer", "Demo Content"]
    },
    {
      id: 12,
      name: "Porto",
      category: "Business", 
      price: "$59",
      image: "/api/placeholder/400/300",
      description: "Ultimate responsive ecommerce theme. Perfect for any business or online store.",
      features: ["25+ Demos", "Ultimate Addons", "Speed Optimized", "Visual Composer", "WooCommerce"]
    },
    {
      id: 13,
      name: "Woodmart",
      category: "E-commerce",
      price: "$59",
      image: "/api/placeholder/400/300",
      description: "Premium WooCommerce theme optimized for online stores. Fast and conversion-focused.",
      features: ["WooCommerce Focused", "Ajax Shop", "Product Builder", "Header Builder", "Speed Optimized"]
    },
    {
      id: 14,
      name: "Flatsome",
      category: "E-commerce", 
      price: "$59",
      image: "/api/placeholder/400/300",
      description: "Best selling WooCommerce theme. Perfect for creating beautiful online stores.",
      features: ["UX Builder", "Mobile Optimized", "Conversion Focused", "Catalog Mode", "Quick View"]
    },
    {
      id: 15,
      name: "OceanWP",
      category: "Multipurpose",
      price: "$39",
      image: "/api/placeholder/400/300", 
      description: "Lightweight and customizable theme. Perfect for any website with excellent performance.",
      features: ["Lightning Fast", "Elementor Compatible", "WooCommerce Ready", "Translation Ready", "SEO Friendly"]
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Icon name="Layers" className="text-primary" size={28} />
            <span className="text-xl font-bold">PanetsTemplates</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Templates</a>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/contact-information" className="hover:text-primary transition-colors">Contact</a>
              <a href="/legal-notice" className="hover:text-primary transition-colors">Legal Notice</a>
              <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms</a>
              <a href="/refund-policy" className="hover:text-primary transition-colors">Refund</a>
            </div>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">

            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Premium WordPress Templates<br />
              <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                for Your Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Build professional websites with our carefully crafted templates. 
              Clean design, optimized code, and complete responsiveness guaranteed.
            </p>

          </div>
        </div>
      </section>

      {/* Template Catalog */}
      <section id="templates" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Template Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect template for your project from our curated collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <Card 
                  key={template.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card border-border shadow-lg cursor-pointer"
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background">
                      {template.category}
                    </Badge>
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {template.price}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl mb-2">{template.name}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button className="flex-1 rounded-full">
                        <Icon name="ShoppingCart" className="mr-2" size={16} />
                        Purchase
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Icon name="Eye" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose PanetsTemplates?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the best value with our premium features and dedicated support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Smartphone" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Mobile Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All templates are fully responsive and optimized for mobile devices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Search" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">SEO Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built with SEO best practices to help your site rank higher
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Zap" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Fast Loading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized code ensures lightning-fast loading times
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Palette" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Easy Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customize colors, fonts, and layouts with ease
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Shield" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Regular Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get free updates and new features for life
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="HeadphonesIcon" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional support whenever you need help
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Layers" size={28} className="text-yellow-400" />
                <span className="text-xl font-bold">PanetsTemplates</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Premium WordPress templates for creating modern, professional websites. 
                Quality design meets powerful functionality.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold mb-2 text-lg">Legal</h3>
              <div className="flex flex-col space-y-2 text-gray-400">
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/contact-information" className="hover:text-white transition-colors">Contact Information</a>
                <a href="/legal-notice" className="hover:text-white transition-colors">Legal Notice</a>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>


        </div>
      </footer>

      {/* Template Details Dialog */}
      <Dialog open={!!selectedTemplate} onOpenChange={() => setSelectedTemplate(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedTemplate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedTemplate.name}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={selectedTemplate.image} 
                    alt={selectedTemplate.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <img 
                      src="/api/placeholder/300/200" 
                      alt="Template screenshot 1"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src="/api/placeholder/300/200" 
                      alt="Template screenshot 2"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src="/api/placeholder/300/200" 
                      alt="Template screenshot 3"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src="/api/placeholder/300/200" 
                      alt="Template screenshot 4"
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                </div>
                <div>
                  <Badge className="mb-4">{selectedTemplate.category}</Badge>
                  <p className="text-muted-foreground mb-6">{selectedTemplate.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {selectedTemplate.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold">{selectedTemplate.price}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      Purchase
                    </Button>
                    <Button variant="outline">
                      <Icon name="Eye" className="mr-2" size={16} />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Index;