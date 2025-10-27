import CareersPage from "../../components/EHR&PMS/Careers/CareersPage"
import BlogsPage from "../../components/EHR&PMS/Blogs/BlogsPage"
import JobDescriptionPage from "../../components/EHR&PMS/JobDescription/JobDescriptionPage"
import CaseStudiesPage from "../../components/EHR&PMS/CaseStudies/CaseStudiesPage"
import ApplicationFormPage from "../../components/EHR&PMS/ApplicationForm/ApplicationFormPage"
import ContactFormPage from "../../components/EHR&PMS/ContactForm.tsx/ContactFormPage"

import CookiePolicyPage from "../../components/EHR&PMS/CookiePolicy/CookiePolicyPage"
import TermsAndConditionsPage from "../../components/EHR&PMS/TermsAndConditions/TermsAndConditionsPage"

import PrivacyPolicyPage from "../../components/EHR&PMS/PrivacyPolicy/PrivacyPolicyPage"


const LifeSciences = () => (
  <div>
    <CareersPage/>
    <BlogsPage/>
    <JobDescriptionPage/>
    <CaseStudiesPage/>
    <ApplicationFormPage/> 
    <ContactFormPage/>
    <PrivacyPolicyPage/>
    <CookiePolicyPage/>
    <TermsAndConditionsPage/>
  </div>
)
export default LifeSciences