import { useState, useRef } from "react";
import { H1, H4, P } from "../../../styles/Typography";

type SectionKey = "terms" | "privacy" | "cookies";

const EFFECTIVE_DATES: Record<SectionKey, string> = {
  terms: "Effective date 29/10/2025",
  privacy: "Effective date 12/09/2025",
  cookies: "Effective date 01/08/2025",
};

const TERMS_TEXT = `
This Privacy Policy explains how QNEST, and its subsidiaries (“QNEST,” “we,” “our,” and “us”) may collect, use, secure and disclose information that personally identifies you (“Personal Information”). It also describes your choices regarding use, access and correction of your Personal Information. Such Personal Information may include, but is not limited to, your name, phone number, street address, and email address.


Kanerika Software is committed to respecting your privacy rights when you provide such information or visit any of the Kanerika Software web sites (collectively, the “Site”), such as this one. To protect your Personal Information, Kanerika Software has created the guidelines outlined below. Understanding that Internet technologies are rapidly evolving, any changes to this policy will be promptly posted on this page, with an updated “effective date” posted at the end of this policy. By accessing our Site or otherwise providing your Personal Information to us, you agree to and consent to be bound by the terms and conditions of this Privacy Policy.
Information Collected


We collect the following categories of Personal Information from you in connection with our products/ solutions and services. Personal Information in certain categories may overlap with other categories:
Identifiers, such as your real name, account name, Internet Protocol address, email address, and other similar identifiers
Personal information categories listed in the California Customer Records statute, including physical address, telephone number, and financial information used to process payment
Characteristics of protected classifications under California or federal law, such as your gender and age, but only for Kanerika Software employees or applicants for employment
Commercial information, such as the records of products/ solutions and services purchased, obtained, and considered from Kanerika Software
Internet or other electronic network activity information, such as information concerning your interaction with our Site
Geolocation data, such as address information you provide to us
Sensory data, such as audio information for recorded technical support interactions
Professional or employment-related information, such as your current or past job history
Inferences drawn from other Personal Information, such as your work in a particular industry
 
You may provide Personal Information to Kanerika Software in a variety of ways. While visiting the Site, we may ask you to register and/or provide Personal Information for purposes of interacting with the Site. As other examples, Kanerika Software may receive Personal Information when you:
Provide or update licensing or account information
Register for or attend Kanerika Software-hosted or sponsored promotions and events (such as conferences, tradeshows or webinars)
Order or use Kanerika Software products/ solutions, services or other offerings
Communicate with Kanerika Software for service or maintenance of Kanerika Software products/ solutions or services
Submit an application for employment with Kanerika Software
 
When collecting Personal Information, we will specifically describe what information is required in order to provide you with the products / solutions or service, enter you in the promotion you have requested, respond to your inquiry or comment, or otherwise communicate with you. In order to access certain Kanerika Software services, you may be required to sign in with Kanerika Software Single Sign-On (SSO) credentials or another authentication mechanism. By signing into one Kanerika Software service, you may be automatically signed into other Kanerika Software services that use these credentials.


We may also receive information about you from other sources, including publicly available databases or third parties from whom we have purchased data, and combine this data with information we already have about you. This helps us to update, expand and analyze our records, identify new customers, and provide products/ solutions and services that may be of interest to you. If you provide us Personal Information about others, or if others give us your information, we will only use that information for the specific reason for which it was provided to us. Examples of the types of information that may be obtained from public sources or purchased from third parties may include company name or industry.


This Privacy Policy only addresses the use and dissemination of information that we collect from you through processes like web forms, registrations, orders, sources described in the above paragraph, and technologies like cookies, as described below. To the extent that you disclose any information to other parties, whether through, for example, blogs, bulletin boards, and the like, through third party services or promotions offered on or through the Site or through other web sites throughout the Internet, different policies may apply and Kanerika Software shall not be responsible for the use or dissemination of such information.
Telemarketing and Automated Communications Consent
We will only send you promotional calls or texts using automated technology, artificial intelligence, or prerecorded voices if you have provided us with prior express written consent. Consent is obtained through a clear, standalone checkbox that is NOT bundled with other policy agreements. At the start of each call, we will disclose the use of such technologies as required by law. You may revoke your consent at any time via the methods outlined in our Opt-Out section. All requests to be added to our Do Not Call list will be honored promptly in line with federal and state regulations.
Cookies and Tracking Technologies


Kanerika Software and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, gather demographic information about our user base as a whole, and to personalize your experience when you are visiting the Site. By tracking usage, we can best determine what features of the Site best serve the users.
When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. We (or service providers on our behalf) may then send communications and marketing to these email. You may opt out of receiving this advertising by visiting https://app.retention.com/optout.


What are cookies? 
A cookie is a small data text file that a web site sends to your browser, which is then stored on your computer. The cookie is unique to the computer you are using and can only be read by the web site that placed the cookie on your computer. We cannot access cookies sent by other web sites or the information contained therein. Additionally, we cannot learn your email address or any other information about you using a cookie. The only way we would learn such information is if you specifically and voluntarily submit that information to us, for example, through a registration system, or by entering a sweepstakes or promotion.
We could use an advertising server developed by a third party to display ads on the Site. Some of these ads may contain cookies that are sent by third parties (e.g., advertising agencies or advertising clients). We do not have access to these cookies or any information that they contain. We encourage you to contact the advertiser or its privacy policy for more information on these cookies. Links from other web sites that appear on the Site may also send cookies; but we do not control such activities. If you wish to opt out of interest-based advertising, you can use opt-out tools such as those provided by the Digital Advertising Alliance (DAA) or National Advertising Initiative (NAI). Please note you will continue to receive generic ads.
What benefits do I receive from cookies? Overall, the use of cookies helps to give you a more personalized experience at the Site. The information is used to keep our Site fresh and relevant to you, the user. Cookies can also identify you to our server, allowing you to avoid retyping your email address and password each time you access the Site.


May I decline to accept a cookie? You may decline to accept persistent cookies sent by the Site by selecting an option on your browser to reject cookies. You may wish to visit www.aboutcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers. You should always allow session cookies. If you do not allow session cookies, many areas of the Site will not be accessible to you. Session cookies enable us to send your request to the appropriate server, and allow that server to present your personalized content.
What analytics information do we collect? As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) 



May I decline to accept a cookie? You may decline to accept persistent cookies sent by the Site by selecting an option on your browser to reject cookies. You may wish to visit www.aboutcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers. You should always allow session cookies. If you do not allow session cookies, many areas of the Site will not be accessible to you. Session cookies enable us to send your request to the appropriate server, and allow that server to present your personalized content.
What analytics information do we collect? As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) `; // (your long Terms text)
const PRIVACY_TEXT = `
This Privacy Policy explains how QNEST, and its subsidiaries (“QNEST,” “we,” “our,” and “us”) may collect, use, secure and disclose information that personally identifies you (“Personal Information”). It also describes your choices regarding use, access and correction of your Personal Information. Such Personal Information may include, but is not limited to, your name, phone number, street address, and email address.


Kanerika Software is committed to respecting your privacy rights when you provide such information or visit any of the Kanerika Software web sites (collectively, the “Site”), such as this one. To protect your Personal Information, Kanerika Software has created the guidelines outlined below. Understanding that Internet technologies are rapidly evolving, any changes to this policy will be promptly posted on this page, with an updated “effective date” posted at the end of this policy. By accessing our Site or otherwise providing your Personal Information to us, you agree to and consent to be bound by the terms and conditions of this Privacy Policy.
Information Collected


We collect the following categories of Personal Information from you in connection with our products/ solutions and services. Personal Information in certain categories may overlap with other categories:
Identifiers, such as your real name, account name, Internet Protocol address, email address, and other similar identifiers
Personal information categories listed in the California Customer Records statute, including physical address, telephone number, and financial information used to process payment
Characteristics of protected classifications under California or federal law, such as your gender and age, but only for Kanerika Software employees or applicants for employment
Commercial information, such as the records of products/ solutions and services purchased, obtained, and considered from Kanerika Software
Internet or other electronic network activity information, such as information concerning your interaction with our Site
Geolocation data, such as address information you provide to us
Sensory data, such as audio information for recorded technical support interactions
Professional or employment-related information, such as your current or past job history
Inferences drawn from other Personal Information, such as your work in a particular industry
 
You may provide Personal Information to Kanerika Software in a variety of ways. While visiting the Site, we may ask you to register and/or provide Personal Information for purposes of interacting with the Site. As other examples, Kanerika Software may receive Personal Information when you:
Provide or update licensing or account information
Register for or attend Kanerika Software-hosted or sponsored promotions and events (such as conferences, tradeshows or webinars)
Order or use Kanerika Software products/ solutions, services or other offerings
Communicate with Kanerika Software for service or maintenance of Kanerika Software products/ solutions or services
Submit an application for employment with Kanerika Software
 
When collecting Personal Information, we will specifically describe what information is required in order to provide you with the products / solutions or service, enter you in the promotion you have requested, respond to your inquiry or comment, or otherwise communicate with you. In order to access certain Kanerika Software services, you may be required to sign in with Kanerika Software Single Sign-On (SSO) credentials or another authentication mechanism. By signing into one Kanerika Software service, you may be automatically signed into other Kanerika Software services that use these credentials.


We may also receive information about you from other sources, including publicly available databases or third parties from whom we have purchased data, and combine this data with information we already have about you. This helps us to update, expand and analyze our records, identify new customers, and provide products/ solutions and services that may be of interest to you. If you provide us Personal Information about others, or if others give us your information, we will only use that information for the specific reason for which it was provided to us. Examples of the types of information that may be obtained from public sources or purchased from third parties may include company name or industry.


This Privacy Policy only addresses the use and dissemination of information that we collect from you through processes like web forms, registrations, orders, sources described in the above paragraph, and technologies like cookies, as described below. To the extent that you disclose any information to other parties, whether through, for example, blogs, bulletin boards, and the like, through third party services or promotions offered on or through the Site or through other web sites throughout the Internet, different policies may apply and Kanerika Software shall not be responsible for the use or dissemination of such information.
Telemarketing and Automated Communications Consent
We will only send you promotional calls or texts using automated technology, artificial intelligence, or prerecorded voices if you have provided us with prior express written consent. Consent is obtained through a clear, standalone checkbox that is NOT bundled with other policy agreements. At the start of each call, we will disclose the use of such technologies as required by law. You may revoke your consent at any time via the methods outlined in our Opt-Out section. All requests to be added to our Do Not Call list will be honored promptly in line with federal and state regulations.
Cookies and Tracking Technologies


Kanerika Software and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, gather demographic information about our user base as a whole, and to personalize your experience when you are visiting the Site. By tracking usage, we can best determine what features of the Site best serve the users.
When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. We (or service providers on our behalf) may then send communications and marketing to these email. You may opt out of receiving this advertising by visiting https://app.retention.com/optout.


What are cookies? 
A cookie is a small data text file that a web site sends to your browser, which is then stored on your computer. The cookie is unique to the computer you are using and can only be read by the web site that placed the cookie on your computer. We cannot access cookies sent by other web sites or the information contained therein. Additionally, we cannot learn your email address or any other information about you using a cookie. The only way we would learn such information is if you specifically and voluntarily submit that information to us, for example, through a registration system, or by entering a sweepstakes or promotion.
We could use an advertising server developed by a third party to display ads on the Site. Some of these ads may contain cookies that are sent by third parties (e.g., advertising agencies or advertising clients). We do not have access to these cookies or any information that they contain. We encourage you to contact the advertiser or its privacy policy for more information on these cookies. Links from other web sites that appear on the Site may also send cookies; but we do not control such activities. If you wish to opt out of interest-based advertising, you can use opt-out tools such as those provided by the Digital Advertising Alliance (DAA) or National Advertising Initiative (NAI). Please note you will continue to receive generic ads.
What benefits do I receive from cookies? Overall, the use of cookies helps to give you a more personalized experience at the Site. The information is used to keep our Site fresh and relevant to you, the user. Cookies can also identify you to our server, allowing you to avoid retyping your email address and password each time you access the Site.


May I decline to accept a cookie? You may decline to accept persistent cookies sent by the Site by selecting an option on your browser to reject cookies. You may wish to visit www.aboutcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers. You should always allow session cookies. If you do not allow session cookies, many areas of the Site will not be accessible to you. Session cookies enable us to send your request to the appropriate server, and allow that server to present your personalized content.
What analytics information do we collect? As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) 



May I decline to accept a cookie? You may decline to accept persistent cookies sent by the Site by selecting an option on your browser to reject cookies. You may wish to visit www.aboutcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers. You should always allow session cookies. If you do not allow session cookies, many areas of the Site will not be accessible to you. Session cookies enable us to send your request to the appropriate server, and allow that server to present your personalized content.
What analytics information do we collect? As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) `; // (your long Privacy text)
const COOKIES_TEXT = `
This Privacy Policy explains how QNEST, and its subsidiaries (“QNEST,” “we,” “our,” and “us”) may collect, use, secure and disclose information that personally identifies you (“Personal Information”). It also describes your choices regarding use, access and correction of your Personal Information. Such Personal Information may include, but is not limited to, your name, phone number, street address, and email address.


Kanerika Software is committed to respecting your privacy rights when you provide such information or visit any of the Kanerika Software web sites (collectively, the “Site”), such as this one. To protect your Personal Information, Kanerika Software has created the guidelines outlined below. Understanding that Internet technologies are rapidly evolving, any changes to this policy will be promptly posted on this page, with an updated “effective date” posted at the end of this policy. By accessing our Site or otherwise providing your Personal Information to us, you agree to and consent to be bound by the terms and conditions of this Privacy Policy.
Information Collected


We collect the following categories of Personal Information from you in connection with our products/ solutions and services. Personal Information in certain categories may overlap with other categories:
Identifiers, such as your real name, account name, Internet Protocol address, email address, and other similar identifiers
Personal information categories listed in the California Customer Records statute, including physical address, telephone number, and financial information used to process payment
Characteristics of protected classifications under California or federal law, such as your gender and age, but only for Kanerika Software employees or applicants for employment
Commercial information, such as the records of products/ solutions and services purchased, obtained, and considered from Kanerika Software
Internet or other electronic network activity information, such as information concerning your interaction with our Site
Geolocation data, such as address information you provide to us
Sensory data, such as audio information for recorded technical support interactions
Professional or employment-related information, such as your current or past job history
Inferences drawn from other Personal Information, such as your work in a particular industry
 
You may provide Personal Information to Kanerika Software in a variety of ways. While visiting the Site, we may ask you to register and/or provide Personal Information for purposes of interacting with the Site. As other examples, Kanerika Software may receive Personal Information when you:
Provide or update licensing or account information
Register for or attend Kanerika Software-hosted or sponsored promotions and events (such as conferences, tradeshows or webinars)
Order or use Kanerika Software products/ solutions, services or other offerings
Communicate with Kanerika Software for service or maintenance of Kanerika Software products/ solutions or services
Submit an application for employment with Kanerika Software
 
When collecting Personal Information, we will specifically describe what information is required in order to provide you with the products / solutions or service, enter you in the promotion you have requested, respond to your inquiry or comment, or otherwise communicate with you. In order to access certain Kanerika Software services, you may be required to sign in with Kanerika Software Single Sign-On (SSO) credentials or another authentication mechanism. By signing into one Kanerika Software service, you may be automatically signed into other Kanerika Software services that use these credentials.


We may also receive information about you from other sources, including publicly available databases or third parties from whom we have purchased data, and combine this data with information we already have about you. This helps us to update, expand and analyze our records, identify new customers, and provide products/ solutions and services that may be of interest to you. If you provide us Personal Information about others, or if others give us your information, we will only use that information for the specific reason for which it was provided to us. Examples of the types of information that may be obtained from public sources or purchased from third parties may include company name or industry.


This Privacy Policy only addresses the use and dissemination of information that we collect from you through processes like web forms, registrations, orders, sources described in the above paragraph, and technologies like cookies, as described below. To the extent that you disclose any information to other parties, whether through, for example, blogs, bulletin boards, and the like, through third party services or promotions offered on or through the Site or through other web sites throughout the Internet, different policies may apply and Kanerika Software shall not be responsible for the use or dissemination of such information.
Telemarketing and Automated Communications Consent
We will only send you promotional calls or texts using automated technology, artificial intelligence, or prerecorded voices if you have provided us with prior express written consent. Consent is obtained through a clear, standalone checkbox that is NOT bundled with other policy agreements. At the start of each call, we will disclose the use of such technologies as required by law. You may revoke your consent at any time via the methods outlined in our Opt-Out section. All requests to be added to our Do Not Call list will be honored promptly in line with federal and state regulations.
Cookies and Tracking Technologies


Kanerika Software and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, gather demographic information about our user base as a whole, and to personalize your experience when you are visiting the Site. By tracking usage, we can best determine what features of the Site best serve the users.
When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. We (or service providers on our behalf) may then send communications and marketing to these email. You may opt out of receiving this advertising by visiting https://app.retention.com/optout.


What are cookies? 
A cookie is a small data text file that a web site sends to your browser, which is then stored on your computer. The cookie is unique to the computer you are using and can only be read by the web site that placed the cookie on your computer. We cannot access cookies sent by other web sites or the information contained therein. Additionally, we cannot learn your email address or any other information about you using a cookie. The only way we would learn such information is if you specifically and voluntarily submit that information to us, for example, through a registration system, or by entering a sweepstakes or promotion.
We could use an advertising server developed by a third party to display ads on the Site. Some of these ads may contain cookies that are sent by third parties (e.g., advertising agencies or advertising clients). We do not have access to these cookies or any information that they contain. We encourage you to contact the advertiser or its privacy policy for more information on these cookies. Links from other web sites that appear on the Site may also send cookies; but we do not control such activities. If you wish to opt out of interest-based advertising, you can use opt-out tools such as those provided by the Digital Advertising Alliance (DAA) or National Advertising Initiative (NAI). Please note you will continue to receive generic ads.
What benefits do I receive from cookies? Overall, the use of cookies helps to give you a more personalized experience at the Site. The information is used to keep our Site fresh and relevant to you, the user. Cookies can also identify you to our server, allowing you to avoid retyping your email address and password each time you access the Site.


May I decline to accept a cookie? You may decline to accept persistent cookies sent by the Site by selecting an option on your browser to reject cookies. You may wish to visit www.aboutcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers. You should always allow session cookies. If you do not allow session cookies, many areas of the Site will not be accessible to you. Session cookies enable us to send your request to the appropriate server, and allow that server to present your personalized content.
What analytics information do we collect? As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) 



May I decline to accept a cookie? You may decline to accept persistent cookies sent by the Site by selecting an option on your browser to reject cookies. You may wish to visit www.aboutcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers. You should always allow session cookies. If you do not allow session cookies, many areas of the Site will not be accessible to you. Session cookies enable us to send your request to the appropriate server, and allow that server to present your personalized content.
What analytics information do we collect? As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) `; // (your long Cookies text)

