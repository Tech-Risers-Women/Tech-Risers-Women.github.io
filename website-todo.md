# Website: outstanding items

What's left from the social media manager's website notes, after the November 2026 review. ("Programmes" in the original notes are now "Initiatives".)

Last updated: 16 November 2026

## Content to create

### 1. Resources and articles section

This is the biggest gap. The plan in the notes: articles that answer members' questions, grouped into topic areas, so the site ranks for technical learning searches and builds authority on each topic.

Proposed topic areas and first articles:

- **Software engineering:** improving problem-solving skills; understanding system design interviews; data structures and algorithms in practice; TDD explained; how to become a stronger software engineer
- **Software architecture:** what software architecture is; how to approach a system design interview; architecture katas, learning through practice; scalability and trade-offs
- **Data and AI:** data engineering skills worth developing; AI, machine learning and LLMs explained; practical data architecture; building technical confidence in AI
- **Career development:** communicating your technical impact; preparing for senior engineering roles; building a technical portfolio; career progression as an individual contributor

Every article should:

- target one main search question
- link to the related initiative (e.g. *Scalability and trade-offs* → Architects' Kata Club → next session)
- include original insights from the community
- end with a clear call to action (usually: join the community)
- link to related articles, and be updated when the topic changes

The path to aim for: **topic page → article → related initiative → join.**

Before building this, decide who writes the articles and how often. A section with two articles that never grows looks worse than no section.

### 2. About page: story and team

The notes ask for "mission, story, team and community". The mission and community are there. Still missing:

- **Story:** how and why Tech Risers Women started
- **Team:** who runs it (names, roles, photos and LinkedIn links, with each person's agreement)

### 3. Member stories for Bootcamp++ and Career Corner

Quotes now appear on the Architects' Kata Club, Group Coding and Join Us pages. There are no quotes yet about Bootcamp++ or Career Corner. Collect a couple from members after the next sessions.

Longer stories with a name and role (with permission) would be stronger than anonymous quotes.

### 4. Session recordings and resources on the FAQ page

The notes suggest adding recordings and resources to the FAQ page. Decide whether sessions are recorded and can be shared. If they are, they could go alongside the articles.

## Decisions needed

### 5. AI and data

The site says it's for women in "software engineering and data", but no initiative, pillar or audience group mentions data engineering or AI. The notes list both as technical topics, plus a "data professionals: grow your data capabilities" audience. Either:

- add data and AI where you genuinely cover them (pillar topics, a "Data professionals" group on the Initiatives page, articles), or
- soften "and data" if it isn't a real focus yet.

### 6. Privacy notice review

There's now a privacy notice at `/privacy`, linked from the footer. It's a sensible starting point, but someone should check it against what you actually do:

- [ ] The join, volunteer and partner forms collect what the notice says (name, email, role, experience, interests)
- [ ] The services listed are complete: Google Forms and Gmail, Zoom, LinkedIn and GitHub Pages. Do you use anything else (Luma, Slack, Discord, Meetup, a mailing tool)?
- [ ] Are sessions recorded? If so, the notice needs to say so, and attendees need to be told at the start of each session.
- [ ] Retention: the notice says details are kept while someone is a member and deleted on request. Is that what happens?
- [ ] Who in the team can see member details?
- [ ] Where Tech Risers Women is based, and whether it's a registered organisation. This affects which data protection laws apply.
- [ ] Add a link to the privacy notice at the top of each Google Form
- [ ] Consider listing a minimum age (e.g. 16+ or 18+)

## Smaller things

- **Donate page:** built but hidden until there's a real donation link. To turn it on, uncomment it in `src/App.jsx` and `src/data/seo.js`.
- **Old links:** the Architects' Kata Club moved from `/architect-s-club` to `/architects-kata-club`. Old links still redirect, but update any LinkedIn posts, the newsletter or other places that use the old address.
- **Who it's for:** the footer says "women and non-binary people", and the code of conduct mentions both. The rest of the site says "women". Decide on one way of putting it and use it everywhere.
- **Organisers' personal email addresses** are listed on the code of conduct page. Check everyone is happy with that, or use the shared inbox (techriserswomen@gmail.com) instead.
- **Unused images:** `src/media` has several large images that aren't used on the site (e.g. `graceHopper.png`, `MaryWilkes.png`, `christineDardenY.png`, `communityDriven.png`). They could be deleted, or compressed if you plan to use them.

## Done in this round (for reference)

- Removed "mentor" (now trainer), "not just another networking community" and per-event registration
- Events: joining links are emailed to members, and the site says so
- Architects' Kata Club URL changed to `/architects-kata-club`, with a redirect from the old one
- Member quotes added to the Architects' Kata Club, Group Coding and Join Us pages
- Portfolio projects added to Group Coding Sessions
- Privacy notice added at `/privacy` (needs review, see above)
- Search-engine descriptions no longer mention registering for events
