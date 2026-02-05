import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { H3, H4, P } from '../../../styles/Typography';

const HeroSec = () => {
  const [activeTab, setActiveTab] = useState('Plan A');
  const plans = ['Plan A', 'Plan B', 'Plan C', 'Plan D', 'Plan E'];

  // --- Type-Safe Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3 } 
    }
  };

  // Icon Component
  const RightChevron = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );



  const plansData = [
  {
    name: "Plan A",
    free: {
      title: "Starter Care",
      subtitle: "Foundational Home Care Platform",
      buttonText: "Start Free",
      sections: [
        {
          head: "Patient Intake",
          sub: "Initial patient onboarding workflows",
          items: [
            "Lead Capture",
            "Eligibility Verification",
            "Care Type Selection",
            "Initial Documentation"
          ]
        },
        {
          head: "Scheduling",
          items: [
            "Visit Assignment",
            "Staff Availability",
            "Calendar Sync",
            "Shift Alerts"
          ]
        }
      ]
    },
    clinical: {
      title: "Essential Clinical Records",
      buttonText: "GET CLINICAL",
      sections: [
        {
          head: "Nursing Tools",
          items: [
            "Daily Notes",
            "Vitals Tracking",
            "Pain Scale",
            "Care Checklists"
          ]
        },
        {
          head: "Patient Monitoring",
          items: [
            "Progress Logs",
            "Compliance Flags",
            "Risk Indicators"
          ]
        }
      ]
    },
    billing: {
      title: "Basic Billing Suite",
      buttonText: "START BILLING",
      secondaryButton: "TALK TO SALES",
      sections: [
        {
          head: "Payments",
          items: [
            "Invoice Creation",
            "Cash Collection",
            "Payment Status"
          ]
        },
        {
          head: "Reports",
          items: [
            "Revenue Summary",
            "Outstanding Balances"
          ]
        }
      ]
    }
  },

  {
    name: "Plan B",
    free: {
      title: "Growth Pack",
      subtitle: "Operational Tools for Expanding Agencies",
      buttonText: "TRY GROWTH",
      sections: [
        {
          head: "Operations",
          sub: "Manage multi-location care teams",
          items: [
            "Branch Management",
            "Staff Roles",
            "Geo Assignment"
          ]
        }
      ]
    },
    clinical: {
      title: "Advanced Clinical Suite",
      buttonText: "UPGRADE CLINICAL",
      sections: [
        {
          head: "Assessments",
          items: [
            "Initial Evaluations",
            "Outcome Scores",
            "Reassessment Tools"
          ]
        }
      ]
    },
    billing: {
      title: "Revenue Automation",
      buttonText: "ENABLE BILLING",
      secondaryButton: "CONTACT TEAM",
      sections: [
        {
          head: "Insurance Claims",
          items: [
            "Claim Creation",
            "Submission Tracking",
            "Reconciliation"
          ]
        }
      ]
    }
  },

  {
    name: "Plan C",
    free: {
      title: "Professional Suite",
      subtitle: "Designed for Mid-Size Care Providers",
      buttonText: "START PROFESSIONAL",
      sections: [
        {
          head: "Client Records",
          sub: "Centralized patient data",
          items: [
            "Profile Management",
            "Medical History",
            "Document Vault"
          ]
        }
      ]
    },
    clinical: {
      title: "Therapy & Rehab Tools",
      buttonText: "ACTIVATE THERAPY",
      sections: [
        {
          head: "Therapist Workspace",
          items: [
            "Treatment Plans",
            "Session Tracking",
            "Goal Monitoring"
          ]
        }
      ]
    },
    billing: {
      title: "Compliance Billing",
      buttonText: "RUN BILLING",
      secondaryButton: "REQUEST DEMO",
      sections: [
        {
          head: "Compliance",
          items: [
            "Code Validation",
            "Audit Reports",
            "Submission Logs"
          ]
        }
      ]
    }
  },

  {
    name: "Plan D",
    free: {
      title: "Enterprise Core",
      subtitle: "Scalable Infrastructure for Large Agencies",
      buttonText: "ENTERPRISE ACCESS",
      sections: [
        {
          head: "Admin Controls",
          sub: "Central governance tools",
          items: [
            "Role Permissions",
            "Audit Trails",
            "Data Governance"
          ]
        }
      ]
    },
    clinical: {
      title: "Physician Collaboration",
      buttonText: "ENABLE PHYSICIAN",
      sections: [
        {
          head: "Doctor Portal",
          items: [
            "Order Management",
            "Progress Reviews",
            "e-Signatures"
          ]
        }
      ]
    },
    billing: {
      title: "Enterprise Finance",
      buttonText: "ACTIVATE FINANCE",
      secondaryButton: "SPEAK TO SALES",
      sections: [
        {
          head: "Financial Oversight",
          items: [
            "Cost Centers",
            "Profit Analysis",
            "Forecasting"
          ]
        }
      ]
    }
  },

  {
    name: "Plan E",
    free: {
      title: "Custom Care",
      subtitle: "Tailored Platform for Specialized Providers",
      buttonText: "BUILD YOUR PLAN",
      sections: [
        {
          head: "Customization",
          sub: "Adapt workflows to your needs",
          items: [
            "Custom Forms",
            "Workflow Designer",
            "API Access"
          ]
        }
      ]
    },
    clinical: {
      title: "Specialty Modules",
      buttonText: "ADD MODULES",
      sections: [
        {
          head: "Special Care",
          items: [
            "Chronic Care",
            "Pediatric Tools",
            "Post-Acute Tracking"
          ]
        }
      ]
    },
    billing: {
      title: "Flexible Billing Engine",
      buttonText: "CONFIGURE BILLING",
      secondaryButton: "CONTACT CONSULTANT",
      sections: [
        {
          head: "Flexible Payments",
          items: [
            "Custom Pricing",
            "Multi-Payer Setup",
            "Contract Billing"
          ]
        }
      ]
    }
  }
];


  const activeData = plansData.find(p => p.name === activeTab) || plansData[0];

  return (
    <div className="relative min-h-screen bg-white pt-20 lg:pt-40 pb-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-5 border border-blue-100 rounded-full bg-[#f0f4ff] p-1 shadow-sm relative">
          {plans.map((plan) => (
            <button
              key={plan}
              onClick={() => setActiveTab(plan)}
              className={`relative py-3 px-2 text-xs md:text-xl font-bold rounded-full transition-colors z-10 font-bricolage duration-300 ${
                activeTab === plan ? 'text-[#1e8d8d]' : 'text-[#1e8d8d]/60'
              }`}
            >
              {activeTab === plan && (
                <motion.div 
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full shadow-sm border border-blue-50 z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {plan.split(' ')[0]} <span className="text-base md:text-3xl">{plan.split(' ')[1]}</span>
            </button>
          ))}
        </div>
      </div>

      <H3 className="text-center text-[#1e8d8d] mb-16">Unified End to End Home Care Software</H3>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start relative z-10"
        >
          <AnimatePresence mode="wait">
            {/* Card 1: Free */}
            <motion.div 
              key={`${activeTab}-free`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-lg border border-teal-500/30 flex flex-col h-full overflow-hidden min-h-[600px]"
            >
              <div className="p-8 text-center border-b border-gray-50">
                <H3 className="text-gray-800 font-bold mb-4">{activeData.free.title}</H3>
                <P className="text-2xl font-bold text-[#008280] leading-tight">{activeData.free.subtitle}</P>
                <button className="mt-8 w-full py-2 px-4 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50 transition">{activeData.free.buttonText}</button>
              </div>
              <div className="p-6 text-[13px] text-gray-600 space-y-6">
                {activeData.free.sections.map((sec, i) => (
                  <div key={i}>
                    <H4 className="font-bold text-gray-900 mb-1 flex items-center"><RightChevron className="mr-2 text-[#008280]" /> {sec.head}</H4>
                    {sec.sub && <p className="text-[11px] text-gray-500 mb-2 ml-5">{sec.sub}</p>}
                    <ul className="ml-5 space-y-1">
                      {sec.items.map(item => <li key={item} className="before:content-['•'] before:mr-2 before:text-gray-400">{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Clinical */}
            <motion.div 
              key={`${activeTab}-clinical`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-2xl border-[8px] border-[#008280] flex flex-col h-full relative transform md:-translate-y-4 min-h-[620px]"
            >
              <div className="bg-[#008280] text-white text-[14px] font-bold uppercase tracking-widest py-1.5 text-center font-bricolage">Most Popular</div>
              <div className="p-8 text-center border-b border-gray-50">
                <H3 className="text-2xl font-bold text-[#008280] mt-4 leading-tight">{activeData.clinical.title}</H3>
                <button className="mt-12 w-full py-3 px-4 bg-[#2d3339] text-white rounded text-xs font-bold hover:bg-black transition tracking-wider">{activeData.clinical.buttonText}</button>
              </div>
              <div className="p-6 text-[13px] text-gray-600 space-y-6">
                {activeData.clinical.sections.map((sec, i) => (
                  <div key={i}>
                    <H4 className="font-bold text-gray-900 mb-1 flex items-center"><RightChevron className="mr-2 text-[#008280]" /> {sec.head}</H4>
                    <ul className="ml-5 space-y-1">
                      {sec.items.map(item => <li key={item} className="before:content-['•'] before:mr-2 before:text-gray-400">{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Billing */}
            <motion.div 
              key={`${activeTab}-billing`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-lg border border-teal-500/30 flex flex-col h-full overflow-hidden min-h-[600px]"
            >
              <div className="p-8 text-center border-b border-gray-50">
                <H3 className="text-2xl font-bold text-[#008280] mt-10 leading-tight">{activeData.billing.title}</H3>
                <div className="mt-12 flex gap-2">
                  <button className="flex-1 py-3 px-1 bg-[#2d3339] text-white rounded text-[10px] font-bold uppercase">{activeData.billing.buttonText}</button>
                  <button className="flex-1 py-3 px-1 border border-gray-300 text-gray-700 rounded text-[10px] font-bold uppercase">{activeData.billing.secondaryButton}</button>
                </div>
              </div>
              <div className="p-6 text-[13px] text-gray-600 space-y-6">
                {activeData.billing.sections.map((sec, i) => (
                  <div key={i}>
                    <H4 className="font-bold text-gray-900 mb-1 flex items-center"><RightChevron className="mr-2 text-[#008280]" /> {sec.head}</H4>
                    <ul className="ml-5 space-y-1">
                      {sec.items.map(item => <li key={item} className="before:content-['•'] before:mr-2 before:text-gray-400">{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img src="/EHR-PMS/Pricing/Vector.webp" alt="decoration" className="w-full h-auto object-cover opacity-80" />
      </div>
    </div>
  );
};

export default HeroSec;