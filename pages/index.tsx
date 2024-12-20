import Head from "next/head";

import Header from "@/components/Header/Header";
import HeroSection from '../sections/HeroSection/HeroSection';
import AdvantagesSection from '@/sections/AdvantagesSection/AdvantagesSection';
import ProblemSection from '@/sections/InfoSection/ProblemSection';
import AboutSection from '@/sections/InfoSection/AboutSection';
import ReviewsSection from '@/sections/ReviewsSection/ReviewsSection';
import StepsSection from '@/sections/StepsSection/StepsSection';
import ProofsSection from '@/sections/ProofsSection/ProofsSection';
import {Form} from "@/sections/FormSection/form";
import FAQSection from '@/sections/FAQSection/FAQSection';
import Footer from '@/components/Footer/Footer';


export default function Home() {
  return (
    <>
    
      <Head>
        <title>OnlyDiamant</title>
        <meta name="description" content="Приєднуйся до нашого агентства і отримуй стабільний прибуток від твоєї творчості. Ми забезпечимо твою популярність" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
     </Head>

      <div>
        <Header />
        <main>
          <HeroSection />
          <AdvantagesSection />
          <ProblemSection />
          <AboutSection/>
          <ReviewsSection/>
          <StepsSection />
          <ProofsSection/>
          <Form/>
          <FAQSection />
        </main>
        <Footer />


      </div>
    </>
  );
}
