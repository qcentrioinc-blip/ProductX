
import './App.css'
import './index.css'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollProvider } from './context/ScrollContext'
import { lazy, Suspense } from 'react';
import FontLoader from './components/Global/FontLoader';
import DeferredLoader from './components/Global/DeferredLoader';
import Physician from './components/EHR&PMS/Physician/Physician';
import HeroSection from './components/HomePage/HeroSection';

const HighTech = lazy(() => import('./routes/industries/HighTech'));
const BankingAndFinance = lazy(() => import('./routes/industries/BankingAndFinance'));
const Blogs = lazy(() => import('./components/Banking&Finance/Blogs/Blogs'));
const AML = lazy(() => import('./components/Banking&Finance/ProductAML/AML'));
const ProductDetailthree = lazy(() => import('./components/Banking&Finance/ProductPago/ProductDetailthree'));
const ProductDetails_4_page = lazy(() => import('./components/Banking&Finance/ProductSherlock/ProductDetails_4_Page'));
const Cos_Page = lazy(() => import('./components/Banking&Finance/ProductDetails(COS)/Cos_Page'));
const AboutUs = lazy(() => import('./components/Banking&Finance/AboutUs/AboutUsPage'));
const Marketing = lazy(() => import('./components/Global/Marketing/MarketPage'));
const Sams_Page = lazy(() => import('./components/Banking&Finance/ProductDetails(SAMS)/SAMS_Page'));
const PDPage9 = lazy(() => import('./components/Banking&Finance/ProductIBS/PDPage9'));
const ProductsPage7 = lazy(() => import('./components/Banking&Finance/ProductsLoanOS/ProductsPage7'));
const Platform = lazy(() => import('./components/Global/Platform/Platform'));
const Career = lazy(() => import('./components/Banking&Finance/Career/Career'));
const About = lazy(() => import('./components/EHR&PMS/AboutUs/About'));
const Clinic = lazy(() => import('./components/EHR&PMS/ClinicApp/Clinic'));
const Connect = lazy(() => import('./components/Global/Contact/Connect'));
const CareersPageHigh = lazy(() => import('./components/HighTech/Careers/CareersPage'));
const ContactPage = lazy(() => import('./components/HighTech/ContactForm/ContactPage'));
const JDPage = lazy(() => import('./components/HighTech/JobDescription/JDPage'));
const PolicyPage = lazy(() => import('./components/HighTech/Policy/PolicyPage'));
const PDPage = lazy(() => import('./components/HighTech/ProductDetails/PDPage'));
const JobDescription = lazy(() => import('./components/Banking&Finance/JobDescription/JobDescription'));
const Contact = lazy(() => import('./components/Banking&Finance/BNFContact/Contact'));
const Applicationform = lazy(() => import('./components/Banking&Finance/ApplicationForm/Applicationform'));
const CookiePolicyPage = lazy(() => import('./components/EHR&PMS/CookiePolicy/CookiePolicyPage'));
const PrivacyPolicyPage = lazy(() => import('./components/EHR&PMS/PrivacyPolicy/PrivacyPolicyPage'));
const TermsAndConditionsPage = lazy(() => import('./components/EHR&PMS/TermsAndConditions/TermsAndConditionsPage'));
const CaseStudiesPage = lazy(() => import('./components/EHR&PMS/CaseStudies/CaseStudiesPage'));
const BlogsPage = lazy(() => import('./components/EHR&PMS/Blogs/BlogsPage'));
const JobDescriptionPage = lazy(() => import('./components/EHR&PMS/JobDescription/JobDescriptionPage'));
const ApplicationFormPage = lazy(() => import('./components/EHR&PMS/ApplicationForm/ApplicationFormPage'));
const ContactFormPage = lazy(() => import('./components/EHR&PMS/ContactForm/ContactFormPage'));
const AboutHighTech = lazy(() => import('./components/HighTech/AboutHightTech/AboutUs'));
const Resources = lazy(() => import('./components/HighTech/Resources/Resources'));
const ResourcesDetail = lazy(() => import('./components/HighTech/ResourcesDetail/ResourcesDetail'));
const GlossaryPage = lazy(() => import('./components/Banking&Finance/Glossary/GlossaryPage'));
const EHRAndPMS = lazy(() => import('./routes/industries/EHRandPMS'));
const CareersPage = lazy(() => import('./components/EHR&PMS/Careers/CareersPage'));
const WhitePapersPAge = lazy(() => import('./components/Banking&Finance/WhitePapers/WhitePapersPage'));
const NewsPage = lazy(() => import('./components/Banking&Finance/News/NewsPage'));
const EventssPage = lazy(() => import('./components/Banking&Finance/Events/EventsPage'));
const HeroSlider = lazy(() => import('./components/LandingPage/HeroSlider'));
const ProductsPage1 = lazy(() => import('./components/Banking&Finance/ProductBankfair/ProductsPage1'));
const ProductsPage2 = lazy(() => import('./components/Banking&Finance/ProductRemitree/ProductsPage2'));
const JobDetails = lazy(() => import('./components/AIOptimization/Careers/JobDetails'));
import AIOptimization from './routes/industries/AIOptimization';
import Resource from './components/AIOptimization/Resources/Resource';
const ResourceDetailAI = lazy(() => import('./components/AIOptimization/ResourceDetail/ResourceDetailAI'));
const AboutAI = lazy(() => import('./components/AIOptimization/AboutUs/AboutAI'));
const AINewsLetter = lazy(() => import('./components/AIOptimization/NewsLetter/AINewsLetter'));
const AIWhitePapers = lazy(() => import('./components/AIOptimization/WhitePapers/AIWhitePapers'));
const AIGlossary = lazy(() => import('./components/AIOptimization/Glossary/AIGlossary'));
import HeroAIOptimization from './components/HomePage/AIOptimization/HeroAIOptimization';
import ResourceDoc from './components/AIOptimization/ResourceDoc/ResourceDoc';
import Pricing from './components/AIOptimization/Pricing/Pricing';
const ComingSoon = lazy(() => import('./components/Global/NewFooter/ComingSoon'));
const PrivacyPolicyAI = lazy(() => import('./components/AIOptimization/AIPrivacy'));
const CareersPageAI = lazy(() => import('./components/AIOptimization/Careers/CareersPage').then(module => ({ default: module.CareersPageAI })));
import { BuiltFor } from './components/Global/BuiltFor/BuiltFor';


