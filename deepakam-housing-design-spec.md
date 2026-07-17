# Website Design Specification
## Deepakam Housing — Modern Website Redesign
**Version:** 1.0  
**Prepared by:** RedMind Technologies  
**Client:** Deepakam Housing Private Limited

---

## 1. Design Philosophy

The new Deepakam Housing website should communicate **trust, quality, and warmth** — the feeling of a developer who genuinely cares about delivering homes, not just properties. The visual direction should be **modern luxury real estate**, grounded, clean, and aspirational without being cold or corporate.

**Three core design pillars:**
1. **Credibility** — clean typography, structured layouts, verified badges
2. **Warmth** — earthy tones, human photography, customer stories
3. **Conversion** — clear CTAs, sticky enquiry forms, frictionless contact

---

## 2. Brand Identity

### Logo Usage
- Logo: Deepakam Housing (text-based or existing mark — source from client)
- Minimum clear space: equal to the height of the "D" in the logo on all sides
- Do not distort, recolor, or place on busy backgrounds

### Color Palette

| Role | Color Name | Hex |
|---|---|---|
| Primary | Deep Teal / Forest | `#1B4D3E` |
| Secondary | Warm Gold | `#C9A84C` |
| Accent | Soft Amber | `#F0B544` |
| Background (light) | Off-White Cream | `#F8F5F0` |
| Background (dark) | Charcoal | `#1C1C1E` |
| Text Primary | Near Black | `#1A1A1A` |
| Text Secondary | Medium Grey | `#6B6B6B` |
| Border / Divider | Light Warm Grey | `#E5E0D8` |
| Success / CTA | Forest Green | `#2D6A4F` |

> Note: Gold and Teal pairing communicates quality and trust — widely used in premium South Indian real estate. Can be adjusted to match existing brand assets if provided by client.

### Typography

| Usage | Font | Weight | Size |
|---|---|---|---|
| Hero Heading (H1) | Playfair Display | 700 | 56–72px |
| Section Heading (H2) | Playfair Display | 600 | 36–48px |
| Card Title (H3) | Inter | 600 | 20–24px |
| Body Text | Inter | 400 | 16–18px |
| Captions / Labels | Inter | 500 | 12–14px |
| CTA Button Text | Inter | 600 | 15–16px |

**Google Fonts import:**
```
Playfair Display (400, 600, 700)
Inter (400, 500, 600)
```

---

## 3. Layout System

- **Grid:** 12-column grid, max content width 1280px, gutters 24px
- **Section padding:** 80px top/bottom (desktop), 48px (tablet), 32px (mobile)
- **Card border radius:** 12px
- **Button border radius:** 8px (default), 999px (pill — for primary CTA)
- **Box shadow (cards):** `0 4px 24px rgba(0,0,0,0.08)`
- **Breakpoints:**
  - Mobile: 0–767px
  - Tablet: 768–1023px
  - Desktop: 1024px+

---

## 4. Page-by-Page Design Specs

---

### 4.1 HOME PAGE

#### Hero Section
- **Layout:** Full-width, 100vh (desktop), 70vh (mobile)
- **Background:** High-quality lifestyle image of a well-lit apartment interior or exterior shot of a completed Deepakam project (source from client). Overlay: dark gradient from bottom-left, 50% opacity.
- **Content (centered-left):**
  - Small label: `TRUSTED DEVELOPER SINCE 2011` — uppercase, gold color, 12px, letter-spacing 2px
  - H1: *"Building Homes,  
    Delivering Dreams."*
  - Body: *"Quality residential & commercial developments across Tamil Nadu and Kerala."*
  - CTA Buttons:
    - Primary pill button: `Explore Projects` (gold bg, dark text)
    - Ghost button: `Enquire Now` (white border, white text)
- **Scroll indicator:** Animated arrow at bottom center

#### Stats Bar (below hero)
Horizontal strip with 4 stats:

| Stat | Value |
|---|---|
| Projects Completed | 6+ |
| Happy Families | 100+ |
| Years of Excellence | 13+ |
| Cities | 2 |

- Background: Charcoal `#1C1C1E`
- Text: White heading, grey sub-label
- Separator: gold vertical line between stats

