# NYADW 2026 Website Content Update
## Claude Code Implementation Brief

**Website:** https://www.nyadw.org/  
**Project:** New York Asian Design Week 2026 — *Traces of Force*  
**Primary goal:** Update the existing website from the open-call phase to the exhibition phase while preserving the current structure, visual identity, graphic system, typography, spacing logic, interactions, and responsive behavior.

---

## 1. Project context

The 2026 open call has ended. NYADW has selected **9 exhibited works by 11 artists/designers**.

The website should now prioritize:

1. The upcoming exhibition, *Traces of Force*
2. The opening reception
3. A prominent RSVP action
4. The selected works and participating artists
5. Individual linked pages for every exhibited work

Open-call information must no longer be promoted on the homepage or elsewhere as an active opportunity. It should remain accessible only on the dedicated **Open Call** page, where it must clearly state that the current 2026 open call is closed.

### Public event information

- **Exhibition:** August 7–21, 2026
- **Opening Reception:** Friday, August 7, 2026, 6:00–9:00 PM
- **Venue:** Gallery 456 / Chinese American Arts Council
- **Address:** 456 Broadway, 3rd Floor, New York, NY 10013
- **Admission:** Free and open to all
- **Primary RSVP URL:** https://luma.com/krzzq87u
- **Alternate existing ticket URL:** https://www.eventbrite.com/e/traces-of-force-new-york-asian-design-week-2026-opening-tickets-1994859087230

Use one centralized `RSVP_URL` constant/config value throughout the site. Unless the repository already defines another confirmed official RSVP destination, use the Luma URL above as the primary link.

---

## 2. Non-negotiable implementation rules

### Preserve the existing design

Do **not** redesign the website.

Keep the existing:

- Overall page structure
- Black-and-white graphic identity
- Typography and type scale
- Linework, borders, image treatments, and backgrounds
- Header and footer styling
- Section widths and spacing rhythm
- Button styles
- Animation and transition language
- Existing desktop, tablet, and mobile behavior

Content may be reordered or replaced within the existing design system, but avoid introducing an unrelated card style, new visual theme, new color palette, or generic event-template appearance.

### Content rules

- Remove all active “Submit Work” messaging from the homepage and global header.
- Open-call requirements and submission instructions must exist only on the Open Call page.
- Do not fabricate dimensions, media, image credits, artwork dates, artist links, or program details that are not provided.
- Every one of the 9 works must have a dedicated, shareable URL.
- Every work card must link to its corresponding page.
- Preserve artist-name spelling and work-title capitalization as specified below.
- Avoid changing substantive artist statements or biographies. Minor punctuation, spacing, and obvious grammar corrections are acceptable.
- Do not use stock images or unrelated placeholder artwork in production.

---

## 3. Existing-site audit and required phase change

The live homepage is currently organized around the open call. It includes:

- A top banner announcing the July 24 open-call deadline
- A global “Submit Work” CTA
- Hero CTAs for submission and requirements
- A large open-call section
- Open-call dates in the event timeline
- Newsletter copy emphasizing open-call updates

Convert all of these from **application acquisition** to **exhibition attendance and discovery**.

### Global replacements

| Current function | New function |
|---|---|
| “Open Call — July 24” announcement | “Opening Reception — August 7, 6–9 PM” |
| “Submit Work” primary CTA | “RSVP” |
| “View Open Call Requirements” | “Explore the Exhibition” |
| Homepage open-call section | Exhibition details and selected works |
| Open-call-centric event timeline | Public exhibition timeline |
| Open-call newsletter copy | Exhibition, artist, and public-program updates |

The Open Call navigation item should remain, but it must link only to the archived/closed open-call page.

---

## 4. Global header and navigation

Keep the current visual header and navigation layout.

### Top announcement bar

Replace the current open-call announcement with:

> **Opening Reception — August 7, 6:00–9:00 PM**

CTA:

> **RSVP**

Link the CTA to `RSVP_URL`.

### Main navigation

Keep the same general navigation count and visual arrangement:

- Open Call
- 2026 Edition
- About
- Events
- Partners
- Contact

Recommended behavior:

- **Open Call** → `/open-call.html`
- **2026 Edition** → new or updated exhibition overview page, preferably `/2026-edition.html`
- **About** → preserve current destination
- **Events** → preserve current destination/anchor, with updated content
- **Partners** → preserve current destination/anchor
- **Contact** → preserve current destination/anchor

Replace the current header-level “Submit Work” button with:

> **RSVP**

Do not remove the button component; change its label and destination.

---

## 5. Homepage content plan

Preserve the homepage’s existing section rhythm and graphic framework. Replace the content according to the following sequence.

---

### Section 1 — Hero

#### Eyebrow

> New York Asian Design Week — 2026

#### Main title

> Traces  
> of Force

Preserve the current line break and title treatment.

#### Theme line

> Force Forms Matter

#### Intro copy

> A form is not a finished appearance — it is the consequence of contact. Between idea and material. Body and environment. Memory and transformation.

#### Primary CTA

> RSVP for the Opening

Link to `RSVP_URL`.

#### Secondary CTA

> Explore the Exhibition

Link to `/2026-edition.html` or the selected-works section if the project architecture requires an anchor.

#### Tertiary CTA

> Read Curatorial Statement

Preserve the current curatorial-statement destination.

---

### Section 2 — Exhibition details

Replace the current homepage Open Call section with an exhibition-focused section.

#### Section label

> NYADW 2026 Exhibition

#### Heading

> Nine Works. Eleven Artists.  
> Forces Made Visible.

#### Intro

> *Traces of Force* brings together nine works spanning architecture, painting, photography, installation, and furniture design. Presented as the inaugural Physical edition of New York Asian Design Week’s two-year dialogue between the physical and the digital, the exhibition approaches form not as a finished appearance, but as evidence of an encounter.

#### Detail fields

Use the existing stat/detail component style:

- **August 7–21, 2026**  
  Exhibition

- **August 7, 6:00–9:00 PM**  
  Opening Reception

- **Gallery 456**  
  456 Broadway, 3rd Floor

- **9 Works / 11 Artists**  
  Physical Edition

#### CTA row

- **RSVP**
- **View Selected Works**
- **Get Directions**

Directions link:

https://www.google.com/maps/search/?api=1&query=Gallery+456+456+Broadway+New+York+NY+10013

---

### Section 3 — Exhibition overview

Use a concise homepage version of the exhibition text.