export default function PolicySec() {
  const [active, setActive] = useState<SectionKey>("terms");
  const [fade, setFade] = useState(true);

  // ✅ Reference to scroll to top of this section
  const sectionRef = useRef<HTMLDivElement>(null);

  const getText = (key: SectionKey) => {
    switch (key) {
      case "terms":
        return TERMS_TEXT;
      case "privacy":
        return PRIVACY_TEXT;
      case "cookies":
        return COOKIES_TEXT;
    }
  };

  const switchSection = (key: SectionKey) => {
    if (key === active) return;

    // ✅ Scroll to top of THIS section only
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    setFade(false);
    setTimeout(() => {
      setActive(key);
      setFade(true);
    }, 150);
  };

  const otherButtons = [
    { key: "terms" as SectionKey, label: "Terms & Conditions" },
    { key: "privacy" as SectionKey, label: "Privacy Policy" },
    { key: "cookies" as SectionKey, label: "Cookie Policy" },
  ].filter((b) => b.key !== active);

  return (
    <section className="w-full bg-black text-[#CCCCCC] py-12 px-4 ">
      {/* ✅ This wrapper is used for scrollIntoView */}
      <div ref={sectionRef} className="max-w-8xl mx-10 flex flex-col lg:flex-row justify-between gap-12 pt-22">

        {/* Left Section */}
        <div className="w-full lg:w-[78%]">
          <div className="flex items-center justify-between pb-6">
            <H1 className="text-orange-400">
              {active === "terms"
                ? "Terms and Conditions"
                : active === "privacy"
                ? "Privacy Policy"
                : "Cookie Policy"}
            </H1>
          </div>

          <div
            className={`mt-6 transition-opacity duration-300 ease-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {getText(active)
              .split("\n\n")
              .map((p, i) => (
                <P key={i} className="text-sm md:text-base leading-relaxed mb-4">
                  {p}
                </P>
              ))}
          </div>
        </div>

        {/* Right Section (Sticky) */}
        <div className="relative w-full lg:w-[22%] flex-shrink-0 ">
          <div className="lg:sticky lg:top-24">

            {/* Effective Date */}
            <div className="text-left mb-16 mt-10 font-extrabold text-[#CCCCCC]">
              <H4>{EFFECTIVE_DATES[active]}</H4>
            </div>

            {/* ✅ FIXED blur — reduced left offset to prevent horizontal overflow */}
            <div
              className="
                absolute
                top-[-200px] sm:top-[-250px] lg:top-[-80px]
                left-[0px] sm:left-[10px] lg:left-[50px]
                w-[250px] sm:w-[300px] md:w-[330px] lg:w-[300px]
                h-[250px] sm:h-[300px] md:h-[330px] lg:h-[300px]
                bg-[#F99526]
                opacity-40
                blur-[100px]
                rounded-full
                z-0
                pointer-events-none
              "
            ></div>

            <div className="flex relative z-10">
              <div className="bg-orange-400 w-[5px]" />

              <div className="flex flex-col w-full">
                {otherButtons.map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => switchSection(btn.key)}
                    className="text-left bg-[#D9D9D92B] text-gray-100 font-medium px-4 py-4 hover:bg-zinc-500 transition-colors duration-150"
                  >
                    {btn.label}
                  </button>

                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}