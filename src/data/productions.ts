import type { ImageMetadata } from 'astro';

import amadeus1 from '../images/amadeus-1.jpg';
import amadeus2 from '../images/amadeus-2.jpg';
import amadeus3 from '../images/amadeus-3.jpg';
import amadeusMozart from '../images/amadeus-mozart.jpg';
import holidayRehearsal1 from '../images/holiday-rehearsal-1.jpg';
import holidayRehearsal2 from '../images/holiday-rehearsal-2.jpg';
import seagullStage from '../images/seagull-stage.png';
import swingState1 from '../images/swing-state-1.jpg';
import swingState2 from '../images/swing-state-2.jpg';
import swingState3 from '../images/swing-state-3.jpg';
import aidaPlaybillFull from '../images/web-sourced/aida-playbill-full.jpg';
import amadeusBanner from '../images/web-sourced/amadeus-steppenwolf-banner.png';
import amadeusAudienceVideoThumb from '../images/web-sourced/amadeus-audience-video-thumb.jpg';
import amadeusChicagoTribune from '../images/web-sourced/amadeus-chicago-tribune.webp';
import amadeusRehearsalJoelMoorman from '../images/web-sourced/amadeus-rehearsal-joel-moorman.avif';
import image2666Goodman from '../images/web-sourced/2666-goodman.jpg';
import cherryOrchardGoodmanThumb from '../images/web-sourced/cherry-orchard-goodman-thumb.jpg';
import cherryOrchardReview from '../images/web-sourced/cherry-orchard-review.jpeg';
import cherryOrchardKeithParham1 from '../images/web-sourced/cherry-orchard-keith-parham-1.jpg';
import cherryOrchardSunTimes1 from '../images/web-sourced/cherry-orchard-suntimes-1.jpg';
import cherryOrchardSunTimes2 from '../images/web-sourced/cherry-orchard-suntimes-2.jpg';
import deathOfASalesmanPlaybillFull from '../images/web-sourced/death-of-a-salesman-playbill-full.jpg';
import donGiovanniDonnaElvira from '../images/web-sourced/don-giovanni-donna-elvira.jpg';
import donGiovanniFinalCostume from '../images/web-sourced/don-giovanni-final-costume.jpg';
import donGiovanniLyric1 from '../images/web-sourced/don-giovanni-lyric-1.jpg';
import donGiovanniLyric2 from '../images/web-sourced/don-giovanni-lyric-2.jpg';
import holidayGoodman from '../images/web-sourced/holiday-goodman.jpg';
import holidayGoodmanThumb from '../images/web-sourced/holiday-goodman-thumb.jpg';
import holidayProduction2 from '../images/web-sourced/holiday-production-2.webp';
import holidayProduction7 from '../images/web-sourced/holiday-production-7.webp';
import holidayProduction8 from '../images/web-sourced/holiday-production-8.webp';
import iceman112 from '../images/web-sourced/iceman-112.jpg';
import iceman114 from '../images/web-sourced/iceman-114.jpg';
import lunaGaleGoodman from '../images/web-sourced/luna-gale-goodman.png';
import soundInsideGoodmanThumb from '../images/web-sourced/sound-inside-goodman-thumb.jpg';
import soundInsideWttw from '../images/web-sourced/sound-inside-wttw.jpg';
import swingStateGoodmanThumb from '../images/web-sourced/swing-state-goodman-thumb.jpg';

import { creditGroups, type Credit } from './credits';
import { timelineEntries } from './timeline';

export type ProductionPageMode = 'archive' | 'featured';
export type ProductionSourceStatus = 'repo-only' | 'researched' | 'featured-ready';
export type ProductionImageOrientation = 'landscape' | 'portrait' | 'square';
export type ProductionImageKind = 'production-still' | 'rehearsal' | 'art';

export interface ProductionStaging {
  title: string;
  year: string;
  venue?: string;
  description: string;
}

export interface ProductionImage {
  src: ImageMetadata;
  alt: string;
  caption: string;
  orientation: ProductionImageOrientation;
  priority?: boolean;
  kind: ProductionImageKind;
}

export interface ProductionCollaborator {
  role: string;
  name: string;
  note?: string;
}

export interface ProductionRecognition {
  label: string;
  detail: string;
}

export interface ProductionContextNote {
  label: string;
  text: string;
}

export interface ProductionRelatedLink {
  label: string;
  href: string;
  type: 'timeline' | 'credits' | 'library';
}

export interface ProductionQuickFact {
  label: string;
  value: string;
}

export interface ProductionPerson {
  role: string;
  name: string;
}

export interface ProductionReview {
  source: string;
  href: string;
  summary: string;
  note?: string;
}

export interface ProductionExternalSource {
  label: string;
  href: string;
}

export interface ProductionWatchLink {
  label: string;
  href: string;
  description?: string;
  thumbnail?: ImageMetadata;
}

export interface ProductionRecord {
  slug: string;
  title: string;
  pageMode: ProductionPageMode;
  summary: string;
  publicSummary?: string;
  synopsis?: string;
  fallsContext?: string;
  significance: string;
  story?: string;
  yearSpan: string;
  firstYear: string;
  latestYear: string;
  firstYearValue: number;
  latestYearValue: number;
  decadeLabel: string;
  eraLabel: string;
  stagingCount: number;
  venueCount: number;
  venueAnchor: string;
  primaryVenue?: string;
  venues: string[];
  stagings: ProductionStaging[];
  images: ProductionImage[];
  collaborators: ProductionCollaborator[];
  quickFacts: ProductionQuickFact[];
  cast: ProductionPerson[];
  creativeTeam: ProductionPerson[];
  recognition: ProductionRecognition[];
  awardsOrSignificance: ProductionRecognition[];
  reviews: ProductionReview[];
  externalSources: ProductionExternalSource[];
  watchLinks: ProductionWatchLink[];
  contextNotes: ProductionContextNote[];
  relatedLinks: ProductionRelatedLink[];
  sourceStatus: ProductionSourceStatus;
}

interface ProductionSeed {
  pageMode?: ProductionPageMode;
  summary?: string;
  publicSummary?: string;
  synopsis?: string;
  fallsContext?: string;
  significance?: string;
  story?: string;
  venueAnchor?: string;
  eraLabel?: string;
  images?: ProductionImage[];
  collaborators?: ProductionCollaborator[];
  quickFacts?: ProductionQuickFact[];
  cast?: ProductionPerson[];
  creativeTeam?: ProductionPerson[];
  recognition?: ProductionRecognition[];
  awardsOrSignificance?: ProductionRecognition[];
  reviews?: ProductionReview[];
  externalSources?: ProductionExternalSource[];
  watchLinks?: ProductionWatchLink[];
  contextNotes?: ProductionContextNote[];
  relatedLinks?: ProductionRelatedLink[];
  sourceStatus?: ProductionSourceStatus;
}

function yearValue(year: string): number {
  const match = year.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

function stripQualifier(title: string): string {
  return title.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/&/g, ' and ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function uniqueValues(values: Array<string | undefined>): string[] {
  return Array.from(new Set(values.filter((value): value is string => Boolean(value))));
}

function ensureSentence(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function dedupeStrings(values: string[]): string[] {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));
}

function decadeLabel(year: number): string {
  if (year < 1980) return '1970s';
  if (year < 1990) return '1980s';
  if (year < 2000) return '1990s';
  if (year < 2010) return '2000s';
  if (year < 2020) return '2010s';
  return '2020s';
}

function buildYearSpan(firstYear: string, latestYear: string): string {
  return firstYear === latestYear ? firstYear : `${firstYear} - ${latestYear}`;
}

function buildEraLabel(firstYearValue: number, latestYearValue: number): string {
  if (firstYearValue >= 2020) return 'Post-Goodman transition years';
  if (firstYearValue >= 2010) return 'Late Goodman years';
  if (firstYearValue >= 2000) return 'National and international period';
  if (firstYearValue >= 1990) return 'Broadway transfer years';
  if (firstYearValue >= 1980) return 'Early Goodman years';
  return latestYearValue > firstYearValue ? 'Wisdom Bridge foundation years' : 'Early directing years';
}