#### Heading

> Form as Evidence of an Encounter

#### Copy

> Matter bends, stretches, burns, settles, fractures, and resists. Bodies, identities, environments, and cultures are shaped through comparable processes. Each work in *Traces of Force* begins with a force—structural, technological, emotional, environmental, or social—and considers the trace it leaves behind.
>
> Across the exhibition, Asian design does not appear as a singular visual language or recognizable set of motifs. It emerges through negotiation: between precision and imperfection, inheritance and transformation, displacement and belonging, technological acceleration and material resistance.

CTA:

> Read the Full Exhibition Statement

Link to `/2026-edition.html#exhibition-statement`.

---

### Section 4 — Selected works grid

Add a selected-works section using the site’s existing image and typography language. A 3 × 3 desktop arrangement is appropriate if it can be achieved without changing the visual system. On mobile, use the existing single-column or horizontal-scroll behavior.

#### Section label

> Selected Works

#### Heading

> Traces of Force

#### Intro

> Nine works by eleven artists and designers examine how structural, technological, emotional, environmental, and social forces become visible through matter, image, space, and making.

Each card must contain:

- Artwork image
- Work title
- Artist name or artist list
- Optional discipline label
- Accessible alt text
- Entire card or clear “View Work” link
- Dedicated work-page destination

#### Work cards and routes

1. **Tension Instrument**  
   Lihan Jin  
   Suggested label: Architecture  
   `/works/tension-instrument.html`

2. **Tension & Tranquility**  
   Niki Li  
   Suggested label: Visual Art / Photography  
   `/works/tension-and-tranquility.html`

3. **SANKAI – Mountain / Ocean / In-Between**  
   Jonathan Liang, Kurt Cheang, Lihan Jin, Zida Liu  
   Suggested label: Architecture  
   `/works/sankai.html`

4. **Tremor**  
   Dirk Tsai  
   Suggested label: Painting / Sculpture  
   `/works/tremor.html`

5. **汗水向下，薪火向上**  
   Yuhan (Celine) Song  
   Optional English subtitle: *One Kiln’s Flame, Generations of Touch*  
   Suggested label: Photography  
   `/works/one-kilns-flame.html`

6. **Residual Thermodynamics**  
   Kang Wang  
   Suggested label: Mixed-Media Installation  
   `/works/residual-thermodynamics.html`

7. **Traces of Transparency**  
   Yue Fan  
   Suggested label: Speculative Architecture / Design  
   `/works/traces-of-transparency.html`

8. **The Greater Archipelago**  
   Sanghoon Bae  
   Suggested label: Painting / Architectural Drawing  
   `/works/the-greater-archipelago.html`

9. **Hejduk Lamp**  
   Runxin Fu  
   Suggested label: Furniture / Product Design  
   `/works/hejduk-lamp.html`

Discipline labels are editorial suggestions, not supplied artwork metadata. Omit them rather than present them as authoritative if the current content model does not already use categories.

---

### Section 5 — Opening reception

This should be one of the most visually prominent sections on the homepage while still using the existing design language.

#### Section label

> Opening Reception

#### Heading

> Friday, August 7  
> 6:00–9:00 PM

#### Copy

> Join New York Asian Design Week for the opening of *Traces of Force*, featuring nine works by eleven artists and designers across architecture, painting, photography, installation, and furniture design.
>
> Meet participating artists and designers, explore the exhibition, and experience the inaugural Physical edition of NYADW’s two-year dialogue between physical and digital design.

#### Venue

> Gallery 456 / Chinese American Arts Council  
> 456 Broadway, 3rd Floor  
> New York, NY 10013

#### Admission line

> Free and open to all. RSVP requested.

#### CTA

> RSVP for the Opening

Link to `RSVP_URL`.

Secondary link:

> View on Map

---

### Section 6 — About NYADW

Preserve the existing section and wording unless technical cleanup is needed.

Recommended copy:

> New York Asian Design Week (NYADW) is an annual cultural platform celebrating the diverse voices shaping contemporary Asian design in New York City and beyond. Founded by Lighthouse Global Foundation Inc., NYADW brings together architects, artists, designers, makers, and creative thinkers whose work reflects the evolving relationship between culture, identity, technology, and the built environment.
>
> The event operates on a two-year curatorial cycle exploring two complementary themes: Physical and Digital. Each year focuses on one of these dimensions, creating an ongoing dialogue between tangible and virtual forms of design.

Keep the current Lighthouse Global Foundation introduction.

---

### Section 7 — Two-Year Dialogue

Preserve the current visual timeline and copy structure.

#### 2026 — Physical

> *Traces of Force* opens the cycle with a focus on the Physical—spaces, objects, materials, environments, installations, products, architecture, craft, and embodied experience. It examines physical design as the reaction of invisible forces: gravity, pressure, movement, material behavior, bodily habit, environmental change, and cultural memory.

#### 2027 — Digital

> The conversation turns toward the Digital—interfaces, virtual environments, AI, moving image, media art, online identity, and networked culture.

The 2028 and 2029 entries may remain unchanged.

---

### Section 8 — Events

Remove completed open-call milestones from the homepage’s primary event carousel or mark them as completed and place them after current public events.

The public-facing sequence should prioritize:

1. **Opening Reception**  
   August 7, 2026  
   6:00–9:00 PM  
   Gallery 456  
   CTA: RSVP

2. **Traces of Force Exhibition**  
   August 7–21, 2026  
   Gallery 456  
   CTA: Explore Exhibition

3. **Public Talks & Workshops**  
   August 15, 2026  
   Details to be announced  
   Do not invent time, speakers, or RSVP details.

4. **Closing Event**  
   August 21, 2026  
   Details to be announced  
   Do not invent time or format.

The press conference is not the homepage’s main public call to action. Omit it from the primary public carousel unless the event is confirmed as open to the public.

---

### Section 9 — Host, venue, and supporters

Preserve the existing host section and partner-logo treatment.

#### Host

> Hosted by Lighthouse Global Foundation

#### Venue partner

> Gallery 456 / Chinese American Arts Council

#### Funding credit

Use the following exact acknowledgment wherever the current site displays project funding or supporter credits:

> This project is made possible in part with funds from Creative Engagement, a regrant program supported by the New York City Department of Cultural Affairs in partnership with the City Council, and the New York State Council on the Arts with the support of the Office of the Governor and the New York State Legislature, and administered by the Lower Manhattan Cultural Council.

