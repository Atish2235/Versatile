import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const GraphicDesigning = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <main className="bg-[#0A0B0D] text-white selection:bg-[#2F8FB3]/30 font-sans leading-relaxed">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#2F8FB3]/8 rounded-full blur-[100px] -z-10" />
        
        <Container>
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#2F8FB3] mb-6 hover:translate-x-[-4px] transition-transform duration-300">
              <span>←</span> Back to Services
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight mb-6">
              <span className="text-[#6B7280]">Graphic Designing Company in Pune for Brands</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8FB3] to-[#1FB6A6]">That Need Visual Clarity</span>
            </h1>

            <div className="max-w-3xl space-y-4 mb-8">
              <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed">
                Versatile Advertising is a graphic designing company in Pune helping founders and growing businesses bring consistency and clarity to their brand visuals.
              </p>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed border-l-2 border-[#2F8FB3] pl-4">
                From logo designing and brochure designing to motion graphics, we create design systems that reduce confusion, improve brand recall, and support long-term business growth.
              </p>
            </div>
            
            <Button to="/contact" size="md" className="bg-[#2F8FB3] hover:bg-[#1FB6A6] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-[#2F8FB3]/20">
              Talk to our Graphic Design Expert
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* ================= CLARITY STATEMENT ================= */}
      <section className="py-16 bg-[#0E0F12]">
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#16181D] border border-white/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed italic text-white/90">
                "If your brand looks different everywhere, redesigns keep repeating, and visual decisions never feel finalised, you don't need more creatives; <span className="text-[#2F8FB3] not-italic font-bold">you need clarity.</span>"
              </h2>
              <div className="w-12 h-0.5 bg-[#2F8FB3] mb-4" />
              <p className="text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                We help founders and SMEs bring structure and consistency to their brand visuals, so design stops feeling uncertain and starts working as a long-term business asset.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ================= WHY FOUNDERS FEEL STUCK ================= */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-start max-w-5xl mx-auto">
            <div className="lg:w-2/5 lg:sticky lg:top-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Do Founders Feel Stuck with Their Brand Design?</h2>
              <p className="text-sm text-[#9CA3AF] mb-2">Most founders don't wake up thinking they need a new design agency.</p>
              <p className="text-sm text-[#2F8FB3] italic">They reach a point where they are thinking something is missing:</p>
            </div>

            <div className="lg:w-3/5 grid md:grid-cols-2 gap-4">
              { [
                { title: "The Logo Mismatch", text: "The logo looks acceptable on its own, but it doesn't look good on the website.", icon: "1" },
                { title: "Sales Friction", text: "The brochure looks polished, yet sales conversations still need to start from scratch.", icon: "2" },
                { title: "Disconnected Socials", text: "Social media creatives exist, but nothing feels connected.", icon: "3" },
                { title: "Redundant Briefing", text: "And every time a new designer joins, the brand story needs to be explained again.", icon: "4" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -3 }}
                  className="bg-[#16181D] border border-white/5 p-5 rounded-2xl hover:border-[#2F8FB3]/30 transition-all"
                >
                  <span className="text-2xl font-bold text-white/10 block mb-2">{item.icon}</span>
                  <h4 className="text-base font-semibold mb-2 text-[#2F8FB3]">{item.title}</h4>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= WHY DESIGN FAILS ================= */}
      <section className="py-20 bg-[#0E0F12]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">Why Does Graphic Designing Fail for Growing Businesses?</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-base text-[#D1D5DB] leading-relaxed">
                  The concept of Graphic design fails not because designers lack skill, but because design decisions are made separately.
                </p>
                <div className="bg-white/5 p-5 rounded-2xl border-l-3 border-[#FF5F5F]">
                  <p className="text-sm text-[#9CA3AF]">
                    When colours, fonts, and layouts are selected before understanding the audience, brand purpose, and positioning, the design ends up reacting instead of communicating with intent.
                  </p>
                </div>
                <p className="text-sm text-[#6B7280]">
                  It looks acceptable in isolation, but breaks down across platforms and time.
                </p>
              </div>

              <div className="bg-[#16181D] p-6 md:p-8 rounded-3xl border border-[#2F8FB3]/10">
                <p className="text-base text-[#9CA3AF] leading-relaxed mb-4">
                  At Versatile Advertising, we intervene at the decision level, defining visual direction before execution.
                </p>
                <p className="text-base md:text-lg text-white font-medium mb-6">
                  This ensures every design element serves a purpose, not preference.
                </p>
                <p className="text-[#2F8FB3] font-semibold text-sm border-t border-white/10 pt-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#2F8FB3]"></span>
                  That is what reduces revisions and creates long-term consistency.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= LOGO VS SYSTEM ================= */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#6B7280]">
                "My Logo Isn't Bad. Then Why Does My Brand Still Feel Inconsistent?"
              </h2>
              <p className="text-sm text-[#9CA3AF]">This is one of the common questions we hear.</p>
              <p className="text-sm text-[#6B7280]">In most cases, the issue isn't the logo itself. It's that:</p>
              
              <ul className="space-y-3">
                { [
                  "The logo was designed without a defined brand system",
                  "Colours and fonts were never standardised",
                  "Different designers interpreted the brand differently over time"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#2F8FB3]/20 transition-all">
                    <span className="text-[#2F8FB3] mt-0.5">→</span>
                    <span className="text-sm text-[#D1D5DB]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#16181D] rounded-3xl p-6 md:p-10">
              <p className="text-base text-[#9CA3AF] leading-relaxed mb-4">
                As a logo designing company in Pune, we treat the logo as a foundation, not a standalone deliverable.
              </p>
              <p className="text-base md:text-lg text-white font-medium mb-6">
                Our logo design services in Pune ensure that once the logo is finalised, every visual element aligns around it consistently.
              </p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-4xl font-bold text-white/10 block mb-2">FINISH</span>
                <p className="text-lg font-semibold text-[#2F8FB3]">That's how redesign fatigue ends.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= STABILITY THROUGH STRUCTURE ================= */}
      <section className="py-20 bg-[#0E0F12]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#6B7280]">What Changes When You Work with Versatile Advertising?</h2>
              <p className="text-sm text-[#9CA3AF]">Clients usually tell us something simple, but important:</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="bg-[#2F8FB3] rounded-3xl p-8 text-black">
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4">"For the first time, our brand feels stable."</h3>
                <p className="text-sm font-semibold uppercase tracking-wider opacity-70">That stability comes only from structure.</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium text-white">As one of the best graphic design companies in Pune for founders and SMEs, our role is to:</p>
                <ul className="space-y-3">
                  { [
                    "Create one clear visual language",
                    "Apply it consistently across different social media platforms such as Facebook, Instagram, and LinkedIn",
                    "Ensure future creatives don't feel like reinventions"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-[#2F8FB3] flex items-center justify-center text-black text-xs font-bold shrink-0">✓</div>
                      <span className="text-sm text-[#D1D5DB]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= OUR DESIGN PROCESS ================= */}
      <section className="py-20 bg-[#F8F9FA] text-[#0A0B0D] rounded-t-[40px]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 flex flex-col lg:flex-row gap-8 items-start lg:items-end">
              <div className="lg:w-2/3">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-tight">What is Our Graphic Designing Process?</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Most founders hesitate to approach a graphic designing company because they don't know what the process will be. They are concerned about:
                </p>
              </div>
              <div className="lg:w-1/3 flex flex-wrap gap-2 justify-start lg:justify-end">
                <span className="bg-gray-200 px-4 py-1.5 rounded-full font-medium text-xs">Endless revisions</span>
                <span className="bg-gray-200 px-4 py-1.5 rounded-full font-medium text-xs">Unclear timelines</span>
                <span className="bg-gray-200 px-4 py-1.5 rounded-full font-medium text-xs">Vague questions</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              { [
                { 
                  step: "Step 1", 
                  title: "Clarity First Discussion", 
                  desc: "We start our process with a focused conversation to understand your business stage, audience maturity, and where your brand feels misaligned." 
                },
                { 
                  step: "Step 2", 
                  title: "Visual Direction Alignment", 
                  desc: "Before any creative work starts, we align on visual direction, including tone, personality, and consistency requirements." 
                },
                { 
                  step: "Step 3", 
                  title: "Design Execution", 
                  desc: "Once the direction is clear, our team executes logo design, brochure design, or motion graphics with fewer revisions." 
                },
                { 
                  step: "Step 4", 
                  title: "Refinement & Finalisation", 
                  desc: "Feedback is structured, timelines are defined, and final outputs are delivered in formats that support real business use." 
                }
              ].map((item, i) => (
                <div key={i} className="relative p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group hover:border-[#2F8FB3]/30">
                  <span className="text-3xl font-bold text-gray-100 absolute top-3 left-3">{item.step}</span>
                  <div className="relative z-10 pt-10">
                    <h4 className="text-sm font-bold mb-2 uppercase tracking-tight text-[#0A0B0D]">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0A0B0D] rounded-2xl p-6 md:p-10 text-center text-white">
              <p className="text-sm text-gray-400 mb-4">
                Our process is specifically designed to remove that anxiety. As a structured graphic designing company in Pune, here's how we work:
              </p>
              <p className="text-base md:text-lg font-semibold leading-relaxed">
                Through this process, clients experience less confusion, fewer revisions, and greater confidence in the final result.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-[#0A0B0D]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#6B7280]">Which Graphic Designing Services Do Growing Businesses Actually Need?</h2>
              <p className="text-sm text-[#9CA3AF]">
                Growing businesses don't need everything at once. They require the appropriate services in the proper sequence.
              </p>
            </div>

            <div className="space-y-20">
              {/* SERVICE 1: LOGO */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2F8FB3]">Logo Designing & Brand Foundation</h3>
                  <p className="text-sm text-[#9CA3AF]">Our logo design process emphasizes:</p>
                  <ul className="space-y-3">
                    { [
                      "Current brand positioning",
                      "Future scalability",
                      "Consistency across digital and print platforms"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-sm text-white border-b border-white/5 pb-2">
                        <span className="text-[#2F8FB3]">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[#6B7280] italic pt-2">
                    This is why clients see us not just as a logo design agency in Pune, but as a long-term brand partner.
                  </p>
                </div>
                <div className="bg-[#16181D] rounded-3xl border border-white/5 p-10 flex items-center justify-center min-h-[280px]">
                  <span className="text-white/10 font-bold text-4xl md:text-5xl select-none">FOUNDATION</span>
                </div>
              </div>

              {/* SERVICE 2: BROCHURE */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 bg-[#16181D] rounded-3xl border border-white/5 p-10 flex items-center justify-center min-h-[280px]">
                  <span className="text-white/10 font-bold text-4xl md:text-5xl select-none text-center uppercase">Sales<br/>Flow</span>
                </div>
                <div className="order-1 lg:order-2 space-y-5">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1FB6A6]">Brochure Designing That Supports Sales Conversations</h3>
                  <p className="text-sm text-[#9CA3AF]">
                    Many brochure designs fail to generate interest because they try to impress rather than explain. Our brochure designing focuses on:
                  </p>
                  <ul className="space-y-2">
                    { [
                      "Clear content hierarchy",
                      "Easy-to-follow flow",
                      "Supporting real client conversations"
                    ].map((item, i) => (
                      <li key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm">
                        <span className="text-[#1FB6A6] font-semibold mr-2">#{String(i+1).padStart(2, '0')}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SERVICE 3: MOTION GRAPHICS */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <h3 className="text-xl md:text-2xl font-bold text-[#73D4F7]">Motion Graphics for Faster Understanding</h3>
                  <p className="text-sm text-[#9CA3AF]">
                    Businesses approach a motion graphics company in Pune when static visuals are no longer enough. We use motion graphics where:
                  </p>
                  <ul className="space-y-2">
                    { [
                      "Services are complex",
                      "Attention spans are short",
                      "Explanation needs to be quick and clear"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-sm text-[#D1D5DB] bg-white/5 p-3 rounded-xl">
                        <div className="w-2 h-2 bg-[#73D4F7] rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-white border-l-2 border-[#73D4F7] pl-3">
                    Motion is used intentionally, not excessively, to convey your message of services.
                  </p>
                </div>
                <div className="bg-[#16181D] rounded-3xl border border-white/5 p-10 flex items-center justify-center min-h-[280px]">
                  <span className="text-white/10 font-bold text-4xl md:text-5xl select-none text-center uppercase">Intentional<br/>Action</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 bg-[#0E0F12]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What are the Industries We Commonly Work With in Pune?</h2>
              <p className="text-sm text-[#9CA3AF] max-w-3xl">
                Our design process stays the same for all, but what changes is who the design is meant to speak to. As a graphic design agency in Pune, we work with businesses at different stages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              { [
                { title: "Startups & Founders", desc: "Clear brand identity, logos, pitch decks, and early brochures." },
                { title: "IT & SaaS Companies", desc: "Consistent branding, explainer graphics, and sales collaterals." },
                { title: "Real Estate & Construction", desc: "Project brochures and visual systems that communicate trust." },
                { title: "Manufacturing & B2B", desc: "Corporate branding and capability presentations." },
                { title: "Professional Services", desc: "Clean, trust-focused branding for credibility." }
              ].map((item, i) => (
                <div key={i} className="bg-[#16181D] border border-white/5 p-5 rounded-2xl hover:border-[#2F8FB3]/20 transition-all">
                  <h4 className="text-sm font-semibold mb-3 text-[#2F8FB3]">{item.title}</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= FREELANCER VS AGENCY ================= */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Should I Hire a Freelancer or a Graphic Design Agency in Pune?</h2>
              <div className="space-y-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-sm text-[#9CA3AF]">Freelancers work well when they have to perform isolated tasks.</p>
                </div>
                <div className="p-5 bg-[#2F8FB3]/10 rounded-2xl border border-[#2F8FB3]/20">
                  <p className="text-sm font-semibold text-white mb-3">Agencies play an important role when:</p>
                  <ul className="space-y-2 text-sm">
                    {["Brand consistency matters", "Multiple platforms are involved", "Growth demands reliability"].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center text-[#D1D5DB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FB3]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#16181D] p-8 rounded-3xl border border-white/5">
              <p className="text-base text-white leading-relaxed mb-4">
                Versatile Advertising functions like an extended in-house design team, offering consistency without the overhead of managing multiple designers.
              </p>
              <div className="w-10 h-0.5 bg-[#2F8FB3]" />
            </div>
          </div>
        </Container>
      </section>

      {/* ================= TIMELINES ================= */}
      <section className="py-20 bg-[#0E0F12]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How Long Does Professional Graphic Designing Take?</h2>
              <p className="text-sm text-[#9CA3AF]">Project timelines depend on scope and clarity, but typically:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              { [
                { title: "Logo Designing", time: "10-15 working days" },
                { title: "Brochure Designing", time: "7-10 working days" },
                { title: "Motion Graphics", time: "Based on complexity" }
              ].map((item, i) => (
                <div key={i} className="bg-[#16181D] p-6 rounded-2xl border border-white/5 text-center">
                  <h4 className="text-[#2F8FB3] font-semibold text-xs uppercase tracking-wider mb-3">{item.title}</h4>
                  <p className="text-base text-white font-medium">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= WHY BUSINESSES TRUST US ================= */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Why Businesses Trust Versatile Advertising</h2>
                <p className="text-sm text-[#9CA3AF] italic">Choosing a graphic designing company is not a creative decision. It's a trust decision.</p>
                <p className="text-sm text-white font-medium">Clients work with us because we offer:</p>
              </div>

              <div className="space-y-3">
                { [
                  "A structured design approach, not ad-hoc creativity",
                  "Clear timelines and defined deliverables",
                  "Consistency across logo, brochures, motion graphics, and digital creatives",
                  "One accountable team instead of multiple disconnected designers"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-[#16181D] rounded-2xl border border-white/5">
                    <div className="w-8 h-8 bg-[#2F8FB3]/10 rounded-full flex items-center justify-center text-[#2F8FB3] text-xs font-bold shrink-0">{String(i+1).padStart(2, '0')}</div>
                    <p className="text-sm text-[#D1D5DB]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-white text-[#0A0B0D] p-8 md:p-12 rounded-3xl">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                As a Pune-based graphic designing company, we work as a long-term design partner for businesses that value clarity, stability, and professional execution.
              </p>
              <h3 className="text-lg md:text-xl font-bold italic">
                Our focus is not on doing "more design," but on doing design that finally settles.
              </h3>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-[#0A0B0D]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#6B7280]">
              Speak with Versatile Advertising <span className="text-[#2F8FB3]">Before Your Next Redesign</span>
            </h2>
            <p className="text-sm md:text-base text-[#9CA3AF] mb-8 leading-relaxed">
              Before investing in another logo, brochure, or motion graphic, speak with a graphic design agency in Pune that helps founders and growing businesses replace confusion with clarity and move forward with confidence.
            </p>
            
            <Button to="/contact" size="lg" className="bg-[#2F8FB3] hover:bg-[#1FB6A6] text-white px-10 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-[#2F8FB3]/20">
              Start a Discussion
            </Button>
          </div>
        </Container>
      </section>

    </main>
  )
}

export default GraphicDesigning