#### About Intro Section
- **Layout:** Two columns — left: text, right: image (interior/exterior photo)
- **Heading:** *"A Developer You Can Trust"*
- **Body:** 2–3 short paragraphs (sourced from About Us content in PRD)
- **Accent:** Thin gold left-border on a pull-quote:  
  *"We believe every home should be built on the foundation of trust."*
- **Link:** `Learn More About Us →`

#### Featured Projects Section
- **Heading:** *"Our Projects"*
- **Sub-label:** Chennai · Palakkad
- **Layout:** 3-column card grid (scroll carousel on mobile)
- **Project Card Design:**
  - Thumbnail image (16:9 ratio)
  - Status badge (top-right): `Completed` (green) or `Ongoing` (amber)
  - Card body: Project name, location, BHK type, CTA: `View Details`
- **Projects shown:** Deepakam Greens, Deepakam Manor, Villa Deepakam (feature 3; link to all)
- **Bottom CTA:** `View All Projects →`

#### Testimonials Section
- **Background:** Cream `#F8F5F0`
- **Heading:** *"What Our Homeowners Say"*
- **Layout:** Horizontal carousel with 3 testimonial cards visible (1 on mobile)
- **Card design:**
  - Large quote mark (gold, decorative)
  - Testimonial text (body size)
  - Reviewer name + project name
  - 5-star rating icon row
- **Navigation:** Dot indicators + prev/next arrows

#### Contact Strip (CTA Banner)
- **Background:** Deep Teal `#1B4D3E`
- **Content:**
  - Heading: *"Find Your Dream Home Today"*
  - Sub-text: Office addresses (Chennai & Palakkad), Phone: 9444651111
  - CTA Button: `Enquire Now` (gold bg, dark text)

---

### 4.2 ABOUT US PAGE

- **Hero:** Medium height (50vh), image of construction/team/project + gradient overlay
- **Heading:** *"About Deepakam Housing"*
- **Section 1:** Company overview (2-column: text left, image right)
- **Section 2: Vision Card**
  - Large teal card with gold icon
  - Heading: "Our Vision"
  - Text: *"To become the most preferred developer for quality home buyers."*
- **Section 3: Quality Policy**
  - White section, icon + heading + paragraph layout
- **Section 4: Why Choose Us — 4 Icon Blocks**

| Icon | Label | Description |
|---|---|---|
| 🏗 | On-Time Delivery | Projects delivered as committed since inception |
| 🤝 | Ethical Business | Transparent dealings, no hidden conditions |
| 🏆 | Quality Construction | Partnered with acclaimed architects and design firms |
| 📍 | Prime Locations | Strategically located projects in Chennai & Palakkad |

- **Section 5: Joint Venture CTA**
  - Subtle teal-bordered card
  - Text: "Interested in a Joint Venture?"
  - Button: `Get in Touch`

---

### 4.3 PROJECTS LISTING PAGE

- **Hero:** Short (30vh), text-only on dark background
- **Heading:** *"All Projects"*
- **Filter Bar (sticky):**
  - Tabs: `All` | `Chennai` | `Palakkad` | `Completed` | `Ongoing`
- **Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Project Card:**
  - Image (top, 16:9)
  - Status badge: `Completed` (green pill) / `Ready to Move` (teal pill)
  - Project name (H3, Playfair)
  - Type: Life Style / Executive / Premium / Villa
  - Location: City, Area
  - BHK Options
  - Button: `View Details` (outline style)

---

### 4.4 PROJECT DETAIL PAGE

**Layout (top-to-bottom):**

1. **Image Gallery** — full-width, large hero image + thumbnail row below (lightbox on click)
2. **Project Info Header**
   - Project name (H1)
   - Location, Type, Status badges inline
   - Price range (if available)
   - Button: `Enquire Now` (sticky on scroll — desktop sidebar)
3. **About the Project** — description paragraphs
4. **Key Details Table**

| Field | Example |
|---|---|
| Project Type | Executive Apartments |
| Configuration | 2 BHK & 3 BHK |
| Total Floors | G+3 |
| Location | Tambaram, Chennai |
| Status | Completed |
| Possession | Ready to Move |

5. **Nearby Landmarks** — icon list (Schools, Hospitals, Highway access, Temples, Malls)
6. **Testimonials** — 2 reviews from buyers of that specific project
7. **Enquiry Form** — sticky sidebar (desktop) or bottom section (mobile)

