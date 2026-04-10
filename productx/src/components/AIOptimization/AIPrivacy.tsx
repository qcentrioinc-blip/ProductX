'use client';

 
import { H1, H4, P } from '../../styles/Typography';
import AINavbar from './Navbar/AINavbar';

const sections = [
  { id: 'collect', title: 'What Information Do We Collect?' },
  { id: 'process', title: 'How Do We Process Your Information?' },
  { id: 'legal', title: 'What Legal Bases Do We Rely On?' },
  { id: 'share', title: 'When and With Whom Do We Share Information?' },
  { id: 'cookies', title: 'Do We Use Cookies?' },
  { id: 'international', title: 'Is Your Information Transferred Internationally?' },
  { id: 'retain', title: 'How Long Do We Keep Your Information?' },
  { id: 'secure', title: 'How Do We Keep Your Information Safe?' },
  { id: 'minors', title: 'Do We Collect Information From Minors?' },
  { id: 'rights', title: 'What Are Your Privacy Rights?' },
  { id: 'dnt', title: 'Controls for Do-Not-Track Features' }
];

export default function PrivacyPolicyAI() {
  return (
    <>
    <AINavbar/>
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0B2A4A] via-[#0E3561] to-[#0B2A4A]">
  
  {/* Geometric overlay */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.04)_50%,transparent_60%)]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center text-white">
    <H1 className="my-10 text-white text-5xl md:text-6xl font-semibold tracking-tight">
      Privacy Policy
    </H1>

    <P className="mx-auto max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
      CloudDIET is the only FinOps platform that takes an engineering-based
      approach to find inefficiencies and reduce costs across the entire
      Azure ecosystem.
    </P>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-wrap font-quicksand items-center justify-center gap-4">
      <a
        href="/industries/cloud-finops-ai"
        className="inline-flex  h-12 items-center justify-center rounded-lg bg-blue-500 px-8 text-base font-semibold text-white transition hover:bg-blue-600"
      >
       Cloud Finops AI
      </a>

      <a
        href="https://clouddiet.ai/book-demo"
        className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
      >
        Book a demo
      </a>
    </div>
  </div>
</section>
    <section className="w-full bg-white dark:bg-slate-950  text-gray-800">
      <div className=" max-w-8xl px-10 mx-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          
          {/* MAIN CONTENT */}
          <article className="prose space-y-6 prose-gray max-w-none">
            <H1 className='dark:text-white'>Privacy Policy</H1>
            <P className="text-sm text-gray-500">
              Last updated: October 12, 2023
            </P>

            <P>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our services. Please read
              this policy carefully.
            </P>

            <section id="collect">
              <H4 className='dark:text-white my-4'>1. What Information Do We Collect?</H4>
              <P>
                We may collect personal information that you voluntarily provide
                to us when you interact with our services, such as name, email
                address, and usage data.
              </P>
            </section>

            <section id="process">
              <H4 className='dark:text-white my-4'>2. How Do We Process Your Information?</H4>
              <P>
                We process your information to provide, improve, and administer
                our services, communicate with you, ensure security, and comply
                with legal obligations.
              </P>
            </section>

            <section id="legal">
              <H4 className='dark:text-white my-4'>3. What Legal Bases Do We Rely On?</H4>
              <P>
                We process personal data based on consent, contractual necessity,
                legal obligations, and legitimate interests where applicable.
              </P>
            </section>

            <section id="share">
              <H4 className='dark:text-white my-4'>4. When and With Whom Do We Share Information?</H4>
              <P>
                We may share information with trusted service providers, legal
                authorities, or during business transfers, strictly as required.
              </P>
            </section>

            <section id="cookies">
              <H4 className='dark:text-white my-4'>5. Do We Use Cookies?</H4>
              <P>
                Yes. We use cookies and similar tracking technologies to enhance
                functionality and analyze usage patterns.
              </P>
            </section>

            <section id="international">
              <H4 className='dark:text-white my-4'>6. Is Your Information Transferred Internationally?</H4>
              <P>
                Your data may be processed in countries other than your own. We
                ensure appropriate safeguards are in place.
              </P>
            </section>

            <section id="retain">
              <H4 className='dark:text-white my-4'>7. How Long Do We Keep Your Information?</H4>
              <P>
                We retain personal information only for as long as necessary to
                fulfill the purposes outlined in this policy.
              </P>
            </section>

            <section id="secure">
              <H4 className='dark:text-white my-4'>8. How Do We Keep Your Information Safe?</H4>
              <P>
                We implement organizational and technical security measures to
                protect your personal data. However, no method is 100% secure.
              </P>
            </section>

            <section id="minors">
              <H4 className='dark:text-white my-4'>9. Do We Collect Information From Minors?</H4>
              <P>
                We do not knowingly collect personal data from individuals under
                the age of 18.
              </P>
            </section>

            <section id="rights">
              <H4 className='dark:text-white my-4'>10. What Are Your Privacy Rights?</H4>
              <P>
                Depending on your location, you may have rights to access,
                correct, or delete your personal information.
              </P>
            </section>

            <section id="dnt">
              <H4 className='dark:text-white my-4'>11. Controls for Do-Not-Track Features</H4>
              <P>
                We currently do not respond to browser Do-Not-Track signals.
              </P>
            </section>
          </article>

          {/* TABLE OF CONTENTS */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-gray-200 p-6">
              <H4 className="mb-4  dark:text-white text-sm font-semibold text-gray-900">
                TABLE OF CONTENTS
              </H4>
              <ul className="space-y-3 text-sm">
                {sections.map(section => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </section>
    </>
  );
}
