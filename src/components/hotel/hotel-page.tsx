import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Ban,
  BedDouble,
  Camera,
  CarFront,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Flower2,
  Landmark,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Route,
  Shirt,
  Utensils,
  Wind,
  X,
  ConciergeBell,
} from "lucide-react";

import hotelExterior from "@/assets/image.png";
import snowyTempleView from "@/assets/image-2.png";
import eveningEntrance from "@/assets/image-3.png";
import bathroomView from "@/assets/image-4.png";
import windowRoom from "@/assets/image-5.png";
import mountainRoad from "@/assets/image-6.png";
import bedroomView from "@/assets/image-7.png";
import twinRoom from "@/assets/image-8.png";
import bathroomDetail from "@/assets/image-9.png";
import mountainBalcony from "@/assets/image-10.png";
import { Button } from "@/components/ui/button";
import { bookingEnquirySchema } from "@/lib/booking-enquiry";

const hotelPhone = "07906355057";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Bajrangi+Pandukeshwar+Uttarakhand";
const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.9880875748536!2d79.54387871083176!3d30.63429329027804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a785f1c5212757%3A0xfa72ec6689cc2b!2sHotel%20Bajrangi!5e0!3m2!1sen!2sin!4v1795772750114!5m2!1sen!2sin";

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => {
        target.dataset.visible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
}

function HotelHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="nav-shell" data-scrolled={scrolled}>
      <div className="container-hotel nav-inner">
        <a className="brand-lockup" href="#home" onClick={closeMenu} aria-label="Hotel Bajrangi home">
          <span className="brand-mark" aria-hidden="true"><Mountain size={24} strokeWidth={1.6} /></span>
          <span className="brand-words">
            <span className="brand-name">Hotel Bajrangi</span>
            <span className="brand-hindi">होटल बजरंगी</span>
          </span>
        </a>

        <nav className={`desktop-nav${mobileOpen ? " desktop-nav--open" : ""}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>The hotel</a>
          <a href="#rooms" onClick={closeMenu}>Rooms</a>
          <a href="#dining" onClick={closeMenu}>Dining</a>
          <a href="#experiences" onClick={closeMenu}>Explore</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${hotelPhone}`} aria-label="Call Hotel Bajrangi">
            <Phone size={16} /> <span>07906 355 057</span>
          </a>
          <a className="action-link action-link--primary nav-book" href="#booking">Enquire <ArrowUpRight size={16} /></a>
          <Button
            variant="icon"
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((isOpen) => !isOpen)}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeImage = activeSlide === 1
    ? mountainBalcony
    : activeSlide === 2
      ? windowRoom
      : activeSlide === 3
        ? twinRoom
        : hotelExterior;
  const activeAlt = activeSlide === 1
    ? "Hotel balcony opening toward a Himalayan valley"
    : activeSlide === 2
      ? "Bright guest room with a wide mountain-view window"
      : activeSlide === 3
        ? "A guest room prepared for a comfortable stay"
        : "Hotel Bajrangi beside the forested mountains of Pandukeshwar";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 4);
    }, 6200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="home" aria-roledescription="carousel" aria-label="Hotel Bajrangi photo highlights">
      <div className="hero-images" aria-hidden="true">
        <img className="hero-slide" data-active={activeSlide === 0} src={hotelExterior} alt="" fetchPriority="high" />
        <img className="hero-slide" data-active={activeSlide === 1} src={mountainBalcony} alt="" />
        <img className="hero-slide" data-active={activeSlide === 2} src={windowRoom} alt="" />
        <img className="hero-slide" data-active={activeSlide === 3} src={twinRoom} alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="container-hotel hero-content">
        <div className="hero-copy">
          <p className="hero-kicker"><span /> Pandukeshwar · Uttarakhand</p>
          <h1>Your Comfortable Stay in the <em>Heart of the Himalayas</em></h1>
          <p className="hero-description">
            A peaceful, welcoming stop at Hotel Bajrangi — well placed for pilgrims and travellers exploring Badrinath, Hemkund Sahib, and the Valley of Flowers.
          </p>
          <div className="hero-actions">
            <a className="action-link action-link--primary" href="#rooms">Explore our rooms <ArrowRight size={17} /></a>
            <a className="action-link action-link--light" href={`tel:${hotelPhone}`}><Phone size={16} /> Call now</a>
            <a className="hero-directions" href={directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15} /></a>
          </div>
        </div>

        <div className="hero-bottom-row">
          <a className="scroll-cue" href="#about"><span className="scroll-cue-mark"><span className="scroll-dot" /></span><span>Scroll to discover</span></a>
          <div className="hero-controls" aria-label="Choose a hotel photo">
            <span className="hero-count">0{activeSlide + 1}<span> / 04</span></span>
            <Button variant="icon" type="button" aria-label="Previous photo" onClick={() => setActiveSlide((activeSlide + 3) % 4)}><ChevronLeft size={19} /></Button>
            <Button variant="icon" type="button" aria-label="Next photo" onClick={() => setActiveSlide((activeSlide + 1) % 4)}><ChevronRight size={19} /></Button>
          </div>
        </div>
        <span className="sr-only" aria-live="polite">{activeAlt}</span>
      </div>
    </section>
  );
}

