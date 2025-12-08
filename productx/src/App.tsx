import './App.css'
// import Navbar from './components/Global/Navbar/Navbar'
import './index.css'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import HighTech from './routes/industries/HighTech'
import BankingAndFinance from './routes/industries/BankingAndFinance'
import Blogs from './components/Banking&Finance/Blogs/Blogs'
import { ScrollProvider } from './context/ScrollContext'
import AML from './components/Banking&Finance/ProductAML/AML'
import ProductDetailthree from './components/Banking&Finance/ProductPago/ProductDetailthree'
import ProductDetails_4_page from './components/Banking&Finance/ProductSherlock/ProductDetails_4_Page'
import Cos_Page from './components/Banking&Finance/ProductDetails(COS)/Cos_Page'
import AboutUs from './components/Banking&Finance/AboutUs/AboutUsPage'
import Marketing from './components/Global/Marketing/MarketPage'
import Sams_Page from './components/Banking&Finance/ProductDetails(SAMS)/SAMS_Page'
import PDPage9 from './components/Banking&Finance/ProductIBS/PDPage9'
import ProductsPage7 from './components/Banking&Finance/ProductsLoanOS/ProductsPage7'
import Platform from './components/Global/Platform/Platform'
import Career from './components/Banking&Finance/Career/Career'
import About from './components/EHR&PMS/AboutUs/About'
import Clinic from './components/EHR&PMS/ClinicApp/Clinic'
import Connect from './components/Global/Contact/Connect'
import HeroSection from './components/HomePage/HeroSection'
import CareersPageHigh from './components/HighTech/Careers/CareersPage'
import ContactPage from './components/HighTech/ContactForm/ContactPage'
import JDPage from './components/HighTech/JobDescription/JDPage'
import PolicyPage from './components/HighTech/Policy/PolicyPage'
import PDPage from './components/HighTech/ProductDetails/PDPage'
import JobDescription from './components/Banking&Finance/JobDescription/JobDescription'
import Contact from './components/Banking&Finance/BNFContact/Contact'
import Applicationform from './components/Banking&Finance/ApplicationForm/Applicationform'
import CookiePolicyPage from './components/EHR&PMS/CookiePolicy/CookiePolicyPage'
import PrivacyPolicyPage from './components/EHR&PMS/PrivacyPolicy/PrivacyPolicyPage'
import TermsAndConditionsPage from './components/EHR&PMS/TermsAndConditions/TermsAndConditionsPage'
import CaseStudiesPage from './components/EHR&PMS/CaseStudies/CaseStudiesPage'
import BlogsPage from './components/EHR&PMS/Blogs/BlogsPage'
import JobDescriptionPage from './components/EHR&PMS/JobDescription/JobDescriptionPage'
import ApplicationFormPage from './components/EHR&PMS/ApplicationForm/ApplicationFormPage'
import ContactFormPage from './components/EHR&PMS/ContactForm/ContactFormPage'
import AboutHighTech from './components/HighTech/AboutHightTech/AboutUs'
import Resources from './components/HighTech/Resources/Resources'
import ResourcesDetail from './components/HighTech/ResourcesDetail/ResourcesDetail'
import GlossaryPage from './components/Banking&Finance/Glossary/GlossaryPage'
import EHRAndPMS from './routes/industries/EHRandPMS'
import CareersPage from './components/EHR&PMS/Careers/CareersPage'
import WhitePapersPAge from './components/Banking&Finance/WhitePapers/WhitePapersPage'
import NewsPage from './components/Banking&Finance/News/NewsPage'
import EventssPage from './components/Banking&Finance/Events/EventsPage'
import HeroSlider from './components/LandingPage/HeroSlider'
import ProductsPage1 from './components/Banking&Finance/ProductBankfair/ProductsPage1'
import ProductsPage2 from './components/Banking&Finance/ProductRemitree/ProductsPage2'
import { CareersPageAI } from './components/AI/Careers/CareersPage'
import JobDetails from './components/AI/JobDetails'

 
import AIOptimization from './routes/industries/AIOptimization'

