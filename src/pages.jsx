import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Search,
  X
} from 'lucide-react';
import { contact, gallery, photo, photoSrcSet, socialPosts } from './data';
import {
  filterMenuItems,
  formatMenuPrice,
  menuCategories,
  menuItems
} from './menu-data';

function Image({ src, alt, ...props }) {
  const isLocal = src.startsWith('/images/');
  const source = isLocal ? src : photo(src, 960);
  const sizes = props.sizes || (props.className === 'hero-image'
    ? '100vw'
    : '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 800px');
  const loading = props.loading || (props.fetchPriority === 'high' ? 'eager' : 'lazy');

  return (
    <img
      src={source}
      srcSet={isLocal ? undefined : photoSrcSet(src)}
      sizes={isLocal ? undefined : sizes}
      alt={alt}
      width={props.width || 1200}
      height={props.height || 900}
      loading={loading}
      decoding="async"
      onError={event => {
        const image = event.currentTarget;
        if (image.dataset.fallbackApplied) return;
        image.dataset.fallbackApplied = 'true';
        image.removeAttribute('srcset');
        image.removeAttribute('sizes');
        image.src = '/images/image-unavailable.svg';
      }}
      {...props}
    />
  );
}

function PageHeading({ eyebrow, title, children, number }) {
  return (
    <div className="page-heading">
      <div>
        <p className="eyebrow eyebrow-dark">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p className="page-intro-copy">{children}</p>}
      </div>
      <span className="section-index">{number}</span>
    </div>
  );
}

export function HomePage() {
  const featured = [
    {
      title: 'Hyderabadi Biryani',
      type: 'Illustrative menu selection',
      image: 'photo-1589302168068-964664d93dc0',
      alt: 'Illustrative biryani photography; not a verified Cafe Bahar photograph'
    },
    {
      title: 'From the grill',
      type: 'Illustrative menu selection',
      image: 'photo-1555939594-58d7cb561ad1',
      alt: 'Illustrative grilled food photography; not a verified Cafe Bahar photograph'
    },
    {
      title: 'A sweet finish',
      type: 'Illustrative menu selection',
      image: 'photo-1571115177098-24ec42ed204d',
      alt: 'Illustrative dessert photography; not a verified Cafe Bahar photograph'
    }
  ];

  return (
    <>
      <section className="hero" id="home">
        <Image
          className="hero-image"
          src="photo-1589302168068-964664d93dc0"
          width={2000}
          alt="Illustrative biryani photography; not a verified Cafe Bahar photograph"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> A RESTAURANT CONCEPT IN HYDERABAD</p>
          <h1>A taste of Hyderabad,<br /><em>made to share.</em></h1>
          <p className="hero-copy">
            Explore a menu preview, look around the dining concept, and find the supplied location reference.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="/menu">
              Explore the menu <ArrowRight size={17} />
            </a>
            <a className="button button-outline" href={contact.maps} target="_blank" rel="noreferrer">
              View map reference <MapPin size={16} />
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#welcome">
          <span>SCROLL TO DISCOVER</span><ArrowDown size={15} />
        </a>
        <div className="hero-caption">INDEPENDENT WEBSITE CONCEPT</div>
      </section>

      <div className="notice">
        <span>INDEPENDENT WEBSITE CONCEPT</span><i />
        Sample design and content for client discussion. Business details require approval.
      </div>

      <section className="home-welcome section" id="welcome">
        <div className="home-welcome-image">
          <Image
            src="photo-1517248135467-4c7edcad34c4"
            alt="Illustrative restaurant interior; not a verified Cafe Bahar photograph"
            loading="lazy"
          />
        </div>
        <div className="home-welcome-copy">
          <p className="eyebrow eyebrow-dark">A PLACE FOR GOOD FOOD</p>
          <h2>Hyderabad’s table,<br /><em>made to welcome.</em></h2>
          <p>
            This concept gives the restaurant room to share its menu, introduce its dining space, and help guests find their way. Replace this draft with Cafe Bahar’s approved words.
          </p>
          <a className="text-link" href="/story">Discover the story <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="home-featured section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">A FIRST LOOK</p>
            <h2>Good things for <em>the table.</em></h2>
            <p className="section-sub">
              Illustrative menu selections; confirm current availability with the restaurant.
            </p>
          </div>
          <a className="text-link" href="/menu">View the full menu <ArrowRight size={16} /></a>
        </div>
        <div className="home-featured-grid">
          {featured.map((item, index) => (
            <a className="home-featured-card" href="/menu" key={item.title}>
              <div className="home-featured-image">
                <Image src={item.image} alt={item.alt} loading="lazy" />
                <span>0{index + 1}</span>
              </div>
              <p>{item.type}</p>
              <h3>{item.title}<ArrowUpRight size={17} /></h3>
            </a>
          ))}
        </div>
      </section>

      <section className="home-visit">
        <div>
          <p className="eyebrow"><span /> FIND YOUR WAY TO US</p>
          <h2>Good food is<br /><em>worth finding.</em></h2>
          <p>See the supplied location reference and open its map.</p>
        </div>
        <div className="home-visit-actions">
          <a className="button button-gold" href="/contact">Contact &amp; location <ArrowRight size={16} /></a>
          <a className="button button-outline" href="/gallery">View the gallery <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </>
  );
}