Do not replace the formal credit with a shortened paraphrase in the primary acknowledgment location.

Remove “Other Partners TBD” when it is publicly visible unless it is intentionally being retained as an active placeholder.

---

### Section 10 — Newsletter

Replace:

> Receive open call updates, exhibition announcements, artist features, and public program information.

With:

> Receive exhibition updates, artist features, public-program announcements, and news from New York Asian Design Week.

Preserve the existing form, validation, success state, and integration.

---

## 6. 2026 Edition / Exhibition overview page

Create or update a dedicated overview page at:

`/2026-edition.html`

Keep the site’s existing page-header and section styling.

### Required content order

1. Hero
2. Exhibition details
3. Full exhibition statement
4. Selected works grid
5. Opening reception CTA
6. Venue and access information
7. Funding acknowledgment
8. Footer

### Page hero copy

#### Eyebrow

> NYADW 2026 — Physical Edition

#### Title

> Traces of Force

#### Theme line

> Force Forms Matter

#### Intro

> Nine works by eleven artists and designers explore how force becomes visible through architecture, painting, photography, installation, furniture, material transformation, and the urban environment.

#### CTAs

- RSVP for the Opening
- View Selected Works
- Read Curatorial Statement

---

## 7. Full exhibition statement

Use the following copy on the 2026 Edition page.

> *Traces of Force* brings together nine works spanning architecture, painting, photography, installation, and furniture design. Presented as the inaugural Physical edition of New York Asian Design Week’s two-year dialogue between the physical and the digital, the exhibition approaches form not as a finished appearance, but as evidence of an encounter. Matter bends, stretches, burns, settles, fractures, and resists. Bodies, identities, environments, and cultures are shaped through comparable processes. Each work begins with a force—structural, technological, emotional, environmental, or social—and considers the trace it leaves behind.
>
> The exhibition unfolds through a series of pairings and correspondences, placing distinct materials and modes of production in conversation. Runxin Fu’s *Hejduk Lamp*, fabricated through precisely programmed non-planar 3D printing, is presented alongside Celine Song’s photographs of pottery making and kiln firing in Zhengjiayao Village. The contrast is immediate: one process choreographs the movement of a machine in pursuit of controlled precision, while the other preserves the minute variations of the hand—the pressure of fingers against clay, the repetition of inherited gestures, and the unpredictability of fire. Yet both reveal form as the accumulation of movement, heat, time, and knowledge. Rather than positioning technology and tradition as opposites, the pairing asks how different systems of making register the forces embedded within their production.
>
> Material tension takes another form in Lihan Jin’s *Tension Instrument* and Dirk Tsai’s *Tremor*. In *Tension Instrument*, a taut metal string bends wood into an architectural prototype, translating acoustic and structural tension into spatial form. In *Tremor*, canvas behaves as skin stretched and folded over a constructed wooden skeleton, swelling beyond the conventional plane of painting. One work explores tension as a means of structural and musical harmony; the other understands deformation as an expression of bodily and psychological resistance. In both, bending is not applied as a stylistic gesture. It emerges as the visible consequence of matter negotiating with force.
>
> The urban environment becomes the site of less visible pressures in three works that examine how contemporary cities are shaped by emotional, technological, and perceptual forces. Niki Li’s *Tension & Tranquility* presents fragmented digital visions of New York that register emotional turbulence, insecurity, and social division. Yue Fan’s *Traces of Transparency* projects these conditions into an augmented-reality future in which algorithms, advertisements, and personalized information continually rewrite architecture and public space. Sang Hoon Bae’s two-meter-wide painting *The Greater Archipelago* extends this inquiry through an architectural perspective, translating his impressions of New York into a layered spatial and visual composition. Together, these works suggest that cities are shaped not only by concrete and steel, but also by anxiety, memory, data, commercial influence, identity, and attention. The urban image becomes unstable—a contested surface through which personal and collective realities are continually negotiated.
>
> Moving from the urban environment to the natural landscape, *SANKAI – Mountain / Ocean / In-Between* reconsiders architecture’s relationship with its surroundings. Situated between forested mountains and the Pacific Ocean, the project weaves together these contrasting landscapes through a centrally positioned, elevated structure that preserves the site’s existing topography and water systems. A floating bridge marks the arrival, while the plan extends outward toward distinct environmental conditions: bedrooms face the forest for privacy and calm, the master suite hovers above a koi pond, and shared living spaces open toward the ocean. Rather than treating the landscape as a passive backdrop, the project allows water, vegetation, elevation, and distant views to actively shape architectural form.
>
> In Kang Wang’s *Residual Thermodynamics*, force is registered through collision and material transformation. Disposable takeout containers and bamboo chopsticks are pierced, crushed, melted, and fused with burned metal and forged nails. Familiar objects associated with consumption, cultural visibility, and disposability are subjected to heat and mechanical pressure, becoming records of conflict between externally imposed identities and the internal forces used to resist or transform them.
>
> Across the exhibition, Asian design does not appear as a singular visual language or recognizable set of motifs. It emerges instead through negotiation: between precision and imperfection, inheritance and transformation, displacement and belonging, technological acceleration and material resistance. Cultural identity is not contained within an image or symbol, but formed through acts of making, adaptation, translation, and what is carried forward.
>
> A trace is never the force itself. It is what remains after contact—an imprint, a deformation, a residue, a fracture, or a new orientation. *Traces of Force* invites viewers to encounter each work not simply as an object, image, or proposal, but as the material record of a process still unfolding.

---

## 8. Individual work-page system

Create a reusable work-page template rather than nine unrelated layouts.

### Required page structure

1. Global header
2. Work index / breadcrumb
3. Work title
4. Artist name or artist list
5. Hero artwork image
6. Optional verified metadata
7. Project statement
8. Artwork-image gallery
9. Artist biography or biographies
10. Previous / next work navigation
11. “Back to All Works”
12. Opening reception RSVP CTA
13. Funding acknowledgment and footer

### Breadcrumb example

> NYADW 2026 / Traces of Force / Tension Instrument

### Metadata policy

Only show fields that have verified content.

Possible fields:

- Discipline
- Medium
- Dimensions
- Year
- Location
- Image credit

The supplied source does not consistently include medium, dimensions, dates, or image credits. Do not create empty labels or invent values. The metadata component should conditionally render only supplied fields.

### Image behavior

