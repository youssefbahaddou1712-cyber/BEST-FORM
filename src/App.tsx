import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { TRANSLATIONS } from './i18n/translations';
import { Language, PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ActivitiesPage } from './components/ActivitiesPage';
import { MembershipPage } from './components/MembershipPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'activities',
  'membership',
  'gallery',
  'contact',
];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);

  const t = TRANSLATIONS[language];

  // Sync HTML language, RTL/LTR direction, and SEO title/meta description
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = t.dir;

    const seoMeta = t.seo[currentPage];
    document.title = seoMeta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seoMeta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoMeta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seoMeta.description);
    }
  }, [language, currentPage, t]);

  // Listen to browser back/forward hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectActivityFromHome = (activityId: string) => {
    setSelectedActivityId(activityId);
    navigate('activities');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div dir={t.dir} className="min-h-screen flex flex-col bg-[#101010] text-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        language={language}
        onChangeLanguage={setLanguage}
        t={t}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            t={t}
            onNavigate={navigate}
            onSelectActivity={handleSelectActivityFromHome}
          />
        )}
        {currentPage === 'about' && <AboutPage t={t} onNavigate={navigate} />}
        {currentPage === 'activities' && (
          <ActivitiesPage
            t={t}
            selectedActivityId={selectedActivityId}
            onSelectActivity={setSelectedActivityId}
            onNavigate={navigate}
          />
        )}
        {currentPage === 'membership' && <MembershipPage t={t} />}
        {currentPage === 'gallery' && <GalleryPage t={t} />}
        {currentPage === 'contact' && <ContactPage t={t} language={language} />}
      </main>

      <Footer onNavigate={navigate} language={language} t={t} />
      <WhatsAppFloatingButton t={t} />
      </div>
    </MotionConfig>
  );
}