export function StoryPage() {
  return (
    <div className="inner-page story-page">
      <div className="section page-container">
        <PageHeading
          eyebrow="OUR STORY"
          title={<>A city with a<br /><em>generous table.</em></>}
          number="01 / STORY"
        >
          A space for the food, place, and people that the Cafe Bahar team wants to share.
        </PageHeading>
        <div className="story-layout">
          <Image
            className="story-photo"
            src="photo-1517248135467-4c7edcad34c4"
            alt="Illustrative restaurant interior; not a verified Cafe Bahar photograph"
            loading="lazy"
          />
          <div className="story-copy">
            <p className="story-lead">A welcome, a shared meal, and time around the table.</p>
            <p>
              This concept page is ready for the restaurant’s own words: what guests can expect, which dishes the team wants to introduce, and the details they would like to share.
            </p>
            <p>No founding date, awards, ownership history, or culinary claims are presented as verified.</p>
            <a className="button button-gold" href="/menu">Explore the menu <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ item }) {
  return (
    <article className="menu-item">
      <h3>{item.name}</h3>
      <strong>{formatMenuPrice(item.price)}</strong>
    </article>
  );
}

export function MenuPage() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const matching = filterMenuItems(menuItems, active, query);
  const categories = active === 'All' ? menuCategories.slice(1) : [active];
  const groups = categories
    .map(category => ({ category, items: matching.filter(item => item.category === category) }))
    .filter(group => group.items.length > 0);

  return (
    <div className="inner-page menu-page">
      <section className="menu-banner">
        <div>
          <p className="eyebrow"><span /> THE CAFE BAHAR MENU</p>
          <h1>Find your next<br /><em>favorite.</em></h1>
          <p>Browse biryani, curries, tea-time bites, and something sweet.</p>
        </div>
        <div className="menu-banner-aside">
          <span>MENU TRANSCRIPTION</span>
          <strong>{menuItems.length}<small> listed items</small></strong>
          <span>FROM PHOTOS YOU SHARED</span>
        </div>
      </section>
      <section className="section menu-content">
        <div className="menu-disclaimer">
          <strong>Concept reference</strong>
          <p>
            Prices are transcribed from the fuller menu pages you supplied. Other menu photos show different amounts, so these may be outdated; confirm current prices and availability with the restaurant before publishing. “MRP” items are marked as shown in the photos.
          </p>
        </div>
        <div className="menu-tools">
          <label className="menu-search">
            <Search size={17} />
            <span className="sr-only">Search menu</span>
            <input
              type="search"
              placeholder="Search biryani, tea, desserts…"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear menu search">
                <X size={16} />
              </button>
            )}
          </label>
          <p aria-live="polite">{matching.length} {matching.length === 1 ? 'item' : 'items'} shown</p>
        </div>
        <div className="menu-filters" role="group" aria-label="Filter menu by category">
          {menuCategories.map(category => (
            <button
              type="button"
              key={category}
              className={active === category ? 'filter active' : 'filter'}
              onClick={() => setActive(category)}
              aria-pressed={active === category}
            >
              {category}
            </button>
          ))}
        </div>
        {groups.length ? (
          <div className="menu-groups" aria-live="polite">
            {groups.map(group => (
              <section className="menu-group" key={group.category}>
                <div className="menu-group-heading"><h2>{group.category}</h2><i /></div>
                <div className="menu-items">
                  {group.items.map((item, index) => (
                    <MenuItem key={`${group.category}-${item.name}-${index}`} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="menu-empty" aria-live="polite">
            <h2>No menu items found</h2>
            <p>Try another search or choose a different category.</p>
            <button
              type="button"
              className="text-link"
              onClick={() => { setQuery(''); setActive('All'); }}
            >
              Show the full menu <ArrowRight size={16} />
            </button>
          </div>
        )}
        <p className="menu-footer-note">Independent website concept · No ordering or payment service is connected.</p>
      </section>
    </div>
  );
}

export function GalleryPage() {
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (selected === null) return undefined;
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    const handleArrowKeys = event => {
      if (event.key === 'ArrowRight') setSelected(index => (index + 1) % gallery.length);
      if (event.key === 'ArrowLeft') setSelected(index => (index - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', handleArrowKeys);
    return () => window.removeEventListener('keydown', handleArrowKeys);
  }, [selected]);

  const closeGallery = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelected(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <div className="inner-page gallery-page">
      <section className="section page-container">
        <PageHeading eyebrow="GALLERY" title={<>Around the<br /><em>table.</em></>} number="03 / GALLERY">
          Illustrative food and dining photography for this concept; these are not verified Cafe Bahar photographs.
        </PageHeading>
        <div className="dedicated-gallery">
          {gallery.map((item, index) => (
            <button
              className={`dedicated-gallery-item dedicated-gallery-${index + 1}`}
              key={item.image}
              onClick={event => { triggerRef.current = event.currentTarget; setSelected(index); }}
              aria-label={`Enlarge photo: ${item.alt}`}
            >
              <Image src={item.image} alt={item.alt} loading="lazy" />
              <span>{item.label}<ArrowUpRight size={16} /></span>
            </button>
          ))}
        </div>
      </section>
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Gallery image viewer"
        onCancel={event => { event.preventDefault(); closeGallery(); }}
        onClick={event => { if (event.target === dialogRef.current) closeGallery(); }}
        onClose={() => {
          setSelected(null);
          window.requestAnimationFrame(() => triggerRef.current?.focus());
        }}
      >
        {selected !== null && (
          <>
            <button type="button" className="lightbox-close" onClick={closeGallery} aria-label="Close image viewer">
              <X />
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={() => setSelected(index => (index - 1 + gallery.length) % gallery.length)}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <Image src={gallery[selected].image} alt={gallery[selected].alt} />
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={() => setSelected(index => (index + 1) % gallery.length)}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
            <p aria-live="polite">{gallery[selected].label} · Illustrative photograph</p>
          </>
        )}
      </dialog>
    </div>
  );
}

export function UpdatesPage() {
  return (
    <div className="inner-page updates-page">
      <section className="section page-container">
        <PageHeading eyebrow="UPDATES" title={<>A few notes<br /><em>from the table.</em></>} number="04 / UPDATES">
          A preview of how seasonal celebrations and food stories could appear on the website.
        </PageHeading>
        <div className="updates-grid">
          {socialPosts.map((post, index) => (
            <article className="update-card" key={post.type}>
              <div className="update-image">
                <Image src={post.image} alt={post.alt} loading="lazy" />
                <span className="update-type">{post.type}</span>
                <span className="update-mark">0{index + 1}</span>
              </div>
              <div className="update-copy">
                <h2>{post.title}</h2>
                <p>{post.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ContactPage() {
  const [mapFailed, setMapFailed] = useState(false);

  return (
    <div className="inner-page contact-page">
      <section className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow"><span /> LOCATION &amp; CONTACT · REFERENCE DETAILS</p>
          <h1>Come find<br /><em>your way.</em></h1>
          <p className="contact-description">
            The address and phone below are unverified public-listing references for this concept. Confirm both with the restaurant before publishing.
          </p>
          <div className="address"><MapPin size={19} /><p>{contact.address}</p></div>
          <div className="contact-actions">
            <a className="button button-gold" href={contact.maps} target="_blank" rel="noreferrer">
              Open map reference <ArrowUpRight size={16} />
            </a>
            <span className="button button-outline contact-phone-reference">
              <Phone size={16} />{contact.phoneDisplay}<small>unverified reference</small>
            </span>
          </div>
          <p className="verify-note">
            Confirm this address and phone with the restaurant before using them for customer directions or calls.
          </p>
        </div>
        <div className="map-panel">
          <iframe
            title="Google Maps location search for Cafe Bahar, Himayatnagar, Hyderabad; location needs confirmation"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            onError={() => setMapFailed(true)}
          />
          {mapFailed && (
            <p className="map-error" role="status">
              Map preview unavailable. Use the map link to open Google Maps.
            </p>
          )}
          <a className="map-open-link" href={contact.maps} target="_blank" rel="noreferrer">
            Open map reference in Google Maps <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="inner-page not-found section">
      <p className="eyebrow eyebrow-dark">PAGE NOT FOUND</p>
      <h1>Let’s get you<br /><em>back to the table.</em></h1>
      <a className="button button-gold" href="/">Return home <ArrowRight size={16} /></a>
    </div>
  );
}
