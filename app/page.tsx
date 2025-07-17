import HeroSection from '@/Components/Main/HeroSection';
import StatsSection from '@/Components/Main/StatsSection';
import AboutPage from '@/Components/About/AboutSection';
import SimpleSteps from '@/Components/Main/SimpleSteps';
import MenuSection from '@/Components/Menu/MenuSection';
import CustomerReviewCard from '@/Components/Main/CustomerReviewCard';
import LocationSection from '@/Components/Main/LocationSection';
import Footer from '@/Components/Main/Footer';
export default function Page() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPage />
      <SimpleSteps />
      <MenuSection />
      <CustomerReviewCard />
      <LocationSection />
      <Footer />
    </>
  );
}