- Reuse the existing image system and hover behavior.
- Preserve image aspect ratios.
- Do not crop artwork destructively.
- Use `loading="lazy"` for below-the-fold images.
- Set explicit width/height or aspect-ratio values to reduce layout shift.
- Use descriptive alt text.
- Use the work title and artist name in filenames when renaming assets is safe.
- Do not use stock images.

### Work navigation order

Use the numbered order in this brief for previous/next navigation. The first work’s previous action may wrap to the ninth work only if the existing interaction pattern supports circular navigation; otherwise disable it. Apply the same logic to the ninth work’s next action.

---

## 9. Work-page content

---

### Work 01 — Tension Instrument

**Route:** `/works/tension-instrument.html`  
**Artist:** Lihan Jin

#### Project statement

*Tension Instrument* explores the profound interplay between architecture and music, delving into how the intangible essence of sound can be translated into a tangible architectural experience. The design draws inspiration from the concept of “tension”—a dynamic force intrinsic to both disciplines—serving as the bridge that unites sound and structure.

The architectural prototype is a piece of wood bent by a taut metal string, embodying the tension that harmonizes opposites. This simple yet evocative gesture evolves into an orchestration of architectural elements, including walls, balconies, and acoustic panels. Each architectural element originates from the core prototype, adapting its scale and tectonics to compose a harmonious spatial symphony.

Architectural tectonics and technology are the project’s most significant challenges. The cantilevered curved walls, a defining feature of the design, were achieved through an innovative combination of steel and cross-laminated timber (CLT). This meticulous integration not only provides structural stability but also imbues the space with warmth and resonance, enhancing the sensory connection between the audience and the performance.

#### Artist biography

Lihan Jin is a New York–based architectural designer and the founder of Studio Lihan, an independent design practice exploring the intersection of cultural heritage, material experimentation, and contemporary innovation. He holds a Master of Architecture from Columbia University GSAPP and a Bachelor of Engineering in Landscape Architecture from the South China University of Technology. Alongside his independent practice, he has worked at Kohn Pedersen Fox Associates (KPF), contributing to large-scale architectural and urban projects across concept design, design development, and technical coordination. His experience includes the North Bund Center in Shanghai, Singapore Changi Airport Terminal 5, and major mixed-use developments throughout Asia. Before joining KPF in New York, he gained professional experience at Renzo Piano Building Workshop in Paris and Trace Architecture Office in Beijing, developing a cross-cultural perspective spanning architecture, landscape, material, and urban design.

Lihan’s independent work has received international recognition across architecture, art, and design. His concert hall project, *Tension Instrument*, investigates the interaction of wood and metal, transforming structural tension and acoustic forces into spatial form. The project received the MUSE Design Platinum Award, French Design Platinum Award, A’ Design Golden Award, New York Architectural Design Gold Award, and finalist recognition in the Architizer A+Awards. In *Islamic Distiller*, he developed a modular mosque system that integrates solar water distillation into its architectural structure, earning an A’ Design Bronze Award. His gallery project, *Twisted Intertwining*, explores the ductility and torsional behavior of metal as both a fabrication process and an organizing principle for space, and received a Special Mention in the Architizer A+Awards.

Lihan approaches architecture as the material record of forces—structural, environmental, cultural, and human—that shape the built environment. Rather than treating form as a fixed visual outcome, he understands it as the consequence of tension, resistance, transformation, and use. Through the intersection of advanced design methods and hands-on material experimentation, his work seeks to create spaces that are technically inventive, culturally resonant, and capable of revealing new relationships between people, matter, and place.

---

### Work 02 — Tension & Tranquility

**Route:** `/works/tension-and-tranquility.html`  
**Artist:** Niki Li

#### Project statement

Living in New York City—an epicenter of energy, chaos, cultural and ideological diversity, and hyper-individualism—has taught me to accept and adapt to the complexity of human nature and the unpredictability of life. This series reflects on the bittersweet and often perplexing experience of navigating contemporary metropolitan life.

In these works, I combine photographs of New York City architecture with abstract expressions of my emotional responses to the city. Fragmented geometric forms evoke rupture, collision, and the disorientation of urban life, while vivid, kaleidoscopic colors convey vitality, resilience, and the desire for peace. Across each composition, form and color create an abstract language in which struggle and calm coexist, overlap, and reshape one another.

Rather than presenting tension and tranquility as simple opposites, the series explores the difficult passage between them—a journey marked by endurance, transformation, and a gradual reclamation of equilibrium. Ultimately, the works find beauty in resilience—the human capacity to persevere through struggle and move toward renewal.

#### Artist biography

Niki Li is a Chinese visual artist whose practice explores cross-cultural communication, consumerism, and evolving definitions of connection in contemporary society. Her work invites audiences to examine overlooked social dynamics, opening space for meaningful exchange across cultures, identities, and perspectives.

Driven by a desire to contribute to humanity through creativity, Li develops work that bridges personal narrative with broader social conversations. Her art serves as a platform for dialogue, understanding, and shared human experience.

---

### Work 03 — SANKAI – Mountain / Ocean / In-Between

**Route:** `/works/sankai.html`  
**Artists:** Jonathan Liang, Kurt Cheang, Lihan Jin, Zida Liu

#### Project statement

Situated between mountainous forests and the open Pacific, *SANKAI* is conceived as a spatial weave between these two contrasting landscapes. The building is placed at the center of the site to engage both mountain and ocean equally and to maximize long views in both directions. Its form carefully navigates topography and anchors to existing ponds, activating the natural landscape around each space.

The single-story building is gently lifted above the ground to preserve the site below. This elevation allows water, vegetation, and wildlife to flow freely beneath the structure while minimizing disturbance. Arrival occurs across a floating bridge rather than a heavy stair, reinforcing the sense of lightness and connection to nature.

The plan reaches outward to connect key programs directly to their surroundings. Bedrooms face the forest and mountains for privacy and calm. The master bedroom hovers above an existing pond, transformed into a koi pond. Living spaces and the bath open toward the ocean, where shared moments extend into the horizon.

#### Artist biographies

##### Jonathan Liang

Jonathan Liang is a New York–based architectural designer whose practice thrives on a compelling dual identity: the precise orchestration of ultra-luxury private spaces and the grand, transformative scaling of public civic architecture. Holding a Master of Advanced Architectural Design from Columbia University and a Bachelor of Architecture from Carnegie Mellon University, Liang treats architecture not merely as a structural necessity, but as a choreography of experience, light, and context. His professional trajectory includes formative tenures at FXCollaborative and his current design practice at Stonehill Taylor Architects.

