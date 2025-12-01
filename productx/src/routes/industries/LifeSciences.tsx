import CareersPage from "../../components/EHR&PMS/Careers/CareersPage"
import BlogsPage from "../../components/EHR&PMS/Blogs/BlogsPage"
import JobDescriptionPage from "../../components/EHR&PMS/JobDescription/JobDescriptionPage"
import CaseStudiesPage from "../../components/EHR&PMS/CaseStudies/CaseStudiesPage"
import ApplicationFormPage from "../../components/EHR&PMS/ApplicationForm/ApplicationFormPage"
import ContactFormPage from "../../components/EHR&PMS/ContactForm/ContactFormPage"

import CookiePolicyPage from "../../components/EHR&PMS/CookiePolicy/CookiePolicyPage"
import TermsAndConditionsPage from "../../components/EHR&PMS/TermsAndConditions/TermsAndConditionsPage"

import PrivacyPolicyPage from "../../components/EHR&PMS/PrivacyPolicy/PrivacyPolicyPage"
import HeroSectionEHR from "../../components/HomePage/EHR&PMS/HeroSectionEHR"


const LifeSciences = () => (
  <div>
    <HeroSectionEHR/>
    <CareersPage/>
    
    <BlogsPage/>
    <JobDescriptionPage/>
    <PrivacyPolicyPage/>
    <CaseStudiesPage/>
    <ApplicationFormPage/> 
    <ContactFormPage/>
    
    <CookiePolicyPage/>
    <TermsAndConditionsPage/>
  </div>
)
export default LifeSciences