import { ArrowLeft, Shield, Mail, Database, Cookie, UserCheck, Lock } from "lucide-react";

export const PrivacyPolicy = () => {
  const lastUpdated = "April 16, 2026";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-32">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </a>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-muted-foreground leading-relaxed">
                Jacob Tech Labs ("we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website jacobtechlabs.xyz (the "Site").
              </p>
            </section>

            {/* Information We Collect */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-foreground font-medium">Personal Information</h3>
                <p>
                  We may collect personal information that you voluntarily provide when using our 
                  contact form, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Message content</li>
                </ul>
                
                <h3 className="text-foreground font-medium mt-6">Automatically Collected Information</h3>
                <p>
                  When you visit our Site, we may automatically collect certain information 
                  about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Respond to your inquiries and messages</li>
                <li>Provide and maintain our services</li>
                <li>Improve our website and user experience</li>
                <li>Send technical notices and updates</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">3. Cookies and Tracking Technologies</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to track activity on our Site 
                and hold certain information. Cookies are files with a small amount of data 
                that may include an anonymous unique identifier.
              </p>
              <p className="text-muted-foreground mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie 
                is being sent. However, if you do not accept cookies, you may not be able to 
                use some portions of our Site.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Types of cookies we use:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground mt-2">
                <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">4. Data Security</h2>
              </div>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect 
                your personal information. However, please note that no method of transmission over 
                the Internet or electronic storage is 100% secure. While we strive to use 
                commercially acceptable means to protect your personal information, we cannot 
                guarantee its absolute security.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party service providers to facilitate our services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>
                  <strong>EmailJS:</strong> Used to process and send contact form messages. 
                  Information sent through the contact form is processed by EmailJS. 
                  Please review <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EmailJS Privacy Policy</a>.
                </li>
                <li>
                  <strong>Hosting Provider:</strong> Our website is hosted on secure servers. 
                  Server logs may collect IP addresses and access times.
                </li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">6. Your Data Protection Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restrict processing:</strong> Request limitation of data processing</li>
                <li><strong>Data portability:</strong> Request transfer of your data</li>
                <li><strong>Object:</strong> Object to processing of your personal data</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            {/* Data Retention */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We will retain your personal information only for as long as is necessary for the 
                purposes set out in this Privacy Policy. We will retain and use your information 
                to the extent necessary to comply with our legal obligations, resolve disputes, 
                and enforce our policies.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our Site does not address anyone under the age of 13. We do not knowingly collect 
                personally identifiable information from children under 13. If you are a parent 
                or guardian and you are aware that your child has provided us with personal 
                information, please contact us.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last 
                updated" date. You are advised to review this Privacy Policy periodically for 
                any changes.
              </p>
            </section>

            {/* Contact Us */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">10. Contact Us</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="glass p-6 rounded-xl">
                <p className="text-foreground font-medium">Jacob Tech Labs</p>
                <p className="text-muted-foreground">Email: support@jacobtechlabs.xyz</p>
                <p className="text-muted-foreground">Location: Rivers State, Nigeria</p>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Jacob Tech Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