Liang’s work navigates two distinct typological poles. On one end is an intimate, highly tailored approach to luxury hospitality. Here, he sculpts immersive, five-star sensory environments—coordinating the programmatic flow of hotel lobbies, restaurants, wellness spas, and ballrooms where every detail is tuned to the human scale. Conversely, Liang expands this spatial sensitivity into the monumental public realm. His civic portfolio addresses the collective memory of the city, from reimagining the historic Kingsbridge Armory in the Bronx to restoring natural light and structural clarity to Chicago Union Station.

A LEED Green Associate, Liang balances this poetic duality with a rigorous commitment to environmental resilience, bridging advanced timber technologies with complex landmark approvals. By contrasting the refined atmospheres of private luxury with the democratic adaptive reuse of major urban infrastructure, Liang crafts forward-thinking architecture that elevates both the collective public spirit and the private interior experience.

##### Kurt Cheang

Growing up in Hong Kong before moving to Chicago to earn his Bachelor of Architecture at the Illinois Institute of Technology, Kurt Cheang developed a foundational appreciation for diverse urban and architectural landscapes. He further refined his conceptual approach in New York City, completing a Master of Science in Advanced Architectural Design at Columbia University GSAPP. He is currently an architectural designer based in New York City, where he balances rigorous professional practice with speculative design explorations.

A deep reverence for tactile craftsmanship and the art of making sits at the core of Cheang’s design philosophy. His work explores the intersection of the physical and the digital, deliberately hybridizing traditional handmade techniques with contemporary fabrication. This methodology is evident across his practice, including explorations of traditional woodworking techniques—such as hand-planing and joinery—enhanced by modern laser technology. By synthesizing rigorous physical craftsmanship with advanced digital workflows, his designs maintain a distinctly human touch while pushing the boundaries of material and spatial expression.

##### Lihan Jin

Use the same artist biography as Work 01. Store artist biographies as reusable content/data to avoid maintaining duplicate copies.

##### Zida Liu

Zida Liu is a New York–based architectural designer whose education spans Sichuan University, the University of Southern California, where he earned his Bachelor of Architecture, and Columbia University GSAPP, where he completed a Master of Science in Advanced Architectural Design. Before joining Studio Link-Arc, he gained experience at Jiakun Architects and Warren Techentin Architecture. At Studio Link-Arc, he has contributed to cultural and civic projects across competition, design development, and construction documentation, including several first-prize competition entries and work recognized by the World Architecture Festival, The Plan Award, Dezeen Awards, and the Iconic Awards. His independent work has also received a Gensler Diversity Scholarship, first prize in the Off Grid Farm competition, second prize in *From Dream to Rail-ity*, and finalist recognition in the School for Palestine competition.

Zida approaches architecture as the curation of human experience. He sees space as a symphony of exploratory curiosity and functional practicality—one that can be innovative, experimental, and open-ended. His work seeks to create environments that provoke discovery, challenge convention, and expand how people perceive, inhabit, and engage with architecture.

---

### Work 04 — Tremor

**Route:** `/works/tremor.html`  
**Artist:** Dirk Tsai

#### Project statement

*Tremor* is a statement of deliberate refusal, conceived from the psychological fragmentation and self-doubt born during the pursuit of societal aesthetics and value standards. Instead of conforming to the market’s expectation of flawless symmetry and sanitized beauty, the work embraces a radical rupture, deconstructing the traditional flat plane of painting into a four-quadrant modular structure. It explores the boundaries between painting and sculpture, posing a fundamental question: when the essence remains unchanged, yet the form and expression depart from traditional definitions, how will people perceive, define, and understand its difference? This core concept stems from the translation of my own gender identity.

Drawing upon Sara Ahmed’s *Queer Phenomenology* and its interrogation of the “taken-for-granted norms” in society, I project my own physicality onto the medium of traditional painting—the canvas operates as skin, the chassis as skeleton, and the pigment as blood, ultimately unifying to form a fluid soul. *Tremor* questions how a fluid, non-conforming identity locates itself within a regulatory system. It suggests that self-location is not a static monument, but an ongoing, endless state of “becoming.”

Draped over an artist-constructed, streamlined wood skeleton, the canvas functions as a skin that loops and swells, forcefully carving out its own space under the constraints of institutional discipline. Every curve, fracture, and gap marks a site of quiet, resilient resistance and rebirth. The monochromatic black surface and the stark divisions between the modules operate like the deep, intimate footprints left behind by an individual in the midst of exploring their own worth and the meaning of life.

#### Artist biography

Dirk Tsai (b. 1994, Taipei) interrogates queer materiality and the fluidity of identity through an artistic practice that explores how the body—when subjected to institutional discipline—navigates, dismantles, and reassembles itself to manifest an unstable state of perception. His work examines how bodily states move, pause, and locate themselves through constant, visceral interaction with their surroundings.

Drawing upon Sara Ahmed’s *Queer Phenomenology*, Tsai conceptualizes his creative process as a trajectory of bodily orientation, displacement, and alignment. He translates these somatic transitions through the anatomical materiality of painting: canvas as skin, stretcher bars as skeleton, and pigment as blood, unified into a fluid soul. Through processes of assemblage, dislocation, and extension, his forms emerge, rupturing fixed perspectives. These configurations bear the sedimented layers of past and present experiences, re-enacting the formation of direction and the construction of meaning through difference, while deliberately remaining in a vulnerable, unfinished state.

Tsai’s practice navigates the liminal spaces between painting, sculpture, and conceptual installation. He holds an MA in Fine Art from Chelsea College of Arts, University of the Arts London (2023). He was honored as a Made In Taiwan (MIT) Emerging Artist Awardee by the Ministry of Culture, Taiwan (2024), and was longlisted for the Aesthetica Art Prize in the United Kingdom (2026). The Chelsea Arts Club Trust supported his research-driven approach to material infrastructure and temporal flux through the MA Materials and Research Award (2022).

---

### Work 05 — 汗水向下，薪火向上

**Route:** `/works/one-kilns-flame.html`  
**Artist:** Yuhan (Celine) Song  
**English display subtitle:** *One Kiln’s Flame, Generations of Touch*

#### Project statement

