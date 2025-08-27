import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Refund Policy</CardTitle>
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

            <div className="bg-primary/5 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">1. 30-Day Refund Policy</h2>
              <ul>
                <li>Buyers have 30 days from the date of purchase to request a full refund for any reason, no questions asked.</li>
                <li>Refund requests can be submitted via email: <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a> or through our website contact form.</li>
                <li>Refunds will be processed via Paddle, using the same payment method that was used for the original purchase.</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold">2. Conditions</h2>
            <ul>
              <li>Products must not have been misused, redistributed, or illegally shared.</li>
              <li>Digital products are considered "used" only if downloaded and redistributed. Downloading alone does not prevent eligibility for a refund.</li>
            </ul>

            <h2 className="text-xl font-semibold">3. Processing Time</h2>
            <ul>
              <li>Refund requests are generally reviewed and processed within 3–7 business days.</li>
              <li>You will receive a confirmation email from PanetsTemplates and Paddle once the refund is issued.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Contact for Refunds</h2>
            <p>For any questions or to request a refund, contact:</p>
            <div className="bg-background border p-4 rounded-lg">
              <p><strong>Myroslav Panets (Individual)</strong><br/>
              Email: <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a><br/>
              Phone: <a href="tel:+393716672643" className="text-primary hover:underline">+39 371 667 2643</a><br/>
              Address: Via Nizza 77, 84124 Salerno, Italy</p>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Need Help?</h3>
              <p className="text-green-700">Our support team is available 24/7 to assist with refund requests and any questions you may have about our products.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RefundPolicy;