---

### 4.5 TESTIMONIALS PAGE

- **Layout:** Masonry or 3-column card grid
- **Card Design:**
  - White card, rounded corners, shadow
  - Gold opening quote mark
  - Testimonial text
  - Reviewer name (bold)
  - Project name tag (grey pill: e.g., `Deepakam ONE · Palakkad`)
  - Star rating

---

### 4.6 CONTACT PAGE

- **Layout:** 2 columns — left: form, right: info + map
- **Form Fields:**
  - Full Name
  - Phone Number
  - Email Address
  - Project Interested In (select dropdown)
  - Message (textarea)
  - Submit: `Send Enquiry` (gold button, full-width)
- **Right Side:**
  - Office Address blocks (Chennai + Palakkad) with map pin icons
  - Phone number with call link
  - Google Maps embed (both office locations, tabbed)
- **Sticky WhatsApp Button:** bottom-right corner (mobile + desktop)

---

## 5. Component Library

### Button Styles

| Variant | Style |
|---|---|
| Primary (CTA) | Gold bg `#C9A84C`, dark text, pill radius, 16px, padding 14px 32px |
| Secondary | Teal bg `#1B4D3E`, white text, 8px radius |
| Outline | Transparent bg, teal border + text |
| Ghost | Transparent bg, white border + text (on dark bg) |
| Text Link | Underline on hover, teal color |

### Card Variants
- **Project Card** — image top, info body, CTA bottom
- **Testimonial Card** — quote top, text, reviewer bottom
- **Stat Card** — large number, label, icon
- **Office Card** — icon + address + map link

### Badge / Tag
- `Completed` — green bg `#2D6A4F`, white text
- `Ready to Move` — teal bg, white text
- `Ongoing` — amber bg `#F0B544`, dark text
- Location tag — light grey bg, dark grey text

---

## 6. Mobile Design Notes

- Navigation: Hamburger menu with slide-in drawer (right side)
- Hero: Reduce H1 font to 36–40px, reduce padding
- Projects grid: Single column scroll
- Testimonials: Single card with swipe gesture
- Sticky bottom bar on mobile: `📞 Call` | `💬 WhatsApp` | `✉ Enquire`
- All tap targets: minimum 44×44px

---

## 7. Micro-interactions & Animation

| Element | Animation |
|---|---|
| Hero text | Fade up on load (0.4s delay) |
| Section headings | Slide in from left on scroll enter |
| Project cards | Scale up (1.02) on hover with shadow increase |
| CTA buttons | Background color transition 0.2s ease |
| Stats counter | Count-up animation on scroll into view |
| Testimonial carousel | Smooth slide transition |
| Nav links | Underline expand on hover |

---

## 8. SEO & Performance Guidelines

- All images: WebP format, lazy loaded, alt text required
- Meta title format: `[Project Name] — Deepakam Housing | [City]`
- Meta description: 150–160 characters per page
- H1 per page: exactly one
- Schema markup: `LocalBusiness`, `RealEstateAgent`, `Apartment`
- Sitemap.xml and robots.txt required
- Google Analytics + Google Search Console integration
- Page load target: under 3 seconds (LCP)

---

## 9. Tech Stack Recommendation

| Layer | Recommendation |
|---|---|
| CMS | WordPress (Elementor Pro) |
| Theme | Custom child theme or Astra Pro |
| Forms | WPForms or Contact Form 7 + SMTP |
| Maps | Google Maps Embed API |
| Performance | WP Rocket + Cloudflare CDN |
| Hosting | cPanel / Plesk (current stack) |
| SSL | Required — HTTPS enforced |

---

## 10. Deliverables Checklist

- [ ] Figma design file (Desktop + Mobile screens for all pages)
- [ ] Design system / component library in Figma
- [ ] WordPress theme setup with Elementor
- [ ] All pages built as per PRD content
- [ ] Enquiry form connected to client email
- [ ] WhatsApp chat button integrated
- [ ] Google Maps embedded
- [ ] Legal disclaimer on all pages
- [ ] Mobile responsive QA across devices
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] SEO meta tags setup
- [ ] Client walkthrough and handover

---

*Design Spec prepared by RedMind Technologies for Deepakam Housing Private Limited.*