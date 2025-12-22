import React, { useState, useEffect } from 'react';
import { 
  FaCode, 
  FaDownload, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaFilePdf,
  FaLaptopCode,
  FaPalette,
  FaDatabase,
  FaRobot,
  FaChartLine,
  FaShoppingCart,
  FaLeaf,
  FaGraduationCap,
  FaBuilding,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCheck,
  FaSpinner,
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCloud,
  FaMobileAlt,
  FaShieldAlt,
  FaAws,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaMapMarkedAlt,
  FaGitAlt,
  FaDatabase as FaMongoDb
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiC,
  SiRedux,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiBert,
  SiTransformers,
  SiTkinter
} from 'react-icons/si';
import { GiProcessor } from 'react-icons/gi';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  if (submitStatus?.type === 'success') {
    const timer = setTimeout(() => {
      setSubmitStatus(null);
    }, 2000); 

    return () => clearTimeout(timer);
  }
}, [submitStatus]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact', 'experience'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await mockSubmitToBackend(formData);
      
      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mockSubmitToBackend = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Message received:', data);
        resolve({ success: true });
      }, 1500);
    });
  };

  const handleResumeDownload = () => {
  if (isDownloading) return;
  
  setIsDownloading(true);
  setDownloadProgress(0);
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    setDownloadProgress(progress);
    
    if (progress >= 100) {
      clearInterval(interval);
      const resumeUrl = '/resume/Debhora_Angel_Gudla_Resume.pdf';
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = 'Debhora_Angel_Gudla_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
   
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
      }, 1000);
    }
  }, 200);
};


  const gradients = {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    dark: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    hero: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)',
    card: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    accent: 'linear-gradient(90deg, #64ffda 0%, #667eea 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    skillsBg: 'linear-gradient(135deg, rgba(16, 36, 64, 0.8) 0%, rgba(10, 25, 47, 0.8) 100%)',
    footer: 'linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(16, 36, 64, 0.9) 100%)',
  };

  const styles = {
    container: {
      backgroundColor: '#0a192f',
      backgroundImage: gradients.dark,
      color: '#e6f1ff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative',
    },


    animatedBg: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      pointerEvents: 'none',
    },
    gradientOrb: (x, y) => ({
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      width: '300px',
      height: '300px',
      background: gradients.primary,
      borderRadius: '50%',
      filter: 'blur(100px)',
      opacity: 0.1,
      transform: 'translate(-50%, -50%)',
      transition: 'left 0.5s ease-out, top 0.5s ease-out',
    }),


    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '20px 50px',
      background: 'rgba(10, 25, 47, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    logo: {
      fontSize: '24px',
      fontWeight: '800',
      background: gradients.accent,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textDecoration: 'none',
      cursor: 'pointer',
      letterSpacing: '-0.5px',
    },
    navLinks: {
      display: 'flex',
      gap: '30px',
      marginRight:'80px',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    navLink: {
      color: '#ccd6f6',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '0.5px',
      padding: '10px',
      transition: 'all 0.3s ease',
      position: 'relative',
      cursor: 'pointer',
    },
    activeNavLink: {
      color: '#64ffda',
      fontWeight: '600',
    },
    navNumber: {
      color: '#64ffda',
      marginRight: '5px',
      fontSize: '12px',
      fontWeight: '600',
    },
    downloadButton: {
      background: gradients.accent,
      border: 'none',
      color: '#0a192f',
      padding: '10px 24px',
      borderRadius: '30px',
      fontSize: '14px',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      cursor: 'pointer',
      marginLeft: '20px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      boxShadow: '0 4px 15px rgba(100, 255, 218, 0.3)',
    },
    mobileMenuButton: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      color: '#64ffda',
      fontSize: '24px',
      cursor: 'pointer',
      zIndex: 1001,
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: isMenuOpen ? '0' : '-100%',
      width: '300px',
      height: '100vh',
      background: 'rgba(16, 36, 64, 0.95)',
      backdropFilter: 'blur(20px)',
      padding: '80px 30px',
      transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
    },
    mobileNavLink: {
      display: 'block',
      color: '#ccd6f6',
      textDecoration: 'none',
      padding: '15px 0',
      fontSize: '18px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },


    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 50px',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(16, 36, 64, 0.9) 100%)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    heroSubtitle: {
      color: '#64ffda',
      fontSize: '18px',
      fontFamily: "'SF Mono', monospace",
      letterSpacing: '3px',
      textTransform: 'uppercase',
      marginTop:'30px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    heroTitle: {
      fontSize: 'clamp(20px, 5vw, 60px)',
      fontWeight: '800',
      background: 'linear-gradient(90deg, #64ffda, #667eea, #f093fb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: '0',
      lineHeight: '1.1',
      letterSpacing: '-2px',
    },
    heroSubtitleLarge: {
      fontSize: 'clamp(15px, 4vw, 30px)',
      fontWeight: '700',
      background: 'linear-gradient(90deg, #8892b0, #a8b2d1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: '10px 0 30px 0',
      lineHeight: '1.1',
    },
    heroDescription: {
      maxWidth: '600px',
      color: '#a8b2d1',
      fontSize: '20px',
      lineHeight: '1.8',
      margin: '20px 0 60px 0',
      fontWeight: '400',
      background: 'linear-gradient(90deg, #a8b2d1, #ccd6f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroButtons: {
      display: 'flex',
      gap: '25px',
      flexWrap: 'wrap',
    },
    ctaButton: {
      background: gradients.accent,
      color: '#0a192f',
      border: 'none',
      borderRadius: '30px',
      padding: '18px 35px',
      fontSize: '16px',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)',
    },
    secondaryButton: {
      background: 'transparent',
      color: '#64ffda',
      border: '2px solid #64ffda',
      borderRadius: '30px',
      padding: '18px 35px',
      fontSize: '16px',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      backdropFilter: 'blur(10px)',
    },

    section: {
      padding: '80px 40px',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    },
    sectionTitle: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '80px',
      fontSize: '36px',
      fontWeight: '700',
      color: '#ccd6f6',
    },
    sectionNumber: {
      background: gradients.accent,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontSize: '24px',
      marginRight: '15px',
      fontFamily: "'SF Mono', monospace",
      fontWeight: '600',
    },
    sectionLine: {
      flex: 1,
      height: '2px',
      background: gradients.accent,
      marginLeft: '25px',
      opacity: 0.3,
    },


    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '80px',
      alignItems: 'center',
    },
    aboutText: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#a8b2d1',
    },
    aboutImage: {
      width: '100%',
      height: '400px',
      borderRadius: '20px',
      background: gradients.card,
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },

    experienceSection: {
      background: gradients.card,
      borderRadius: '20px',
      padding: '60px',
      marginTop: '40px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
    },
    experienceItem: {
      marginBottom: '50px',
      paddingBottom: '50px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    experienceTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#64ffda',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    experienceCompany: {
      color: '#ccd6f6',
      fontSize: '18px',
      marginBottom: '15px',
    },
    experienceDescription: {
      color: '#a8b2d1',
      fontSize: '16px',
      lineHeight: '1.6',
      marginTop: '15px',
    },
    experienceBullet: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '10px',
      color: '#a8b2d1',
      fontSize: '16px',
      lineHeight: '1.6',
    },
    bulletIcon: {
      color: '#64ffda',
      marginRight: '10px',
      fontSize: '12px',
      marginTop: '8px',
    },

    skillsSection: {
      background: gradients.card,
      borderRadius: '20px',
      padding: '60px',
      marginTop: '40px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
    },
    skillsCategory: {
      marginBottom: '50px',
    },
    skillsCategoryTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#64ffda',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '15px 20px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      minHeight: '70px',
    },
    skillIcon: {
      fontSize: '22px',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      background: 'rgba(100, 255, 218, 0.1)',
      border: '1px solid rgba(100, 255, 218, 0.2)',
    },
    skillInfo: {
      flex: 1,
    },
    skillName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#ccd6f6',
      marginBottom: '5px',
    },
    skillDescription: {
      fontSize: '13px',
      color: '#8892b0',
      lineHeight: '1.4',
    },

   
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    projectCard: {
      background: gradients.card,
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '35px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    projectCardTop: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    projectIcon: {
      fontSize: '32px',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: 'rgba(100, 255, 218, 0.1)',
      border: '1px solid rgba(100, 255, 218, 0.2)',
    },
    projectTitle: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#ccd6f6',
      marginBottom: '15px',
      flex: 1,
      paddingRight: '20px',
    },
    projectTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '20px',
    },
    projectTag: {
      background: 'rgba(100, 255, 218, 0.08)',
      color: '#64ffda',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500',
      border: '1px solid rgba(100, 255, 218, 0.2)',
    },

    certificationsSection: {
      background: gradients.card,
      borderRadius: '20px',
      padding: '60px',
      marginTop: '40px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
    },
    certificationItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '12px',
      marginBottom: '15px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
    },
    certificationInfo: {
      flex: 1,
    },
    certificationName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#ccd6f6',
      marginBottom: '5px',
    },
    certificationDetails: {
      fontSize: '14px',
      color: '#8892b0',
    },
    certificationScore: {
      fontSize: '14px',
      color: '#64ffda',
      fontWeight: '600',
      background: 'rgba(100, 255, 218, 0.1)',
      padding: '5px 12px',
      borderRadius: '20px',
      border: '1px solid rgba(100, 255, 218, 0.2)',
    },

    contactForm: {
      maxWidth: '500px',
      margin: '0 auto',
      background: gradients.card,
      backdropFilter: 'blur(20px)',
      padding: '40px',
      borderRadius: '30px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
    },
    formGroup: {
      marginBottom: '35px',
    },
    formLabel: {
      display: 'block',
      color: '#64ffda',
      fontSize: '15px',
      fontWeight: '600',
      marginBottom: '12px',
      letterSpacing: '1px',
    },
    formInput: {
      width: '90%',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '18px 24px',
      color: '#e6f1ff',
      fontSize: '16px',
      fontFamily: "'Inter', sans-serif",
      transition: 'all 0.3s ease',
    },
    formTextarea: {
      width: '90%',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '18px 24px',
      color: '#e6f1ff',
      fontSize: '16px',
      fontFamily: "'Inter', sans-serif",
      minHeight: '180px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
    },
    submitButton: {
      background: gradients.accent,
      color: '#0a192f',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 10px',
      fontSize: '16px',
      fontWeight: '700',
      fontFamily: "'Inter', sans-serif",
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'block',
      margin: '10px auto 0',
      width: '60%',
      maxWidth: '200px',
      boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)',
    },

    statusMessage: {
      textAlign: 'center',
      marginTop: '25px',
      padding: '20px',
      borderRadius: '15px',
      fontSize: '15px',
      fontWeight: '500',
    },

    downloadProgress: {
      position: 'fixed',
      bottom: '40px',
      right: '40px',
      background: gradients.card,
      backdropFilter: 'blur(20px)',
      padding: '25px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      minWidth: '300px',
      zIndex: 1000,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      display: isDownloading ? 'block' : 'none',
    },
    progressBar: {
      height: '6px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '3px',
      marginTop: '15px',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      background: gradients.accent,
      width: `${downloadProgress}%`,
      transition: 'width 0.3s ease',
    },

    emailNotification: {
      position: 'fixed',
      bottom: '40px',
      left: '40px',
      background: gradients.card,
      backdropFilter: 'blur(20px)',
      padding: '25px',
      borderRadius: '20px',
      border: '1px solid rgba(100, 255, 218, 0.3)',
      minWidth: '350px',
      zIndex: 1000,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      animation: 'slideInLeft 0.5s ease-out',
    },

  
    footer: {
      textAlign: 'center',
      padding: '60px 50px',
      color: '#8892b0',
      fontSize: '15px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      background: gradients.footer,
      backdropFilter: 'blur(10px)',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    socialLink: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: gradients.card,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      color: '#64ffda',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    socialText: {
      fontSize: '10px',
      marginTop: '1px',
      color: '#8892b0',
    },

   
    '@media (max-width: 1024px)': {
      aboutGrid: {
        gridTemplateColumns: '1fr',
        gap: '50px',
      },
      projectsGrid: {
        gridTemplateColumns: '1fr',
      },
      skillsGrid: {
        gridTemplateColumns: '1fr',
      },
    },
    '@media (max-width: 768px)': {
      nav: {
        padding: '20px 25px',
      },
      section: {
        padding: '100px 25px',
      },
      hero: {
        padding: '0 25px',
      },
      contactForm: {
        padding: '30px',
      },
      skillsSection: {
        padding: '30px',
      },
      heroButtons: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      sectionTitle: {
        fontSize: '28px',
        marginBottom: '50px',
      },
      heroTitle: {
        fontSize: 'clamp(40px, 8vw, 60px)',
      },
      heroSubtitleLarge: {
        fontSize: 'clamp(30px, 6vw, 45px)',
      },
      aboutImage: {
        height: '300px',
      },
    },
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    {  name: 'About', id: 'about' },
    {  name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    {  name: 'Projects', id: 'projects' },
    {  name: 'Contact', id: 'contact' },
  ];

  
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaLaptopCode />,
      skills: [
        { name: 'C', icon: <SiC />, description: 'Structured programming language' },
        { name: 'C++', icon: <SiCplusplus />, description: 'Object-oriented programming' },
        { name: 'Java', icon: <FaJava />, description: 'Platform-independent OOP' },
        { name: 'Python', icon: <FaPython />, description: 'High-level programming' },
        { name: 'JavaScript', icon: <FaJs />, description: 'Web development language' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaPalette />,
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, description: 'Markup language' },
        { name: 'CSS', icon: <FaCss3Alt />, description: 'Styling language' },
        { name: 'React.js', icon: <FaReact />, description: 'Component-based UI library' },
        { name: 'Redux', icon: <SiRedux />, description: 'State management' },
        { name: 'Bootstrap', icon: <SiBootstrap />, description: 'CSS framework' },
        {  name: 'React Native', icon: <FaMobileAlt />, description: 'Framework for building native mobile apps' },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, description: 'JavaScript runtime' },
        { name: 'MongoDB', icon: <FaMongoDb />, description: 'NoSQL database' },
        { name: 'SQL', icon: <SiMysql />, description: 'Structured Query Language' },
        { name: 'AWS', icon: <FaAws />, description: 'Cloud computing platform' },
      ]
    }
  ];

  
  const projects = [
    {
      title: 'Grubbit – Food Delivery Mobile App (React Native)',
      description: 'Built a cross-platform food delivery mobile application using React Native with Google Maps API integration for real-time location tracking, nearby restaurant discovery, and route visualization, improving user navigation and delivery accuracy.',
      tags: ['React Native', 'Google Maps API', 'REST APIs', 'Redux'],
      icon: <FaMapMarkedAlt />,
    },

    {
      title: 'Transformer and DAG-based Fake News Detection',
      description: 'Developing a hybrid fake news detection model integrating transformer-based embeddings (BERT, GPT-2, MPNet), variational autoencoders, and Pachinko Allocation Model for topic modeling with classification models including Random Forest, SVM, and MLP.',
      tags: ['Python', 'Transformers', 'Machine Learning', 'JavaScript'],
      icon: <FaRobot />,
      teamSize: 4,
      timeline: 'Jan 2025 - May 2025'
    },
    {
      title: 'Sales and Inventory Management System',
      description: 'Designed an effective sales tracking and inventory managing tool using Python\'s GUI application with Tkinter. The system manages entire stock, sales reports, customer data with real-time updates on inventory and sales analytics.',
      tags: ['Python', 'Tkinter', 'GUI', 'Inventory Management'],
      icon: <FaChartLine />,
    },
    {
      title: 'NutriTracker',
      description: 'Created a comprehensive health and nutrition website including over 200 food items with detailed nutritional information and disease-prevention benefits. Implemented text-to-speech feature increasing accessibility by 80% for visually impaired users.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Web Accessibility'],
      icon: <FaLeaf />,
      teamSize: 4,
      timeline: 'Mar 2023 - Jul 2023'
    },
    {
      title: 'E-commerce Website (MERN)',
      description: 'Developed a e-commerce platform during internship using MERN stack with REDUX integration for state management, reducing state-related bugs by 40%.',
      tags: [ 'React', 'Node.js', 'Redux','JavaScript'],
      icon: <FaShoppingCart />,
    },
  ];

  
  const experiences = [
    {
      title: 'React JS Developer',
      company: 'Mylas Technologies, Visakhapatnam, AP',
      period: 'Current',
      bullets: [
        'Working on real-time projects using React',
        'Building dynamic and responsive user interfaces with Tailwind CSS',
        'Ensuring seamless design across different screen sizes and devices',
        'Integrated Redux Toolkit Query for efficient API data fetching and state management',
      ]
    },
    {
      title: 'Front-End Developer Intern',
      company: 'Kairos Technologies, Visakhapatnam, AP',
      period: 'Internship',
      bullets: [
        'Developed an e-commerce website using the MERN stack',
        'Integrated REDUX for improved state management, reducing state-related bugs by 40%',
        'Collaborated with a team of 4 in an agile environment',
        'Focused on full-stack development'
      ]
    }
  ];


  const certifications = [
    { name: 'Cloud Computing', organization: 'NPTEL', score: '90% (Top 2%)', icon: <FaCloud /> },
    { name: 'Learning Analytics Tools', organization: 'NPTEL', score: '81%', icon: <GiProcessor /> },
    { name: 'Cybersecurity Essentials', organization: 'Cisco Networking Academy', score: 'Completed', icon: <FaShieldAlt /> },
    { name: 'HTML, CSS, and Javascript for Web Developers', organization: 'Johns Hopkins University - Coursera', score: 'Completed', icon: <FaCode /> },
    { name: 'Java Programming', organization: 'Data Pro', score: 'Completed', icon: <FaJava /> },
    { name: 'AWS Workshop', organization: 'IIT Bombay', score: 'Completed', icon: <FaAws /> },
  ];

  const socialLinks = [
    { 
      platform: 'LinkedIn', 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com/in/debhora-angel-gudla-aba3bb267',
      color: '#0077B5'
    },
    { 
      platform: 'GitHub', 
      icon: <FaGithub />, 
      url: 'https://github.com/debhora',
      color: '#333333'
    },
    { 
      platform: 'Email', 
      icon: <FaEnvelope />, 
      url: 'mailto:debhoraangel.pinky@gmail.com',
      color: '#EA4335'
    },
    { 
      platform: 'Phone', 
      icon: <FaPhone />, 
      url: 'tel:+917670826625',
      color: '#25D366'
    },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.animatedBg}>
        <div style={styles.gradientOrb(mousePosition.x, mousePosition.y)}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: gradients.secondary,
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.05,
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: gradients.primary,
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.05,
        }}></div>
      </div>


      <div style={styles.downloadProgress}>
        <div style={{ color: '#64ffda', fontSize: '16px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaFilePdf />
          Downloading Resume...
        </div>
        <div style={{ color: '#8892b0', fontSize: '14px', marginTop: '10px' }}>
          {downloadProgress}% Complete
        </div>
        <div style={styles.progressBar}>
          <div style={styles.progressFill}></div>
        </div>
      </div>

      {submitStatus?.type === 'success' && (
        <div style={styles.emailNotification}>
          <div style={{ color: '#64ffda', fontSize: '18px', fontWeight: '700', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FaCheck />
            Message Sent Successfully!
          </div>
          <div style={{ color: '#ccd6f6', fontSize: '15px', lineHeight: '1.6' }}>
            {submitStatus.message}
          </div>
          <div style={{ color: '#8892b0', fontSize: '13px', marginTop: '15px', fontStyle: 'italic' }}>
            I'll review your message and get back to you within 24 hours.
          </div>
        </div>
      )}


      <nav style={styles.nav}>
        <div style={styles.logo} onClick={() => handleNavClick('home')}>
          {'<DAG />'}
        </div>
        
        <div style={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.id}
              style={{
                ...styles.navLink,
                ...(activeSection === item.id ? styles.activeNavLink : {})
              }}
              onClick={() => handleNavClick(item.id)}
            >
              <span style={styles.navNumber}>{item.number}</span>
              {item.name}
            </a>
          ))}
        </div>

        <button 
          style={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <div
              key={item.id}
              style={{
                ...styles.mobileNavLink,
                ...(activeSection === item.id ? { 
                  color: '#64ffda',
                  transform: 'translateX(10px)'
                } : {})
              }}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#64ffda'}
              onMouseLeave={(e) => e.currentTarget.style.color = 
                activeSection === item.id ? '#64ffda' : '#ccd6f6'}
            >
              <span style={styles.navNumber}>{item.number}</span> {item.name}
            </div>
          ))}
          <button
            style={{
              ...styles.downloadButton,
              marginTop: '30px',
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onClick={handleResumeDownload}
          >
            <FaDownload /> Download CV
          </button>
        </div>
      </nav>

      <section id="home" style={{ ...styles.section, ...styles.hero }}>
        <div style={styles.heroContent}>
          <div style={styles.heroSubtitle}>
            <FaUser /> Hi, my name is
          </div>
          <h1 style={styles.heroTitle}>Debhora Angel Gudla</h1>
          <h2 style={styles.heroSubtitleLarge}>MERN Stack Developer </h2>
          <p style={styles.heroDescription}>
            I build exceptional web experiences using modern technologies like React, and Python. 
            I combine academic excellence 
            with practical industry experience in full-stack development.
          </p>
          <div style={styles.heroButtons}>
            <a 
              style={styles.ctaButton}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(100, 255, 218, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.3)';
              }}
            >
              View My Projects <FaArrowRight style={{ marginLeft: '10px' }} />
            </a>
            <button
              style={styles.secondaryButton}
              onClick={handleResumeDownload}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaDownload style={{ marginRight: '10px' }} /> Download Resume
            </button>
          </div>
        </div>
      </section>


      <section id="about" style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>02.</span>
          About Me
          <div style={styles.sectionLine}></div>
        </div>
        
        <div style={styles.aboutGrid}>
          <div>
            <div style={styles.aboutText}>
              <p>
                I'm a passionate Computer Science Engineering graduate
                My journey in technology combines rigorous academic learning with practical 
                industry experience as a React JS Developer.
              </p>
              <p style={{ marginTop: '25px' }}>
                I specialize in building modern web applications using the MERN stack and have 
                hands-on experience with React, Redux, Tailwind CSS, and various technologies. 
              </p>
              <p style={{ marginTop: '25px' }}>
                Beyond coding, I'm an avid learner with multiple certifications in cloud computing, 
                cybersecurity, and web development. I believe in creating technology solutions that 
                are not only efficient but also accessible and user-friendly.
              </p>
            </div>
          </div>
          
         <div style={styles.aboutImage}>
  <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid rgba(100, 255, 218, 0.3)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    }}>
      <img 
        src="https://i.pinimg.com/736x/a8/19/cf/a819cf00b0798f5ca3d845254e905fc5.jpg"
        alt="Debhora Angel Gudla"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  </div>
