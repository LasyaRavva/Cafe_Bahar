import SiteLayout from './components/SiteLayout';
import { ContactPage, GalleryPage, HomePage, MenuPage, NotFoundPage, StoryPage, UpdatesPage } from './pages';

const pages = {
  '/': HomePage,
  '/story': StoryPage,
  '/menu': MenuPage,
  '/gallery': GalleryPage,
  '/updates': UpdatesPage,
  '/contact': ContactPage
};

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const Page = pages[path] || NotFoundPage;
  return <SiteLayout path={path}><Page/></SiteLayout>;
}