function buildSummary(title: string, stagings: ProductionStaging[]): string {
  const first = stagings[0];
  const last = stagings[stagings.length - 1];
  const firstVenue = first.venue ? ` at ${first.venue}` : '';

  if (stagings.length === 1) {
    return `${title} enters Robert Falls's production record in ${first.year}${firstVenue}. ${ensureSentence(first.description)}`.trim();
  }

  const lastVenue = last.venue ? ` at ${last.venue}` : '';
  return `${title} tracks across ${stagings.length} documented stagings from ${first.year}${firstVenue} to ${last.year}${lastVenue}, showing how the production moved through Falls's directing career.`;
}

function buildFallbackSignificance(
  title: string,
  stagings: ProductionStaging[],
  highlights: string[],
  firstYearValue: number,
): string {
  const highlightText = highlights.join(' ');

  if (/world premiere/i.test(highlightText)) {
    return `${title} marks one of the new-work premieres attached to Falls's later Goodman years.`;
  }

  if (/Tony/i.test(highlightText)) {
    return `${title} connects to one of the award-recognized public peaks in Falls's national career.`;
  }

  if (/Jeff/i.test(highlightText)) {
    return `${title} stands out inside Falls's Chicago record as a production with documented local recognition.`;
  }

  if (stagings.length > 1) {
    return `${title} became a returning title in Falls's repertory, resurfacing across multiple venues and years.`;
  }

  if (firstYearValue >= 2020) {
    return `${title} belongs to the late-career stretch of Falls's work after decades of shaping the Goodman stage.`;
  }

  if (firstYearValue >= 1990) {
    return `${title} sits inside the period when Falls's Chicago productions increasingly fed larger national visibility.`;
  }

  return `${title} helps map the shape of Falls's directing record even where only a single staging is documented here.`;
}

function creditDescription(credit: Credit): string {
  if (credit.note) return credit.note;
  if (credit.venue) return `${credit.title} appears in the selected credits at ${credit.venue}.`;
  return `${credit.title} appears in the selected credits.`;
}

function noteFromHighlight(highlight: string): ProductionContextNote {
  const label =
    /world premiere/i.test(highlight)
      ? 'Premiere context'
      : /Tony|Jeff|Obie|award/i.test(highlight)
        ? 'Recognition'
        : /transfer|Broadway/i.test(highlight)
          ? 'Transfer history'
          : 'Production note';

  return { label, text: ensureSentence(highlight) };
}

function recognitionFromHighlight(highlight: string): ProductionRecognition | null {
  if (/Tony/i.test(highlight)) {
    return { label: 'Tony context', detail: ensureSentence(highlight) };
  }
  if (/Jeff/i.test(highlight)) {
    return { label: 'Jeff context', detail: ensureSentence(highlight) };
  }
  if (/world premiere/i.test(highlight)) {
    return { label: 'World premiere', detail: ensureSentence(highlight) };
  }
  if (/transfer|Broadway/i.test(highlight)) {
    return { label: 'Transfer context', detail: ensureSentence(highlight) };
  }
  return null;
}

const priorityFeaturedTitles = [
  'Amadeus',
  'Holiday',
  'Swing State',
  'The Sound Inside',
  'Don Giovanni',
  'The Cherry Orchard',
  'Death of a Salesman',
  'Aida',
  'The Iceman Cometh',
  '2666',
  'Luna Gale',
  'Chinglish',
  'The Seagull',
];

const priorityFeaturedSlugs = new Set(priorityFeaturedTitles.map((title) => slugify(title)));

const seedLinks: ProductionRelatedLink[] = [
  { label: 'Production library', href: '/productions', type: 'library' },
  { label: 'Career timeline', href: '/timeline', type: 'timeline' },
  { label: 'Selected credits', href: '/credits', type: 'credits' },
];

