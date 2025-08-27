import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Legal Notice</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-6">
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

            <h2 className="text-xl font-semibold">1. Purpose of the Website</h2>
            <p>PanetsTemplates provides digital products (WordPress templates) for download. This website is intended for purchasing and accessing these templates. By using this website, you agree to comply with these terms.</p>

            <h2 className="text-xl font-semibold">2. Owner Information</h2>
            <div className="bg-background border p-4 rounded-lg">
              <p><strong>Owner:</strong> Myroslav Panets (Individual)</p>
              <p><strong>Address:</strong> Via Nizza 77, 84124 Salerno, Italy</p>
              <p><strong>Email:</strong> <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+393716672643" className="text-primary hover:underline">+39 371 667 2643</a></p>
            </div>

            <h2 className="text-xl font-semibold">3. Product Information</h2>
            <ul>
              <li>All products are digital WordPress templates.</li>
              <li>Products are delivered electronically after payment.</li>
              <li>Product descriptions, images, and specifications are provided accurately to the best of our knowledge.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
            <ul>
              <li>All templates, images, logos, graphics, and content are the property of PanetsTemplates or its licensors.</li>
              <li>You may use templates for personal or client projects. Redistribution or resale of original files without modification is prohibited.</li>
            </ul>

            <h2 className="text-xl font-semibold">5. Payments and Refunds</h2>
            <ul>
              <li>All payments are processed securely via Paddle, which acts as the Merchant of Record.</li>
              <li>Refunds are handled according to our Refund Policy.</li>
              <li>By purchasing, you agree that Paddle will process your payment and manage VAT and applicable taxes.</li>
            </ul>

            <h2 className="text-xl font-semibold">6. Liability</h2>
            <ul>
              <li>PanetsTemplates is not liable for indirect damages or losses resulting from the use of our products.</li>
              <li>Templates are provided "as is" with no explicit warranty beyond what is required by law.</li>
            </ul>

            <h2 className="text-xl font-semibold">7. Applicable Law</h2>
            <ul>
              <li>This Legal Notice and all transactions are governed by Italian law.</li>
              <li>Any disputes will be resolved under the jurisdiction of the courts of Salerno, Italy.</li>
            </ul>

            <h2 className="text-xl font-semibold">8. Contact Information</h2>
            <p>For any legal or product inquiries, you can contact:</p>
            <div className="bg-primary/5 p-4 rounded-lg">
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

export default LegalNotice;