import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-6">
            <p className="text-sm text-muted-foreground"><strong>Effective Date:</strong> August 2025</p>
            
            <p>PanetsTemplates ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you purchase or interact with our WordPress templates.</p>

            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p>We collect the following information from our customers:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, billing information necessary for purchase and delivery.</li>
              <li><strong>Payment Information:</strong> Processed securely through Paddle, including PayPal or credit/debit card details. We do not store your card details on our servers.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, and device information for analytics and security purposes.</li>
              <li><strong>Cookies and Tracking:</strong> We may use cookies, Google Analytics, or similar tools to improve our website and user experience.</li>
            </ul>

            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <p>We use your data for the following purposes:</p>
            <ul>
              <li>To process payments and deliver purchased WordPress templates.</li>
              <li>To communicate with you regarding purchases, updates, and support inquiries.</li>
              <li>To send promotional emails (only if you opted in). You can unsubscribe at any time.</li>
              <li>To analyze website usage and improve our products and services.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
            <p>We may share your personal information with trusted third parties for operational purposes:</p>
            <ul>
              <li><strong>Paddle:</strong> Merchant of Record for payment processing and refunds.</li>
              <li><strong>Payment Gateways:</strong> PayPal, Stripe, or other processors.</li>
              <li><strong>Website Hosting Providers:</strong> For security, maintenance, and analytics.</li>
              <li><strong>Legal Requirements:</strong> If required by law or to prevent fraud.</li>
            </ul>
            <p>We do not sell your personal information to any third parties.</p>

            <h2 className="text-xl font-semibold">4. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements. Typically, financial data may be retained up to 5 years for accounting and legal purposes.</p>

            <h2 className="text-xl font-semibold">5. Your Rights</h2>
            <p>Depending on your location (including EU residents under GDPR), you have the following rights:</p>
            <ul>
              <li>Access your personal data.</li>
              <li>Correct inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to the processing of your data for marketing purposes.</li>
              <li>Withdraw consent at any time (for marketing emails).</li>
            </ul>
            <p>To exercise your rights, contact us at: <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a></p>

            <h2 className="text-xl font-semibold">6. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your data. All payments are securely processed through Paddle using SSL encryption. We recommend that you use strong passwords and, where possible, enable two-factor authentication on your accounts.</p>

            <h2 className="text-xl font-semibold">7. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your experience. You may adjust your browser settings to refuse cookies, though this may limit functionality on the site.</p>

            <h2 className="text-xl font-semibold">8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>PanetsTemplates</strong><br/>
              Email: <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a><br/>
              Address: Via Nizza 77, 84124 Salerno, Italy</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;