const productionSeeds: Record<string, ProductionSeed> = {
  amadeus: {
    pageMode: 'featured',
    summary:
      "Falls's 2025 Steppenwolf debut brought him into the company's 50th anniversary season with an intimate, actor-forward Amadeus built around Salieri, Mozart, and the poisonous thrill of genius watched up close.",
    publicSummary:
      "Peter Shaffer's Tony-winning drama returns as a high-visibility Steppenwolf event: Ian Barford's Salieri faces David Darrow's Mozart in Falls's first production for the company.",
    synopsis:
      'Vienna belongs to Antonio Salieri until Mozart bursts in: obscene, reckless, dazzling, and touched by something Salieri can only call God. What begins as admiration turns into a feverish campaign to destroy the genius he cannot become.',
    fallsContext:
      "Falls's first Steppenwolf production arrived during the company's 50th anniversary season, placing him inside another defining Chicago ensemble after his long Goodman tenure.",
    significance:
      "A late-career milestone: Falls's first production for Steppenwolf Theatre Company, staged in the Ensemble Theater during Steppenwolf 50.",
    story:
      "Arriving in 2025, Amadeus made Falls's post-Goodman chapter feel public, muscular, and very Chicago. The production put him inside another major ensemble institution, using the Ensemble Theater's close quarters to turn Shaffer's rivalry play into a live contest of envy, faith, celebrity, and artistic terror.",
    venueAnchor: 'Steppenwolf Theatre Company',
    eraLabel: 'Post-Goodman transition years',
    images: [
      {
        src: amadeusBanner,
        alt: 'Steppenwolf banner artwork for Amadeus showing Salieri facing Mozart against a red field.',
        caption: 'Amadeus at Steppenwolf Theatre Company, November 6, 2025 - January 25, 2026. Photo by Sandro Miller.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: amadeus1,
        alt: 'A scene from Amadeus featuring a central embrace under stage light.',
        caption: 'Amadeus at Steppenwolf Theatre Company, 2025.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: amadeus2,
        alt: 'A performer at the keyboard in Amadeus surrounded by the ensemble.',
        caption: 'The production leaned into public performance and ensemble witness.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: amadeus3,
        alt: 'A stage image from Amadeus with performers in period costume.',
        caption: 'Period costume and audience-visible staging framed the rivalry as theatre within theatre.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: amadeusMozart,
        alt: 'A lead performer from Amadeus in ornate costume at the keyboard.',
        caption: 'A tighter production still from Falls’s Steppenwolf debut.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: amadeusChicagoTribune,
        alt: 'A production image from Amadeus at Steppenwolf Theatre Company.',
        caption: 'Additional production thumbnail attached from the local Amadeus press assets.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: amadeusRehearsalJoelMoorman,
        alt: 'A rehearsal image for Amadeus at Steppenwolf Theatre Company.',
        caption: 'Rehearsal thumbnail credited in the filename to Joel Moorman.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Peter Shaffer' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Ian Barford' },
      { role: 'Cast highlight', name: 'David Darrow' },
      { role: 'Cast highlight', name: 'Robert Breuler' },
      { role: 'Cast highlight', name: 'Ora Jones' },
      { role: 'Cast highlight', name: 'Yasen Peyankov' },
    ],
    quickFacts: [
      { label: 'Company', value: 'Steppenwolf Theatre Company' },
      { label: 'Run', value: 'Nov. 6, 2025 - Jan. 25, 2026' },
      { label: 'Theater', value: 'Ensemble Theater' },
      { label: 'Running time', value: 'Approx. 2 hr 45 min' },
      { label: 'Milestone', value: 'Falls Steppenwolf debut' },
      { label: 'Source text', value: 'Peter Shaffer, 5 Tonys / 8 Academy Awards' },
    ],
    cast: [
      { role: 'Antonio Salieri', name: 'Ian Barford' },
      { role: 'Wolfgang Amadeus Mozart', name: 'David Darrow' },
      { role: 'Giuseppe Bonno', name: 'Robert Breuler' },
      { role: 'Venticello 1', name: 'Ora Jones' },
      { role: 'Baron Gottfried van Swieten', name: 'Yasen Peyankov' },
      { role: 'Constanze Weber', name: 'Jaye Ladymore' },
      { role: 'Joseph II', name: 'Gregory Linington' },
      { role: 'Count Franz Orsini-Rosenberg', name: 'John Lister' },
      { role: 'Count Johann Kilian von Strack', name: 'Joey Slotnick' },
      { role: 'Venticello 2', name: 'Sawyer Smith' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Peter Shaffer' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Todd Rosenthal' },
      { role: 'Costume Design', name: 'Amanda Gladu' },
      { role: 'Lighting Design', name: 'Eric Southern' },
      { role: 'Sound Design', name: 'Connor Wang' },
      { role: 'Music Supervision / Additional Original Music', name: 'Mikhail Fiksel' },
      { role: 'Dramaturg', name: 'Bryar Barborka' },
    ],
    recognition: [
      {
        label: 'Steppenwolf debut',
        detail: 'Falls’s first documented production for Steppenwolf Theatre Company.',
      },
      {
        label: 'Late-career pivot',
        detail: 'A high-visibility classical production after his long Goodman artistic-director tenure ended.',
      },
    ],
    contextNotes: [
      {
        label: 'Production context',
        text: 'Amadeus extends Falls’s archive beyond the Goodman and shows his continued appetite for large-scale theatrical classics.',
      },
    ],
    reviews: [
      {
        source: 'Steppenwolf Theatre Company',
        href: 'https://www.steppenwolf.org/',
        summary:
          'The official production page presents Amadeus as part of Steppenwolf 50, directed by Robert Falls, with a November 2025-January 2026 run in the Ensemble Theater.',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2025/11/20/a-fresh-meeting-of-mozart-and-salieri-as-robert-falls-meets-steppenwolf/',
        summary:
          'Dennis Polkow calls the pairing of Falls and Steppenwolf fascinating and emphasizes the contemporary, understated force of the staging.',
        note: 'Recommended review',
      },
      {
        source: 'Chicago On Stage',
        href: 'https://www.chicagoonstage.com/a-masterful-amadeus-from-robert-falls-at-steppenwolf/',
        summary:
          'Karen Topham praises the production as actor-driven and especially strong in the close quarters of the Ensemble Theater.',
        note: 'Highly recommended',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/columnists/2025/11/18/amadeus-robert-falls-steppenwolf-theatre',
        summary:
          "Coverage frames Falls's approach as striking because it resists shock tactics and trusts the play, performances, and intimacy of the room.",
      },
      {
        source: 'Around the Town Chicago',
        href: 'https://aroundthetownchicago.com/theatre-reviews/amadeus/',
        summary:
          'A Chicago review page adds another public-facing response to the production, useful for visitors who want a broader critical trail.',
      },
      {
        source: 'Axios Chicago',
        href: 'https://www.axios.com/local/chicago/2025/07/01/director-robert-falls-steppenwolf-50th-anniversary-season-amadeus-goodman',
        summary:
          'Coverage frames the production as a major Steppenwolf 50th anniversary event and Falls\'s first time directing for the company.',
      },
      {
        source: 'Audience reaction video',
        href: 'https://www.youtube.com/watch?v=-Cqo99vwxCk',
        summary:
          'Steppenwolf audience video gives the page a direct public-response outlink beyond written reviews.',
      },
    ],
    externalSources: [
      { label: 'Amadeus | Director Robert Falls', href: 'https://www.steppenwolf.org/' },
      { label: 'Audiences Love Amadeus video', href: 'https://www.youtube.com/watch?v=-Cqo99vwxCk' },
      {
        label: 'Newcity Stage review',
        href: 'https://www.newcitystage.com/2025/11/20/a-fresh-meeting-of-mozart-and-salieri-as-robert-falls-meets-steppenwolf/',
      },
      {
        label: 'Chicago On Stage review',
        href: 'https://www.chicagoonstage.com/a-masterful-amadeus-from-robert-falls-at-steppenwolf/',
      },
      {
        label: 'Chicago Sun-Times column',
        href: 'https://chicago.suntimes.com/columnists/2025/11/18/amadeus-robert-falls-steppenwolf-theatre',
      },
      {
        label: 'Around the Town Chicago review',
        href: 'https://aroundthetownchicago.com/theatre-reviews/amadeus/',
      },
      {
        label: 'Axios coverage of Steppenwolf season',
        href: 'https://www.axios.com/local/chicago/2025/07/01/director-robert-falls-steppenwolf-50th-anniversary-season-amadeus-goodman',
      },
      { label: 'Steppenwolf Theatre Company', href: 'https://www.steppenwolf.org/' },
    ],
    watchLinks: [
      {
        label: 'Amadeus | Director Robert Falls',
        href: 'https://share.google/GyrS8nAni8uxxE0iQ',
        description: 'Director feature for the Steppenwolf production.',
        thumbnail: amadeusBanner,
      },
      {
        label: 'Audiences Love Amadeus',
        href: 'https://www.youtube.com/watch?v=-Cqo99vwxCk',
        description: 'Audience-response video.',
        thumbnail: amadeusAudienceVideoThumb,
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  holiday: {
    pageMode: 'featured',
    summary:
      "Holiday returns Falls to the Goodman as a director after stepping down as artistic director, making the production read as both repertory event and institutional homecoming.",
    significance:
      'The first Goodman production he directed after leaving the artistic directorship, staged during the theatre’s Centennial Season.',
    story:
      'The 2026 staging places a familiar Robert Falls signature back inside the Goodman building without the administrative frame that defined his earlier decades there. Even with limited media in the repo, the production matters as a visible return and as a test of what a post-tenure Falls/Goodman relationship can look like.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Post-Goodman transition years',
    images: [
      {
        src: holidayGoodmanThumb,
        alt: "Goodman Theatre page-detail artwork for Holiday.",
        caption: 'Goodman Theatre page-detail image for Holiday.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: holidayProduction2,
        alt: 'Luigi Sottile, Molly Griggs, and Bryce Gangel in Holiday at Goodman Theatre.',
        caption: 'Luigi Sottile, Molly Griggs, and Bryce Gangel in Holiday. Photo: Todd Rosenberg via Goodman Theatre.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: holidayProduction7,
        alt: 'Bryce Gangel and Wesley Taylor seated with champagne in Holiday.',
        caption: 'Bryce Gangel and Wesley Taylor in Holiday. Photo: Todd Rosenberg via Goodman Theatre.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: holidayProduction8,
        alt: 'Alejandra Escalante and Erik Hellman toast in Holiday at Goodman Theatre.',
        caption: 'Alejandra Escalante and Erik Hellman in Holiday. Photo: Todd Rosenberg via Goodman Theatre.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: holidayGoodman,
        alt: "A diamond ring suspended inside a champagne flute in Goodman Theatre's Holiday key art.",
        caption: 'Holiday show image for Goodman Theatre, 2026.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: holidayRehearsal1,
        alt: 'Robert Falls speaking in rehearsal for Holiday.',
        caption: 'Holiday rehearsal at Goodman Theatre, 2026.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
      {
        src: holidayRehearsal2,
        alt: 'Robert Falls in conversation during Holiday rehearsal.',
        caption: 'Rehearsal-room image from Falls’s Goodman return.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Philip Barry' },
      { role: 'Adapter', name: 'Richard Greenberg' },
      { role: 'Cast highlight', name: 'Jessie Fisher' },
      { role: 'Cast highlight', name: 'Erik Hellman' },
      { role: 'Cast highlight', name: 'Molly Griggs' },
      { role: 'Cast highlight', name: 'Bryce Gangel' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Jan 31 - Mar 1, 2026' },
      { label: 'Venue', value: 'Goodman Theatre' },
      { label: 'Season', value: 'Centennial Season' },
      { label: 'Adaptation', value: 'Richard Greenberg' },
    ],
    cast: [
      { role: 'Susan Feld', name: 'Jessie Fisher' },
      { role: 'Linda Seton', name: 'Bryce Gangel' },
      { role: 'Julia Seton', name: 'Molly Griggs' },
      { role: 'Seton Cram', name: 'Erik Hellman' },
      { role: 'Johnny Case', name: 'Luigi Sottile' },
      { role: 'Ned Seton', name: 'Wesley Taylor' },
      { role: 'Edward Seton', name: 'Jordan Lage' },
      { role: 'Walter', name: 'Rammel Chan' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Philip Barry' },
      { role: 'Adapter', name: 'Richard Greenberg' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Photography', name: 'Todd Rosenberg' },
    ],
    recognition: [
      {
        label: 'Goodman return',
        detail: 'First Goodman production since Falls stepped down as Artistic Director.',
      },
      {
        label: 'Centennial season',
        detail: 'Programmed during the Goodman Theatre Centennial Season.',
      },
    ],
    contextNotes: [
      {
        label: 'Visual approach',
        text: 'The page now opens on Todd Rosenberg production stills, with official key art and rehearsal images retained as supporting visuals.',
      },
      {
        label: 'Photo source',
        text: 'Production images are sourced from the official Goodman Theatre production page for the 2026 staging.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre critical praise',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman collects praise from The Wall Street Journal, Daily Herald, BroadwayWorld, WGN Radio, and Chicago Tribune for the production.',
      },
      {
        source: 'Chicago Tribune',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman excerpts the Tribune describing the production as a four-star comedy with sardonic wit and tenderness.',
      },
      {
        source: 'Wall Street Journal',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman cites the Journal on Greenberg\'s adaptation and Falls\'s sprightly staging.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/holiday/' },
      { label: 'Goodman recommended read: Susan V. Booth welcomes Holiday', href: 'https://www.goodmantheatre.org/show/holiday/' },
      { label: 'Goodman recommended read: The Real Life Lovebirds of Holiday', href: 'https://www.goodmantheatre.org/show/holiday/' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
  'swing-state': {
    pageMode: 'featured',
    summary:
      'Swing State is one of the clearest late-career examples of Falls’s Goodman work with Rebecca Gilman: intimate, Midwestern, actor-led, and sharply tuned to contemporary social fracture.',
    significance:
      'A world premiere and one of Falls’s signature late Goodman collaborations with Rebecca Gilman.',
    story:
      'Premiering in 2022, Swing State arrived after years of collaboration between Falls and Gilman and carried the scale of a chamber piece without giving up social reach. The Owen Theatre setting and Liz Lauren photography reinforce how much the production depended on close behavioral detail rather than large scenic rhetoric.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: swingStateGoodmanThumb,
        alt: 'Goodman Theatre page-detail image for Swing State.',
        caption: 'Goodman Theatre page-detail image for Swing State.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: swingState1,
        alt: 'Mary Beth Fisher and Bubba Weiler in Swing State.',
        caption: 'Mary Beth Fisher and Bubba Weiler in Swing State.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: swingState2,
        alt: 'Anne E. Thompson, Kirsten Fitzgerald, and Mary Beth Fisher in Swing State.',
        caption: 'Anne E. Thompson, Kirsten Fitzgerald, and Mary Beth Fisher in Swing State.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: swingState3,
        alt: 'Mary Beth Fisher seated in Swing State.',
        caption: 'Mary Beth Fisher in Rebecca Gilman’s Swing State.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
      { role: 'Cast highlight', name: 'Mary Beth Fisher' },
      { role: 'Cast highlight', name: 'Bubba Weiler' },
      { role: 'Cast highlight', name: 'Anne E. Thompson' },
      { role: 'Cast highlight', name: 'Kirsten Fitzgerald' },
    ],
    quickFacts: [
      { label: 'Premiere', value: 'Oct 7 - Nov 13, 2022' },
      { label: 'Venue', value: 'Goodman Owen Theatre' },
      { label: 'Runtime', value: '1 hour 45 minutes' },
      { label: 'Collaboration', value: 'Sixth Falls/Gilman Goodman production' },
    ],
    cast: [
      { role: 'Peg', name: 'Mary Beth Fisher' },
      { role: 'Ryan', name: 'Bubba Weiler' },
      { role: 'Dani', name: 'Anne E. Thompson' },
      { role: 'Sheriff Kris', name: 'Kirsten Fitzgerald' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Set Designer', name: 'Todd Rosenthal' },
      { role: 'Costume Designer', name: 'Evelyn M. Danner' },
      { role: 'Lighting Designer', name: 'Eric Southern' },
      { role: 'Sound Designer / Composer', name: 'Richard Woodbury' },
      { role: 'Casting', name: 'Lauren Port' },
      { role: 'Photography', name: 'Liz Lauren' },
    ],
    recognition: [
      {
        label: 'World premiere',
        detail: 'Documented in the credits as a Goodman Theatre world premiere.',
      },
      {
        label: 'Long collaboration',
        detail: 'Timeline notes describe it as Falls and Rebecca Gilman’s sixth Goodman collaboration.',
      },
    ],
    contextNotes: [
      {
        label: 'Photo source',
        text: 'Current image captions in the repo identify these production stills as Goodman Theatre photos by Liz Lauren from the 2022 Owen Theatre run.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/swing-state/',
        summary:
          'The official page frames the world premiere as a contemporary portrait of America\'s heartland from Falls and Rebecca Gilman.',
      },
      {
        source: 'Chicago Tribune',
        href: 'https://www.goodmantheatre.org/show/swing-state/',
        summary:
          'Goodman excerpts the Tribune calling the play an extraordinary post-COVID American drama and praising Fisher\'s work.',
      },
      {
        source: 'Daily Herald',
        href: 'https://www.goodmantheatre.org/show/swing-state/',
        summary:
          'Goodman cites the Daily Herald on the production moving audiences from laughter to tears.',
      },
      {
        source: 'The New Yorker',
        href: 'https://www.newyorker.com/magazine/2023/10/02/swing-state-dig-theatre-reviews',
        summary:
          'The New Yorker review of the New York transfer foregrounds the Wisconsin landscape, Fisher\'s central performance, and the polished ensemble.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/swing-state/' },
      { label: 'New Yorker review of New York transfer', href: 'https://www.newyorker.com/magazine/2023/10/02/swing-state-dig-theatre-reviews' },
      { label: 'New York Theatre Guide review', href: 'https://www.newyorktheatreguide.com/reviews/swing-state-off-broadway-review' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-sound-inside': {
    pageMode: 'featured',
    summary:
      'The Sound Inside captures Falls working in a pandemic-era Goodman Theatre Live format, turning a contemporary two-hander into a digital performance archive entry rather than a standard stage transfer story.',
    publicSummary:
      'A live-streamed Goodman Theatre two-hander about a lonely professor, a gifted student, and the dangerous intimacy of storytelling.',
    significance:
      'A pandemic-era production that shows Falls adapting the Goodman frame to livestream performance.',
    story:
      'Falls staged Adam Rapp\'s intimate mystery for Goodman Theatre Live, a short-run streaming series broadcast from the Owen Theatre. The page should feel like a public production profile: two performers, one charged room, and a director adapting stage presence for a camera-mediated audience.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: soundInsideGoodmanThumb,
        alt: 'Goodman Theatre page-detail image for The Sound Inside.',
        caption: 'Goodman Theatre page-detail image for The Sound Inside.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: soundInsideWttw,
        alt: 'Mary Beth Fisher and John Drea seated across a table in The Sound Inside.',
        caption: 'Mary Beth Fisher and John Drea in The Sound Inside. Photo: Cody Nieset via WTTW.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Adam Rapp' },
      { role: 'Cast highlight', name: 'Mary Beth Fisher' },
      { role: 'Cast highlight', name: 'John Drea' },
    ],
    quickFacts: [
      { label: 'Format', value: 'Goodman Theatre Live' },
      { label: 'Streaming dates', value: 'May 13-16, 2021' },
      { label: 'Venue', value: 'Owen Theatre / Select Theatre' },
      { label: 'Runtime noted by press', value: '90 minutes' },
    ],
    cast: [
      { role: 'Bella', name: 'Mary Beth Fisher' },
      { role: 'Christopher', name: 'John Drea' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Adam Rapp' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Video Director', name: 'Christiana Tye' },
      { role: 'Director of Photography', name: 'Gabe Hatfield' },
      { role: 'Set Designer', name: 'Arnel Sancianco' },
      { role: 'Costume Designer', name: 'Mieka van der Ploeg' },
      { role: 'Lighting Designer', name: 'Jason Lynch' },
      { role: 'Sound Designer', name: 'Richard Woodbury' },
      { role: 'Production Stage Manager', name: 'Briana J. Fahey' },
      { role: 'Producer', name: 'Kimberly Senior' },
      { role: 'Casting', name: 'Lauren Port' },
      { role: 'Dramaturg', name: 'Neena Arndt' },
      { role: 'Assistant Director', name: 'Spenser Davis' },
      { role: 'Make-Up Artist', name: 'Josie Volpentesta' },
    ],
    recognition: [
      {
        label: 'Goodman Theatre Live',
        detail: 'Timeline entry identifies the staging as part of Goodman Theatre Live.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'First live production after Broadway',
        detail: 'Goodman billed the staging as the first live production after the Tony-nominated Broadway run.',
      },
      {
        label: 'Pandemic-era format',
        detail: 'The run was streamed live from the Goodman stage during a moment when theatres were rebuilding audience access.',
      },
    ],
    reviews: [
      {
        source: 'WTTW / Hedy Weiss',
        href: 'https://news.wttw.com/2021/05/14/goodman-theatre-play-reflects-life-death-love-and-sound-inside',
        summary:
          'The review frames the production around isolation, connection, and the performers\' precise command of Rapp\'s language.',
        note: 'Includes Cody Nieset production photo.',
      },
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/the-sound-inside/',
        summary:
          'The official page positions the play as a gripping mystery starring Mary Beth Fisher and John Drea in a limited live-streamed run.',
      },
      {
        source: 'New York Times context',
        href: 'https://www.goodmantheatre.org/show/the-sound-inside/',
        summary:
          'Goodman presents the title with its New York Times Critic\'s Pick reputation from the Broadway run as part of the public hook.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/the-sound-inside/' },
      {
        label: 'WTTW review and production image',
        href: 'https://news.wttw.com/2021/05/14/goodman-theatre-play-reflects-life-death-love-and-sound-inside',
      },
      { label: 'Goodman Theatre Live context', href: 'https://www.goodmantheatre.org/show/the-sound-inside/' },
    ],
    contextNotes: [
      {
        label: 'Photo source',
        text: 'Hero image sourced from WTTW coverage of the 2021 Goodman Theatre Live production, credited there to Cody Nieset.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'don-giovanni': {
    pageMode: 'featured',
    summary:
      'Don Giovanni tracks Falls across multiple opera stagings, from Lyric Opera of Chicago to a Dallas remount and a later Lyric revival.',
    publicSummary:
      'Falls turns Mozart\'s famous seducer into a dark, lavish morality tale built on high drama, danger, and spectacle.',
    significance:
      'A recurring opera production that shows Falls working at Lyric scale, with Ana Kuzmanic\'s costume world becoming a major public signature.',
    story:
      'This page should read less like an index entry and more like a show page: Mozart, a large opera house, a dangerous antihero, and a visual world remembered for its decadent costumes. The production opened Lyric\'s 2014/15 season, returned in 2019/20, and later traveled through Dallas Opera context.',
    venueAnchor: 'Lyric Opera of Chicago',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: donGiovanniLyric1,
        alt: 'Robert Falls production of Don Giovanni at Lyric Opera of Chicago.',
        caption: 'Robert Falls’s Don Giovanni at Lyric Opera of Chicago, 2019/20 season. Photo: Kyle Flubacker via Lyric Opera of Chicago.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: donGiovanniLyric2,
        alt: 'A stage scene from Robert Falls production of Don Giovanni at Lyric Opera of Chicago.',
        caption: 'Robert Falls’s Don Giovanni at Lyric Opera of Chicago, 2019/20 season. Photo: Kyle Flubacker via Lyric Opera of Chicago.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: donGiovanniFinalCostume,
        alt: 'Don Giovanni final costume from Ana Kuzmanic design feature.',
        caption: 'Don Giovanni final costume from Ana Kuzmanic’s design feature. Photo: Kyle Flubacker via Lyric Opera of Chicago.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: donGiovanniDonnaElvira,
        alt: 'Donna Elvira masquerade costume from Don Giovanni at Lyric Opera of Chicago.',
        caption: 'Donna Elvira masquerade costume from Don Giovanni. Photo: Kyle Flubacker via Lyric Opera of Chicago.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Composer', name: 'Wolfgang Amadeus Mozart' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Costume Designer', name: 'Ana Kuzmanic' },
      { role: 'Set Designer', name: 'Walt Spangler' },
      { role: 'Lighting Designer', name: 'Duane Schuler' },
    ],
    quickFacts: [
      { label: 'Composer', value: 'Wolfgang Amadeus Mozart' },
      { label: 'Primary venue', value: 'Lyric Opera of Chicago' },
      { label: 'Lyric seasons', value: '2014/15 and 2019/20' },
      { label: 'Remount', value: 'Dallas Opera context' },
    ],
    cast: [
      { role: 'Don Giovanni', name: 'Mariusz Kwiecien' },
      { role: 'Donna Anna', name: 'Laura Claycomb' },
      { role: 'Don Ottavio', name: 'David Portillo' },
      { role: 'Donna Elvira', name: 'Katie Van Kooten' },
      { role: 'Leporello', name: 'Kyle Ketelsen' },
      { role: 'Zerlina', name: 'Virginie Verrez' },
      { role: 'Masetto', name: 'Craig Verm' },
      { role: 'Commendatore', name: 'Morris Robinson' },
    ],
    creativeTeam: [
      { role: 'Composer', name: 'Wolfgang Amadeus Mozart' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Conductor', name: 'Emmanuel Villaume' },
      { role: 'Set Designer', name: 'Walt Spangler' },
      { role: 'Costume Designer', name: 'Ana Kuzmanic' },
      { role: 'Original Lighting Designer', name: 'Duane Schuler' },
      { role: 'Revival Lighting Designer', name: 'Chris Maravich' },
      { role: 'Wig and Make-up Designer', name: 'Dawn Rivard' },
      { role: 'Chorus Master', name: 'Alexander Rom' },
    ],
    recognition: [
      {
        label: 'Lyric revival',
        detail: 'Lyric describes Falls\'s staging as an instant-classic take on Mozart\'s morality tale.',
      },
      {
        label: 'Design signature',
        detail: 'Lyric highlighted Ana Kuzmanic\'s costume work as a defining visual feature of the production.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Lyric scale',
        detail: 'A major opera-house production in Falls\'s late Goodman-era body of work.',
      },
      {
        label: 'Costume world',
        detail: 'The public-facing hook is not archival count; it is the production\'s lush, dangerous visual identity.',
      },
      {
        label: 'Afterlife',
        detail: 'Dallas Opera materials connect the production to a Chicago Lyric import/remount context.',
      },
    ],
    reviews: [
      {
        source: 'Lyric Opera of Chicago',
        href: 'https://www.lyricopera.org/shows/upcoming/2026-27/don-giovanni/',
        summary:
          'Lyric presents Falls\'s staging as a hard-hitting, expansive take on a classic story of deceit and retribution.',
      },
      {
        source: 'Lyric Donor Serenade',
        href: 'https://www.lyricopera.org/donor-serenade/donor-serenade-fall-2019/Ana-Kuzmanic-Don-Giovanni/',
        summary:
          'Lyric\'s design feature centers Ana Kuzmanic\'s richly textured costume process and includes Robert Falls commentary on collaboration.',
        note: 'Images credited by Lyric to Kyle Flubacker.',
      },
      {
        source: 'Dallas Opera',
        href: 'https://dallasopera.org/performance/don-giovanni/',
        summary:
          'Dallas materials describe the production as brought in from Lyric Opera of Chicago and list Falls as director.',
      },
    ],
    externalSources: [
      { label: 'Lyric Opera production page', href: 'https://www.lyricopera.org/shows/upcoming/2026-27/don-giovanni/' },
      {
        label: 'Lyric design feature',
        href: 'https://www.lyricopera.org/donor-serenade/donor-serenade-fall-2019/Ana-Kuzmanic-Don-Giovanni/',
      },
      { label: 'Dallas Opera archive page', href: 'https://dallasopera.org/performance/don-giovanni/' },
    ],
    contextNotes: [
      {
        label: 'Photo source',
        text: 'Production and costume images are sourced from Lyric Opera of Chicago’s Donor Serenade feature and credited there to Kyle Flubacker.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-cherry-orchard': {
    pageMode: 'featured',
    summary:
      'The Cherry Orchard lands as a concluding Goodman chapter: Falls adapting Chekhov himself and closing out the final season he programmed for the theatre.',
    significance:
      'Falls’s own adaptation and the valedictory Goodman production attached to the end of his artistic-director era.',
    story:
      'This is the kind of production that matters less as a single title than as an ending. In the timeline and credits material, The Cherry Orchard carries farewell weight: a final season, a self-authored adaptation, and a last directorial gesture at the institution most associated with Falls’s career.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Post-Goodman transition years',
    images: [
      {
        src: cherryOrchardGoodmanThumb,
        alt: 'Goodman Theatre page-detail image for The Cherry Orchard.',
        caption: 'Goodman Theatre page-detail image for The Cherry Orchard.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: cherryOrchardReview,
        alt: 'The ensemble seated across the stage in The Cherry Orchard at Goodman Theatre.',
        caption: "The Cherry Orchard at Goodman Theatre, 2023. Image sourced from Let's Play Theatrical Reviews.",
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: cherryOrchardSunTimes1,
        alt: 'Kareem Bandealy as Lopakhin and Kate Fry as Ranevskaya in The Cherry Orchard.',
        caption: 'Kareem Bandealy and Kate Fry in The Cherry Orchard. Photo: Liz Lauren via Chicago Sun-Times.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: cherryOrchardSunTimes2,
        alt: 'Francis Guinan, Kate Fry, and Christopher Donahue in The Cherry Orchard.',
        caption: 'Francis Guinan, Kate Fry, and Christopher Donahue in The Cherry Orchard. Photo: Liz Lauren / Goodman Theatre via Chicago Sun-Times.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: cherryOrchardKeithParham1,
        alt: 'A warmly lit stage image from The Cherry Orchard at Goodman Theatre.',
        caption: 'Lighting view from The Cherry Orchard at Goodman Theatre. Image sourced from Keith Parham Lighting.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Anton Chekhov' },
      { role: 'Adapter', name: 'Robert Falls' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Extended through May 7, 2023' },
      { label: 'Venue', value: 'Goodman Albert Theatre' },
      { label: 'Runtime', value: '2 hours 40 minutes' },
      { label: 'Adaptation', value: 'Robert Falls' },
    ],
    cast: [
      { role: 'Lyubov Ranevskaya', name: 'Kate Fry' },
      { role: 'Lopakhin', name: 'Kareem Bandealy' },
      { role: 'Leonid Gayev', name: 'Christopher Donahue' },
      { role: 'Firs', name: 'Francis Guinan' },
      { role: 'Varya', name: 'Alejandra Escalante' },
      { role: 'Anya', name: 'Raven Whitley' },
      { role: 'Yepikhodov', name: 'Will Allan' },
      { role: 'Yasha', name: 'Felipe Carrasco' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Anton Chekhov' },
      { role: 'Adapter / Director', name: 'Robert Falls' },
      { role: 'Set Designer', name: 'Todd Rosenthal' },
      { role: 'Costume Designer', name: 'Ana Kuzmanic' },
      { role: 'Lighting Designer', name: 'Keith Parham' },
      { role: 'Sound Designer', name: 'Richard Woodbury' },
      { role: 'Dramaturg', name: 'Neena Arndt' },
      { role: 'Photography', name: 'Liz Lauren' },
    ],
    recognition: [
      {
        label: 'Valedictory production',
        detail: 'Credits describe it as Falls’s own adaptation and his valedictory Goodman production.',
      },
    ],
    contextNotes: [
      {
        label: 'Adaptation note',
        text: 'The production belongs to the cluster of Falls-directed adaptations that reworked canonical texts through his own dramaturgical lens.',
      },
      {
        label: 'Photo source',
        text: 'Current hero image is sourced from a contemporary review page documenting the Goodman production.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/the-cherry-orchard/',
        summary:
          'The official page frames the production as Falls completing Chekhov\'s four major plays after Three Sisters, The Seagull, and Uncle Vanya.',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2023/4/11/23679228/goodman-theater-the-cherry-orchard-review-superbly-cast-staged-in-sublime-production-by-robert-falls',
        summary:
          'The review calls the staging superbly cast and staged, emphasizing Falls\'s compassionate, character-focused Chekhov.',
      },
      {
        source: 'Goodman critical praise',
        href: 'https://www.goodmantheatre.org/show/the-cherry-orchard/',
        summary:
          'Goodman collects praise from Chicago Tribune, Chicago Sun-Times, Around The Town Chicago, and Talkin\' Broadway.',
      },
      {
        source: 'Keith Parham Lighting',
        href: 'https://www.keithparhamlighting.com/the-cherry-orchard',
        summary:
          'The lighting portfolio supplies additional production imagery and visual context for the Goodman staging.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/the-cherry-orchard/' },
      {
        label: 'Chicago Sun-Times review',
        href: 'https://chicago.suntimes.com/2023/4/11/23679228/goodman-theater-the-cherry-orchard-review-superbly-cast-staged-in-sublime-production-by-robert-falls',
      },
      { label: 'Keith Parham lighting gallery', href: 'https://www.keithparhamlighting.com/the-cherry-orchard' },
      { label: 'Todd Rosenthal design gallery', href: 'https://www.toddrosenthalstudio.com/the-cherry-orchard' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'death-of-a-salesman': {
    pageMode: 'featured',
    summary:
      'Death of a Salesman is one of the central transfer stories in the archive: built in Chicago, reformed for Broadway, and tied directly to Falls’s Tony-winning public profile.',
    significance:
      'A defining Brian Dennehy collaboration and the production that brought Falls the Tony Award for Best Direction of a Play.',
    story:
      'The documented arc moves cleanly from Goodman Theatre in 1998 to the Eugene O’Neill Theatre on Broadway in 1999, then onward to London in 2005. Few titles in the archive show the full Robert Falls machine as clearly: Chicago staging, major actor partnership, Broadway transfer, awards attention, and afterlife.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: deathOfASalesmanPlaybillFull,
        alt: 'Brian Dennehy and Elizabeth Franz in Death of a Salesman.',
        caption: 'Brian Dennehy and Elizabeth Franz in Death of a Salesman. Photo: Eric Y. Exit via Playbill.',
        orientation: 'portrait',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Arthur Miller' },
      { role: 'Cast highlight', name: 'Brian Dennehy' },
    ],
    recognition: [
      {
        label: 'Tony win',
        detail: 'Falls won the Tony Award for Best Direction of a Play for the Broadway revival.',
      },
      {
        label: 'Transfer story',
        detail: 'The 1998 Goodman production became the basis for the 1999 Broadway revival.',
      },
    ],
    contextNotes: [
      {
        label: 'Revival context',
        text: 'The Broadway run is documented in credits as a Best Revival Tony winner with 274 performances.',
      },
      {
        label: 'Afterlife',
        text: 'Timeline data also records a 2005 London remount, reinforcing the production’s reach beyond the initial Broadway transfer.',
      },
      {
        label: 'Photo source',
        text: 'Hero image is drawn from Playbill’s Broadway photo archive and credited there to Eric Y. Exit.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  aida: {
    pageMode: 'featured',
    summary:
      'Aida shows Falls operating at musical-theatre scale, bridging Chicago development, Broadway, touring life, and international remounts while also sharing book credit.',
    significance:
      'One of Falls’s largest commercial projects, notable both for scale and for his co-book-writing credit.',
    story:
      'The timeline records Aida as more than a single opening night: a 1999 pre-Broadway Chicago run, a 2000 Broadway opening, a national tour, and later international productions. It is one of the clearest examples in the archive of Falls moving between nonprofit theatre authority and large commercial musical infrastructure.',
    venueAnchor: 'Chicago (pre-Broadway)',
    eraLabel: 'National and international period',
    images: [
      {
        src: aidaPlaybillFull,
        alt: 'Heather Headley, Adam Pascal, and Sherie Rene Scott in Aida.',
        caption: 'Heather Headley, Adam Pascal, and Sherie Rene Scott in Aida. Photo: Joan Marcus via Playbill.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Music', name: 'Elton John' },
      { role: 'Lyrics', name: 'Tim Rice' },
      { role: 'Director / co-book', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'Broadway scale',
        detail: 'Credits note 1,852 performances and 4 Tony wins.',
      },
      {
        label: 'Creative role',
        detail: 'Falls is credited in the archive as both director and co-book writer.',
      },
    ],
    contextNotes: [
      {
        label: 'Production spread',
        text: 'Timeline entries follow the title from Chicago to Broadway, then to a national tour and international productions.',
      },
      {
        label: 'Photo source',
        text: 'Current hero image comes from Playbill’s Broadway retrospective gallery and is credited there to Joan Marcus.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-iceman-cometh': {
    pageMode: 'featured',
    summary:
      'The Iceman Cometh is one of the recurring epics in the archive, a title Falls revisited over decades and across Chicago, Dublin, and New York.',
    significance:
      'A signature Eugene O’Neill chapter inside the Falls/Brian Dennehy collaboration and one of the archive’s clearest examples of long-form revisitation.',
    story:
      'Starting at the Goodman in 1990, then resurfacing in Dublin, returning in a major 2012 Chicago revival, and moving again to BAM in 2015, The Iceman Cometh charts how Falls kept returning to O’Neill as a scale test, an actor collaboration engine, and a reputation-making text.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: iceman112,
        alt: 'Nathan Lane onstage in The Iceman Cometh at Goodman Theatre.',
        caption: 'Nathan Lane in The Iceman Cometh at Goodman Theatre. Image sourced from ChicagoCritic review coverage.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: iceman114,
        alt: 'Brian Dennehy onstage in The Iceman Cometh at Goodman Theatre.',
        caption: 'Brian Dennehy in The Iceman Cometh at Goodman Theatre. Image sourced from ChicagoCritic review coverage.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Eugene O’Neill' },
      { role: 'Cast highlight', name: 'Brian Dennehy' },
      { role: 'Cast highlight', name: 'Nathan Lane' },
      { role: 'Cast highlight', name: 'John Douglas Thompson' },
    ],
    recognition: [
      {
        label: 'Recurring production',
        detail: 'Credits note returns in 2012 and 2015 beyond the original 1990 Goodman staging.',
      },
      {
        label: 'Jeff context',
        detail: 'Timeline records a 2012 Jeff Award for The Iceman Cometh.',
      },
    ],
    contextNotes: [
      {
        label: 'International context',
        text: 'The 1992 Abbey Theatre remount shows the production entering an international festival setting early in its life.',
      },
      {
        label: 'Photo source',
        text: 'Current production stills are sourced from ChicagoCritic review coverage of the Goodman revival; official Goodman archive pages supplied the production metadata and casting context.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  '2666': {
    pageMode: 'featured',
    summary:
      '2666 represents Falls at his most structurally ambitious: a five-and-a-half-hour world-premiere adaptation that turns the production page into a record of scale, duration, and literary adaptation.',
    significance:
      'A major late-career world premiere and one of the most formally ambitious adaptations in the archive.',
    story:
      'The source material here is sparse compared with the scale of the event itself, which is exactly why the system needs a richer production model. Even with limited media, 2666 belongs in the featured set because it compresses several defining Falls interests at once: novel-to-stage adaptation, marathon duration, and Goodman-backed world-premiere risk.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: image2666Goodman,
        alt: 'Henry Godinez onstage in 2666 at Goodman Theatre.',
        caption: 'Henry Godinez in 2666 at Goodman Theatre. Photo: Liz Lauren via Goodman Theatre press room.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Novelist', name: 'Roberto Bolaño' },
      { role: 'Co-adapter', name: 'Seth Bockley' },
      { role: 'Adapter / director', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'World premiere',
        detail: 'Credits describe it as a world premiere co-adapted with Seth Bockley.',
      },
      {
        label: 'Scale',
        detail: 'Timeline notes the production as a five-and-a-half-hour adaptation.',
      },
    ],
    contextNotes: [
      {
        label: 'Adaptation context',
        text: '2666 sits beside The Seagull and The Cherry Orchard as part of Falls’s archive of substantial literary adaptation work.',
      },
      {
        label: 'Photo source',
        text: 'Hero image is sourced from the Goodman Theatre press room and credited there to Liz Lauren.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'luna-gale': {
    pageMode: 'featured',
    summary:
      'Luna Gale is a focused Rebecca Gilman premiere with a clear afterlife, moving from Goodman world premiere status to a Los Angeles transfer within a year.',
    significance:
      'A world premiere that extends Falls’s long-running collaboration with Rebecca Gilman and shows a new work moving beyond Chicago.',
    story:
      'Compared with the giant institutional chapters elsewhere in the archive, Luna Gale matters because of precision. It is a compact Goodman premiere, a collaborator-driven production, and a title with enough documented transfer movement to show how Falls’s new-work direction could travel.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: lunaGaleGoodman,
        alt: 'An actor holding a file onstage in Luna Gale at Goodman Theatre.',
        caption: 'Luna Gale at Goodman Theatre. Image sourced from the official Goodman production archive.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
    ],
    recognition: [
      {
        label: 'World premiere',
        detail: 'Credits identify Luna Gale as a world premiere by Rebecca Gilman.',
      },
      {
        label: 'Transfer story',
        detail: 'Timeline records a later staging at the Kirk Douglas Theatre in Los Angeles.',
      },
    ],
    contextNotes: [
      {
        label: 'Career context',
        text: 'Luna Gale helps trace how central Rebecca Gilman remained inside Falls’s late Goodman programming.',
      },
      {
        label: 'Photo source',
        text: 'Hero image is sourced from the official Goodman Theatre archive page for the world-premiere production.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  chinglish: {
    pageMode: 'archive',
    summary:
      'Chinglish remains in the archive as a Goodman-to-Broadway transfer from Falls’s Goodman years, but current official production pages credit Leigh Silverman as director.',
    significance:
      'An institutional transfer marker that now needs attribution cleanup before it should be treated as a Robert Falls featured production.',
    story:
      'The timeline and credits material point to a clean Goodman-premiere-to-Broadway arc, but current official Goodman production pages credit Leigh Silverman as director. Until the site-wide production list is audited, this page is better handled as an archive record than as a featured Falls production profile.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    collaborators: [
      { role: 'Playwright', name: 'David Henry Hwang' },
    ],
    recognition: [
      {
        label: 'Transfer story',
        detail: 'The title moved from Goodman world-premiere status to Broadway within the same year.',
      },
    ],
    contextNotes: [
      {
        label: 'Attribution audit',
        text: 'Official Goodman production pages for Chinglish explicitly credit Leigh Silverman as director, so this entry should not be presented as a confirmed Robert Falls production without a broader source review.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
  'the-seagull': {
    pageMode: 'featured',
    summary:
      'The Seagull stands at the center of Falls’s Chekhov line in the archive: actor-driven, adapted, and personally important enough for him to later describe the rehearsal process as life-changing.',
    significance:
      'A major Chekhov chapter and a precursor to the later valedictory force of The Cherry Orchard.',
    story:
      'The repo now has a real stage image for The Seagull, which immediately changes how the page can breathe. More importantly, the textual record frames the production as transformative for Falls personally, making it one of the few titles where rehearsal process itself becomes part of the career story.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: seagullStage,
        alt: 'Two actors in a close scene from The Seagull under black stage space.',
        caption: 'The Seagull at Goodman Theatre, 2010.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Anton Chekhov' },
      { role: 'Adapter', name: 'Robert Falls', note: 'Adaptation context documented in local notes.' },
    ],
    recognition: [
      {
        label: 'Chekhov adaptation',
        detail: 'Local notes group The Seagull with Falls’s adaptation work on major classics.',
      },
      {
        label: 'Process significance',
        detail: 'Timeline says Falls later called the rehearsal process “life-changing.”',
      },
    ],
    contextNotes: [
      {
        label: 'Career context',
        text: 'The Seagull and The Cherry Orchard now read as connected bookends inside Falls’s Chekhov work.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
};

const productionEntries = timelineEntries.filter((entry) => entry.category === 'Production');

const creditNotesBySlug = new Map<string, string[]>();
for (const group of creditGroups) {
  for (const credit of group.credits) {
    const slug = slugify(stripQualifier(credit.title));
    const notes = creditNotesBySlug.get(slug) ?? [];
    if (credit.note) notes.push(credit.note);
    creditNotesBySlug.set(slug, notes);
  }
}

const groupedProductions = new Map<string, ProductionStaging[]>();
for (const entry of productionEntries) {
  const slug = slugify(stripQualifier(entry.title));
  const stagings = groupedProductions.get(slug) ?? [];
  stagings.push({
    title: entry.title,
    year: entry.year,
    venue: entry.venue,
    description: entry.description,
  });
  groupedProductions.set(slug, stagings);
}

for (const group of creditGroups) {
  for (const credit of group.credits) {
    const slug = slugify(stripQualifier(credit.title));
    const stagings = groupedProductions.get(slug) ?? [];
    const alreadyPresent = stagings.some(
      (staging) =>
        staging.year === credit.year &&
        (staging.venue ?? '') === (credit.venue ?? '') &&
        stripQualifier(staging.title) === stripQualifier(credit.title),
    );

    if (!alreadyPresent) {
      stagings.push({
        title: credit.title,
        year: credit.year,
        venue: credit.venue,
        description: creditDescription(credit),
      });
    }

    groupedProductions.set(slug, stagings);
  }
}

export const productions: ProductionRecord[] = Array.from(groupedProductions.entries())
  .map(([slug, entries]) => {
    const stagings = [...entries].sort((a, b) => yearValue(a.year) - yearValue(b.year));
    const title = stripQualifier(stagings[0].title);
    const venues = uniqueValues(stagings.map((staging) => staging.venue));
    const highlights = dedupeStrings(creditNotesBySlug.get(slug) ?? []);
    const firstYearValue = yearValue(stagings[0].year);
    const latestYearValue = yearValue(stagings[stagings.length - 1].year);
    const firstYear = stagings[0].year;
    const latestYear = stagings[stagings.length - 1].year;
    const yearSpan = buildYearSpan(firstYear, latestYear);
    const primaryVenue = venues[0];
    const seed = productionSeeds[slug];
    const recognition = uniqueValues(
      [
        ...(seed?.recognition ?? []).map((item) => `${item.label}|||${item.detail}`),
        ...highlights
          .map((highlight) => recognitionFromHighlight(highlight))
          .filter((item): item is ProductionRecognition => Boolean(item))
          .map((item) => `${item.label}|||${item.detail}`),
      ],
    ).map((item) => {
      const [label, detail] = item.split('|||');
      return { label, detail };
    });

    const seedContextNotes = seed?.contextNotes ?? [];
    const derivedNotes = highlights
      .filter((highlight) => !seedContextNotes.some((note) => note.text.includes(highlight)))
      .map((highlight) => noteFromHighlight(highlight));

    return {
      slug,
      title,
      pageMode: seed?.pageMode ?? (priorityFeaturedSlugs.has(slug) ? 'featured' : 'archive'),
      summary: seed?.summary ?? buildSummary(title, stagings),
      publicSummary: seed?.publicSummary,
      synopsis: seed?.synopsis ?? seed?.publicSummary ?? seed?.summary,
      fallsContext: seed?.fallsContext ?? seed?.significance,
      significance:
        seed?.significance ?? buildFallbackSignificance(title, stagings, highlights, firstYearValue),
      story: seed?.story,
      yearSpan,
      firstYear,
      latestYear,
      firstYearValue,
      latestYearValue,
      decadeLabel: decadeLabel(firstYearValue),
      eraLabel: seed?.eraLabel ?? buildEraLabel(firstYearValue, latestYearValue),
      stagingCount: stagings.length,
      venueCount: venues.length,
      venueAnchor: seed?.venueAnchor ?? primaryVenue ?? 'Production archive',
      primaryVenue,
      venues,
      stagings,
      images: seed?.images ?? [],
      collaborators: seed?.collaborators ?? [],
      quickFacts:
        seed?.quickFacts ??
        [
          { label: 'First staging', value: firstYear },
          { label: 'Latest staging', value: latestYear },
          { label: 'Stagings', value: String(stagings.length) },
          { label: 'Primary venue', value: primaryVenue ?? 'Not listed' },
        ],
      cast: seed?.cast ?? seed?.collaborators?.filter((item) => /cast/i.test(item.role)).map((item) => ({
        role: item.role.replace(/^Cast highlight$/i, 'Cast'),
        name: item.name,
      })) ?? [],
      creativeTeam: seed?.creativeTeam ?? seed?.collaborators?.filter((item) => !/cast/i.test(item.role)).map((item) => ({
        role: item.role,
        name: item.name,
      })) ?? [],
      recognition,
      awardsOrSignificance: seed?.awardsOrSignificance ?? recognition,
      reviews: seed?.reviews ?? [],
      externalSources: seed?.externalSources ?? [],
      watchLinks: seed?.watchLinks ?? [],
      contextNotes: [...seedContextNotes, ...derivedNotes],
      relatedLinks: seed?.relatedLinks ?? seedLinks,
      sourceStatus: seed?.sourceStatus ?? 'repo-only',
    };
  })
  .sort((a, b) => a.firstYearValue - b.firstYearValue || a.title.localeCompare(b.title));

export const featuredProductions = productions.filter((production) => production.pageMode === 'featured');

export const productionStats = {
  titleCount: productions.length,
  stagingCount: productions.reduce((total, production) => total + production.stagingCount, 0),
  featuredCount: featuredProductions.length,
  earliestYear: productions[0]?.firstYear ?? '',
  latestYear: productions[productions.length - 1]?.latestYear ?? '',
};

export function getProductionHref(title: string): string {
  return `/productions/${slugify(stripQualifier(title))}`;
}

export function getFeaturedThumbnail(title: string): ProductionImage | null {
  const production = productions.find((p) => p.title === stripQualifier(title));
  if (!production || production.pageMode !== 'featured' || production.images.length === 0) return null;
  return production.images[0];
}

export function getProductionBySlug(slug: string): ProductionRecord | undefined {
  return productions.find((production) => production.slug === slug);
}

export function getRelatedProductions(slug: string, limit = 3): ProductionRecord[] {
  const current = getProductionBySlug(slug);
  if (!current) return [];

  const currentCollaborators = current.collaborators.map((item) => item.name);

  return productions
    .filter((production) => production.slug !== slug)
    .map((production) => {
      const sharedVenues = production.venues.filter((venue) => current.venues.includes(venue)).length;
      const sharedCollaborators = production.collaborators.filter((item) =>
        currentCollaborators.includes(item.name),
      ).length;
      const yearDistance = Math.abs(production.firstYearValue - current.firstYearValue);
      const sameDecade = production.decadeLabel === current.decadeLabel ? 2 : 0;
      const sameMode = production.pageMode === current.pageMode ? 1 : 0;
      const score =
        sharedVenues * 5 +
        sharedCollaborators * 4 +
        sameDecade +
        sameMode +
        Math.max(0, 4 - Math.floor(yearDistance / 10));

      return { production, score, yearDistance };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.yearDistance - b.yearDistance ||
        a.production.title.localeCompare(b.production.title),
    )
    .slice(0, limit)
    .map(({ production }) => production);
}
