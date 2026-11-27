# Hotel Bajrangi

# Build a Premium Single-Page Website for Hotel Bajrangi, Pandukeshwar, Uttarakhand

Create a visually stunning, premium, modern, and fully responsive SINGLE-PAGE HOTEL WEBSITE for **Hotel Bajrangi**, located in Pandukeshwar, Uttarakhand.

The website should have an elegant mountain-hotel atmosphere, excellent UI/UX, beautiful visual storytelling, smooth animations, and a professional hospitality design.

The final result should feel like a premium hotel website, not a generic template.

# 1. MANDATORY IMAGE RULES — NO JSON IMAGES

**STRICTLY DO NOT USE JSON IMAGES. DO NOT CONVERT ATTACHED IMAGES INTO JSON.**

This is a non-negotiable requirement for the entire project.

- Never create `images.json`.
- Never create `image.json`.
- Never create `gallery.json`.
- Never create any JSON file for storing image paths or image information.
- Never store image URLs or image objects in JSON arrays.
- Never convert attached images into JSON, Base64, or encoded data.
- Never use JSON-based image mapping or dynamic image-loading methods.
- Never use Unsplash, Pexels, random external image URLs, or stock image APIs.
- Never replace supplied images with random online images.

**USE DIRECT IMAGE IMPORTS ONLY.**

First inspect the actual project assets and attached images.

Import the original image files directly into React components using their real filenames and extensions.

Example:

```jsx
import hotelExterior from "./assets/hotel-exterior.jpg";
import hotelRoom from "./assets/hotel-room.webp";
import hotelRestaurant from "./assets/hotel-restaurant.png";

<img src={hotelExterior} alt="Hotel Bajrangi exterior" />
<img src={hotelRoom} alt="Hotel Bajrangi room" />
<img src={hotelRestaurant} alt="Hotel Bajrangi restaurant" />
```

These filenames are examples only. Use the actual filenames available in the project.

Use the supplied images directly. Do not convert, rename, encode, or transform them into JSON.

If some sections do not have suitable images, use elegant CSS backgrounds or design elements instead of fetching random images.

**FINAL IMAGE RULE: IMPORT ACTUAL LOCAL IMAGE FILES DIRECTLY AND USE THEM IN JSX. JSON IMAGE METHODS ARE STRICTLY PROHIBITED.**

# 2. HOTEL INFORMATION

Use the following business information throughout the website.

**Hotel Name:** Hotel Bajrangi

**Hindi Name:** होटल बजरंगी

**Category:** Hotel

**Address:** Hotel Bajrangi, Pandukeshwar, Pail Chak Bhyudar, Uttarakhand 246443, India

**Phone Number:** 07906355057

**Google Maps Location:**
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.9880875748536!2d79.54387871083176!3d30.63429329027804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a785f1c5212757%3A0xfa72ec6689cc2b!2sHotel%20Bajrangi!5e0!3m2!1sen!2sin!4v1795772750114!5m2!1sen!2sin

# 3. DESIGN DIRECTION — PREMIUM MOUNTAIN HOSPITALITY

Create an elegant visual identity inspired by Uttarakhand's mountains and peaceful Himalayan surroundings.

Suggested colour palette:
- Deep forest green.
- Warm ivory.
- Natural beige.
- Earthy brown.
- Muted golden accents.
- Clean white.

Use:
- Premium typography.
- Large beautiful hotel imagery.
- Elegant section spacing.
- Soft shadows.
- Modern rounded cards.
- Beautiful buttons.
- High-quality visual hierarchy.
- Subtle gradients.
- Smooth transitions.

Avoid excessive colours, clutter, and generic website layouts.

# 4. WEBSITE SECTIONS

Build the complete website on ONE SINGLE PAGE.

## A. Premium Hero Section

Create a full-screen, visually impressive hero section.

Requirements:
- Large hotel background image using a directly imported local image.
- Beautiful image slider with 3–4 slides if enough images are available.
- Dark transparent overlay for readable text.
- Premium heading and subtitle.
- Smooth slide transitions.
- Attractive CTA buttons.

Suggested heading:

**"Your Comfortable Stay in the Heart of the Himalayas"**

Supporting text:

