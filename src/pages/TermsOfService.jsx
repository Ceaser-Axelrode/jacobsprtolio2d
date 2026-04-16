import { ArrowLeft, FileText, Scale, AlertTriangle, Copyright, Gavel, Mail } from "lucide-react";

export const TermsOfService = () => {
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
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
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
                Please read these Terms of Service ("Terms," "Terms of Service") carefully before 
                using the jacobtechlabs.xyz website (the "Site") operated by Jacob Tech Labs 
                ("us," "we," or "our").
              </p>
              <p className="text-muted-foreground mt-4">
                Your access to and use of the Site is conditioned on your acceptance of and 
                compliance with these Terms. These Terms apply to all visitors, users, and 
                others who access or use the Site.
              </p>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">By accessing or using the Site, you agree to be bound by these Terms.</strong> If you 
                disagree with any part of the terms, you may not access the Site.
              </p>
            </section>

            {/* Use of Site */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">1. Use of the Site</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-foreground font-medium">Eligibility</h3>
                <p>
                  By using this Site, you represent and warrant that you are at least 13 years 
                  of age and have the legal capacity to enter into these Terms. If you are 
                  using the Site on behalf of an organization, you represent and warrant that 
                  you have the authority to bind that organization to these Terms.
                </p>
                
                <h3 className="text-foreground font-medium mt-6">Permitted Use</h3>
                <p>
                  You may use the Site for lawful purposes only and in accordance with these 
                  Terms. You agree not to use the Site:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>In any way that violates any applicable national, federal, state, or local law or regulation</li>
                  <li>To transmit any material that is defamatory, obscene, offensive, or otherwise objectionable</li>
                  <li>To impersonate or attempt to impersonate Jacob Tech Labs, our employees, or any other person</li>
                  <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
                  <li>To attempt to gain unauthorized access to any portion of the Site</li>
                  <li>To use any robot, spider, or other automatic device to access the Site for any purpose</li>
                  <li>To introduce any viruses, trojan horses, worms, or other malicious code</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Copyright className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">2. Intellectual Property Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Site and its original content (excluding content provided by users), 
                  features, and functionality are and will remain the exclusive property of 
                  Jacob Tech Labs and its licensors. The Site is protected by copyright, 
                  trademark, and other laws of both Nigeria and foreign countries.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product 
                  or service without the prior written consent of Jacob Tech Labs.
                </p>
                <h3 className="text-foreground font-medium mt-6">Portfolio Content</h3>
                <p>
                  All project showcases, code examples, and technical content displayed on 
                  this Site are the property of Jacob Tech Labs unless otherwise noted. 
                  Unauthorized reproduction or distribution of any materials from this Site 
                  is strictly prohibited.
                </p>
              </div>
            </section>

            {/* User Content */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">3. User Content</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  When you submit information through our contact form or otherwise provide 
                  content to us ("User Content"), you grant Jacob Tech Labs a non-exclusive, 
                  worldwide, royalty-free, irrevocable, sub-licensable, perpetual license to 
                  use, reproduce, modify, adapt, publish, translate, create derivative works 
                  from, distribute, and display such User Content in any media.
                </p>
                <p>
                  You represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You own or control all rights to the User Content you provide</li>
                  <li>The User Content is accurate and not misleading</li>
                  <li>The User Content does not violate any third-party rights</li>
                  <li>The User Content complies with these Terms and all applicable laws</li>
                </ul>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">4. Disclaimer of Warranties</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Site is provided on an "AS IS" and "AS AVAILABLE" basis. Jacob Tech 
                  Labs makes no representations or warranties of any kind, express or implied, 
                  regarding the operation of the Site or the information, content, materials, 
                  or products included on the Site.
                </p>
                <p>
                  To the full extent permissible by applicable law, Jacob Tech Labs disclaims 
                  all warranties, express or implied, including but not limited to implied 
                  warranties of merchantability, fitness for a particular purpose, and 
                  non-infringement.
                </p>
                <p>
                  Jacob Tech Labs does not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The Site will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results from using the Site will be accurate or reliable</li>
                  <li>Any errors in the Site will be corrected</li>
                  <li>The Site is free of viruses or other harmful components</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In no event shall Jacob Tech Labs, nor its directors, employees, partners, 
                  agents, suppliers, or affiliates, be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting 
                  from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your access to or use of or inability to access or use the Site</li>
                  <li>Any conduct or content of any third party on the Site</li>
                  <li>Any content obtained from the Site</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>Any other matter relating to the Site</li>
                </ul>
                <p>
                  This limitation of liability applies whether the alleged liability is based 
                  on contract, tort, negligence, strict liability, or any other basis, even if 
                  Jacob Tech Labs has been advised of the possibility of such damage.
                </p>
              </div>
            </section>

            {/* Indemnification */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">6. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to defend, indemnify, and hold harmless Jacob Tech Labs and its 
                licensees and licensors, and their employees, contractors, agents, officers, 
                and directors, from and against any and all claims, damages, obligations, 
                losses, liabilities, costs or debt, and expenses (including but not limited 
                to attorney's fees), resulting from or arising out of:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground mt-4">
                <li>Your use and access of the Site</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your User Content caused damage to a third party</li>
              </ul>
            </section>

            {/* Termination */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your access to the Site immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation 
                if you breach the Terms. Upon termination, your right to use the Site will 
                immediately cease.
              </p>
              <p className="text-muted-foreground mt-4">
                All provisions of the Terms which by their nature should survive termination 
                shall survive termination, including, without limitation, ownership provisions, 
                warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            {/* Governing Law */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of 
                Nigeria, without regard to its conflict of law provisions. Any dispute arising 
                from these Terms shall be resolved in the courts of Nigeria.
              </p>
              <p className="text-muted-foreground mt-4">
                Our failure to enforce any right or provision of these Terms will not be 
                considered a waiver of those rights. If any provision of these Terms is held 
                to be invalid or unenforceable by a court, the remaining provisions of these 
                Terms will remain in effect.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace these 
                Terms at any time. If a revision is material, we will try to provide at least 
                30 days' notice prior to any new terms taking effect. What constitutes a 
                material change will be determined at our sole discretion.
              </p>
              <p className="text-muted-foreground mt-4">
                By continuing to access or use our Site after those revisions become 
                effective, you agree to be bound by the revised terms. If you do not agree 
                to the new terms, please stop using the Site.
              </p>
            </section>

            {/* Links to Other Sites */}
            <section className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold mb-4">10. Links to Other Websites</h2>
              <p className="text-muted-foreground">
                Our Site may contain links to third-party websites or services that are not 
                owned or controlled by Jacob Tech Labs. We have no control over, and assume 
                no responsibility for, the content, privacy policies, or practices of any 
                third-party websites or services.
              </p>
              <p className="text-muted-foreground mt-4">
                You further acknowledge and agree that Jacob Tech Labs shall not be 
                responsible or liable, directly or indirectly, for any damage or loss caused 
                or alleged to be caused by or in connection with the use of or reliance on 
                any such content, goods, or services available on or through any such 
                websites or services.
              </p>
            </section>

            {/* Contact Us */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">11. Contact Us</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us:
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
