import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react';
import { business, contact } from '../data';

export const navigation = [
  { label: 'Home', href: '/', path: '/' },
  { label: 'Our Story', href: '/story', path: '/story' },
  { label: 'Menu', href: '/menu', path: '/menu' },
  { label: 'Gallery', href: '/gallery', path: '/gallery' },
  { label: 'Updates', href: '/updates', path: '/updates' },
  { label: 'Contact', href: '/contact', path: '/contact' }
];

const pageMeta = {
  '/': [
    'Cafe Bahar | Independent Website Concept',
    'An independent Cafe Bahar website concept, with an illustrative menu, gallery, and unverified location reference.'
  ],
  '/story': [
    'Our Story | Cafe Bahar Concept',
    'A story page concept for Cafe Bahar, ready for owner-approved copy.'
  ],
  '/menu': [
    'Menu | Cafe Bahar Concept',
    'Browse a menu transcription from supplied photos. Dishes, availability, and prices require confirmation.'
  ],
  '/gallery': [
    'Gallery | Cafe Bahar Concept',
    'Illustrative food and dining photography for an independent Cafe Bahar website concept.'
  ],
  '/updates': [
    'Updates | Cafe Bahar Concept',
    'Sample celebration and food posts supplied for this independent website concept.'
  ],
  '/contact': [
    'Contact | Cafe Bahar Concept',
    'Unverified public-listing contact references and a Google Maps location preview for Cafe Bahar.'
  ],
  notFound: [
    'Page not found | Cafe Bahar Concept',
    'The requested page does not exist in this independent Cafe Bahar website concept.'
  ]
};

function updateMeta(selector, attribute, value) {
  document.querySelector(selector)?.setAttribute(attribute, value);
}

export default function SiteLayout({ children, path }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const [title, description] = pageMeta[path] || pageMeta.notFound;
    document.title = title;
    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[name="twitter:title"]', 'content', title);
    updateMeta('meta[name="twitter:description"]', 'content', description);
  }, [path]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = event => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="header">
        <a className="brand" href="/" aria-label={`${business.name} concept home`}>
          <span className="brand-mark">ب</span>
          <span>CAFE <b>BAHAR</b><small>HYDERABAD · WEBSITE CONCEPT</small></span>
        </a>
        <nav
          id="site-navigation"
          className={menuOpen ? 'nav nav-open' : 'nav'}
          aria-label="Main navigation"
        >
          {navigation.map(link => (
            <a
              key={link.path}
              href={link.href}
              aria-current={path === link.path ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="/menu" onClick={() => setMenuOpen(false)}>
            Explore menu <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          ref={toggleRef}
          type="button"
          className="mobile-toggle"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
        >
          {menuOpen ? <X /> : <MenuIcon />}
        </button>
      </header>
      <main id="main-content">{children}</main>
      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="/">
            <span className="brand-mark">ب</span>
            <span>CAFE <b>BAHAR</b><small>HYDERABAD · WEBSITE CONCEPT</small></span>
          </a>
          <p>A thoughtful website concept<br />for a Hyderabad dining destination.</p>
          <div className="footer-links">
            {navigation.map(link => <a key={link.path} href={link.href}>{link.label}</a>)}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Independent website concept</span>
          <span>Not the official restaurant website · Details require owner approval</span>
          <a href={contact.maps} target="_blank" rel="noreferrer">
            Map reference <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </>
  );
}
