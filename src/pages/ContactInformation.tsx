import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInformation = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none space-y-6">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Store Information</h2>
              <div className="space-y-3">
                <p><strong>Store Name:</strong> PanetsTemplates</p>
                <p><strong>Owner:</strong> Myroslav Panets (Individual)</p>
                <p><strong>Email:</strong> <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+393716672643" className="text-primary hover:underline">+39 371 667 2643</a></p>
                <p><strong>Address:</strong> Via Nizza 77, 84124 Salerno, Italy</p>
                <p><strong>Working Hours:</strong> 24/7</p>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Description / Note</h2>
              <p>If you have any questions, concerns, or need support regarding your WordPress template purchases, please feel free to contact us at any time. Our team is available 24/7 to assist you. You can reach us via email or phone, and we will respond as quickly as possible.</p>
            </div>

            <div className="bg-background border p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-2">For technical support, billing questions, or general inquiries</p>
                  <a href="mailto:clevelandmarcy@mail.com" className="text-primary hover:underline">clevelandmarcy@mail.com</a>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Phone Support</h3>
                  <p className="text-muted-foreground mb-2">Direct line for urgent matters or quick assistance</p>
                  <a href="tel:+393716672643" className="text-primary hover:underline">+39 371 667 2643</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInformation;