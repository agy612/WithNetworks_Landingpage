import React, { useState, useEffect } from "react";
import { Menu, X, BarChart, Users, Monitor, CheckCircle, Phone, Search, ArrowUp, Check, Building, Megaphone, PenTool, Calendar, Wifi, MousePointer, Lightbulb } from "lucide-react";
import { FadeIn } from "./components/FadeIn";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: '위드네트웍스 소개', id: 'about' },
    { name: '개원컨설팅', id: 'opening-consulting' },
    { name: '운영컨설팅', id: 'operation-consulting' },
    { name: 'CS 컨설팅', id: 'cs-consulting' },
    { name: '마케팅', id: 'marketing' }
  ];

  return (
    <div className="w-full min-h-screen font-sans text-brand-text overflow-x-hidden bg-white pb-24 xl:pb-28">
      
      {/* ================= HEADER ================= */}
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5 border-b border-white/10"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-5 xl:px-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 z-50">
             <div className={`font-bold text-2xl xl:text-3xl flex items-center gap-2 ${isScrolled ? 'text-brand-text' : 'text-white'}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-brand' : 'bg-white'}`}>
                    <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-brand'}`}>W</span>
                </div>
                위드네트웍스
             </div>
          </a>

          {/* Desktop Nav - Aligned to Right with ml-auto */}
          <nav className="hidden xl:flex gap-12 ml-auto">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={`#${item.id}`} 
                className={`text-lg font-medium hover:text-brand transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden z-50 p-2 ml-auto" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8 text-black" /> : <Menu className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-16 px-5 xl:hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-5 p-2 text-gray-600 hover:text-brand transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="text-2xl font-bold py-4 border-b border-gray-100 hover:text-brand"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-8">
            <button className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg shadow-lg">
              상담신청하기
            </button>
          </div>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[100dvh] min-h-[640px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover opacity-50" 
            />
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 xl:px-20 pt-20">
          <FadeIn>
            <h1 className="text-white font-bold leading-snug
              text-[28px] sm:text-[34px] md:text-[42px]
              xl:text-[56px] 2xl:text-[64px]
            ">
              ㈜위드네트웍스는 전문의가 첫 미팅부터 함께 참여하여<br />
              <span className="text-brand">개원에서 운영, 성장까지</span> 모든 여정의 동반자가 되어드리겠습니다.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-white/90 font-medium
              text-base sm:text-lg
              xl:text-xl 2xl:text-2xl max-w-3xl leading-relaxed
            ">
              전문의와 컨설턴트가 함께 설계하는<br className="sm:hidden"/>
              병·의원 경영솔루션 전문 기업입니다.
            </p>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-28 xl:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-80">
           <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* ================= NEW INTRO SECTION (TEXT) ================= */}
      <section id="about" className="py-24 xl:py-36 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 xl:px-20">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl xl:text-[56px] font-bold text-gray-900 mb-12" style={{ lineHeight: '1.5' }}>
                    <span className="text-brand">㈜위드네트웍스</span>는<br />
                    병·의원 개원부터 운영, 성장까지<br />
                    전 과정을 아우르는 <span className="text-brand">종합 컨설팅 전문 기업</span>입니다.
                </h2>

                <hr className="border-gray-200 mb-12 w-24 border-2" />

                <div className="space-y-8 text-lg xl:text-2xl text-gray-600 font-medium" style={{ lineHeight: '1.8' }}>
                    <p>
                        개원의 성공요소는 경쟁력 있는 입지와 효율적인 마케팅을 통한 신환유입<br className="hidden xl:block" />
                        그리고 내부의 안정적인 시스템 구축을 통한 재진률 관리에 있습니다.
                    </p>
                    <p>
                        위드네트웍스는 전문의와 컨설턴트가 함께 설계하는 병·의원 경영솔루션 업체로써,<br className="hidden xl:block" />
                        위의 성공요인들이 유기적으로 셋팅 될 수 있도록 함께 설계해 드립니다.
                    </p>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl xl:text-4xl font-bold text-gray-900" style={{ lineHeight: '1.6' }}>
                        병원 운영의 모든 순간에,<br />
                        위드네트웍스가 함께하겠습니다.
                    </h3>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* ================= DETAIL SECTION 01 ================= */}
      <section className="py-20 xl:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-5 xl:px-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-10 lg:gap-16 xl:gap-24">
                <div className="flex-1">
                    <FadeIn>
                        <span className="text-brand font-bold text-2xl mb-4 block">01.</span>
                        <h2 className="text-4xl xl:text-5xl font-bold mb-8 text-gray-900" style={{ lineHeight: '1.4' }}>
                            전문의가 직접 참여하는<br />
                            실전 컨설팅
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg" style={{ lineHeight: '1.8' }}>
                            <p>
                                개원 경험을 가진 현직 전문의가 직접 참여하여<br />
                                시행착오를 줄이고, 안정적인 출발을 돕습니다.
                            </p>
                            <p>
                                진료과 특성에 맞는 개원 전략 수립부터<br />
                                입지·규모·구성에 대한 현실적인 설계까지
                            </p>
                            <p>
                                단순한 이론이 아닌, 실제 현장에서 검증된<br />
                                실질적인 솔루션을 제공합니다.
                            </p>
                        </div>
                    </FadeIn>
                </div>
                <div className="w-full md:w-[45%] lg:w-[42%] xl:w-[40%] shrink-0">
                    <FadeIn direction="right" delay={0.2}>
                         <div className="relative aspect-[4/3] w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl -rotate-2"></div>
                            <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex flex-col p-6 overflow-hidden">
                                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex gap-4 h-full">
                                    <div className="w-1/3 bg-blue-50/50 rounded-xl p-4 flex flex-col gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <div className="h-2 w-full bg-blue-100 rounded"></div>
                                        <div className="h-2 w-2/3 bg-blue-100 rounded"></div>
                                    </div>
                                    <div className="w-2/3 flex flex-col gap-4">
                                        <div className="flex-1 bg-gray-50 rounded-xl p-4 relative overflow-hidden group">
                                            <BarChart className="w-full h-full text-brand/20 group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-lg shadow-lg">
                                                    <span className="font-bold text-gray-800">Data Analysis</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-8 right-8 bg-brand text-white p-4 rounded-2xl shadow-lg shadow-brand/30 animate-bounce">
                                    <Wifi className="w-6 h-6" />
                                </div>
                            </div>
                         </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* ================= DETAIL SECTION 02 ================= */}
      <section className="py-20 xl:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-5 xl:px-20">
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-10 md:gap-10 lg:gap-16 xl:gap-24">
                <div className="w-full md:w-[45%] lg:w-[42%] xl:w-[40%] shrink-0">
                    <FadeIn direction="left" delay={0.2}>
                         <div className="relative aspect-[4/3] w-full">
                            <div className="absolute inset-0 bg-gradient-to-bl from-teal-50 to-blue-50 rounded-3xl rotate-2"></div>
                            <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border border-gray-100">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent animate-pulse"></div>
                                <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
                                    <div className="bg-white shadow-lg p-6 rounded-2xl flex flex-col items-center gap-3 border border-gray-50">
                                        <Search className="w-10 h-10 text-brand" />
                                        <span className="font-bold text-gray-600">Research</span>
                                    </div>
                                    <div className="bg-brand shadow-lg shadow-brand/20 p-6 rounded-2xl flex flex-col items-center gap-3 text-white mt-8">
                                        <Monitor className="w-10 h-10" />
                                        <span className="font-bold">Monitoring</span>
                                    </div>
                                    <div className="bg-gray-800 shadow-lg p-6 rounded-2xl flex flex-col items-center gap-3 text-white">
                                        <MousePointer className="w-10 h-10" />
                                        <span className="font-bold">Click</span>
                                    </div>
                                    <div className="bg-white shadow-lg p-6 rounded-2xl flex flex-col items-center gap-3 border border-gray-50 mt-8">
                                        <Users className="w-10 h-10 text-gray-600" />
                                        <span className="font-bold text-gray-600">Consulting</span>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </FadeIn>
                </div>
                <div className="flex-1">
                    <FadeIn>
                        <span className="text-brand font-bold text-2xl mb-4 block">02.</span>
                        <h2 className="text-4xl xl:text-5xl font-bold mb-8 text-gray-900" style={{ lineHeight: '1.4' }}>
                            현장 중심의<br />
                            지속 가능한 운영 지원
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg" style={{ lineHeight: '1.8' }}>
                            <p>
                                단발성 컨설팅이 아닌<br />
                                현장 중심의 지속 가능한 운영 지원이 위드네트웍스의 방식입니다.
                            </p>
                            <p>
                                진료·원무·청구 흐름 점검 및 개선<br />
                                인력 운영 및 조직 관리 컨설팅
                            </p>
                            <p>
                                매출 구조 분석 및 수익성 개선<br />
                                병원 맞춤 운영·관리 가이드 제공
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* ================= DETAIL SECTION 03 ================= */}
      <section className="py-20 xl:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-5 xl:px-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-10 lg:gap-16 xl:gap-24">
                <div className="flex-1">
                    <FadeIn>
                        <span className="text-brand font-bold text-2xl mb-4 block">03.</span>
                        <h2 className="text-4xl xl:text-5xl font-bold mb-8 text-gray-900" style={{ lineHeight: '1.4' }}>
                            CS 컨설팅 구축<br />
                            함께 성장하는 시스템
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg" style={{ lineHeight: '1.8' }}>
                            <p>
                                혼자가 아닌, 네트워크로 성장합니다.<br />
                                협력 병원 네트워크 구축을 통해 함께 발전합니다.
                            </p>
                            <div className="space-y-1">
                                <p className="flex items-center gap-2"><Check className="w-5 h-5 text-brand shrink-0" />진료·운영 시스템 표준화</p>
                                <p className="flex items-center gap-2"><Check className="w-5 h-5 text-brand shrink-0" />공동 마케팅 및 브랜드 연계</p>
                                <p className="flex items-center gap-2"><Check className="w-5 h-5 text-brand shrink-0" />메이저 방송·언론사와의 연계를 통한 신뢰도 구축</p>
                                <p className="flex items-center gap-2"><Check className="w-5 h-5 text-brand shrink-0" />네트워크 병원 간 정보·노하우 공유</p>
                            </div>
                            <p>
                                각 병원의 자율성은 지키면서,<br />
                                함께 성장할 수 있는 구조를 만듭니다.
                            </p>
                        </div>
                    </FadeIn>
                </div>
                <div className="w-full md:w-[45%] lg:w-[42%] xl:w-[40%] shrink-0">
                    <FadeIn direction="right" delay={0.2}>
                         <div className="relative aspect-[4/3] w-full">
                            <img
                              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop"
                              alt="Network Collaboration"
                              className="w-full h-full object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent rounded-3xl"></div>
                         </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* ================= GREEN BANNER ================= */}
      <section className="bg-[#2D2D2D] py-32 xl:py-48 relative overflow-hidden">
        {/* Decorative ellipse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] border border-white/20 rounded-[50%] rotate-[-20deg]"></div>

        <div className="container mx-auto px-5 xl:px-20 text-center relative z-10">
          <FadeIn direction="up">
            {/* Main English Title */}
            <h2 className="text-brand text-3xl md:text-4xl xl:text-[52px] font-light mb-8" style={{ lineHeight: '1.3' }}>
              Patient Satisfaction is Growth
            </h2>

            {/* Korean Description */}
            <p className="text-white/80 text-base md:text-lg xl:text-xl max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              환자 만족이 곧 병원의 성장입니다.<br />
              전문적인 CS 교육과 관리로, <span className="text-brand font-medium">위드네트웍스</span>가 재진율 향상을 함께 만들어갑니다.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= OPENING CONSULTING: INTRO ================= */}
      <section id="opening-consulting" className="py-24 xl:py-36 bg-[#F0FDFB] scroll-mt-20">
         <div className="max-w-[1280px] mx-auto px-5 xl:px-20 text-center">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl xl:text-[48px] font-bold text-gray-900 mb-8" style={{ lineHeight: '1.4' }}>
                    개원컨설팅<br />
                    <span className="text-brand">병·의원 개원의 모든 과정을 함께합니다.</span>
                </h2>
                <p className="text-gray-600 text-lg xl:text-xl mb-12" style={{ lineHeight: '1.8' }}>
                    진료과 특성에 맞는 개원 전략 수립부터 인허가, 장비, 인력 구성 컨설팅까지<br />
                    개원 경험을 가진 현직 의사가 직접 참여하여 시행착오를 줄이고, 안정적인 출발을 돕습니다.
                </p>
                <button className="bg-brand hover:bg-brand-dark text-white text-lg font-bold py-4 px-12 rounded-sm shadow-lg transition-colors">
                    전문 상담 신청
                </button>
            </FadeIn>
         </div>
      </section>

      {/* ================= OPENING CONSULTING: IMAGE BANNER ================= */}
      <section className="relative py-32 xl:py-48 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
               alt="Consulting Meeting" 
               className="w-full h-full object-cover opacity-30" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 xl:px-20 text-white">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl xl:text-[44px] font-bold mb-4 text-center" style={{ lineHeight: '1.5' }}>
                    <span className="text-brand">위드네트웍스</span>가 놓치는 부분 없이<br />
                    개원 업무를 도와드리겠습니다.
                </h2>
                <p className="text-gray-300 text-lg xl:text-xl font-light leading-relaxed text-center mb-12">
                    전문의와 함께하는 성공적인 개원을 경험하세요.
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                    { step: "Step 01", title: "진료과 특성에 맞는\n개원 전략 수립", desc: "진료과별 맞춤 전략으로\n성공적인 개원을 설계합니다" },
                    { step: "Step 02", title: "입지·규모·구성에 대한\n현실적인 설계", desc: "데이터 기반 입지 분석과\n최적의 공간 구성을 제안합니다" },
                    { step: "Step 03", title: "인허가, 장비,\n인력 구성 컨설팅", desc: "복잡한 행정 절차부터\n장비 선정까지 함께합니다" },
                    { step: "Step 04", title: "개원 전 마케팅 및\n오픈 전략 지원", desc: "효과적인 마케팅으로\n성공적인 오픈을 지원합니다" },
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className={`p-8 rounded-2xl h-full min-h-[220px] flex flex-col ${i === 0 ? 'bg-brand' : 'bg-white/10 backdrop-blur-sm border border-white/20'}`}>
                            <div className="mb-4">
                                <span className={`text-sm font-bold ${i === 0 ? 'text-white/80' : 'text-brand'}`}>{item.step}</span>
                                <div className={`w-2 h-2 rounded-full mt-2 ${i === 0 ? 'bg-white' : 'bg-brand'}`}></div>
                            </div>
                            <h3 className={`text-xl font-bold mb-4 whitespace-pre-line leading-tight ${i === 0 ? 'text-white' : 'text-white'}`}>
                                {item.title}
                            </h3>
                            <p className={`text-sm whitespace-pre-line leading-relaxed mt-auto ${i === 0 ? 'text-white/80' : 'text-gray-300'}`}>
                                {item.desc}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* ================= MARKETING: PROCESS STEPS ================= */}
      <section className="py-24 xl:py-36 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 xl:px-20">
          <div className="text-center mb-16">
            <FadeIn>
                <h2 className="text-4xl xl:text-[50px] font-bold text-gray-900 mb-6">개원 · 운영 프로세스</h2>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>병원의 시작부터 안정적인 성장까지, 6단계 프로세스로 함께합니다</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
               {
                  num: "01",
                  title: "입지 분석",
                  desc: "진료과와 지역 특성에 맞는 입지·상권 분석",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
               },
               {
                  num: "02",
                  title: "자금 계획",
                  desc: "현실적이고 안정적인 자금 구조 수립",
                  img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop"
               },
               {
                  num: "03",
                  title: "브랜딩 & 진료 컨셉",
                  desc: "차별화된 브랜드 이미지 구축",
                  img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
               },
               {
                  num: "04",
                  title: "마케팅 전략 수립",
                  desc: "온라인·오프라인 통합 마케팅 전략",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
               },
               {
                  num: "05",
                  title: "인재 채용 & 교육",
                  desc: "우수 인재 선별 및 교육 시스템 제공",
                  img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
               },
               {
                  num: "06",
                  title: "운영 안정화",
                  desc: "지속 가능한 운영 구조 완성",
                  img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop"
               }
            ].map((step, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                  <div className="group relative h-[380px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                     <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                     <div className="absolute top-6 left-6">
                        <div className="text-6xl font-bold text-white/20">{step.num}</div>
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">{step.desc}</p>
                     </div>
                     <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand transition-colors duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
               </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPERATION CONSULTING: DIFFERENTIATION POINTS ================= */}
      <section id="operation-consulting" className="py-24 xl:py-36 bg-white scroll-mt-20">
         <div className="max-w-[1440px] mx-auto px-5 xl:px-20 text-center">
             <FadeIn>
                 <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-20">운영컨설팅</h2>
                 <p className="text-gray-600 text-xl mb-16 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
                    개원 이후, 병원이 안정적으로 성장하도록 지원합니다.
                 </p>
             </FadeIn>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    {
                        icon: <CheckCircle className="w-8 h-8" />,
                        title: "진료·원무·청구 흐름",
                        desc: "진료·원무·청구 흐름 점검 및 개선을 통한 효율성 극대화",
                        num: "01"
                    },
                    {
                        icon: <Users className="w-8 h-8" />,
                        title: "인력 운영 및 조직 관리",
                        desc: "인력 운영 및 조직 관리 컨설팅으로 최적의 팀 구성",
                        num: "02"
                    },
                    {
                        icon: <BarChart className="w-8 h-8" />,
                        title: "매출 구조 분석",
                        desc: "매출 구조 분석 및 수익성 개선을 통한 안정적 성장",
                        num: "03"
                    },
                    {
                        icon: <Lightbulb className="w-8 h-8" />,
                        title: "운영·관리 가이드",
                        desc: "병원 맞춤 운영·관리 가이드 제공으로 지속 가능한 시스템 구축",
                        num: "04"
                    }
                ].map((item, i) => (
                    <FadeIn key={i} delay={i*0.1}>
                        <div className="group cursor-pointer bg-[#F0FDFB] border-2 border-brand/20 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-brand hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-white group-hover:text-brand transition-all duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-4xl font-bold text-brand/20 group-hover:text-white/30 transition-colors duration-300">{item.num}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">{item.desc}</p>
                        </div>
                    </FadeIn>
                ))}
             </div>
             
             <div className="w-full h-[1px] bg-gray-100 mt-20"></div>
         </div>
      </section>

      {/* ================= MANAGEMENT: OPERATION HERO ================= */}
      <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Operation" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center text-white">
              <FadeIn>
                  <h2 className="text-4xl font-bold mb-4">운영컨설팅</h2>
                  <p className="text-gray-300 text-lg">단발성 컨설팅이 아닌, 현장 중심의 지속 가능한 운영 지원입니다.</p>
              </FadeIn>
          </div>
      </section>

      {/* ================= MANAGEMENT: BILLING DETAILS & REVIEWS ================= */}
      <section className="py-24 xl:py-36 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 xl:px-20">
              <div className="mb-24">
                  <FadeIn>
                      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8" style={{ lineHeight: '1.5' }}>
                        현장 중심의 지속 가능한 운영 지원<br />
                        위드네트웍스만의 방식입니다.
                      </h2>
                      <div className="text-gray-600 text-lg space-y-3" style={{ lineHeight: '1.8' }}>
                          <p>개원 이후, 병원이 안정적으로 성장하도록 지원합니다.</p>
                          <p>진료·원무·청구 흐름 점검 및 개선을 통해 효율성을 극대화합니다.</p>
                          <p>단발성 컨설팅이 아닌 지속적인 파트너십으로 함께 성장합니다.</p>
                      </div>
                  </FadeIn>
              </div>

              {/* Review Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {[
                      { text: "전문의가 직접 참여하여 개원 준비부터 함께해주셔서, 시행착오를 크게 줄일 수 있었습니다. 입지 분석부터 인테리어, 장비 선정까지 실전 경험을 바탕으로 조언해주셔서 안정적으로 개원할 수 있었습니다.", author: "C병원 박** 원장님" },
                      { text: "개원 이후에도 지속적으로 운영 컨설팅을 받고 있습니다. 진료·원무·청구 흐름을 체계적으로 점검해주시고, 매출 구조 분석을 통해 수익성을 개선할 수 있었습니다. 단발성이 아닌 지속적인 파트너십이 큰 도움이 됩니다.", author: "D병원 권** 원장님" },
                      { text: "CS 컨설팅를 통해 다른 병원들과 노하우를 공유하고, 공동 마케팅의 혜택도 받고 있습니다. 혼자가 아닌 네트워크로 성장한다는 것이 큰 힘이 됩니다.", author: "A병원 김** 원장님" },
                      { text: "인력 채용부터 교육까지 체계적으로 지원받아, 우수한 팀을 구성할 수 있었습니다. 직원들의 업무 적응도 빨라지고, 환자 만족도도 크게 향상되었습니다.", author: "B병원 최** 원장님" },
                  ].map((review, i) => (
                      <FadeIn key={i} delay={i*0.1}>
                          <div className="bg-gray-50 p-8 rounded-2xl h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                              <p className="text-gray-600 leading-relaxed text-sm mb-8 line-clamp-6" style={{ lineHeight: '1.8' }}>{review.text}</p>
                              <div>
                                  <p className="font-bold text-gray-400 text-sm mb-2">{review.author}</p>
                                  <div className="flex text-brand text-xs">★★★★★</div>
                              </div>
                          </div>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* ================= SUCCESS PORTFOLIO ================= */}
      <section className="py-24 xl:py-36 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-5 xl:px-20">
              <FadeIn>
                 <h2 className="text-4xl xl:text-5xl font-bold text-center mb-6">위드네트웍스 컨설팅 실적</h2>
                 <p className="text-center text-gray-600 text-lg mb-20" style={{ lineHeight: '1.8' }}>
                    다양한 진료과와 병·의원의 성공적인 개원과 운영을 지원하고 있습니다
                 </p>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { num: "150+", label: "누적 컨설팅", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop" },
                    { num: "95%", label: "고객 만족도", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" },
                    { num: "85%", label: "재계약률", img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2670&auto=format&fit=crop" },
                    { num: "24H", label: "상담 지원", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" }
                 ].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                       <div className="relative h-[300px] rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                          <img
                             src={item.img}
                             alt={item.label}
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                             <div className="text-6xl font-bold mb-3">{item.num}</div>
                             <div className="text-xl font-medium text-gray-200">{item.label}</div>
                          </div>
                       </div>
                    </FadeIn>
                 ))}
              </div>
          </div>
      </section>

      {/* ================= MANAGEMENT: SUPPORT CONSULTING ================= */}
      <section className="py-24 xl:py-36 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 xl:px-20 text-center">
            <FadeIn>
                <h2 className="text-4xl font-bold mb-12" style={{ lineHeight: '1.4' }}>위드네트웍스의 차별화 포인트</h2>
                <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-16" style={{ lineHeight: '1.8' }}>
                    전문의가 직접 참여하는 실전 컨설팅, 현장 중심의 지속 가능한 운영 지원,<br />
                    CS 컨설팅를 통한 공동 성장 시스템을 제공합니다.
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <Users className="w-12 h-12" />, title: "전문의 직접 참여", desc: "개원 경험을 가진 현직 의사가 직접 참여하여 실전 노하우 제공" },
                    { icon: <BarChart className="w-12 h-12" />, title: "데이터 기반 분석", desc: "진료·매출 구조 분석을 통한 맞춤형 솔루션 제공" },
                    { icon: <Building className="w-12 h-12" />, title: "네트워크 시스템", desc: "CS 컨설팅를 통한 공동 마케팅 및 노하우 공유" },
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="bg-[#F5F5F5] p-12 rounded-lg flex flex-col items-center justify-center min-h-[360px] hover:bg-gray-100 transition-colors">
                            <div className="mb-8 text-black">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-[250px] text-sm" style={{ lineHeight: '1.8' }}>{item.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* ================= HR CONSULTING BANNER ================= */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="HR Consulting" />
             <div className="absolute inset-0 bg-black/40"></div>
         </div>
         <div className="relative z-10 text-center text-white">
             <FadeIn>
                 <h2 className="text-4xl font-bold mb-6" style={{ lineHeight: '1.4' }}>인재 채용 & 교육</h2>
                 <p className="text-gray-300 text-lg" style={{ lineHeight: '1.8' }}>매출로 이어지는 재진율 관리의 핵심은 좋은 직원을 통한 매뉴얼 구축입니다.<br />병원에 적합한 인재를 선별하고 현장에서 바로 적용 가능한 교육 시스템을 제공합니다.</p>
             </FadeIn>
         </div>
      </section>

      {/* ================= OPERATION SUPPORT ================= */}
      <section className="py-24 xl:py-32 bg-white">
         <div className="max-w-[1440px] mx-auto px-5 xl:px-20 text-center">
             <FadeIn>
                 <h2 className="text-4xl font-bold mb-6" style={{ lineHeight: '1.4' }}>업무 프로세스</h2>
                 <p className="text-gray-600 text-lg mb-16" style={{ lineHeight: '1.8' }}>
                     병·의원의 시작부터 안정적인 성장까지 체계적으로 지원합니다.<br />
                     6단계 프로세스를 통해 성공적인 개원과 운영을 보장합니다.
                 </p>
             </FadeIn>

             <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 xl:gap-6">
                 {[
                     "입지\n분석", "자금\n계획", "브랜딩\n진료 컨셉", "마케팅\n전략", "인재 채용\n교육", "운영\n안정화"
                 ].map((title, i) => (
                     <FadeIn key={i} delay={i * 0.1}>
                         <div className="w-full aspect-square max-w-[200px] mx-auto rounded-full border border-teal-500 flex flex-col items-center justify-center p-4 hover:bg-brand/5 transition-colors duration-300 relative group">
                             <div className="text-teal-500 font-bold text-sm mb-3">0{i + 1}</div>
                             <div className="font-bold text-lg text-gray-800 text-center whitespace-pre-line leading-tight">{title}</div>
                         </div>
                     </FadeIn>
                 ))}
             </div>
         </div>
      </section>

      {/* ================= MANAGEMENT: RECRUIT & EDUCATION (Refined) ================= */}
      <section className="relative py-24 xl:py-36 bg-white overflow-hidden">
          {/* Banner Image Area */}
          <div className="w-full h-[300px] xl:h-[400px] relative overflow-hidden mb-20">
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" className="w-full h-full object-cover brightness-50" alt="Meeting" />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-5">
                 <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ lineHeight: '1.4' }}>인재 채용 & 교육</h2>
                 <p className="text-gray-200 text-lg max-w-4xl" style={{ lineHeight: '1.9' }}>
                    매출로 이어지는 재진율 관리의 핵심은 좋은 직원을 통한 매뉴얼 구축입니다.<br />
                    위드네트웍스는 병원에 적합한 인재를 선별하고 현장에서 바로 적용 가능한 교육 시스템을 제공합니다.<br />
                    병원의 첫인상은 결국 '사람'에서 완성되며, 함께 성장하는 팀을 만들어드립니다.
                 </p>
             </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-5 xl:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Recruitment Card */}
                  <FadeIn delay={0.2}>
                      <div className="bg-[#F8FBFD] border border-gray-100 rounded-3xl p-12 h-full relative overflow-hidden group">
                          <h3 className="text-3xl font-bold text-teal-500 mb-10">01. 채용지원</h3>
                          <ul className="space-y-6 text-gray-700 relative z-10">
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">채용공고 제작 및 주요 채용 플랫폼 업로드</span></li>
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">이력서 관리 및 면접 일정 조율</span></li>
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">면접 진행 어시스트 및 결과 공유</span></li>
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">근로계약서 작성 지원</span></li>
                          </ul>
                          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 transform translate-x-10 translate-y-10">
                              <PenTool className="w-full h-full text-teal-600" />
                          </div>
                      </div>
                  </FadeIn>

                  {/* Education Card */}
                  <FadeIn delay={0.4}>
                      <div className="bg-[#F8FBFD] border border-gray-100 rounded-3xl p-12 h-full relative overflow-hidden group">
                          <h3 className="text-3xl font-bold text-teal-500 mb-10">02. 교육지원</h3>
                          <ul className="space-y-6 text-gray-700 relative z-10">
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">신규 직원 및 관리자 대상 코칭 프로그램</span></li>
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">환자 응대 및 커뮤니케이션 중심 CS교육</span></li>
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">병원 내 서비스 매뉴얼 구축 및 실무 피드백</span></li>
                              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-1" /> <span className="text-lg">지속적인 직원 만족도 및 서비스 품질 관리</span></li>
                          </ul>
                          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 transform translate-x-4 translate-y-4">
                              <Users className="w-full h-full text-teal-600" />
                          </div>
                      </div>
                  </FadeIn>
              </div>
          </div>
      </section>

      {/* ================= CS CONSULTING ================= */}
      <section id="cs-consulting" className="py-24 xl:py-36 bg-white scroll-mt-20">
         <div className="max-w-[1440px] mx-auto px-5 xl:px-20">
             <FadeIn>
                 <div className="text-center mb-20">
                     <h2 className="text-4xl xl:text-5xl font-bold mb-8">CS 컨설팅 프로세스</h2>
                     <p className="text-gray-600 text-xl max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
                        체계적인 5단계 프로세스로 병원의 CS 수준을 향상시킵니다.<br />
                        상담부터 월간 점검까지, 지속적인 개선을 통해 환자 만족도와 재진율을 높입니다.
                     </p>
                 </div>
             </FadeIn>
             
             {/* Desktop Timeline - Redesigned to match reference with PROBLEM/SOLUTION */}
             <div className="hidden md:block relative">
                 {/* Icons and Titles Row */}
                 <div className="grid grid-cols-7 gap-4 mb-0">
                    <div></div>
                    {[
                        { icon: <Phone className="w-7 h-7 text-brand" />, title: "상담 및 니즈 파악" },
                        { icon: <Search className="w-7 h-7 text-brand" />, title: "초기 상담·진단" },
                        { icon: <Lightbulb className="w-7 h-7 text-brand" />, title: "개선안 제시 & 교육" },
                        { icon: <Building className="w-7 h-7 text-brand" />, title: "시스템 구축" },
                        { icon: <CheckCircle className="w-7 h-7 text-brand" />, title: "월간 점검·리포트" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="mb-2">{item.icon}</div>
                            <h4 className="font-bold text-gray-800 text-center text-sm leading-tight">{item.title}</h4>
                        </div>
                    ))}
                    <div></div>
                 </div>

                 {/* Timeline with dots */}
                 <div className="relative py-4">
                    <div className="absolute top-[calc(50%+10px)] left-0 w-full h-[2px] bg-gradient-to-r from-gray-200 via-brand to-gray-200"></div>
                    <div className="grid grid-cols-7 gap-4 relative z-10">
                        <div className="flex flex-col items-center justify-end">
                            <span className="text-gray-400 text-xs font-medium mb-2">START</span>
                            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        </div>
                        {[0,1,2,3,4].map((i) => (
                            <div key={i} className="flex flex-col items-center justify-end">
                                <div className="h-5"></div>
                                <div className="w-3 h-3 rounded-full bg-brand"></div>
                            </div>
                        ))}
                        <div className="flex flex-col items-center justify-end">
                            <span className="text-brand text-xs font-medium mb-2">END</span>
                            <div className="w-3 h-3 rounded-full bg-brand"></div>
                        </div>
                    </div>
                 </div>

                 {/* PROBLEM Row */}
                 <div className="grid grid-cols-7 gap-4 mt-6">
                    <div className="flex items-start justify-end pr-4 pt-4">
                        <span className="text-gray-400 text-xs font-bold tracking-wider">PROBLEM</span>
                    </div>
                    {[
                        "병원 규모와 인력에 맞는\n서비스 방향 미설정",
                        "청구 흐름 파악 어려움\n누락·삭감 원인 불명확",
                        "CS 교육 체계 부재\n직원별 서비스 편차",
                        "표준화된 프로세스 없이\n비효율적 운영",
                        "성과 측정 기준 부재\n개선점 파악 어려움",
                    ].map((problem, i) => (
                        <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2">
                                <span className="text-gray-500 text-xs">!</span>
                            </div>
                            <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">{problem}</p>
                        </div>
                    ))}
                    <div></div>
                 </div>

                 {/* SOLUTION Row */}
                 <div className="grid grid-cols-7 gap-4 mt-4">
                    <div className="flex items-start justify-end pr-4 pt-4">
                        <span className="text-brand text-xs font-bold tracking-wider">SOLUTION</span>
                    </div>
                    {[
                        "병원 규모·인력 구성 분석\n맞춤 서비스 방향 설계",
                        "현 청구 흐름 점검\n누락/삭감 원인 확인·개선",
                        "체계적 개선안 제시\n체크리스트/교육 제공",
                        "시스템/프로세스 구축\n운영 안정화 지원",
                        "월간 점검·성과 리포트\n지속적 개선 제안",
                    ].map((solution, i) => (
                        <div key={i} className="bg-brand rounded-xl p-4 text-center">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-xs text-white whitespace-pre-line leading-relaxed">{solution}</p>
                        </div>
                    ))}
                    <div></div>
                 </div>
             </div>

             {/* Mobile Vertical Timeline */}
             <div className="md:hidden flex flex-col gap-0 border-l-2 border-gray-200 ml-4 pl-8 py-4">
                 {[
                        {
                           step: "상담 및 니즈 파악",
                           desc: "병원 규모·인력 구성·서비스 방향 파악",
                           icon: <Phone className="w-5 h-5" />
                        },
                        {
                           step: "초기 상담·진단",
                           desc: "현 청구 흐름 점검·누락/삭감 원인 확인",
                           icon: <Search className="w-5 h-5" />
                        },
                        {
                           step: "개선안 제시 & 교육",
                           desc: "개선안 제시·체크리스트/교육 제공",
                           icon: <Lightbulb className="w-5 h-5" />
                        },
                        {
                           step: "시스템 구축",
                           desc: "시스템/프로세스 구축·운영 안정화",
                           icon: <Building className="w-5 h-5" />
                        },
                        {
                           step: "월간 점검·리포트",
                           desc: "월간 점검·성과 리포트·지속 개선 제안",
                           icon: <CheckCircle className="w-5 h-5" />
                        },
                 ].map((item, i) => (
                     <div key={i} className="relative pb-10 last:pb-0">
                         <div className="absolute -left-[37px] top-0 w-3 h-3 rounded-full bg-brand"></div>
                         <div className="flex items-center gap-3 mb-3">
                            <span className="text-brand">{item.icon}</span>
                            <h4 className="font-bold text-lg text-gray-800">{item.step}</h4>
                         </div>
                         <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
                             {item.desc}
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>


      {/* ================= MARKETING SERVICES ================= */}
      <section id="marketing" className="py-24 xl:py-36 bg-gray-50 scroll-mt-20">
         <div className="max-w-[1440px] mx-auto px-5 xl:px-20">
            <FadeIn>
               <h2 className="text-4xl xl:text-5xl font-bold text-center mb-6">마케팅 서비스</h2>
               <p className="text-center text-gray-600 text-lg mb-20" style={{ lineHeight: '1.8' }}>
                  병원 성장을 위한 종합 마케팅 솔루션을 제공합니다
               </p>
            </FadeIn>

            {/* 온라인 & 오프라인 마케팅 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
               <FadeIn>
                  <div className="group relative h-[400px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                     <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                        alt="온라인 마케팅"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                        <h3 className="text-3xl font-bold mb-4">온라인 마케팅</h3>
                        <p className="text-gray-200 text-base mb-6 leading-relaxed">
                           검색엔진 최적화, SNS 마케팅, 온라인 광고를 통한 디지털 마케팅 전략
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300">
                           <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-brand" />
                              네이버·구글 검색 최적화
                           </li>
                           <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-brand" />
                              SNS(인스타그램·페이스북) 운영 및 광고
                           </li>
                           <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-brand" />
                              블로그·카페 마케팅
                           </li>
                        </ul>
                     </div>
                  </div>
               </FadeIn>

               <FadeIn delay={0.1}>
                  <div className="group relative h-[400px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                     <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                        alt="오프라인 마케팅"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                        <h3 className="text-3xl font-bold mb-4">오프라인 마케팅</h3>
                        <p className="text-gray-200 text-base mb-6 leading-relaxed">
                           지역 밀착형 오프라인 홍보를 통한 인지도 향상 및 신환 유입
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300">
                           <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-brand" />
                              지역 커뮤니티 마케팅
                           </li>
                           <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-brand" />
                              전단지·배너 등 인쇄물 제작 및 배포
                           </li>
                           <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-brand" />
                              제휴 프로그램 운영
                           </li>
                        </ul>
                     </div>
                  </div>
               </FadeIn>
            </div>

            {/* 디자인, 영상편집, 언론홍보 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <FadeIn delay={0.2}>
                  <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                     <img
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop"
                        alt="디자인"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">디자인</h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                           병원 브랜드 아이덴티티를 반영한 전문 디자인 서비스
                        </p>
                        <ul className="space-y-1.5 text-xs text-gray-300">
                           <li>• 로고·브랜딩 디자인</li>
                           <li>• 홍보물 디자인</li>
                           <li>• 웹·모바일 UI/UX</li>
                           <li>• 간판·사인물 디자인</li>
                        </ul>
                     </div>
                  </div>
               </FadeIn>

               <FadeIn delay={0.3}>
                  <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                     <img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop"
                        alt="영상편집"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">영상 편집</h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                           전문 영상 제작으로 병원의 신뢰도와 전문성 강화
                        </p>
                        <ul className="space-y-1.5 text-xs text-gray-300">
                           <li>• 병원 홍보 영상 제작</li>
                           <li>• 의료진 소개 영상</li>
                           <li>• SNS용 숏폼 콘텐츠</li>
                           <li>• 환자 후기 영상</li>
                        </ul>
                     </div>
                  </div>
               </FadeIn>

               <FadeIn delay={0.4}>
                  <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                     <img
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop"
                        alt="언론홍보"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">언론 홍보</h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                           메이저 방송·언론사와의 연계를 통한 신뢰도 구축
                        </p>
                        <ul className="space-y-1.5 text-xs text-gray-300">
                           <li>• 언론 보도자료 배포</li>
                           <li>• 방송 출연 섭외</li>
                           <li>• 전문가 인터뷰 진행</li>
                           <li>• 온라인 기사 게재</li>
                        </ul>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 py-20 pb-32 xl:pb-20 text-xs md:text-sm text-gray-500">
          <div className="max-w-[1440px] mx-auto px-5 xl:px-20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-10 border-b border-gray-200">
                  <div className="font-bold text-2xl text-gray-800 mb-4 md:mb-0">위드네트웍스</div>
                  <div className="flex gap-6">
                      <a href="#" className="hover:text-brand">이용약관</a>
                      <a href="#" className="hover:text-brand font-bold text-gray-700">개인정보처리방침</a>
                      <a href="#" className="hover:text-brand">오시는 길</a>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                      <p>상호명: ㈜위드네트웍스 | 대표자: 홍길동</p>
                      <p>사업자등록번호: 123-45-67890</p>
                      <p>주소: 서울특별시 강남구 테헤란로 123, 위드네트웍스 빌딩 4층</p>
                  </div>
                  <div className="space-y-2 md:text-right">
                      <p>고객센터: 02-1234-5678</p>
                      <p>이메일: help@withnetworks.co.kr</p>
                      <p>Copyright © 2024 위드네트웍스. All rights reserved.</p>
                  </div>
              </div>
          </div>
      </footer>

      {/* ================= FIXED BOTTOM BAR ================= */}
      
      {/* 1. Mobile & Tablet Only (Sticky Bottom) */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-brand text-white py-4 px-5 flex justify-between items-center xl:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
         <div>
            <div className="text-[10px] opacity-80 mb-0.5">평일 공휴일 야간 24시 상담가능</div>
            <div className="font-bold text-lg">010-0000-0000</div>
         </div>
         <a href="tel:010-6419-7861" className="bg-white text-brand px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm flex items-center gap-2">
           <Phone className="w-4 h-4" /> 전화상담
         </a>
      </div>
      
      {/* 2. Desktop Full Width Bar (New Design) */}
      <div className="hidden xl:flex fixed bottom-0 left-0 w-full z-50 bg-brand text-white h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] items-center justify-between px-20">
         <div className="flex items-center gap-6">
             <div className="bg-[#FFD700] text-black px-5 py-1.5 rounded-full font-bold text-sm shadow-sm">
                평일·공휴일·야간 24시 상담가능
             </div>
             <div className="flex items-center gap-3">
                 <Phone className="w-6 h-6" />
                 <div className="text-3xl font-bold tracking-wide">
                    010-0000-0000
                 </div>
             </div>
         </div>
         
         <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 mr-4">
                 <div className="bg-white rounded p-0.5">
                    <Check className="w-3 h-3 text-brand" strokeWidth={4} />
                 </div>
                 <span className="text-sm font-medium opacity-90">개인정보 수집·이용 동의</span>
             </div>
             <input type="text" placeholder="이름" className="bg-white text-gray-800 placeholder-gray-400 px-4 py-2.5 rounded w-40 text-sm focus:outline-none" />
             <input type="text" placeholder="전화번호" className="bg-white text-gray-800 placeholder-gray-400 px-4 py-2.5 rounded w-48 text-sm focus:outline-none" />
             <button className="bg-black text-white px-8 py-2.5 rounded font-bold hover:bg-gray-900 transition-colors text-sm">
                상담신청
             </button>
         </div>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-24 right-5 xl:bottom-28 xl:right-10 z-40 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:-translate-y-1 transition-all group"
        >
          <ArrowUp className="w-6 h-6 text-gray-600 group-hover:text-brand" />
        </button>
      )}

    </div>
  );
}