"Experience a peaceful and comfortable stay at Hotel Bajrangi, Pandukeshwar — a convenient stop for pilgrims and travellers exploring Badrinath, Hemkund Sahib, and the beautiful Valley of Flowers."

Buttons:
- Explore Our Rooms
- Call Now
- Get Directions

Add elegant entrance animations and a subtle scroll indicator.

## B. About Hotel Bajrangi

Create a beautiful introduction section with a two-column layout.

Introduce Hotel Bajrangi as a budget-friendly, smoke-free hotel located along the Badrinath Road in Pandukeshwar.

Highlight:
- Convenient location for pilgrims and trekkers.
- Clean and airy rooms.
- On-site restaurant.
- Complimentary breakfast.
- Parking facilities.
- Helpful and polite management.
- Comfortable atmosphere for travellers.

Use a large hotel image alongside the content.

## C. Accommodation Section

Create an attractive accommodation section with premium room cards.

Showcase comfortable hotel accommodation.

Use available room photographs from the actual project assets.

Each card should include:
- Room photograph.
- Elegant room title.
- Short description.
- Available facilities where confirmed.
- Call to Enquire button.

Do not invent room categories, room dimensions, bed configurations, or facilities that have not been provided.

Add subtle hover effects and smooth animations.

## D. Restaurant & Dining

Create a beautiful restaurant section with an attractive food-focused layout.

Highlight:
- On-site restaurant.
- Complimentary breakfast.
- Good food.
- Convenient dining for hotel guests.
- Comfortable dining atmosphere.

Use supplied restaurant and food photographs wherever available.

Create a premium layout with an attractive heading:

**"Good Food, Warm Hospitality"**

Do not invent a menu, food prices, or specific cuisines.

## E. Facilities & Amenities

Create a modern grid of feature cards with Lucide icons.

Include:

- Complimentary Breakfast.
- On-Site Restaurant.
- Room Service.
- Laundry Service.
- On-Site Parking.
- Smoke-Free Property.
- Clean and Airy Rooms.
- Convenient Highway Access.

Each card should have a consistent design, attractive icon, and subtle hover animation.

## F. Explore Uttarakhand

This section should make the website visually engaging for pilgrims and adventure travellers.

Create attractive destination cards for:

**Badrinath**
Highlight its importance as a pilgrimage destination.

**Hemkund Sahib**
Introduce it as an important pilgrimage destination in the Himalayan region.

**Valley of Flowers**
Showcase the natural beauty and trekking appeal of this famous destination.

Use supplied local images if available.

Do not invent exact travel distances or journey times.

Heading suggestion:

**"Your Gateway to Himalayan Journeys"**

Supporting text:

"Stay at Hotel Bajrangi and enjoy a convenient base for exploring the spiritual and natural beauty of Uttarakhand."

## G. Why Choose Hotel Bajrangi?

Create a visually attractive section with 4–6 benefit cards.

Highlight:
- Budget-friendly accommodation.
- Clean and airy rooms.
- Polite management.
- Good food.
- Convenient Badrinath Road location.
- Parking facilities.

Use elegant icons and premium card styling.

## H. Guest Experience

Create a beautiful section focused on hospitality and guest comfort.

Highlight the supplied guest feedback:
- Polite management.
- Clean and airy rooms.
- Good food.
- Convenient highway access.

The supplied listing shows 123 reviews. You may display "123 Reviews" only if the rating information is presented without inventing a numerical star rating.

Do not create fake customer names, fake testimonials, or fabricated review quotes.

## I. Photo Gallery

Create a premium photo gallery using the actual supplied images.

Requirements:
- Responsive image grid or masonry layout.
- Beautiful hover zoom effects.
- Click-to-open lightbox.
- Smooth transitions.
- Elegant image spacing.
- Consistent image proportions.

Every image must be imported directly from the actual local assets.

**Never use JSON image arrays, JSON image maps, or external image URLs.**

## J. Booking & Enquiry Section

Create a premium booking enquiry section with a beautiful background and clear form layout.

Include:
- Guest Name.
- Phone Number.
- Check-in Date.
- Check-out Date.
- Number of Adults.
- Number of Children.
- Preferred Room Type.
- Additional Message.

Add a prominent **"Send Booking Enquiry"** button.

