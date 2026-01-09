import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Leaf, 
  TreePine, 
  Mountain, 
  Shield, 
  FileText, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X,
  Star,
  Globe,
  Target,
  TrendingUp,
  Clock,
  Building,
  Briefcase,
  ChevronDown,
  Zap,
  Heart,
  Lightbulb,
  Camera,
  Image,
  Sparkles,
  BadgeCheck,
  Rocket,
  Users2,
  Telescope,
  Handshake,
  Landmark,
  ClipboardCheck,
  LineChart,
  Settings,
  MessageCircle,
  HelpCircle,
  Plus,
  Minus,
  ExternalLink,
  MapPinned
} from 'lucide-react';

function App() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [activeWhoWeAreSection, setActiveWhoWeAreSection] = useState<'about' | 'culture' | 'accreditations'>('about');
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [activeWhatWeDoSection, setActiveWhatWeDoSection] = useState<'environmental' | 'legal' | 'waste' | 'health' | 'social'>('environmental');
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    certifications: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 500, clients: 200, experience: 9, certifications: 15 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCounters({
          projects: Math.floor(targets.projects * easeOut),
          clients: Math.floor(targets.clients * easeOut),
          experience: Math.floor(targets.experience * easeOut),
          certifications: Math.floor(targets.certifications * easeOut)
        });
        
        if (step >= steps) clearInterval(timer);
      }, stepDuration);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      icon: <Leaf className="w-8 h-8" />, 
      title: "Environmental Clearance", 
      description: "Complete environmental compliance and clearance services with expert guidance through regulatory processes",
      features: ["EIA Studies", "Public Consultation", "Compliance Monitoring"]
    },
    { 
      icon: <TreePine className="w-8 h-8" />, 
      title: "Forest Clearance", 
      description: "Forest land diversion and clearance consultation with comprehensive documentation support",
      features: ["Forest Diversion", "Compensatory Afforestation", "Working Plans"]
    },
    { 
      icon: <Mountain className="w-8 h-8" />, 
      title: "Wildlife Clearance", 
      description: "Wildlife impact assessment and clearance services ensuring ecological balance",
      features: ["Wildlife Assessment", "Habitat Evaluation", "Mitigation Planning"]
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: "Post Environment Monitoring", 
      description: "Comprehensive monitoring and compliance reports for ongoing environmental management",
      features: ["Compliance Reports", "Environmental Audits", "Monitoring Systems"]
    },
    { 
      icon: <Leaf className="w-8 h-8" />, 
      title: "Biodiversity Assessment", 
      description: "Biodiversity impact assessment and park design with scientific methodology",
      features: ["Species Surveys", "Habitat Mapping", "Conservation Planning"]
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Mines Safety & Blasting", 
      description: "Mining safety permissions and blasting approvals with regulatory compliance",
      features: ["Safety Protocols", "Blast Designs", "Risk Assessment"]
    }
  ];

  const additionalServices = [
    "ETP, STP Designing & Installation",
    "Scientific Greenbelt Development Plan",
    "Contour Stabilization of Dumps by Plantation",
    "Digital Mapping with GIS Software",
    "Mining Plan & CGWA Clearance",
    "Social Impact Assessment",
    "Landscape Designing",
    "Environmental Management Plans"
  ];

  const features = [
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "Complete Solution Under One Roof",
      description: "End-to-end environmental consultancy services"
    },
    { 
      icon: <Lightbulb className="w-6 h-6" />, 
      title: "Sustainable Ideas & Implementation",
      description: "Innovative approaches to environmental challenges"
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "Global Standards & Existence",
      description: "International quality standards and practices"
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Customized Environmental Solutions",
      description: "Tailored solutions for specific project needs"
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Efficient & Cost Effective Services",
      description: "Optimized processes for maximum value"
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "Easy to Approach & Professional",
      description: "Client-focused service with professional excellence"
    }
  ];

  const teamMembers = [
    {
      name: "Mr. AB Raizada",
      qualification: "Retd. DFO, Advisor & Consultant",
      expertise: "Forests & Wildlife Clearance, BIA, Forest Diversion, Eco-village development, EMP",
      experience: "25+ Years"
    },
    {
      name: "Mr. NK Saxena", 
      qualification: "RQP & Retd. Mining Engineer",
      expertise: "DGMS permission, Mines Safety, Mining Plan",
      experience: "20+ Years"
    },
    {
      name: "Mr. DP Tiwari",
      qualification: "Retd. DCF, Former Deputy Manager",
      expertise: "Bio Resource & System MPSBB, Former State Coordinator UNDP",
      experience: "22+ Years"
    },
    {
      name: "Mr. Dushyant Sharma",
      qualification: "Chief Functionary",
      expertise: "MSc. Environment Science, MBA Env. Sc., 6+ years in EIA, Corporate Environment Audit",
      experience: "6+ Years"
    },
    {
      name: "Ms. Rupal Raizada",
      qualification: "Chief Technical Officer", 
      expertise: "MSc. Zoology & Geography, EIA, Biodiversity Assessment, Wildlife & Forest Clearance",
      experience: "8+ Years"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Mining Corp Ltd.",
      text: "TM Enviro Group provided exceptional environmental clearance services. Their expertise and professionalism made the entire process smooth and efficient.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Green Industries",
      text: "Outstanding biodiversity assessment services. The team's attention to detail and scientific approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Infrastructure Developers",
      text: "Reliable and professional service for forest clearance. TM Enviro's expertise saved us significant time and resources.",
      rating: 5
    }
  ];

  const certifications = [
    { title: "ISO 9001:2015", description: "Quality Management System" },
    { title: "MSME Registration", description: "Micro, Small & Medium Enterprise" },
    { title: "IBM Certification", description: "Indian Bureau of Mines" },
    { title: "GST Registration", description: "Service Tax & GST" },
    { title: "RSBB Recognition", description: "Rajasthan State Biodiversity Board" },
    { title: "JAS-ANZ Accredited", description: "Australia & New Zealand Standards" }
  ];

  const projectGallery = [
    {
      title: "Forest Conservation Project",
      category: "Forest Management",
      location: "Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      description: "Large-scale reforestation initiative"
    },
    {
      title: "Wildlife Habitat Assessment",
      category: "Biodiversity",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
      description: "Comprehensive wildlife corridor study"
    },
    {
      title: "Mining Environmental Clearance",
      category: "Mining",
      location: "Jharkhand",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
      description: "Complete EIA and clearance services"
    },
    {
      title: "Urban Greenbelt Development",
      category: "Urban Planning",
      location: "Delhi NCR",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      description: "Scientific landscape planning"
    },
    {
      title: "Water Treatment Facility",
      category: "Environmental Tech",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80",
      description: "ETP/STP design and implementation"
    },
    {
      title: "Biodiversity Park Design",
      category: "Conservation",
      location: "Karnataka",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
      description: "Ecological park development"
    }
  ];

  const processSteps = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Initial Consultation",
      description: "Understanding your project requirements and environmental challenges"
    },
    {
      icon: <Telescope className="w-6 h-6" />,
      title: "Site Assessment",
      description: "Comprehensive on-site evaluation and data collection"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Planning & Strategy",
      description: "Developing customized environmental management plans"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Documentation",
      description: "Preparing detailed reports and compliance documentation"
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Clearance Support",
      description: "Assisting through regulatory approval processes"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Monitoring & Compliance",
      description: "Ongoing environmental monitoring and reporting"
    }
  ];

  const achievements = [
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "500+",
      title: "Projects Completed",
      description: "Successfully delivered across India"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      number: "200+",
      title: "Happy Clients",
      description: "Trusted by leading organizations"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      title: "Certifications",
      description: "Industry-recognized accreditations"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      number: "9+",
      title: "Years of Excellence",
      description: "Expertise since 2015"
    }
  ];

  const faqs = [
    {
      question: "What is Environmental Clearance (EC) and why is it required?",
      answer: "Environmental Clearance is a mandatory approval from the Ministry of Environment, Forest and Climate Change (MoEFCC) required for setting up new projects or expansion of existing projects. It ensures that the project is environmentally sustainable and complies with environmental regulations."
    },
    {
      question: "How long does the environmental clearance process take?",
      answer: "The timeline varies depending on the project category. Typically, Category A projects take 210 days, while Category B projects take 105 days from the date of submission of complete application. However, the actual timeline may vary based on project complexity and regulatory requirements."
    },
    {
      question: "What services does TM Enviro Group provide?",
      answer: "We provide comprehensive environmental consultancy services including Environmental Clearance, Forest Clearance, Wildlife Clearance, Biodiversity Assessment, Post Environment Monitoring, Mining Safety & Blasting permissions, ETP/STP design, and more. We offer end-to-end solutions for all your environmental compliance needs."
    },
    {
      question: "Do you provide services pan-India?",
      answer: "Yes, we provide our environmental consultancy services across India. Our team has successfully completed projects in multiple states and has expertise in dealing with various state and central regulatory authorities."
    },
    {
      question: "What documents are required for Environmental Impact Assessment (EIA)?",
      answer: "Key documents include project details, site location maps, baseline environmental data (air, water, soil, biodiversity), environmental management plan, risk assessment, and public consultation reports. Our team will guide you through the complete documentation process."
    },
    {
      question: "How much do your services cost?",
      answer: "The cost varies depending on the type and complexity of the project, scope of work, and timeline. We provide customized quotations after understanding your specific requirements. Contact us for a detailed consultation and proposal."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Leaf className="w-8 h-8 text-emerald-600 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 w-8 h-8 bg-emerald-600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <span className="font-bold text-xl text-gray-900">TM Enviro Group</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-16">
              {/* WHO WE ARE with Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsWhoWeAreOpen(true)}
                onMouseLeave={() => setIsWhoWeAreOpen(false)}
              >
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-500 hover:text-gray-900 transition-all duration-300 relative py-2 text-sm font-normal tracking-wider uppercase flex items-center space-x-1"
                >
                  <span>WHO WE ARE</span>
                  <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-6xl bg-white shadow-2xl transition-all duration-300 ${isWhoWeAreOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'} z-50`}>
                  <div className="flex">
                    {/* Left Sidebar Navigation */}
                    <div className="w-56 bg-white py-8 px-5 border-r border-gray-200">
                      <div className="mb-6">
                        <h3 className="text-lg font-light text-gray-700 tracking-wide">Who We Are</h3>
                      </div>
                      
                      <nav className="space-y-0">
                        <button 
                          onClick={() => setActiveWhoWeAreSection('about')}
                          className={`w-full text-left border-l-4 ${activeWhoWeAreSection === 'about' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhoWeAreSection === 'about' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            ABOUT US
                          </div>
                        </button>
                        
                        <button 
                          onClick={() => setActiveWhoWeAreSection('culture')}
                          className={`w-full text-left border-l-4 ${activeWhoWeAreSection === 'culture' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhoWeAreSection === 'culture' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            CULTURE
                          </div>
                        </button>
                        
                        <button 
                          onClick={() => setActiveWhoWeAreSection('accreditations')}
                          className={`w-full text-left border-l-4 ${activeWhoWeAreSection === 'accreditations' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhoWeAreSection === 'accreditations' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            ACCREDITATIONS AND AWARDS
                          </div>
                        </button>
                      </nav>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 py-8 px-10">
                      {/* About Us Content */}
                      {activeWhoWeAreSection === 'about' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">About Us</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              <span className="font-medium">TM Enviro Consultancy Services (TECS):</span> 9+ Years of Pioneering 
                              Environmental Excellence, cultivating sustainability from industry leaders to environmental powerhouse. 
                              TM Enviro was envisioned as a pioneer in the Field of environment and Sustainability in the year 2015. 
                              With the introduction of Environment protection Laws, our dynamic team became the flag bearer of 
                              Environment Compliance in the industrial sector of India. TM Enviro Consultancy Services has alw...
                            </p>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>DISCOVER MORE</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80" 
                                alt="TM Enviro Team"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Culture Content */}
                      {activeWhoWeAreSection === 'culture' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Culture</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              At TM Enviro, our culture is built on the foundation of innovation, integrity, and sustainability. 
                              We believe in creating an environment where every team member is empowered to contribute their best 
                              towards environmental excellence. Our collaborative approach fosters creativity and continuous improvement.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              We are committed to maintaining a workplace that values diversity, encourages professional growth, 
                              and promotes work-life balance. Our team-oriented culture ensures that we deliver exceptional results 
                              while maintaining the highest standards of environmental responsibility and client satisfaction.
                            </p>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>LEARN MORE</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" 
                                alt="TM Enviro Culture"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Accreditations Content */}
                      {activeWhoWeAreSection === 'accreditations' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Accreditations and Awards</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              TM Enviro Consultancy Services is proud to be ISO 9001:2015 certified, demonstrating our commitment 
                              to quality management and continuous improvement. Our certifications reflect our dedication to 
                              maintaining the highest industry standards in environmental consulting and compliance services.
                            </p>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3"></div>
                                <p className="text-gray-600 text-base">ISO 9001:2015 Quality Management System Certification</p>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3"></div>
                                <p className="text-gray-600 text-base">NABL Accredited Environmental Testing Laboratory</p>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3"></div>
                                <p className="text-gray-600 text-base">MoEFCC Approved Consultant</p>
                              </div>
                            </div>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>VIEW CERTIFICATES</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500&q=80" 
                                alt="TM Enviro Certifications"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* What We Do - with dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsWhatWeDoOpen(true)}
                onMouseLeave={() => setIsWhatWeDoOpen(false)}
              >
                <button className="text-gray-500 hover:text-gray-900 transition-all duration-300 relative py-2 text-sm font-normal tracking-wider uppercase flex items-center space-x-1">
                  <span>WHAT WE DO</span>
                  <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-6xl bg-white shadow-2xl transition-all duration-300 ${isWhatWeDoOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'} z-50`}>
                  <div className="flex">
                    {/* Left Sidebar Navigation */}
                    <div className="w-56 bg-white py-8 px-5 border-r border-gray-200">
                      <div className="mb-6">
                        <h3 className="text-lg font-light text-gray-700 tracking-wide">What We Do</h3>
                      </div>
                      
                      <nav className="space-y-0">
                        <button 
                          onClick={() => setActiveWhatWeDoSection('environmental')}
                          className={`w-full text-left border-l-4 ${activeWhatWeDoSection === 'environmental' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhatWeDoSection === 'environmental' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            ENVIRONMENTAL SERVICES
                          </div>
                        </button>
                        
                        <button 
                          onClick={() => setActiveWhatWeDoSection('legal')}
                          className={`w-full text-left border-l-4 ${activeWhatWeDoSection === 'legal' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhatWeDoSection === 'legal' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            LEGAL COMPLIANCES
                          </div>
                        </button>
                        
                        <button 
                          onClick={() => setActiveWhatWeDoSection('waste')}
                          className={`w-full text-left border-l-4 ${activeWhatWeDoSection === 'waste' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhatWeDoSection === 'waste' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            WASTE MANAGEMENT
                          </div>
                        </button>

                        <button 
                          onClick={() => setActiveWhatWeDoSection('health')}
                          className={`w-full text-left border-l-4 ${activeWhatWeDoSection === 'health' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhatWeDoSection === 'health' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            HEALTH & SAFETY
                          </div>
                        </button>

                        <button 
                          onClick={() => setActiveWhatWeDoSection('social')}
                          className={`w-full text-left border-l-4 ${activeWhatWeDoSection === 'social' ? 'border-gray-800 bg-gray-50' : 'border-transparent hover:border-gray-400 hover:bg-gray-50'} pl-3 pr-2 py-3 transition-all duration-200`}
                        >
                          <div className={`font-normal text-xs uppercase tracking-widest ${activeWhatWeDoSection === 'social' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            SOCIAL PERFORMANCE
                          </div>
                        </button>
                      </nav>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 py-8 px-10">
                      {/* Environmental Services Content */}
                      {activeWhatWeDoSection === 'environmental' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Environmental Services</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Safeguarding Our Planet, Project by Project. For over 9 years, TM Enviro Consultancy Services 
                              has been a leading force in environmental engineering and solutions. We're driven by a deep 
                              commitment to protecting our planet, providing comprehensive services that minimize environmental 
                              impact and pave the way for sustainable development.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Our team of expert environmental engineers, scientists, and social specialists brings unparalleled 
                              knowledge and experience to every project. We collaborate closely with clients to deliver 
                              innovative environmental solutions.
                            </p>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>DISCOVER MORE</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80" 
                                alt="Environmental Services"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Legal Compliances Content */}
                      {activeWhatWeDoSection === 'legal' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Legal Compliances</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Navigating the complex landscape of environmental regulations and compliance requirements. 
                              Our legal compliance services ensure that your organization meets all statutory and regulatory 
                              obligations related to environmental protection, waste management, and sustainability.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              We provide comprehensive support in obtaining necessary clearances, permits, and approvals 
                              from regulatory authorities. Our team stays updated with the latest environmental laws and 
                              regulations to keep your operations compliant.
                            </p>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>LEARN MORE</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80" 
                                alt="Legal Compliances"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Waste Management Content */}
                      {activeWhatWeDoSection === 'waste' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Waste Management</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Comprehensive waste management solutions designed to minimize environmental impact and maximize 
                              resource recovery. We provide end-to-end waste management services including collection, 
                              segregation, treatment, and disposal of all types of waste streams.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Our integrated approach focuses on waste reduction, recycling, and circular economy principles. 
                              We help organizations implement sustainable waste management practices while ensuring compliance 
                              with hazardous and non-hazardous waste regulations.
                            </p>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>EXPLORE SOLUTIONS</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&q=80" 
                                alt="Waste Management"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Health & Safety Content */}
                      {activeWhatWeDoSection === 'health' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Health & Safety</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Creating safer workplaces through comprehensive occupational health and safety programs. 
                              We conduct risk assessments, develop safety management systems, and provide training to 
                              ensure a culture of safety across your organization.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Our health and safety services include industrial hygiene assessments, emergency preparedness 
                              planning, safety audits, and compliance with OSHS standards. We help prevent workplace 
                              incidents and promote employee well-being.
                            </p>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>VIEW SERVICES</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80" 
                                alt="Health & Safety"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Social Performance Content */}
                      {activeWhatWeDoSection === 'social' && (
                        <div className="flex gap-8">
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Social Performance</h2>
                            
                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Building sustainable relationships with communities and stakeholders through effective social 
                              performance management. We help organizations understand and address social impacts, engage 
                              with local communities, and create shared value.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-base mb-4">
                              Our social performance services include social impact assessments, stakeholder engagement 
                              programs, corporate social responsibility initiatives, and community development projects. 
                              We ensure sustainable development that benefits both business and society.
                            </p>

                            <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded hover:bg-gray-200 transition-all duration-200 font-normal text-sm uppercase tracking-widest">
                              <span>READ MORE</span>
                            </button>
                          </div>

                          <div className="w-96">
                            <div className="relative overflow-hidden rounded shadow-lg group h-64">
                              <img 
                                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&q=80" 
                                alt="Social Performance"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Menu Items */}
              {[
                { label: 'EVENTS', section: 'gallery' },
                { label: 'CASE STUDIES', section: 'team' },
                { label: 'CONTACT', section: 'contact' }
              ].map((item) => (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.section)} 
                  className="text-gray-500 hover:text-gray-900 transition-all duration-300 relative group py-2 text-sm font-normal tracking-wider uppercase"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 py-4 border-t' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-3">
              {[
                { label: 'WHO WE ARE', section: 'about' },
                { label: 'WHAT WE DO', section: 'services' },
                { label: 'EVENTS', section: 'gallery' },
                { label: 'CASE STUDIES', section: 'team' },
                { label: 'CONTACT', section: 'contact' }
              ].map((item, index) => (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.section)} 
                  className="text-left text-gray-600 hover:text-gray-900 transition-all duration-300 py-2 hover:pl-4 text-sm font-medium tracking-wide"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/background .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-20 w-full">
          <div className="text-center max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="animate-fade-in-up mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/30">
                <BadgeCheck className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">ISO 9001:2015 Certified</span>
                <span className="text-white/60">•</span>
                <span className="text-sm font-medium text-white">Trusted Since 2015</span>
              </div>
            </div>

            {/* Main Tagline */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Pioneering Environmental 
                <span className="text-emerald-400 relative block md:inline">
                  Stewardship
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl mt-2">
                  for a Sustainable Tomorrow
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                TM Enviro Consultancy Services (TECS) - Your trusted partner for complete Environment, 
                Forests & Wildlife sector solutions. Leading India towards environmental excellence since 2015.
              </p>
            </div>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group backdrop-blur-sm"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-2 group backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group border border-white/20">
                <Clock className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-white">9+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group border border-white/20">
                <Rocket className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group border border-white/20">
                <Users2 className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group border border-white/20">
                <Award className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/80">Certifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-6 h-6 text-white/80" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Environmental Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert consultancy services tailored to meet your regulatory and compliance needs with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="text-emerald-600">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full inline-flex items-center justify-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Specialized Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition-all duration-300 hover:shadow-md"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-emerald-100">Delivering excellence across environmental consultancy</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.projects}+
                </div>
                <div className="text-emerald-100">Projects Completed</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.clients}+
                </div>
                <div className="text-emerald-100">Satisfied Clients</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.experience}+
                </div>
                <div className="text-emerald-100">Years Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.certifications}+
                </div>
                <div className="text-emerald-100">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to deliver exceptional environmental consultancy services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-emerald-500"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="mt-4">
                  <div className="text-emerald-600 mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-emerald-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Special Features of Our Services</h2>
            <p className="text-xl text-gray-600">What makes our environmental consultancy services stand out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-emerald-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Image className="w-4 h-4" />
              <span>Our Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our successful environmental consultancy projects across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectGallery.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 h-80"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-flex items-center space-x-1 bg-emerald-600/80 text-white px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                    <MapPinned className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-emerald-300 text-sm mb-2">{project.category}</p>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <button className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                <Building className="w-4 h-4" />
                <span>About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">TM Enviro Group - Environmental Excellence Since 2015</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  M/s TM Enviro Consultancy Services (TECS) is a reputed environment consultancy established in 2015, 
                  offering complete Environment, Forests & Wildlife sector solutions & services.
                </p>
                <p className="leading-relaxed">
                  Inspired by "Tadkeshwar Mahadev" (T.M) - an incarnation of Lord Shiva, the company adopted its name. 
                  TM Enviro is an accredited professional services organization providing numerous technical environmental 
                  services throughout India.
                </p>
                <p className="leading-relaxed">
                  The Company has achieved successful completion of projects with the best environmental solutions 
                  in our journey of excellence, maintaining the highest standards of quality and professionalism.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">9+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Registration</h3>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Award className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">{cert.title}</div>
                        <div className="text-sm text-gray-600">{cert.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Our Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Excellence in Numbers</h2>
            <p className="text-xl text-emerald-100">Delivering impact through dedicated environmental solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-white mb-2">{achievement.title}</div>
                <div className="text-emerald-100 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Handshake className="w-5 h-5" />
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations across industries</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-200/30 rounded-full -translate-y-10 -translate-x-10"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</div>
                  <div className="text-emerald-600">{testimonials[activeTestimonial].company}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-emerald-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Team Members</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to environmental excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Profile Image Placeholder */}
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Users className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 text-sm font-semibold mb-3">{member.qualification}</p>
                  
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{member.expertise}</p>
                  </div>

                  {/* Social Links Placeholder */}
                  <div className="flex items-center space-x-3">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-300 group/link">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-300 group/link">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-300 group/link">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {activeFAQ === index ? (
                      <Minus className="w-5 h-5 text-emerald-600 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">Our team is here to help you with any inquiries about our environmental consultancy services.</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Our Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your environmental consultancy needs? Contact us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Registered & Corporate Office</h3>
                  <p className="text-gray-600">
                    51, Lt. Amit Bharadwaj Marg, Near UDB Corporate Tower, 
                    JLN Marg, Jaipur - 302 017 (Rajasthan)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+91 8003872 990/805</p>
                  <p className="text-gray-600">+91 9166660050</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">tmenviron@gmail.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300">
                    <option>Select a service</option>
                    <option>Environmental Clearance</option>
                    <option>Forest Clearance</option>
                    <option>Wildlife Clearance</option>
                    <option>Biodiversity Assessment</option>
                    <option>Mining Safety & Blasting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 group">
              <Leaf className="w-8 h-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold">TM Enviro Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Leading Environmental Consultancy Services • Est. 2015 • ISO 9001:2015 Certified
              <br />
              Your trusted partner for sustainable environmental solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm mb-8">
              <span className="hover:text-emerald-400 transition-colors duration-300">Environmental Clearance</span>
              <span>•</span>
              <span className="hover:text-emerald-400 transition-colors duration-300">Forest Consultation</span>
              <span>•</span>
              <span className="hover:text-emerald-400 transition-colors duration-300">Wildlife Assessment</span>
              <span>•</span>
              <span className="hover:text-emerald-400 transition-colors duration-300">Biodiversity Studies</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">
                © 2025 TM Enviro Consultancy Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;