const App = () => {
  // const location = useLocation();
  // const showNavbar = location.pathname === '/';
  const IndustryPage = () => {
    const { industry } = useParams();
    if (industry === "banking-and-finance") return <BankingAndFinance />;
    if (industry === "high-tech") return <HighTech />;
    if (industry === "ehr-and-pms") return <EHRAndPMS />;
    if (industry === "cloud-finops-ai") return <AIOptimization />;
    return <div className=' bg-blue-300 h-screen items-center justify-center pt-44 font-bold text-6xl text-blue-950'> Working on  <span className='text-red-400'>!!!!</span><br /> to provide you <br /> better results....!
      <Link to="/"> <button className='w-[250px]'> CLICK ME</button></Link></div>;
  }

  const ProductsPage = () => {
    const { productId } = useParams();
    if (productId === "bankfair") return <ProductsPage1 />;
    if (productId === "remitree") return <ProductsPage2 />;
    if (productId === "almanac") return <AML />;
    if (productId === "pago") return <ProductDetailthree />
    if (productId === "sherlock") return <ProductDetails_4_page />
    if (productId === "customer-onboarding-solutions") return <Cos_Page />
    if (productId === "sams") return <Sams_Page />
    if (productId === "internet-banking-system") return <PDPage9 />
    if (productId === "loan-origination-system") return <ProductsPage7 />
    return <div className='font-bricolage text-5xl bg-blue-300 h-screen text-black'>Product not found<br /> <span className='text-blue-600'><a href="/industries/banking-and-finance">CLICK Me</a> </span> for Products </div>;
  }

  const EhrPmsPageRouter = () => {
    const { page } = useParams();
    if (page === "blogs") return <BlogsPage />;
    if (page === "career") return <CareersPage />;
    if (page === "job-description") return <JobDescriptionPage />;
    if (page === "application-form") return <ApplicationFormPage />;
    if (page === "privacy-policy") return <PrivacyPolicyPage />;
    if (page === "cookie-policy") return <CookiePolicyPage />;
    if (page === "terms-and-conditions") return <TermsAndConditionsPage />;
    if (page === "case-studies") return <CaseStudiesPage />;
    if (page === "contact-us") return <ContactFormPage />;
    if (page === "about-us") return <About />;
    if (page === "clinic-app") return <Clinic />;
    return <div>Page not found</div>;
  };


  const IndustryAboutUsPage = () => {
    const { industry } = useParams();

    if (industry === "banking-and-finance") return <AboutUs />;
    if (industry === "high-tech") return <AboutHighTech />;
    if (industry === "ehr-and-pms") return <About />;
    if (industry === "cloud-finops-ai") return <AboutAI />;

    return <div>About Us page not found for this industry</div>;
  };

  const IndustryResourcesPage = () => {
    const { industry } = useParams();

    if (industry === "banking-and-finance") return <div>Coming Soon</div>;
    if (industry === "high-tech") return <Resources />;
    if (industry === "ehr-and-pms") return <div>Coming Soon</div>;
    // if (industry === "cloud-finops-ai") return <div><ResourceDetailAI /></div>
    return <div>Resources page not found for this industry</div>;
  };

  const IndustryCareersPage = () => {
    const { industry } = useParams();

    if (industry === "banking-and-finance") return <Career />;
    if (industry === "high-tech") return <div>Careers Coming Soon</div>;
    if (industry === "ehr-and-pms") return <div>Careers Coming Soon</div>;

    return <div>Careers page not found for this industry</div>;
  };
  return (
    <>


      <ScrollProvider>
        <div data-scroll-container>

          {/* {showNavbar && <Navbar />} */}
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">...Loading</div>}>
            <Routes>
              <Route path="/industries/cloud-finops-ai" element={<AIOptimization />} />
              <Route path="/industries/cloud-finops-ai/about-us" element={<AboutAI />} />
              <Route path="/industries/cloud-finops-ai/resources" element={<Resource />} />
              <Route path="/industries/cloud-finops-ai/resource-detail" element={<ResourceDetailAI />} />
              <Route path="/industries/cloud-finops-ai/careers" element={<CareersPageAI />} />
              <Route path="/industries/cloud-finops-ai/jobs" element={<JobDetails />} />
              <Route path="/industries/cloud-finops-ai/built-for" element={<BuiltFor />} />
              <Route path="/industries/cloud-finops-ai/features" element={<HeroAIOptimization />} />
              <Route path="/industries/cloud-finops-ai/newsletter" element={<AINewsLetter />} />
              <Route path="/industries/cloud-finops-ai/whitepaper" element={<AIWhitePapers />} />
              <Route path="/industries/cloud-finops-ai/glossary" element={<AIGlossary />} />
              <Route path="/industries/cloud-finops-ai/pricing" element={<Pricing />} />

              <Route path="/landingpage" element={<HeroSlider />} />
              <Route path="/industries/:industry" element={<IndustryPage />} />
              <Route path="/industries/:industry/aboutus" element={<IndustryAboutUsPage />} />
              <Route path="/industries/:industry/resources" element={<IndustryResourcesPage />} />
              <Route path="/industries/:industry/careers" element={<IndustryCareersPage />} />
              <Route path='/' element={<HeroSection />} />
              <Route path="/industries/banking-and-finance/products/:productId" element={<ProductsPage />} />
              <Route path='/industries/banking-and-finance/policy' element={<PolicyPage />} />
              <Route path="/industries/ehr-and-pms/:page" element={<EhrPmsPageRouter />} />
              <Route path='/contact' element={<Connect />} />
              <Route path="/industries/banking-and-finance/blogs" element={<Blogs />} />
              <Route path='/industries/banking-and-finance/about-us' element={<AboutUs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/industries/ehr-and-pms/contactform" element={<ContactFormPage />} />
              <Route path="/industries/ehr-and-pms/careers" element={<CareersPage />} />
              <Route path="/industries/ehr-and-pms/jobdescription" element={<JobDescriptionPage />} />
              <Route path="/industries/ehr-and-pms/contactus" element={<ContactFormPage />} />
              <Route path="/industries/ehr-and-pms/policy" element={<PolicyPage />} />
              <Route path="/industries/ehr-and-pms/built-for" element={<BuiltFor />} />

              <Route path="/industries/ehr-and-pms/physician" element={<Physician />} />

              <Route path='/industries/high-tech/careers' element={<CareersPageHigh />} />
              <Route path='/industries/high-tech/contactform' element={<ContactPage />} />
              <Route path='/industries/high-tech/jobdescription' element={<JDPage />} />
              <Route path='/industries/high-tech/policy' element={<PolicyPage />} />
              <Route path='/industries/high-tech/product-details' element={<PDPage />} />
              <Route path="/industries/high-tech/aboutus" element={<AboutHighTech />} />
              <Route path="/industries/high-tech/resources" element={<Resources />} />
              <Route path="/industries/high-tech/resources-detail" element={<ResourcesDetail />} />
              <Route path="/industries/high-tech/built-for" element={<BuiltFor />} />
              <Route path='/aboutus' element={<AboutUs />} />

              <Route path="/industries/banking-and-finance/contactform" element={<Contact />} />
              <Route path="/industries/banking-and-finance/whitepapers" element={<WhitePapersPAge />} />
              <Route path="/industries/banking-and-finance/news" element={<NewsPage />} />
              <Route path="/industries/banking-and-finance/events" element={<EventssPage />} />
              <Route path="/industries/banking-and-finance/jobapplication" element={<Applicationform />} />
              <Route path="/industries/banking-and-finance/jobdescription" element={<JobDescription />} />
              <Route path="/industries/banking-and-finance/built-for" element={<BuiltFor />} />
              <Route path="/industries/banking-and-finance/glossary" element={<GlossaryPage industry="finance" />} />

              <Route path="/industries/ehr-and-pms/glossary" element={<GlossaryPage industry="ehrpms" />} />
              <Route path="/industries/high-tech/glossary" element={<GlossaryPage industry="hightech" />} />


              {/* Built for globally */}

              <Route
                path="/industries/:industry/built-for/:builtForType"
                element={<BuiltFor />}
              />
              {/* Marketplace Routes */}
              <Route path='/marketplace' element={<Marketing />} />
              <Route path='/industries/cloud-finops-ai/marketplace' element={<Marketing />} />
              <Route path='/industries/high-tech/marketplace' element={<Marketing />} />
              <Route path='/industries/ehr-and-pms/marketplace' element={<Marketing />} />
              <Route path='/industries/banking-and-finance/marketplace' element={<Marketing />} />

              {/* Platform Routes */}
              <Route path="/platform" element={<Platform />} />
              <Route path='/industries/cloud-finops-ai/platform' element={<Platform />} />
              <Route path='/industries/high-tech/platform' element={<Platform />} />
              <Route path='/industries/ehr-and-pms/platform' element={<Platform />} />
              <Route path='/industries/banking-and-finance/platform' element={<Platform />} />
              <Route path="/industries/cloud-finops-ai/privacy-policy" element={<PrivacyPolicyAI />} />
              {/* FOR RESOURCES ai */}
              <Route
                path="/industries/:industry/resources/:category/:slug"
                element={<ResourceDoc />}
              />
              <Route
                path="/comingsoon"
                element={<ComingSoon />}
              />

            </Routes>
          </Suspense>
        </div>
      </ScrollProvider>
      <ToastContainer
        position="bottom-right"
        style={{ marginBottom: '45px' }}
      />

      <DeferredLoader
        loader={() => import('./components/Global/Chatbot/ChatbotButton')}
        delay={2000}
      />
      <FontLoader />

    </>
  )
}

export default App