While passing through Yu County in Hebei, I happened upon the ancient village of Zhengjiayao. What held me there was not the finished pottery, but the sight of hands shaping earth into form. Clay is kneaded, thrown, trimmed, dried in shade, and finally committed to the kiln. Year after year, clay, water, and fire meet and mingle through the discipline of labor. A vessel is never hurried into being: the hand gives it form, flame draws forth the colors of its glaze, and its singular spirit settles slowly into the passage of time.

Clay receives the breath of the earth; fire borrows the light of heaven. In the kiln, Nature plies her craft, and common soil is transfigured into jade. At work before the kiln, sweat runs down the arms while flames wheel upward within the furnace. Finger marks impressed upon the vessel, traces of soot, the spontaneous web of crazing, and the unforeseeable transformations wrought by firing are not incidental remnants of the process. They bear witness to an encounter in which maker, earth, and fire act upon and bring forth one another. Clay has its degrees of dryness and moisture; the hand its measures of pressure and restraint; the fire its waxing and waning. Though each object is fashioned through the artisan’s care and judgment, it also harbors something of Nature’s mystery, never wholly subject to human command. Thus every vessel preserves the cadence of labor, the deliberation of its making, and a fleeting instant within the kiln that can neither be summoned again nor reproduced.

This series records more than the full process by which pottery comes into being. What the camera truly seeks to preserve is that which remains long after the flames have cooled, held within the very skin of the vessel: the memory of hands passing over clay, the quiet warmth native to earth, the fierce temper of fire, and the lingering resonance of time settling without sound.

#### Artist biography

Celine Song (b. 2006) is a photographer and undergraduate student at Cornell University, where she studies Psychology. Working primarily in documentary photography, she explores the quiet strength in everyday life, paying particular attention to labor, memory, and cultural continuity. Her images are shaped by close observation and a restrained visual language, inviting viewers to discover meaning in ordinary moments rather than spectacle.

---

### Work 06 — Residual Thermodynamics

**Route:** `/works/residual-thermodynamics.html`  
**Artist:** Kang Wang

#### Project statement

This work explores the physical collision and thermodynamic contradiction between two opposing systems of existence: the “Default World” of cultural consumption, and the “Leave No Trace” ethos of ritualistic erasure.

**The Material of the Default World:** The mass-produced takeout boxes and bamboo chopsticks serve as indexical markers of Asian immigrants’ experience within the default societal structure. They are objects designed for rapid consumption, cultural stereotyping, and immediate disposal. They represent the relentless, systemic force of assimilation—a daily accumulation of identity traces that are highly visible yet easily discarded. Acceptable, useful, easy to categorize.

**The Relics of the Void:** In direct opposition are the bent metal structures and iron nails retrieved from the ashes of the Burning Man Temple. These remnants are the ultimate paradox: the rule out there is to leave no trace. When you’re in the dust, none of the default-world labels matter. You’re just a person. I kept the metal to remember what that felt like. They have already endured the extreme thermodynamic violence of ceremonial destruction.

**The Consequence of Contact:** The encounter between these two worlds occurs on a heavily impacted, high-contrast black-and-white canvas—a physical manifestation of the artist’s own polarized psychological landscape. Here, the objects do not merely coexist; they are forced into a violent structural reckoning.

The heavy, forged nails from the utopian desert are used to mechanically pierce, crush, and anchor the fragile, everyday symbols of the default world onto the chaotic canvas. Through the targeted application of heat, the plastic coatings of the takeout boxes melt and fuse with the charred bamboo and twisted temple metal. The physical resistance of the metal conducts the heat, destroying the cultural readability of the takeout boxes from the inside out.

By using the remnants of a “traceless” world to physically pierce and melt the inescapable labels of reality, the work moves beyond specific cultural grievances. It captures a universal tension: the friction between the external identities imposed upon us, and the internal, autonomous forces we use to puncture them.

#### Artist biography

Kang Wang is an architectural designer and multidisciplinary artist based in New York City. Born and raised in China, she earned her Master of Architecture from Pratt Institute and currently practices at a boutique architecture firm. Her work spans commercial, civic, educational, and residential projects, and this progression from large-scale public environments to intimate domestic spaces has cultivated a nuanced sensitivity to scale, structure, and material resistance.

Working across installation, sculpture, and photography, she investigates the relationship between the built environment, the body, and material transformation. Her artistic practice is deeply informed by her engagement with physical environments beyond architecture. As a marathon runner and boulderer, her embodied understanding of gravity, endurance, and resistance becomes a conceptual framework for her mixed-media installations. Alongside these spatial works, she uses photography to document urban conditions and structural narratives. Her current practice examines how everyday cultural ready-mades register, preserve, and reveal the traces of thermodynamic and mechanical forces over time.

---

### Work 07 — Traces of Transparency

**Route:** `/works/traces-of-transparency.html`  
**Artist:** Yue Fan

#### Project statement

By 2050, augmented reality (AR) has become the primary interface of the city. Digital information no longer resides on personal screens but is continuously layered onto buildings, streets, and public spaces. Advertisements, navigation, social media, and AI-generated personalized content transform architecture into a living information interface, where the physical city is constantly rewritten by digital layers.

As AR becomes the dominant medium through which people perceive the urban environment, public space begins to change. Algorithms generate different realities for different individuals, shaping what each person sees according to their identity, preferences, and behaviors. Although people continue to occupy the same streets and plazas, they no longer experience the same city. Shared public space gradually dissolves into overlapping but isolated perceptual worlds.

*Traces of Transparency* examines not AR itself, but the long-term spatial consequences of living within an AR-native city. It asks how architecture might respond when information becomes an invisible force capable of reshaping the physical environment.

The translucent membrane spanning between buildings materializes this invisible force. Rather than functioning as a façade or sculptural object, it represents the physical trace left by continuous interactions between data, algorithms, commercial influence, and collective attention. Like geological formations shaped by wind or water, the structure records forces that cannot normally be seen, transforming them into a tangible architectural presence.

Its material logic is equally rooted in the mechanics of AR. Contemporary spatial computing depends on stable visual anchors—recognizable textures, edges, and geometric features—to attach digital information persistently to the physical world. Transparent materials, however, provide fewer reliable visual features due to their reflective and refractive optical properties, making persistent virtual anchoring inherently less stable. The membrane reinterprets this technical characteristic as an architectural strategy.

Here, transparency is no longer understood simply as the transmission of light. It becomes a material resistance to digital attachment.