Make the form functional:
- Validate required fields.
- Display a clear submission status.
- If there is no backend, use a WhatsApp enquiry fallback with all entered details.
- Do not falsely claim a reservation has been confirmed.

Use the following phone number:

07906355057

### Pricing Display

The supplied indicative listing prices for 28–29 November 2026 for 2 adults were:

- MakeMyTrip: ₹1,434 per night.
- Goibibo: ₹1,437 per night.

These are date-specific third-party listing prices, not guaranteed direct hotel rates.

If displaying them, clearly label them as indicative historical listing prices and mention that actual rates depend on dates, availability, and booking platform.

Do not present them as fixed current prices.

## K. Contact & Location

Create a premium contact section.

Display:

**Hotel Bajrangi**

होटल बजरंगी

**Address:**
Pandukeshwar, Pail Chak Bhyudar, Uttarakhand 246443, India

**Phone:**
07906355057

Add:
- Click-to-call button.
- Google Maps directions button.
- Embedded Google Map.
- Address card.
- Contact information card.

Phone link:

`tel:07906355057`

Google Maps directions link:

https://www.google.com/maps/search/?api=1&query=Hotel+Bajrangi+Pandukeshwar+Uttarakhand

Use the exact Google Maps embed URL provided in the hotel information section.

Make the embedded map responsive and visually integrated into the page.

## L. Footer

Create a premium footer with:
- Hotel Bajrangi branding.
- Hindi hotel name.
- Short description.
- Quick navigation links.
- Phone number.
- Full address.
- Google Maps directions link.
- Copyright information.

# 5. UI/UX & ANIMATION REQUIREMENTS

Make the entire website feel polished and premium.

Add:
- Smooth scrolling.
- Sticky transparent navigation.
- Navigation background change on scroll.
- Hero image slider.
- Scroll reveal animations.
- Fade-in and slide-up effects.
- Subtle parallax effects.
- Image hover zoom.
- Beautiful card hover transitions.
- Animated CTA buttons.
- Mobile-friendly navigation.
- Floating call button on mobile.
- Elegant loading and transition effects where appropriate.

Do not overload the page with animations. Prioritize smooth performance and excellent usability.

# 6. RESPONSIVE DESIGN

The website must work perfectly on:
- Desktop.
- Laptop.
- Tablet.
- Mobile phones.

Mobile requirements:
- Beautiful responsive hero.
- Proper image cropping.
- Easy-to-use navigation.
- Full-width booking and contact buttons.
- Readable typography.
- No horizontal overflow.
- Optimized section spacing.

# 7. TECHNICAL REQUIREMENTS

- Inspect the existing project before making changes.
- Maintain the existing framework and project setup.
- Use React components and clean reusable code.
- Use Lucide icons if available.
- Use semantic HTML.
- Optimize image loading.
- Use proper alt attributes.
- Add SEO-friendly page title and meta description.
- Add relevant local business/hotel structured data using only verified information.
- Ensure all buttons and links work.
- Avoid unnecessary dependencies.
- Ensure no broken images or browser console errors.

# 8. SINGLE-PAGE REQUIREMENT

This project must contain ONLY ONE PAGE.

All navigation links should smoothly scroll to sections of the same homepage.

Do not create separate routes or additional pages.

# 9. FINAL CHECKLIST — MUST COMPLETE

Before finishing the website:

1. Inspect all supplied and attached images.
2. Import images directly from their original local asset files.
3. Never convert attached images into JSON.
4. Do not create or use any JSON image files.
5. Search the entire project for JSON-based image loading and remove it.
6. Verify all image imports and paths.
7. Confirm the website is a single-page website.
8. Test the hero slider, navigation, enquiry form, call button, and Google Maps.
9. Check responsive layouts on mobile, tablet, and desktop.
10. Fix any broken images, layout issues, or console errors.

**FINAL NON-NEGOTIABLE INSTRUCTION: NO JSON IMAGES. NO JSON IMAGE ARRAYS. NO JSON IMAGE MAPPING. DO NOT CONVERT ATTACHED IMAGES INTO JSON. USE DIRECT IMPORTS OF THE ORIGINAL IMAGE FILES AND DISPLAY THEM IN JSX THROUGHOUT THE WEBSITE.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8f4c85f9-e62c-4d2e-aed6-556d3807822a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
