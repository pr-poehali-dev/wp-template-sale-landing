import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInformation = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>Contact information content will be added here...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInformation;