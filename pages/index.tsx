import Head from "next/head";

// import { Montserrat  } from "next/font/google";


import Header from "@/components/Header/Header";
import HeroSection from '../sections/HeroSection/HeroSection';
import AdvantagesSection from '@/sections/AdvantagesSection/AdvantagesSection';
import ProblemSection from '@/sections/InfoSection/ProblemSection';
import AboutSection from '@/sections/InfoSection/AboutSection';
import ReviewsSection from '@/sections/ReviewsSection/ReviewsSection';
import StepsSection from '@/sections/StepsSection/StepsSection';
import ProofsSection from '@/sections/ProofsSection/ProofsSection';
import FormSection from '@/sections/FormSection/FormSection';
import FAQSection from '@/sections/FAQSection/FAQSection';
import Footer from '@/components/Footer/Footer';
import {Form} from "@/sections/form/form";

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["cyrillic"],
//   weight: ["400", "700"],
// });

export default function Home() {
  return (
    <>
    
      <Head>
        <title>Ofagencys</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        
      >
        <Header />
        <main>
          <HeroSection />
          <AdvantagesSection />
          <ProblemSection />
          <AboutSection/>
          <ReviewsSection/>
          <StepsSection />
          <ProofsSection/>
          <FormSection/>
          <FAQSection />
          <Form/>
        </main>
        <Footer />


      </div>
    </>
  );
}