</div>
        </div>

      
        <div style={{ marginTop: '60px' }}>
          <div style={styles.skillsCategoryTitle}>
            <FaGraduationCap />
            Education
          </div>
          <div style={{
            ...styles.skillItem,
            padding: '25px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={styles.skillIcon}><FaGraduationCap /></div>
            <div style={styles.skillInfo}>
              <div style={styles.skillName}>B.Tech in Computer Science and Engineering</div>
              <div style={styles.skillDescription}>
                Vignan's Institute of Information Technology, Visakhapatnam
                <br />
                CGPA: 9.24/10.00 | December 2021 - May 2025
              </div>
            </div>
          </div>
          <br/>
          <div style={{
            ...styles.skillItem,
            padding: '25px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={styles.skillIcon}><FaGraduationCap /></div>
            <div style={styles.skillInfo}>
              <div style={styles.skillName}>Intermediate(MPC)</div>
              <div style={styles.skillDescription}>
                Sri Viswa Junior College, Visakhapatnam
                <br />
                Marks: 973/1000 | June 2019 - April 2021
              </div>
            </div>
          </div>
         <br/>
          <div style={{
            ...styles.skillItem,
            padding: '25px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={styles.skillIcon}><FaGraduationCap /></div>
            <div style={styles.skillInfo}>
              <div style={styles.skillName}>Secondary School</div>
              <div style={styles.skillDescription}>
                PEN High School, Visakhapatnam
                <br />
                CGPA: 10.00/10.00 | June 2018 - April 2019
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="experience" style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>03.</span>
          Experience
          <div style={styles.sectionLine}></div>
        </div>

        <div style={styles.experienceSection}>
          {experiences.map((exp, index) => (
            <div key={index} style={styles.experienceItem}>
              <div style={styles.experienceTitle}>
                {exp.title}
                <span style={{ color: '#64ffda', fontSize: '14px', fontWeight: '500' }}>
                  {exp.period}
                </span>
              </div>
              <div style={styles.experienceCompany}>
                <FaBuilding style={{ marginRight: '10px' }} />
                {exp.company}
              </div>
              {exp.bullets.map((bullet, bulletIndex) => (
                <div key={bulletIndex} style={styles.experienceBullet}>
                  <span style={styles.bulletIcon}>▸</span>
                  {bullet}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="skills" style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>04.</span>
          Skills & Technologies
          <div style={styles.sectionLine}></div>
        </div>

        <div style={styles.skillsSection}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={styles.skillsCategory}>
              <div style={styles.skillsCategoryTitle}>
                {category.icon}
                {category.title}
              </div>
              <div style={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    style={styles.skillItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={styles.skillIcon}>
                      {skill.icon}
                    </div>
                    <div style={styles.skillInfo}>
                      <div style={styles.skillName}>{skill.name}</div>
                      <div style={styles.skillDescription}>{skill.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

    
        <div style={{ marginTop: '80px' }}>
          <div style={styles.sectionTitle}>
            <span style={styles.sectionNumber}>04.1</span>
            Certifications
            <div style={styles.sectionLine}></div>
          </div>

          <div style={styles.certificationsSection}>
            {certifications.map((cert, index) => (
              <div 
                key={index}
                style={styles.certificationItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {cert.icon}
                  <div style={styles.certificationInfo}>
                    <div style={styles.certificationName}>{cert.name}</div>
                    <div style={styles.certificationDetails}>{cert.organization}</div>
                  </div>
                </div>
                <div style={styles.certificationScore}>{cert.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="projects" style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>05.</span>
          Projects
          <div style={styles.sectionLine}></div>
        </div>

        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index}
              style={styles.projectCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.2)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = gradients.card;
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.projectCardTop}>
                <div style={styles.projectTitle}>{project.title}</div>
                <div style={styles.projectIcon}>
                  {project.icon}
                </div>
              </div>
              <p style={{ 
                color: '#a8b2d1', 
                fontSize: '15px', 
                lineHeight: '1.7',
                marginBottom: '25px',
              }}>
                {project.description}
              </p>
              {project.teamSize && (
                <div style={{ color: '#8892b0', fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaUser /> Team Size: {project.teamSize} • <FaCalendarAlt /> {project.timeline}
                </div>
              )}
              <div style={styles.projectTags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section id="contact" style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>06.</span>
          Get In Touch
          <div style={styles.sectionLine}></div>
        </div>

        <div style={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={styles.formInput}
                onFocus={(e) => {
                  e.target.style.borderColor = '#64ffda';
                  e.target.style.boxShadow = '0 0 0 2px rgba(100, 255, 218, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                placeholder="Enter your name"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.formInput}
                onFocus={(e) => {
                  e.target.style.borderColor = '#64ffda';
                  e.target.style.boxShadow = '0 0 0 2px rgba(100, 255, 218, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                placeholder="Enter your email"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                style={styles.formTextarea}
                onFocus={(e) => {
                  e.target.style.borderColor = '#64ffda';
                  e.target.style.boxShadow = '0 0 0 2px rgba(100, 255, 218, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              style={styles.submitButton}
              disabled={isSubmitting}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(100, 255, 218, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.3)';
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner style={{ marginRight: '10px', animation: 'spin 1s linear infinite' }} />
                  Sending Message...
                </>
              ) : (
                <>
                  <FaEnvelope style={{ marginRight: '10px' }} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus && (
              <div style={{
                ...styles.statusMessage,
                background: submitStatus.type === 'success' 
                  ? 'rgba(100, 255, 218, 0.1)' 
                  : 'rgba(255, 100, 100, 0.1)',
                color: submitStatus.type === 'success' ? '#64ffda' : '#ff6b6b',
                border: `1px solid ${submitStatus.type === 'success' ? '#64ffda' : '#ff6b6b'}`,
              }}>
                {submitStatus.type === 'success' ? <FaCheck /> : '❌ '}
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </section>

    
      <footer style={styles.footer}>
        <div style={styles.socialLinks}>
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.socialLink,
                background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`,
                border: `1px solid ${social.color}30`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.background = `linear-gradient(135deg, ${social.color}40, ${social.color}20)`;
                e.currentTarget.style.boxShadow = `0 10px 20px ${social.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = `linear-gradient(135deg, ${social.color}20, ${social.color}10)`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '20px' }}>{social.icon}</span>
                <div style={styles.socialText}>{social.platform}</div>
              </div>
            </a>
          ))}
        </div>
        
        <p style={{ 
          fontSize: '16px', 
          marginBottom: '15px', 
          fontWeight: '500',
          background: 'linear-gradient(90deg, #64ffda, #667eea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <FaMapMarkerAlt /> Visakhapatnam, Andhra Pradesh
        </p>
        <p style={{ fontSize: '14px', opacity: 0.7 }}>
          Built with React  • © {new Date().getFullYear()} Debhora Angel Gudla
        </p>
        <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '10px' }}>
          React JS Developer • MERN Stack Developer
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;