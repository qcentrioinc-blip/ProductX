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
      heroTitle: "Unified End to End Home Care Software",
      heroSubTitle: "Patient Management + Clinical Documentation + Automated Billing + BI + General Reports",
      Essentials: {
        title: "Patient Management",
        subtitle: "From referral to end of care or patient discharge",
        buttonText: "Book now",
        sections: [
          {
            head: " ",
            sub: "",
            items: [
              "Referral Management",
              "Admission",
              "Documents Upload",
              "Type Of Care ",
              "DME Management ",
              "Transfers ",
              "Discharge ",
              "Scheduling ",
              "Shift Management"
            ]
          },
          {
            head: "Other ",
            items: [
              "Transportation Management ",
              "Pharma integration ",
              "Drug dispatch/receiving ",
              "Electronic visit verification ",
              "Instant Messaging, SMS, E-Mail"
            ]
          }
        ]
      },
      Professional: {
        title: "Clinical Documentation",
        subtitle: "Complete integrated forms",
        buttonText: "Book now",
        sections: [
          {
            head: "Nursing",
            items: [
              "Notes ",
              "Care Plans ",
              "Vitals ",
              "Growth Charts ",
              "Adult/paed pain scale ",
              "Fall Risk ",
              "SOAP Notes ",
              "Diet ",
              "Intake Output ",
              "Medpass ",
              "Wound Care "
            ]
          },
          {
            head: "Therapist ",
            items: [
              "Evaluation ",
              "Assessments ",
              "Exercise Plans ",
              "Progress Notes ",
              "Goals and Tracking "
            ]
          },
          {
            head: "Physician ",
            items: [
              "e-Prescription ",
              "MAR (Schedule/PRN) ",
              "Progress Notes ",
              "Order/Refill ",
              "Care Coordination ",
              "Portal "
            ]
          },
          {
            head: "Other",
            items: [
              "Integrated forms ",
              "Clinical Dashboard ",
              "Amendment and Addendum ",
              "Audit Logs "
             
            ]
          }
        ]
      },
      Enterprise: {
        title: "Billing",
        subtitle: "Cash Pay/Insurance Billing",
        buttonText: "Book now",
        secondaryButton: "TALK TO SALES",
        sections: [
          {
            head: "",
            items: [
              "ICD 9/ICD 10 ",
              "CPT charge capture ",
              "Schedule based billing ",
              "Billing automation "
            ]
          },
          {
            head: "Insurance integration  ",
            items: [
              "Registration ",
              "Prior Authorization ",
              "Approvals/Denials ",
              "Claim Submissions ",
              "Remittance Advice ",
              "Bank Statement "
            ]
          },
          {
            head: "Other ",
            items: [
              "Customer, Vendor Management ",
              "Payroll ",
              "Expense Management ",
              "P&L Statements ",
              "Analytics Report based on KPI ",
              "Customized Dashboards "
            ]
          }
        ]
      }
    },
  
    {
      name: "Plan B",
      heroTitle: "Unified End to End Home Care Software",
      heroSubTitle: "Patient Management + Clinical Documentation + Manual Billing + General Reports",
      Essentials: {
        title: "Patient Management",
        subtitle: "From referral to end of care or patient discharge",
        buttonText: "Book Now",
        sections: [
          {
            head: "",
            sub: "From referral to end of care or patient discharge",
            items: [
              "Referral Management",
              "Admission",
              "Documents Upload",
              "Type Of Care",
              "DME Management",
              "Transfers",
              "Discharge",
              "Scheduling",
              "Shift Management",
            ]
          },
          {
            head: "Others",
            sub: "",
            items: [
              "Transportation Management",
              "Pharma integration",
              "Drug dispatch/receiving",
              "Electronic visit verification",
              "Instant Messaging, SMS, E-Mail",
              
            ]
          }
        ]
      },
      Professional: {
        title: "Clinical Documentation",
        subtitle: "Complete integrated forms",
        buttonText: "Book Now",
        sections: [
          {
            head: "Nursing",
            items: [
              "Notes",
              "Care Plans",
              "Vitals",
              "Growth Charts",
              "Adult/paed pain scale",
              "Fall Risk",
              "SOAP Notes",
              "Diet",
              "Intake Output",
              "Medpass",
              "Wound Care"
            ]
          },
          {
            head: "Therapist ",
            items: [
              "Evaluation ",
              "Assessments ",
              "Exercise Plans ",
              "Progress Notes ",
              "Goals and Tracking "
            ]
          },
          {
            head: "Physician ",
            items: [
              "e-Prescription ",
              "MAR (Schedule/PRN) ",
              "Progress Notes ",
              "Order/Refill ",
              "Care Coordination ",
              "Portal "
            ]
          },
          {
            head: "Other",
            items: [
              "Integrated forms ",
              "Clinical Dashboard ",
              "Amendment and Addendum ",
              "Audit Logs "
             
            ]
          }
        ]
      },
      Enterprise: {
        title: "Billing",
        subtitle: "Cash Pay/Insurance Billing",
        buttonText: "Book Now",
        secondaryButton: "CONTACT TEAM",
        sections: [
          {
            head: "",
            items: [
              "ICD 9/ICD 10",
              "CPT charge capture",
              "Schedule based billing",
              "Billing automation"
            ]
          },
          {
            head: "Manual Insurance Submission",
            items: [
              "Prior Authorization",
              "XML Claim Submissions(Green Rain)",
              "Remittance Advice upload",
            ]
          },{
            head: "Other",
            items: [
              "Customer, Vendor Management",
              "Payroll",
              "Expense Management",
              "P&L Statements",
              "Customized Dashboards"
            ]
          }
        ]
      }
    },
  
    {
      name: "Plan C",
      heroTitle: "Unified Health Net Software",
      heroSubTitle: "Patient Management + Clinical Documentation + General Reports",
      Essentials: {
        title: "Patient Management",
        subtitle: "From referral to end of care or patient discharge",
        buttonText: "Book Now",
        sections: [
          {
            head: "",
            sub: "",
            items: [
              "Referral Management",
              "Admission",
              "Documents Upload",
              "Type Of Care",
              "DME Management",
              "Transfers",
              "Discharge",
              "Scheduling",
              "Shift Management"
            ]
          },
          {
            head: "Others",
            sub: "",
            items: [
              "Pharma integration",
              "Drug dispatch/receiving",
              "Instant Messaging, SMS, E-Mail",
              
            ]
          }
        ]
      },
      Professional: {
        title: "Clinical Documentation",
        subtitle: "Complete integrated forms",
        buttonText: "Book Now",
        sections: [
          {
            head: "Nursing",
            items: [
              "Notes",
              "Care Plans",
              "Vitals",
              "Growth Charts",
              "Adult/paed pain scale",
              "Fall Risk",
              "SOAP Notes",
              "Diet",
              "Intake Output",
              "Medpass",
              "Wound Care"
            ]
          },
          {
            head: "Physician",
            items: [
              "e-Prescription",
              "MAR (Schedule/PRN)",
              "Progress Notes",
              "Order/Refill",
              "Care Coordination",
              "Portal",
              
            ]
          },
        ]
      },
      Enterprise: {
        title: "Compliance Enterprise",
        subtitle: "",
        buttonText: "RUN Enterprise",
        secondaryButton: "REQUEST DEMO",
        sections: [
          {
            head: "Enterprise Compliance",
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
      heroTitle: "Unified Direct Billing Software",
      heroSubTitle: "Automated Billing + Financial Reports",
      Essentials: {
        title: "Enterprise Core",
        subtitle: "Scalable Infrastructure for Large Agencies",
        buttonText: "ENTERPRISE ACCESS",
        sections: [
          {
            head: "Administration",
            sub: "Centralized governance and oversight",
            items: [
              "Role-Based Permissions",
              "Audit Trails",
              "Data Governance"
            ]
          }
        ]
      },
      Professional: {
        title: "Physician Collaboration",
        subtitle: "",
        buttonText: "ENABLE PHYSICIAN",
        sections: [
          {
            head: "Doctor Portal",
            items: [
              "Order Management",
              "Progress Reviews",
              "Digital Signatures"
            ]
          }
        ]
      },
      Enterprise: {
        title: "Billing",
        subtitle: "Cash Pay/Insurance Billing",
        buttonText: "Book Now",
        secondaryButton: "SPEAK TO SALES",
        sections: [
          {
            head: "",
            items: [
              "ICD 9/ICD 10",
              "CPT charge capture",
              "Schedule based billing",
              "Billing automation"
            ]
          },
          {
            head: "Insurance integration",
            items: [
              "Registration",
              "Prior Authorization",
              "Approvals/Denials",
              "Claim Submissions",
              "Remittance Advice",
              "Bank Statement"
            ]
          },
          {
            head: "Other",
            items: [
              "Customer, Vendor Management",
              "Payroll",
              "Expense Management",
              "P&L Statements",
              "Analytics Report based on KPI",
              "Customized Dashboards"
            ]
          }
        ]
      }
    },
  
    {
      name: "Plan E",
      heroTitle: "Unified Manual Billing Software",
      heroSubTitle: "Manual Billing + Financial Reports",
      Essentials: {
        title: "Billing",
        subtitle: "Tailored Platform for Specialized Providers",
        buttonText: "BUILD YOUR PLAN",
        sections: [
          {
            head: "Customization",
            sub: "Adapt the system to your workflows",
            items: [
              "Custom Forms",
              "Workflow Designer",
              "API Access"
            ]
          }
        ]
      },
      Professional: {
        title: "Specialty Professional Modules",
        subtitle: "",
        buttonText: "ADD MODULES",
        sections: [
          {
            head: "Specialized Care",
            items: [
              "Chronic Care Programs",
              "Pediatric Tools",
              "Post-Acute Monitoring"
            ]
          }
        ]
      },
      Enterprise: {
        title: "Billing",
        subtitle: "Cash Pay/Insurance Billing",
        buttonText: "Book Now",
        secondaryButton: "SPEAK TO SALES",
        sections: [
          {
            head: "",
            items: [
              "ICD 9/ICD 10",
              "CPT charge capture",
              "Schedule based billing",
              "Billing automation"
            ]
          },
          {
            head: "Manual Insurance Submission",
            items: [
              "Prior Authorization",
              "XML Claim Submissions(Green Rain)",
              "Remittance Advice upload",
              
            ]
          },
          {
            head: "Other",
            items: [
              "Customer, Vendor Management",
              "Payroll",
              "Expense Management",
              "P&L Statements",
              "Analytics Report based on KPI",
              "Customized Dashboards"
            ]
          }
        ]
      }
    }
  ];
  
  

  const activeData = plansData.find(p => p.name === activeTab) || plansData[0];

  // Determine which cards to show based on Plan Type
  const getVisibleCards = () => {
    const allCards = [
      { type: 'Essentials', data: activeData.Essentials, isFeatured: false },
      { type: 'Professional', data: activeData.Professional, isFeatured: true },
      { type: 'Enterprise', data: activeData.Enterprise, isFeatured: false }
    ];

    if (activeTab === 'Plan A' || activeTab === 'Plan B') {
      return allCards; // Show all 3
    } 
    else if (activeTab === 'Plan C') {
      return allCards.filter(c => c.type !== 'Enterprise'); // Show Patient Mgmt + Clinical Docs
    } 
    else if (activeTab === 'Plan D' || activeTab === 'Plan E') {
      return allCards.filter(c => c.type === 'Enterprise'); // Show Billing only
    }
    return allCards;
  };

  const visibleCards = getVisibleCards();

  // Dynamic Grid Columns
  const gridCols = visibleCards.length === 3 
    ? 'md:grid-cols-3' 
    : visibleCards.length === 2 
      ? 'md:grid-cols-2 max-w-5xl mx-auto' 
      : 'md:grid-cols-1 max-w-3xl mx-auto';

  return (
    <div className="relative min-h-screen bg-white pt-20 lg:pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
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

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <H3 className="text-[#1e8d8d]">
          {activeData.heroTitle}
        </H3>

        {activeData.heroSubTitle && (
          <P className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {activeData.heroSubTitle}
          </P>
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid gap-6 items-start relative z-10 ${gridCols}`}
        >
          <AnimatePresence mode="wait">
            {visibleCards.map((card) => {
              // Determine styles based on card type and number of visible cards
              // Only apply "Featured" styles (pop out, heavy border) if we have 3 cards
              const isFeatured = card.isFeatured && visibleCards.length === 3;
              
              const cardClass = `
                flex flex-col h-full overflow-hidden min-h-[600px] rounded-xl bg-white
                ${isFeatured 
                  ? 'shadow-2xl border-[8px] border-[#008280] transform md:-translate-y-4 min-h-[620px]' 
                  : 'shadow-lg border border-teal-500/30'
                }
              `;

              return (
                <motion.div 
                  key={`${activeTab}-${card.type}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={cardClass}
                >
                  {/* Featured Badge (Only for middle card in 3-column layout) */}
                  {isFeatured && (
                    <div className="bg-[#008280] text-white text-[14px] font-bold uppercase tracking-widest py-1.5 text-center font-bricolage">Most Popular</div>
                  )}

                  <div className={`p-8 text-center border-b border-gray-50 ${isFeatured ? 'mt-4' : ''}`}>
                    <H3 className={`font-bold mb-1 ${isFeatured ? 'text-2xl text-[#008280]' : 'text-gray-800'}`}>
                      {card.data.title}
                    </H3>
                    {card.data.subtitle && (
                      <P className={`font-bold leading-tight ${!isFeatured ? 'text-2xl text-[#008280]' : ''}`}>
                        {card.data.subtitle}
                      </P>
                    )}
                    
                    <button 
  className="
    mt-8 w-full py-3 px-4 rounded text-xs font-bold uppercase tracking-wider 
    transition-all duration-300 cursor-pointer flex items-center justify-center
    /* Default State: Black background, white text */
    bg-black/90 text-white border border-transparent
    /* Hover State: White background, gray border, black text */
    hover:bg-white hover:text-black hover:border-gray-300
  "
>
  {card.data.buttonText}
</button>

                    {/* {card.data.secondaryButton && (
                      <button className="flex-1 py-3 px-1 border border-gray-300 text-gray-700 rounded text-[10px] font-bold uppercase w-full mt-2">
                        {card.data.secondaryButton}
                      </button>
                    )} */}
                  </div>

                  <div className="p-6 text-[13px] text-gray-600 space-y-6">
                    {card.data.sections.map((sec: any, i: number) => (
                      <div key={i}>
                        <H4 className="font-bold text-gray-900 mb-1 flex items-center"><RightChevron className="mr-2 text-[#008280]" /> {sec.head}</H4>
                        {/* {sec.sub && <p className="text-[11px] text-gray-500 mb-2 ml-5">{sec.sub}</p>} */}
                        <ul className="ml-5 space-y-1 font-quicksand">
                          {sec.items.map((item: string) => <li key={item} className="before:content-['•'] before:mr-2 before:text-gray-400">{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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