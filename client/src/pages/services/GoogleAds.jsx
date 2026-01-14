import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'

// Creative Icon Components for visual flair
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3DB7E4] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
)

const GoogleAds = () => {
  return (
    <div className="bg-[#0A0B0E] text-white selection:bg-[#3DB7E4]/30">
      
      {/* --- HERO SECTION WITH ANIMATED GRADIENT --- */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#3DB7E4]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#123747]/30 blur-[100px] rounded-full" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="group flex items-center gap-2 text-sm text-[#B0C4CF] hover:text-[#3DB7E4] transition-colors mb-8"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Services
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]"
          >
            PPC Agency in Pune for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DB7E4] to-[#73D4F7]">
              High-Intent Leads
            </span>, Not Wasted Clicks
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#C7D2DA] max-w-4xl leading-relaxed font-light"
          >
            Versatile Advertising is a performance-focused PPC agency in Pune offering Google Ads
            and PPC management services for businesses across education, healthcare, construction,
            IT, and B2B sectors. The agency focuses on intent-driven campaigns, cost control, and
            measurable lead quality through structured Google advertising.
          </motion.p>
        </Container>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12">
        <Container className="space-y-32">

          {/* High Impact Insight Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3DB7E4] to-transparent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <Card className="relative bg-[#111318] border border-white/10 p-10 md:p-16 rounded-3xl">
              <p className="text-2xl md:text-4xl font-medium leading-snug text-white italic">
                “Businesses don’t struggle with Google Ads because ads don’t run.
                They struggle because nobody can clearly answer where <span className="text-[#FF5F5F] not-italic font-bold">money is being burned</span> and why
                leads are not getting converted.”
              </p>
              <div className="mt-10 h-1 w-24 bg-[#3DB7E4]" />
              <p className="mt-6 text-lg text-[#C7D2DA] font-medium tracking-wide">
                That’s where a disciplined PPC agency in Pune becomes essential.
              </p>
            </Card>
          </div>

          {/* Agency Workflow Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                What does a PPC agency in Pune <span className="text-[#3DB7E4]">actually</span> do?
              </h2>
              <div className="space-y-6 text-[#C7D2DA] text-lg leading-relaxed">
                <p>
                  The role of a PPC agency is to manage and optimise paid advertising campaigns to
                  generate qualified leads or sales, not just traffic.
                </p>
                <p className="font-semibold text-white">
                  Core responsibilities performed by PPC agencies include:
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                "Keyword and search intent analysis",
                "Google Ads / Adwords campaign setup",
                "Budget allocation and bid control",
                "Conversion and lead tracking",
                "Ongoing optimisation and reporting"
              ].map((item, idx) => (
                <motion.div 
                  whileHover={{ x: 10 }}
                  key={idx} 
                  className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-[#3DB7E4]/5 hover:border-[#3DB7E4]/50 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#3DB7E4]/20 flex items-center justify-center text-[#3DB7E4] font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </motion.div>
              ))}
              <p className="text-[#3DB7E4] font-medium mt-4 px-2">
                This is the foundation of reliable PPC management services in Pune.
              </p>
            </div>
          </div>

          {/* Failure & Structure Section */}
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Why do Google Ads campaigns fail for many businesses?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:border-[#FF5F5F]/50 transition-colors">
                <p className="text-[#C7D2DA] text-lg leading-relaxed mb-6">
                  Google Ads campaigns often fail when businesses focus on budget and traffic, while
                  ignoring the basics, such as poor account structure, irrelevant clicks, unqualified
                  leads, and unclear conversion tracking.
                </p>
                <p className="text-xl font-bold text-white border-l-4 border-[#FF5F5F] pl-4">
                  No amount of platform optimization can fix these fundamental issues.
                </p>
              </Card>

              <div className="bg-[#14161C] border border-white/10 p-8 rounded-2xl">
                <p className="text-white font-bold mb-6 text-lg uppercase tracking-widest text-[#FF5F5F]">Common reasons include:</p>
                <ul className="space-y-5">
                  {[
                    "Targeting high-volume but low-buying-intent keywords",
                    "No negative keyword strategy",
                    "Ads written without lead qualification",
                    "Landing pages are not aligned with search intent",
                    "No visibility into cost per qualified lead"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#C7D2DA]">
                      <span className="text-[#FF5F5F] text-xl mt-[-2px]">✕</span>
                      <span className="text-lg">{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#3DB7E4] font-bold mt-10 text-lg">
                  A competent PPC company in Pune fixes structure before scaling spend.
                </p>
              </div>
            </div>
          </div>

          {/* The Conditionals Section */}
          <div className="py-20 bg-gradient-to-b from-transparent via-[#3DB7E4]/5 to-transparent rounded-[100px]">
            <div className="max-w-4xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-center">
                Is Google Ads worth it for businesses in Pune?
              </h2>
              <div className="text-center">
                <span className="px-6 py-2 bg-[#3DB7E4] rounded-full text-black font-black text-xl uppercase tracking-tighter">
                   Yes, but only when intent is controlled.
                </span>
              </div>
              
              <div className="grid gap-6 mt-12">
                {[
                  {
                    title: "Searches show commercial or decision intent",
                    desc: "Keywords are selected based on readiness to enquire or buy, not just search volume."
                  },
                  {
                    title: "Campaigns are geo-mapped for Pune",
                    desc: "Ads are restricted to Pune-based locations to avoid spending leakage outside the service area."
                  },
                  {
                    title: "Budgets are protected with negative keywords",
                    desc: "Irrelevant searches are filtered out to prevent unnecessary ad spend."
                  },
                  {
                    title: "Conversions are tracked accurately",
                    desc: "Every meaningful action is measured, so performance is tied to real lead outcomes, not vanity metrics."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-[#0E0F12] border border-white/10 rounded-2xl">
                    <CheckIcon />
                    <div>
                      <h4 className="text-xl font-bold text-[#3DB7E4] mb-2">{item.title}</h4>
                      <p className="text-[#C7D2DA] text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xl text-[#FF5F5F] font-bold mt-8">
                Without this, ad spend increases but ROI declines.
              </p>
            </div>
          </div>

          {/* Included Services - Modern Numbered List */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold max-w-3xl leading-tight">
              What PPC services are actually included — and why they matter?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  t: "Google Ads & Adwords Campaign Setup",
                  d: "Campaigns are structured according to industry behavior, search intent, and location-specific demand in Pune, aiming to avoid budget leakage and enhance lead quality."
                },
                {
                  t: "Keyword Strategy & Intent Mapping",
                  d: "We strongly emphasize commercial intent, not volume. Choosing transactional keywords, applying negative keywords, and mapping Pune-specific search behavior so ads appear only when users are ready to act."
                },
                {
                  t: "Ad Copywriting That Filters Leads",
                  d: "Our ads are written in a way that pre-qualifies users, aligns with landing pages, and improves Quality Score, reducing CPC while attracting serious inquiries."
                },
                {
                  t: "Conversion Tracking & ROI Visibility",
                  d: "We execute accurate conversion, call, and lead tracking so cost per lead and ROAS are always clear, which eliminates guesswork from optimization."
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/[0.08] transition-colors">
                  <span className="text-6xl font-black text-white/5 block mb-[-20px]">{i + 1}</span>
                  <h3 className="text-2xl font-bold text-[#3DB7E4] mb-4 relative z-10">{item.t}</h3>
                  <p className="text-[#C7D2DA] leading-relaxed text-lg">{item.d}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl font-bold text-center pt-8 border-t border-white/10">
              This is what complete PPC management services in Pune look like.
            </p>
          </div>

          {/* Comparison Table - Sleek Dark Mode */}
          <div className="space-y-10">
            <h2 className="text-4xl font-bold text-center">
              What is the difference between Google Ads and Adwords?
            </h2>

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#1A1C23]">
                  <tr>
                    <th className="p-6 text-[#3DB7E4] font-bold uppercase tracking-wider">Aspect</th>
                    <th className="p-6 text-[#3DB7E4] font-bold uppercase tracking-wider">AdWords</th>
                    <th className="p-6 text-[#3DB7E4] font-bold uppercase tracking-wider">Google Ads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="bg-[#111318] hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold">Status</td>
                    <td className="p-6 text-[#C7D2DA]">Old name (rebranded in 2018)</td>
                    <td className="p-6 text-[#C7D2DA]">Current platform name</td>
                  </tr>
                  <tr className="bg-[#0E0F12] hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold">Scope</td>
                    <td className="p-6 text-[#C7D2DA]">Primarily focused on text-based search ads</td>
                    <td className="p-6 text-[#C7D2DA]">Search, Display, Video (YouTube), App, Remarketing</td>
                  </tr>
                  <tr className="bg-[#111318] hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold">Usage Today</td>
                    <td className="p-6 text-[#C7D2DA]">Commonly used by veterans</td>
                    <td className="p-6 text-[#C7D2DA]">Official system name</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final CTA - High Conversion Design */}
          <div className="relative pt-20 pb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3DB7E4] to-[#123747] blur-[100px] opacity-10" />
            <Card className="relative bg-gradient-to-br from-[#123747] to-[#0A0B0E] p-12 md:p-20 rounded-[3rem] text-center border border-white/20 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
              
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Need a PPC Agency in Pune That <br />
                <span className="text-[#3DB7E4]">Focuses on Lead Quality?</span>
              </h2>

              <p className="text-xl md:text-2xl text-[#C7D2DA] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Versatile Advertising helps businesses run Google advertising with clarity,
                cost control, and measurable outcomes.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                   to="/contact" 
                   size="lg" 
                   className="bg-[#3DB7E4] text-black hover:bg-white transition-all px-12 py-6 rounded-2xl font-black text-xl shadow-[0_10px_40px_rgba(61,183,228,0.4)]"
                >
                  Book a Free Consultation
                </Button>
              </motion.div>
            </Card>
          </div>

        </Container>
      </section>
    </div>
  )
}

export default GoogleAds