import { Hero } from "@/components/Hero";
import { MaterialPreview } from "@/components/MaterialPreview";
import { MaterialBenefits } from "@/components/MaterialBenefits";
import { VerseExplanation } from "@/components/VerseExplanation";
import { IdealFor } from "@/components/IdealFor";
import { ProductDetails } from "@/components/ProductDetails";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-16 md:pt-24 pb-12">
        <Hero />
      </Section>

      {/* Material Preview */}
      <Section className="py-12">
        <MaterialPreview />
      </Section>

      {/* Material Benefits */}
      <Section className="py-12">
        <MaterialBenefits />
      </Section>

      {/* Verse Explanation Preview */}
      <Section className="py-12">
        <VerseExplanation />
      </Section>

      {/* Ideal For Section (with its own background) */}
      <IdealFor />

      {/* Product Details */}
      <div id="SALMOS">
        <ProductDetails />
      </div>

      {/* Bonus Section */}
      <BonusSection />

      {/* Pricing Section (with its own background) */}
      <PricingSection />

      {/* FAQ Section */}
      <Section className="py-16 bg-secondary">
        <FAQ />
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