const App = () => {
  // const location = useLocation();
  // const showNavbar = location.pathname === '/';
  const IndustryPage = () => {
    const { industry } = useParams();
    if (industry === "banking-and-finance") return <BankingAndFinance />;
    if (industry === "high-tech") return <HighTech />;
    if (industry === "ehr-and-pms") return <EHRAndPMS />;
    return <div className=' bg-blue-300 h-screen items-center justify-center pt-44 font-bold text-6xl text-blue-950'> UNDER CONSTRUCTION  <span className='text-red-400'>!!!!</span><br /> SOON AVAILABLE<br /> Till Then Check Other Industries
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
 
    return <div>About Us page not found for this industry</div>;
  };
 
  const IndustryResourcesPage = () => {
    const { industry } = useParams();
 
    if (industry === "banking-and-finance") return <div>Coming Soon</div>;
    if (industry === "high-tech") return <Resources />;
    if (industry === "ehr-and-pms") return <div>Coming Soon</div>;
 
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
          <Routes>
            <Route path="/landingpage" element={<HeroSlider />} />
            <Route path="/industries/:industry" element={<IndustryPage />} />
            {/* <Route path="/industries/:industry/products" element={<ProductsListPage />} /> */}
            <Route path="/industries/:industry/aboutus" element={<IndustryAboutUsPage />} />
            <Route path="/industries/:industry/resources" element={<IndustryResourcesPage />} />
            <Route path="/industries/:industry/careers" element={<IndustryCareersPage />} />
            {/* <Route path="/industries/:industry/contactform" element={<IndustryContactPage />}/> */}
            <Route path='/' element={<HeroSection />} />
            <Route path="/industries/:industry" element={<IndustryPage />} />
            <Route path="/industries/banking-and-finance/products/:productId" element={<ProductsPage />} />
            <Route path='/industries/banking-and-finance/policy' element={<PolicyPage />} />
            <Route path="/industries/ehr-and-pms/:page" element={<EhrPmsPageRouter />} />
            <Route path='/contact' element={<Connect />} />
            <Route path="/industries/banking-and-finance/blogs" element={<Blogs />} />
            <Route path='/industries/banking-and-finance/policy' element={<PolicyPage />} />
            {/* <Route path='/glossary' element={<GlossaryPage />} /> */}
            <Route path='/industries/banking-and-finance/about-us' element={<AboutUs />} />
            <Route path='/marketplace' element={<Marketing />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/career" element={<Career />} />
             <Route path="/industries/ehr-and-pms/contactform" element={<ContactFormPage/>}/>
            <Route path="/industries/ehr-and-pms/careers" element={<CareersPage />} />
            <Route path="/industries/ehr-and-pms/jobdescription" element={<JobDescriptionPage />} />
            <Route path="/industries/ehr-and-pms/contactus" element={<ContactFormPage />} />
            <Route path="/industries/ehr-and-pms/policy" element={<PolicyPage/>}/>

            <Route path='/industries/high-tech/careers' element={<CareersPageHigh />} />
            <Route path='/industries/high-tech/contactform' element={<ContactPage />} />
            <Route path='/industries/high-tech/jobdescription' element={<JDPage />} />
            <Route path='/industries/high-tech/policy' element={<PolicyPage />} />
            <Route path='/industries/high-tech/product-details' element={<PDPage />} />
  
            <Route path="/industries/high-tech/aboutus" element={<AboutHighTech />} />
            <Route path="/industries/high-tech/resources" element={<Resources />} />
            <Route path="/industries/high-tech/resources-detail" element={<ResourcesDetail />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/marketplace' element={<Marketing />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/career" element={<Career />} />
         
           <Route path="/industries/banking-and-finance/contactform" element={<Contact/>}/>
           <Route path="/industries/banking-and-finance/whitepapers" element={<WhitePapersPAge/>}/>
           <Route path="/industries/banking-and-finance/news" element={<NewsPage/>}/>
           <Route path="/industries/banking-and-finance/events" element={<EventssPage/>}/>
           <Route path="/industries/banking-and-finance/jobapplication" element={<Applicationform />}/>
            <Route path="/industries/banking-and-finance/jobdescription" element={<JobDescription />} />
             <Route path="/industries/banking-and-finance/contactform" element={<Contact />} />
 
          

           <Route path="/industries/banking-and-finance/glossary" element={<GlossaryPage industry="finance" />} />


  <Route path="/industries/ehr-and-pms/glossary" element={<GlossaryPage industry="ehrpms" />} />
  <Route path="/industries/high-tech/glossary" element={<GlossaryPage industry="hightech" />} />
            
            <Route path="/industries/ai-automation" element={<AIOptimization />} />
            <Route path="/industries/ai-optimization/careers" element={<CareersPageAI />} />
            <Route path="/industries/ai-optimization/jobs" element={<JobDetails />} />


          </Routes>
        </div>
      </ScrollProvider>

    </>
  )
}
 
export default App
 