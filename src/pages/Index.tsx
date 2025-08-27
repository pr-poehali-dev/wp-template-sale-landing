import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const templates = [
    {
      id: 1,
      name: "Travel Booking",
      category: "Travel & Tourism",
      price: "$39",
      image: "https://cdn.poehali.dev/files/50759103-be03-40f1-a2a6-1c446c5c10b2.jpg",
      description: "Perfect travel booking template combining innovation and functionality. Features responsive design for easy destination exploration and booking across all devices.",
      features: ["Responsive Layout", "Travel Package Browsing", "Booking System", "Blog Integration", "Travel Tips Section"],
      screenshots: [
        "https://cdn.poehali.dev/files/50759103-be03-40f1-a2a6-1c446c5c10b2.jpg",
        "https://cdn.poehali.dev/files/cfee154a-490a-4aca-b8b2-19e40a3f7478.jpg", 
        "https://cdn.poehali.dev/files/41ac25d5-652f-4d0f-8275-2f40f2b239d3.jpg",
        "https://cdn.poehali.dev/files/9a2cb54d-1b92-4758-9703-25bbeae3f73c.jpg"
      ]
    },
    {
      id: 2,
      name: "ShopMaster Pro",
      category: "E-commerce",
      price: "$59",
      image: "/img/dab7d53e-cbaa-4bea-b980-4463793e6818.jpg",
      description: "Professional e-commerce template with modern design and powerful features. Perfect for online stores with advanced shopping cart and payment integration.",
      features: ["WooCommerce Ready", "Payment Gateway", "Product Reviews", "Mobile Responsive", "Inventory Management"],
      screenshots: [
        "/img/dab7d53e-cbaa-4bea-b980-4463793e6818.jpg",
        "/img/91db1bbe-435d-4dde-b739-1bda1bc50ece.jpg",
        "/img/0cf8b30e-a45f-4891-b5c9-579564708ba4.jpg",
        "/img/dab7d53e-cbaa-4bea-b980-4463793e6818.jpg"
      ]
    },
    {
      id: 3,
      name: "Corporate Elite",
      category: "Business",
      price: "$49",
      image: "/img/ba974608-bc58-41a3-b59d-2edfa3bca91d.jpg",
      description: "Premium business template designed for corporate websites. Clean professional layout with team showcase and service presentation capabilities.",
      features: ["Corporate Design", "Team Showcase", "Service Pages", "Contact Forms", "SEO Optimized"],
      screenshots: [
        "/img/ba974608-bc58-41a3-b59d-2edfa3bca91d.jpg",
        "/img/1393d4d3-6dba-49e9-91dc-bdfa2b83a265.jpg",
        "/img/ba974608-bc58-41a3-b59d-2edfa3bca91d.jpg",
        "/img/1393d4d3-6dba-49e9-91dc-bdfa2b83a265.jpg"
      ]
    },
    {
      id: 4,
      name: "Creative Portfolio",
      category: "Portfolio",
      price: "$35",
      image: "/img/c7605b4a-b46c-4cd0-958d-6b0b152e0f70.jpg",
      description: "Stunning portfolio template for creative professionals. Features elegant gallery layouts and minimal design to showcase your work beautifully.",
      features: ["Portfolio Gallery", "Lightbox Effect", "Minimal Design", "Artist Showcase", "Custom Layouts"],
      screenshots: [
        "/img/c7605b4a-b46c-4cd0-958d-6b0b152e0f70.jpg",
        "/img/4a7bf865-20a7-4e12-a4af-8213efc7be8f.jpg",
        "/img/c7605b4a-b46c-4cd0-958d-6b0b152e0f70.jpg",
        "/img/4a7bf865-20a7-4e12-a4af-8213efc7be8f.jpg"
      ]
    },
    {
      id: 5,
      name: "Gourmet Restaurant",
      category: "Restaurant",
      price: "$45",
      image: "/img/96e76196-d3b2-41a9-8c52-f602c8c7d08b.jpg",
      description: "Elegant restaurant template with sophisticated design. Perfect for fine dining establishments with menu display and reservation system.",
      features: ["Menu Display", "Reservation System", "Chef Showcase", "Food Gallery", "Event Booking"],
      screenshots: [
        "/img/96e76196-d3b2-41a9-8c52-f602c8c7d08b.jpg",
        "/img/73e450b3-1121-4ed0-a531-d7277f85e9fc.jpg",
        "/img/96e76196-d3b2-41a9-8c52-f602c8c7d08b.jpg",
        "/img/73e450b3-1121-4ed0-a531-d7277f85e9fc.jpg"
      ]
    },
    {
      id: 6,
      name: "TechStartup",
      category: "Technology",
      price: "$55",
      image: "/img/11ca45c0-5dd7-4ead-95f1-3f773cc4a0bf.jpg",
      description: "Modern tech startup template with innovative design. Features company showcase, product demonstration and startup-focused layout elements.",
      features: ["Startup Focus", "Product Showcase", "Team Pages", "Innovation Timeline", "Tech Integration"],
      screenshots: [
        "/img/11ca45c0-5dd7-4ead-95f1-3f773cc4a0bf.jpg",
        "/img/fbe4ccb8-0f29-4b3c-927e-d120180507c7.jpg",
        "/img/11ca45c0-5dd7-4ead-95f1-3f773cc4a0bf.jpg",
        "/img/fbe4ccb8-0f29-4b3c-927e-d120180507c7.jpg"
      ]
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Icon name="Layers" className="text-primary animate-pulse-slow" size={28} />
            <span className="text-xl font-bold">PanetsTemplates</span>
          </a>
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Templates</a>
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
          <div className="max-w-4xl mx-auto animate-fade-in-up">

            <h1 className="text-6xl font-bold mb-8 leading-tight animate-slide-in-left">
              Premium WordPress Templates<br />
              <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                for Your Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-in-right">
              Build professional websites with our carefully crafted templates. 
              Clean design, optimized code, and complete responsiveness guaranteed.
            </p>

          </div>
        </div>
      </section>

      {/* Template Catalog */}
      <section id="templates" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Template Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect template for your project from our curated collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <Card 
                  key={template.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-scale-in bg-card border-border shadow-lg cursor-pointer group"
                  onClick={() => setSelectedTemplate(template)}
                  style={{ animationDelay: `${0.1}s` }}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Why Choose PanetsTemplates?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the best value with our premium features and dedicated support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
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

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
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

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
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

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
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

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
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

            <Card className="text-center bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
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
      <footer className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Layers" size={28} className="text-yellow-400 animate-float" />
                <span className="text-xl font-bold">PanetsTemplates</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Premium WordPress templates for creating modern, professional websites. 
                Quality design meets powerful functionality.
              </p>
            </div>

            <div className="flex flex-col space-y-3 animate-slide-in-right">
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
                    {selectedTemplate.screenshots?.map((screenshot, index) => (
                      <img 
                        key={index}
                        src={screenshot} 
                        alt={`Template screenshot ${index + 1}`}
                        className="w-full h-24 object-cover rounded hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => setSelectedImage(screenshot)}
                      />
                    ))}
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
                    <Button className="w-full">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      Purchase
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Zoom Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage} 
                alt="Enlarged template screenshot"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Index;