function IntroStrip() {
  return (
    <div className="intro-strip">
      <div className="container-hotel intro-strip-inner">
        <p><span className="intro-mark">01</span> A thoughtful stop on the Badrinath Road</p>
        <p><Coffee size={17} /> Complimentary breakfast</p>
        <p><Utensils size={17} /> On-site restaurant</p>
        <p><CarFront size={18} /> On-site parking</p>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="section-space about-section" id="about">
      <div className="container-hotel about-grid">
        <div className="about-image-wrap reveal" data-reveal data-visible="false">
          <img src={mountainBalcony} alt="Hotel balcony looking out toward the mountain valley" loading="lazy" />
          <div className="about-photo-note"><Mountain size={18} /><span>Stay close to the journey</span></div>
          <div className="about-number">Pandukeshwar<br /><span>Uttarakhand</span></div>
        </div>
        <div className="about-copy reveal" data-reveal data-visible="false">
          <p className="eyebrow">A warm welcome, along the way</p>
          <h2 className="section-title">Rest well.<br /><em>Continue renewed.</em></h2>
          <p className="lead">Set along Badrinath Road in Pandukeshwar, Hotel Bajrangi offers a budget-friendly, smoke-free place to pause between mountain journeys.</p>
          <p className="body-copy">Find clean, airy rooms, an on-site restaurant, complimentary breakfast, parking, and a helpful team ready to make your stay comfortable. A practical base for pilgrims, trekkers, and travellers discovering the high Himalaya.</p>
          <div className="about-highlights">
            <span><span className="small-check">✓</span> Helpful, polite management</span>
            <span><span className="small-check">✓</span> Convenient highway access</span>
            <span><span className="small-check">✓</span> A comfortable atmosphere</span>
          </div>
          <a className="text-link" href="#amenities">Discover the comforts <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}

function RoomsSection() {
  return (
    <section className="section-space rooms-section" id="rooms">
      <div className="container-hotel">
        <div className="section-heading-row reveal" data-reveal data-visible="false">
          <div>
            <p className="eyebrow">A place to settle in</p>
            <h2 className="section-title">Comfort for the<br /><em>road ahead.</em></h2>
          </div>
          <p className="lead rooms-intro">Light-filled spaces and a restful atmosphere make it easier to slow down, sleep well, and set out refreshed.</p>
        </div>
        <div className="room-grid">
          <article className="room-card lift reveal" data-reveal data-visible="false">
            <div className="room-photo image-zoom"><img src={windowRoom} alt="Hotel room with a wide window and a comfortable sitting area" loading="lazy" /><span className="room-index">01</span></div>
            <div className="room-card-copy"><p className="eyebrow">A restful pause</p><h3>Room to breathe</h3><p>A bright, airy setting to unwind after a day on the mountain road.</p><a className="text-link" href={`tel:${hotelPhone}`}>Call to enquire <ArrowRight size={16} /></a></div>
          </article>
          <article className="room-card lift reveal" data-reveal data-visible="false">
            <div className="room-photo image-zoom"><img src={twinRoom} alt="Clean guest room with two separate beds" loading="lazy" /><span className="room-index">02</span></div>
            <div className="room-card-copy"><p className="eyebrow">A welcome reset</p><h3>Settle in together</h3><p>A calm, comfortable room for travellers sharing the journey.</p><a className="text-link" href={`tel:${hotelPhone}`}>Call to enquire <ArrowRight size={16} /></a></div>
          </article>
          <article className="room-card lift reveal" data-reveal data-visible="false">
            <div className="room-photo image-zoom"><img src={bedroomView} alt="Prepared bedroom with warm wood details" loading="lazy" /><span className="room-index">03</span></div>
            <div className="room-card-copy"><p className="eyebrow">Easy evenings</p><h3>Rest, your way</h3><p>Thoughtful simplicity and a quiet place to recharge between plans.</p><a className="text-link" href={`tel:${hotelPhone}`}>Call to enquire <ArrowRight size={16} /></a></div>
          </article>
        </div>
        <p className="room-note">For current availability and room details, please contact the hotel directly.</p>
      </div>
    </section>
  );
}

function DiningSection() {
  return (
    <section className="dining-section" id="dining">
      <div className="container-hotel dining-grid">
        <div className="dining-art reveal" data-reveal data-visible="false" aria-hidden="true">
          <span className="dining-sun" />
          <span className="dining-line dining-line--one" />
          <span className="dining-line dining-line--two" />
          <div className="dining-art-label"><Coffee size={22} /><span>Make room<br />for a slower morning</span></div>
          <div className="dining-art-word">Swaad<br /><em>& warmth</em></div>
        </div>
        <div className="dining-copy reveal" data-reveal data-visible="false">
          <p className="eyebrow">At the table</p>
          <h2 className="section-title">Good food,<br /><em>warm hospitality.</em></h2>
          <p className="lead">A convenient on-site restaurant and complimentary breakfast bring a little ease to days spent travelling through the mountains.</p>
          <div className="dining-features">
            <div><span className="dining-icon"><Utensils size={20} /></span><span><strong>On-site restaurant</strong><small>Good food, close at hand</small></span></div>
            <div><span className="dining-icon"><Coffee size={20} /></span><span><strong>Complimentary breakfast</strong><small>A gentle start to the day</small></span></div>
          </div>
          <a className="action-link action-link--dark" href={`tel:${hotelPhone}`}>Ask about dining <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  return (
    <section className="section-space amenities-section" id="amenities">
      <div className="container-hotel">
        <div className="section-heading-centered reveal" data-reveal data-visible="false">
          <p className="eyebrow">Thoughtful essentials</p>
          <h2 className="section-title">The comforts that<br /><em>make a difference.</em></h2>
          <p className="lead">Everything you need for an easy, comfortable pause on your Himalayan journey.</p>
        </div>
        <div className="amenity-grid">
          <article className="amenity-item"><span className="amenity-icon"><Coffee /></span><h3>Complimentary breakfast</h3><p>A welcoming start before the day unfolds.</p></article>
          <article className="amenity-item"><span className="amenity-icon"><Utensils /></span><h3>On-site restaurant</h3><p>Good food and convenient dining for guests.</p></article>
          <article className="amenity-item"><span className="amenity-icon"><ConciergeBell /></span><h3>Room service</h3><p>Comfort and care when you need it.</p></article>
          <article className="amenity-item"><span className="amenity-icon"><Shirt /></span><h3>Laundry service</h3><p>A helpful extra for longer journeys.</p></article>
          <article className="amenity-item"><span className="amenity-icon"><CarFront /></span><h3>On-site parking</h3><p>A convenient arrival for road travellers.</p></article>
          <article className="amenity-item"><span className="amenity-icon"><Ban /></span><h3>Smoke-free property</h3><p>A fresher, more comfortable environment.</p></article>
          <article className="amenity-item"><span className="amenity-icon"><Wind /></span><h3>Clean, airy rooms</h3><p>Room to settle in and rest well.</p></article>
          <article className="amenity-item"><span className="amenity-icon"><Route /></span><h3>Convenient highway access</h3><p>Well placed along the Badrinath Road.</p></article>
        </div>
      </div>
    </section>
  );
}

function ExperiencesSection() {
  return (
    <section className="section-space experience-section" id="experiences">
      <div className="container-hotel">
        <div className="experience-heading reveal" data-reveal data-visible="false">
          <div><p className="eyebrow">The mountains are calling</p><h2 className="section-title">Your gateway to<br /><em>Himalayan journeys.</em></h2></div>
          <p className="lead">Stay at Hotel Bajrangi and enjoy a convenient base for exploring the spiritual and natural beauty of Uttarakhand.</p>
        </div>
        <div className="destination-grid">
          <article className="destination-card destination-card--one lift"><span className="destination-number">01 / PILGRIMAGE</span><span className="destination-icon"><Landmark size={27} /></span><h3>Badrinath</h3><p>A revered pilgrimage destination, set high in the Himalayan region.</p><span className="destination-foot">A journey of devotion <ArrowUpRight size={16} /></span></article>
          <article className="destination-card destination-card--two lift"><span className="destination-number">02 / PILGRIMAGE</span><span className="destination-icon"><Mountain size={27} /></span><h3>Hemkund Sahib</h3><p>An important place of pilgrimage in a remarkable mountain setting.</p><span className="destination-foot">A journey of faith <ArrowUpRight size={16} /></span></article>
          <article className="destination-card destination-card--three lift"><span className="destination-number">03 / NATURE</span><span className="destination-icon"><Flower2 size={27} /></span><h3>Valley of Flowers</h3><p>A celebrated Himalayan landscape, known for alpine blooms and trekking.</p><span className="destination-foot">A journey into nature <ArrowUpRight size={16} /></span></article>
        </div>
        <p className="destination-note"><MapPin size={15} /> Ask locally about seasonal access and travel conditions.</p>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="why-section forest-panel mountain-pattern">
      <div className="container-hotel why-grid">
        <div className="why-intro reveal" data-reveal data-visible="false">
          <p className="eyebrow">Why Hotel Bajrangi</p>
          <h2 className="section-title">A little more<br /><em>ease in the hills.</em></h2>
          <p>Simple comforts, a practical location, and a team that welcomes you in.</p>
          <a className="action-link action-link--primary" href="#booking">Plan your stay <ArrowRight size={17} /></a>
        </div>
        <div className="why-list">
          <div><span>01</span><strong>Budget-friendly accommodation</strong><ArrowUpRight size={18} /></div>
          <div><span>02</span><strong>Clean, airy rooms</strong><ArrowUpRight size={18} /></div>
          <div><span>03</span><strong>Polite, helpful management</strong><ArrowUpRight size={18} /></div>
          <div><span>04</span><strong>Good food, close at hand</strong><ArrowUpRight size={18} /></div>
          <div><span>05</span><strong>Convenient Badrinath Road location</strong><ArrowUpRight size={18} /></div>
          <div><span>06</span><strong>On-site parking for the journey</strong><ArrowUpRight size={18} /></div>
        </div>
      </div>
    </section>
  );
}

function GuestExperienceSection() {
  return (
    <section className="guest-section section-space" id="guest-experience">
      <div className="container-hotel guest-grid">
        <div className="guest-count reveal" data-reveal data-visible="false">
          <span className="guest-count-number">123</span>
          <span className="guest-count-label">guest reviews</span>
          <span className="guest-count-rule" />
          <p>Thoughts shared by people who have stayed along the way.</p>
        </div>
        <div className="guest-copy reveal" data-reveal data-visible="false">
          <p className="eyebrow">The guest experience</p>
          <h2 className="section-title">A comfortable stay,<br /><em>remembered warmly.</em></h2>
          <p className="lead">Guests value the little things that make a mountain journey easier.</p>
          <div className="guest-qualities"><span>Polite management</span><span>Clean, airy rooms</span><span>Good food</span><span>Convenient highway access</span></div>
          <p className="guest-disclaimer">123 reviews · No rating shown</p>
        </div>
      </div>
    </section>
  );
}

type GalleryPhoto = { src: string; alt: string };

function PhotoGallery() {
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <section className="section-space gallery-section" id="gallery">
      <div className="container-hotel">
        <div className="gallery-heading reveal" data-reveal data-visible="false">
          <div><p className="eyebrow">A glimpse of the stay</p><h2 className="section-title">A place in the<br /><em>mountains.</em></h2></div>
          <p className="lead">From the first light on the hillside to a quiet room at day’s end, take a look around Hotel Bajrangi.</p>
        </div>
        <div className="gallery-grid">
          <Button variant="gallery" className="gallery-tile gallery-tile--one image-zoom" type="button" aria-label="View Hotel Bajrangi exterior" onClick={() => setLightbox({ src: hotelExterior, alt: "Hotel Bajrangi exterior beneath forested hills" })}><img src={hotelExterior} alt="Hotel Bajrangi exterior beneath forested hills" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> Hotel exterior</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--two image-zoom" type="button" aria-label="View snowy Himalayan surroundings" onClick={() => setLightbox({ src: snowyTempleView, alt: "Snow-covered trees and a temple roof in the Himalayan region" })}><img src={snowyTempleView} alt="Snow-covered trees and a temple roof in the Himalayan region" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> Winter in the hills</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--three image-zoom" type="button" aria-label="View Hotel Bajrangi entrance at night" onClick={() => setLightbox({ src: eveningEntrance, alt: "Hotel entrance illuminated in the evening" })}><img src={eveningEntrance} alt="Hotel entrance illuminated in the evening" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> An evening welcome</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--four image-zoom" type="button" aria-label="View room bathroom" onClick={() => setLightbox({ src: bathroomView, alt: "Bathroom with a tiled interior and shower" })}><img src={bathroomView} alt="Bathroom with a tiled interior and shower" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> Room details</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--five image-zoom" type="button" aria-label="View guest room" onClick={() => setLightbox({ src: windowRoom, alt: "Bright guest room with a mountain-view window" })}><img src={windowRoom} alt="Bright guest room with a mountain-view window" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> A bright room</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--six image-zoom" type="button" aria-label="View snowy mountain road" onClick={() => setLightbox({ src: mountainRoad, alt: "Snow-covered mountain road and Himalayan peaks" })}><img src={mountainRoad} alt="Snow-covered mountain road and Himalayan peaks" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> Mountain scenery</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--seven image-zoom" type="button" aria-label="View prepared hotel bedroom" onClick={() => setLightbox({ src: bedroomView, alt: "Prepared hotel bedroom with warm wood details" })}><img src={bedroomView} alt="Prepared hotel bedroom with warm wood details" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> Settle in</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--eight image-zoom" type="button" aria-label="View twin guest room" onClick={() => setLightbox({ src: twinRoom, alt: "Guest room with two beds and wood flooring" })}><img src={twinRoom} alt="Guest room with two beds and wood flooring" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> Room to rest</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--nine image-zoom" type="button" aria-label="View second bathroom detail" onClick={() => setLightbox({ src: bathroomDetail, alt: "Clean tiled bathroom with a shower and sink" })}><img src={bathroomDetail} alt="Clean tiled bathroom with a shower and sink" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> Thoughtful details</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
          <Button variant="gallery" className="gallery-tile gallery-tile--ten image-zoom" type="button" aria-label="View mountain balcony" onClick={() => setLightbox({ src: mountainBalcony, alt: "Hotel balcony overlooking a Himalayan valley" })}><img src={mountainBalcony} alt="Hotel balcony overlooking a Himalayan valley" loading="lazy" /><span className="gallery-overlay"><Camera size={18} /> A mountain view</span><span className="gallery-open"><ArrowUpRight size={17} /></span></Button>
        </div>
      </div>
      {lightbox && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Hotel Bajrangi photo" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <Button variant="icon" className="lightbox-close" type="button" aria-label="Close photo" onClick={() => setLightbox(null)}><X size={22} /></Button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p>{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function BookingSection() {
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [formStatus, setFormStatus] = useState<{ type: "error" | "success"; message: string } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus(null);
    setWhatsAppUrl("");

    const formData = new FormData(event.currentTarget);
    const parsed = bookingEnquirySchema.safeParse({
      guestName: String(formData.get("guestName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      checkIn: String(formData.get("checkIn") ?? ""),
      checkOut: String(formData.get("checkOut") ?? ""),
      adults: Number(formData.get("adults")),
      children: Number(formData.get("children")),
      preferredRoomType: String(formData.get("preferredRoomType") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      setFormStatus({ type: "error", message: firstIssue?.message ?? "Please check your details and try again." });
      return;
    }

    const booking = parsed.data;
    const message = [
      "Hello Hotel Bajrangi, I would like to enquire about a stay.",
      `Guest name: ${booking.guestName}`,
      `Phone: ${booking.phone}`,
      `Check-in: ${booking.checkIn}`,
      `Check-out: ${booking.checkOut}`,
      `Adults: ${booking.adults}`,
      `Children: ${booking.children}`,
      `Room preference: ${booking.preferredRoomType || "Please advise"}`,
      `Message: ${booking.message || "None"}`,
    ].join("\n");
    const url = `https://wa.me/917906355057?text=${encodeURIComponent(message)}`;
    setWhatsAppUrl(url);
    setFormStatus({
      type: "success",
      message: "Your enquiry is ready in WhatsApp. Review the details and tap Send; your booking is not confirmed yet.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="booking-section section-space" id="booking">
      <div className="container-hotel booking-grid">
        <div className="booking-story reveal" data-reveal data-visible="false">
          <p className="eyebrow">Your stay begins here</p>
          <h2 className="section-title">Make the<br /><em>mountains yours.</em></h2>
          <p>Tell us a little about your trip. We’ll help you check availability and room details directly.</p>
          <div className="booking-image"><img src={mountainRoad} alt="Snow-covered road winding through the Himalayan mountains" loading="lazy" /><span><Mountain size={18} /> Your next journey starts here</span></div>
          <a className="booking-phone" href={`tel:${hotelPhone}`}><span><Phone size={18} /></span><span><small>Prefer to speak with us?</small><strong>07906 355 057</strong></span><ArrowUpRight size={18} /></a>
        </div>
        <div className="booking-form-wrap reveal" data-reveal data-visible="false">
          <div className="booking-form-heading"><span className="form-kicker">A few details</span><h3>Plan your stay</h3><p>Share your travel dates and we’ll help with your enquiry.</p></div>
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field-grid">
              <label className="field-label" htmlFor="guest-name">Guest name <span>*</span><input className="field-input" id="guest-name" name="guestName" autoComplete="name" placeholder="Your name" maxLength={100} required /></label>
              <label className="field-label" htmlFor="guest-phone">Phone number <span>*</span><input className="field-input" id="guest-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" maxLength={20} required /></label>
              <label className="field-label" htmlFor="check-in">Check-in <span>*</span><input className="field-input" id="check-in" name="checkIn" type="date" required /></label>
              <label className="field-label" htmlFor="check-out">Check-out <span>*</span><input className="field-input" id="check-out" name="checkOut" type="date" required /></label>
              <label className="field-label" htmlFor="adults">Adults <span>*</span><input className="field-input" id="adults" name="adults" type="number" min="1" step="1" defaultValue="2" required /></label>
              <label className="field-label" htmlFor="children">Children<input className="field-input" id="children" name="children" type="number" min="0" step="1" defaultValue="0" /></label>
            </div>
            <label className="field-label" htmlFor="room-preference">Preferred room type <span className="optional-label">Optional · tell us what you’re looking for</span><input className="field-input" id="room-preference" name="preferredRoomType" placeholder="Your preference" maxLength={80} /></label>
            <label className="field-label" htmlFor="booking-message">Additional message <span className="optional-label">Optional</span><textarea className="field-input booking-textarea" id="booking-message" name="message" placeholder="Anything else we should know?" maxLength={1000} rows={3} /></label>
            <Button type="submit" className="booking-submit">Send booking enquiry <ArrowRight size={17} /></Button>
            {formStatus && <p className={`form-status form-status--${formStatus.type}`} role={formStatus.type === "error" ? "alert" : "status"} aria-live="polite">{formStatus.message}</p>}
            {whatsAppUrl && <a className="whatsapp-followup" href={whatsAppUrl} target="_blank" rel="noreferrer">Continue in WhatsApp <ArrowUpRight size={16} /></a>}
            <p className="form-disclaimer">This is an enquiry only. Your stay is not booked until confirmed directly by the hotel.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section-space contact-section" id="contact">
      <div className="container-hotel">
        <div className="contact-heading reveal" data-reveal data-visible="false">
          <div><p className="eyebrow">Find us in Pandukeshwar</p><h2 className="section-title">A warm welcome<br /><em>in the mountains.</em></h2></div>
          <a className="action-link action-link--dark" href={directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-name-block"><span className="contact-mark"><Mountain size={23} /></span><span><strong>Hotel Bajrangi</strong><small>होटल बजरंगी</small></span></div>
            <div className="contact-detail"><span className="contact-detail-icon"><MapPin size={19} /></span><span><small>Our address</small><strong>Hotel Bajrangi, Pandukeshwar, Pail Chak Bhyudar, Uttarakhand 246443, India</strong></span></div>
            <div className="contact-detail"><span className="contact-detail-icon"><Phone size={19} /></span><span><small>Call the hotel</small><a href={`tel:${hotelPhone}`}><strong>07906355057</strong></a></span></div>
            <a className="contact-map-link" href={directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={16} /></a>
          </div>
          <div className="map-wrap"><iframe className="map-frame" src={mapEmbedUrl} title="Google Map showing Hotel Bajrangi in Pandukeshwar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
        </div>
      </div>
    </section>
  );
}

function HotelFooter() {
  return (
    <footer className="site-footer">
      <div className="container-hotel footer-main">
        <div className="footer-brand"><a className="brand-lockup" href="#home"><span className="brand-mark" aria-hidden="true"><Mountain size={24} strokeWidth={1.6} /></span><span className="brand-words"><span className="brand-name">Hotel Bajrangi</span><span className="brand-hindi">होटल बजरंगी</span></span></a><p>A comfortable, welcoming stay in Pandukeshwar — a thoughtful pause on your Himalayan journey.</p><a className="footer-call" href={`tel:${hotelPhone}`}><Phone size={16} /> 07906 355 057</a></div>
        <div className="footer-links"><p className="footer-label">Explore</p><a href="#about">The hotel</a><a href="#rooms">Rooms</a><a href="#dining">Dining</a><a href="#experiences">Uttarakhand</a><a href="#gallery">Photo gallery</a></div>
        <div className="footer-address"><p className="footer-label">Find us</p><p>Hotel Bajrangi<br />Pandukeshwar, Pail Chak Bhyudar<br />Uttarakhand 246443, India</p><a href={directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15} /></a></div>
        <div className="footer-cta"><span>Take a breath.<br /><em>You're in the hills.</em></span><a className="action-link action-link--primary" href="#booking">Enquire about a stay <ArrowRight size={16} /></a></div>
      </div>
      <div className="container-hotel footer-bottom"><span>© {new Date().getFullYear()} Hotel Bajrangi</span><span>Pandukeshwar · Uttarakhand · India</span><a href="#home">Back to top <ChevronDown size={14} /></a></div>
    </footer>
  );
}

export function HotelPage() {
  useScrollReveal();

  return (
    <main className="hotel-site">
      <HotelHeader />
      <HeroSection />
      <IntroStrip />
      <AboutSection />
      <RoomsSection />
      <DiningSection />
      <AmenitiesSection />
      <ExperiencesSection />
      <WhyChooseSection />
      <GuestExperienceSection />
      <PhotoGallery />
      <BookingSection />
      <ContactSection />
      <HotelFooter />
      <a className="floating-call" href={`tel:${hotelPhone}`} aria-label="Call Hotel Bajrangi"><Phone size={20} /><span>Call</span></a>
      <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowDown size={17} /></a>
    </main>
  );
}