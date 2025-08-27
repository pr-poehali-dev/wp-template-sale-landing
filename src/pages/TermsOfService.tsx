import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-6">
            <p className="text-sm text-muted-foreground"><strong>Effective Date:</strong> August 2025</p>
            
            <div className="bg-muted/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Store Information</h2>
              <div className="space-y-2">
                <p><strong>Store Name:</strong> PanetsTemplates</p>
                <p><strong>Owner / Individual:</strong> Myroslav Panets</p>
                <p><strong>Address:</strong> Via Nizza 77, 84124 Salerno, Italy</p>
                <p><strong>Email:</strong> <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+393716672643" className="text-primary hover:underline">+39 371 667 2643</a></p>
              </div>
            </div>

            <h2 className="text-xl font-semibold">1. General</h2>
            <p>By accessing and using PanetsTemplates ("we", "our", "us"), you agree to comply with these Terms of Service. These terms govern your use of our website and the purchase of WordPress templates.</p>

            <h2 className="text-xl font-semibold">2. Products</h2>
            <ul>
              <li>All products sold are digital WordPress templates.</li>
              <li>Products are delivered electronically after payment.</li>
              <li>We provide descriptions, screenshots, and specifications for each template to ensure clarity about the product.</li>
            </ul>

            <h2 className="text-xl font-semibold">3. License and Use</h2>
            <p>Upon purchase, you are granted a non-exclusive, non-transferable license to use the template for personal or client projects.</p>
            <p><strong>Prohibited actions:</strong></p>
            <ul>
              <li>Redistribution or resale of the original template files without modification.</li>
              <li>Use for illegal purposes.</li>
              <li>Claiming the templates as your own work.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Payments</h2>
            <ul>
              <li>All payments are processed securely via Paddle, which acts as the Merchant of Record.</li>
              <li>You agree that Paddle will handle VAT, applicable taxes, and payment processing.</li>
            </ul>

            <h2 className="text-xl font-semibold">5. Refunds</h2>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">30-Day Refund Policy</h3>
              <ul>
                <li>Buyers have 30 days from the date of purchase to request a refund for any reason.</li>
                <li>Refunds are processed via Paddle using the same payment method used for purchase.</li>
                <li>Products must not have been misused or redistributed.</li>
                <li>For full refund requests, contact us via <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a> or through our website.</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold">6. User Responsibilities</h2>
            <ul>
              <li>You must provide accurate information when purchasing.</li>
              <li>You are responsible for maintaining the confidentiality of your account information, if any.</li>
              <li>You are responsible for complying with all applicable laws regarding your use of the templates.</li>
            </ul>

            <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
            <ul>
              <li>All templates, images, logos, graphics, and text are owned by PanetsTemplates or its licensors.</li>
              <li>You may use the templates according to the license, but all intellectual property rights remain with PanetsTemplates.</li>
            </ul>

            <h2 className="text-xl font-semibold">8. Liability</h2>
            <ul>
              <li>PanetsTemplates is not liable for indirect or consequential damages arising from the use or inability to use our products.</li>
              <li>Templates are provided "as is". We make reasonable efforts to ensure quality, but we do not guarantee that the templates are error-free.</li>
            </ul>

            <h2 className="text-xl font-semibold">9. Governing Law</h2>
            <ul>
              <li>These Terms of Service are governed by Italian law.</li>
              <li>Any dispute arising from the website or purchase of products shall be resolved in the courts of Salerno, Italy.</li>
            </ul>

            <h2 className="text-xl font-semibold">10. Contact Information</h2>
            <p>For any questions or concerns regarding these Terms of Service, please contact:</p>
            <div className="bg-background border p-4 rounded-lg">
              <p><strong>Myroslav Panets (Individual)</strong><br/>
              Email: <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a><br/>
              Phone: <a href="tel:+393716672643" className="text-primary hover:underline">+39 371 667 2643</a><br/>
              Address: Via Nizza 77, 84124 Salerno, Italy</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;