The membrane therefore evolves into an Anti-AR Interface, not by rejecting augmented reality, but by redefining the relationship between AR and public space. Instead of eliminating digital information, it reduces the spatial conditions required for persistent virtual overlays, creating environments where excessive digital content gradually recedes and a shared perception of the physical city can re-emerge.

Rather than opposing technology, *Traces of Transparency* imagines a future in which architecture mediates between digital and physical realities. It proposes that the role of public space is not to escape technology, but to preserve the possibility of a reality that can still be experienced together.

#### Artist biography

Yue Fan is a designer whose practice explores the intersection of user experience, emerging technology, and the built environment. Trained in both landscape architecture and interaction design, she investigates how emerging technologies reshape human behavior, perception, and the ways people interact with the world.

She is currently a UX Designer at Samsung, creating AI-powered health experiences across mobile and wearable platforms. Alongside her professional practice, she develops speculative design projects that critically examine the social and human implications of emerging technologies. Rather than predicting future products, her work explores how technological systems influence the ways people perceive, communicate, and live.

Yue holds a Master of Design from the University of California, Berkeley. Her work has received international recognition, including Gold Awards from the MUSE Design Awards and Indigo Design Awards, as well as recognition from the New York Product Design Awards.

---

### Work 08 — The Greater Archipelago

**Route:** `/works/the-greater-archipelago.html`  
**Artist:** Sanghoon Bae

#### Important source limitation

The supplied press-release document lists the project in its contents and refers to it in the exhibition statement, but the Project #8 section does **not** include a work title, dedicated artist statement, medium, dimensions, or image information.

The contents page spells the title “The Greater Archipagelo,” while the exhibition statement uses the correct spelling “The Greater Archipelago.” Use:

> **The Greater Archipelago**

Do not invent a full artist statement.

#### Curatorial note permitted from the supplied exhibition statement

> Sanghoon Bae’s two-meter-wide painting *The Greater Archipelago* translates his impressions of New York into a layered spatial and visual composition. Viewed alongside works by Niki Li and Yue Fan, it considers how contemporary cities are shaped not only by concrete and steel, but also by anxiety, memory, data, commercial influence, identity, and attention.

Label this clearly as a **Curatorial Note**, not an Artist Statement.

#### Artist biography

Sanghoon Bae is an artist and designer completing his architectural training at Yonsei University. His practice spans drawing, writing, and architectural design, exploring how form and material are composed and represented, and how they enter architectural discourse. His professional experience includes Mass Studies in Seoul and Kohn Pedersen Fox (KPF) in New York.

His publication work includes a featured drawing in *The Seoulite* (2025), and he led the initial editorial development of *Materials & Spatial Qualities in Architecture* (2025). At Yonsei University, he led the planning of the Materials & Spatial Qualities workshop and served as a teaching assistant for the workshop *The Imagination of Crossbreeding, or a Decision to Be Anachronistic*.

#### Required TODO marker

In the code/content data, add a clear developer TODO:

`TODO: Replace the curatorial note with Sanghoon Bae’s approved full project statement and add verified artwork metadata when supplied.`

Do not display the TODO on the production website.

---

### Work 09 — Hejduk Lamp

**Route:** `/works/hejduk-lamp.html`  
**Artist:** Runxin Fu

#### Project statement

Separation suggests the momentum of passage. As gaps form, the back-and-forth movement gains its medium.

The *Hejduk Lamp* draws inspiration from architect John Hejduk’s exploration of duality in *Wall House II*: separation and passage, isolation and connection, the momentary and the eternal. We translate this architectural language into tactile paths of light and shadow—grounding the form in the gravitas of classical columnar textures while introducing parametric, organic curves. The lamp becomes a convergence of time, space, and illumination.

Its fabrication also demonstrates the concept of duality. The flowing shape of the lampshade is achieved through non-planar 3D printing: by programming G-code directly, we choreograph the printhead’s motion and extrusion rhythm in three-dimensional space, solidifying the act of traversal into a fluid geometry. The supporting component, by contrast, is printed with traditional FDM to ensure structural clarity and precise detailing. Their juxtaposition creates another layer of “separation and connection” embedded within the making of the object.

This pairing of forms also opens up possibilities for color and texture expression. The Hejduk series currently offers eight palettes whose contrasting colored geometry can establish a calibrated balance between harmony and tension—allowing the lamp to quietly integrate into a space or stand forward as a visual focal point. Ongoing palette development and customizable options also enable the lamp to adapt to varied spatial contexts.

Regarding the lamp’s composition, modularity brings the idea of duality into everyday use. The shade, frame, and circuitry interlock through fully 3D-printed components, making assembly, repair, and recomposition intuitive. Users can replace individual parts to extend the lamp’s lifespan, refresh its color language, or adjust its character. This replaceability brings duality into user experience—it allows components to remain autonomous while forming new relationships through reconfiguration. Replaced elements are intended to be collected for centralized recycling—sorted, processed, and reintegrated into new material batches—creating a closed-loop system in which each iteration contributes to the lamp’s continued evolution rather than becoming waste.

#### Artist biography

Runxin Fu is an architectural designer and digital fabrication practitioner based in New York. He holds a Master of Science in Advanced Architectural Design from Columbia GSAPP and a Bachelor of Architecture from Harbin Institute of Technology. His work explores the relationship between architectural thinking, computational design, additive manufacturing, and everyday objects. He is the founder and chief designer of PreTangia, a design-driven digital fabrication studio, and Lr. Design, its original product brand focusing on small-batch 3D-printed objects, lighting, and material experiments.

---

## 10. Open Call page update

Keep the Open Call page at `/open-call.html`, but convert it from an active application page to an archived closed-call page.

### Top status

Replace all “Open Call Now Live,” “Submit Work,” and deadline urgency messaging with:

#### Eyebrow

> NYADW 2026 — Traces of Force

#### Title

> Open Call

#### Status

> **Current Open Call Status — Closed**

#### Intro

> The 2026 open call for *Traces of Force* is now closed. Thank you to everyone who submitted work. Nine works by eleven artists and designers have been selected for the exhibition at Gallery 456.

#### Primary CTA

> View Selected Works

Link to `/2026-edition.html#selected-works`.

#### Secondary CTA

> RSVP for the Opening

Link to `RSVP_URL`.

### Submission content

Retain the original eligibility, submission guidelines, selection criteria, FAQ, and timeline as an archive of the 2026 call, but:

- Add a visible “Closed” status near the page title.
- Remove or disable all submission buttons and email CTAs.
- Do not show a clickable “Submit Work” button.
- Change “Ready to Submit?” to “The 2026 Open Call Has Closed.”
- Change “Submissions close July 24” to “Submissions closed July 24, 2026.”
- Mark launch, deadline, and artist-notification dates as completed.
- Do not add a new deadline unless a future open call has been formally announced.

### Closed-call closing block

#### Heading

> The 2026 Open Call Has Closed

#### Copy

> Selected works are now featured in *Traces of Force*, presented at Gallery 456 from August 7 through August 21, 2026.

#### CTAs

- Explore the Exhibition
- RSVP for the Opening

Open-call information should not be duplicated on the homepage, exhibition page, work pages, or unrelated sections.

---

## 11. Content architecture recommendation

Where the current code permits it, store exhibition data in one centralized source rather than hard-coding the same text into multiple pages.

Suggested shape:

```js
const exhibition = {
  title: "Traces of Force",
  edition: "NYADW 2026 — Physical Edition",
  dates: "August 7–21, 2026",
  opening: {
    date: "August 7, 2026",
    time: "6:00–9:00 PM",
    rsvpUrl: "https://luma.com/krzzq87u"
  },
  venue: {
    name: "Gallery 456 / Chinese American Arts Council",
    address1: "456 Broadway, 3rd Floor",
    city: "New York, NY 10013"
  },
  works: [
    {
      order: 1,
      slug: "tension-instrument",
      title: "Tension Instrument",
      artists: ["Lihan Jin"]
    }
  ]
};
```

Use a reusable work template or data-driven generator if compatible with the repository. Do not migrate the whole site to a new framework solely for this update.

---

## 12. SEO and sharing metadata

Update the homepage and all new pages.

### Homepage

**Title:**

> Traces of Force | New York Asian Design Week 2026

**Description:**

> Traces of Force brings together nine works by eleven artists and designers at Gallery 456 in New York, August 7–21, 2026. Opening reception August 7, 6–9 PM.

### Exhibition page

**Title:**

> Traces of Force Exhibition | NYADW 2026

**Description:**

> Explore nine works spanning architecture, painting, photography, installation, and furniture design in the inaugural Physical edition of New York Asian Design Week.

### Work pages

Pattern:

> [Work Title] by [Artist Name] | NYADW 2026

Description pattern:

> Discover [Work Title] by [Artist Name], exhibited in Traces of Force at New York Asian Design Week 2026.

For the four-person SANKAI project, use a shorter metadata title if needed:

> SANKAI | NYADW 2026

### Open Graph

- Use the approved exhibition key visual on the homepage and exhibition page.
- Use each work’s primary image on its own page.
- Include `og:title`, `og:description`, `og:image`, `og:url`, and Twitter card metadata.
- Use canonical URLs.
- Do not reuse a broken relative URL for social images.

---

## 13. Accessibility and usability

- Keep heading levels semantic: one `h1` per page.
- Ensure all RSVP links clearly state their purpose.
- Ensure text links and buttons are keyboard accessible.
- Provide visible focus states using the existing design system.
- Add descriptive alt text to artwork images.
- Do not use artist or work names as the sole alt text when a useful visual description is available.
- Maintain sufficient contrast.
- Preserve reduced-motion support if already implemented.
- Ensure long artist lists wrap cleanly on mobile.
- Test the Chinese title `汗水向下，薪火向上` across all breakpoints and confirm the existing fonts provide appropriate glyph coverage.
- Do not rely on hover alone to expose work titles or navigation.

---

## 14. Asset checklist

Before completion, locate and map:

- Exhibition key visual / poster
- Three approved PR images
- Primary image for each of the 9 works
- Additional gallery images for work pages, where supplied
- NYADW logo
- Lighthouse Global Foundation logo
- LMCC logo
- Chinese American Arts Council / Gallery 456 logo

If any artwork image is unavailable:

- Do not substitute stock imagery.
- Keep the card/page component functional with a restrained temporary development placeholder.
- Add a developer-facing missing-asset note.
- Report the missing asset in the implementation summary.

Suggested asset naming:

```text
assets/works/tension-instrument/
assets/works/tension-and-tranquility/
assets/works/sankai/
assets/works/tremor/
assets/works/one-kilns-flame/
assets/works/residual-thermodynamics/
assets/works/traces-of-transparency/
assets/works/the-greater-archipelago/
assets/works/hejduk-lamp/
```

Do not rename assets when doing so would break existing deployed references without updating every use.

---

## 15. Quality-assurance checklist

The update is complete only when all of the following are true:

- [ ] The homepage no longer promotes an active open call.
- [ ] The top announcement promotes the August 7 opening reception.
- [ ] The global primary CTA says RSVP and opens the confirmed RSVP page.
- [ ] Exhibition dates, time, venue, and address are consistent throughout the site.
- [ ] The homepage prominently presents the exhibition and opening reception.
- [ ] All 9 selected works appear on the homepage or exhibition page.
- [ ] All 9 work cards link to individual pages.
- [ ] All 9 work-page URLs load without 404 errors.
- [ ] The 11 participating artists are correctly represented.
- [ ] Lihan Jin’s biography is reused rather than inconsistently duplicated.
- [ ] Work 08 is labeled *The Greater Archipelago* and does not contain an invented artist statement.
- [ ] The Open Call page says “Current Open Call Status — Closed.”
- [ ] No live “Submit Work” button remains outside the closed archive.
- [ ] No dead or empty CTA is visible.
- [ ] No unverified media, dimensions, artwork dates, or credits are displayed.
- [ ] Mobile navigation and responsive sections remain functional.
- [ ] Artwork images have useful alt text.
- [ ] The RSVP link is consistent across header, hero, event section, exhibition page, and work pages.
- [ ] SEO and Open Graph metadata are updated.
- [ ] Funding acknowledgment is included accurately.
- [ ] The existing visual identity and graphic system remain intact.
- [ ] The site builds without errors and has no console errors on the updated pages.
- [ ] All internal links are checked in the production-style build, not only the development server.

---

## 16. Final implementation summary required from Claude Code

After completing the update, report:

1. Files created
2. Files modified
3. Routes added
4. RSVP URL used
5. Artwork assets mapped
6. Missing or ambiguous content/assets
7. Any sections intentionally left unchanged
8. Build/test result
9. Remaining TODOs, especially the complete project statement and metadata for *The Greater Archipelago*

Do not claim completion if any work page, image path, or RSVP link is broken.
