import type { ImageMetadata } from 'astro';

import amadeus1 from '../images/amadeus/amadeus-1.jpg';
import amadeus2 from '../images/amadeus/amadeus-2.jpg';
import amadeus3 from '../images/amadeus/amadeus-3.jpg';
import amadeusMozart from '../images/amadeus/amadeus-mozart.jpg';
import holidayRehearsal1 from '../images/holiday/holiday-rehearsal-1.jpg';
import holidayRehearsal2 from '../images/holiday/holiday-rehearsal-2.jpg';
import onlyAlivePoster from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-poster.jpg';
import onlyAliveKeyArt from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-key-art.jpg';
import onlyAliveArt from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-art.webp';
import onlyAlive1 from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-1.jpg';
import onlyAlive5 from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-5.jpg';
import onlyAlive6 from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-6.jpg';
import onlyAliveReh1 from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-reh-1.jpg';
import onlyAliveReh2 from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-reh-2.jpg';
import onlyAliveReh3 from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-reh-3.jpg';
import onlyAliveReh4 from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-reh-4.jpg';
import davidCalePortrait from '../images/were-only-alive-for-a-short-amount-of-time/were-only-alive-for-a-short-amount-of-time-david-cale-portrait.jpg';
import robertFallsPortrait2013 from '../images/were-only-alive-for-a-short-amount-of-time/robert-falls-portrait-2013.jpg';
import uncleVanyaShowArt from '../images/uncle-vanya/uncle-vanya-show-art.png';
import uncleVanya2 from '../images/uncle-vanya/uncle-vanya-2.webp';
import uncleVanya3 from '../images/uncle-vanya/uncle-vanya-3.webp';
import uncleVanya4 from '../images/uncle-vanya/uncle-vanya-4.webp';
import uncleVanya6 from '../images/uncle-vanya/uncle-vanya-6.webp';
import uncleVanya7 from '../images/uncle-vanya/uncle-vanya-7.webp';
import uncleVanya8 from '../images/uncle-vanya/uncle-vanya-8.webp';
import uncleVanya9 from '../images/uncle-vanya/uncle-vanya-9.webp';
import uncleVanya11 from '../images/uncle-vanya/uncle-vanya-11.webp';
import seagullShowArt from '../images/the-seagull/the-seagull-show-art.png';
import seagullEnsemble from '../images/the-seagull/the-seagull-ensemble.jpg';
import seagull1 from '../images/the-seagull/the-seagull-1.jpg';
import seagull2 from '../images/the-seagull/the-seagull-2.jpg';
import seagull3 from '../images/the-seagull/the-seagull-3.jpg';
import seagull4 from '../images/the-seagull/the-seagull-4.jpg';
import seagull5 from '../images/the-seagull/the-seagull-5.jpg';
import seagull6 from '../images/the-seagull/the-seagull-6.jpg';
import seagull7 from '../images/the-seagull/the-seagull-7.jpg';
import seagull8 from '../images/the-seagull/the-seagull-8.jpg';
import icemanShowArt from '../images/the-iceman-cometh/the-iceman-cometh-show-art.webp';
import iceman1 from '../images/the-iceman-cometh/the-iceman-cometh-1.webp';
import iceman2 from '../images/the-iceman-cometh/the-iceman-cometh-2.webp';
import iceman3 from '../images/the-iceman-cometh/the-iceman-cometh-3.webp';
import iceman4 from '../images/the-iceman-cometh/the-iceman-cometh-4.jpg';
import iceman5 from '../images/the-iceman-cometh/the-iceman-cometh-5.jpg';
import icemanBam1 from '../images/the-iceman-cometh/the-iceman-cometh-bam-1.webp';
import icemanBam2 from '../images/the-iceman-cometh/the-iceman-cometh-bam-2.jpg';
import icemanBam3 from '../images/the-iceman-cometh/the-iceman-cometh-bam-3.jpg';
import icemanBam4 from '../images/the-iceman-cometh/the-iceman-cometh-bam-4.jpg';
import jacksonianHero from '../images/the-jacksonian/the-jacksonian-hero.jpg';
import jacksonian1 from '../images/the-jacksonian/the-jacksonian-1.jpg';
import jacksonian2 from '../images/the-jacksonian/the-jacksonian-2.webp';
import jacksonian3 from '../images/the-jacksonian/the-jacksonian-3.jpg';
import jacksonianShowArt from '../images/the-jacksonian/the-jacksonian-show-art.jpg';
import soupsShowArt from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-show-art.png';
import soups1 from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-1.jpg';
import soups3 from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-3.jpg';
import soups4 from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-4.jpg';
import soups5 from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-5.jpg';
import soupsReh2 from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-rehearsal-2.jpg';
import soupsReh3 from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-rehearsal-3.jpg';
import soupsReh8 from '../images/soups-stews-and-casseroles-1976/soups-stews-and-casseroles-1976-rehearsal-8.jpg';
import pamplonaShowArt from '../images/pamplona/pamplona-show-art.png';
import pamplonaPoster from '../images/pamplona/pamplona-poster.jpg';
import pamplona1 from '../images/pamplona/pamplona-1.jpg';
import pamplona2 from '../images/pamplona/pamplona-2.jpg';
import pamplona3 from '../images/pamplona/pamplona-3.jpg';
import pamplona4 from '../images/pamplona/pamplona-4.jpg';
import pamplona5 from '../images/pamplona/pamplona-5.jpg';
import pamplonaParis from '../images/pamplona/pamplona-paris.webp';
import pamplonaPhone from '../images/pamplona/pamplona-phone.jpg';
import mollySweeneyShowArt from '../images/molly-sweeney/molly-sweeney-show-art.jpg';
import brianFrielPortrait from '../images/molly-sweeney/brian-friel-portrait.png';
import mollySweeney1 from '../images/molly-sweeney/molly-sweeney-1.jpg';
import mollySweeney2 from '../images/molly-sweeney/molly-sweeney-2.jpg';
import mollySweeney3 from '../images/molly-sweeney/molly-sweeney-3.jpg';
import mollySweeney4 from '../images/molly-sweeney/molly-sweeney-4.jpg';
import shiningCityWide from '../images/shining-city/shining-city-wide.webp';
import shiningCityPortrait from '../images/shining-city/shining-city-portrait.webp';
import shiningCityGoodman from '../images/shining-city/shining-city-goodman.webp';
import shiningCityShowArt from '../images/shining-city/shining-city-show-art.png';
import shiningCityDoor from '../images/shining-city/shining-city-door.jpg';
import franksHomeEnsemble from '../images/franks-home/franks-home-ensemble.webp';
import franksHomeFamily from '../images/franks-home/franks-home-family.webp';
import franksHomeHandshake from '../images/franks-home/franks-home-handshake.webp';
import franksHomeWorktable from '../images/franks-home/franks-home-worktable.webp';
import franksHomeShowArt from '../images/franks-home/franks-home-show-art.webp';
import franksHomeWeller from '../images/franks-home/franks-home-weller.webp';
import franksHomePortrait from '../images/franks-home/franks-home-portrait.jpg';
import desireUnderTheElmsHero from '../images/desire-under-the-elms/desire-under-the-elms-hero.webp';
import desireUnderTheElmsTable from '../images/desire-under-the-elms/desire-under-the-elms-table.jpg';
import desireUnderTheElmsLovers from '../images/desire-under-the-elms/desire-under-the-elms-lovers.jpg';
import desireUnderTheElmsAbbieEphraim from '../images/desire-under-the-elms/desire-under-the-elms-abbie-ephraim.jpg';
import desireUnderTheElmsArrival from '../images/desire-under-the-elms/desire-under-the-elms-arrival.jpg';
import desireUnderTheElms6 from '../images/desire-under-the-elms/desire-under-the-elms-6.jpg';
import dollhouseShowArt from '../images/dollhouse/dollhouse-show-art.png';
import dollhouseTitleTreatment from '../images/dollhouse/dollhouse-title-treatment.png';
import enemyShowArt from '../images/an-enemy-of-the-people/enemy-show-art.webp';
import measureShowArt from '../images/measure-for-measure/measure-for-measure-show-art.png';
import measurePoster from '../images/measure-for-measure/measure-for-measure-poster.jpg';
import measure1 from '../images/measure-for-measure/measure-for-measure-1.jpg';
import measure2 from '../images/measure-for-measure/measure-for-measure-2.jpg';
import measure3 from '../images/measure-for-measure/measure-for-measure-3.jpg';
import measure4 from '../images/measure-for-measure/measure-for-measure-4.jpg';
import measure5 from '../images/measure-for-measure/measure-for-measure-5.jpg';
import measure6 from '../images/measure-for-measure/measure-for-measure-6.jpg';
import measure7 from '../images/measure-for-measure/measure-for-measure-7.jpg';
import measure8 from '../images/measure-for-measure/measure-for-measure-8.jpg';
import blindDateShowArt from '../images/blind-date/blind-date-show-art.png';
import blindDate1 from '../images/blind-date/blind-date-1.jpg';
import blindDate2 from '../images/blind-date/blind-date-2.jpg';
import blindDate4 from '../images/blind-date/blind-date-4.jpg';
import lunaGaleShowArt from '../images/luna-gale/luna-gale-show-art.png';
import lunaGalePoster from '../images/luna-gale/luna-gale-poster.jpg';
import lunaGaleLaPoster from '../images/luna-gale/luna-gale-la-poster.jpg';
import lunaGale1 from '../images/luna-gale/luna-gale-1.jpg';
import lunaGale2 from '../images/luna-gale/luna-gale-2.jpg';
import lunaGale3 from '../images/luna-gale/luna-gale-3.jpg';
import lunaGale4 from '../images/luna-gale/luna-gale-4.jpg';
import lunaGale5 from '../images/luna-gale/luna-gale-5.jpg';
import lunaGale6 from '../images/luna-gale/luna-gale-6.jpg';
import lunaGaleLa1 from '../images/luna-gale/luna-gale-la-1.jpg';
import lunaGaleLa2 from '../images/luna-gale/luna-gale-la-2.jpg';
import donGiovanni1 from '../images/don-giovanni/don-giovanni-1.jpg';
import donGiovanni2 from '../images/don-giovanni/don-giovanni-2.jpg';
import donGiovanni3 from '../images/don-giovanni/don-giovanni-3.jpg';
import donGiovanni4 from '../images/don-giovanni/don-giovanni-4.jpg';
import donGiovanni5 from '../images/don-giovanni/don-giovanni-5.jpg';
import donGiovanni6 from '../images/don-giovanni/don-giovanni-6.jpg';
import donGiovanni7 from '../images/don-giovanni/don-giovanni-7.jpg';
import donGiovanni8 from '../images/don-giovanni/don-giovanni-8.jpg';
import donGiovanni2019Revival from '../images/don-giovanni/don-giovanni-2019-revival.jpg';
import americanBuffaloPlaybill from '../images/american-buffalo/american-buffalo-playbill.jpg';
import americanBuffaloLogo from '../images/american-buffalo/american-buffalo-logo.png';
import americanBuffalo1 from '../images/american-buffalo/american-buffalo-1.jpg';
import americanBuffalo2 from '../images/american-buffalo/american-buffalo-2.jpg';
import americanBuffalo3 from '../images/american-buffalo/american-buffalo-3.jpg';
import americanBuffalo4 from '../images/american-buffalo/american-buffalo-4.jpg';
import americanBuffalo5 from '../images/american-buffalo/american-buffalo-5.jpg';
import americanBuffalo6 from '../images/american-buffalo/american-buffalo-6.jpg';
import americanBuffaloMarquee from '../images/american-buffalo/american-buffalo-marquee.jpg';
import americanBuffaloCurtainCall from '../images/american-buffalo/american-buffalo-curtain-call.jpg';
import americanBuffaloAfterparty from '../images/american-buffalo/american-buffalo-afterparty.jpg';
import lifeInTheatreShowArt from '../images/a-life-in-the-theatre/a-life-in-the-theatre-show-art.png';
import lifeInTheatreMakeup from '../images/a-life-in-the-theatre/a-life-in-the-theatre-makeup.png';
import lifeInTheatreTitle from '../images/a-life-in-the-theatre/a-life-in-the-theatre-title.webp';
import mametFestivalPortrait from '../images/a-life-in-the-theatre/a-life-in-the-theatre-mamet-festival-portrait.webp';
import kingLear1 from '../images/king-lear/king-lear-1.webp';
import kingLear2 from '../images/king-lear/king-lear-2.webp';
import kingLear3 from '../images/king-lear/king-lear-3.webp';
import kingLear4 from '../images/king-lear/king-lear-4.webp';
import kingLear5 from '../images/king-lear/king-lear-5.webp';
import kingLear6 from '../images/king-lear/king-lear-6.webp';
import kingLear7 from '../images/king-lear/king-lear-7.webp';
import kingLear8 from '../images/king-lear/king-lear-8.webp';
import kingLear9 from '../images/king-lear/king-lear-9.jpg';
import kingLear10 from '../images/king-lear/king-lear-10.jpg';
import kingLear11 from '../images/king-lear/king-lear-11.jpg';
import kingLearCandid from '../images/king-lear/king-lear-candid.jpg';
import kingLearTitle from '../images/king-lear/king-lear-title.webp';
import longDaysJourneyPlaybill from '../images/long-days-journey-into-night/long-days-journey-into-night-playbill.jpg';
import nightOfTheIguanaPlaybill from '../images/the-night-of-the-iguana/the-night-of-the-iguana-playbill.jpg';
import roseTattooPlaybill from '../images/the-rose-tattoo/the-rose-tattoo-playbill.jpg';
import speedOfDarknessPlaybill from '../images/the-speed-of-darkness/the-speed-of-darkness-playbill.jpg';
import youngManFromAtlantaPlaybill from '../images/the-young-man-from-atlanta/the-young-man-from-atlanta-playbill.jpg';
import talkRadioPlaybill from '../images/talk-radio/talk-radio-playbill.jpg';
import aidaPlaybill from '../images/aida/aida-playbill.jpg';
import aidaHeadleyPascal from '../images/aida/aida-headley-pascal.jpg';
import aidaAmnerisEnsemble from '../images/aida/aida-amneris-ensemble.jpg';
import blueSurgeShowArt from '../images/blue-surge/blue-surge-show-art.png';
import blueSurgeTitleTreatment from '../images/web-sourced/blue-surge-title-treatment.png';
import finishingThePictureShowArt from '../images/finishing-the-picture/finishing-the-picture-show-art.png';
import houseAndGardenShowArt from '../images/web-sourced/house-and-garden-goodman-show-art.png';
import hughieShowArt from '../images/hughie/hughie-show-art.png';
import lobbyHeroGoodmanShowArt from '../images/web-sourced/lobby-hero-goodman-show-art.png';
import lobbyHeroTitleTreatmentAsset from '../images/web-sourced/lobby-hero-title-treatment.png';
import lobbyHeroLanceBaker from '../images/web-sourced/lobby-hero-lance-baker.jpg';
import lobbyHeroRobertFalls from '../images/web-sourced/lobby-hero-robert-falls.jpg';
import lobbyHeroRolandoBoyce from '../images/web-sourced/lobby-hero-rolando-boyce.jpg';
import lobbyHeroScottCummins from '../images/web-sourced/lobby-hero-scott-cummins.jpg';
import lobbyHeroJulieGranata from '../images/web-sourced/lobby-hero-julie-granata.jpg';
import theGoatGoodmanShowArt from '../images/web-sourced/the-goat-goodman-show-art.png';
import theGoatTitleTreatment from '../images/web-sourced/the-goat-title-treatment.png';
import theGoatRobertFalls from '../images/web-sourced/the-goat-robert-falls.jpg';
import theGoatEdwardAlbee from '../images/web-sourced/the-goat-edward-albee.jpg';
import theGoatPatrickClear from '../images/web-sourced/the-goat-patrick-clear.png';
import theGoatWilliamDick from '../images/web-sourced/the-goat-william-dick.png';
import theGoatBarbaraRobertson from '../images/web-sourced/the-goat-barbara-robertson.jpg';
import theGoatMichaelStahlDavid from '../images/web-sourced/the-goat-michael-stahl-david.jpg';
import theGoatMichaelPhilippi from '../images/web-sourced/the-goat-michael-philippi.jpg';
import theGoatRichardWoodbury from '../images/web-sourced/the-goat-richard-woodbury.webp';
import theGuysShowArt from '../images/the-guys/the-guys-show-art.png';
import swingState1 from '../images/swing-state/swing-state-1.jpg';
import swingState2 from '../images/swing-state/swing-state-2.jpg';
import swingState3 from '../images/swing-state/swing-state-3.jpg';
import wintersTaleFeatured from '../images/the-winters-tale/the-winters-tale-featured.png';
import wintersTale1 from '../images/the-winters-tale/the-winters-tale-1.jpg';
import wintersTale2 from '../images/the-winters-tale/the-winters-tale-2.jpg';
import wintersTale3 from '../images/the-winters-tale/the-winters-tale-3.jpg';
import wintersTale5 from '../images/the-winters-tale/the-winters-tale-5.jpg';
import wintersTale11 from '../images/the-winters-tale/the-winters-tale-11.jpg';
import aidaPlaybillFull from '../images/web-sourced/aida-playbill-full.jpg';
import amadeusBanner from '../images/web-sourced/amadeus-steppenwolf-banner.png';
import amadeusAudienceVideoThumb from '../images/web-sourced/amadeus-audience-video-thumb.jpg';
import amadeusChicagoTribune from '../images/web-sourced/amadeus-chicago-tribune.webp';
import amadeusRehearsalJoelMoorman from '../images/web-sourced/amadeus-rehearsal-joel-moorman.avif';
import image2666ShowArt from '../images/2666/2666-show-art.png';
import image2666Wide from '../images/2666/2666-01.jpg';
import image2666House from '../images/2666/2666-02.jpg';
import image2666Bar from '../images/2666/2666-03.jpg';
import image2666Ensemble from '../images/2666/2666-04.jpg';
import image2666Portrait from '../images/2666/2666-05.jpg';
import image2666Goodman from '../images/web-sourced/2666-goodman.jpg';
import cherryOrchardGoodmanThumb from '../images/web-sourced/the-cherry-orchard-goodman-thumb.jpg';
import cherryOrchardReview from '../images/web-sourced/the-cherry-orchard-review.jpg';
import cherryOrchardKeithParham1 from '../images/web-sourced/the-cherry-orchard-keith-parham-1.jpg';
import cherryOrchardSunTimes1 from '../images/web-sourced/the-cherry-orchard-suntimes-1.jpg';
import cherryOrchardSunTimes2 from '../images/web-sourced/the-cherry-orchard-suntimes-2.jpg';
import deathOfASalesmanPlaybillFull from '../images/web-sourced/death-of-a-salesman-playbill-full.jpg';
import deathOfASalesmanPlaybillCover from '../images/death-of-a-salesman/death-of-a-salesman-playbill-cover.jpg';
import deathOfASalesmanGoodmanWilly from '../images/web-sourced/death-of-a-salesman-goodman-willy.jpg';
import deathOfASalesmanDennehyFranz from '../images/web-sourced/death-of-a-salesman-dennehy-franz-joan-marcus.jpg';
import deathOfASalesmanDvdCover from '../images/web-sourced/death-of-a-salesman-2000-dvd-cover.jpg';
import wingsYaleRep1978One from '../images/web-sourced/wings-yale-rep-1978-1.jpg';
import wingsYaleRep1978Two from '../images/web-sourced/wings-yale-rep-1978-2.jpg';
import wingsYaleRep1978Four from '../images/web-sourced/wings-yale-rep-1978-4.jpg';
import wingsYoungVic2017Aerial from '../images/web-sourced/wings-young-vic-2017-aerial.jpg';
import wingsYoungVic2017Language from '../images/web-sourced/wings-young-vic-2017-language.jpg';
import donGiovanniDonnaElvira from '../images/web-sourced/don-giovanni-donna-elvira.jpg';
import donGiovanniFinalCostume from '../images/web-sourced/don-giovanni-final-costume.jpg';
import holidayGoodman from '../images/web-sourced/holiday-goodman.jpg';
import holidayGoodmanThumb from '../images/web-sourced/holiday-goodman-thumb.jpg';
import holidayProduction2 from '../images/web-sourced/holiday-production-2.webp';
import holidayProduction7 from '../images/web-sourced/holiday-production-7.webp';
import holidayProduction8 from '../images/web-sourced/holiday-production-8.webp';
import soundInsideGoodmanThumb from '../images/web-sourced/the-sound-inside-goodman-thumb.jpg';
import soundInsideWttw from '../images/web-sourced/the-sound-inside-wttw.jpg';
import swingStateGoodmanThumb from '../images/web-sourced/swing-state-goodman-thumb.jpg';
import robertFallsRehearsal from '../images/robert-falls-rehearsal.jpg';
import fallsWisdomBridgeRehearsal from '../images/falls-wisdom-bridge-rehearsal.jpg';

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
  photographer?: string;
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

export interface ProductionPressQuote {
  quote: string;
  source: string;
  href?: string;
}

export interface ProductionAudienceFeedback {
  quote: string;
  author: string;
  source?: string;
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
  pressQuotes: ProductionPressQuote[];
  audienceFeedback: ProductionAudienceFeedback[];
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
  pressQuotes?: ProductionPressQuote[];
  audienceFeedback?: ProductionAudienceFeedback[];
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
    const detail = ensureSentence(first.description);
    return `${title} was directed by Robert Falls in ${first.year}${firstVenue}.${detail ? ` ${detail}` : ''}`.trim();
  }

  const lastVenue = last.venue ? ` at ${last.venue}` : '';
  return `${title} spans ${stagings.length} documented stagings from ${first.year}${firstVenue} to ${last.year}${lastVenue}.`;
}

function buildFallbackSignificance(
  title: string,
  stagings: ProductionStaging[],
  highlights: string[],
  firstYearValue: number,
): string {
  const first = stagings[0];
  const last = stagings[stagings.length - 1];
  const venues = uniqueValues(stagings.map((staging) => staging.venue));
  const highlightText = highlights.join(' ');

  if (/world premiere/i.test(highlightText)) {
    return `${title} is documented here as a world-premiere title in Falls's archive.`;
  }

  if (/Tony/i.test(highlightText)) {
    return `${title} is tied to documented Tony recognition within Falls's career record.`;
  }

  if (/Jeff/i.test(highlightText)) {
    return `${title} carries documented Chicago awards recognition within the archive.`;
  }

  if (stagings.length > 1) {
    return `This archive entry follows ${title} across ${stagings.length} documented stagings${venues.length > 1 ? ` at ${venues.length} venues` : ''}, from ${first.year} to ${last.year}.`;
  }

  if (first.venue && /goodman/i.test(first.venue)) {
    return `This entry belongs to Falls's Goodman-era directing record, with a documented staging at ${first.venue} in ${first.year}.`;
  }

  if (firstYearValue >= 2020) {
    return `This entry belongs to Falls's post-Goodman freelance period, with a documented staging in ${first.year}.`;
  }

  if (firstYearValue >= 1986) {
    return `This entry belongs to Falls's Goodman-era directing record, with a documented staging in ${first.year}.`;
  }

  return `This archive entry currently preserves a documented ${first.year}${firstVenuePhrase(first.venue)} staging of ${title}.`;
}

function firstVenuePhrase(venue?: string): string {
  return venue ? ` at ${venue}` : '';
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

export const priorityFeaturedTitles = [
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
  'The Seagull',
];

export const priorityFeaturedSlugs = new Set(priorityFeaturedTitles.map((title) => slugify(title)));

const seedLinks: ProductionRelatedLink[] = [
  { label: 'Production library', href: '/productions', type: 'library' },
  { label: 'Career timeline', href: '/timeline', type: 'timeline' },
  { label: 'Selected credits', href: '/credits', type: 'credits' },
];

const archiveFallbackImage: ProductionImage = {
  src: fallsWisdomBridgeRehearsal,
  alt: 'Robert Falls leads a rehearsal in an archival production-room photograph.',
  caption:
    'Robert Falls in rehearsal, representing the working-room record for archive pages awaiting show-specific imagery.',
  orientation: 'landscape',
  kind: 'rehearsal',
};

const productionSeeds: Record<string, ProductionSeed> = {
  wings: {
    pageMode: 'archive',
    summary:
      'Falls directed the Midwest premiere of Arthur Kopit\'s Wings at Wisdom Bridge Theatre in 1979, bringing a formally daring drama about stroke, aphasia, memory, and recovery into the young company\'s early Chicago repertory.',
    publicSummary:
      'A 1979 Wisdom Bridge Theatre staging of Arthur Kopit\'s Wings, documented in the archive as the Midwest premiere.',
    synopsis:
      'Wings follows Emily Stilson, a former aviator and wing-walker, after a stroke shatters her command of language and perception. The play moves inside Emily\'s altered consciousness, turning recovery into a theatrical experience of fragments, sounds, fear, humor, and slowly returning coherence.',
    fallsContext:
      'The 1979 Wisdom Bridge Wings lands very early in Falls\'s artistic-director years, when the company was becoming a laboratory for contemporary American writing and physically charged staging. It shows him engaging a recent, acclaimed new play whose difficulty was not size but perception: how to make an audience feel the interior world of a damaged and re-forming mind.',
    significance:
      'A Midwest premiere from the first phase of Falls\'s Wisdom Bridge leadership, attached to one of Arthur Kopit\'s most honored plays: a 1979 Tony-nominated and Pulitzer-finalist drama about aphasia and recovery.',
    story:
      'Wings gives the 1979 archive a richer profile than the old one-line record suggested. Kopit\'s play had moved quickly from Yale Rep to the Public Theater and Broadway, where Constance Cummings won major acting recognition and the play entered the season as a Tony-nominated work. Falls\'s Midwest premiere followed close behind that national visibility. In Wisdom Bridge terms, the choice matters because it points to a young director and company taking on a play built from fractured language, neurological shock, and theatrical subjectivity rather than conventional plot. The page remains careful about what survives locally, but the title itself helps explain the ambition of those early seasons.',
    venueAnchor: 'Wisdom Bridge Theatre',
    eraLabel: 'Wisdom Bridge years',
    images: [
      {
        src: wingsYaleRep1978Two,
        alt: 'Betty Peltzer, Constance Cummings, and Marianne Owen in the 1978 Yale Rep production of Wings.',
        caption:
          'Betty Peltzer, Constance Cummings, and Marianne Owen in Yale Rep\'s 1978 Wings, the original professional production that preceded Falls\'s Midwest premiere.',
        photographer: 'Yale Repertory Theatre',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: wingsYaleRep1978One,
        alt: 'Constance Cummings isolated in a dark stage image from Yale Rep\'s 1978 Wings.',
        caption:
          'Constance Cummings as Emily Stilson in Yale Rep\'s 1978 Wings. Included as original-production context for the play Falls staged in Chicago the following year.',
        photographer: 'Yale Repertory Theatre',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: wingsYaleRep1978Four,
        alt: 'Constance Cummings seated between nurse and doctor figures in Yale Rep\'s 1978 Wings.',
        caption:
          'A hospital-stage image from Yale Rep\'s 1978 Wings, showing the spare visual language around Emily\'s aphasia and recovery.',
        photographer: 'Yale Repertory Theatre',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: wingsYoungVic2017Aerial,
        alt: 'Juliet Stevenson suspended in flight in the 2017 Young Vic production of Wings.',
        caption:
          'Juliet Stevenson in the Young Vic\'s 2017 Wings revival. This later image is used only as context for the play\'s aviator and recovery imagery.',
        photographer: 'Johan Persson / The Guardian',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: wingsYoungVic2017Language,
        alt: 'Juliet Stevenson reaching forward in the 2017 Young Vic production of Wings.',
        caption:
          'A second Young Vic revival image, useful for showing how later productions visualized Kopit\'s language-and-perception drama.',
        photographer: 'Johan Persson / The Guardian',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Arthur Kopit' },
      { role: 'Director', name: 'Robert Falls' },
    ],
    quickFacts: [
      { label: 'Wisdom Bridge staging', value: '1979' },
      { label: 'Premiere status', value: 'Midwest premiere' },
      { label: 'Venue', value: 'Wisdom Bridge Theatre' },
      { label: 'Broadway context', value: '1979 Tony nominee for Best Play' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Arthur Kopit' },
      { role: 'Directed by', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'Midwest premiere',
        detail: 'The local timeline identifies Falls\'s Wisdom Bridge staging as the Midwest premiere of Arthur Kopit\'s play.',
      },
      {
        label: 'National play context',
        detail: 'Wings was a 1979 Tony nominee for Best Play and is widely listed among Kopit\'s Pulitzer-finalist works.',
      },
      {
        label: 'Early Wisdom Bridge ambition',
        detail: 'The title shows Falls programming formally challenging contemporary drama during the first phase of his Wisdom Bridge leadership.',
      },
    ],
    contextNotes: [
      {
        label: 'Image packet',
        text: 'No Wisdom Bridge-specific Wings still has surfaced in the current project files, so the gallery uses original Yale Rep production photos and later Young Vic revival images as clearly labeled play context.',
      },
      {
        label: 'Archive note',
        text: 'No local cast list, program scan, or Chicago review packet has surfaced in the current project files.',
      },
      {
        label: 'Source note',
        text: 'The page combines the local timeline fact of Falls\'s 1979 Midwest premiere with public context about Kopit\'s Yale Rep, Public Theater, Broadway, and later revival history.',
      },
    ],
    reviews: [
      {
        source: 'Yale Repertory Theatre',
        href: 'https://yalerep.org/productions/wings-4/',
        summary:
          'The Yale Rep archive confirms the March 3-25, 1978 production by Arthur Kopit, directed by John Madden, and supplies the three original-production photos used here as context.',
      },
      {
        source: 'The New York Times',
        href: 'https://www.nytimes.com/1978/03/08/archives/theater-wings-by-kopit-at-yale.html',
        summary:
          'Richard Eder reviewed Wings at Yale in March 1978, giving the page a contemporary critical source for the play before its New York transfer.',
      },
      {
        source: 'Lortel Archives',
        href: 'https://www.lortel.org/Archives/Production/1873',
        summary:
          'The Lortel listing documents the 1978 New York Shakespeare Festival/Public Theater run, between Yale Rep and Broadway.',
      },
      {
        source: 'Playbill Vault',
        href: 'https://www.playbill.com/production/wings-cort-theatre-vault-0000003524',
        summary:
          'The Playbill archive records the 1979 Broadway production, part of the national context around Falls\'s Midwest premiere.',
      },
      {
        source: 'The Guardian',
        href: 'https://www.theguardian.com/stage/2017/sep/21/wings-review-juliet-stevenson-stroke-recovery-young-vic-london',
        summary:
          'Michael Billington\'s 2017 review of the Young Vic revival helps explain the play\'s language, flight, and recovery themes for modern readers.',
      },
    ],
    externalSources: [
      { label: 'Yale Rep 1978 production archive', href: 'https://yalerep.org/productions/wings-4/' },
      { label: 'New York Times review: Wings at Yale', href: 'https://www.nytimes.com/1978/03/08/archives/theater-wings-by-kopit-at-yale.html' },
      { label: 'Lortel archive: 1978 Public Theater run', href: 'https://www.lortel.org/Archives/Production/1873' },
      { label: 'Playbill Broadway archive', href: 'https://www.playbill.com/production/wings-cort-theatre-vault-0000003524' },
      { label: 'Guardian review of 2017 Young Vic revival', href: 'https://www.theguardian.com/stage/2017/sep/21/wings-review-juliet-stevenson-stroke-recovery-young-vic-london' },
      { label: 'Broadway.com Arthur Kopit obituary', href: 'https://www.broadway.com/buzz/200596/three-time-tony-nominated-playwright-arthur-kopit-known-for-oh-dad-poor-dad-dies-at-83/' },
      { label: 'Wings play background', href: 'https://en.wikipedia.org/wiki/Wings_(play)' },
      { label: 'Arthur Kopit biography and Wings context', href: 'https://en.wikipedia.org/wiki/Arthur_Kopit' },
      { label: '1979 Tony Awards context', href: 'https://en.wikipedia.org/wiki/33rd_Tony_Awards' },
      { label: 'The Best Plays of 1978-1979', href: 'https://archive.org/details/bestplaysof19780000unse' },
      { label: 'Robert Falls Wisdom Bridge context', href: 'https://en.wikipedia.org/wiki/Robert_Falls' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
  yentl: {
    pageMode: 'archive',
    summary:
      'Falls directed the Midwest premiere of Yentl at Wisdom Bridge Theatre in 1980, bringing Leah Napolin and Isaac Bashevis Singer\'s stage adaptation of Singer\'s story into the intimate, risk-taking Chicago theatre that shaped his early reputation.',
    publicSummary:
      'Falls staged the Midwest premiere of Yentl at Wisdom Bridge Theatre in 1980, early in the theatre-building period that made him one of Chicago\'s defining young directors.',
    synopsis:
      'Yentl follows a young Jewish woman whose desire to study sacred texts is forbidden by the religious world around her. After her father dies, she cuts her hair, dresses as a man, and enters a yeshiva as Anshel, pursuing learning at the cost of secrecy, isolation, and emotional complication.',
    fallsContext:
      'The Wisdom Bridge Yentl sits at the start of Falls\'s Chicago institutional story: after taking over Wisdom Bridge in his early twenties, he built the company around ambitious revivals, adaptations, and plays that could carry moral pressure in close quarters.',
    significance:
      'A 1980 Midwest premiere at Wisdom Bridge Theatre, directed during the first phase of Falls\'s leadership there and connected to one of the decade\'s most visible stage-to-screen Jewish narratives.',
    story:
      'Yentl gives this early archive row more weight than the old one-line record suggested. The play arrived with a notable New York pedigree: the Napolin/Singer adaptation had moved from Chelsea Theater Center to Broadway in 1975, with Tovah Feldshuh earning major attention in the title role. Falls\'s 1980 staging brought that story to Wisdom Bridge before Barbra Streisand\'s 1983 film made Yentl a much broader cultural reference point. In the Falls chronology, the title matters because it shows him building a Chicago audience for spiritually and socially charged material before the Goodman years, staging a story about intellect, gender, religious law, and self-invention inside the small-theatre laboratory where his directorial identity was forming.',
    venueAnchor: 'Wisdom Bridge Theatre',
    eraLabel: 'Wisdom Bridge years',
    collaborators: [
      { role: 'Playwright', name: 'Leah Napolin' },
      { role: 'Source author / co-adapter', name: 'Isaac Bashevis Singer' },
      { role: 'Director', name: 'Robert Falls' },
    ],
    quickFacts: [
      { label: 'Wisdom Bridge staging', value: '1980' },
      { label: 'Premiere status', value: 'Midwest premiere' },
      { label: 'Source material', value: 'Yentl the Yeshiva Boy' },
      { label: 'Broadway origin', value: '1975, Eugene O\'Neill Theatre' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Leah Napolin and Isaac Bashevis Singer' },
      { role: 'Based on', name: 'Isaac Bashevis Singer\'s story "Yentl the Yeshiva Boy"' },
      { role: 'Directed by', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'Midwest premiere',
        detail: 'Falls\'s Wisdom Bridge staging is documented as the Midwest premiere of Kopit\'s play.',
      },
      {
        label: 'Pre-film cultural moment',
        detail: 'Falls staged the play three years before Barbra Streisand\'s film made Yentl a much wider public title.',
      },
    ],
    contextNotes: [
      {
        label: 'Archive note',
        text: 'No production stills, cast list, or local review packet has surfaced in the current project files, so this page avoids presenting unsourced Chicago-specific cast or design credits.',
      },
      {
        label: 'Source note',
        text: 'The page separates the documented Falls/Wisdom Bridge facts from broader public context about the Napolin/Singer play and its Broadway history.',
      },
    ],
    externalSources: [
      { label: 'Yentl play background', href: 'https://en.wikipedia.org/wiki/Yentl_(play)' },
      { label: 'Singer story text in Commentary', href: 'https://www.commentary.org/articles/isaac-singer/yentl-the-yeshiva-boy-a-story/' },
      { label: 'Eugene O\'Neill Theatre production history', href: 'https://en.wikipedia.org/wiki/Eugene_O%27Neill_Theatre' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
  'losing-it': {
    pageMode: 'archive',
    summary:
      'Losing It is a documented 1983 Wisdom Bridge Theatre production directed by Robert Falls, preserved here as part of the concentrated early-1980s run that built his reputation for contemporary work before the Goodman years.',
    publicSummary:
      'A 1983 Wisdom Bridge Theatre production from Falls\'s early Chicago leadership period, currently documented in the archive as a contemporary drama.',
    synopsis:
      'The current archive identifies Losing It as a contemporary drama but does not yet preserve a plot summary, playwright credit, cast list, or program packet. This page therefore treats the title as a documented production record rather than reconstructing a fuller story from unsupported details.',
    fallsContext:
      'By 1983, Falls was deep into his Wisdom Bridge tenure, moving between new work, American drama, European political theatre, and intimate chamber pieces. Losing It belongs to that dense middle stretch, bracketed in the archive by In the Belly of the Beast and the 1984 titles Terra Nova, Careless Love, and Life and Limb.',
    significance:
      'A sparse but useful marker of the Wisdom Bridge years: one more documented title in the early-1980s period when Falls was building the off-Loop profile that led to the Goodman.',
    story:
      'Losing It remains one of the archive\'s thin records, but even a thin record helps map the rhythm of Falls\'s Wisdom Bridge seasons. The page sits after the 1982 A Streetcar Named Desire and the 1983 In the Belly of the Beast entry, then just before Terra Nova, Careless Love, and Life and Limb. That placement matters: it shows Falls programming contemporary drama alongside adaptations, premieres, and high-pressure modern classics during the period when Wisdom Bridge was becoming a serious Chicago laboratory. Until a program, review, or production still surfaces, the most responsible way to populate the page is to make the documented facts legible, explain the source gap, and connect the title to the surrounding Wisdom Bridge arc.',
    venueAnchor: 'Wisdom Bridge Theatre',
    eraLabel: 'Wisdom Bridge years',
    images: [
      {
        src: fallsWisdomBridgeRehearsal,
        alt: 'Robert Falls in a black-and-white Wisdom Bridge-era rehearsal photograph.',
        caption: 'Robert Falls in rehearsal during the Wisdom Bridge years. No production-specific still is available for Losing It.',
        orientation: 'landscape',
        priority: true,
        kind: 'rehearsal',
      },
    ],
    collaborators: [{ role: 'Director', name: 'Robert Falls' }],
    quickFacts: [
      { label: 'Wisdom Bridge staging', value: '1983' },
      { label: 'Venue', value: 'Wisdom Bridge Theatre' },
      { label: 'Archive description', value: 'Contemporary drama' },
      { label: 'Source status', value: 'Documented title, sparse packet' },
    ],
    creativeTeam: [{ role: 'Directed by', name: 'Robert Falls' }],
    recognition: [
      {
        label: 'Wisdom Bridge record',
        detail: 'The title preserves another point in Falls\'s 1977-1985 Wisdom Bridge leadership chronology.',
      },
      {
        label: 'Contextual placement',
        detail: 'The production appears between major early-1980s Wisdom Bridge entries, including In the Belly of the Beast and Terra Nova.',
      },
    ],
    contextNotes: [
      {
        label: 'Archive note',
        text: 'The project currently contains no Losing It folder, program, local review, cast list, playwright credit, or production stills.',
      },
      {
        label: 'Image note',
        text: 'The rehearsal photograph is used as Wisdom Bridge-era context only; it is not presented as a Losing It production image.',
      },
    ],
    externalSources: [
      { label: 'Robert Falls biography and Wisdom Bridge context', href: 'https://en.wikipedia.org/wiki/Robert_Falls' },
      { label: 'Robert Falls on Wisdom Bridge and Goodman leadership', href: 'https://www.axios.com/local/chicago/2021/09/21/chicago-tony-award-winning-theater-icon-robert-falls-why-hes-stepping-down' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
  'terra-nova': {
    pageMode: 'archive',
    summary:
      'Falls directed Terra Nova at Wisdom Bridge Theatre in 1984, staging Ted Tally\'s literary-historical drama about Robert Falcon Scott, Roald Amundsen, Antarctic mythmaking, and the cost of heroic idealism.',
    publicSummary:
      'A 1984 Wisdom Bridge Theatre production of Ted Tally\'s Antarctic drama, preserved here as part of Falls\'s late Wisdom Bridge period.',
    synopsis:
      'Terra Nova dramatizes Captain Robert Falcon Scott\'s doomed 1911-1912 race to the South Pole, placing Scott\'s British code of honor against Roald Amundsen\'s colder pragmatism and against the private pull of Scott\'s marriage. The play moves through memory, hallucination, expedition history, and moral argument as Scott tries to write his final public account.',
    fallsContext:
      'The Wisdom Bridge Terra Nova came near the end of Falls\'s leadership there, after years of contemporary premieres, adaptations, Brecht, Durang, Fo, Tennessee Williams, and politically charged drama. It shows him working at a larger historical and psychological scale just before the 1985 Hamlet and his move into Goodman leadership.',
    significance:
      'A late Wisdom Bridge literary-historical drama that connects Falls\'s early Chicago laboratory to the kind of large-canvas moral and historical storytelling that would later define major Goodman work.',
    story:
      'Terra Nova helps the 1984 portion of the archive feel less like a list of stray titles and more like a final Wisdom Bridge argument about scale. Tally\'s play was already a notable contemporary work, with a Yale/O\'Neill development path and an Obie-winning reputation before its wider circulation. Falls\'s staging placed that material inside the small-theatre environment that had made his Chicago name, asking a young company to carry Antarctic vastness, national myth, marriage, rivalry, and death through theatrical compression. Because no production packet has surfaced locally, the page does not pretend to know cast or design details; its value is in making the documented title legible and connecting it to the surrounding arc from Losing It to Hamlet.',
    venueAnchor: 'Wisdom Bridge Theatre',
    eraLabel: 'Wisdom Bridge years',
    images: [
      {
        src: fallsWisdomBridgeRehearsal,
        alt: 'Robert Falls in a black-and-white Wisdom Bridge-era rehearsal photograph.',
        caption: 'Robert Falls in rehearsal during the Wisdom Bridge years. No production-specific still is available for Terra Nova.',
        orientation: 'landscape',
        priority: true,
        kind: 'rehearsal',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Ted Tally' },
      { role: 'Director', name: 'Robert Falls' },
    ],
    quickFacts: [
      { label: 'Wisdom Bridge staging', value: '1984' },
      { label: 'Venue', value: 'Wisdom Bridge Theatre' },
      { label: 'Playwright', value: 'Ted Tally' },
      { label: 'Historical subject', value: 'Scott\'s Terra Nova expedition' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Ted Tally' },
      { role: 'Directed by', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'Late Wisdom Bridge record',
        detail: 'The local timeline places Terra Nova in Falls\'s 1984 Wisdom Bridge season, near the end of his artistic-director tenure there.',
      },
      {
        label: 'Play context',
        detail: 'Ted Tally\'s Terra Nova is publicly documented as an Obie-winning play developed through Yale and the Eugene O\'Neill Theater Center.',
      },
      {
        label: 'Historical scale',
        detail: 'The play connects Falls\'s early archive to large-canvas historical drama, a mode that became central in later Goodman productions.',
      },
    ],
    contextNotes: [
      {
        label: 'Archive note',
        text: 'No Terra Nova-specific production stills, cast list, program scan, or local review packet has surfaced in the current project files.',
      },
      {
        label: 'Image note',
        text: 'The rehearsal photograph is used as Wisdom Bridge-era context only; it is not presented as a Terra Nova production image.',
      },
    ],
    externalSources: [
      { label: 'Ted Tally biography and Terra Nova context', href: 'https://en.wikipedia.org/wiki/Ted_Tally' },
      { label: 'New Yorker review context for Terra Nova', href: 'https://www.newyorker.com/magazine/1984/05/07/off-broadway' },
      { label: 'Terra Nova expedition background', href: 'https://en.wikipedia.org/wiki/Terra_Nova_Expedition' },
      { label: 'Robert Falcon Scott background', href: 'https://en.wikipedia.org/wiki/Robert_Falcon_Scott' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
  pravda: {
    pageMode: 'archive',
    summary:
      'Falls directed the American premiere of Howard Brenton and David Hare\'s Pravda at the Guthrie Theater in 1989, bringing the National Theatre hit about media power, appetite, and public truth into a major American resident-theatre setting.',
    publicSummary:
      'A 1989 Guthrie Theater staging of Brenton and Hare\'s press-satire Pravda, documented in the archive as the American premiere.',
    synopsis:
      'Pravda is a large-scale satire of the newspaper business, following the rise of Lambert Le Roux, a ruthless South African media baron whose appetite for ownership turns journalism into sport, ideology, and private empire. The play skewers the collision between editorial ideals and market power in the tabloid era.',
    fallsContext:
      'The Guthrie Pravda came just after Falls had begun his long Goodman leadership and just before The Iceman Cometh made his Goodman work nationally visible. It also shows him stepping outside Chicago in the early Goodman years to stage a politically charged British epic at one of the country\'s landmark regional theatres.',
    significance:
      'The archive identifies Falls\'s 1989 Guthrie production as the American premiere of Pravda, a Brenton/Hare satire that had been a major National Theatre success in London.',
    story:
      'Pravda gives the 1989 section of the archive a sharper national frame. Falls was already balancing Goodman institution-building with high-profile outside assignments, and the Guthrie offered a different kind of arena: a large resident stage with a history of ambitious classics and contemporary international work. Brenton and Hare\'s play, written in the heat of 1980s British media politics, let Falls handle a fast, crowded satire about ownership, ideology, and the manufacturing of public truth. In the production chronology, it sits beside The Misanthrope and The Speed of Darkness, showing how quickly his early Goodman period expanded from Chicago leadership into broader American premiere work.',
    venueAnchor: 'Guthrie Theater',
    eraLabel: 'Early Goodman years',
    images: [
      {
        src: robertFallsRehearsal,
        alt: 'Robert Falls seated at a rehearsal table in a later rehearsal photograph.',
        caption: 'Robert Falls in rehearsal at the Goodman Theatre. No production-specific still is available for Pravda.',
        orientation: 'landscape',
        priority: true,
        kind: 'rehearsal',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Howard Brenton' },
      { role: 'Playwright', name: 'David Hare' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Dramaturg', name: 'Mark Bly' },
    ],
    quickFacts: [
      { label: 'Guthrie staging', value: '1989' },
      { label: 'Premiere status', value: 'American premiere' },
      { label: 'Venue', value: 'Guthrie Theater' },
      { label: 'Original London premiere', value: 'National Theatre, 1985' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Howard Brenton and David Hare' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Dramaturgy', name: 'Mark Bly' },
    ],
    recognition: [
      {
        label: 'American premiere',
        detail: 'The local timeline and public dramaturgical credit records identify the Guthrie staging as the American premiere.',
      },
      {
        label: 'London context',
        detail: 'The original National Theatre production of Pravda won major 1985 best-play recognition in London.',
      },
      {
        label: 'Guthrie season',
        detail: 'Guthrie production history lists Pravda in the 1988-89 Vineland Place season.',
      },
    ],
    contextNotes: [
      {
        label: 'Archive note',
        text: 'No Pravda-specific production stills, cast list, program scan, or local review packet has surfaced in the current project files.',
      },
      {
        label: 'Image note',
        text: 'The rehearsal photograph is used as contextual Robert Falls imagery only; it is not presented as a Pravda production image.',
      },
      {
        label: 'Source note',
        text: 'The page separates the documented Guthrie/American-premiere facts from broader public context about the Brenton and Hare play.',
      },
    ],
    externalSources: [
      { label: 'Pravda play background', href: 'https://en.wikipedia.org/wiki/Pravda_(play)' },
      { label: 'Guthrie Theater production history', href: 'https://en.wikipedia.org/wiki/Guthrie_Theater_production_history' },
      { label: 'Mark Bly production credit listing', href: 'https://en.wikipedia.org/wiki/Mark_Bly' },
      { label: 'Guthrie Theater institutional history', href: 'https://www.guthrietheater.org/globalassets/pdf/guthrie_history.pdf' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
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
        alt: 'Two performers in period costume in a scene from Amadeus at Steppenwolf Theatre Company.',
        caption: 'Production still from Amadeus at Steppenwolf Theatre Company, 2025.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: amadeusRehearsalJoelMoorman,
        alt: 'Robert Falls directing in rehearsal for Amadeus at Steppenwolf Theatre Company.',
        caption: 'Amadeus rehearsal at Steppenwolf Theatre Company, 2025. Photo: Joel Moorman.',
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
      "Holiday returned Falls to the Goodman as a director after stepping down as artistic director, making the production read as both a sparkling repertory comedy and an institutional homecoming.",
    publicSummary:
      "Falls directed Richard Greenberg's contemporary adaptation of Philip Barry's Holiday at Goodman's Albert Theatre in 2026, a Centennial Season return built around privilege, romance, work, and choosing a life.",
    synopsis:
      "In Richard Greenberg's adaptation of Philip Barry's 1920s comedy, Johnny Case enters the wealthy world of the Upper East Side Setons as a romantic prospect from outside their class circle. His arrival unsettles a family system built around money, status, marriage, and duty, while the question underneath the champagne comedy keeps sharpening: should a person work to live, or live to work?",
    fallsContext:
      "Holiday is significant because it brings Falls back into the Goodman building in a changed role. He is no longer the artistic director shaping the institution's whole slate; he returns as a guest artist inside Susan V. Booth's Centennial Season, directing a late Richard Greenberg adaptation that uses classic high-comedy structure to ask contemporary questions about privilege, freedom, grief, and self-definition.",
    significance:
      "The first Goodman production Falls directed after leaving the artistic directorship, staged in the Albert Theatre during the company's Centennial Season and extended by popular demand through March 8, 2026.",
    story:
      "The 2026 staging places a familiar Robert Falls signature back inside the Goodman building without the administrative frame that defined his earlier decades there. Susan V. Booth's welcome note says Holiday emerged from conversations with Falls about what work felt alive to him, and that Greenberg's adaptation clearly carried joy for both artists. That context gives the page more than comeback value: it becomes a record of Falls returning to a longtime artistic home through buoyancy rather than burden, and of one of Greenberg's final theatre chapters arriving in the hands of a collaborator who knew his wit, bite, and humanity.",
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Post-Goodman transition years',
    images: [
      {
        src: holidayGoodmanThumb,
        alt: 'Promotional key art for Holiday at Goodman Theatre, Centennial Season 2026.',
        caption: 'Goodman Theatre production art for Holiday, 2026.',
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
        caption: "Rehearsal-room image from Falls's Goodman return.",
        orientation: 'landscape',
        kind: 'rehearsal',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Philip Barry' },
      { role: 'Adapter', name: 'Richard Greenberg' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Jessie Fisher' },
      { role: 'Cast highlight', name: 'Erik Hellman' },
      { role: 'Cast highlight', name: 'Luigi Sottile' },
      { role: 'Cast highlight', name: 'Molly Griggs' },
      { role: 'Cast highlight', name: 'Bryce Gangel' },
      { role: 'Cast highlight', name: 'Wesley Taylor' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Jan 31 - Mar 8, 2026' },
      { label: 'Venue', value: "Goodman's Albert Theatre" },
      { label: 'Runtime', value: 'Approx. 2 hr 15 min, incl. intermission' },
      { label: 'Season', value: 'Centennial Season' },
      { label: 'Source', value: 'Philip Barry, adapted by Richard Greenberg' },
      { label: 'Milestone', value: 'Falls Goodman directing return' },
      { label: 'Advisory', value: 'Recommended for ages 13+' },
    ],
    cast: [
      { role: 'Susan Feld', name: 'Jessie Fisher' },
      { role: 'Nikka Washburn', name: 'Christiana Clark' },
      { role: 'Laura Cram', name: 'Alejandra Escalante' },
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
      { role: 'Set Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Kaye Voyce' },
      { role: 'Lighting Design', name: 'Amith Chandrashaker' },
      { role: 'Original Music and Sound Design', name: 'Richard Woodbury' },
      { role: 'Casting Director', name: 'Lauren Port' },
      { role: 'Line Producer', name: 'Malkia Stampley' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Assistant Director', name: 'Hannah Todd' },
      { role: 'Intimacy', name: 'Toranika Washington' },
      { role: 'Production Stage Manager', name: 'Nikki Blue' },
      { role: 'Stage Manager', name: 'Krista Kanderski' },
      { role: 'Photography', name: 'Todd Rosenberg' },
    ],
    recognition: [
      {
        label: 'Goodman return',
        detail: 'The production is Falls\'s first Goodman directing credit after stepping down as Artistic Director, shifting him from institutional leader back into the rehearsal room as a guest artist.',
      },
      {
        label: 'Centennial season',
        detail: 'Programmed during the Goodman Theatre Centennial Season, Holiday became both a repertory comedy and a marker of continuity between Falls\'s tenure and Susan V. Booth\'s leadership.',
      },
      {
        label: 'Extended run',
        detail: 'Goodman extended the production by popular demand through March 8, 2026, moving the page beyond a planned engagement into a documented audience-response success.',
      },
      {
        label: 'Late Greenberg chapter',
        detail: 'The adaptation stands among Richard Greenberg\'s final theatre works, giving the staging added weight as a collaboration between Falls and a major American playwright near the end of Greenberg\'s career.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Classic comedy, contemporary pressure',
        detail: 'The production uses Barry\'s high-society comedy as a live argument about class, work, money, marriage, and choosing a life outside inherited expectations.',
      },
      {
        label: 'Albert Theatre scale',
        detail: 'Unlike the small-room chamber returns elsewhere in the archive, Holiday puts Falls back in the Goodman\'s larger Albert Theatre with a large ensemble, design-forward visual world, and broad comic timing.',
      },
      {
        label: 'Collaborative handoff',
        detail: 'Susan V. Booth\'s welcome note frames the production as a choice sparked by conversations with Falls, making it a useful record of post-tenure artistic trust rather than a purely nostalgic return.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'Goodman bills Holiday as a sparkling contemporary adaptation of Philip Barry\'s classic play, adapted by Tony winner Richard Greenberg and directed by Robert Falls in the Albert Theatre.',
      },
      {
        label: 'Run extension',
        text: 'The official production page records the run as January 31-March 8, 2026 after an extension by popular demand; earlier local data listed the shorter March 1 closing date.',
      },
      {
        label: 'Visual approach',
        text: 'The page opens on Todd Rosenberg production stills, with official key art and rehearsal images retained as supporting visuals so the page reads as a staged production rather than only a show announcement.',
      },
      {
        label: 'Photo source',
        text: 'Production images are sourced from the official Goodman Theatre production page for the 2026 staging.',
      },
      {
        label: 'Content advisory',
        text: 'Goodman recommended Holiday for ages 13+ and noted themes of grief, loss, and addiction with mature language.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre critical praise',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman collects praise from The Wall Street Journal, Daily Herald, BroadwayWorld, WGN Radio, and Chicago Tribune for the production, including notices for Greenberg\'s adaptation, Falls\'s staging, and the ensemble.',
      },
      {
        source: 'Chicago Tribune',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman excerpts the Tribune calling Holiday a four-star comedy that sparkles with sardonic wit and disarming tenderness.',
      },
      {
        source: 'Wall Street Journal',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman cites The Wall Street Journal on Greenberg\'s adaptation and Falls\'s sprightly, incisive staging.',
      },
      {
        source: 'WGNRadio.com',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman quotes WGNRadio.com calling Holiday a four-star joyful surprise of the theatre season.',
      },
      {
        source: 'BroadwayWorld',
        href: 'https://www.goodmantheatre.org/show/holiday/',
        summary:
          'Goodman includes BroadwayWorld praise for the production as a superbly acted romantic comedy.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/holiday/' },
      { label: 'Susan V. Booth welcomes Holiday', href: 'https://www.goodmantheatre.org/susan-v-booth-welcomes-you-to-holiday/' },
      { label: 'The Real Life Lovebirds of Holiday', href: 'https://www.goodmantheatre.org/the-real-life-lovebirds-of-holiday/' },
      { label: 'Holiday play background', href: 'https://en.wikipedia.org/wiki/Holiday_(play)' },
      { label: 'Richard Greenberg background', href: 'https://en.wikipedia.org/wiki/Richard_Greenberg' },
    ],
    watchLinks: [
      {
        label: 'Robert Falls Interview',
        href: 'https://www.youtube.com/watch?v=pfuy6No57bI',
        description: 'Goodman video feature on Falls and the contemporary revival of Holiday.',
        thumbnail: holidayGoodman,
      },
      {
        label: 'Holiday Rehearsal Montage',
        href: 'https://www.youtube.com/watch?v=S9ehrIXcW2s',
        description: 'Goodman rehearsal-room montage for the 2026 staging.',
        thumbnail: holidayRehearsal1,
      },
      {
        label: 'Holiday Scene 3',
        href: 'https://www.youtube.com/watch?v=VndF5ULRXFo',
        description: 'Goodman scene clip from the extended run.',
        thumbnail: holidayProduction2,
      },
      {
        label: 'Molly Griggs and Luigi Sottile Interview',
        href: 'https://www.youtube.com/watch?v=-JxSEyxOshU',
        description: 'Goodman cast interview with Julia Seton and Johnny Case.',
        thumbnail: holidayProduction7,
      },
    ],
    pressQuotes: [
      {
        quote: 'Richard Greenberg has left the theater with a lovely addition to his legacy with his splendid adaptation.',
        source: 'The Wall Street Journal, quoted by Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/holiday/',
      },
      {
        quote: 'Highly entertaining... Greenberg\'s comedy has real bite.',
        source: 'Daily Herald, quoted by Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/holiday/',
      },
      {
        quote: 'Superbly acted romantic comedy.',
        source: 'BroadwayWorld, quoted by Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/holiday/',
      },
      {
        quote: 'Holiday is the joyful surprise of the theatre season.',
        source: 'WGNRadio.com, quoted by Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/holiday/',
      },
      {
        quote: 'Sparkles with sardonic wit, as well as disarming tenderness.',
        source: 'Chicago Tribune, quoted by Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/holiday/',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
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
        alt: 'Promotional key art for Swing State at Goodman Theatre, 2022.',
        caption: 'Goodman Theatre production art for Swing State, 2022.',
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
        alt: 'Promotional key art for The Sound Inside at Goodman Theatre.',
        caption: 'Goodman Theatre production art for The Sound Inside.',
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
      'Don Giovanni is the longest-running production in Falls\'s career: a 2014 Lyric Opera world staging that has now been revived twice at Lyric and remounted at Dallas Opera, with a third Lyric outing opening the company\'s 2026/27 season.',
    publicSummary:
      'Falls turns Mozart\'s famous seducer into a dark, lavish morality tale, a staging Lyric Opera of Chicago has now mounted three times across more than a decade.',
    synopsis:
      'A charismatic, unrepentant seducer\'s campaign of conquest catches up with him when the man he kills in the opening scene returns as a stone statue to drag him down to hell. Mozart and librettist Lorenzo Da Ponte mix sharp comedy, sexual danger, and supernatural reckoning across one of opera\'s most enduring "morality tales for the ages."',
    fallsContext:
      'Don Giovanni is unusual in the archive for its sheer longevity: rather than a single engagement, it is a design and staging concept Falls has now seen through four distinct outings - the 2014 Lyric premiere, a 2018 Dallas Opera remount, a 2019 Lyric revival, and a third Lyric revival opening the 2026/27 season - making it arguably the most durable single production of his career.',
    significance:
      'A 2014 Lyric Opera of Chicago world staging that drew strong reviews for its "carnal, noirish" visual world and Ana Kuzmanic\'s costume design, then proved durable enough to travel to Dallas Opera in 2018, return to Lyric in 2019, and return again for a third Lyric outing opening October 10, 2026 - by far the longest production lifespan in Falls\'s catalogue.',
    story:
      'Most productions in this archive have a beginning, middle, and end. Don Giovanni keeps coming back. Falls\'s original 2014 Lyric staging, designed with Walt Spangler and Ana Kuzmanic, premiered with Mariusz Kwiecień in the title role and drew praise for being "carnal" and "noirish," a sharp departure from genteel opera-house tradition. Dallas Opera imported the production whole in 2018, with much of the same Lyric cast and design team. Lyric revived it again in 2019 with Lucas Meachem as Don Giovanni under a new musical hand, James Gaffigan, and the production was strong enough that Lyric is bringing it back a third time for the 2026/27 season - more than a decade after its premiere - with Christian Van Horn and Kyle Ketelsen sharing the title role under conductor Enrique Mazzola. Few entries in this archive demonstrate as clearly how a Falls production can outlive its premiere cast, venue, and even decade.',
    venueAnchor: 'Lyric Opera of Chicago',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: donGiovanni1,
        alt: 'Don Giovanni, Leporello, and Donna Elvira in a tense confrontation on the Lyric Opera stage.',
        caption: 'Mariusz Kwiecień (Don Giovanni), Kyle Ketelsen (Leporello), and Ana María Martínez (Donna Elvira) in the 2014 world staging. Photo: Todd Rosenberg.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: donGiovanni3,
        alt: 'Masetto, Zerlina, Leporello, and Don Ottavio in an ensemble scene from Don Giovanni.',
        caption: 'Michael Sumuel (Masetto), Andriana Chuchman (Zerlina), Kyle Ketelsen (Leporello), and Antonio Poli (Don Ottavio) at the Lyric premiere. Photo: Todd Rosenberg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: donGiovanni2,
        alt: 'Don Ottavio and Donna Anna in a dramatic confrontation on the Lyric Opera stage.',
        caption: 'Antonio Poli (Don Ottavio) and Marina Rebeka (Donna Anna) in the 2014 world staging. Photo: Todd Rosenberg.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: donGiovanni4,
        alt: 'Don Giovanni confronts the stone statue of the Commendatore in the opera\'s climactic scene.',
        caption: 'Mariusz Kwiecień (Don Giovanni) faces Andrea Silvestrelli\'s Commendatore in the opera\'s supernatural climax. Photo: Todd Rosenberg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: donGiovanni5,
        alt: 'The Commendatore, Don Giovanni, and Leporello together onstage in Don Giovanni.',
        caption: 'Andrea Silvestrelli, Mariusz Kwiecień, and Kyle Ketelsen at the Lyric premiere. Photo: Todd Rosenberg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: donGiovanni6,
        alt: 'Donna Elvira, Don Ottavio, and Donna Anna stand together in Don Giovanni at Lyric Opera.',
        caption: 'Ana María Martínez (Donna Elvira), Antonio Poli (Don Ottavio), and Marina Rebeka (Donna Anna) at the Lyric premiere. Photo: Todd Rosenberg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: donGiovanni7,
        alt: 'Masetto brandishes a knife while Zerlina, Leporello, and Don Ottavio react in Don Giovanni.',
        caption: 'Michael Sumuel, Andriana Chuchman, Kyle Ketelsen, and Antonio Poli in one of the staging\'s sharpest ensemble confrontations. Photo: Todd Rosenberg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: donGiovanni8,
        alt: 'Donna Anna stands over a seated Don Ottavio against a towering wall of black roses in Don Giovanni.',
        caption: 'Marina Rebeka and Antonio Poli framed by one of the production\'s most stylized noir images. Photo: Todd Rosenberg.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: donGiovanniFinalCostume,
        alt: 'Don Giovanni final costume from Ana Kuzmanic design feature.',
        caption: 'Don Giovanni\'s finished costume, from Lyric\'s feature on Ana Kuzmanic\'s design process. Photo: Kyle Flubacker via Lyric Opera of Chicago.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: donGiovanniDonnaElvira,
        alt: 'Donna Elvira masquerade costume from Don Giovanni at Lyric Opera of Chicago.',
        caption: 'Donna Elvira\'s masquerade costume, from the same Ana Kuzmanic design feature. Photo: Kyle Flubacker via Lyric Opera of Chicago.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: donGiovanni2019Revival,
        alt: 'Lucas Meachem as Don Giovanni in the 2019 Lyric Opera revival.',
        caption: 'Lucas Meachem in the title role during the 2019 Lyric revival. Photo: Kyle Flubacker via Lyric Opera of Chicago.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Composer', name: 'Wolfgang Amadeus Mozart' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Mariusz Kwiecień' },
      { role: 'Cast highlight', name: 'Ana María Martínez' },
      { role: 'Costume Designer', name: 'Ana Kuzmanic' },
    ],
    quickFacts: [
      { label: 'World premiere', value: 'Sep 27, 2014, Lyric Opera of Chicago' },
      { label: 'Dallas remount', value: '2018, Dallas Opera' },
      { label: 'First Lyric revival', value: 'Nov 14 - Dec 8, 2019' },
      { label: 'Second Lyric revival', value: 'Opens Oct 10, 2026' },
    ],
    cast: [
      { role: 'Don Giovanni', name: 'Mariusz Kwiecień' },
      { role: 'Donna Anna', name: 'Marina Rebeka' },
      { role: 'Don Ottavio', name: 'Antonio Poli' },
      { role: 'Donna Elvira', name: 'Ana María Martínez' },
      { role: 'Leporello', name: 'Kyle Ketelsen' },
      { role: 'Zerlina', name: 'Andriana Chuchman' },
      { role: 'Masetto', name: 'Michael Sumuel' },
      { role: 'Commendatore', name: 'Andrea Silvestrelli' },
    ],
    creativeTeam: [
      { role: 'Composer', name: 'Wolfgang Amadeus Mozart' },
      { role: 'Librettist', name: 'Lorenzo Da Ponte' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Conductor (2014)', name: 'Sir Andrew Davis' },
      { role: 'Set Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Duane Schuler' },
      { role: 'Chorus Master (2014)', name: 'Michael Black' },
    ],
    recognition: [
      {
        label: 'Three-time Lyric production',
        detail: 'Lyric has now staged Falls\'s 2014 production three times - 2014, 2019, and 2026/27 - making it one of the company\'s most-revived stagings of the Falls era.',
      },
      {
        label: 'Cross-company remount',
        detail: 'Dallas Opera brought in the Lyric production whole in 2018, crediting Falls as director and retaining much of the original design team.',
      },
      {
        label: '"Carnal, noirish" reception',
        detail: 'Seen and Heard International\'s review of the 2014 premiere described Falls\'s take as "carnal" and "noirish," a description that stuck to the production through later coverage.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Longest-running Falls staging',
        detail: 'No other production in this archive has been remounted as many times, across as many companies, or across as long a span - 2014 to a confirmed 2026/27 revival - as this Don Giovanni.',
      },
      {
        label: 'A recurring cast member across revivals',
        detail: 'Kyle Ketelsen sang Leporello in the 2014 premiere and returns to share the title role itself in the 2026/27 revival, a rare through-line across more than a decade of the same staging.',
      },
    ],
    contextNotes: [
      {
        label: 'Multiple stagings, one cast list',
        text: 'The cast and creative team listed here reflects the 2014 Lyric premiere. The 2018 Dallas Opera cast (Kwiecień, Laura Claycomb, David Portillo, Katie Van Kooten, Kyle Ketelsen, Virginie Verrez, Craig Verm, and Morris Robinson, conducted by Emmanuel Villaume), the 2019 Lyric revival cast (Lucas Meachem alternating with Davide Luciano as Don Giovanni, Rachel Willis-Sorensen, Amanda Majeski, Ying Fang, Matthew Rose, Ben Bliss, Brandon Cedel, and Mika Kares, conducted by James Gaffigan), and the 2026/27 Lyric revival cast (Christian Van Horn alternating with Kyle Ketelsen as Don Giovanni, Lawrence Brownlee, Mané Galoyan, Nina Solodovnikova, and Tommaso Barea, conducted by Enrique Mazzola) are documented in the reviews and recognition sections instead.',
      },
      {
        label: 'Source dating correction',
        text: 'Earlier site data had incorrectly dated the Dallas Opera remount to 2020; Dallas Opera\'s own archive confirms the run was April 13-29, 2018, two years before the 2020 site error and before, not after, the 2019 Lyric revival.',
      },
      {
        label: 'Source package',
        text: 'The folder includes large-format Todd Rosenberg production photography from the 2014 world premiere, a 2019 revival photo of Lucas Meachem, both Lyric and Dallas program materials, and a full cast-and-creative screenshot for the upcoming 2026/27 revival.',
      },
    ],
    reviews: [
      {
        source: 'Lyric Opera of Chicago',
        href: 'https://www.lyricopera.org/shows/upcoming/2026-27/don-giovanni/',
        summary: 'Lyric\'s current page presents Falls\'s staging as an "instant-classic," "expansive and hard-hitting" take on Mozart\'s morality tale, framing the 2026/27 run around bass-baritone Christian Van Horn.',
        note: 'Official production page (2026/27 revival)',
      },
      {
        source: 'Seen and Heard International',
        href: 'https://seenandheard-international.com/2014/10/robert-falls-carnal-noirish-don-giovanni/',
        summary: 'A detailed review of the 2014 world premiere, titled "Robert Falls\' Carnal, Noirish Don Giovanni," that lists the full original cast and creative team.',
        note: '2014 world premiere review',
      },
      {
        source: 'Chicago Classical Review',
        href: 'https://chicagoclassicalreview.com/2019/11/first-class-cast-stylish-staging-make-a-don-giovanni-to-die-for-in-lyric-operas-2026-27-season/',
        summary: 'A review of the 2019 Lyric revival praising the cast and Falls\'s "stylish staging."',
        note: '2019 revival review',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2019/11/15/20966948/don-giovanni-review-lyric-opera-chicago-robert-falls-lucas-meachem',
        summary: 'Praised Falls\'s straightforward approach, free of "dramatic gimmicks," and singled out Lucas Meachem\'s "rakish" title performance and Ying Fang\'s Zerlina as "the revelation" of the cast.',
        note: '2019 revival review',
      },
      {
        source: 'WTTW News',
        href: 'https://news.wttw.com/2019/11/15/stunning-don-giovanni-surprisingly-ideal-fit-metoo-era',
        summary: 'Called the 2019 revival "stunning" and argued the centuries-old opera fit "surprisingly" well into a #MeToo-era reading of its sexual politics.',
        note: '2019 revival feature',
      },
      {
        source: 'Chicago Classical Review',
        href: 'https://chicagoclassicalreview.com/2026/04/don-giovanni-susannah-herodiade-on-tap-in-lyric-operas-2026-27-season/',
        summary: 'Season-announcement coverage confirming the 2026/27 run is "the third time around" for Falls\'s 2014 production, with Christian Van Horn and Kyle Ketelsen sharing the title role.',
        note: '2026/27 season announcement',
      },
      {
        source: 'Dallas Opera',
        href: 'https://dallasopera.org/performance/don-giovanni/',
        summary: 'Dallas Opera\'s archive page confirms the April 2018 run was "brought in from" Lyric Opera of Chicago, with Falls credited as director and most of the original Lyric design team retained.',
        note: '2018 Dallas remount',
      },
    ],
    externalSources: [
      { label: 'Lyric Opera production page (2026/27)', href: 'https://www.lyricopera.org/shows/upcoming/2026-27/don-giovanni/' },
      { label: 'Lyric design feature on Ana Kuzmanic', href: 'https://www.lyricopera.org/donor-serenade/donor-serenade-fall-2019/Ana-Kuzmanic-Don-Giovanni/' },
      { label: 'Dallas Opera archive page', href: 'https://dallasopera.org/performance/don-giovanni/' },
      { label: 'Seen and Heard International review (2014)', href: 'https://seenandheard-international.com/2014/10/robert-falls-carnal-noirish-don-giovanni/' },
      { label: 'Chicago Sun-Times review (2019)', href: 'https://chicago.suntimes.com/2019/11/15/20966948/don-giovanni-review-lyric-opera-chicago-robert-falls-lucas-meachem' },
      { label: 'WTTW News feature (2019)', href: 'https://news.wttw.com/2019/11/15/stunning-don-giovanni-surprisingly-ideal-fit-metoo-era' },
      { label: 'Chicago Classical Review on the 2026/27 season', href: 'https://chicagoclassicalreview.com/2026/04/don-giovanni-susannah-herodiade-on-tap-in-lyric-operas-2026-27-season/' },
      { label: 'Newcity review (2014)', href: 'https://www.newcitystage.com/2014/09/30/review-don-giovannilyric-opera/' },
      { label: 'Stage and Cinema review (2019)', href: 'https://stageandcinema.com/2019/11/17/don-giovanni-lyric/' },
    ],
    watchLinks: [
      {
        label: 'Director Robert Falls discusses Don Giovanni',
        href: 'https://www.youtube.com/watch?v=dC0hjCMoLOQ',
        description: 'Falls discusses staging the 2019 Lyric revival.',
        thumbnail: donGiovanni2019Revival,
      },
      {
        label: 'Director Bob Falls on Don Giovanni',
        href: 'https://www.youtube.com/watch?v=kUQ4qeRVMS4&t=1s',
        description: 'Falls discusses the 2014 world premiere ahead of its Lyric opening.',
        thumbnail: donGiovanni1,
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
        alt: 'Promotional key art for The Cherry Orchard at Goodman Theatre, 2023.',
        caption: 'Goodman Theatre production art for The Cherry Orchard, 2023.',
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
    /*
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
    */
    summary:
      'Death of a Salesman is one of the central transfer stories in the archive: built at the Goodman in 1998, carried to Broadway for the play\'s fiftieth anniversary in 1999, and tied directly to Robert Falls\'s breakthrough Tony win as a director.',
    publicSummary:
      'Falls and Brian Dennehy turned Miller\'s tragedy into a defining Goodman-to-Broadway event, then carried it into a filmed version and a later London run.',
    synopsis:
      'Willy Loman returns home exhausted, unable to separate his memories, fantasies, and self-mythology from the brutal facts of his failing career and fractured family. As Biff and Happy circle him, and Linda tries to hold the house together, the American dream collapses into blame, longing, and self-destruction.',
    fallsContext:
      'This is one of the productions that most cleanly explains Falls\'s whole public arc. The timeline already ties his childhood imagination to Lee J. Cobb\'s Willy Loman on television; four decades later, Falls directs his own Broadway Salesman with Brian Dennehy and wins the Tony Award. That makes this page more than a standard revival entry. It is a career-defining return to an early obsession.',
    significance:
      'A defining Brian Dennehy collaboration and the production that brought Falls the Tony Award for Best Direction of a Play, while also winning Best Revival and fixing the Goodman-to-Broadway pipeline in the public imagination.',
    story:
      'The documented arc moves with unusual clarity: Goodman Theatre in 1998, Broadway at the Eugene O\'Neill Theatre beginning February 10, 1999, a filmed adaptation released on January 9, 2000, and a London remount in 2005. Few titles show the full Falls machine this cleanly. The Chicago production becomes a major Broadway revival; the revival wins four Tony Awards, including Falls\'s; the central Dennehy-Franz performances become definitive enough to be preserved on film; and the production remains strong enough to travel again to the West End. Even with a sparse image packet, the production reads as one of the archive\'s anchor titles because the achievement is so legible: this is where Falls\'s Chicago authority, actor partnership, and Broadway legitimacy lock together.',
    venueAnchor: 'Goodman Theatre, Broadway, and London',
    images: [
      {
        src: deathOfASalesmanPlaybillFull,
        alt: 'Brian Dennehy and Elizabeth Franz in Death of a Salesman.',
        caption: 'Brian Dennehy and Elizabeth Franz in Death of a Salesman.',
        photographer: 'Eric Y. Exit / Playbill',
        orientation: 'portrait',
        priority: true,
        kind: 'production-still',
      },
      {
        src: deathOfASalesmanGoodmanWilly,
        alt: 'Brian Dennehy as Willy Loman in the Goodman Theatre production of Death of a Salesman.',
        caption:
          'Brian Dennehy as Willy Loman in the 1998 Goodman Theatre production directed by Robert Falls.',
        photographer: 'Liz Lauren / Chicago Sun-Times',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: deathOfASalesmanDennehyFranz,
        alt: 'Brian Dennehy and Elizabeth Franz embrace as Willy and Linda Loman in Death of a Salesman.',
        caption:
          'Dennehy and Elizabeth Franz in the 1999 Robert Falls revival, where Franz redefined Linda Loman as fiercely protective.',
        photographer: 'Joan Marcus / TheaterMania',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: deathOfASalesmanPlaybillCover,
        alt: 'Playbill cover for the 1999 Broadway revival of Death of a Salesman at the Eugene O\'Neill Theatre.',
        caption: 'The 1999 Broadway Playbill — Eugene O\'Neill Theatre run.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: deathOfASalesmanDvdCover,
        alt: 'DVD cover for the 2000 filmed version of Death of a Salesman starring Brian Dennehy as Willy Loman.',
        caption:
          'The 2000 filmed adaptation preserved the Dennehy-Franz performances from the Falls production chain.',
        orientation: 'portrait',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Arthur Miller' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Brian Dennehy' },
      { role: 'Cast highlight', name: 'Elizabeth Franz' },
      { role: 'Cast highlight', name: 'Kevin Anderson' },
      { role: 'Music', name: 'Richard Woodbury' },
    ],
    quickFacts: [
      { label: 'Goodman debut', value: '1998' },
      { label: 'Broadway opening', value: 'Feb 10, 1999' },
      { label: 'Broadway venue', value: 'Eugene O\'Neill Theatre' },
      { label: 'Afterlife', value: 'Showtime film in 2000 and London remount in 2005' },
    ],
    cast: [
      { role: 'Willy Loman', name: 'Brian Dennehy' },
      { role: 'Linda Loman', name: 'Elizabeth Franz' },
      { role: 'Biff Loman', name: 'Kevin Anderson' },
      { role: 'Happy Loman', name: 'Ted Koch' },
      { role: 'Charley', name: 'Howard Witt' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Arthur Miller' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Original Music', name: 'Richard Woodbury' },
    ],
    recognition: [
      {
        label: 'Tony sweep',
        detail: 'The 1999 Broadway revival won four Tony Awards: Best Revival of a Play, Best Actor in a Play for Brian Dennehy, Best Featured Actress in a Play for Elizabeth Franz, and Best Direction of a Play for Robert Falls.',
      },
      {
        label: 'Transfer story',
        detail: 'The 1998 Goodman production became the basis for the 1999 Broadway revival at the Eugene O\'Neill Theatre, where it ran 274 performances.',
      },
      {
        label: 'Filmed afterlife',
        detail: 'The Broadway staging was preserved in a 2000 television adaptation with Dennehy and Franz repeating their roles; Dennehy later won a Golden Globe for that screen version.',
      },
      {
        label: 'London continuation',
        detail: 'The production continued to the Lyric Theatre in London in 2005, where Dennehy\'s Willy Loman performance also earned Olivier recognition.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'A cornerstone Falls transfer',
        detail: 'This is one of the clearest examples of the Goodman functioning as a launch site for a Broadway revival that kept its artistic identity intact rather than being rebuilt from scratch in New York.',
      },
      {
        label: 'The Dennehy partnership at full force',
        detail: 'Falls had other major collaborations with Brian Dennehy, but Salesman is the one where that partnership became inseparable from awards history and public memory.',
      },
      {
        label: 'Career myth meeting career fact',
        detail: 'The timeline\'s note that Falls was marked early by Lee J. Cobb\'s Willy Loman gives this production a rare autobiographical echo inside the broader archive.',
      },
    ],
    contextNotes: [
      {
        label: 'Revival context',
        text: 'The Broadway run lands at the play\'s fiftieth-anniversary moment, which helps explain why this revival reads less like repertory maintenance and more like a major cultural event.',
      },
      {
        label: 'Afterlife',
        text: 'Timeline and production notes together trace a rare full chain: Goodman in 1998, Broadway in 1999, filmed adaptation in 2000, then a London remount in 2005.',
      },
      {
        label: 'Photo source',
        text: 'The image packet now combines Playbill material, a Goodman Theatre still published by the Chicago Sun-Times, TheaterMania\'s Joan Marcus image of Dennehy and Franz, and documentary cover art from the 2000 filmed version.',
      },
      {
        label: 'Archive note',
        text: 'The gallery distinguishes production stills from documentary art so the page can carry at least five visual assets without blurring the Goodman, Broadway, and filmed-version record.',
      },
    ],
    reviews: [
      {
        source: 'The New Yorker',
        href: 'https://www.newyorker.com/magazine/1999/01/25/making-willy-loman',
        summary:
          'John Lahr situates the Falls/Dennehy revival inside the play\'s fiftieth-anniversary return, treating the Broadway transfer as a major new encounter with Miller rather than a dutiful classic revival.',
        note: 'Feature on the revival moment',
      },
      {
        source: 'The New Yorker',
        href: 'https://www.newyorker.com/magazine/1999/03/15/leading-ladies-3',
        summary:
          'A profile of Elizabeth Franz during the Broadway run underscores how central Linda Loman was to the revival\'s emotional architecture, not just Dennehy\'s star turn.',
        note: 'Elizabeth Franz profile during the run',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2020/4/16/21224072/brian-dennehy-dead-chicago-goodman-theatre-iceman-cometh-robert-falls-eugene-oneill-death-salesman',
        summary:
          'Neil Steinberg\'s Dennehy remembrance confirms the 1998 Goodman staging, the Broadway transfer, the 450-performance Dennehy run, and the Falls-Dennehy collaboration.',
        note: 'Includes Liz Lauren Goodman production photo',
      },
      {
        source: 'TheaterMania',
        href: 'https://www.theatermania.com/news/elizabeth-franz-who-redefined-linda-loman-in-death-of-a-salesman-dies-at-84_1812248/',
        summary:
          'David Gordon\'s Elizabeth Franz obituary focuses on her Tony-winning Linda Loman opposite Dennehy in the 1999 Robert Falls revival.',
        note: 'Includes Joan Marcus Dennehy-Franz image',
      },
      {
        source: 'Tony Awards',
        href: 'https://www.tonyawards.com/winners/year/1999/category/any/show/any/',
        summary:
          'The official 1999 winners page verifies the production\'s wins for Brian Dennehy, Elizabeth Franz, Robert Falls, and Best Revival of a Play.',
        note: 'Official awards record',
      },
      {
        source: 'Archive timeline and credits',
        summary:
          'Internal source records consistently treat the production as a Goodman-built revival that became a Tony-winning Broadway transfer and later London remount.',
        note: 'Internal archive record',
      },
    ],
    externalSources: [
      { label: 'The New Yorker: Arthur Miller and the Making of Willy Loman', href: 'https://www.newyorker.com/magazine/1999/01/25/making-willy-loman' },
      { label: 'The New Yorker: Leading Ladies', href: 'https://www.newyorker.com/magazine/1999/03/15/leading-ladies-3' },
      {
        label: 'Chicago Sun-Times: Dennehy and Falls collaboration',
        href: 'https://chicago.suntimes.com/2020/4/16/21224072/brian-dennehy-dead-chicago-goodman-theatre-iceman-cometh-robert-falls-eugene-oneill-death-salesman',
      },
      {
        label: 'TheaterMania: Elizabeth Franz and Death of a Salesman',
        href: 'https://www.theatermania.com/news/elizabeth-franz-who-redefined-linda-loman-in-death-of-a-salesman-dies-at-84_1812248/',
      },
      { label: 'Tony Awards: 1999 winners', href: 'https://www.tonyawards.com/winners/year/1999/category/any/show/any/' },
      { label: 'Movie-O-Zone: 2000 filmed-version cover', href: 'https://movieozone.com/products/death-of-a-salesman-2000' },
      { label: 'Playbill archive', href: 'https://playbill.com' },
    ],
    pressQuotes: [
      { quote: 'Probably the most successful modern play ever published', source: 'John Lahr, The New Yorker' },
      { quote: 'The performance of Dennehy\'s career', source: 'Referenced in Brian Dennehy biography coverage' },
      { quote: 'A defining Goodman-to-Broadway event', source: 'Archive synthesis' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  aida: {
    pageMode: 'featured',
    summary:
      'Aida is the archive entry where Falls steps fully into Disney-scale musical theatre: he took over the Chicago rebuild, shared book credit, and shepherded the show into a four-year Broadway hit with a long afterlife beyond New York.',
    publicSummary:
      'Falls helped reshape Disney\'s Elton John and Tim Rice musical in Chicago before it opened on Broadway, where it became a long-running hit and one of the largest commercial productions attached to his name.',
    synopsis:
      'An enslaved Nubian princess, Aida, falls in love with Radames, an Egyptian soldier already bound to the Pharaoh\'s daughter, Amneris. Their forbidden love pushes all three into a struggle among loyalty, empire, and personal sacrifice, turning a love triangle into a story about national violence and the cost of choosing compassion over duty.',
    fallsContext:
      'Aida matters here not just because it ran for years, but because it shows Falls working inside a commercial-musical machine at full scale. He stepped in during the Chicago reworking, shared book credit with Linda Woolverton and David Henry Hwang, and helped transform an unstable out-of-town process into one of the biggest Broadway chapters in the archive.',
    significance:
      'One of Falls\'s largest commercial projects: a Chicago-to-Broadway musical rebuild that left him with both the director\'s chair and co-book credit on a four-Tony, 1,852-performance Broadway run.',
    story:
      'The production history is unusually legible. After the musical\'s troubled earlier development, Falls took over the Chicago staging at the Cadillac Palace, where the piece kept changing in public: Disney executives were still making book and choreography adjustments, and even a new song entered the process before Broadway. A November 13, 1999 set mishap injured Heather Headley and Adam Pascal during the Chicago run but did not derail the larger launch. By March 23, 2000, Aida had reached the Palace Theatre with Falls directing and sharing book credit, and it stayed there through September 5, 2004 for 1,852 performances, then continued through a national tour and international mountings tracked elsewhere in the archive. For Falls, it is one of the clearest records of Chicago tryout labor turning into mass-market Broadway longevity.',
    venueAnchor: 'Cadillac Palace / Palace Theatre',
    eraLabel: 'Broadway and commercial-musical years',
    images: [
      {
        src: aidaHeadleyPascal,
        alt: 'Heather Headley and Adam Pascal in an intimate embrace in Aida.',
        caption: 'Heather Headley and Adam Pascal in the original Broadway production. Photo: Joan Marcus. Copyright Disney 2000.',
        orientation: 'portrait',
        priority: true,
        kind: 'production-still',
      },
      {
        src: aidaPlaybillFull,
        alt: 'Heather Headley, Adam Pascal, and Sherie Rene Scott in costume for Aida publicity.',
        caption: 'Heather Headley, Adam Pascal, and Sherie Rene Scott in Broadway publicity imagery for Aida. Photo: Joan Marcus via Playbill.',
        orientation: 'square',
        kind: 'production-still',
      },
      {
        src: aidaAmnerisEnsemble,
        alt: 'Sherie Rene Scott sings center stage before a brightly lit wall of colored panels in Aida.',
        caption: 'Sherie Rene Scott and the original Broadway cast in one of the production\'s bold pop-spectacle tableaux. Photo: Joan Marcus. Copyright Disney 2000.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: aidaPlaybill,
        alt: 'Playbill cover for Aida at the Palace Theatre, with gold Egyptian-profile key art on a blue background.',
        caption: 'Playbill cover art for the Palace Theatre engagement.',
        orientation: 'portrait',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Music', name: 'Elton John' },
      { role: 'Lyrics', name: 'Tim Rice' },
      { role: 'Book', name: 'Linda Woolverton' },
      { role: 'Book', name: 'Robert Falls' },
      { role: 'Book', name: 'David Henry Hwang' },
      { role: 'Choreography', name: 'Wayne Cilento' },
      { role: 'Scenic / costume design', name: 'Bob Crowley' },
      { role: 'Cast highlight', name: 'Heather Headley' },
      { role: 'Cast highlight', name: 'Adam Pascal' },
      { role: 'Cast highlight', name: 'Sherie Rene Scott' },
    ],
    quickFacts: [
      { label: 'Chicago run', value: 'Nov 12, 1999 - Jan 9, 2000, Cadillac Palace Theatre' },
      { label: 'Broadway run', value: 'Mar 23, 2000 - Sept 5, 2004, Palace Theatre' },
      { label: 'Performances', value: '30 previews, 1,852 Broadway performances' },
      { label: 'Tony wins', value: '4 Tony Awards in 2000' },
      { label: 'Falls credit', value: 'Director and co-book writer' },
    ],
    cast: [
      { role: 'Aida', name: 'Heather Headley' },
      { role: 'Radames', name: 'Adam Pascal' },
      { role: 'Amneris', name: 'Sherie Rene Scott' },
      { role: 'Amonasro', name: 'Tyrees Allen' },
      { role: 'Zoser', name: 'John Hickok' },
      { role: 'Pharaoh', name: 'Daniel Oreskes' },
      { role: 'Mereb', name: 'Damian Perkins' },
      { role: 'Nehebka', name: 'Schele Williams' },
    ],
    creativeTeam: [
      { role: 'Music by', name: 'Elton John' },
      { role: 'Lyrics by', name: 'Tim Rice' },
      { role: 'Book by', name: 'Linda Woolverton, Robert Falls, and David Henry Hwang' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Choreographed by', name: 'Wayne Cilento' },
      { role: 'Scenic and Costume Design', name: 'Bob Crowley' },
      { role: 'Lighting Design', name: 'Natasha Katz' },
      { role: 'Sound Design', name: 'Steve C. Kennedy' },
    ],
    recognition: [
      {
        label: 'Long Broadway life',
        detail: 'The Broadway production ran 1,852 performances after its March 23, 2000 opening at the Palace Theatre, making it one of the longest commercial engagements attached to Falls\'s name.',
      },
      {
        label: 'Four Tony wins',
        detail: 'The production won four Tony Awards in 2000, including Best Original Score, Best Actress in a Musical for Heather Headley, Best Scenic Design, and Best Lighting Design.',
      },
      {
        label: 'Creative authorship',
        detail: 'Unlike most productions in this archive, Aida credits Falls not only as director but as one of the musical\'s book writers.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Chicago rebuild into Broadway hit',
        detail: 'Falls inherited the production during its Chicago reworking stage and carried it into a Broadway run that lasted more than four years.',
      },
      {
        label: 'Commercial-musical scale',
        detail: 'Aida is one of the clearest examples in the archive of Falls working beyond the nonprofit and classic-revival lanes that define much of the rest of the site.',
      },
      {
        label: 'Global afterlife',
        detail: 'The internal timeline tracks the title from Chicago to Broadway, then to a national tour and later documented international productions in the Netherlands, Germany, Japan, and South Korea.',
      },
    ],
    contextNotes: [
      {
        label: 'Chicago overhaul',
        text: 'The Chicago run marked a major creative reset. Falls replaced Robert Jess Ross as director, Bob Crowley replaced Stanley A. Meyer as designer, and Wayne Cilento joined the team before the Broadway opening.',
      },
      {
        label: 'Set accident',
        text: 'During the Chicago engagement, a suspended tomb unit fell during the November 13, 1999 performance, lightly injuring Heather Headley and Adam Pascal before the show resumed days later.',
      },
      {
        label: 'Archive limits',
        text: 'The local Aida packet is thinner than many other featured productions, so this page leans on documented history, billing records, and a small set of surviving Broadway images rather than a deep per-production gallery.',
      },
      {
        label: 'Image sources',
        text: 'The added stills are preserved through David Henry Hwang\'s project page and credit Joan Marcus for Disney\'s original Broadway production photography.',
      },
      {
        label: 'Photo source',
        text: 'Current hero image comes from Playbill’s Broadway retrospective gallery and is credited there to Joan Marcus.',
      },
    ],
    externalSources: [
      { label: 'Music Theatre International show page', href: 'https://www.mtishows.com/elton-john-and-tim-rices-aida' },
      { label: 'D23 on the Chicago opening', href: 'https://d23.com/this-day/the-aida-musical-show-opens-at-the-cadillac-palace-theatre-in-chicago/' },
      { label: 'David Henry Hwang project page', href: 'https://www.davidhenryhwang.com/work-1/2019/6/14/aida' },
      { label: 'Playbill photo look-back', href: 'https://playbill.com/article/look-back-at-heather-headley-sherie-rene-scott-and-adam-pascal-in-aida-on-broadway' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'finishing-the-picture': {
    pageMode: 'featured',
    summary:
      'Arthur Miller\'s final play arrived at the Goodman as a world premiere in fall 2004, giving Falls a late-career Miller event built around movie-set collapse, celebrity damage, and the wreckage behind American mythmaking.',
    publicSummary:
      'Falls directed the Goodman world premiere of Arthur Miller\'s final play, a backstage film-world drama widely read as Miller\'s reckoning with the Marilyn Monroe years and the making of The Misfits.',
    synopsis:
      'A distinguished film director is close to losing his picture because the star at its center, adored around the world but unable to steady herself, cannot get out of bed and onto the set. As studio pressure mounts, an acting teacher is brought in to manage the actress, and the production turns into a battle among artistry, commerce, vanity, loyalty, and collapse.',
    fallsContext:
      'Finishing the Picture matters less as a transfer story than as a literary and institutional one: Falls became the first director to stage Arthur Miller\'s final completed play, and he did it at the Goodman, the same theatre where the Miller relationship had already produced Finishing the Picture\'s clear predecessor in the archive, the major Death of a Salesman revival. It shows Falls functioning not just as a director of repertory and premieres, but as a trusted first interpreter of a major playwright\'s last work.',
    significance:
      'A world premiere of Arthur Miller\'s last play, opened at the Goodman four months before Miller\'s death and staged by Falls with a starry ensemble led by Frances Fisher, Scott Glenn, Stacy Keach, Stephen Lang, Linda Lavin, Matthew Modine, Heather Prete, and Harris Yulin.',
    story:
      'This page earns its place because the production sits at a rare junction: late Miller, Hollywood memory, and Goodman prestige. Playbill\'s opening-night coverage treated the script as a thinly veiled return to the Monroe-and-Misfits crisis, while the Goodman framed it as a fable about a director, a fragile star, and the perversion of the American Dream. That combination makes Finishing the Picture more than just another 2004 credit. It is a document of Falls being entrusted with the first production of a major American playwright\'s final stage work, at a moment when Miller\'s personal history and public legacy were inseparable.',
    venueAnchor: "Goodman's Albert Theatre",
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: finishingThePictureShowArt,
        alt: 'Scott Glenn and Frances Fisher seated together in a quiet scene from Finishing the Picture.',
        caption: 'Official Goodman production image for the world premiere, featuring Scott Glenn and Frances Fisher.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Arthur Miller' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Frances Fisher' },
      { role: 'Cast highlight', name: 'Scott Glenn' },
      { role: 'Cast highlight', name: 'Stacy Keach' },
      { role: 'Cast highlight', name: 'Stephen Lang' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Sep 21 - Nov 7, 2004' },
      { label: 'Venue', value: "Goodman's Albert Theatre" },
      { label: 'Status', value: 'World premiere' },
      { label: 'Runtime', value: '2 hr 15 min' },
      { label: 'Miller context', value: 'Arthur Miller\'s final play' },
    ],
    cast: [
      { role: 'Edna Meyers', name: 'Frances Fisher' },
      { role: 'Terry Case', name: 'Scott Glenn' },
      { role: 'Phillip Ochsner', name: 'Stacy Keach' },
      { role: 'Jerome Fassinger', name: 'Stephen Lang' },
      { role: 'Flora Fassinger', name: 'Linda Lavin' },
      { role: 'Paul', name: 'Matthew Modine' },
      { role: 'Kitty', name: 'Heather Prete' },
      { role: 'Derek Clemson', name: 'Harris Yulin' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Arthur Miller' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Thomas Lynch' },
      { role: 'Costume Design', name: 'Martin Pakledinaz' },
      { role: 'Lighting Design', name: 'Michael Philippi' },
      { role: 'Sound Design and Original Music', name: 'Richard Woodbury' },
      { role: 'Projections Designer', name: 'John Boesche' },
      { role: 'Chicago Casting', name: 'Adam Belcuore' },
      { role: 'Casting', name: 'Telsey + Company' },
      { role: 'Production Stage Manager', name: 'Joseph Drummond' },
      { role: 'Stage Manager', name: 'T. Paul Lynch' },
      { role: 'Collaborator', name: 'Delphi Productions' },
    ],
    recognition: [
      {
        label: 'Miller\'s final play',
        detail: 'The production premiered Arthur Miller\'s last completed stage work in Chicago only months before the playwright\'s death in February 2005.',
      },
      {
        label: 'First production trust',
        detail: 'Falls and the Goodman became the first artists and institution entrusted with staging this late Miller script in public.',
      },
      {
        label: 'Prestige ensemble',
        detail: 'The premiere assembled a notably deep cast, including Frances Fisher, Scott Glenn, Stacy Keach, Stephen Lang, Linda Lavin, Matthew Modine, Heather Prete, and Harris Yulin.',
      },
      {
        label: 'Opening-night marker',
        detail: 'The production began performances September 21, officially opened October 5, and closed November 7, 2004, placing the Goodman premiere just four months before Miller died in February 2005.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Late-career Miller chapter',
        detail: 'The page records a new Miller work rather than a revival, which makes it distinct from Falls\'s other Arthur Miller landmarks in the archive.',
      },
      {
        label: 'Hollywood under pressure',
        detail: 'The play\'s studio setting let Falls work in a register of backstage collapse and celebrity crisis rather than courtroom, family, or civic drama.',
      },
      {
        label: 'Goodman authority',
        detail: 'Mounting the premiere at the Goodman underscores the theatre\'s national role under Falls as a home for heavyweight American playwrights and difficult first productions.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman preserved the original synopsis, run dates, runtime, and complete artist roster, making the official production page the core factual source for this record.',
      },
      {
        label: 'Monroe / Misfits context',
        text: 'Playbill\'s opening-night report described the script as based on the making of The Misfits and on the crisis period surrounding Marilyn Monroe, which helps explain why the production was immediately read as part backstage drama, part autobiographical reckoning.',
      },
      {
        label: 'Design spine',
        text: 'Goodman credits Thomas Lynch, Martin Pakledinaz, Michael Philippi, Richard Woodbury, and John Boesche for the visual and sound world, with Joseph Drummond and T. Paul Lynch leading stage management.',
      },
      {
        label: 'Final-play context',
        text: 'Reference sources consistently identify Finishing the Picture as Miller\'s final play and connect the Goodman production to the late-life public conversation around The Misfits and Marilyn Monroe.',
      },
    ],
    reviews: [
      {
        source: 'The New York Times',
        href: 'https://theater.nytimes.com/2004/10/11/theater/reviews/11fini.html',
        summary:
          'Ben Brantley reviewed the Goodman world premiere for The New York Times, marking the production\'s national critical reception beyond Chicago.',
        note: 'Review of the world premiere',
      },
      {
        source: 'Finishing the Picture background',
        href: 'https://en.wikipedia.org/wiki/Finishing_the_Picture',
        summary:
          'The play background identifies the Goodman staging as the original production of Miller\'s final play and lists the Falls-directed ensemble.',
        note: 'Production-history context',
      },
      {
        source: 'Arthur Miller background',
        href: 'https://en.wikipedia.org/wiki/Arthur_Miller',
        summary:
          'Miller biographical context helps situate the play among his final works and the public discussion of its relationship to The Misfits.',
        note: 'Playwright context',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/finishing-the-picture/' },
      { label: 'Playbill opening-night coverage (archived)', href: 'https://web.archive.org/web/20121021131440/http://www.playbill.com/news/article/88779-Arthur-Millers-Latest-Finishing-the-Picture-Opens-at-Goodman-Theatre-Oct-5' },
      { label: 'The New York Times review citation trail', href: 'https://theater.nytimes.com/2004/10/11/theater/reviews/11fini.html' },
      { label: 'Finishing the Picture play background', href: 'https://en.wikipedia.org/wiki/Finishing_the_Picture' },
      { label: 'Arthur Miller background', href: 'https://en.wikipedia.org/wiki/Arthur_Miller' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'blue-surge': {
    pageMode: 'archive',
    summary:
      'Blue Surge is the first major Falls/Rebecca Gilman entry in the archive: a Goodman world premiere about police, sex work, and class drift that later continued Off-Broadway at the Public Theater.',
    publicSummary:
      'Falls directed the Goodman world premiere of Rebecca Gilman\'s Blue Surge in 2001, launching one of the defining playwright-director collaborations in the archive before the play moved on to New York two years later.',
    synopsis:
      'As a young cop becomes entangled with a prostitute and with the uneasy moral compromises of the people around him, Gilman uses the traffic among police work, sex work, and ordinary Midwestern aspiration to expose how class pressure distorts intimacy, authority, and the idea of public service.',
    fallsContext:
      'Blue Surge is where the long Falls/Gilman line starts in earnest. Later pages like Dollhouse, Luna Gale, Soups, Stews, and Casseroles: 1976, and Swing State all feel richer once this one is in place, because it shows the partnership beginning with urban social realism, working-class pressure, and an unsentimental Chicago lens that would keep evolving for two decades.',
    significance:
      'A Goodman world premiere and commission that began Falls\'s long-running collaboration with Rebecca Gilman, then proved durable enough to continue at the Joseph Papp Public Theater in 2003.',
    story:
      'The play\'s place in the archive is larger than its surviving asset packet. The official Goodman page preserves the original 2001 run, cast, runtime, and commissioning language; the timeline and credits show that the production did not end in Chicago, but extended to the Joseph Papp Public Theater in New York in 2003. That two-step life matters. Blue Surge was not just a successful local premiere. It was the opening movement in one of the key artistic relationships on the site, establishing the Falls/Gilman partnership as a major new-work engine inside the Goodman years.',
    venueAnchor: "Goodman's Albert Theatre",
    eraLabel: 'Early 2000s Goodman years',
    images: [
      {
        src: blueSurgeShowArt,
        alt: 'Two men in casual clothes argue across a desk in official Blue Surge production art.',
        caption: 'Official Goodman show art for the world premiere of Blue Surge.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: blueSurgeTitleTreatment,
        alt: 'Blue Surge title treatment in bright blue block lettering.',
        caption: 'Goodman title treatment asset for Blue Surge, pulled from the official production page.',
        orientation: 'landscape',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Joe Forbrich' },
      { role: 'Cast highlight', name: 'Rebecca Jordan' },
      { role: 'Cast highlight', name: 'Amy Landecker' },
      { role: 'Cast highlight', name: 'Rachel Miner' },
    ],
    quickFacts: [
      { label: 'Goodman run', value: 'Jun 29 - Aug 4, 2001' },
      { label: 'Venue', value: "Goodman's Albert Theatre" },
      { label: 'Runtime', value: '2 hr' },
      { label: 'Status', value: 'World premiere and Goodman commission' },
      { label: 'Later staging', value: '2003, Joseph Papp Public Theater' },
    ],
    cast: [
      { role: 'Curt', name: 'Joe Forbrich' },
      { role: 'Heather', name: 'Rebecca Jordan' },
      { role: 'Doug', name: 'Steve Key' },
      { role: 'Beth', name: 'Amy Landecker' },
      { role: 'Sandy', name: 'Rachel Miner' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Birgit Rattenborg Wise' },
      { role: 'Lighting Design', name: 'Michael Philippi' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Dramaturg', name: 'Tom Creamer' },
      { role: 'Production Stage Manager', name: 'Alden J. Vasquez' },
      { role: 'Stage Manager', name: 'Laxmi Kumaran' },
    ],
    recognition: [
      {
        label: 'First Gilman chapter',
        detail: 'Timeline and later production records consistently treat Blue Surge as the starting point of the Falls/Rebecca Gilman collaboration that would become one of the defining partnerships on the site.',
      },
      {
        label: 'Chicago to New York continuation',
        detail: 'The archive records a 2003 continuation at the Joseph Papp Public Theater, showing that the play had life beyond its Goodman premiere.',
      },
      {
        label: 'Commissioned new work',
        detail: 'The Goodman page frames the production explicitly as both a world premiere and a Goodman Theatre commission.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Partnership origin',
        detail: 'Blue Surge establishes the social and class concerns that would keep resurfacing throughout the Falls/Gilman collaboration.',
      },
      {
        label: 'Urban social realism',
        detail: 'The play\'s cops-and-prostitutes setting places it near the grittier end of Falls\'s Goodman new-work record, far from genteel literary adaptation or period revival.',
      },
      {
        label: 'Sparse but solid archive',
        detail: 'Even with limited surviving media, the page has unusually trustworthy institutional facts because the official Goodman production record remains live and detailed.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman page preserves the original commissioning label, run dates, runtime, and full artist roster, making it the anchor source for this record.',
      },
      {
        label: 'Public Theater continuation',
        text: 'Internal timeline and credits data record a 2003 New York continuation at the Joseph Papp Public Theater. That second staging is kept visible here because it shows the play functioning as more than a one-city premiere.',
      },
      {
        label: 'Image limits',
        text: 'The official page exposes the show art and a separate title-treatment asset, both now represented locally; it does not expose a full production-still gallery, so the page avoids padding the layout with unrelated portraits.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/blue-surge/' },
      { label: 'Rebecca Gilman artist page', href: 'https://www.goodmantheatre.org/artists/rebecca-gilman/' },
      { label: 'Blue Surge title-treatment asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/08/BlueSurge_TitleTreatment-1.png' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'house-and-garden': {
    pageMode: 'archive',
    summary:
      "House and Garden brought Alan Ayckbourn's linked twin-play experiment to the Goodman in 2001, giving Falls an American-premiere event built around simultaneous staging, shared actors, and one country-house day seen from two sides at once.",
    publicSummary:
      "Falls directed the American premiere of Alan Ayckbourn's House and Garden at the Goodman in 2001, a dual-play event designed to run simultaneously in two auditoria with the same cast crossing between them.",
    synopsis:
      "Set over the course of a single summer day at Teddy Platt's country house during a village fete, House and Garden split the same social world into two plays happening at the same time. One follows the drawing-room unravelling of marriages, flirtations, and political ambition; the other moves outdoors among fete logistics, servants, neighbors, and private reckonings. Seen together, the diptych becomes a farce of overlapping perspectives, collapsing domestic life and public display into one theatrical machine.",
    fallsContext:
      "House and Garden matters in the archive because it shows Falls not only as a director of emotional scale, but as a director of logistics and form. Ayckbourn's experiment depends on precision: actors moving between paired stages, scenes echoing each other across spaces, and the audience gradually understanding that no single room contains the full story.",
    significance:
      'An American premiere at the Goodman of Alan Ayckbourn\'s unusually demanding diptych, one of the clearest formal experiments in Falls\'s early-2000s record.',
    story:
      "The page earns its place less through surviving cast documentation than through the nature of the production itself. Ayckbourn's own archive describes House and Garden as two plays built to run simultaneously with the same cast in two auditoria, and Robert Falls's Goodman record identifies his staging as the American premiere. That makes it a key form-driven title in the 2001 cluster: not a revival, not a premiere of a single script, but a theatrical engineering problem that also had to land as comedy and social observation.",
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Early 2000s Goodman years',
    images: [
      {
        src: houseAndGardenShowArt,
        alt: 'Official show art for House and Garden depicting a country house split by a silhouette profile.',
        caption: 'Official Goodman show art for the American premiere of House and Garden, pulled from the Goodman archive asset path.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Alan Ayckbourn' },
      { role: 'Director', name: 'Robert Falls' },
    ],
    quickFacts: [
      { label: 'Year', value: '2001' },
      { label: 'Venue', value: 'Goodman Theatre' },
      { label: 'Status', value: 'American premiere' },
      { label: 'Structure', value: 'Two linked plays performed simultaneously' },
      { label: 'Source concept', value: 'Ayckbourn dual-auditoria event' },
    ],
    recognition: [
      {
        label: 'American premiere',
        detail: 'Falls\'s Goodman staging is recorded as the American premiere of Ayckbourn\'s twin-play experiment.',
      },
      {
        label: 'A formal challenge, not just a title',
        detail: 'House and Garden is designed as a simultaneous diptych with one cast crossing between two auditoria, making production logistics part of the artistic identity of the piece itself.',
      },
      {
        label: 'A distinct 2001 entry',
        detail: 'Within Falls\'s early-2000s Goodman work, this production stands out for theatrical architecture and timing rather than for transfer history, awards, or surviving star-centered photography.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Theatrical engineering as storytelling',
        detail: 'The play pair belongs in the archive because it required a director who could organize simultaneous action without letting the mechanics eclipse character and social comedy.',
      },
      {
        label: 'Ayckbourn at his most structural',
        detail: 'Ayckbourn\'s official site frames the work as one of his largest formal experiments, splitting one country-house world into complementary interior and exterior views.',
      },
      {
        label: 'Sparse but credible record',
        detail: 'Even though the surviving local packet is thinner than for nearby Goodman productions, the page now rests on official show art, internal site chronology, and the Ayckbourn archive rather than generic filler text.',
      },
    ],
    contextNotes: [
      {
        label: 'Ayckbourn record',
        text: 'The official House and Garden website describes the diptych as two plays designed to be performed simultaneously with the same cast moving between them, and documents the world, London, and New York premieres that frame its broader production history.',
      },
    ],
    reviews: [
      {
        source: 'Official Goodman production page',
        href: 'https://www.goodmantheatre.org/show/house-and-garden/',
        summary:
          'The Goodman production page is retained as the production anchor and provides the official asset path used for the local show-art pull.',
        note: 'Primary production source',
      },
      {
        source: 'House & Garden play background',
        href: 'https://en.wikipedia.org/wiki/House_%26_Garden_(plays)',
        summary:
          'The play background explains the unusual diptych structure: two self-contained plays, House and Garden, designed for simultaneous performance by the same cast in adjacent spaces.',
        note: 'Source-play context',
      },
      {
        source: 'Robert Falls background',
        href: 'https://en.wikipedia.org/wiki/Robert_Falls',
        summary:
          'Falls background sources identify House and Garden among the American premieres he directed during his Goodman tenure.',
        note: 'Career context',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/house-and-garden/' },
      { label: 'Official Goodman show-art asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/08/HouseGarden_ShowArt_900x600.png' },
      { label: 'Official Alan Ayckbourn House & Garden site', href: 'http://houseandgarden.alanayckbourn.net/' },
      { label: 'Ayckbourn production history', href: 'http://houseandgarden.alanayckbourn.net/page17/' },
      { label: 'House & Garden play background', href: 'https://en.wikipedia.org/wiki/House_%26_Garden_(plays)' },
      { label: 'Robert Falls career overview', href: 'https://en.wikipedia.org/wiki/Robert_Falls' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'lobby-hero': {
    pageMode: 'featured',
    summary:
      "Lobby Hero brought Kenneth Lonergan's shaggy off-Broadway breakthrough to Goodman's Owen Theatre in 2002, giving Falls a compact, morally slippery city comedy about authority, loyalty, and people who keep talking past the truth.",
    publicSummary:
      'Falls directed the Goodman staging of Kenneth Lonergan\'s Lobby Hero in 2002, a four-character ethical comedy set on the graveyard shift in a Manhattan apartment building lobby.',
    synopsis:
      'Jeff, a security guard drifting through the night shift in a Manhattan lobby, tries to charm his way through boredom, loneliness, and half-understood ambition while orbiting his rule-bound supervisor William and two police officers, the swaggering Bill and the newly idealistic Dawn. When a murder accusation drags William\'s brother into the story and Jeff gets pulled into protecting the lie, the play turns into a comedy of conscience in which nobody can fully separate decency from self-interest.',
    fallsContext:
      'Lobby Hero shows Falls in a smaller, more conversational register than the large-canvas O\'Neill, Shakespeare, and musical productions that dominate nearby years in the archive. In the Owen Theatre, the emphasis shifts to quartet dynamics, verbal rhythm, and the unstable moral logic of contemporary urban realism.',
    significance:
      'A Goodman engagement of Kenneth Lonergan\'s recent off-Broadway hit, staged in the Owen Theatre just as Lonergan was emerging as one of the key American playwrights of his generation.',
    story:
      'The production matters because it marks Falls aligning the Goodman with a then-new contemporary American play that had already made noise downtown in New York but had not yet become canonical. Goodman\'s own copy sold the piece as a heartfelt, loopy ethical comedy rather than a solemn issue play, and that frame helps explain why it belongs in the archive: Lobby Hero let Falls work with comic timing, class friction, and institutional authority on an intimate scale, using the theatre\'s smaller room for a pressure-cooker ensemble instead of spectacle.',
    venueAnchor: "Goodman's Owen Theatre",
    eraLabel: 'Early 2000s Goodman years',
    images: [
      {
        src: lobbyHeroGoodmanShowArt,
        alt: 'Lance Stuart Baker and Rolando Boyce Sr. in security uniforms in a production still from Lobby Hero.',
        caption: 'Official Goodman production image for Lobby Hero in the Owen Theatre.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: lobbyHeroLanceBaker,
        alt: 'Lance Stuart Baker headshot from the Goodman Lobby Hero artist roster.',
        caption: 'Lance Stuart Baker, who played Jeff.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: lobbyHeroRolandoBoyce,
        alt: 'Rolando Boyce Sr. headshot from the Goodman Lobby Hero artist roster.',
        caption: 'Rolando Boyce, Sr., who played William.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: lobbyHeroScottCummins,
        alt: 'Scott Cummins headshot from the Goodman Lobby Hero artist roster.',
        caption: 'Scott Cummins, who played Bill.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: lobbyHeroJulieGranata,
        alt: 'Julie Granata headshot from the Goodman Lobby Hero artist roster.',
        caption: 'Julie Granata, who played Dawn.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: lobbyHeroRobertFalls,
        alt: 'Robert Falls headshot from Goodman artist assets.',
        caption: 'Robert Falls, director of the Goodman production.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: lobbyHeroTitleTreatmentAsset,
        alt: 'Lobby Hero title treatment in compact black type.',
        caption: 'Goodman title-treatment asset for Lobby Hero.',
        orientation: 'landscape',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Kenneth Lonergan' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Lance Stuart Baker' },
      { role: 'Cast highlight', name: 'Rolando Boyce, Sr.' },
      { role: 'Cast highlight', name: 'Scott Cummins' },
      { role: 'Cast highlight', name: 'Julie Granata' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Nov 4 - 24, 2002' },
      { label: 'Venue', value: "Goodman's Owen Theatre" },
      { label: 'Runtime', value: '2 hr 9 min' },
      { label: 'Season', value: '2002/2003' },
      { label: 'Source context', value: 'Following the 2001 off-Broadway breakout' },
    ],
    cast: [
      { role: 'Jeff', name: 'Lance Stuart Baker' },
      { role: 'William', name: 'Rolando Boyce, Sr.' },
      { role: 'Bill', name: 'Scott Cummins' },
      { role: 'Dawn', name: 'Julie Granata' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Kenneth Lonergan' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Linda Buchanan' },
      { role: 'Costume Design', name: 'Rachel Anne Healy' },
      { role: 'Lighting Design', name: 'Michelle Habeck' },
      { role: 'Original Music and Sound Design', name: 'Richard Woodbury' },
      { role: 'Production Stage Manager', name: 'Kimberly Osgood' },
      { role: 'Stage Manager', name: 'Ellen Hay' },
    ],
    recognition: [
      {
        label: 'Lonergan at a formative moment',
        detail: 'Goodman billed the play in the wake of its 2001 off-Broadway success, catching Kenneth Lonergan before later Broadway and film recognition made Lobby Hero a repertory staple.',
      },
      {
        label: 'A small-room Falls production',
        detail: 'Mounted in the Owen Theatre with a four-person cast, the production highlights Falls\'s ability to work in chamber scale rather than only in marquee revivals and epics.',
      },
      {
        label: 'Urban ethics comedy',
        detail: 'The page adds a distinct contemporary-city register to the archive: institutional authority, class unease, and moral confusion played for both humor and damage.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Goodman and new American writing',
        detail: 'The staging reflects Falls using the Goodman not only for classics and transfers but also for recent American plays already reshaping the off-Broadway conversation.',
      },
      {
        label: 'Owen Theatre intimacy',
        detail: 'Its scale is part of its identity: four characters, one lobby, and a moral argument that gets funnier and uglier the longer the night goes on.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman archive page preserves the original synopsis, run dates, runtime, and complete artist roster, making it the primary factual source for this record.',
      },
      {
        label: 'Off-Broadway context',
        text: 'Goodman described Lobby Hero as a hit of the 2001 off-Broadway season, which helps place the production as a near-contemporary Chicago staging rather than a later revival of an already canonized text.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/lobby-hero/',
        summary:
          'The official archive supplies the Goodman run dates, Owen Theatre venue, runtime, synopsis, full cast, creative team, and asset references used here.',
        note: 'Primary production source',
      },
      {
        source: 'Lobby Hero background',
        href: 'https://en.wikipedia.org/wiki/Lobby_Hero',
        summary:
          'The play background tracks Lobby Hero from its 2001 Playwrights Horizons premiere through later London and Broadway productions.',
        note: 'Production-history context',
      },
      {
        source: 'Kenneth Lonergan background',
        href: 'https://en.wikipedia.org/wiki/Kenneth_Lonergan',
        summary:
          'Lonergan background places Lobby Hero among the early plays that established his reputation before his later Broadway and film recognition.',
        note: 'Playwright context',
      },
      {
        source: 'Vogue',
        href: 'https://www.vogue.com/article/lobby-hero-broadway-michael-cera-chris-evans-opening-night',
        summary:
          'Coverage of the 2018 Broadway opening helps show the play’s later cultural life and the durability of its questions about uniforms, authority, and duty.',
        note: 'Later revival context',
      },
      {
        source: 'Awards context',
        href: 'https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Kenneth_Lonergan',
        summary:
          'Awards listings preserve Lobby Hero’s early recognition and its later revival attention, including Outer Critics Circle and Tony-era context.',
        note: 'Recognition context',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/lobby-hero/' },
      { label: 'Official Goodman show-art asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/08/LobbyHero_ShowArt_900x600.png' },
      { label: 'Official Goodman title-treatment asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/08/LobbyHero_TitleTreatment-1.png' },
      { label: 'Lance Stuart Baker Goodman asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/BakerLance_288x375.jpg' },
      { label: 'Rolando Boyce Goodman asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/BoyceRolando_288x375.jpg' },
      { label: 'Scott Cummins Goodman asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/CumminsScott_288x375.jpg' },
      { label: 'Julie Granata Goodman asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/GranataJulie_288x375.jpg' },
      { label: 'Robert Falls Goodman asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/BobFalls_148x148.jpeg' },
      { label: 'Lobby Hero production history', href: 'https://en.wikipedia.org/wiki/Lobby_Hero' },
      { label: 'Kenneth Lonergan background', href: 'https://en.wikipedia.org/wiki/Kenneth_Lonergan' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'hughie': {
    pageMode: 'featured',
    summary:
      "Hughie gave Falls and Brian Dennehy a smaller O'Neill chamber piece in 2004: a one-hour nocturnal encounter about luck, loneliness, and self-invention, staged in Goodman's Owen Theatre.",
    publicSummary:
      "Falls directed Eugene O'Neill's Hughie at the Goodman in 2004 with Brian Dennehy as Erie Smith and Joe Grifasi as the new night clerk who becomes the audience for Erie's fading mythology.",
    synopsis:
      'Erie Smith, a once high-rolling gambler now running on memory and bluster, returns to the hotel lobby where the night clerk Hughie used to admire him. Hughie is dead, the city has moved on, and the new clerk is harder to impress. Over the course of one late-night encounter, Erie turns reminiscence into performance, gambling that if he can keep talking, he can keep his luck, his style, and his sense of himself from vanishing entirely.',
    fallsContext:
      "Hughie sits inside the long Falls/Brian Dennehy/Eugene O'Neill triangle, but unlike the epic scale of The Iceman Cometh or Long Day's Journey Into Night, it proves how much of that collaboration could live in compression: two actors, one hour, one room, and a whole ruined American mythology hanging on talk.",
    significance:
      "A compact O'Neill chapter in Falls's major Brian Dennehy collaboration, staged in Goodman's Owen Theatre from October 21 through November 21, 2004, with Dennehy as Erie Smith and Joe Grifasi as the new night clerk.",
    story:
      "The value of Hughie in the archive is contrast. Falls had already directed Dennehy through some of O'Neill's biggest emotional and physical canvases; here the work turns inward. The Goodman record preserves a version of Falls as miniaturist rather than impresario, using the smaller theatre to stage swagger as a survival tactic and to let Dennehy work less as a titan than as a haunted talker trying to charm back his vanished audience.",
    venueAnchor: "Goodman's Owen Theatre",
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: hughieShowArt,
        alt: 'Brian Dennehy in fedora and overcoat in a dim hotel-lobby scene from Hughie.',
        caption: 'Official Goodman production still featuring Brian Dennehy as Erie Smith.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: "Eugene O'Neill" },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Erie Smith', name: 'Brian Dennehy' },
      { role: 'A Night Clerk', name: 'Joe Grifasi' },
      { role: 'Scenic world', name: 'Eugene Lee' },
      { role: 'Sound world', name: 'Richard Woodbury' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Oct 21 - Nov 21, 2004' },
      { label: 'Venue', value: "Goodman's Owen Theatre" },
      { label: 'Runtime', value: '1 hr' },
      { label: 'Cast size', value: '2 actors' },
      { label: 'Written by', value: "Eugene O'Neill" },
      { label: 'Directed by', value: 'Robert Falls' },
      { label: 'Career context', value: "Falls / Dennehy / O'Neill collaboration" },
    ],
    cast: [
      { role: 'Erie Smith', name: 'Brian Dennehy' },
      { role: 'A Night Clerk', name: 'Joe Grifasi' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: "Eugene O'Neill" },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Eugene Lee' },
      { role: 'Costume Design', name: 'Rachel Anne Healy' },
      { role: 'Lighting Design', name: 'John Culbert' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Production Stage Manager', name: 'Kimberly Osgood' },
    ],
    recognition: [
      {
        label: "A chamber O'Neill for Dennehy",
        detail: "The production distilled the Falls/Dennehy O'Neill partnership down to a one-hour two-hander, sharply contrasting with the pair's larger canonical revivals elsewhere in the archive.",
      },
      {
        label: 'Owen Theatre scale',
        detail: 'Its placement in the Goodman\'s smaller room makes the production an important scale shift within Falls\'s 2000s record, emphasizing intimacy, rhythm, and actor presence over event-size production.',
      },
      {
        label: 'Late-career Goodman pairing',
        detail: 'Mounted in the same season as Finishing the Picture, Hughie shows Falls toggling between heavyweight literary premiere work and spare repertory revival within months.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Dennehy without the epic frame',
        detail: 'The page documents a different register of one of Falls\'s defining actor collaborations: bruised charisma, memory, and late-night self-mythologizing instead of large family or ensemble collapse.',
      },
      {
        label: "O'Neill continuity",
        detail: "The production helps connect the major O'Neill landmarks on the site by showing the collaboration reaching not only headline revivals but also smaller, actor-driven works.",
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman archive page preserves the run dates, runtime, full artist roster, and the production synopsis used here as the factual anchor for the record.',
      },
      {
        label: 'One-hour compression',
        text: "The archive makes clear how stripped-down this production was compared with Falls's larger O'Neill work: one hour, two actors, one hotel-lobby encounter, and no ornamental subplotting.",
      },
      {
        label: 'Artist roster',
        text: 'The Goodman record identifies the production team as Eugene Lee, Rachel Anne Healy, John Culbert, Richard Woodbury, and Kimberly Osgood, giving the page a complete credited design spine even with limited imagery.',
      },
      {
        label: 'Source background',
        text: "The play was written in 1942 and premiered after O'Neill's death, giving this small Goodman revival a late-O'Neill frame alongside its local Falls/Dennehy importance.",
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/hughie/',
        summary:
          'The official archive provides the closed-production record: run dates, Owen Theatre venue, one-hour runtime, synopsis, cast, and principal creative credits.',
        note: 'Primary production source',
      },
      {
        source: 'Hughie background',
        href: 'https://en.wikipedia.org/wiki/Hughie',
        summary:
          "The play background places Hughie as a short two-character late O'Neill work centered on Erie Smith, a gambler trying to recover his luck after the death of Hughie, the clerk who believed in him.",
        note: 'Source-play context',
      },
      {
        source: 'Brian Dennehy background',
        href: 'https://en.wikipedia.org/wiki/Brian_Dennehy',
        summary:
          "Dennehy's biography helps situate Hughie within his decades-long Goodman relationship and his recurring association with O'Neill roles directed by Falls.",
        note: 'Collaborator context',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/hughie/' },
      { label: 'Hughie play background', href: 'https://en.wikipedia.org/wiki/Hughie' },
      { label: 'Brian Dennehy background', href: 'https://en.wikipedia.org/wiki/Brian_Dennehy' },
      { label: "Eugene O'Neill background", href: 'https://en.wikipedia.org/wiki/Eugene_O%27Neill' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-guys': {
    pageMode: 'featured',
    summary:
      "The Guys brought Anne Nelson's immediate post-9/11 drama to Chicago in 2002, with Falls directing a concentrated two-character civic elegy co-presented by Goodman and Northlight in the Owen Theatre.",
    publicSummary:
      'Falls directed the Chicago premiere of Anne Nelson\'s The Guys in 2002, pairing Mary Beth Fisher and B.J. Jones in a compressed 9/11-era drama about grief, language, and public duty.',
    synopsis:
      'A New York fire chief, shattered by the loss of eight men from his company on September 11, turns to Joan, an editor and writer, for help composing the eulogies he must deliver. Over the course of their conversations, practical writing work becomes a way to confront grief, obligation, memory, and the impossible task of giving shape to public mourning while the wound is still fresh.',
    fallsContext:
      'The Guys marks Falls in a civic-response mode that differs from the large classics and literary revivals surrounding it. Rather than staging historical distance or mythic scale, the production engages an event still immediate in American life, using the Goodman\'s smaller room for direct address, witness, and emotional compression.',
    significance:
      'A Goodman and Northlight Theatre co-presentation of the Chicago premiere of Anne Nelson\'s 9/11 drama, mounted less than a year after the attacks and anchored by Mary Beth Fisher and Northlight artistic director B.J. Jones.',
    story:
      'This page matters because timing is part of the production\'s meaning. The Guys was not a retrospective September 11 play arriving decades later; it was staged in September 2002, still inside the first year of national mourning. Goodman\'s archive preserves that urgency in miniature: a short runtime, a two-person cast, a co-presentation with Northlight, and a blunt description of a fire chief struggling to write for the dead. In the larger Falls archive, it stands as one of the clearest examples of theatre used as immediate civic response rather than prestige revival or long-gestating new work.',
    venueAnchor: "Goodman's Owen Theatre",
    eraLabel: 'Early 2000s Goodman years',
    images: [
      {
        src: theGuysShowArt,
        alt: 'Mary Beth Fisher and B.J. Jones clasp hands in a production still from The Guys.',
        caption: 'Official Goodman production still from the Chicago premiere co-presented with Northlight Theatre.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Anne Nelson' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Co-presenting theatre', name: 'Northlight Theatre' },
      { role: 'Cast highlight', name: 'Mary Beth Fisher' },
      { role: 'Cast highlight', name: 'B.J. Jones' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Sep 10 - 22, 2002' },
      { label: 'Venue', value: "Goodman's Owen Theatre" },
      { label: 'Presented with', value: 'Northlight Theatre' },
      { label: 'Runtime', value: '80 min' },
      { label: 'Status', value: 'Chicago premiere' },
      { label: 'Cast size', value: '2 actors' },
      { label: 'Source text', value: "Anne Nelson's post-9/11 drama" },
    ],
    cast: [
      { role: 'Joan', name: 'Mary Beth Fisher' },
      { role: 'Nick', name: 'B.J. Jones' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Anne Nelson' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Co-presenting company', name: 'Northlight Theatre' },
      { role: 'Production Stage Manager', name: 'Kerry Epstein' },
    ],
    recognition: [
      {
        label: 'Chicago premiere in real time',
        detail: 'The production arrived in September 2002, less than a year after the attacks that the play addresses, giving it an immediacy unusual in the archive.',
      },
      {
        label: 'A civic-response production',
        detail: 'Unlike the major revival titles around it, The Guys functions as a document of theatre stepping into a public grieving process while that grief was still current and unresolved.',
      },
      {
        label: 'Goodman / Northlight collaboration',
        detail: 'The co-presentation places the page inside a Chicago institutional partnership rather than a single-house production model, which is part of its local significance.',
      },
      {
        label: 'Artist-leader on stage',
        detail: 'The casting of Northlight artistic director B.J. Jones as Nick makes the partnership visible inside the performance itself, not only in the producing credit.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Scale as purpose',
        detail: 'Its two-person form and 80-minute runtime are not limitations but the point: the play works through intimacy, testimony, and shared language rather than theatrical sprawl.',
      },
      {
        label: 'Different kind of 2002 production',
        detail: 'Set against Lobby Hero and Long Day\'s Journey into Night, The Guys shows another side of Falls\'s 2002 range: immediate social response instead of ironic urban comedy or canonical epic.',
      },
      {
        label: 'Chicago within a national response',
        detail: 'The Goodman staging belongs to the larger early life of Anne Nelson\'s play, which moved quickly from its New York premiere into productions and a film adaptation while September 11 remained a live public wound.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman archive page provides the Chicago-premiere billing, co-presentation note with Northlight Theatre, cast, runtime, and the short production summary used here.',
      },
      {
        label: '9/11 context',
        text: 'The play\'s action centers on a fire chief writing eulogies for men lost on September 11, which makes the production one of the archive\'s clearest records of direct response to a still-recent national event.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/the-guys/' },
      { label: 'The Guys play background', href: 'https://en.wikipedia.org/wiki/The_Guys' },
      { label: 'Anne Nelson background', href: 'https://en.wikipedia.org/wiki/Anne_Nelson' },
      { label: 'The Flea Theater context', href: 'https://en.wikipedia.org/wiki/The_Flea_Theater' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-goat-or-who-is-sylvia': {
    pageMode: 'archive',
    summary:
      "Falls brought Edward Albee's The Goat, or Who Is Sylvia? to the Goodman in 2003 as a Midwest premiere, staging the Tony-winning tragicomedy as a razor-edged domestic collapse in the Albert Theatre.",
    publicSummary:
      "Falls directed the Goodman Midwest premiere of Edward Albee's The Goat, or Who Is Sylvia? in 2003, following the play's 2002 Tony win with a Chicago staging built around a family undone by an unspeakable confession.",
    synopsis:
      'Martin appears to have the ideal life: a major architectural commission, a successful marriage, a bright son, and the glow of his fiftieth birthday. Then a confession detonates the household. Albee turns one impossible revelation into a savage test of intimacy, tolerance, disgust, language, and the stories sophisticated people tell themselves about what can and cannot be understood.',
    fallsContext:
      'The Goat shows Falls in another modern-classic register distinct from the civic compression of The Guys or the chamber melancholy of Hughie. Here the work is all tonal brinksmanship: high comedy tipping into horror, social polish giving way to primal damage, and a literate domestic setting blown open from within.',
    significance:
      'A Goodman Midwest premiere of Edward Albee\'s 2002 Tony winner for Best Play, mounted less than a year after the script\'s Broadway breakthrough and framed by the theatre as a wickedly funny tragicomedy.',
    story:
      'This is one of the clearest examples in the 2000s archive of Falls grabbing a major contemporary American play while it was still hot rather than long canonized. The Goodman page keeps the case simple: Albee\'s play had just won the Tony, the production was sold as the Midwest premiere, and the cast was built to ride the script\'s violent shifts in tone rather than cushion them. In the broader site, that makes The Goat an important bridge between Falls the classicist and Falls the director of contemporary provocation.',
    venueAnchor: "Goodman's Albert Theatre",
    eraLabel: 'Early 2000s Goodman years',
    images: [
      {
        src: theGoatGoodmanShowArt,
        alt: 'Barbara Robertson leans against Patrick Clear in Goodman show art for The Goat, or Who Is Sylvia?.',
        caption: 'Official Goodman show art for the Midwest premiere of The Goat, or Who Is Sylvia?.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: theGoatTitleTreatment,
        alt: 'Goodman title treatment for The Goat, or Who Is Sylvia?.',
        caption: 'Goodman title treatment used for the 2003 archive page.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: theGoatRobertFalls,
        alt: 'Robert Falls portrait from the Goodman artist archive.',
        caption: 'Robert Falls, director.',
        orientation: 'square',
        kind: 'art',
      },
      {
        src: theGoatEdwardAlbee,
        alt: 'Edward Albee portrait from the Goodman artist archive.',
        caption: 'Edward Albee, playwright.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: theGoatPatrickClear,
        alt: 'Patrick Clear portrait from the Goodman artist archive.',
        caption: 'Patrick Clear, Martin.',
        orientation: 'square',
        kind: 'art',
      },
      {
        src: theGoatWilliamDick,
        alt: 'William Dick portrait from the Goodman artist archive.',
        caption: 'William Dick, Ross.',
        orientation: 'square',
        kind: 'art',
      },
      {
        src: theGoatBarbaraRobertson,
        alt: 'Barbara Robertson portrait from the Goodman artist archive.',
        caption: 'Barbara Robertson, Stevie.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: theGoatMichaelStahlDavid,
        alt: 'Michael Stahl-David portrait from the Goodman artist archive.',
        caption: 'Michael Stahl-David, Billy.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: theGoatMichaelPhilippi,
        alt: 'Michael Philippi portrait from the Goodman artist archive.',
        caption: 'Michael Philippi, scenic and lighting design.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: theGoatRichardWoodbury,
        alt: 'Richard Woodbury portrait from the Goodman artist archive.',
        caption: 'Richard Woodbury, sound design.',
        orientation: 'square',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Edward Albee' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Patrick Clear' },
      { role: 'Cast highlight', name: 'Barbara Robertson' },
      { role: 'Cast highlight', name: 'William Dick' },
      { role: 'Cast highlight', name: 'Michael Stahl-David' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Nov 10 - Dec 2, 2003' },
      { label: 'Venue', value: "Goodman's Albert Theatre" },
      { label: 'Runtime', value: '1 hr 45 min' },
      { label: 'Status', value: 'Midwest premiere' },
      { label: 'Awards context', value: '2002 Tony winner for Best Play' },
    ],
    cast: [
      { role: 'Martin', name: 'Patrick Clear' },
      { role: 'Ross', name: 'William Dick' },
      { role: 'Stevie', name: 'Barbara Robertson' },
      { role: 'Billy', name: 'Michael Stahl-David' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Edward Albee' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic and Lighting Design', name: 'Michael Philippi' },
      { role: 'Costume Design', name: 'Nan Cibula-Jenkins' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Production Dramaturg', name: 'Tom Creamer' },
      { role: 'Production Stage Manager', name: 'Joseph Drummond' },
      { role: 'Stage Manager', name: 'T. Paul Lynch' },
    ],
    recognition: [
      {
        label: 'Midwest premiere of a major new play',
        detail: 'The Goodman staged the play as a Midwest premiere almost immediately after its Broadway success, keeping the title in active contemporary conversation rather than archival reverence.',
      },
      {
        label: 'Tony-winning source text',
        detail: 'Goodman explicitly framed the production in the wake of the play\'s 2002 Tony Award for Best Play, making the staging part of the title\'s first wave of major national recognition.',
      },
      {
        label: 'Albee in provocation mode',
        detail: 'The page records Falls taking on one of Albee\'s most notorious late-career scripts, where elegant language and civilized surfaces are designed to collapse under pressure.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'A contemporary shock classic',
        detail: 'In the 2003 moment, The Goat was still less a settled repertory item than a live provocation, which gives the production a different charge than the archive\'s established classics.',
      },
      {
        label: 'Domestic tragedy through comedy',
        detail: 'Falls\'s 2000s record benefits from having this title in place because it shows him working on a contemporary script whose power depends on tonal whiplash rather than scale or overt sentiment.',
      },
      {
        label: 'Strong institutional documentation',
        detail: 'The Goodman archive preserves cast, design team, runtime, premiere status, and plot framing in unusually complete form for a page with a relatively small image packet.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman production page supplies the Midwest-premiere billing, full cast and creative roster, runtime, and the plot summary used here as the factual anchor.',
      },
      {
        label: 'Albee awards context',
        text: 'The theatre described the play as the winner of the 2002 Tony Award for Best Play, which helps explain why the production arrived at the Goodman so quickly after Broadway.',
      },
    ],
    reviews: [
      {
        outlet: 'Goodman Theatre archive',
        summary: 'The official page records the production as a Goodman Albert Theatre run from Nov. 10-Dec. 2, 2003, directed by Falls, with a one-hour-forty-five-minute runtime and Midwest premiere positioning.',
        href: 'https://www.goodmantheatre.org/show/the-goat-or-who-is-sylvia/',
      },
      {
        outlet: 'Broadway / awards context',
        summary: 'The play opened on Broadway in 2002, won the Tony Award for Best Play, and quickly became a major late-career Albee title before Goodman mounted its Midwest premiere.',
        href: 'https://en.wikipedia.org/wiki/The_Goat,_or_Who_Is_Sylvia%3F',
      },
      {
        outlet: 'Tony Awards context',
        summary: 'Awards references identify The Goat, or Who Is Sylvia? as the 2002 Best Play winner, underscoring why Goodman treated it as a contemporary event rather than a settled revival.',
        href: 'https://en.wikipedia.org/wiki/Tony_Award_for_Best_Play',
      },
      {
        outlet: 'Pulitzer context',
        summary: 'The play was also a 2003 Pulitzer Prize for Drama finalist, adding another marker of its national standing at the moment Falls staged it in Chicago.',
        href: 'https://en.wikipedia.org/wiki/The_Goat,_or_Who_Is_Sylvia%3F#Awards_and_nominations',
      },
      {
        outlet: 'Recent critical afterlife',
        summary: 'Later reviews continue to frame the play around the collapse of an apparently ideal household and the audience discomfort Albee deliberately provokes.',
        href: 'https://www.theguardian.com/stage/2023/feb/21/the-goat-or-who-is-sylvia-review-claudia-karvan-stars-in-bestiality-comedy-that-loses-itself-in-farce',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/the-goat-or-who-is-sylvia/' },
      { label: 'Official Goodman show-art asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/08/Goat_ShowArt_900x600-900x600.png' },
      { label: 'Official Goodman title-treatment asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/08/Goat_TitleTreatment-1.png' },
      { label: 'Robert Falls Goodman artist asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/BobFalls_148x148.jpeg' },
      { label: 'Edward Albee Goodman artist asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/AlbeeEdward_288x375.jpg' },
      { label: 'Patrick Clear Goodman artist asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/Patrick-Clear-300x300-1.png' },
      { label: 'Barbara Robertson Goodman artist asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/RobertsonBarbara_288x375.jpg' },
      { label: 'Michael Stahl-David Goodman artist asset', href: 'https://www.goodmantheatre.org/wp-content/uploads/2022/07/StahlDavidMichael_288x375.jpg' },
      { label: 'The Goat, or Who Is Sylvia? background', href: 'https://en.wikipedia.org/wiki/The_Goat,_or_Who_Is_Sylvia%3F' },
      { label: 'Tony Award for Best Play background', href: 'https://en.wikipedia.org/wiki/Tony_Award_for_Best_Play' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-iceman-cometh': {
    pageMode: 'featured',
    summary:
      'The Iceman Cometh is one of the recurring epics in the archive, a Eugene O\'Neill title Falls kept returning to as a test of scale, ensemble stamina, and actor collaboration across Chicago, Dublin, and New York.',
    publicSummary:
      "Falls's major O'Neill revival gathered Brian Dennehy, Nathan Lane, and John Douglas Thompson inside a monumental saloon drama that moved from Goodman to BAM, one of the most thoroughly documented productions in the archive.",
    synopsis:
      'Welcome to Harry Hope\'s saloon, home to a ragtag band of drunks and dreamers who wait for Hickey, the charismatic traveling salesman whose visits usually mean a grand good time. When Hickey arrives sober and newly evangelical about giving up pipe dreams, he throws the room into a devastatingly comic and ultimately heartbreaking reckoning.',
    fallsContext:
      'The Iceman Cometh sits deep inside Falls\'s long Brian Dennehy collaboration and shows how he used O\'Neill not as museum drama but as a living endurance test for actors, audience, and ensemble storytelling. The 2012 Goodman revival, followed by the 2015 BAM engagement, makes the page a record of revisitation rather than a one-off event.',
    significance:
      'A signature Eugene O\'Neill chapter inside the Falls/Brian Dennehy collaboration and one of the archive\'s clearest examples of long-form revisitation, large-canvas ensemble direction, and Chicago-to-New York afterlife.',
    story:
      'Starting at the Goodman in 1990, resurfacing in Dublin in 1992, then returning in a major 2012 Chicago revival that moved to BAM in 2015, The Iceman Cometh tracks how Falls kept coming back to O\'Neill as a scale test, an actor engine, and a reputation-making text. The folder makes that evolution unusually visible: official copy, review links, critic pull quotes, roster cards, and a deep image set all point to a production treated not just as a revival but as an event.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: icemanShowArt,
        alt: 'Brian Dennehy and Nathan Lane face one another in the saloon in the show art for The Iceman Cometh.',
        caption: 'Show art foregrounding the Dennehy-Lane duel at the center of Falls\'s revival.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: iceman1,
        alt: 'Brian Dennehy confronts Nathan Lane in a tense saloon exchange from The Iceman Cometh.',
        caption: 'A confrontation still that captures the production\'s bruising Dennehy-Lane center.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: iceman2,
        alt: 'Brian Dennehy stands at the bar while Nathan Lane appears in the doorway behind him.',
        caption: 'Falls stages Hickey\'s return like a disturbance already rippling through the room.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: iceman3,
        alt: 'The saloon ensemble gathers in a wide production still from The Iceman Cometh.',
        caption: 'A wide Goodman still that shows the production\'s packed room of drinkers, hangers-on, and broken hopes.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: iceman4,
        alt: 'A large ensemble scene unfolds around a long table in The Iceman Cometh.',
        caption: 'An ensemble-heavy still that emphasizes the production\'s scale and crowded social world.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: iceman5,
        alt: 'Brian Dennehy sits at a table with Nathan Lane in a quiet barroom scene from The Iceman Cometh.',
        caption: 'A more intimate Goodman image of Dennehy and Lane in close, exhausted conversation. Photo: Liz Lauren.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: icemanBam1,
        alt: 'Nathan Lane raises his hand as members of the BAM ensemble watch from the saloon floor.',
        caption: 'One of the BAM production stills, showing Hickey working the room as performance and provocation.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: icemanBam2,
        alt: 'Nathan Lane reaches upward while two other actors watch in a BAM production still from The Iceman Cometh.',
        caption: 'A BAM close-up that turns Hickey into a preacher, salesman, and destabilizing ringmaster at once.',
        orientation: 'square',
        kind: 'production-still',
      },
      {
        src: icemanBam3,
        alt: 'Three members of the ensemble sit around a table laughing in a BAM scene from The Iceman Cometh.',
        caption: 'A smaller BAM scene that keeps the play\'s ribald humor alive inside the production\'s darker world.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: icemanBam4,
        alt: 'Four men sit and stand around a table in the saloon in a BAM production still.',
        caption: 'Another BAM ensemble still, emphasizing the worn room and the production\'s patient group dynamics.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Eugene O\'Neill' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Brian Dennehy' },
      { role: 'Cast highlight', name: 'Nathan Lane' },
      { role: 'Cast highlight', name: 'John Douglas Thompson' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Apr 21 - Jun 17, 2012' },
      { label: 'Venue', value: 'Albert Theatre, Goodman Theatre' },
      { label: 'Runtime', value: '4 hr 45 min, including 3 intermissions' },
      { label: 'Afterlife', value: 'Brooklyn Academy of Music, 2015' },
    ],
    cast: [
      { role: 'Don Parritt', name: 'Patrick Andrews' },
      { role: 'Cora', name: 'Kate Arrington' },
      { role: 'Larry Slade', name: 'Brian Dennehy' },
      { role: 'Chuck Morello', name: 'Marc Grapey' },
      { role: 'Jimmy Tomorrow', name: 'James Harms' },
      { role: 'Willie Oban', name: 'John Hoogenakker' },
      { role: 'Rocky Pioggi', name: 'Salvatore Inzerillo' },
      { role: 'Pete Wetjoen', name: 'John Judd' },
      { role: 'Hickey', name: 'Nathan Lane' },
      { role: 'Moran', name: 'Loren Lazerine' },
      { role: 'Ed Mosher', name: 'Larry Neumann Jr.' },
      { role: 'Harry Hope', name: 'Stephen Ouimette' },
      { role: 'Cecil Lewis', name: 'John Reeger' },
      { role: 'Pearl', name: 'Tara Sissom' },
      { role: 'Margie', name: 'Lee Stark' },
      { role: 'Joe Mott', name: 'John Douglas Thompson' },
      { role: 'Lieb', name: 'Bret Tuomi' },
      { role: 'Hugo Kalmar', name: 'Lee Wilkof' },
    ],
    creativeTeam: [
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Playwright', name: 'Eugene O\'Neill' },
      { role: 'Scenic Design', name: 'Kevin Depinet' },
      { role: 'Costume Design', name: 'Merrily Murray-Walsh' },
      { role: 'Lighting Design', name: 'Natasha Katz' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Production Stage Manager', name: 'Joseph Drummond' },
      { role: 'Stage Manager', name: 'Alden J. Vasquez' },
      { role: 'Stage Manager', name: 'Claire E. Zawa' },
    ],
    recognition: [
      {
        label: 'Long-arc revisitation',
        detail: 'Timeline entries track the production from Goodman in 1990 to Dublin in 1992, back to Chicago in 2012, and onward to BAM in 2015, making it one of the archive\'s clearest examples of Falls returning to the same title across decades.',
      },
      {
        label: 'Dennehy-Lane center',
        detail: "Coverage of the 2012 revival consistently frames Brian Dennehy and Nathan Lane as the production's gravitational force, with John Douglas Thompson and the wider ensemble close behind.",
      },
      {
        label: 'Jeff context',
        detail: 'A 2012 Jeff Award is connected to The Iceman Cometh, underscoring how strongly the Chicago return landed.',
      },
      {
        label: 'Critical spread',
        detail: 'The folder preserves praise and review links from Chicago, New York, and national outlets, showing the production sustained attention well beyond a single local run.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Decades-long return',
        detail: 'Few titles in the archive show this kind of repeated attention: Goodman 1990, Dublin 1992, Goodman 2012, and BAM 2015.',
      },
      {
        label: 'Major O\'Neill ensemble',
        detail: 'Falls anchored the revival around Brian Dennehy, Nathan Lane, John Douglas Thompson, and a deep supporting cast built for marathon dramatic pressure.',
      },
      {
        label: 'Chicago to New York',
        detail: 'Surviving documentation ties the Goodman event directly to the later BAM life of the production through stills, reviews, and a video excerpt.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/the-iceman-cometh/',
        summary:
          'The official Goodman page supplies the preserved run dates, runtime, and house synopsis for the 2012 Albert Theatre revival.',
        note: 'Official production page',
      },
      {
        source: 'The New York Times',
        href: 'https://www.nytimes.com/2015/02/13/theater/review-the-iceman-cometh-revived-with-nathan-lane-and-brian-dennehy.html',
        summary:
          'The folder links directly to New York Times review coverage of the BAM engagement, extending the page beyond Chicago into the production\'s New York reception.',
        note: 'BAM review',
      },
      {
        source: 'Variety',
        href: 'https://variety.com/2015/legit/reviews/iceman-cometh-review-nathan-lane-bam-1201432373/',
        summary:
          'Variety is part of the preserved BAM review spread and is also quoted in the local critical-praise screenshot.',
        note: 'BAM review',
      },
      {
        source: 'Exeunt NYC',
        href: 'https://exeuntnyc.com/reviews/the-iceman-cometh/',
        summary:
          'One of the New York reviews of the Brooklyn run.',
        note: 'Review',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2012/05/03/review-the-iceman-comethgoodman-theatre/',
        summary:
          'Chicago review coverage of the Goodman production.',
        note: 'Review',
      },
      {
        source: 'Theatre In Chicago',
        href: 'https://www.theatreinchicago.com/the-iceman-cometh/5017/',
        summary:
          'Theatre In Chicago\'s listing and review hub for the Goodman staging.',
        note: 'Chicago review hub',
      },
      {
        source: 'Talkin\' Broadway',
        href: 'https://www.talkinbroadway.com/page/regional/chicago/ch395.html',
        summary:
          'Regional Chicago review coverage of the production.',
        note: 'Review',
      },
      {
        source: 'USA Today',
        href: 'https://www.usatoday.com/story/life/theater/2015/02/12/the-iceman-cometh-brooklyn-academy-of-music-review/23283953/',
        summary:
          'National review coverage of the BAM transfer, confirming the production\'s reach beyond the Chicago run.',
        note: 'BAM review',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/the-iceman-cometh/' },
      { label: 'New York Times review', href: 'https://www.nytimes.com/2015/02/13/theater/review-the-iceman-cometh-revived-with-nathan-lane-and-brian-dennehy.html' },
      { label: 'New York Times video excerpt', href: 'https://www.nytimes.com/video/theater/100000001525848/excerpt-the-iceman-cometh.html?smid=url-share' },
      { label: 'Variety review', href: 'https://variety.com/2015/legit/reviews/iceman-cometh-review-nathan-lane-bam-1201432373/' },
      { label: 'Exeunt NYC review', href: 'https://exeuntnyc.com/reviews/the-iceman-cometh/' },
      { label: 'Theatre In Chicago review hub', href: 'https://www.theatreinchicago.com/the-iceman-cometh/5017/' },
      { label: 'Newcity Stage review', href: 'https://www.newcitystage.com/2012/05/03/review-the-iceman-comethgoodman-theatre/' },
      { label: 'Talkin\' Broadway review', href: 'https://www.talkinbroadway.com/page/regional/chicago/ch395.html' },
      { label: 'TheaterMania announcement', href: 'https://www.theatermania.com/news/nathan-lane-and-brian-dennehy-to-star-in-robert-falls-directed-the-iceman-cometh_66965/' },
      { label: 'Hollywood Reporter mention', href: 'https://www.hollywoodreporter.com/news/general-news/nathan-lane-iceman-cometh-theater-772744/' },
      { label: 'Playbill BAM opening item', href: 'https://playbill.com/article/oneill-epic-the-iceman-cometh-with-nathan-lane-and-brian-dennehy-opens-at-bam-com-341515' },
      { label: 'BroadwayWorld BAM review', href: 'https://www.broadwayworld.com/brooklyn/article/BWW-Reviews-Falls-THE-ICEMAN-COMETH-a-Superlative-and-Sensitive-Production-20150216' },
      { label: 'USA Today review', href: 'https://www.usatoday.com/story/life/theater/2015/02/12/the-iceman-cometh-brooklyn-academy-of-music-review/23283953/' },
      { label: 'Johns Hopkins review PDF', href: 'https://muse.jhu.edu/pub/2/article/594496/pdf' },
      { label: 'Backstage feature', href: 'https://www.backstage.com/magazine/article/robert-falls-brian-dennehy-team-iceman-cometh-53876/' },
    ],
    watchLinks: [
      {
        label: 'The Iceman Cometh | NYT Video Excerpt',
        href: 'https://www.nytimes.com/video/theater/100000001525848/excerpt-the-iceman-cometh.html?smid=url-share',
        description: 'A video excerpt from the BAM production.',
        thumbnail: icemanShowArt,
      },
    ],
    pressQuotes: [
      {
        quote: '3 1/2 stars (out of 4)',
        source: 'Chicago Tribune',
      },
      {
        quote: 'No matter how far you have to go to get there, the place to be right now is Chicago',
        source: 'The Wall Street Journal',
      },
      {
        quote: 'A volcanic production',
        source: 'Variety',
      },
      {
        quote: 'Epic',
        source: 'Chicago Tribune',
      },
      {
        quote: 'Dennehy undertakes an evening-long struggle with himself that\'s riveting to watch',
        source: 'Time Out Chicago',
      },
      {
        quote: 'A series of sudden, breathtaking punches to the gut, with moments of piercing emotion',
        source: 'The New York Times',
      },
      {
        quote: 'Extraordinary... a masterpiece',
        source: 'The Wall Street Journal',
      },
      {
        quote: 'Lane brings out qualities in Hickey that perhaps no other actor could highlight as effectively',
        source: 'Variety',
      },
      {
        quote: 'Nathan Lane excels in Goodman\'s gorgeously dark The Iceman Cometh',
        source: 'Chicago Sun-Times',
      },
      {
        quote: 'Space forbids me from giving full due to all of the worthy performances',
        source: 'The New York Times',
      },
      {
        quote: 'Mr. Lane gives a performance that will stay with you for as long as you live',
        source: 'The Wall Street Journal',
      },
      {
        quote: 'An intense ensemble of actors whose demons rage before you',
        source: 'Chicago Tribune',
      },
      {
        quote: 'Gorgeously realized, crystal clear [and] meticulously cast',
        source: 'Chicago Sun-Times',
      },
    ],
    contextNotes: [
      {
        label: 'Title note',
        text: 'The 2015 BAM engagement circulated under a slightly different title and company label from the original Goodman run. The synopsis and run information here reflects the Goodman 2012 production, which was the basis for the BAM staging.',
      },
      {
        label: 'Production history',
        text: 'Timeline data places this page inside a much longer Iceman history for Falls: an original Goodman staging in 1990, a 1992 Abbey Theatre remount in Dublin, the major 2012 Goodman revival, and the 2015 BAM engagement.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  '2666': {
    pageMode: 'featured',
    summary:
      "2666 captures Falls at his most structurally audacious: a five-part, five-and-a-half-hour Goodman world premiere that turns Roberto Bolano's vast novel into a piece of marathon ensemble theatre.",
    publicSummary:
      "Falls and Seth Bockley adapt Roberto Bolano's monumental novel into a five-part Goodman event, using a 15-actor Chicago ensemble to carry nearly 80 roles through a dark, sprawling theatrical epic.",
    synopsis:
      "Across Europe, Mexico, and the United States, critics, academics, detectives, journalists, and drifters circle art, violence, and disappearance in a fractured journey through the modern world. The stage version treats the novel not as a single plot machine but as a five-part accumulation of stories, atmospheres, and moral shocks.",
    fallsContext:
      '2666 belongs in the featured tier because it condenses several defining Falls instincts into one title at once: literary adaptation, extreme duration, large-canvas ensemble staging, and Goodman-backed appetite for risk.',
    significance:
      "A major late-career world premiere and one of the most formally ambitious productions anywhere in the archive, notable for its scale, multimedia language, and the sheer difficulty of translating Bolano's novel to the stage.",
    story:
      "2666 was treated as an event, not simply another slot in a season. Official materials describe a world-premiere special event with an all-Chicago ensemble of 15 actors playing nearly 80 roles across a five-part multimedia production shaped by video, projections, underscoring, and original music. That scale matters to Falls's archive because it shows him using theatrical accumulation as the point: the adaptation does not shrink Bolano down to polite prestige drama, it leans into excess, duration, and the instability of moving between continents, stories, and registers. Even beside other ambitious late-career titles, 2666 reads like a wager on what an institutional theatre can still dare to build.",
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: image2666Wide,
        alt: 'A wide stage image from 2666, with multiple performers arranged across a luminous scenic wall.',
        caption: "A wide still that shows the production's scale, fragmentation, and dense stage picture.",
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: image2666House,
        alt: 'A lone figure stands in a sparse house-like set in 2666.',
        caption: "One of the production's quieter stills, giving the page a counterweight to the more crowded ensemble scenes.",
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: image2666Bar,
        alt: 'Performers gather in a saturated nightlife setting in 2666.',
        caption: "A vivid still from one of the production's neon-lit social environments.",
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: image2666Ensemble,
        alt: 'An ensemble scene from 2666 unfolds beneath bold lighting and scenic color.',
        caption: "An ensemble image that foregrounds the adaptation's theatrical velocity rather than a single star turn.",
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: image2666Portrait,
        alt: 'A stark character image from 2666 focuses on a single performer in blue light.',
        caption: 'A more isolated, character-led frame from the Goodman staging.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: image2666Goodman,
        alt: 'A scene from 2666 with the ensemble onstage at the Goodman Theatre.',
        caption: 'Production still from 2666 at Goodman Theatre. Photo via Goodman Theatre.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: image2666ShowArt,
        alt: 'Official 2666 show art with the title cracked across a red field.',
        caption: 'Official Goodman show art for the world-premiere event.',
        orientation: 'landscape',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Novelist', name: 'Roberto Bolano' },
      { role: 'Co-adapter / director', name: 'Robert Falls' },
      { role: 'Co-adapter', name: 'Seth Bockley' },
      { role: 'Cast highlight', name: 'Henry Godinez' },
      { role: 'Cast highlight', name: 'Janet Ulrich Brooks' },
      { role: 'Cast highlight', name: 'Sandra Delgado' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Feb 6 - Mar 13, 2016' },
      { label: 'Venue', value: 'Owen Theatre, Goodman Theatre' },
      { label: 'Runtime', value: '5 hr 30 min' },
      { label: 'Scale', value: '15 actors, nearly 80 roles' },
    ],
    cast: [
      { role: 'Ensemble', name: 'Charin Alvarez' },
      { role: 'Ensemble', name: 'Janet Ulrich Brooks' },
      { role: 'Ensemble', name: 'Yadira Correa' },
      { role: 'Ensemble', name: 'Sandra Delgado' },
      { role: 'Ensemble', name: 'Sean Fortunato' },
      { role: 'Ensemble', name: 'Henry Godinez' },
      { role: 'Ensemble', name: 'Lawrence Grimm' },
      { role: 'Ensemble', name: 'Eric Lynch' },
      { role: 'Ensemble', name: 'Mark L. Montgomery' },
      { role: 'Ensemble', name: 'Juan F. Villa' },
      { role: 'Ensemble', name: 'Jonathan Weir' },
      { role: 'Ensemble', name: 'Nicole Wiesner' },
    ],
    creativeTeam: [
      { role: 'Based on the novel by', name: 'Roberto Bolano' },
      { role: 'Adapted and directed by', name: 'Robert Falls' },
      { role: 'Co-adapted by', name: 'Seth Bockley' },
      { role: 'Scenic Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Aaron Spivey' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Original Music / underscoring', name: 'Mikhail Fiksel' },
      { role: 'Projection Design', name: 'Shawn Sagady' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Dramaturgy', name: 'Tanya Palmer' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Casting', name: 'Erica Sartini-Combs' },
      { role: 'Production Stage Manager', name: 'Alden J. Vasquez' },
      { role: 'Stage Manager', name: 'Joseph Drummond' },
    ],
    recognition: [
      {
        label: 'World-premiere event',
        detail: 'Goodman billed the production as a world-premiere special event rather than routine repertory.',
      },
      {
        label: 'Marathon adaptation',
        detail: "The five-and-a-half-hour runtime and five-part structure make it one of the archive's clearest examples of scale as artistic strategy.",
      },
      {
        label: 'Large ensemble engine',
        detail: 'Official materials highlight a 15-actor Chicago ensemble covering nearly 80 roles across the adaptation.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Bolano at full size',
        detail: 'Instead of sanding the novel into a compact prestige drama, the staging embraces duration, fragmentation, and geographic sprawl.',
      },
      {
        label: 'A Goodman risk worth foregrounding',
        detail: 'The page documents a late-career Goodman production built around institutional ambition: length, multimedia design, and a difficult source text.',
      },
      {
        label: 'Ensemble over iconography',
        detail: 'The strongest surviving materials emphasize group motion, scenic worlds, and theatrical pressure rather than a single marquee performance.',
      },
    ],
    contextNotes: [
      {
        label: 'Adaptation context',
        text: "2666 sits alongside titles like The Seagull, The Cherry Orchard, and The Iceman Cometh as part of the archive's record of Falls working at literary and structural scale.",
      },
      {
        label: 'Credit normalization',
        text: 'Where local materials listed broad ensemble rosters instead of character assignments, the page preserves that structure rather than inventing role breakdowns.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/2666-2/',
        summary:
          'The official production page frames 2666 as a world-premiere special event and preserves the house synopsis, run dates, and scale of the adaptation.',
        note: 'Official production page',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2016/2/17/18472099/labyrinthine-voyage-through-2666-a-bravura-feat-at-goodman-theatre',
        summary:
          'Sun-Times coverage positions the production as a bravura feat, matching the Goodman framing of 2666 as an undertaking of unusual theatrical ambition.',
        note: 'Chicago review',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2016/02/17/review-2666goodman-theatre/',
        summary:
          "Newcity treats the Goodman staging as one of the city's most demanding and rewarding live events, underscoring its status as a theatrical event rather than routine adaptation.",
        note: 'Chicago review',
      },
      {
        source: 'Stage and Cinema',
        href: 'https://stageandcinema.com/2016/02/18/2666-goodman/',
        summary:
          'Another contemporary Chicago response to the production.',
        note: 'Chicago review',
      },
      {
        source: 'Electric Literature',
        href: 'https://electricliterature.com/robert-bolanos-epic-2666-is-now-a-five-hour-play/',
        summary:
          "Electric Literature focuses on the cultural novelty of moving Bolano's giant novel onto the stage and helps situate the production beyond Chicago theatre coverage.",
        note: 'Adaptation context',
      },
      {
        source: 'The Millions',
        href: 'https://themillions.com/2016/03/confining-roberto-bolanos-2666-to-the-stage.html',
        summary:
          'A literary response that helps frame the adaptation question itself: what is gained and lost when a giant novel is compressed into live performance.',
        note: 'Adaptation context',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/2666-2/' },
      { label: 'Goodman press room', href: 'https://www.goodmantheatre.org/press-rooms/2666-2/' },
      { label: 'New York Times video excerpt', href: 'https://www.nytimes.com/video/theater/100000004212620/excerpt-2666.html' },
      { label: 'Theatre In Chicago listing', href: 'https://www.theatreinchicago.com/2666/8313/' },
      { label: 'Chicago magazine feature', href: 'https://www.chicagomag.com/chicago-magazine/february-2016/goodman-theatre-2666/' },
      { label: 'HowlRound essay', href: 'https://howlround.com/women-and-men-robert-falls-2666' },
    ],
    watchLinks: [
      {
        label: '2666 | New York Times excerpt',
        href: 'https://www.nytimes.com/video/theater/100000004212620/excerpt-2666.html',
        description: 'Preserved video excerpt from the Goodman production.',
        thumbnail: image2666ShowArt,
      },
    ],
    pressQuotes: [
      {
        quote: 'Equal parts madness, magic and luminous artistic genius.',
        source: 'Chicago Sun-Times',
      },
      {
        quote: 'The most challenging and rewarding theatrical event currently happening in our city.',
        source: 'Newcity',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'luna-gale': {
    pageMode: 'featured',
    summary:
      'Luna Gale is the fourth Rebecca Gilman world premiere Falls directed at the Goodman, a gripping custody drama that drew some of the strongest reviews of his late career and transferred intact, cast and all, to Los Angeles within the year.',
    publicSummary:
      'A veteran social worker\'s custody decision exposes a family\'s hidden past in Rebecca Gilman\'s acclaimed drama, which moved from its sold-out Goodman premiere to a celebrated Los Angeles run.',
    synopsis:
      'Caroline, a veteran Cedar Rapids social worker, thinks she has a typical case when she meets Peter and Karlie, two teenage drug addicts accused of neglecting their infant daughter, Luna Gale. When Caroline places the baby in the care of Karlie\'s mother, Cindy, an evangelical Christian, she sparks a family conflict that exposes a shadowy past and forces her toward a risky decision with life-altering consequences.',
    fallsContext:
      'Luna Gale was the fourth Rebecca Gilman script Falls staged, continuing a playwright-director partnership that runs from Blue Surge and Dollhouse through Soups, Stews, and Casseroles: 1976 and Swing State. It is also one of the cleanest examples in the archive of a Goodman world premiere making a full, cast-intact leap to another market.',
    significance:
      'A 2014 Goodman world premiere that became one of the most acclaimed productions of Falls\'s later career, drawing high marks across nearly every major Chicago outlet before transferring with its original Chicago cast and creative team to Center Theatre Group\'s Kirk Douglas Theatre in Los Angeles that same year.',
    story:
      'Luna Gale\'s archive record is unusually clean: a world premiere, a near-unanimous wave of strong Chicago notices, and then a full transfer that carried the same director, the same star (Mary Beth Fisher as Caroline), and the same design team to Los Angeles, where it drew another round of strong reviews from the Los Angeles Times, the Hollywood Reporter, and LA Weekly. Todd Rosenthal\'s revolving turntable set, which let the action move between Caroline\'s office, a hospital room, a daycare center, and a church without a pause, became one of the most-discussed design elements in either city\'s coverage. The production also reinforced how durable the Falls/Gilman partnership had become by 2014: critics on both coasts noted this was already the fourth Gilman play Falls had directed, and reviewers consistently singled out Fisher\'s performance as some of the best work of her career.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: lunaGaleShowArt,
        alt: 'Caroline, a social worker, stands holding a folder in a brightly decorated daycare-center set for Luna Gale.',
        caption: 'Mary Beth Fisher as Caroline in the Goodman production\'s daycare-center set.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: lunaGalePoster,
        alt: 'Luna Gale key art: a close-up of a baby\'s face beside the title and Robert Falls\'s directing credit.',
        caption: 'Official Goodman key art for the world premiere.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: lunaGaleLaPoster,
        alt: 'Luna Gale key art for the Kirk Douglas Theatre transfer, labeled as the Goodman Theatre world premiere production.',
        caption: 'Key art for the Center Theatre Group run at the Kirk Douglas Theatre, crediting it as the Goodman\'s world-premiere production.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: lunaGale5,
        alt: 'Caroline sits with Cliff and Lourdes in an office scene beside a vending machine in Luna Gale.',
        caption: 'Mary Beth Fisher (Caroline), Erik Hellman (Cliff), and Melissa Francesca DuPrey (Lourdes) at the Goodman.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: lunaGale6,
        alt: 'Caroline leans over a desk cluttered with case files while Cliff sits across from her.',
        caption: 'Caroline and her supervisor, Cliff, in one of the production\'s case-review scenes.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: lunaGale4,
        alt: 'Peter, in work overalls, faces off with Karlie, in a daycare-uniform polo, in a tense exchange.',
        caption: 'Colin Sphar (Peter) and Reyna de Courcy (Karlie) at the Goodman.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: lunaGale2,
        alt: 'Peter and Karlie sit slumped in waiting-room chairs beneath a framed motivational poster.',
        caption: 'Peter and Karlie waiting in Caroline\'s office, beneath the production\'s ironic "Perseverance" poster.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: lunaGale1,
        alt: 'Peter holds an infant car seat in a colorful daycare-center set as Cindy stands in the background.',
        caption: 'Colin Sphar (Peter) with Luna\'s car seat, as Jordan Baker (Cindy) looks on.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: lunaGale3,
        alt: 'Cliff sits alone reading a case file folder in an office.',
        caption: 'Erik Hellman as Cliff, Caroline\'s supervisor, reviewing the case file at the center of the play.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: lunaGaleLa1,
        alt: 'Peter and Karlie sit together in a quieter moment in the Kirk Douglas Theatre production.',
        caption: 'Colin Sphar and Reyna de Courcy reprising their roles at the Kirk Douglas Theatre. Photo by Craig Schwartz.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: lunaGaleLa2,
        alt: 'Peter holds the infant car seat alone onstage at the Kirk Douglas Theatre.',
        caption: 'Colin Sphar as Peter in the Los Angeles transfer. Photo by Craig Schwartz.',
        orientation: 'portrait',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Mary Beth Fisher' },
      { role: 'Cast highlight', name: 'Colin Sphar' },
      { role: 'Cast highlight', name: 'Reyna de Courcy' },
    ],
    quickFacts: [
      { label: 'World premiere', value: 'Jan 18 - Feb 23, 2014, Albert Theatre' },
      { label: 'LA transfer', value: 'Through Dec 21, 2014, Kirk Douglas Theatre' },
      { label: 'Runtime', value: '2 hr 15 min, one intermission' },
      { label: 'Gilman collaboration', value: 'Falls\'s fourth Gilman premiere' },
    ],
    cast: [
      { role: 'Caroline', name: 'Mary Beth Fisher' },
      { role: 'Peter', name: 'Colin Sphar' },
      { role: 'Karlie', name: 'Reyna de Courcy' },
      { role: 'Cliff', name: 'Erik Hellman' },
      { role: 'Cindy', name: 'Jordan Baker' },
      { role: 'Lourdes', name: 'Melissa Francesca DuPrey' },
      { role: 'Pastor Jay', name: 'Richard Thieriot' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Rebecca Gilman' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Todd Rosenthal' },
      { role: 'Costume Design', name: 'Kaye Voyce' },
      { role: 'Lighting Design', name: 'Robert Wierzel' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Production Stage Manager', name: 'Joseph Drummond' },
    ],
    recognition: [
      {
        label: 'Near-unanimous Chicago reception',
        detail: 'Chicago Tribune, Sun-Times, Reader, Time Out Chicago, and most other Chicago outlets rated the world premiere "Highly Recommended."',
      },
      {
        label: 'Fourth Gilman collaboration',
        detail: 'Multiple reviewers, including the Chicago Reader and Hollywood Reporter, noted this was the fourth Gilman script Falls had directed, underscoring the depth of the partnership.',
      },
      {
        label: 'Cast-intact transfer',
        detail: 'The production transferred to Center Theatre Group\'s Kirk Douglas Theatre in Los Angeles with its Chicago cast, director, and design team intact.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'A design talking point',
        detail: 'Todd Rosenthal\'s revolving turntable set, which moved the action between half a dozen detailed rooms without pausing the story, was singled out by critics in both Chicago and Los Angeles.',
      },
      {
        label: 'A signature Fisher performance',
        detail: 'The Chicago Tribune wrote that it had "never seen Fisher create so moving a character," and Los Angeles critics echoed the praise for her performance in the transfer.',
      },
    ],
    contextNotes: [
      {
        label: 'Source dating',
        text: 'Some records label this Goodman engagement "2013," but the production ran Jan. 18-Feb. 23, 2014; this page uses the actual performance dates.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/luna-gale/',
        summary: 'The official page frames the play around Caroline\'s custody decision and Gilman\'s reputation for writing work that "reaches the heart and head with equal force" (Time).',
        note: 'Official production page',
      },
      {
        source: 'Chicago Tribune',
        href: 'http://www.chicagotribune.com/entertainment/theater/chi-luna-gale-review-goodman,0,7676292.column?track=rss',
        summary: 'Chris Jones called a prayer scene "quite breathtaking" and praised Fisher for doing "some of the best work of her career" opposite Falls\'s staging.',
        note: 'Highly Recommended',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'http://www.suntimes.com/entertainment/stage/25216745-421/rebecca-gilmans-luna-gale-offers-ray-of-hope-in-difficult-circumstances.html',
        summary: 'Hedy Weiss called the play "provocative and impassioned" and centered her review on the question of who is best equipped to care for Luna.',
        note: 'Highly Recommended',
      },
      {
        source: 'Chicago Reader',
        href: 'http://www.chicagoreader.com/chicago/rebecca-gilman-luna-gale-goodman-custody-battle/Content?oid=12275410',
        summary: 'Zac Thompson framed the play around the outsized power child-protective caseworkers hold over families, calling it "gripping" under Falls\'s "efficient direction."',
        note: 'Highly Recommended',
      },
      {
        source: 'Time Out Chicago',
        href: 'http://www.timeoutchicago.com/arts-culture/theater/16544171/luna-gale-at-goodman-theatre-theater-review',
        summary: 'Kris Vire praised Falls for establishing "the perfect rhythm" in a tightly paced staging led by a "terrific ensemble."',
        note: 'Highly Recommended',
      },
      {
        source: 'Chicago Theatre Review',
        href: 'http://www.chicagotheatrereview.com/2014/01/baby-love/',
        summary: 'Colin Douglas called the production "nothing less than remarkable," crediting Todd Rosenthal\'s revolving set and Kaye Voyce\'s costumes.',
        note: 'Highly Recommended',
      },
      {
        source: 'Los Angeles Times',
        href: 'http://www.latimes.com/entertainment/arts/la-et-cm-luna-gale-review-20141204-column.html',
        summary: 'Charles McNulty called the Kirk Douglas transfer "thoroughly absorbing and cracklingly well-acted," urging readers to look past the topical plot to Gilman\'s deeper concerns.',
        note: 'LA transfer review',
      },
      {
        source: 'The Hollywood Reporter',
        href: 'http://www.hollywoodreporter.com/review/luna-gale-theater-review-755618',
        summary: 'Jordan Riefe praised the "sensational" reunion of Fisher and Falls, by then collaborating for the fourth time, calling the production "seamless."',
        note: 'LA transfer review',
      },
      {
        source: 'LA Weekly',
        href: 'http://www.laweekly.com/publicspectacle/2014/12/11/the-plays-luna-gale-and-possum-carcass-look-at-the-consequences-of-making-stuff-up',
        summary: 'Steven Leigh Morris called the play "scintillating" and praised Falls\'s staging of a "superlative ensemble."',
        note: 'LA transfer review',
      },
      {
        source: 'TheatreInChicago',
        href: 'https://www.theatreinchicago.com/luna-gale/6234/',
        summary: 'Aggregates Chicago reviews of the world premiere, with the large majority rated "Highly Recommended."',
        note: 'Review aggregate',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/luna-gale/' },
      { label: 'TheatreInChicago review aggregate (Goodman)', href: 'https://www.theatreinchicago.com/luna-gale/6234/' },
      { label: 'TheatreInLA review aggregate (Kirk Douglas)', href: 'https://www.theatreinla.com/luna-gale/4451/' },
      { label: 'Newcity review', href: 'https://www.newcitystage.com/2014/01/27/review-luna-galegoodman-theatre/' },
      { label: 'Around the Town Chicago review', href: 'http://www.aroundthetownchicago.com/theatre-reviews/luna-gale/' },
      { label: 'Stage and Cinema review (Goodman)', href: 'http://www.stageandcinema.com/2014/01/30/luna-gale-goodman/' },
      { label: 'Stage and Cinema review (Kirk Douglas)', href: 'https://stageandcinema.com/2014/12/03/luna-gale-ctg/' },
      { label: 'ChicagoCritic review', href: 'https://chicagocritic.com/luna-gale/' },
      { label: 'Chicago Tribune on Falls and LA', href: 'https://www.chicagotribune.com/2014/11/28/robert-falls-midwesterner-at-heart-warms-to-la-for-luna-gale/' },
      { label: 'Playbill on the LA opening', href: 'https://playbill.com/article/award-winning-luna-gale-directed-by-robert-falls-opens-in-la-tonight-com-336359' },
      { label: 'HowlRound conversation with Gilman and Falls', href: 'https://howlround.com/happenings/conversation-playwright-rebecca-gilman-director-robert-falls-goodman-theatre' },
    ],
    watchLinks: [
      {
        label: 'Luna Gale | Trailer',
        href: 'https://www.youtube.com/watch?v=kYmLKut8MHQ',
        description: 'Official Goodman trailer for the world premiere.',
        thumbnail: lunaGaleShowArt,
      },
      {
        label: 'Luna Gale | Behind the Scenes',
        href: 'https://www.youtube.com/watch?v=3D1DJAITGk8',
        description: 'Goodman behind-the-scenes feature on the production.',
        thumbnail: lunaGalePoster,
      },
    ],
    pressQuotes: [
      { quote: 'The high-stakes Luna Gale had the Sunday night Goodman audience in its thrall', source: 'Chicago Tribune' },
      { quote: 'Clearly, this writer and this actress, who is doing some of the best work of her career here, are simpatico', source: 'Chicago Tribune' },
      { quote: 'I\'ve never seen Fisher create so moving a character. That\'s really what makes this play so out of the ordinary', source: 'Chicago Tribune' },
      { quote: 'Provocative and impassioned... Fisher is a marvel', source: 'Chicago Sun-Times' },
      { quote: 'Gilman\'s bristling dialogue continually pops', source: 'Chicago Sun-Times' },
      { quote: 'Gilman provides a compelling and compassionate portrait of flawed people making impossible choices', source: 'Chicago Reader' },
      { quote: 'Terrific ensemble... the best work I\'ve seen from Gilman', source: 'Time Out Chicago' },
      { quote: 'Robert Falls\' top-notch production keeps the audience constantly alert and a little on edge', source: 'Entertainment Weekly' },
      { quote: 'Gilman remains a force to be reckoned with', source: 'Entertainment Weekly' },
      { quote: 'Falls\' direction is brisk, straightforward and reflects a master\'s ability to calibrate... the tension in this remarkable, well-written play', source: 'The Daily Herald' },
      { quote: 'Fisher\'s is the kind of exquisitely ambivalent, intelligent performance we\'ve come to expect from this award-winning actress', source: 'The Daily Herald' },
      { quote: 'Hugely entertaining', source: 'Newcity' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-speed-of-darkness': {
    pageMode: 'featured',
    summary:
      'The Speed of Darkness is one of the earliest entries in Falls\'s Goodman-to-Broadway transfer record: a 1989 Steve Tesich world premiere about two Vietnam veterans confronting a buried toxic-waste crime, brought to Broadway\'s Belasco Theatre in 1991.',
    publicSummary:
      'Steve Tesich\'s drama reunites two Vietnam veterans, one a prosperous businessman, the other unraveling, around a buried secret that implicates them both.',
    synopsis:
      'Joe, a successful South Dakota businessman and Vietnam veteran, is reunited with Lou, his old war buddy, now homeless. Lou\'s return forces a reckoning with two buried secrets: that Joe\'s daughter is not biologically his, and that Joe\'s fortune was built on an illegal toxic-waste dumping operation that poisoned the region\'s water supply. The confrontation ends in Lou\'s suicide, leaving Joe to face their shared guilt alone.',
    fallsContext:
      'The Speed of Darkness is one of the clearest early examples of the Goodman-to-Broadway pipeline that would define so much of Falls\'s later career: a Chicago world premiere that traveled to a Broadway house largely intact, well before the larger Dennehy-led transfers of the 1990s and 2000s.',
    significance:
      'A 1989 Goodman world premiere that transferred to Broadway\'s Belasco Theatre in 1991, drawing Tony nominations for featured performances by Stephen Lang and Kathryn Erbe.',
    story:
      'Tesich\'s play sits at the more politically pointed end of Falls\'s Goodman new-work record, using a Vietnam veteran reunion to indict corporate environmental crime years before that subject became a familiar stage and screen theme. The Broadway transfer carried over Stephen Lang from the Goodman company alongside a partly new cast led by Len Cariou, Lisa Eichhorn, and a young Robert Sean Leonard, who would go on to work with Falls again on Long Day\'s Journey Into Night more than a decade later.',
    venueAnchor: 'Belasco Theatre, Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: speedOfDarknessPlaybill,
        alt: 'Playbill cover for The Speed of Darkness at the Belasco Theatre, with a stark black-and-white lightning-bolt design.',
        caption: 'Playbill cover art for the Belasco Theatre engagement.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Steve Tesich' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Stephen Lang' },
      { role: 'Cast highlight', name: 'Len Cariou' },
    ],
    quickFacts: [
      { label: 'Goodman premiere', value: '1989, World premiere' },
      { label: 'Broadway run', value: 'Opened Feb 28, 1991, Belasco Theatre' },
      { label: 'Performances', value: '36 performances' },
      { label: 'Recognition', value: '2 Tony nominations (Featured Actor, Featured Actress)' },
    ],
    cast: [
      { role: 'Joe', name: 'Len Cariou' },
      { role: 'Lou', name: 'Stephen Lang' },
      { role: 'Anne', name: 'Lisa Eichhorn' },
      { role: 'Mary', name: 'Kathryn Erbe' },
      { role: 'Eddie', name: 'Robert Sean Leonard' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Steve Tesich' },
      { role: 'Directed by', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'Tony-nominated cast',
        detail: 'Stephen Lang and Kathryn Erbe each received Tony nominations for their featured performances.',
      },
      {
        label: 'A Goodman-to-Broadway throughline',
        detail: 'Stephen Lang carried over from the 1989 Goodman world premiere into the 1991 Broadway transfer, anchoring the production\'s continuity between the two stagings.',
      },
      {
        label: 'Early transfer marker',
        detail: 'The production predates Falls\'s better-known Broadway transfers with Brian Dennehy and marks an earlier proof point for Goodman-originated work reaching New York.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Public production records identify the play as a 1989 Goodman Theatre world premiere that opened on Broadway at the Belasco Theatre on February 28, 1991 and ran for 36 performances.',
      },
      {
        label: 'Awards record',
        text: 'The Tony Awards archive confirms 1991 featured-performance nominations for Stephen Lang and Kathryn Erbe for The Speed of Darkness.',
      },
      {
        label: 'Archive note',
        text: 'The current project files preserve a Broadway Playbill image but no Goodman production stills, rehearsal images, or local program packet, so this page remains a text-led transfer profile.',
      },
      {
        label: 'Source note',
        text: 'The page separates documented production dates, cast, run length, and Tony nominations from broader interpretive context about Tesich\'s Vietnam-veteran and environmental-crime drama.',
      },
    ],
    externalSources: [
      { label: 'The Speed of Darkness play background', href: 'https://en.wikipedia.org/wiki/The_Speed_of_Darkness_(play)' },
      { label: '1991 Tony Awards nominations', href: 'https://www.tonyawards.com/nominees/year/1991/category/any/show/any/' },
      { label: 'Steve Tesich biography and career context', href: 'https://en.wikipedia.org/wiki/Steve_Tesich' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-rose-tattoo': {
    pageMode: 'featured',
    summary:
      'The Rose Tattoo is Falls\'s 1995 Broadway revival of Tennessee Williams\'s Sicilian-Gulf-Coast comedy-drama, with Mercedes Ruehl and Anthony LaPaglia leading a production that drew a Tony nomination for Best Revival.',
    publicSummary:
      'Tennessee Williams\'s comedy of grief, desire, and Sicilian-American widowhood returns to Broadway with Mercedes Ruehl and Anthony LaPaglia under Falls\'s direction.',
    synopsis:
      'Serafina Delle Rose, a Sicilian-American seamstress on the Gulf Coast, has shut herself away in mourning since learning her late husband was unfaithful. The arrival of Alvaro Mangiacavallo, a buffoonish but tender truck driver who resembles her dead husband, forces Serafina to choose between grief and the possibility of new, imperfect love.',
    fallsContext:
      'The Rose Tattoo extends Falls\'s recurring engagement with Tennessee Williams, alongside his Goodman and Broadway work on The Night of the Iguana, into one of Williams\'s warmer, more comic registers.',
    significance:
      'A 1995 Broadway revival at Circle in the Square starring Mercedes Ruehl and Anthony LaPaglia, nominated for the Tony Award for Best Revival of a Play alongside Drama Desk nominations for both leads.',
    story:
      'Where much of Falls\'s Williams and O\'Neill work leans toward scale and devastation, The Rose Tattoo gave him a chance to direct toward warmth and comic recovery, even as the play keeps grief close at hand throughout. Santo Loquasto\'s scenic design, here as on several other Falls Broadway productions, helped anchor the revival\'s Gulf Coast specificity.',
    venueAnchor: 'Circle in the Square Theatre, Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: roseTattooPlaybill,
        alt: 'Playbill cover for The Rose Tattoo at Circle in the Square Theatre, featuring a black-and-white embrace beneath the Tennessee Williams title treatment.',
        caption: 'Playbill cover art for the Circle in the Square Theatre engagement.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Tennessee Williams' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Mercedes Ruehl' },
      { role: 'Cast highlight', name: 'Anthony LaPaglia' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Mar 23 - Apr 30, 1995' },
      { label: 'Venue', value: 'Circle in the Square Theatre' },
      { label: 'Performances', value: '73 performances' },
      { label: 'Recognition', value: 'Tony nomination, Best Revival of a Play' },
    ],
    cast: [
      { role: 'Serafina Delle Rose', name: 'Mercedes Ruehl' },
      { role: 'Alvaro Mangiacavallo', name: 'Anthony LaPaglia' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Tennessee Williams' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Santo Loquasto' },
      { role: 'Costume Design', name: 'Catherine Zuber' },
      { role: 'Lighting Design', name: 'Kenneth Posner' },
      { role: 'Sound Design', name: 'John Kilgore' },
      { role: 'Dialect Coach', name: 'K.C. Ligon' },
      { role: 'Casting', name: 'Stuart Howard' },
      { role: 'Casting', name: 'Amy Schecter' },
      { role: 'Stage Manager', name: 'Peggy Peterson' },
    ],
    recognition: [
      {
        label: 'Tony and Drama Desk nominations',
        detail: 'The revival earned a Tony nomination for Best Revival of a Play, plus Drama Desk nominations for Ruehl (Outstanding Actress) and LaPaglia (Outstanding Featured Actor).',
      },
      {
        label: 'A Williams revival with a long shadow',
        detail: 'Falls staged a play already marked by a Tony-winning 1951 Broadway premiere and Anna Magnani\'s Oscar-winning 1955 film performance, giving the 1995 revival a deep performance history to answer.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Public production records identify the 1995 Broadway revival as a Circle in the Square Theatre engagement directed by Robert Falls, starring Mercedes Ruehl and Anthony LaPaglia, and running March 23-April 30 for 73 performances.',
      },
      {
        label: 'Awards record',
        text: 'The Tony Awards archive confirms The Rose Tattoo as a 1995 nominee for Revival (Play), produced by Circle in the Square Theatre, Theodore Mann, Josephine R. Abady, and Robert Bennett.',
      },
      {
        label: 'Performance context',
        text: 'A New Yorker profile focused on Mercedes Ruehl\'s Serafina and the physical and emotional demands of building the role quickly for the Circle in the Square staging.',
      },
      {
        label: 'Play history',
        text: 'Williams wrote the role of Serafina with Anna Magnani in mind; Magnani declined the original Broadway production but later won the Academy Award for the 1955 film adaptation.',
      },
      {
        label: 'Archive note',
        text: 'The current project files preserve a Broadway Playbill image but no production stills, rehearsal images, or local review packet, so this page remains a text-led revival profile rather than a gallery-heavy feature.',
      },
      {
        label: 'A later, unrelated revival',
        text: 'A third Broadway revival of The Rose Tattoo, starring Marisa Tomei, opened at the American Airlines Theatre in 2019 directed by Trip Cullman - not Robert Falls. An earlier site record had misattributed that production to Falls; it has been removed from his credits.',
      },
    ],
    externalSources: [
      { label: 'The Rose Tattoo play and production background', href: 'https://en.wikipedia.org/wiki/The_Rose_Tattoo' },
      { label: '1995 Tony Awards nominations', href: 'https://www.tonyawards.com/nominees/year/1995/category/any/show/any/' },
      { label: 'The New Yorker profile of Mercedes Ruehl', href: 'https://www.newyorker.com/magazine/1995/06/05/wild-rose' },
      { label: '1955 film adaptation background', href: 'https://en.wikipedia.org/wiki/The_Rose_Tattoo_(film)' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-night-of-the-iguana': {
    pageMode: 'featured',
    summary:
      'The Night of the Iguana carried Falls\'s 1994 Goodman staging of Tennessee Williams\'s drama to Broadway in 1996, with William Petersen, Marsha Mason, and Cherry Jones leading a defrocked-priest story of breakdown and reluctant grace.',
    publicSummary:
      'A defrocked minister, a stranded tour group, and two women offering very different kinds of rescue collide at a rundown Mexican hotel in Tennessee Williams\'s drama, staged by Falls first at the Goodman and then on Broadway.',
    synopsis:
      'Reverend T. Lawrence Shannon, defrocked and reduced to leading disreputable bus tours, brings a group of stranded schoolteachers to a run-down hotel on the Mexican coast run by his old friend Maxine. There he is drawn toward Hannah Jelkes, an itinerant painter traveling with her elderly poet grandfather, in a long night that tests Shannon\'s remaining capacity for faith, restraint, and connection.',
    fallsContext:
      'The Night of the Iguana extends Falls\'s recurring Tennessee Williams thread, and like several of his strongest transfers, it moved from a fully realized Goodman staging to Broadway with much of its original creative vision intact, anchored by William Petersen, then a rising Chicago stage actor not yet known nationally for CSI.',
    significance:
      'A 1994 Goodman Theatre staging that transferred to Broadway\'s Criterion Center Stage Right (Roundabout Theatre Company) in 1996, with Marsha Mason and Cherry Jones joining Petersen for the New York run.',
    story:
      'Williams\'s play, drawn from his own short story, gave Falls another opportunity to direct at the intersection of comedy, spiritual exhaustion, and survival that runs through much of his Williams and O\'Neill work. The Roundabout-produced Broadway transfer carried the production from the Goodman\'s Chicago staging into a 69-performance limited run, with Cherry Jones\'s Hannah singled out in period coverage as a highlight of the New York engagement.',
    venueAnchor: 'Goodman Theatre and Criterion Center Stage Right, Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: nightOfTheIguanaPlaybill,
        alt: 'Playbill cover for The Night of the Iguana at Criterion Center Stage Right, with a black-and-white illustration of a man reclining in a hammock tended by a woman.',
        caption: 'Playbill cover art for the Broadway engagement, produced by the Roundabout Theatre Company.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Tennessee Williams' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'William Petersen' },
      { role: 'Cast highlight', name: 'Cherry Jones' },
    ],
    quickFacts: [
      { label: 'Goodman run', value: '1994' },
      { label: 'Broadway run', value: '1996, Criterion Center Stage Right' },
      { label: 'Producer', value: 'Roundabout Theatre Company' },
      { label: 'Performances', value: '69 performances' },
    ],
    cast: [
      { role: 'Rev. T. Lawrence Shannon', name: 'William Petersen' },
      { role: 'Maxine Faulk', name: 'Marsha Mason' },
      { role: 'Hannah Jelkes', name: 'Cherry Jones' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Tennessee Williams' },
      { role: 'Directed by', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'A Goodman-to-Broadway transfer',
        detail: 'The production carried Falls\'s Goodman staging to Broadway, with William Petersen anchoring the transfer as Shannon and Marsha Mason and Cherry Jones joining the New York company.',
      },
      {
        label: 'Williams in the transfer years',
        detail: 'The production sits between Falls\'s early Goodman classics and his later Broadway revivals, showing his Williams work becoming part of the same Chicago-to-New York pattern as his O\'Neill projects.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Public production records identify the 1996 Broadway revival as a Robert Falls staging with William Petersen as Shannon, Marsha Mason as Maxine, and Cherry Jones as Hannah, based on Falls\'s 1994 Goodman Theatre production.',
      },
      {
        label: 'Roundabout context',
        text: 'The Roundabout Theatre Company production history lists The Night of the Iguana among its 1996 Criterion Center Stage Right productions, placing the transfer inside Roundabout\'s active 1990s Broadway revival program.',
      },
      {
        label: 'Play history',
        text: 'Williams developed the material from his 1948 short story into a full-length play that premiered on Broadway in 1961 and later became a major 1964 John Huston film, so Falls was staging a text with unusually layered stage and screen memory.',
      },
      {
        label: 'Archive note',
        text: 'The current project files preserve a Broadway Playbill image but no Goodman production stills, rehearsal images, or local program packet, so the page remains a text-led transfer profile rather than a photo-rich production gallery.',
      },
      {
        label: 'Source note',
        text: 'The page separates the documented 1994 Goodman origin and 1996 Broadway revival from broader context about Williams\'s original play and its earlier Broadway and film history.',
      },
    ],
    externalSources: [
      { label: 'The Night of the Iguana play background', href: 'https://en.wikipedia.org/wiki/The_Night_of_the_Iguana' },
      { label: 'Roundabout Theatre Company production history', href: 'https://en.wikipedia.org/wiki/Roundabout_Theatre_Company' },
      { label: 'The Night of the Iguana short-story background', href: 'https://en.wikipedia.org/wiki/The_Night_of_the_Iguana_(short_story)' },
      { label: '1964 film adaptation background', href: 'https://en.wikipedia.org/wiki/The_Night_of_the_Iguana_(film)' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-young-man-from-atlanta': {
    pageMode: 'featured',
    summary:
      'The Young Man from Atlanta brought Falls together with Horton Foote\'s Pulitzer Prize-winning play, staging it at the Goodman with Rip Torn and Shirley Knight before carrying the same cast to Broadway in 1997.',
    publicSummary:
      'Horton Foote\'s Pulitzer Prize-winning drama follows a Houston businessman and his wife as a son\'s death and a mysterious young stranger unravel the comfortable story they have told themselves about their family.',
    synopsis:
      'Will Kidder, a confident Houston businessman nearing retirement, and his wife Lily Dale are still grieving the recent, possibly self-inflicted death of their adult son when a young man connected to him, Bobby, begins seeking money from the family. As Will\'s career and certainties crumble alongside the marriage\'s carefully maintained illusions, the play quietly interrogates denial, grief, and the stories families tell to survive each other.',
    fallsContext:
      'The production paired Falls with Horton Foote, one of American theatre\'s most understated and esteemed playwrights, and shows him directing toward restraint and accumulation rather than the scale and spectacle of his Shakespeare or O\'Neill work from the same period.',
    significance:
      'A Pulitzer Prize-winning Horton Foote play that Falls staged at the Goodman in January 1997 with Rip Torn and Shirley Knight, then carried to Broadway\'s Longacre Theatre two months later, earning three Tony nominations including Best Play.',
    story:
      'Foote had already won the Pulitzer Prize for Drama for this play in 1995 before Falls staged it; the Goodman and Broadway productions, with Rip Torn and Shirley Knight as Will and Lily Dale, represented one of the play\'s most prominent stagings. The production\'s three Tony nominations - Best Play, plus featured and leading acting nominations for Biff McGuire and Shirley Knight - underline how seriously the production was received in a Broadway season otherwise dominated by larger commercial fare.',
    venueAnchor: 'Goodman Theatre and Longacre Theatre, Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: youngManFromAtlantaPlaybill,
        alt: 'Playbill cover for The Young Man from Atlanta at the Longacre Theatre, with a lone silhouetted figure against a red sunset.',
        caption: 'Playbill cover art for the Longacre Theatre engagement.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Horton Foote' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Rip Torn' },
      { role: 'Cast highlight', name: 'Shirley Knight' },
    ],
    quickFacts: [
      { label: 'Goodman run', value: 'January 1997' },
      { label: 'Broadway run', value: 'Mar 13 - Jun 8, 1997, Longacre Theatre' },
      { label: 'Source', value: '1995 Pulitzer Prize for Drama' },
      { label: 'Recognition', value: '3 Tony nominations, including Best Play' },
    ],
    cast: [
      { role: 'Will Kidder', name: 'Rip Torn' },
      { role: 'Lily Dale Kidder', name: 'Shirley Knight' },
      { role: 'Pete Davenport', name: 'Biff McGuire' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Horton Foote' },
      { role: 'Directed by', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'Three Tony nominations',
        detail: 'The production was nominated for Best Play, Best Featured Actor (Biff McGuire), and Best Leading Actress (Shirley Knight).',
      },
      {
        label: 'A Pulitzer-winning text',
        detail: 'Horton Foote\'s play had already won the 1995 Pulitzer Prize for Drama before this production, one of its most prominent stagings.',
      },
      {
        label: 'A Goodman transfer in the Foote revival',
        detail: 'The production placed Falls inside a renewed late-career wave for Horton Foote, moving a quiet Houston family drama from the Goodman to Broadway with Rip Torn, Shirley Knight, and Biff McGuire.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Public production records trace the play from its 1995 Signature Theatre premiere and later regional stagings to Falls\'s January 1997 Goodman Theatre production, which opened on Broadway at the Longacre Theatre that March.',
      },
      {
        label: 'Pulitzer record',
        text: 'The Pulitzer Prizes archive identifies The Young Man From Atlanta, by Horton Foote, as the 1995 Drama winner for a distinguished American play dealing with American life.',
      },
      {
        label: 'Tony record',
        text: 'The Tony Awards archive confirms the 1997 Broadway production as a Best Play nominee, with Shirley Knight nominated for Actress (Play) and William Biff McGuire nominated for Actor (Featured Role - Play).',
      },
      {
        label: 'Foote cycle context',
        text: 'The play revisits Will Kidder and Lily Dale Kidder from Foote\'s Orphans\' Home Cycle, returning to the same family history through the lens of old grief, economic dislocation, and unspoken truths about their son.',
      },
      {
        label: 'Archive note',
        text: 'The current project files preserve a Broadway Playbill image but no Goodman production stills, rehearsal images, or local review packet, so this page remains a text-led transfer profile.',
      },
      {
        label: 'Source note',
        text: 'The page separates documented dates, cast, awards, and transfer history from broader interpretive context about Foote\'s Houston-set family drama.',
      },
    ],
    externalSources: [
      { label: 'The Young Man from Atlanta play and production background', href: 'https://en.wikipedia.org/wiki/The_Young_Man_from_Atlanta' },
      { label: '1995 Pulitzer Prize for Drama', href: 'https://www.pulitzer.org/winners/horton-foote' },
      { label: '1997 Tony Awards nominations', href: 'https://www.tonyawards.com/nominees/year/1997/category/any/show/any/' },
      { label: 'Horton Foote biography and career context', href: 'https://en.wikipedia.org/wiki/Horton_Foote' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'long-days-journey-into-night': {
    pageMode: 'featured',
    summary:
      'Long Day\'s Journey Into Night is one of the most decorated productions in Falls\'s career: a 2002 Goodman staging that transferred to Broadway in 2003 with Brian Dennehy, Vanessa Redgrave, Philip Seymour Hoffman, and Robert Sean Leonard, winning the Tony for Best Revival and earning Falls the Drama Desk Award for direction.',
    publicSummary:
      'Eugene O\'Neill\'s autobiographical masterpiece, with Brian Dennehy and Vanessa Redgrave as the warring Tyrone parents and Philip Seymour Hoffman and Robert Sean Leonard as their sons, in a revival that swept the 2003 Tony Awards for Best Revival of a Play.',
    synopsis:
      'Over the course of one long day in their Connecticut summer home, the Tyrone family - faded actor James, his morphine-addicted wife Mary, and their two sons, the cynical Jamie and the consumptive Edmund - circle the same old wounds of addiction, blame, and disappointed love, each member retreating further into fog, drink, or drugs as the day gives way to night.',
    fallsContext:
      'Long Day\'s Journey Into Night sits at the center of Falls\'s long O\'Neill collaboration with Brian Dennehy, following their Iceman Cometh and preceding Desire Under the Elms, and stands as the clearest critical and awards peak of that partnership: a Tony for Best Revival, acting Tonys for both Dennehy and Redgrave, and a Drama Desk Award for Falls\'s direction.',
    significance:
      'A 2002 Goodman Theatre staging that transferred to Broadway\'s Plymouth Theatre in 2003, sweeping the major 2003 Tony Awards for Best Revival of a Play, Best Actor (Dennehy), and Best Actress (Redgrave), while Falls won the Drama Desk Award for Outstanding Director of a Play.',
    story:
      'This production represents the high-water mark of Falls\'s critical recognition on Broadway. O\'Neill\'s autobiographical play, drawn directly from his own family\'s addiction and grief, gave Falls a four-actor ensemble of extraordinary range: Brian Dennehy\'s blustering, guilt-ridden James Tyrone, Vanessa Redgrave\'s fog-bound Mary, and a young Philip Seymour Hoffman and Robert Sean Leonard as the brothers carrying their parents\' damage forward. The production\'s sweep of the major 2003 Tony categories, and Falls\'s own Drama Desk Award for direction, mark it as the single clearest example in the archive of a Falls revival meeting both critical and institutional consensus at the same time.',
    venueAnchor: 'Goodman Theatre and Plymouth Theatre, Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: longDaysJourneyPlaybill,
        alt: 'Playbill cover for Long Day\'s Journey Into Night at the Plymouth Theatre, with a painted illustration of a New England house at dusk.',
        caption: 'Playbill cover art for the Plymouth Theatre engagement.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Eugene O\'Neill' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Brian Dennehy' },
      { role: 'Cast highlight', name: 'Vanessa Redgrave' },
      { role: 'Cast highlight', name: 'Philip Seymour Hoffman' },
    ],
    quickFacts: [
      { label: 'Goodman run', value: '2002' },
      { label: 'Broadway run', value: '2003, Plymouth Theatre' },
      { label: 'Performances', value: '117 performances' },
      { label: 'Recognition', value: 'Tony, Best Revival; Drama Desk, Best Director' },
    ],
    cast: [
      { role: 'James Tyrone', name: 'Brian Dennehy' },
      { role: 'Mary Tyrone', name: 'Vanessa Redgrave' },
      { role: 'Jamie Tyrone', name: 'Philip Seymour Hoffman' },
      { role: 'Edmund Tyrone', name: 'Robert Sean Leonard' },
      { role: 'Cathleen', name: 'Fiana Toibin' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Eugene O\'Neill' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Santo Loquasto' },
    ],
    recognition: [
      {
        label: 'Tony Award, Best Revival of a Play',
        detail: 'The production won the 2003 Tony Award for Best Revival of a Play, plus Best Actor (Dennehy) and Best Actress (Redgrave).',
      },
      {
        label: 'Drama Desk Award, Outstanding Director',
        detail: 'Falls won the Drama Desk Award for Outstanding Director of a Play; Hoffman, Leonard, and Loquasto received further Tony and Drama Desk nominations.',
      },
      {
        label: 'Seven Tony nominations',
        detail: 'The Broadway revival was nominated across revival, acting, direction, and scenic design categories, winning three of the season\'s major play awards.',
      },
      {
        label: 'A Pulitzer-winning original',
        detail: 'Falls was staging O\'Neill\'s posthumous masterpiece, a play that won the 1957 Pulitzer Prize for Drama and became one of the central works of American theatre.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'A critical and institutional peak',
        detail: 'This production\'s sweep of the major 2003 Tony categories, alongside Falls\'s own Drama Desk Award for direction, makes it the clearest example of a Falls revival achieving full critical and institutional consensus.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Public production records identify the Falls revival as a 2002 Goodman Theatre staging that transferred to Broadway\'s Plymouth Theatre in 2003 with Brian Dennehy, Vanessa Redgrave, Philip Seymour Hoffman, Robert Sean Leonard, and Fiana Toibin.',
      },
      {
        label: 'Tony record',
        text: 'The Tony Awards archive confirms wins for Revival (Play), Brian Dennehy as Actor (Play), and Vanessa Redgrave as Actress (Play), with additional nominations for Hoffman, Leonard, Falls, and Santo Loquasto.',
      },
      {
        label: 'Drama Desk record',
        text: 'Awards records credit the revival with Drama Desk wins for Outstanding Revival of a Play, Vanessa Redgrave as Outstanding Actress, and Robert Falls for Outstanding Director of a Play.',
      },
      {
        label: 'Play history',
        text: 'O\'Neill completed the autobiographical tragedy before his death but it was first staged posthumously, premiering in Stockholm in 1956 before its Broadway debut and 1957 Pulitzer recognition.',
      },
      {
        label: 'Review context',
        text: 'John Lahr\'s New Yorker review treated the production as a major O\'Neill revival, praising the actor-driven force of the Tyrone family while noting Falls\'s mostly restrained handling of the uncut text.',
      },
      {
        label: 'Archive note',
        text: 'The current project files preserve a Broadway Playbill image but no Goodman production stills, rehearsal images, or local review packet, so this page remains a text-led transfer profile despite the production\'s major awards footprint.',
      },
      {
        label: 'Source note',
        text: 'The page separates documented awards, cast, and transfer history from broader interpretive context about O\'Neill\'s autobiographical Tyrone family tragedy.',
      },
    ],
    reviews: [
      {
        source: 'The New Yorker',
        href: 'https://www.newyorker.com/magazine/2003/05/19/fogbound',
        summary:
          'John Lahr reviewed the Broadway revival as a stately, actor-centered account of O\'Neill\'s family tragedy, singling out the force of Redgrave, Dennehy, Hoffman, and Leonard under Falls\'s direction.',
      },
    ],
    externalSources: [
      { label: 'Long Day\'s Journey into Night play and production background', href: 'https://en.wikipedia.org/wiki/Long_Day%27s_Journey_into_Night' },
      { label: '2003 Tony Awards nominations and winners', href: 'https://www.tonyawards.com/nominees/year/2003/category/any/show/any/' },
      { label: 'The New Yorker review', href: 'https://www.newyorker.com/magazine/2003/05/19/fogbound' },
      { label: 'Drama Desk direction award record', href: 'https://en.wikipedia.org/wiki/Drama_Desk_Award_for_Outstanding_Direction_of_a_Play' },
      { label: 'Robert Falls career context', href: 'https://en.wikipedia.org/wiki/Robert_Falls' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'talk-radio': {
    pageMode: 'featured',
    summary:
      'Talk Radio places Falls inside a Broadway revival of Eric Bogosian\'s media-age pressure cooker, built around Liev Schreiber\'s unraveling shock-jock performance.',
    publicSummary:
      'Falls directs a Broadway revival of Bogosian\'s corrosive radio-station drama, with celebrity, rage, and performance all collapsing into one another.',
    synopsis:
      'On the eve of national syndication, late-night host Barry Champlain works the phones, humiliates callers, and weaponizes intimacy until the radio booth becomes a chamber for exhaustion, vanity, and public self-destruction.',
    fallsContext:
      'The production widens the archive beyond Goodman-originated transfers, showing Falls entering a Broadway revival with a text already famous for its media critique and masculine volatility.',
    significance:
      'A 2007 Broadway revival that ties Falls to one of the archive\'s clearest media-saturation plays and brought Tony attention through Liev Schreiber\'s central performance.',
    story:
      'Talk Radio matters because it lets the archive register another side of Falls: not civic Shakespeare, not O\'Neill tragedy, but fast, acidic contemporary American performance writing. The revival arrived in a period when celebrity confession, aggressive audience intimacy, and media self-display all felt newly volatile again, and it gave a young Sebastian Stan, years before his film career, a place in the supporting cast alongside Stephanie March and Peter Hermann.',
    venueAnchor: 'Longacre Theatre, Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: talkRadioPlaybill,
        alt: 'Playbill cover for Talk Radio at the Longacre Theatre, with a close-up black-and-white photo of Liev Schreiber.',
        caption: 'Playbill cover art for the Longacre Theatre engagement.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Eric Bogosian' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Liev Schreiber' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Mar 11 - Jun 24, 2007' },
      { label: 'Venue', value: 'Longacre Theatre' },
      { label: 'Type', value: 'Broadway revival' },
      { label: 'Recognition', value: 'Tony-nominated revival' },
    ],
    cast: [
      { role: 'Barry Champlain', name: 'Liev Schreiber' },
      { role: 'Linda MacArthur', name: 'Stephanie March' },
      { role: 'Dan Woodruff', name: 'Peter Hermann' },
      { role: 'Stu Noonan', name: 'Michael Laurence' },
      { role: 'Kent', name: 'Sebastian Stan' },
      { role: 'Sid Greenberg', name: 'Adam Sietz' },
      { role: 'Caller / Ensemble', name: 'Christine Pedi' },
      { role: 'Caller / Ensemble', name: 'Barbara Rosenblat' },
      { role: 'Caller / Ensemble', name: 'Marc Thompson' },
      { role: 'Caller / Ensemble', name: 'Kit Williamson' },
      { role: 'Caller / Ensemble', name: 'Cornell Womack' },
      { role: 'Caller / Ensemble', name: 'Christy Pusz' },
    ],
    recognition: [
      {
        label: 'Tony context',
        detail: 'The revival received Tony nominations for Best Revival of a Play and Best Actor in a Play for Liev Schreiber.',
      },
      {
        label: 'A future star in the cast',
        detail: 'The supporting cast included Sebastian Stan as Kent, years before his major film and television career.',
      },
      {
        label: 'A Pulitzer-finalist source',
        detail: 'Bogosian\'s original 1987 Off-Broadway play was a Pulitzer Prize for Drama finalist before its 2007 Broadway mounting.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Public production records identify Talk Radio as a 1987 Public Theater play by Eric Bogosian that made its Broadway premiere at the Longacre Theatre on March 11, 2007 under Robert Falls\'s direction.',
      },
      {
        label: 'Tony record',
        text: 'The Tony Awards archive places the 2007 production in Revival (Play), where it was nominated alongside a separate Actor (Play) nomination for Liev Schreiber.',
      },
      {
        label: 'Pulitzer context',
        text: 'The Pulitzer Prizes archive lists Talk Radio, by Eric Bogosian, as a 1988 Drama finalist, underscoring that the 2007 Broadway production was revisiting an already recognized Off-Broadway text.',
      },
      {
        label: 'Review context',
        text: 'Hilton Als\'s New Yorker review framed the revival around Schreiber\'s Barry Champlain, reading the production through masculine rage, media exposure, and public unraveling.',
      },
      {
        label: 'Archive note',
        text: 'The current project files preserve a Broadway Playbill image but no production stills, rehearsal images, or local review packet, so this page remains a text-led Broadway profile.',
      },
      {
        label: 'Source note',
        text: 'The page separates documented dates, awards, cast roles, and review coverage from broader interpretive context about Bogosian\'s radio-station pressure cooker.',
      },
    ],
    reviews: [
      {
        source: 'The New Yorker',
        href: 'https://www.newyorker.com/magazine/2007/03/26/air-rage',
        summary:
          'The review uses Schreiber\'s performance to frame the revival as a study in male rage, media exposure, and public breakdown under Robert Falls\'s direction.',
      },
    ],
    externalSources: [
      { label: 'The New Yorker review', href: 'https://www.newyorker.com/magazine/2007/03/26/air-rage' },
      { label: 'Talk Radio play and production background', href: 'https://en.wikipedia.org/wiki/Talk_Radio_(play)' },
      { label: '2007 Tony Awards nominations', href: 'https://www.tonyawards.com/nominees/year/2007/category/any/show/any/' },
      { label: '1988 Pulitzer Prize Drama finalist', href: 'https://www.pulitzer.org/finalists/eric-bogosian' },
      { label: 'Sebastian Stan Broadway role context', href: 'https://en.wikipedia.org/wiki/Sebastian_Stan' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'shining-city': {
    pageMode: 'featured',
    summary:
      'Shining City brings Falls into Conor McPherson\'s haunted Dublin chamber world, where grief, guilt, and failed intimacy are staged with almost no theatrical excess and all the pressure pushed onto actors, silence, and dread.',
    publicSummary:
      'Falls directs McPherson\'s ghost-haunted drama first on Broadway, then again at Goodman, turning therapy, bereavement, and spiritual exhaustion into an intimate two-life reckoning.',
    synopsis:
      'A widower seeks help after seeing the ghost of his dead wife. The therapist hearing him out is himself a former priest, newly adrift in a life he cannot quite inhabit. Their sessions become a double portrait of men trapped between confession and avoidance, each haunted by the life he has already damaged.',
    fallsContext:
      'This page matters because it catches Falls at a very different volume from the epic and civic productions that dominate so much of the archive. Shining City is actor pressure, atmosphere, and listening: a Broadway psychological ghost story with almost no ornament to hide behind.',
    significance:
      'A Tony-nominated 2006 Broadway staging that later returned to Goodman in 2008, showing Falls carrying a contemporary McPherson play from Manhattan Theatre Club to his own home institution without losing its spare, haunted scale.',
    story:
      'Shining City earns a stronger page because its life is more complete than the old seed suggested. The 2006 Broadway production at Manhattan Theatre Club\'s Biltmore Theatre gave Falls a quiet but high-profile contemporary play, led by Oliver Platt and Brian F. O\'Byrne, and earned Tony nominations for Best Play and Best Actor. The local source material also makes clear that this was not a one-city stop: Falls brought the production to Goodman in early 2008, where the same script was rebuilt with a Chicago cast and reframed for his own audience. That two-step history matters. Instead of treating Shining City as a stray Broadway credit, the archive can show it as part of Falls\'s continuing interest in morally exhausted men, unstable belief, and rooms where the real action is emotional rather than physical.',
    venueAnchor: 'Broadway and Goodman Theatre',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: shiningCityWide,
        alt: 'A widower sits on a leather sofa across from his therapist beneath a tall window in Shining City.',
        caption: 'A wide production still that captures the play\'s emotional scale: one room, two men, and a great deal of silence.',
        orientation: 'portrait',
        priority: true,
        kind: 'production-still',
      },
      {
        src: shiningCityPortrait,
        alt: 'Oliver Platt sits on a leather sofa in Shining City, lit by a table lamp.',
        caption: 'Oliver Platt as John in the Broadway staging.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: shiningCityShowArt,
        alt: 'A stage image from Shining City showing John reclining on a sofa while Ian speaks to him.',
        caption: 'Goodman show art built from one of the production stills, preserving the Chicago return in the page\'s visual record.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: shiningCityGoodman,
        alt: 'Two actors stand in the Goodman return of Shining City, one resting a hand on the other\'s shoulder.',
        caption: 'A still from the 2008 Goodman run, which brought Falls\'s staging back to Chicago with a resident cast.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: shiningCityDoor,
        alt: 'A silhouetted figure stands in a doorway in a dark Shining City promotional image.',
        caption: 'Promotional art leaning into the play\'s ghost-story surface and threshold imagery.',
        orientation: 'portrait',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Conor McPherson' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Oliver Platt' },
      { role: 'Cast highlight', name: 'Brian F. O\'Byrne' },
      { role: 'Cast highlight', name: 'Martha Plimpton' },
      { role: 'Cast highlight', name: 'Peter Scanavino' },
    ],
    quickFacts: [
      { label: 'Broadway run', value: 'Apr 20 - Jul 16, 2006' },
      { label: 'Opening night', value: 'May 9, 2006, Biltmore Theatre' },
      { label: 'Goodman return', value: 'Jan 12 - Feb 17, 2008' },
      { label: 'Runtime', value: '90 minutes' },
    ],
    cast: [
      { role: 'John', name: 'Oliver Platt' },
      { role: 'Ian', name: 'Brian F. O\'Byrne' },
      { role: 'Neasa', name: 'Martha Plimpton' },
      { role: 'Laurence', name: 'Peter Scanavino' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Conor McPherson' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Santo Loquasto' },
      { role: 'Costume Design', name: 'Kaye Voyce' },
      { role: 'Lighting Design', name: 'Christopher Akerlind' },
      { role: 'Sound Design', name: 'Obadiah Eaves' },
      { role: 'Dialect Coach', name: 'Deborah Hecht' },
      { role: 'Casting', name: 'Nancy Piccione' },
      { role: 'Casting', name: 'David Caparelliotis' },
      { role: 'Production Stage Manager', name: 'Barclay Stiff' },
      { role: 'Stage Manager', name: 'Francesca Russell' },
      { role: 'Assistant Director', name: 'Henry Wishcamper' },
    ],
    recognition: [
      {
        label: 'Tony recognition',
        detail: 'The Broadway production received Tony nominations for Best Play and for Oliver Platt as leading actor.',
      },
      {
        label: 'Broadway to Chicago afterlife',
        detail: 'Falls brought the staging back to Goodman in 2008, giving the production a second institutional life rather than leaving it as a single Broadway engagement.',
      },
      {
        label: 'McPherson chamber piece',
        detail: 'The page shows Falls operating in a notably stripped-back contemporary mode where atmosphere, confession, and dread do most of the work.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'A quieter Broadway chapter',
        detail: 'Shining City broadens the archive beyond transfers and large-scale revivals by showing Falls inside a small, haunted contemporary drama.',
      },
      {
        label: 'Two-city life',
        detail: 'The 2006 Manhattan Theatre Club run and the 2008 Goodman remount give the production a fuller record than a one-off Broadway credit.',
      },
      {
        label: 'Actor-led tension',
        detail: 'Everything in the surviving materials points back to performance pressure: Oliver Platt\'s wounded volatility, Brian F. O\'Byrne\'s spiritual unease, and the room itself as a listening chamber.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Falls\'s Goodman engagement followed the play\'s 2006 Broadway premiere at the Biltmore Theatre; the Goodman\'s 2008 staging is documented separately within this page\'s chronology.',
      },
      {
        label: 'Goodman return cast',
        text: 'The Goodman source screenshot preserves a later Chicago cast including John Judd, Jay Whittaker, Nicole Wiesner, and Keith D. Gallagher, confirming that Falls rebuilt the production locally rather than simply preserving the Broadway company intact.',
      },
      {
        label: 'Source package',
        text: 'The folder includes Broadway production stills, Goodman show art and source screenshots, Playbill feature scans, and a compiled document that preserves opening-night credits, review links, and both Broadway and Chicago production dates.',
      },
    ],
    reviews: [
      {
        source: 'Manhattan Theatre Club',
        href: 'https://www.manhattantheatreclub.com/shows/2005-06-season/shining-city/',
        summary:
          'The official production archive preserves the Broadway run dates, venue, runtime, and opening-night creative credits for the Biltmore staging.',
        note: 'Official production archive',
      },
      {
        source: 'The New York Times',
        href: 'https://www.nytimes.com/2006/05/10/theater/reviews/shining-city-conor-mcphersons-study-of-loneliness-in-a.html',
        summary:
          'Ben Brantley\'s review frames the play as a study of loneliness and gives the production one of its strongest notices.',
        note: 'Broadway review',
      },
      {
        source: 'TheaterMania',
        href: 'https://www.theatermania.com/news/full-cast-and-creative-team-set-for-shining-city-opening-date-moved-to-may-9_7775/',
        summary:
          'Useful for confirming the Broadway cast, creative team, and the shift in the opening date before the production reached the Biltmore.',
        note: 'Casting and production announcement',
      },
      {
        source: 'Broadway.com',
        href: 'https://www.broadway.com/buzz/94978/robert-falls-to-helm-conor-mcphersons-shining-city-at-the-biltmore/',
        summary:
          'Announcement coverage that places Falls at the center of the Broadway staging before previews began.',
        note: 'Broadway announcement',
      },
      {
        source: 'Chicago Reader',
        href: 'https://chicagoreader.com/arts-culture/therapist-heal-thyself/',
        summary:
          'Chicago coverage tied to the Goodman return, useful for showing how the production read once Falls brought it back home.',
        note: 'Goodman-era feature',
      },
      {
        source: 'Theatre In Chicago',
        href: 'https://www.theatreinchicago.com/articles/robert-falls-brings-his-acclaimed-broadway-staging-of-shining-city-to-goodman-theatre/305/',
        summary:
          'Feature coverage explicitly frames the Goodman run as Falls bringing his acclaimed Broadway staging to Chicago.',
        note: 'Goodman feature',
      },
    ],
    externalSources: [
      { label: 'Official MTC production archive', href: 'https://www.manhattantheatreclub.com/shows/2005-06-season/shining-city/' },
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/shining-city/' },
      { label: 'New York Times review', href: 'https://www.nytimes.com/2006/05/10/theater/reviews/shining-city-conor-mcphersons-study-of-loneliness-in-a.html' },
      { label: 'TheaterMania cast announcement', href: 'https://www.theatermania.com/news/full-cast-and-creative-team-set-for-shining-city-opening-date-moved-to-may-9_7775/' },
      { label: 'Broadway.com announcement', href: 'https://www.broadway.com/buzz/94978/robert-falls-to-helm-conor-mcphersons-shining-city-at-the-biltmore/' },
      { label: 'Theatre In Chicago feature', href: 'https://www.theatreinchicago.com/articles/robert-falls-brings-his-acclaimed-broadway-staging-of-shining-city-to-goodman-theatre/305/' },
      { label: 'Chicago Reader feature', href: 'https://chicagoreader.com/arts-culture/therapist-heal-thyself/' },
      { label: 'Arts Fuse review', href: 'https://artsfuse.org/414/theater-review-a-shining-city-on-the-yawning-heights/' },
    ],
    pressQuotes: [
      {
        quote: 'Quiet, haunting and absolutely glorious new play.',
        source: 'The New York Times',
      },
      {
        quote: 'An artful, absorbing new drama about two men deeply haunted by their actions.',
        source: 'The Star-Ledger',
      },
      {
        quote: 'Everything is right about Shining City.',
        source: 'The Journal News',
      },
      {
        quote: 'A scrupulous production.',
        source: 'Associated Press',
      },
      {
        quote: 'An unforgettable production.',
        source: 'Chicago Tribune',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  "franks-home": {
    pageMode: 'featured',
    summary:
      'Frank\'s Home turns Frank Lloyd Wright into a late-life family reckoning: a Richard Nelson world premiere in which artistic grandeur, domestic failure, and American self-mythology all share the same desert room.',
    publicSummary:
      'Falls directs Richard Nelson\'s intimate Frank Lloyd Wright drama as a family confrontation staged in the long shadow of genius, vanity, and collapse.',
    synopsis:
      'It is summer 1923. Frank Lloyd Wright has left Chicago for California, hoping to revive his career, repair his relationship with his adult children, and settle into a new life after the triumph of Tokyo\'s Imperial Hotel. But family grievances still burn, and when news arrives that the hotel may have been destroyed in an earthquake, the play turns into a reckoning over art, legacy, and what Wright was never able to build for the people closest to him.',
    fallsContext:
      'This page shows Falls working inside the Goodman new-play pipeline at a quieter but still ambitious scale: a historical-biographical chamber piece built around actor pressure, family argument, and the mythology of American genius.',
    significance:
      'A 2006 Richard Nelson world premiere at Goodman that transferred intact to Playwrights Horizons, extending Falls\'s archive as a director of new plays built for Chicago and then carried east.',
    story:
      'Frank\'s Home matters because it treats a monumental cultural figure as a private problem before it treats him as a legend. Nelson\'s script locates Wright at a moment when his public image still gleams but his family life is full of resentment, debt, vanity, and emotional wreckage. The production itself follows that same tension: Thomas Lynch\'s spare, desert-floor setting keeps the evening actor-led and exposed, while Peter Weller\'s Wright is constantly framed against the people forced to live with his self-invention. The production also had a fuller life than a single engagement: a Goodman world premiere in the Owen Theatre, a documented critical response across Chicago, and then an intact transfer to Playwrights Horizons in New York with Weller, Harris Yulin, Mary Beth Fisher, Maggie Siff, and Jay Whittaker all moving with Falls. That transfer story helps the page read less like a one-off commission and more like a serious chapter in Falls\'s new-work record.',
    venueAnchor: 'Goodman Theatre and Playwrights Horizons',
    eraLabel: 'National and international period',
    images: [
      {
        src: franksHomeEnsemble,
        alt: 'The ensemble of Frank\'s Home gathers on a sparse desert-like stage under a wide dusk sky.',
        caption: 'A full-company still that makes the play\'s family geometry and open desert atmosphere visible at once.',
        photographer: 'Michael Brosilow / Goodman Theatre',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: franksHomeHandshake,
        alt: 'Jeremy Strong, Maggie Siff, and Peter Weller meet in a charged family moment in Frank\'s Home.',
        caption: 'A deceptively cordial family encounter that lets the page show the production as drama, not just biography.',
        photographer: 'Michael Brosilow / Goodman Theatre',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: franksHomeFamily,
        alt: 'Peter Weller, Harris Yulin, Mary Beth Fisher, and Maggie Siff appear together in a tense family tableau from Frank\'s Home.',
        caption: 'A family tableau that broadens the page beyond Wright alone and makes the play\'s generational pressure visible.',
        photographer: 'Michael Brosilow / Goodman Theatre',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: franksHomeWorktable,
        alt: 'Three men in Frank\'s Home sit and sketch on a sparse stage covered in pale ground.',
        caption: 'A working image of the production\'s men thinking through legacy, architecture, and damage rather than sentimental reconciliation.',
        photographer: 'Michael Brosilow / Goodman Theatre',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: franksHomeWeller,
        alt: 'Peter Weller as Frank Lloyd Wright sits in costume in a close production still from Frank\'s Home.',
        caption: 'Peter Weller as Wright, carrying the production\'s uneasy blend of grandeur and exhaustion.',
        photographer: 'Michael Brosilow / Goodman Theatre',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: franksHomePortrait,
        alt: 'Peter Weller as Frank Lloyd Wright in a pale suit and white hat against a warm sky in Frank\'s Home.',
        caption: 'A portrait image of Weller that leans harder into Wright as icon, not just father or patient.',
        photographer: 'Michael Brosilow / Goodman Theatre',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: franksHomeShowArt,
        alt: 'Frank\'s Home show art featuring the production still of three men at work alongside the title.',
        caption: "Show art built from the production's imagery.",
        orientation: 'landscape',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Richard Nelson' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Peter Weller' },
      { role: 'Cast highlight', name: 'Harris Yulin' },
      { role: 'Cast highlight', name: 'Mary Beth Fisher' },
      { role: 'Cast highlight', name: 'Maggie Siff' },
    ],
    quickFacts: [
      { label: 'World premiere', value: 'Nov 25 - Dec 23, 2006' },
      { label: 'Transfer', value: 'Playwrights Horizons, Jan - Feb 2007' },
      { label: 'Original venue', value: 'Owen Theatre, Goodman Theatre' },
      { label: 'Documented stagings', value: '2' },
      { label: 'Runtime', value: '1 hr 45 min' },
    ],
    cast: [
      { role: 'Frank Lloyd Wright', name: 'Peter Weller' },
      { role: 'Louis Sullivan', name: 'Harris Yulin' },
      { role: 'Miriam Noel', name: 'Mary Beth Fisher' },
      { role: 'Catherine', name: 'Maggie Siff' },
      { role: 'William', name: 'Jeremy Strong' },
      { role: 'Lloyd', name: 'Jay Whittaker' },
      { role: 'Kenneth', name: 'Chris Henry Coffey' },
      { role: 'Helen Girvin', name: 'Holley Fain' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Richard Nelson' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Thomas Lynch' },
      { role: 'Costume Design', name: 'Susan Hilferty' },
      { role: 'Lighting Design', name: 'Michael Philippi' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Dramaturg', name: 'Tom Creamer' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Production Stage Manager', name: 'T. Paul Lynch' },
    ],
    recognition: [
      {
        label: 'World premiere',
        detail: 'Goodman billed the production as a world premiere and linked it directly to Playwrights Horizons.',
      },
      {
        label: 'Intact New York transfer',
        detail: 'TheaterMania\'s announcement confirms the production moved to Playwrights Horizons with Falls, Weller, Yulin, Fisher, Siff, and Whittaker intact from Chicago.',
      },
      {
        label: 'Strong central performance',
        detail: 'The preserved Chicago review trail repeatedly singles out Peter Weller as the production\'s animating force.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'American genius as family damage',
        detail: 'The page belongs in the archive because it reduces a giant public figure to the emotional cost of his own ambition, which is a very Falls-compatible dramatic lens.',
      },
      {
        label: 'A Goodman-to-New York new-play track',
        detail: 'Rather than arriving as a finished transfer from elsewhere, Frank\'s Home shows Goodman functioning as the originating engine for a new historical drama.',
      },
      {
        label: 'Biographical chamber piece',
        detail: 'Even with its famous subject, the production works less as spectacle than as an actor-driven debate about art, legacy, resentment, and self-invention.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'Goodman presents the play as a lyrical, heartbreaking portrait of Wright as a visionary who could create a new architectural vocabulary but not a durable home for his own family.',
      },
      {
        label: 'Visual language',
        text: 'The preserved production stills show Falls and designer Thomas Lynch resisting period clutter in favor of a nearly bare, desert-floor stage and a wide horizon line, keeping the focus on family argument rather than museum reconstruction.',
      },
      {
        label: 'Story setting',
        text: 'The local production document places the action in summer 1923, after Wright has gone to California and as news arrives that his Imperial Hotel in Tokyo may have collapsed in an earthquake.',
      },
      {
        label: 'Transfer history',
        text: 'Playwrights Horizons picked up the production immediately after the Goodman run, making this a documented transfer rather than an isolated regional staging.',
      },
      {
        label: 'Source package',
        text: 'The folder includes multiple production stills, title treatment art, cast-and-creative roster screenshots, a full compiled production document, Chicago review aggregation, and the New York transfer announcement.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/franks-home/',
        summary:
          'The official page frames the production as a world-premiere Richard Nelson play about Frank Lloyd Wright, his adult children, and the emotional cost of visionary ambition.',
        note: 'Official production page',
      },
      {
        source: 'Theatre In Chicago',
        href: 'https://www.theatreinchicago.com/franks-home/3300/',
        summary:
          'A full Chicago review roundup showing a mixed but engaged local response to the Goodman premiere.',
        note: 'Review aggregate',
      },
      {
        source: 'Chicago Tribune',
        href: 'https://www.theatreinchicago.com/franks-home/3300/',
        summary:
          'Chris Jones called it a tightly focused Chekhovian drama that reveals Wright\'s vulnerability, resentment, and existential despair without reducing him to biography alone.',
        note: 'Quoted via review roundup',
      },
      {
        source: 'Daily Herald',
        href: 'https://www.theatreinchicago.com/franks-home/3300/',
        summary:
          'Daily Herald praised the cast and described Falls\'s direction as brisk and spare, sustaining emotional tension without wallowing in despair.',
        note: 'Quoted via review roundup',
      },
      {
        source: 'Chicago Reader',
        href: 'https://www.theatreinchicago.com/franks-home/3300/',
        summary:
          'The Reader tied the Goodman production\'s success to its performances and to Peter Weller\'s ability to render Wright both iconic and painfully human.',
        note: 'Quoted via review roundup',
      },
      {
        source: 'TheaterMania',
        href: 'https://www.theatermania.com/news/franks-home_9954/',
        summary:
          'Transfer coverage that confirms the New York move and helps document how the Goodman world premiere was positioned for a second life at Playwrights Horizons.',
        note: 'Transfer announcement',
      },
      {
        source: 'Variety',
        href: 'https://variety.com/2006/legit/reviews/frank-s-home-2-1200511648/',
        summary:
          'Variety coverage, part of the play\'s broader professional reception beyond Chicago.',
        note: 'Trade review',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/franks-home/' },
      { label: 'Playbill photo call', href: 'https://playbill.com/article/photo-call-franks-home-com-138196' },
      { label: 'Theatre In Chicago review roundup', href: 'https://www.theatreinchicago.com/franks-home/3300/' },
      { label: 'TheaterMania transfer announcement', href: 'https://www.theatermania.com/news/franks-home_9954/' },
      { label: 'Variety review', href: 'https://variety.com/2006/legit/reviews/frank-s-home-2-1200511648/' },
      { label: 'CurtainUp review', href: 'http://www.curtainup.com/frankshomechi.html' },
    ],
    pressQuotes: [
      {
        quote: 'A thoroughly invigorating, tightly focused piece of Chekhovian drama.',
        source: 'Chicago Tribune',
        href: 'https://www.theatreinchicago.com/franks-home/3300/',
      },
      {
        quote: 'This cast is exemplary, and Robert Falls\' direction is brisk and spare.',
        source: 'Daily Herald',
        href: 'https://www.theatreinchicago.com/franks-home/3300/',
      },
      {
        quote: 'A sensitive portrait of a middle-aged man.',
        source: 'TheaterMania',
      },
      {
        quote: 'The Wright stuff to please an audience in this New York-bound world premiere.',
        source: 'Windy City Times',
      },
      {
        quote: 'A stellar cast of players.',
        source: 'Epoch Times',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  dollhouse: {
    pageMode: 'featured',
    summary:
      'Dollhouse is a key Rebecca Gilman adaptation in the Goodman years, pulling Ibsen\'s domestic revolt into explicitly contemporary social language without giving up the force of the original break.',
    publicSummary:
      'Rebecca Gilman recasts Ibsen for contemporary Chicago speech and pressure, and Falls directs the Goodman commission as a brittle domestic drama about performance, obedience, and exit.',
    synopsis:
      'A woman who has long performed the role expected of her begins to see how thoroughly her home has been structured around obedience, concealment, and charm. Gilman\'s version translates the social machinery of A Doll\'s House into a contemporary register, tracking the cost of recognition and the danger of acting on it.',
    fallsContext:
      'Dollhouse belongs to the collaborative line between Falls and Gilman that later includes Luna Gale, Soups, Stews, and Casseroles: 1976, and Swing State, but here the route in is adaptation rather than wholly original drama. It also sits inside Falls\'s larger Goodman habit of re-entering classics through living writers rather than museum revival.',
    significance:
      'A 2005 Goodman commission and world premiere that joins Falls\'s new-work practice to Gilman\'s contemporary rethinking of a foundational feminist classic.',
    story:
      'This entry matters because it shows how the Goodman under Falls handled canonical material through living playwrights instead of only through direct revival. Gilman\'s version reframes Ibsen through contemporary speech, race, labor, and social pressure, making the production an early marker of how Falls and Goodman could use adaptation as present-tense argument rather than literary homage. Even without a surviving still gallery, the official record is clear about the scale of the event: a Goodman commission in the Albert Theatre, a cast led by Maggie Siff, and a creative team built from core Falls collaborators including Robert Brill, Mara Blumenfeld, James F. Ingalls, Richard Woodbury, and Tom Creamer.',
    venueAnchor: "Goodman's Albert Theatre",
    eraLabel: 'National and international period',
    images: [
      {
        src: dollhouseTitleTreatment,
        alt: 'Dollhouse title treatment from the Goodman Theatre campaign for the 2005 production.',
        caption: 'The official title treatment preserved on Goodman\'s archive page for the 2005 world premiere.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: dollhouseShowArt,
        alt: 'Show art for Dollhouse at Goodman Theatre, with a red patterned Victorian room and the title in white serif text.',
        caption: 'Official Goodman show art for Rebecca Gilman\'s adaptation, preserving the production\'s red, ornamental campaign look.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright / adapter', name: 'Rebecca Gilman' },
      { role: 'Original playwright', name: 'Henrik Ibsen' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Maggie Siff' },
      { role: 'Cast highlight', name: 'Firdous Bamji' },
      { role: 'Cast highlight', name: 'Anthony Starke' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Jun 18 - Jul 24, 2005' },
      { label: 'Commission status', value: 'World premiere and Goodman commission' },
      { label: 'Venue', value: "Goodman's Albert Theatre" },
      { label: 'Runtime', value: '2 hr 30 min' },
      { label: 'Lead role', value: 'Maggie Siff as Nora' },
    ],
    cast: [
      { role: 'Nora', name: 'Maggie Siff' },
      { role: 'Raj Patel', name: 'Firdous Bamji' },
      { role: 'Terry', name: 'Anthony Starke' },
      { role: 'Marta', name: 'Charin Alvarez' },
      { role: 'Pete', name: 'Lance Stuart Baker' },
      { role: 'Iris', name: 'Maritza Cervantes' },
      { role: 'Kristine', name: 'Elizabeth Rich' },
      { role: 'Max', name: 'Ryan Cowhey' },
      { role: 'Max', name: 'Matthew Gerdisch' },
      { role: 'Skyler', name: 'Melody Hollis' },
      { role: 'Skyler', name: 'Allison Sparrow' },
      { role: 'Macey', name: 'Jordyn Knysz' },
      { role: 'Macey', name: 'Emily Leahy' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Rebecca Gilman' },
      { role: 'Adapted from the play by', name: 'Henrik Ibsen' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Robert Brill' },
      { role: 'Costume Design', name: 'Mara Blumenfeld' },
      { role: 'Lighting Design', name: 'James F. Ingalls' },
      { role: 'Sound Design and Original Music', name: 'Richard Woodbury' },
      { role: 'Dramaturg', name: 'Tom Creamer' },
      { role: 'Choreography', name: 'Randy Duncan' },
      { role: 'New York Casting', name: 'Telsey + Company' },
      { role: 'Chicago Casting', name: 'Adam Belcuore' },
      { role: 'Production Stage Manager', name: 'Alden J. Vasquez' },
      { role: 'Stage Manager', name: 'Sascha Connor' },
    ],
    recognition: [
      {
        label: 'Commission premiere',
        detail: 'The official Goodman page identifies the production as both a world premiere and a Goodman Theatre commission.',
      },
      {
        label: 'Gilman adaptation',
        detail: 'Goodman positions the production as Rebecca Gilman\'s contemporary reworking of Ibsen rather than a direct period revival, making the adaptation itself the event.',
      },
      {
        label: 'Albert Theatre scale',
        detail: 'This was not a small-lab experiment. Goodman mounted the production in its main Albert Theatre, signaling institutional weight behind the commission.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Gilman-Falls collaboration, in adaptation form',
        detail: 'Before Luna Gale and Swing State, Dollhouse shows the partnership testing how a classic text could be rewritten in Gilman\'s social vernacular and staged through Falls\'s large-house Goodman grammar.',
      },
      {
        label: 'Classic material made present tense',
        detail: 'The production matters less as literary stewardship than as a demonstration of how Falls used adaptation to make canonical work feel argumentative and contemporary.',
      },
      {
        label: 'Star and future-career interest',
        detail: 'Maggie Siff\'s Nora gives the page a performer anchor, capturing the production at an early moment in a career that would later become widely visible on stage and screen.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'Goodman describes Gilman\'s take as a contemporary-social lens on Ibsen\'s groundbreaking domestic drama.',
      },
      {
        label: 'Visual record limits',
        text: 'The current archive and official Goodman page preserve campaign art and title treatment, but no production still gallery has surfaced in the repo or on the public production page. The page therefore leans on typography, credits, and context rather than pretending to have a fuller photo record than actually survives here.',
      },
      {
        label: 'Creative team continuity',
        text: 'The official artist roster links the production to recurring Falls collaborators, including Richard Woodbury on sound, Tom Creamer on dramaturgy, Adam Belcuore on casting, and a design team led by Robert Brill, Mara Blumenfeld, and James F. Ingalls.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/dollhouse/',
        summary:
          'The official page frames the production as a Rebecca Gilman world-premiere adaptation of A Doll\'s House directed by Robert Falls.',
        note: 'Official production page',
      },
      {
        source: 'Goodman Theatre artist roster',
        href: 'https://www.goodmantheatre.org/show/dollhouse/',
        summary:
          'The preserved artist cards on the production page document a cast led by Maggie Siff and a full creative team including Robert Brill, Mara Blumenfeld, James F. Ingalls, Richard Woodbury, and Tom Creamer.',
        note: 'Official cast and creative credits',
      },
      {
        source: 'Goodman archive metadata',
        href: 'https://www.goodmantheatre.org/show/dollhouse/',
        summary:
          'Goodman\'s archive metadata confirms the exact 2005 run dates, runtime, commission status, and Albert Theatre placement, which helps stabilize an otherwise sparse public record.',
        note: 'Official archive details',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/dollhouse/' },
      { label: 'Rebecca Gilman artist page', href: 'https://www.goodmantheatre.org/artists/rebecca-gilman/' },
      { label: 'Robert Falls artist page', href: 'https://www.goodmantheatre.org/?post_type=artist&p=10377' },
      { label: 'Maggie Siff artist page', href: 'https://www.goodmantheatre.org/artists/maggie-siff/' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'researched',
  },
  'molly-sweeney': {
    pageMode: 'featured',
    summary:
      'Molly Sweeney is the production the pandemic stopped before it could open: a fully designed, fully cast Brian Friel revival that reached final tech and official production photography in March 2020, then never played a single public performance.',
    publicSummary:
      'A three-actor Brian Friel chamber drama that Robert Falls brought all the way to dress rehearsal in spring 2020, only for the COVID-19 shutdown to end its run before opening night.',
    synopsis:
      'Blind since infancy, Molly Sweeney agrees to a risky operation that might restore her sight, urged on by her restless husband Frank and her ambitious doctor, Mr. Rice. Told through interlocking monologues from all three characters rather than direct scenes, the play asks whose life the surgery really changes: Molly\'s, or the men who need her transformation more than she does.',
    fallsContext:
      'Molly Sweeney pairs Falls with longtime Goodman design collaborators Noël Huntzinger and Richard Woodbury and with Chicago veterans Kate Fry and Christopher Donahue alongside screen and stage actor Brendan Coyle, in a three-person monologue structure that is far more intimate than the ensemble epics dominating the rest of his late Goodman record.',
    significance:
      'A planned major revival of Brian Friel\'s acclaimed drama that became, instead, an archive case study in interrupted work: cast, designed, built, lit, and photographed, then halted by the COVID-19 shutdown days before it was due to meet an audience, and never rescheduled.',
    story:
      'The production\'s record runs almost entirely through process rather than reception. Casting was announced for a Mar 27 - Apr 26, 2020 engagement; the Goodman\'s own synopsis page separately lists Apr 10 - May 10, 2020. Either way, Illinois\'s COVID-19 shutdown landed before the run could open, and the Goodman\'s notice that performances were "suspended up to and including April 19th, 2020" was never followed by a reopening. Michael Brosilow\'s official production photographs, taken on Todd Rosenthal\'s finished set, prove the show reached full tech before the shutdown, but no Chicago critic appears to have reviewed it, because no paying audience ever saw it. The Goodman\'s production page still lists the show as postponed to the 2020/2021 season with no rescheduled date, years later. Brian Friel\'s play did eventually return to a Chicago stage, but through Irish Theatre of Chicago\'s unrelated 2022 production at the Chopin Theatre, not through this one.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: mollySweeneyShowArt,
        alt: 'Molly Sweeney show art: a close-up eye in a gilded picture frame on a green gallery wall, with the title and Goodman Theatre credit below.',
        caption: 'Official show art for the planned revival, built around the close-up eye-in-a-frame motif used across the production\'s marketing.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
      {
        src: mollySweeney2,
        alt: 'An actress playing Molly Sweeney stands with arms outstretched on the production\'s stone-and-light set.',
        caption: 'Kate Fry as Molly, photographed by Michael Brosilow on Todd Rosenthal\'s set during the production\'s final tech process.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: mollySweeney3,
        alt: 'An actor playing Frank Sweeney points accusingly in a dimly lit production still from Molly Sweeney.',
        caption: 'Brendan Coyle as Frank, captured in the same Brosilow photo session documenting the unfinished run.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: mollySweeney4,
        alt: 'An actor playing Mr. Rice gestures while speaking in a warmly lit production still from Molly Sweeney.',
        caption: 'Christopher Donahue as Mr. Rice, completing the three-actor monologue structure at the center of Friel\'s play.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: mollySweeney1,
        alt: 'A wide view of the abstract stone set for Molly Sweeney with all three cast members positioned across the stage.',
        caption: 'A wide view of the finished Owen Theatre set, the clearest evidence that the production reached full tech before it was halted.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: brianFrielPortrait,
        alt: 'Portrait of playwright Brian Friel.',
        caption: 'Brian Friel, the play\'s author, included in the production\'s source materials.',
        orientation: 'portrait',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Brian Friel' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Kate Fry' },
      { role: 'Cast highlight', name: 'Brendan Coyle' },
      { role: 'Cast highlight', name: 'Christopher Donahue' },
    ],
    quickFacts: [
      { label: 'Scheduled run', value: 'Spring 2020, Owen Theatre' },
      { label: 'Status', value: 'Halted by COVID-19 before opening' },
      { label: 'Cast size', value: 'Three-actor monologue structure' },
      { label: 'Current status', value: 'Still listed as postponed, no new date set' },
    ],
    cast: [
      { role: 'Molly Sweeney', name: 'Kate Fry' },
      { role: 'Frank Sweeney', name: 'Brendan Coyle' },
      { role: 'Mr. Rice', name: 'Christopher Donahue' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Brian Friel' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Set Design', name: 'Todd Rosenthal' },
      { role: 'Costume Design', name: 'Noël Huntzinger' },
      { role: 'Lighting Design', name: 'Eric Southern' },
      { role: 'Sound Design and Composition', name: 'Richard Woodbury' },
      { role: 'Production Stage Manager', name: 'Nikki Blue' },
    ],
    recognition: [
      {
        label: 'Full cast and design team',
        detail: 'Casting coverage confirms Kate Fry, Brendan Coyle, and Christopher Donahue as the three-actor cast, with Todd Rosenthal, Noël Huntzinger, Eric Southern, and Richard Woodbury leading design.',
      },
      {
        label: 'Reached final tech',
        detail: 'Michael Brosilow\'s official production photography shows a finished set, full lighting, and costumed performers, confirming the production was essentially complete when the shutdown hit.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'An archive entry defined by absence',
        detail: 'Unlike most pages in this system, Molly Sweeney has no opening night, no run, and no local reviews to draw on, making it a rare record of a production stopped at the threshold of completion.',
      },
      {
        label: 'COVID-19 timing',
        detail: 'The Goodman\'s own suspension notice and the freecraic.com account of the Irish Theatre of Chicago\'s later revival both confirm the pandemic, not any artistic or business decision, ended the engagement.',
      },
    ],
    contextNotes: [
      {
        label: 'Conflicting scheduled dates',
        text: 'Spotlight On Lake\'s casting announcement lists a Mar 27 - Apr 26, 2020 engagement, while the Goodman\'s own synopsis page lists Apr 10 - May 10, 2020. The page preserves both rather than guessing which superseded the other.',
      },
      {
        label: 'Never opened to critics',
        text: 'No Chicago outlet appears to have reviewed this staging. The "Critical Praise" quotes on the Goodman\'s own marketing page (The New York Times, Variety) read as general blurbs about Friel\'s play rather than notices of this unopened Chicago run, so they are not presented here as reviews of the production.',
      },
      {
        label: 'Still postponed',
        text: 'Years after the 2020 shutdown, the official Goodman production page still lists Molly Sweeney as postponed to the 2020/2021 season with no rescheduled date, and the venue\'s public listing pages show no submitted reviews.',
      },
      {
        label: 'A different company finished the story',
        text: 'Irish Theatre of Chicago staged its own, unrelated production of Molly Sweeney at the Chopin Theatre in 2022, directed by Siiri Scott. A 2022 account of that production explicitly notes that Falls\'s Goodman staging had been planned for 2020 or 2021 before "the pandemic put a halt to that."',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/molly-sweeney/',
        summary:
          'The official page still lists the production as postponed to the 2020/2021 season, with no tickets or rescheduled dates available.',
        note: 'Official production page',
      },
      {
        source: 'Spotlight On Lake',
        href: 'https://www.spotlightonlake.com/posts/cast-announced-molly-sweeney-directed-robert-falls',
        summary:
          'Casting announcement confirming Kate Fry, Brendan Coyle, and Christopher Donahue, plus the production\'s design team, ahead of the planned spring 2020 engagement.',
        note: 'Casting coverage',
      },
      {
        source: 'Playbill',
        href: 'https://playbill.com/production/molly-sweeneygoodman-theatre-albert-i-goodman-theatre-2019-2020',
        summary:
          'Playbill\'s production listing for the planned Goodman engagement, part of the 2019-20 season.',
        note: 'Listing',
      },
      {
        source: 'American Theatre',
        href: 'https://www.americantheatre.org/2019/03/28/3-world-premieres-set-for-goodman-theatres-2019-20-season/',
        summary:
          'Coverage of the Goodman\'s 2019/20 season announcement, in which Molly Sweeney was unveiled alongside that season\'s new-play premieres.',
        note: 'Season announcement',
      },
      {
        source: 'Chicago Theater',
        href: 'https://www.chicago-theater.com/shows/albert-theatre/molly-sweeney',
        summary:
          'A listings page confirming the suspension notice and showing no audience reviews were ever submitted for the engagement.',
        note: 'Listing, no reviews on file',
      },
      {
        source: 'Theatre in Chicago',
        href: 'https://www.theatreinchicago.com/molly-sweeney/10434/',
        summary:
          'A listings page showing showtimes as "TBA" with no cast information ever published for the run.',
        note: 'Listing',
      },
      {
        source: 'freecraic.com',
        href: 'https://freecraic.com/irish-theatre-of-chicago-back-on-the-boards-with-molly-sweeney/',
        summary:
          'Coverage of Irish Theatre of Chicago\'s unrelated 2022 revival that explicitly confirms Falls\'s Goodman production "had been planned" for 2020 or 2021 before the pandemic intervened.',
        note: 'Confirms the 2020 production never opened',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/molly-sweeney/' },
      { label: 'Goodman press room', href: 'https://www.goodmantheatre.org/press-rooms/molly-sweeney/' },
      { label: 'Spotlight On Lake casting announcement', href: 'https://www.spotlightonlake.com/posts/cast-announced-molly-sweeney-directed-robert-falls' },
      { label: 'Playbill production listing', href: 'https://playbill.com/production/molly-sweeneygoodman-theatre-albert-i-goodman-theatre-2019-2020' },
      { label: 'American Theatre season announcement', href: 'https://www.americantheatre.org/2019/03/28/3-world-premieres-set-for-goodman-theatres-2019-20-season/' },
      { label: 'Chicago Theater listing', href: 'https://www.chicago-theater.com/shows/albert-theatre/molly-sweeney' },
      { label: 'Theatre in Chicago listing', href: 'https://www.theatreinchicago.com/molly-sweeney/10434/' },
      { label: 'freecraic.com on Irish Theatre of Chicago\'s 2022 revival', href: 'https://freecraic.com/irish-theatre-of-chicago-back-on-the-boards-with-molly-sweeney/' },
    ],
    watchLinks: [
      {
        label: 'Director Robert Falls | Molly Sweeney',
        href: '/media/productions/molly-sweeney/molly-sweeney-director-robert-falls.mp4',
        description: 'Local video in which Falls discusses directing the production during the Goodman\'s 2019/20 season.',
        thumbnail: mollySweeneyShowArt,
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-winters-tale': {
    pageMode: 'featured',
    summary:
      'The Winter\'s Tale records Falls returning to Shakespeare late in his Goodman tenure with a visually bold Goodman staging that critics repeatedly described as inventive, playful, and emotionally generous.',
    publicSummary:
      'Falls stages Shakespeare\'s late romance as a vivid swing between jealousy, loss, comedy, and repair.',
    synopsis:
      'A jealous king accuses his wife of infidelity, setting off a calamitous series of events. What begins as tragedy evolves into a fantastical journey from wrath to redemption to reconciliation, without ever letting the earlier damage disappear.',
    fallsContext:
      'This is part of the Shakespeare line that runs through Falls\'s Chicago work, but the official response around the production emphasizes clarity, feeling, and theatrical playfulness more than monumentality.',
    significance:
      'A late Goodman Shakespeare production that shows Falls balancing narrative readability with the tonal instability that makes the play so difficult and rewarding.',
    story:
      'The archive already places The Winter\'s Tale beside Measure for Measure and The Seagull as evidence of Falls\'s appetite for unstable texts. What makes this page useful is not transfer history but tone: a production praised for making one of Shakespeare\'s most cryptic plays feel accessible without flattening its strangeness, while giving the evening a sharply memorable visual identity built around crowns, fur, and the play\'s famous bear.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: wintersTaleFeatured,
        alt: 'Promotional artwork for The Winter\'s Tale featuring the bear-costumed Mamillius.',
        caption: 'Featured art for Goodman Theatre\'s 2019 production of The Winter\'s Tale.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: wintersTale1,
        alt: 'Dan Donohue as Leontes stands in the foreground while other characters gather behind him in The Winter\'s Tale.',
        caption: 'Leontes dominates the stage as the production\'s early courtly unease turns volatile.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: wintersTale2,
        alt: 'Charlie Herman as Mamillius stands alone in the bear costume in The Winter\'s Tale.',
        caption: 'Mamillius, framed by the production\'s now-iconic bear imagery.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: wintersTale3,
        alt: 'Perdita and Florizel kiss center stage while couples gather around them in The Winter\'s Tale.',
        caption: 'The Bohemia scenes push the production toward warmth, romance, and comic release.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: wintersTale5,
        alt: 'Kate Fry, Dan Donohue, and Nathan Hosner share a tense court scene in The Winter\'s Tale.',
        caption: 'Hermione, Leontes, and Polixenes in the brittle court world before the collapse.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: wintersTale11,
        alt: 'A crowned court figure squares off with the production\'s bear in The Winter\'s Tale.',
        caption: 'The production leans into Shakespeare\'s wild theatricality instead of sanding it down.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'William Shakespeare' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Dan Donohue' },
      { role: 'Cast highlight', name: 'Kate Fry' },
      { role: 'Cast highlight', name: 'Henry Godinez' },
    ],
    quickFacts: [
      { label: 'Run', value: 'May 4 - Jun 9, 2019' },
      { label: 'Venue', value: 'Goodman\'s Albert Theatre' },
      { label: 'Runtime', value: '2 hr 15 min, with one intermission' },
      { label: 'Mode', value: 'Late-career Shakespeare staging' },
    ],
    cast: [
      { role: 'Clown', name: 'Will Allan' },
      { role: 'Nell', name: 'Cher Alvarez' },
      { role: 'Perdita', name: 'Chloe Baldwin' },
      { role: 'Florizel', name: 'Xavier Edward King' },
      { role: 'Dion / Shepherd', name: 'Josh Carpenter' },
      { role: 'Paulina', name: 'Christiana Clark' },
      { role: 'Leontes', name: 'Dan Donohue' },
      { role: 'Emelia / Mopsa', name: 'Amanda Drinkall' },
      { role: 'Hermione', name: 'Kate Fry' },
      { role: 'Camillo', name: 'Henry Godinez' },
      { role: 'Mamillius', name: 'Charlie Herman' },
      { role: 'Polixenes', name: 'Nathan Hosner' },
      { role: 'Mariana / Dorcas', name: 'Susan Jamshidi' },
      { role: 'Autolycus', name: 'Philip Earl Johnson' },
      { role: 'Jailer / Bear', name: 'Mark Lancaster' },
      { role: 'Antigonus', name: 'Gregory Linington' },
      { role: 'Old Shepherd', name: 'Tim Monsion' },
      { role: 'Archidamus / Shepherd', name: 'Christopher Sheard' },
      { role: 'Cleomenes / Shepherd', name: 'Martin Yousif Zebari' },
      { role: 'Understudy', name: 'Alan Ball' },
      { role: 'Understudy', name: 'Dee Dee Batteast' },
      { role: 'Understudy', name: 'Evan T. Coles' },
      { role: 'Understudy', name: 'Will Mobley' },
      { role: 'Understudy', name: 'Eric Parks' },
      { role: 'Understudy', name: 'Christian Wilson' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'William Shakespeare' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Set Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Aaron Spivey' },
      { role: 'Original Music / Sound Design', name: 'Richard Woodbury' },
      { role: 'Choreography', name: 'Tommy Rapley' },
      { role: 'Dramaturg', name: 'Neena Arndt' },
      { role: 'Production Stage Manager', name: 'Briana J. Fahey' },
      { role: 'Stage Manager', name: 'Kimberly Ann McCann' },
      { role: 'Stage Manager', name: 'Nikki Blue' },
    ],
    recognition: [
      {
        label: 'Critical response',
        detail: 'The source package shows praise from Chicago Tribune, Chicago Sun-Times, Newcity Stage, BroadwayWorld, Broadway Blog, Around the Town, and Windy City Times.',
      },
      {
        label: 'Shakespeare thread',
        detail: 'The production was framed by Goodman as following Falls\'s celebrated King Lear and Measure for Measure.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/the-winters-tale/',
        summary:
          'The official page frames the production as a 2019 Albert Theatre staging and emphasizes how the play swings from jealousy and calamity toward reconciliation and wonder.',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2019/05/14/a-tale-of-two-tales-a-review-of-the-winters-tale-at-goodman-theatre/',
        summary:
          'Newcity Stage praises the production as an engaging, dramatic interpretation that communicates Shakespeare\'s storytelling with unusual clarity.',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2019/5/14/18626969/winter-s-tale-as-confounding-as-ever-in-fabulous-goodman-theatre-production',
        summary:
          'The Sun-Times treats the play as a difficult but rewarding challenge and casts Falls\'s staging as a fabulous Goodman production worth wrestling with.',
      },
      {
        source: 'BroadwayWorld Chicago',
        href: 'https://www.broadwayworld.com/chicago/article/BWW-Review-THE-WINTERS-TALE-at-Goodman-Theatre-20190514',
        summary:
          'BroadwayWorld leans into the production\'s whimsy and calls it one of the most inventive and playful Shakespeare stagings in recent memory.',
      },
      {
        source: 'Around the Town Chicago',
        href: 'https://aroundthetownchicago.com/theatre-reviews/the-winters-tale/',
        summary:
          'Around the Town responds to the emotional breadth of the evening, stressing that the production can make an audience laugh, cry, and leave impressed by the ensemble.',
      },
      {
        source: 'Stage and Cinema',
        href: 'https://stageandcinema.com/2019/05/14/winters-tale-goodman/',
        summary:
          'Stage and Cinema places the Goodman production inside the play\'s larger tragicomic sweep, reading Falls\'s approach as a way into Shakespeare\'s late strangeness.',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/the-winters-tale/' },
      { label: 'Newcity Stage review', href: 'https://www.newcitystage.com/2019/05/14/a-tale-of-two-tales-a-review-of-the-winters-tale-at-goodman-theatre/' },
      { label: 'Stage and Cinema review', href: 'https://stageandcinema.com/2019/05/14/winters-tale-goodman/' },
      { label: 'Around the Town Chicago review', href: 'https://aroundthetownchicago.com/theatre-reviews/the-winters-tale/' },
      { label: 'Picture This Post review', href: 'https://www.picturethispost.com/goodman-theatre-presents-the-winters-tale-review/' },
      { label: 'BroadwayWorld Chicago review', href: 'https://www.broadwayworld.com/chicago/article/BWW-Review-THE-WINTERS-TALE-at-Goodman-Theatre-20190514' },
      { label: 'Chicago Sun-Times review', href: 'https://chicago.suntimes.com/2019/5/14/18626969/winter-s-tale-as-confounding-as-ever-in-fabulous-goodman-theatre-production' },
      { label: 'Splash Mags review', href: 'https://splashmags.com/2019/05/a-winters-tale-at-the-goodman-theatre-review-an-obscure-delight/' },
    ],
    watchLinks: [
      {
        label: 'The Winter\'s Tale | Director Robert Falls',
        href: '/media/productions/the-winter-s-tale/the-winter-s-tale-director-robert-falls.mp4',
        description: 'Director Robert Falls discusses The Winter\'s Tale.',
        thumbnail: wintersTaleFeatured,
      },
    ],
    pressQuotes: [
      { quote: 'Not dull for a moment.', source: 'Chicago Tribune' },
      {
        quote: 'One of the most engaging, dramatic interpretations of Shakespeare\'s work you\'re likely to see.',
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2019/05/14/a-tale-of-two-tales-a-review-of-the-winters-tale-at-goodman-theatre/',
      },
      {
        quote: 'Goodman Theatre delivers a The Winter\'s Tale full of whimsy.',
        source: 'BroadwayWorld',
        href: 'https://www.broadwayworld.com/chicago/article/BWW-Review-THE-WINTERS-TALE-at-Goodman-Theatre-20190514',
      },
      { quote: 'Embraces ambiguity with gusto, offering a smartly realized and multi-dimensional realization of one of Shakespeare\'s most cryptic works.', source: 'Broadway Blog' },
      {
        quote: 'Powerful and very extraordinary.',
        source: 'Around the Town',
        href: 'https://aroundthetownchicago.com/theatre-reviews/the-winters-tale/',
      },
      {
        quote: 'A fabulous Goodman Theatre production.',
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2019/5/14/18626969/winter-s-tale-as-confounding-as-ever-in-fabulous-goodman-theatre-production',
      },
      {
        quote: 'One of the most inventive and playful productions of Shakespeare I\'ve seen.',
        source: 'BroadwayWorld',
        href: 'https://www.broadwayworld.com/chicago/article/BWW-Review-THE-WINTERS-TALE-at-Goodman-Theatre-20190514',
      },
      { quote: 'A clear-eyed staging.', source: 'Chicago Tribune' },
      { quote: 'A masterpiece of storytelling.', source: 'Windy City Times' },
      { quote: 'Both Goodman and Falls do the Bard proud... you\'re in for a treat.', source: 'Windy City Times' },
      {
        quote: 'Will have you laughing and crying.',
        source: 'Around the Town',
        href: 'https://aroundthetownchicago.com/theatre-reviews/the-winters-tale/',
      },
      { quote: 'Both accessible and magical.', source: 'Windy City Times' },
      {
        quote: 'Provides a startling masterclass in communicating the clear, concise storytelling of Shakespeare\'s language.',
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2019/05/14/a-tale-of-two-tales-a-review-of-the-winters-tale-at-goodman-theatre/',
      },
      {
        quote: 'The Winter\'s Tale is a bear of a play; seeing Falls wrestle with it is worth your time.',
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2019/5/14/18626969/winter-s-tale-as-confounding-as-ever-in-fabulous-goodman-theatre-production',
      },
    ],
    audienceFeedback: [
      {
        quote: 'This play holds your... attention. The set, costumes, props, and acting are all superb. We highly recommend this play.',
        author: 'Rich R.',
        source: 'Facebook',
      },
      {
        quote: 'Quite a performance. Made Shakespeare come alive. Don\'t miss it.',
        author: 'Linda F.',
        source: 'Facebook',
      },
      {
        quote: 'I saw The Winter\'s Tale at @GoodmanTheatre last night, and I have SO MANY FEELINGS. Which is exactly the reaction I should have after watching The Winter\'s Tale. I have to go simultaneously cry and rejoice now.',
        author: 'Lauren E.',
        source: 'X',
      },
      {
        quote: 'Stunning... I was especially grateful to the cast.',
        author: 'Wendy B.',
        source: 'Facebook',
      },
      {
        quote: 'Enjoyed last night\'s performance! Unique Shakespeare play made easy to enjoy with great cast and directorial embellishments.',
        author: 'Marcia S.',
        source: 'Facebook',
      },
      {
        quote: 'A really different Shakespeare play-both tragedy and comedy. But so well done. Saw it last night and enjoyed it very much!',
        author: 'Neta J.',
        source: 'Facebook',
      },
      {
        quote: 'It was delightful! The cast is so comfortable and fun to watch. Loved it!',
        author: 'Debbie R.',
        source: 'Facebook',
      },
      {
        quote: 'Saw this Shakespeare play at the Goodman today-amazing!!',
        author: 'Catherine F.',
        source: 'Facebook',
      },
      {
        quote: 'An engaging, heartfelt production with great staging, a wonderful, talented ensemble and a story which struggles with jealousy, deception, humor, redemption and love.',
        author: 'Jim H.',
        source: 'Facebook',
      },
    ],
    contextNotes: [
      {
        label: 'Reception pattern',
        text: 'The source package consistently emphasizes clarity, whimsy, and emotional force rather than reverence alone.',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'were-only-alive-for-a-short-amount-of-time': {
    pageMode: 'featured',
    summary:
      'We\'re Only Alive for a Short Amount of Time widens Falls\'s late Goodman record into autobiographical music theatre: David Cale\'s one-man survival story, built from family memory, song, and a chamber-orchestra frame, later traveled from Chicago to New York.',
    publicSummary:
      'David Cale\'s musical memoir follows a boy surviving a fraught home through song, birds, and theatrical invention in a deeply personal Goodman staging backed by a six-piece orchestra.',
    synopsis:
      'Growing up, writer-performer David Cale escaped his parents\' fraught marriage by singing in his bedroom and tending to birds in his backyard animal hospital until tragedy changed everything. Under Robert Falls\'s direction, those memories become an intimate musical memoir of hope, family, transcendence, and survival.',
    fallsContext:
      'The production places Falls inside a highly authored solo form: not a conventional play but a memoir-musical shaped around Cale\'s voice, songs, and stage presence. Its later Public Theater transfer shows how successfully Falls translated that personal material into a production with life beyond Chicago.',
    significance:
      'A late Goodman-era memoir musical that later transferred to the Public Theater in New York, broadening the archive\'s picture of Falls beyond ensemble drama, adaptation, and classical repertoire.',
    story:
      'This title matters because it shifts the scale of the archive without reducing ambition. Instead of epic adaptation or institutional farewell, the page turns toward a single performer, a six-piece ensemble, and the careful shaping of memory into theatre. The piece had a fuller life cycle than a single run: a work-in-progress appearance at The Public\'s 2018 Under the Radar Festival, a full Goodman run, and a 2019 Public Theater engagement in New York.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: onlyAlivePoster,
        alt: 'Poster art for We\'re Only Alive for a Short Amount of Time featuring David Cale surrounded by birds and childhood imagery.',
        caption: 'Poster art for Goodman Theatre\'s production of We\'re Only Alive for a Short Amount of Time.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: onlyAliveKeyArt,
        alt: 'Key art for We\'re Only Alive for a Short Amount of Time featuring David Cale without title treatment.',
        caption: 'Title-free key art centered on David Cale and the production\'s bird imagery.',
        orientation: 'square',
        kind: 'art',
      },
      {
        src: onlyAliveArt,
        alt: 'Artwork for We\'re Only Alive for a Short Amount of Time showing David Cale with birds and a childhood figure layered across his body.',
        caption: 'Alternate key art layers David Cale, birds, and childhood memory into one image.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: onlyAlive1,
        alt: 'David Cale performs at a standing microphone with the chamber ensemble behind him.',
        caption: 'David Cale in performance with the onstage ensemble just visible behind him.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: onlyAlive5,
        alt: 'David Cale stands beneath hanging model airplanes as the ensemble performs behind him.',
        caption: 'Model airplanes and chamber players enlarge the memoir into theatrical flight.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: onlyAlive6,
        alt: 'An empty stage picture of suspended bird cages and a stool from We\'re Only Alive for a Short Amount of Time.',
        caption: 'The scenic world strips the stage down to bird cages, shadow, and memory.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: onlyAliveReh1,
        alt: 'Robert Falls and a collaborator study notes during rehearsal for We\'re Only Alive for a Short Amount of Time.',
        caption: 'Robert Falls in rehearsal, working through the piece\'s precise musical-theatrical structure.',
        orientation: 'portrait',
        kind: 'rehearsal',
      },
      {
        src: onlyAliveReh2,
        alt: 'David Cale poses with the ensemble in a rehearsal photo for We\'re Only Alive for a Short Amount of Time.',
        caption: 'The ensemble photo highlights the chamber-music scale that shapes the production.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
      {
        src: onlyAliveReh3,
        alt: 'A pianist rehearses the show in a studio for We\'re Only Alive for a Short Amount of Time.',
        caption: 'Rehearsal materials underline how tightly the show depends on live musical collaboration.',
        orientation: 'portrait',
        kind: 'rehearsal',
      },
      {
        src: onlyAliveReh4,
        alt: 'David Cale sings at a microphone during rehearsal with a pianist behind him.',
        caption: 'A rehearsal moment that captures the show\'s hybrid of concert, memoir, and theatre.',
        orientation: 'portrait',
        kind: 'rehearsal',
      },
      {
        src: davidCalePortrait,
        alt: 'Portrait of David Cale seated onstage.',
        caption: 'David Cale, performer and author of We\'re Only Alive for a Short Amount of Time.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: robertFallsPortrait2013,
        alt: 'Robert Falls, photographed circa 2013.',
        caption: 'Robert Falls portrait included with the We\'re Only Alive production materials.',
        orientation: 'portrait',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Writer / composer / performer', name: 'David Cale' },
      { role: 'Music', name: 'David Cale and Matthew Dean Marsh' },
      { role: 'Director', name: 'Robert Falls' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Sep 15 - Oct 21, 2018' },
      { label: 'Venue', value: 'Albert Theatre, Goodman Theatre' },
      { label: 'Runtime', value: '90 minutes, no intermission' },
      { label: 'Scale', value: 'Solo memoir with six-piece orchestra' },
      { label: 'Afterlife', value: 'Public Theater, New York (2019)' },
    ],
    cast: [{ role: 'Performer', name: 'David Cale' }],
    creativeTeam: [
      { role: 'Written and Performed by', name: 'David Cale' },
      { role: 'Lyrics', name: 'David Cale' },
      { role: 'Music', name: 'David Cale and Matthew Dean Marsh' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Arrangements / Music Direction', name: 'Matthew Dean Marsh' },
      { role: 'Set Design', name: 'Kevin Depinet' },
      { role: 'Costume Design', name: 'Paul Marlow' },
    ],
    recognition: [
      {
        label: 'Transfer story',
        detail: 'A 2019 New York engagement at the Public Theater followed the Goodman run.',
      },
      {
        label: 'Form shift',
        detail: 'The production combines memoir, live music, and solo performance rather than fitting the archive\'s more common ensemble-play model.',
      },
      {
        label: 'Development path',
        detail: 'David Cale\'s source bio notes that a work-in-progress of the piece appeared in The Public Theater\'s 2018 Under the Radar Festival before the full production life documented here.',
      },
      {
        label: 'Cale collaboration history',
        detail: 'The Goodman source material places the production within a long-running relationship between David Cale and the theatre, making the piece part of an extended artistic conversation rather than an isolated commission.',
      },
    ],
    contextNotes: [
      {
        label: 'Music-theatre context',
        text: 'The piece is staged as a musical memoir of hope, family, and transcendence, anchored by a six-piece onstage orchestra and David Cale\'s intimate autobiographical storytelling.',
      },
      {
        label: 'Production history',
        text: 'The docs outline a full development arc: a work-in-progress appearance in The Public Theater\'s 2018 Under the Radar Festival, the Goodman Theatre run in Chicago from September 15 to October 21, 2018, and a 2019 continuation at the Public Theater in New York.',
      },
      {
        label: 'Artist relationship',
        text: 'The Goodman press material places the show inside David Cale\'s long relationship with the theatre, noting earlier premieres there including Floyd and Clea Under the Western Sky, Lillian, Somebody Else\'s House, Deep in a Dream of You, Smooch Music, and The Redthroats.',
      },
      {
        label: 'David Cale background',
        text: 'Beyond Goodman, Cale\'s career spans Playwrights Horizons and The Public, an Obie Award for Lillian, a Bessie Award for Deep in a Dream of You, a This American Life recording, collaborations with Dael Orlandersmith and Matthew Dean Marsh, song lyrics for artists including Debbie Harry and Elvis Costello, and screen work including Pollock, The Slaughter Rule, and The Good Wife.',
      },
      {
        label: 'New York continuation',
        text: 'A 2019 follow-up engagement continued the piece as We\'re Only Alive for a Short Amount of Time (New York) at the Public Theater.',
      },
      {
        label: 'Public Theater framing',
        text: 'The New York engagement was framed as a return for Lortel Award-winning writer-performer David Cale, again directed by Tony Award winner Robert Falls and presented in co-production with Goodman Theatre.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/were-only-alive-for-a-short-amount-of-time/',
        summary:
          'The official production page describes the show as a musical memoir of hope, family, and transcendence and foregrounds the six-piece orchestra and major local praise.',
        note: 'Official production page',
      },
      {
        source: 'Goodman Theatre Press Room',
        href: 'https://www.goodmantheatre.org/press-rooms/were-only-alive-for-a-short-amount-of-time/',
        summary:
          'Goodman\'s press room materials, including production biography and artist background.',
        note: 'Press materials',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2018/09/26/no-one-gets-out-alive-a-review-of-were-only-alive-for-a-short-amount-of-time-at-goodman-theatre/',
        summary:
          'Chicago review coverage of the 2018 Goodman run.',
        note: 'Review',
      },
      {
        source: 'Stage and Cinema',
        href: 'https://stageandcinema.com/2018/09/25/were-only-alive/',
        summary:
          'An early review of the original Goodman production.',
        note: 'Review',
      },
      {
        source: 'Playbill',
        href: 'https://playbill.com/article/what-did-critics-think-of-were-only-alive-for-a-short-amount-of-time-at-the-public-theater',
        summary:
          'Playbill\'s critics roundup for the Public Theater transfer, connecting the Chicago production to its New York reception.',
        note: 'Critics roundup',
      },
      {
        source: 'NY Stage Review',
        href: 'https://nystagereview.com/2019/06/27/were-only-alive-for-a-short-amount-of-time-david-cale-digs-deep/',
        summary:
          'New York transfer coverage of the Public Theater engagement.',
        note: 'Review',
      },
      {
        source: 'The New York Times',
        href: 'https://www.nytimes.com/2019/07/03/theater/david-cale-were-only-alive-public-theater.html',
        summary:
          'The doc packet also preserves New York Times coverage of the production\'s Public Theater life.',
        note: 'Feature',
      },
      {
        source: 'Theatre In Chicago',
        href: 'https://www.theatreinchicago.com/were-only-alive-for-a-short-amount-of-time/9986/',
        summary:
          'Regional listing and review coverage captured alongside the rest of the local source materials.',
        note: 'Listing',
      },
      {
        source: 'TDF',
        href: 'https://www.tdf.org/shows/17572/were-only-alive-for-a-short-amount-of-time/',
        summary:
          'A TDF listing that also carries a Chicago Tribune quote used in the New York transfer materials.',
        note: 'Transfer listing',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/were-only-alive-for-a-short-amount-of-time/' },
      { label: 'Goodman press room', href: 'https://www.goodmantheatre.org/press-rooms/were-only-alive-for-a-short-amount-of-time/' },
      { label: 'Playbill critics roundup', href: 'https://playbill.com/article/what-did-critics-think-of-were-only-alive-for-a-short-amount-of-time-at-the-public-theater' },
      { label: 'NY Stage Review', href: 'https://nystagereview.com/2019/06/27/were-only-alive-for-a-short-amount-of-time-david-cale-digs-deep/' },
      { label: 'The New York Times', href: 'https://www.nytimes.com/2019/07/03/theater/david-cale-were-only-alive-public-theater.html' },
      { label: 'Newcity Stage', href: 'https://www.newcitystage.com/2018/09/26/no-one-gets-out-alive-a-review-of-were-only-alive-for-a-short-amount-of-time-at-goodman-theatre/' },
      { label: 'Stage and Cinema', href: 'https://stageandcinema.com/2018/09/25/were-only-alive/' },
      { label: 'Theatre In Chicago', href: 'https://www.theatreinchicago.com/were-only-alive-for-a-short-amount-of-time/9986/' },
      { label: 'TDF listing', href: 'https://www.tdf.org/shows/17572/were-only-alive-for-a-short-amount-of-time/' },
    ],
    watchLinks: [
      {
        label: 'We\'re Only Alive | Director Video',
        href: '/media/productions/were-only-alive-for-a-short-amount-of-time/were-only-alive-director-video.mp4',
        description: 'A director video for We\'re Only Alive for a Short Amount of Time.',
        thumbnail: onlyAlivePoster,
      },
    ],
    pressQuotes: [
      {
        quote: 'an exquisite six-piece orchestra',
        source: 'PerformInk',
      },
      {
        quote: 'survival story, deeply moving in its courage',
        source: 'Chicago Tribune',
      },
      {
        quote: 'A deeply personal, indisputably courageous, frequently shocking and deeply moving autobiographical show.',
        source: 'Chicago Tribune',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'an-enemy-of-the-people': {
    pageMode: 'featured',
    summary:
      'An Enemy of the People extends Falls\'s late Goodman adaptation work, turning Ibsen\'s civic crisis into a sharply contemporary conflict over contamination, power, and public truth.',
    publicSummary:
      'Falls revisits Ibsen through a politically charged Goodman staging about two brothers, a poisoned community, and the cost of speaking plainly.',
    synopsis:
      'A doctor discovers that the local water source is dangerous. What begins as a scientific alarm becomes a brutal fight over money, reputation, family, and whether a public will accept the truth when the truth threatens its own comfort.',
    fallsContext:
      'Together with The Seagull, 2666, and The Cherry Orchard, this production helps define the adaptation-heavy phase of Falls\'s later Goodman years.',
    significance:
      'A late Goodman adaptation of Ibsen that ties Falls\'s classical work directly to environmental anxiety and civic distrust.',
    story:
      'The page matters less as a transfer narrative than as a statement of method. Falls takes a classic political drama and presses it toward immediate contemporary pressure, letting the archive show how often his later work returned to public argument, not just private psychology.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: enemyShowArt,
        alt: 'Lanise Antoine Shelley and Philip Earl Johnson in the Goodman Theatre show art for An Enemy of the People.',
        caption: 'Official Goodman Theatre show art for An Enemy of the People, featuring Lanise Antoine Shelley and Philip Earl Johnson.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Henrik Ibsen' },
      { role: 'Director / adapter context', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Philip Earl Johnson' },
      { role: 'Cast highlight', name: 'Scott Jaeck' },
      { role: 'Cast highlight', name: 'Lanise Antoine Shelley' },
      { role: 'Cast highlight', name: 'Rebecca Hurd' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Mar 10 - Apr 15, 2018' },
      { label: 'Runtime', value: '2 hr 20 min' },
      { label: 'Venue', value: 'Goodman Theatre' },
      { label: 'Frame', value: 'Falls adaptation of Ibsen' },
    ],
    cast: [
      { role: 'Thomas Stockmann', name: 'Philip Earl Johnson' },
      { role: 'Peter Stockmann', name: 'Scott Jaeck' },
      { role: 'Katherine', name: 'Lanise Antoine Shelley' },
      { role: 'Petra', name: 'Rebecca Hurd' },
      { role: 'Billing', name: 'Jesse Bhamrah' },
      { role: 'Morten Kiil', name: 'David Darlow' },
      { role: 'Aslaksen', name: 'Allen Gilmore' },
      { role: 'Hovstad', name: 'Aubrey Deeker Hernandez' },
      { role: 'The Drunk', name: 'Larry Neumann, Jr.' },
      { role: 'Townsperson', name: 'Carley Cornelius' },
      { role: 'Townsperson', name: 'Arya Daire' },
      { role: 'Townsperson', name: 'Guy Massey' },
      { role: 'Townsperson', name: 'Roderick Peeples' },
      { role: 'Townsperson', name: 'Dustin Whitehead' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Henrik Ibsen' },
      { role: 'Director / adapter', name: 'Robert Falls' },
      { role: 'Translation basis', name: 'Eleanor Marx-Aveling' },
      { role: 'Scenic Design', name: 'Todd Rosenthal' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Robert Wierzel' },
      { role: 'Sound Design / original music', name: 'Richard Woodbury' },
      { role: 'Dramaturg', name: 'Neena Arndt' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Casting', name: 'Erica Sartini-Combs' },
      { role: 'Assistant Director', name: 'Michael Cotey' },
      { role: 'Production Stage Manager', name: 'Alden Vasquez' },
      { role: 'Stage Manager', name: 'Jonathan Nook' },
    ],
    recognition: [
      {
        label: 'Adaptation context',
        detail: 'The local timeline and credits frame the production as Falls\'s own adaptation of Ibsen.',
      },
      {
        label: 'Contemporary pressure',
        detail: 'Goodman positioned the production as startlingly current, using water contamination and civic corruption to sharpen the play\'s public stakes.',
      },
      {
        label: 'Late-career adaptation work',
        detail: 'The production belongs to a run of late Goodman classics in which Falls adapted or radically reframed canonical texts rather than treating them as museum pieces.',
      },
      {
        label: 'Official critical trail',
        detail: 'Goodman\'s production page preserves strong local notices from the Chicago Tribune, Chicago Sun-Times, and Daily Herald, giving this page a clearer reception footprint than the image archive alone suggests.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Goodman Theatre records the production as a Robert Falls staging of Henrik Ibsen\'s An Enemy of the People, running March 10-April 15, 2018 with a listed runtime of two hours and twenty minutes including one intermission.',
      },
      {
        label: 'Adaptation lineage',
        text: 'The local program credits Falls as director and adapter, working from the Eleanor Marx-Aveling translation, which places the production in a long line of English-language Ibsen adaptations rather than a neutral revival.',
      },
      {
        label: 'Ibsen context',
        text: 'Ibsen wrote the 1882 play around a doctor who discovers contaminated public baths and is attacked for threatening the town\'s economic interests, a structure that made the Goodman framing around water, corruption, and public truth especially direct.',
      },
      {
        label: 'Ensemble record',
        text: 'The official artist list extends beyond the principal Stockmann family and newspaper roles to a five-person townsperson ensemble, underscoring the production\'s public-meeting and civic-crowd dimension.',
      },
      {
        label: 'Official framing',
        text: 'The Goodman page sells the production on the immediacy of a water-contamination crisis and the collision between political ambition and moral integrity.',
      },
      {
        label: 'Critical trail',
        text: 'Goodman preserved local praise calling the staging a must-see show, a powerhouse production, a superb revival, and fiercely acted, though the project files do not include full review packets.',
      },
      {
        label: 'Archive note',
        text: 'The current project files preserve official Goodman show art and a teaser link but no production stills or rehearsal images, so the page remains a text-led late-Goodman profile.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/an-enemy-of-the-people/',
        summary:
          'The official page presents the production as a timely revival and highlights praise from Chicago Sun-Times and Daily Herald.',
      },
    ],
    watchLinks: [
      {
        label: 'An Enemy of the People | Teaser',
        href: 'https://www.youtube.com/watch?v=nfE8mrBLv-8',
        description: 'Official Goodman teaser linked in the local production program.',
        thumbnail: enemyShowArt,
      },
    ],
    pressQuotes: [
      {
        quote: '"A powerhouse production"',
        source: 'Chicago Sun-Times',
      },
      {
        quote: '"Marvelously staged"',
        source: 'Chicago Sun-Times',
      },
      {
        quote: 'A "superb revival"',
        source: 'Daily Herald',
      },
      {
        quote: '"Fiercely acted"',
        source: 'Daily Herald',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/an-enemy-of-the-people/' },
      { label: 'An Enemy of the People play background', href: 'https://en.wikipedia.org/wiki/An_Enemy_of_the_People' },
      { label: 'Robert Falls career context', href: 'https://en.wikipedia.org/wiki/Robert_Falls' },
      { label: 'Official Goodman teaser', href: 'https://www.youtube.com/watch?v=nfE8mrBLv-8' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'blind-date': {
    pageMode: 'featured',
    summary:
      'Blind Date adds a Cold War political comedy to Falls\'s late Goodman record, treating Reagan and Gorbachev not as textbook figures but as performers inside a high-stakes private negotiation.',
    publicSummary:
      'Rogelio Martinez imagines a sly backstage encounter between Reagan and Gorbachev, with Falls shaping the history into comic political chamber theatre.',
    synopsis:
      'Before social media and permanent news churn, two geopolitical icons meet to cool the arms race while their spouses wage a more intimate contest nearby. History is reframed as chemistry, theatermanship, and tactical performance.',
    fallsContext:
      'Blind Date shows Falls staying active in contemporary political writing even while his later archive is often remembered for classics and adaptations.',
    significance:
      'A 2018 world premiere that threads political comedy and historical speculation into the later Goodman years.',
    story:
      'The official production pitch makes the play feel almost like diplomatic farce: world history reduced to posture, flirtation, mistrust, and tone. That kind of pressure-cooker structure fits a director interested in how public life becomes performance under scrutiny.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: blindDate1,
        alt: 'Rob Riley as Ronald Reagan and William Dick as Mikhail Gorbachev shaking hands onstage in Blind Date.',
        caption: 'Rob Riley and William Dick in Blind Date at Goodman Theatre.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: blindDate2,
        alt: 'Deanna Dunagan as Nancy Reagan and Mary Beth Fisher as Raisa Gorbachev seated across a tea table in Blind Date.',
        caption: 'Deanna Dunagan and Mary Beth Fisher in one of Blind Date\'s sharp domestic counter-scenes.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: blindDate4,
        alt: 'William Dick as Mikhail Gorbachev and Rob Riley as Ronald Reagan crossing the stage in Blind Date.',
        caption: 'William Dick and Rob Riley in Blind Date at Goodman Theatre.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: blindDateShowArt,
        alt: 'Blind Date show art featuring Reagan and Gorbachev against a magenta background.',
        caption: 'Official Blind Date show art from Goodman Theatre.',
        orientation: 'landscape',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Rogelio Martinez' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Rob Riley' },
      { role: 'Cast highlight', name: 'William Dick' },
      { role: 'Cast highlight', name: 'Deanna Dunagan' },
      { role: 'Cast highlight', name: 'Mary Beth Fisher' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Jan 20 - Feb 25, 2018' },
      { label: 'Venue', value: 'Albert Theatre' },
      { label: 'Runtime', value: '2 hr 30 min, including one intermission' },
      { label: 'Status', value: 'World premiere' },
    ],
    cast: [
      { role: 'Ronald Reagan', name: 'Rob Riley' },
      { role: 'Nancy Reagan', name: 'Deanna Dunagan' },
      { role: 'Mikhail Gorbachev', name: 'William Dick' },
      { role: 'Raisa Gorbachev', name: 'Mary Beth Fisher' },
      { role: 'George Shultz', name: 'Jim Ortlieb' },
      { role: 'Eduard Shevardnadze', name: 'Steve Pickering' },
      { role: 'Edmund Morris', name: 'Thomas J. Cox' },
      { role: 'Ensemble', name: 'Jim Farruggio' },
      { role: 'Ensemble', name: 'Torrey Hanson' },
      { role: 'Ensemble', name: 'Gregory Linington' },
      { role: 'Ensemble', name: 'Doug McDade' },
      { role: 'Ensemble', name: 'Michael Milligan' },
      { role: 'Ensemble', name: 'Craig Spidle' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Rogelio Martinez' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Riccardo Hernandez' },
      { role: 'Costume Design', name: 'Amy Clark' },
      { role: 'Lighting Design', name: 'Aaron Spivey' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Dramaturg', name: 'Jonathan L. Green' },
      { role: 'Production Stage Manager', name: 'Briana J. Fahey' },
      { role: 'Stage Manager', name: 'Kimberly Ann McCann' },
    ],
    recognition: [
      {
        label: 'World premiere',
        detail: 'Timeline data identifies Blind Date as a Goodman world premiere.',
      },
      {
        label: 'Political chamber piece',
        detail: 'The production compresses Cold War diplomacy into an intimate comic encounter staged as personality theater.',
      },
      {
        label: 'Cold War trilogy endpoint',
        detail: 'Martinez\'s play is widely described as the final piece in his Cold War trilogy, following earlier works about U.S.-Chinese relations and East Berlin.',
      },
      {
        label: 'Development-to-premiere path',
        detail: 'The script had a visible pre-Goodman life through the Denver Center\'s 2017 Colorado New Play Summit before its 2018 Goodman world premiere.',
      },
    ],
    contextNotes: [
      {
        label: 'Production history',
        text: 'Goodman Theatre records Blind Date as a Robert Falls-directed world premiere by Rogelio Martinez, running January 20-February 25, 2018 in the Albert Theatre with a runtime of two hours and thirty minutes including one intermission.',
      },
      {
        label: 'Historical frame',
        text: 'The play imagines Ronald Reagan and Mikhail Gorbachev at their first 1985 Geneva Summit meeting, turning nuclear-arms diplomacy into a negotiation of chemistry, story, status, and private performance.',
      },
      {
        label: 'Development context',
        text: 'A Denver Center NewsCenter feature tied the script to the 2017 Colorado New Play Summit and described Blind Date as a commissioned political thriller centered on world leaders colliding at a moment of possible transformation.',
      },
      {
        label: 'Playwright context',
        text: 'Martinez\'s broader career record places Blind Date inside a Cold War trilogy, alongside Ping Pong and Born in East Berlin, and identifies the Goodman staging as the play\'s major Chicago premiere under Falls.',
      },
      {
        label: 'Ensemble record',
        text: 'The official Goodman artist list includes six ensemble performers in addition to the named Reagan, Gorbachev, spouse, adviser, and Edmund Morris roles, giving the page a fuller public record of the production company.',
      },
      {
        label: 'Official framing',
        text: 'The Goodman page emphasizes the play\'s mix of arms-race history, backstage comedy, and a private battle of wills between world leaders and their spouses.',
      },
      {
        label: 'Critical trail',
        text: 'Goodman preserved praise from Daily Herald and the Chicago Tribune, including notes on subtle performances and the production being well worth seeing, though the local project files do not include the full review packets.',
      },
      {
        label: 'Photo source',
        text: 'Current stage stills and show art are sourced from the official Goodman Theatre production archive for the 2018 world premiere.',
      },
      {
        label: 'Source note',
        text: 'Run dates, runtime, cast, creative credits, and pull quotes are drawn from the official Goodman archive page, with broader development and playwright context separated into Denver Center and Martinez background sources.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/blind-date/',
        summary:
          'The official page positions the premiere as a sly political comedy and includes critical praise quoted from Daily Herald.',
      },
    ],
    pressQuotes: [
      {
        quote: '"Subtle and enlivening performances"',
        source: 'Daily Herald',
      },
      {
        quote: '"Well worth seeing"',
        source: 'Chicago Tribune',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/blind-date/' },
      { label: 'Rogelio Martinez playwright context', href: 'https://en.wikipedia.org/wiki/Rogelio_Martinez_(playwright)' },
      { label: 'Denver Center development interview', href: 'https://www.denvercenter.org/news-center/summit-spotlight-rogelio-martinez-on-when-world-leaders-collide/' },
      { label: 'Robert Falls career context', href: 'https://en.wikipedia.org/wiki/Robert_Falls' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'uncle-vanya': {
    pageMode: 'featured',
    summary:
      'Uncle Vanya returns Falls to Chekhov in his 30th-anniversary Goodman season, pairing Annie Baker\'s contemporary-sounding version with a worn country estate, a quietly starry ensemble, and a production tuned to regret, humor, and emotional attrition.',
    publicSummary:
      'Falls directs Annie Baker\'s adaptation of Chekhov in the Owen Theatre, leaning into deadpan humor, emotional drift, and the slow ache of a ruined household.',
    synopsis:
      'Tensions run high at the remote estate of an elderly professor, where resentments flow as freely as the vodka. As the professor\'s health fails, his extended family is forced to confront disturbing futures while still foundering in a disconcerting past.',
    fallsContext:
      'In the Goodman program, Falls links the production directly to the Stanislavsky and Chekhov study that fed his 2010 Seagull. He describes Uncle Vanya as a play he could finally understand at 62: a drama of aging, regret, loss, and the stubborn fact that none of the characters gives up.',
    significance:
      'A major 2017 Goodman staging that pairs Falls with Annie Baker\'s adaptation during his 30th anniversary as Artistic Director, turning a canonical Chekhov play into an intimate, actor-driven late-Goodman chamber piece.',
    story:
      'Uncle Vanya matters because it shows Falls approaching a canonical text through another living playwright\'s ear while also using the production to think publicly about age, time, and artistic maturity. Baker\'s language update, the Owen Theatre scale, and the 30th-anniversary context all point toward a production interested in intimacy rather than monument, even while working inside one of theatre\'s most haunted classics.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: uncleVanyaShowArt,
        alt: 'Tim Hopper as Vanya stands amid books and furniture in the dimly lit estate interior used as Uncle Vanya show art.',
        caption: 'Show art centered on Tim Hopper as Vanya inside Todd Rosenthal\'s cluttered estate interior.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: uncleVanya2,
        alt: 'A wide stage view of the Uncle Vanya ensemble spread across the weathered country-house set.',
        caption: 'A full-stage view that shows the production\'s decaying estate and large-family geometry.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: uncleVanya3,
        alt: 'Sonya embraces Vanya from behind as he sits in grief beside a desk.',
        caption: 'Sonya and Vanya compress the production\'s emotional world into a single intimate gesture.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: uncleVanya4,
        alt: 'Astrov reaches toward Yelena near the open doors of the estate house.',
        caption: 'Astrov and Yelena framed against the open threshold that keeps promising escape.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: uncleVanya6,
        alt: 'Yelena leans toward Vanya in a dim interior as he kneels beside her.',
        caption: 'The production pushes desire and disappointment into a hushed, near-candlelit confrontation.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: uncleVanya7,
        alt: 'Vanya and Astrov sit talking at a table in the country house.',
        caption: 'Vanya and Astrov in one of the production\'s talk-heavy, tension-filled domestic scenes.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: uncleVanya8,
        alt: 'Yelena grips Sonya by the shoulders during an intense conversation.',
        caption: 'Yelena and Sonya bring the play\'s private anguish into sharp physical focus.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: uncleVanya9,
        alt: 'Yelena bends over the seated professor Serebryakov in a pool of light.',
        caption: 'The professor and Yelena caught in one of the production\'s most tenderly unhappy images.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: uncleVanya11,
        alt: 'An empty view of the Uncle Vanya set showing the faded walls, chandelier, furniture, and open doors of the estate.',
        caption: 'Todd Rosenthal\'s set turns the estate itself into one of the production\'s central characters.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Anton Chekhov' },
      { role: 'Adaptation', name: 'Annie Baker' },
      { role: 'Literal translation support', name: 'Margarita Shalina' },
      { role: 'Director', name: 'Robert Falls' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Feb 11 - Mar 19, 2017' },
      { label: 'Venue', value: 'Owen Theatre, Goodman Theatre' },
      { label: 'Runtime', value: '2 hr 40 min including one intermission' },
      { label: 'Mode', value: 'Annie Baker adaptation' },
      { label: 'Season context', value: 'Falls\'s 30th anniversary at Goodman' },
    ],
    cast: [
      { role: 'Ivan Petrovich (Vanya)', name: 'Tim Hopper' },
      { role: 'Mikhail Lvovich Astrov', name: 'Marton Csokas' },
      { role: 'Yelena Andreyevna', name: 'Kristen Bush' },
      { role: 'Sophia Alexandrovna (Sonya)', name: 'Caroline Neff' },
      { role: 'Alexander Serebryakov', name: 'David Darlow' },
      { role: 'Maria Vasilyevna', name: 'Marilyn Dodds Frank' },
      { role: 'Ilya Ilich Telegin (Waffles)', name: 'Larry Neumann Jr.' },
      { role: 'Marina', name: 'Mary Ann Thebus' },
      { role: 'Yefim', name: 'Alžan Pelesić' },
      { role: 'Servant', name: 'Olexiy Kryvych' },
    ],
    creativeTeam: [
      { role: 'By', name: 'Anton Chekhov' },
      { role: 'Adapted by', name: 'Annie Baker' },
      { role: 'Working with a Literal Translation by', name: 'Margarita Shalina' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Set Design', name: 'Todd Rosenthal' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Keith Parham' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Casting', name: 'Adam Belcuore and Erica Sartini-Combs' },
      { role: 'New York Casting', name: 'Caparelliotis Casting' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Production Stage Manager', name: 'Kimberly Osgood' },
      { role: 'Assistant Director', name: 'Vanessa Stalling' },
    ],
    recognition: [
      {
        label: 'Adaptation pairing',
        detail: 'The official Goodman page centers Falls\'s direction and Annie Baker\'s adaptation as the production\'s defining artistic hook.',
      },
      {
        label: '30th-anniversary marker',
        detail: 'The Goodman program explicitly frames the production as part of Robert Falls\'s 30th anniversary season as Artistic Director.',
      },
      {
        label: 'Chekhov return',
        detail: 'Falls connects the staging to the Chekhov and Stanislavsky work behind his 2010 Seagull, making this production part of a deliberate continuing line rather than a one-off classic revival.',
      },
      {
        label: 'Critical praise',
        detail: 'A Goodman critical-praise graphic highlighted Chicago Tribune, Daily Herald, and Newcity responses.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman copy positions the production as Chekhov\'s masterpiece in a new adaptation from Pulitzer Prize winner Annie Baker, stressing the work\'s distinctly contemporary American sound while staying true to Chekhov\'s vision.',
      },
      {
        label: 'Falls on the play',
        text: 'In conversation with Goodman Producer Steve Scott, Falls says Uncle Vanya became newly legible to him with age, describing it as a play about aging, regret, loss, mourning, humiliation, and the stubborn human refusal to give up.',
      },
      {
        label: 'Adaptation context',
        text: 'The program\'s essay on translation and adaptation places Baker\'s version alongside other playwright-led Chekhov reworkings while noting her collaboration with a literal translation by Margarita Shalina.',
      },
      {
        label: 'Chekhov at Goodman',
        text: 'The program situates the production within a longer Goodman history of Chekhov that includes a 1961 Uncle Vanya, Michael Maggio\'s 1990 production with John Mahoney, Falls\'s own 1994 Three Sisters, and his 2010 Seagull.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/uncle-vanya/',
        summary:
          'The official production page presents the 2017 Owen Theatre run and frames the show around Falls, Annie Baker, and the blend of melancholy, humor, and emotional pressure inside the estate drama.',
        note: 'Official production page',
      },
      {
        source: 'Time Out Chicago',
        href: 'https://www.timeout.com/chicago/theater/uncle-vanya',
        summary:
          'A review of the 2017 Goodman run.',
        note: 'Review',
      },
      {
        source: 'Stage and Cinema',
        href: 'https://stageandcinema.com/2017/02/22/uncle-vanya-goodman/',
        summary:
          'A review of the original Goodman production.',
        note: 'Review',
      },
      {
        source: 'Around the Town Chicago',
        href: 'https://aroundthetownchicago.com/theatre-reviews/uncle-vanya/',
        summary:
          'Chicago review coverage linked directly in the local production document.',
        note: 'Review',
      },
      {
        source: 'Theatre In Chicago',
        href: 'https://www.theatreinchicago.com/uncle-vanya/9070/',
        summary:
          'Regional review and listing coverage of the production.',
        note: 'Review',
      },
      {
        source: 'Talkin\' Broadway',
        href: 'https://www.talkinbroadway.com/page/regional/chicago/ch536.html',
        summary:
          'Another review of the original Goodman production.',
        note: 'Review',
      },
      {
        source: 'The Fourth Walsh',
        href: 'https://thefourthwalsh.com/2017/02/review-uncle-vanya-goodman-theatre-bursting-with-character/',
        summary:
          'A review of the Goodman staging.',
        note: 'Review',
      },
      {
        source: 'Daily Herald',
        href: 'https://www.dailyherald.com/20170222/entertainment/goodmans-impeccably-acted-uncle-vanya-balances-humor-pathos/',
        summary:
          'Daily Herald coverage of the production.',
        note: 'Review',
      },
      {
        source: 'PerformInk',
        href: 'https://perform.ink/goodmans-uncle-vanya-embodies-russian-soul/',
        summary:
          'Trade review coverage of the original Goodman production.',
        note: 'Review',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2017/2/23/18383953/uncle-vanya-speaks-to-the-anguished-nature-of-living',
        summary:
          'Chicago Sun-Times review coverage of the production.',
        note: 'Review',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/uncle-vanya/' },
      { label: 'TheaterMania feature', href: 'https://www.theatermania.com/news/uncle-vanya_80129/' },
      { label: 'Time Out Chicago review', href: 'https://www.timeout.com/chicago/theater/uncle-vanya' },
      { label: 'Stage and Cinema review', href: 'https://stageandcinema.com/2017/02/22/uncle-vanya-goodman/' },
      { label: 'TheaterMania scene video', href: 'https://www.theatermania.com/news/watch-scenes-from-annie-bakers-adaptation-of-uncle-vanya_80055/' },
      { label: 'Around the Town Chicago review', href: 'https://aroundthetownchicago.com/theatre-reviews/uncle-vanya/' },
      { label: 'Theatre In Chicago review', href: 'https://www.theatreinchicago.com/uncle-vanya/9070/' },
      { label: 'Talkin\' Broadway review', href: 'https://www.talkinbroadway.com/page/regional/chicago/ch536.html' },
      { label: 'The Fourth Walsh review', href: 'https://thefourthwalsh.com/2017/02/review-uncle-vanya-goodman-theatre-bursting-with-character/' },
      { label: 'Daily Herald review', href: 'https://www.dailyherald.com/20170222/entertainment/goodmans-impeccably-acted-uncle-vanya-balances-humor-pathos/' },
      { label: 'Berkshire Fine Arts review', href: 'https://berkshirefinearts.com/02-25-2017_annie-baker-adapts-uncle-vanya.htm' },
      { label: 'PerformInk review', href: 'https://perform.ink/goodmans-uncle-vanya-embodies-russian-soul/' },
      { label: 'Chicago Sun-Times review', href: 'https://chicago.suntimes.com/2017/2/23/18383953/uncle-vanya-speaks-to-the-anguished-nature-of-living' },
    ],
    watchLinks: [
      {
        label: 'Watch Scenes from Uncle Vanya',
        href: 'https://www.theatermania.com/news/watch-scenes-from-annie-bakers-adaptation-of-uncle-vanya_80055/',
        description: "A video excerpt from Annie Baker's adaptation at Goodman.",
        thumbnail: uncleVanyaShowArt,
      },
    ],
    pressQuotes: [
      {
        quote: 'Resonant, funny, smart, clear, involving and... poignant',
        source: 'Chicago Tribune',
      },
      {
        quote: 'A remarkably invigorating piece of work that plumbs the existential depths without ever taking itself too seriously',
        source: 'Chicago Tribune',
      },
      {
        quote: 'Deeply emotional, impeccably acted',
        source: 'Daily Herald',
      },
      {
        quote: 'It took 40 years before [Robert Falls] helmed Chekhov\'s play about unrequited love. Goodman Theatre\'s production is worth the wait',
        source: 'Daily Herald',
      },
      {
        quote: 'Navigates the razor\'s edge where humor and pathos meet',
        source: 'Daily Herald',
      },
      {
        quote: 'An unpretentious, affectionate tribute to a writer that has clearly had an influence on [Annie Baker] and speaks to [her] well-deserved reputation for artistic and authorial maturity',
        source: 'Newcity',
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  pamplona: {
    pageMode: 'featured',
    summary:
      'Pamplona is a Jim McGrath solo play built entirely around Stacy Keach as an aging Ernest Hemingway, world-premiered at the Goodman in 2017, derailed on opening night by a heart attack, and then completed in a full, well-reviewed run in 2018.',
    publicSummary:
      'Stacy Keach returned to the Goodman to triumphantly complete the Hemingway solo play that a 2017 health emergency had cut short, earning some of the warmest notices of any late Falls premiere.',
    synopsis:
      'Five years after winning the 1953 Pulitzer Prize and the 1954 Nobel Prize for Literature, Ernest Hemingway is holed up alone in a Spanish hotel room with a deadline looming for a story about the rivalrous matadors of Pamplona. The real fight is outside the bullring: in declining health, consumed by the collapse of his fourth marriage, and haunted by projected faces from his past, he has to find a way through the despair threatening to engulf him.',
    fallsContext:
      'Pamplona extends Falls\'s late-career interest in single-actor, interior portraits of damaged, larger-than-life American men, paired here with a star, Stacy Keach, who had already played Hemingway once before, in the 1988 TV mini-series Hemingway, and brought a Golden Globe-winning history with the character back to the stage.',
    significance:
      'A 2017 Goodman world premiere whose completion became its own story: a heart attack forced Keach off stage and canceled the remaining performances, and Falls and the Goodman brought the production back for a full, extended run in summer 2018 that drew some of the most enthusiastic reviews of the period.',
    story:
      'Pamplona\'s archive record runs in two parts. The May-June 2017 world premiere gave eleven previews before Keach suffered a heart attack on opening night and the rest of the engagement was scrapped, turning the local NYT coverage into a cancellation story. What the record shows clearly, though, is that the production did not end there: Goodman and Falls brought Keach and the same creative team back for a full six-week run from July 10 to August 19, 2018, complete with an extension, a wall of strong Chicago reviews, and an audience-testimonial video calling the play "absolutely magnificent." The page treats 2018 as the production\'s real critical record while preserving the 2017 health emergency as the reason the story took an extra year to finish.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: pamplonaShowArt,
        alt: 'Stacy Keach as Ernest Hemingway stands with arms outstretched in a hotel-room set for Pamplona.',
        caption: 'Show art built from Keach\'s performance as a tormented, declining Hemingway in his Spanish hotel room.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: pamplonaPoster,
        alt: 'Yellow-and-red Pamplona poster art featuring a close portrait of Stacy Keach as Hemingway.',
        caption: 'On Stage promotional art for the production, built around a close, weathered portrait of Keach in character.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: pamplona1,
        alt: 'Stacy Keach stands among period furniture in the hotel-room set of Pamplona.',
        caption: 'A full-stage view of Kevin Depinet\'s hotel-room set, isolating Hemingway among his own belongings.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: pamplona2,
        alt: 'Stacy Keach sits in a chair as two projected portraits of women loom on the walls behind him in Pamplona.',
        caption: 'Adam Flemming\'s projection design surfaces the women in Hemingway\'s past as looming presences in the room.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: pamplona3,
        alt: 'Stacy Keach sits beside projected portraits of a man and a woman on the hotel-room walls in Pamplona.',
        caption: 'Another projection composition that keeps Hemingway physically still while his memories crowd the set around him.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: pamplona4,
        alt: 'Stacy Keach gestures as bullfighting posters are projected across the set in Pamplona.',
        caption: 'Projected bullfighting posters bring Pamplona itself into the room as Hemingway wrestles with the story he owes his editor.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: pamplonaParis,
        alt: 'Stacy Keach stands beneath a large projected face and a Paris skyline in a moody, wide production photo of Pamplona.',
        caption: 'A wide, painterly production image pairing Hemingway\'s present isolation with the projected Paris of his memory.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: pamplonaPhone,
        alt: 'Stacy Keach shouts into a vintage telephone in a candid promotional photo for Pamplona.',
        caption: 'A candid, in-character photo of Keach mid-tirade on a vintage telephone, used in the production\'s press materials.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
      {
        src: pamplona5,
        alt: 'Stacy Keach stands alone in the hotel-room set of Pamplona with projected posters and bullfighting imagery surrounding him.',
        caption: 'A fuller stage tableau showing how the production turned Hemingway\'s room into a memory chamber of posters, projections, and unfinished bravado.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Jim McGrath' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Stacy Keach' },
    ],
    quickFacts: [
      { label: 'World premiere', value: 'May 19 - Jun 25, 2017 (cut short)' },
      { label: 'Full run', value: 'Jul 10 - Aug 19, 2018 (extended)' },
      { label: 'Venue', value: 'Owen Theatre, Goodman Theatre' },
      { label: 'Runtime', value: '90 minutes, no intermission' },
    ],
    cast: [{ role: 'Ernest Hemingway', name: 'Stacy Keach' }],
    creativeTeam: [
      { role: 'Written by', name: 'Jim McGrath' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Kevin Depinet' },
      { role: 'Costume Design', name: 'Noël Huntzinger' },
      { role: 'Lighting Design', name: 'Jesse Klug' },
      { role: 'Composer and Soundscape', name: 'Michael Roth' },
      { role: 'Projection Design', name: 'Adam Flemming' },
      { role: 'Dramaturg', name: 'Tanya Palmer' },
      { role: 'Production Stage Manager', name: 'Lauren V. Hickman' },
    ],
    recognition: [
      {
        label: 'World premiere',
        detail: 'Pamplona is a Jim McGrath world premiere built specifically around Stacy Keach\'s performance as Hemingway.',
      },
      {
        label: 'Keach\'s second Hemingway',
        detail: 'The role marked Keach\'s second time playing Hemingway, after his Golden Globe-winning, Emmy-nominated turn in the 1988 TV mini-series Hemingway.',
      },
      {
        label: 'Completed after a health emergency',
        detail: 'Local and national coverage frames the production around its rare two-part life: a 2017 premiere ended by Keach\'s heart attack, and a full 2018 run that completed and extended the engagement.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'A premiere that finished a year late',
        detail: 'Few entries in the archive carry a documented health-emergency interruption between a show\'s premiere and its actual full critical run.',
      },
      {
        label: 'Extended run',
        detail: 'TheaterMania\'s coverage of the 2018 engagement specifically reports an extension, indicating strong box-office response once the production finally played out.',
      },
      {
        label: 'Hemingway specialist casting',
        detail: 'The production leaned on Keach\'s established history with the role, giving the Goodman premiere built-in star authority on its subject.',
      },
    ],
    contextNotes: [
      {
        label: 'Original announcement',
        text: 'Goodman and Playbill announced the world premiere as a vehicle for Robert Falls and Stacy Keach, staged in the Owen Theatre as part of new-play programming.',
      },
      {
        label: '2017 cancellation',
        text: 'After eleven preview performances, Keach suffered a heart attack on opening night; the Goodman and The New York Times both reported that the remaining 2017 performances were canceled while he recovered.',
      },
      {
        label: '2018 completion',
        text: 'The Goodman brought the production back for a full Jul 10 - Aug 19, 2018 run, which TheaterMania reports was extended, giving the play the complete public life its 2017 premiere never got to finish.',
      },
      {
        label: 'Audience reception',
        text: 'A Goodman audience-testimonial video captures a patron calling the play "absolutely magnificent," alongside the press quotes gathered from the 2018 run.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/pamplona/',
        summary:
          'The official page frames Pamplona as Stacy Keach\'s tour-de-force return to the Goodman as Ernest Hemingway.',
        note: 'Official production page',
      },
      {
        source: 'New City Stage',
        href: 'https://www.newcitystage.com/2018/07/25/a-moveable-feast-a-review-of-pamplona-at-the-goodman/',
        summary:
          'A 2018 review of the completed Goodman run, weighing Keach\'s performance against McGrath\'s portrait of late-career Hemingway.',
        note: 'Chicago review',
      },
      {
        source: 'BroadwayWorld',
        href: 'https://www.broadwayworld.com/chicago/article/BWW-Review-PAMPLONA-at-Goodman-Theatre-20180723',
        summary:
          'Review coverage of the 2018 engagement.',
        note: 'Chicago review',
      },
      {
        source: 'PerformInk',
        href: 'https://perform.ink/review-pamplona-at-goodman-theatre/',
        summary:
          'PerformInk\'s review of the 2018 run, source of the "stellar performance" and "jovial and witty" pull quotes used in the production\'s critical-praise materials.',
        note: 'Chicago review',
      },
      {
        source: 'Chicago Onstage',
        href: 'https://www.chicagoonstage.com/pamplona-is-stacy-keachs-love-letter-to-hemingway/',
        summary:
          'A feature framing the production as Keach\'s personal love letter to Hemingway, tied to his long history with the role.',
        note: 'Chicago feature',
      },
      {
        source: 'WTTW News',
        href: 'https://news.wttw.com/2018/07/23/pamplona-stacy-keach-runs-hemingway-and-matadors',
        summary:
          'A 2018 feature on the completed run, covering Keach, the Hemingway material, and the play\'s bullfighting backdrop.',
        note: 'Chicago feature',
      },
      {
        source: 'The New York Times',
        href: 'https://www.nytimes.com/2017/06/04/theater/goodman-theater-cancels-pamplona-stacy-keach.html',
        summary:
          'National coverage of the 2017 cancellation after Keach\'s opening-night heart attack, preserved as the record of why the premiere did not finish on schedule.',
        note: 'National coverage, 2017',
      },
      {
        source: 'ABC7 Chicago',
        href: 'https://abc7chicago.com/post/stacy-keach-returns-to-goodman-in-pamplona-after-heart-attack/3789733/',
        summary:
          'Local coverage explicitly framing the 2018 run as Keach\'s return to the Goodman after his heart attack.',
        note: 'Local news, 2018',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/pamplona/' },
      { label: 'Goodman press room', href: 'https://www.goodmantheatre.org/press-rooms/pamplona/' },
      { label: 'Playbill premiere announcement', href: 'https://playbill.com/article/robert-falls-to-direct-stacy-keach-in-goodmans-pamplona' },
      { label: 'TheaterMania premiere announcement', href: 'https://www.theatermania.com/news/robert-falls-to-direct-stacy-keach-in-ernest-hemingway-drama-pamplona_80066/' },
      { label: 'TheaterMania extension news', href: 'https://www.theatermania.com/news/ernest-hemingway-drama-pamplona-starring-stacy-keach-extends_81149/' },
      { label: 'Hemingway Society feature', href: 'https://www.hemingwaysociety.org/stacy-keach-stars-new-hemingway-play-pamplona' },
      { label: 'New York Times cancellation coverage', href: 'https://www.nytimes.com/2017/06/04/theater/goodman-theater-cancels-pamplona-stacy-keach.html' },
      { label: 'ABC7 Chicago return coverage', href: 'https://abc7chicago.com/post/stacy-keach-returns-to-goodman-in-pamplona-after-heart-attack/3789733/' },
      { label: 'Theatre in Chicago reviews', href: 'https://www.theatreinchicago.com/pamplona/reviews/9953/' },
      { label: 'New City Stage review', href: 'https://www.newcitystage.com/2018/07/25/a-moveable-feast-a-review-of-pamplona-at-the-goodman/' },
      { label: 'BroadwayWorld review', href: 'https://www.broadwayworld.com/chicago/article/BWW-Review-PAMPLONA-at-Goodman-Theatre-20180723' },
      { label: 'PerformInk review', href: 'https://perform.ink/review-pamplona-at-goodman-theatre/' },
      { label: 'Chicago Onstage feature', href: 'https://www.chicagoonstage.com/pamplona-is-stacy-keachs-love-letter-to-hemingway/' },
      { label: 'WTTW News feature', href: 'https://news.wttw.com/2018/07/23/pamplona-stacy-keach-runs-hemingway-and-matadors' },
    ],
    watchLinks: [
      {
        label: 'Pamplona | Trailer',
        href: 'https://www.youtube.com/watch?v=f1S1RYyAIuk',
        description: 'Official Goodman trailer starring Stacy Keach as Ernest Hemingway.',
        thumbnail: pamplonaShowArt,
      },
      {
        label: 'Pamplona | Audience Testimonials',
        href: '/media/productions/pamplona/pamplona-audience-testimonials.mp4',
        description: 'Audience testimonials from the Pamplona run.',
        thumbnail: pamplonaPoster,
      },
    ],
    pressQuotes: [
      { quote: 'Hemingway\'s words, Stacy Keach\'s courage, battling it out in a hotel room', source: 'Chicago Tribune' },
      { quote: 'A delight to witness', source: 'Chicago Reader' },
      { quote: 'A one-actor show of the highest order', source: 'Splash' },
      { quote: 'Engaging', source: 'Chicago Sun-Times' },
      { quote: 'Memorable and evocative', source: 'TheaterMania' },
      { quote: 'Keach makes for a terrific Hemingway', source: 'Chicago Sun-Times' },
      { quote: 'Mines the emotional content of Hemingway\'s biography', source: 'Chicago Tribune' },
      { quote: 'Stacy Keach "remains a force as ever"', source: 'Third Coast Review' },
      { quote: 'A stellar performance', source: 'PerformInk' },
      { quote: 'You couldn\'t ask for a better Hemingway than Keach', source: 'TheaterMania' },
      { quote: 'There\'s a clear passion burning inside Keach\'s performance', source: 'TheaterMania' },
      { quote: 'Keach is jovial and witty as Hemingway', source: 'PerformInk' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'soups-stews-and-casseroles-1976': {
    pageMode: 'featured',
    summary:
      'Soups, Stews, and Casseroles: 1976 extends the Falls/Rebecca Gilman collaboration into labor politics, small-town economics, and the moral pressure created when corporate restructuring reaches everyday life.',
    publicSummary:
      'Rebecca Gilman\'s Wisconsin-set drama examines work, loyalty, and the human fallout of acquisition-era capitalism.',
    synopsis:
      'A Chicago corporation buys the major employer in a small Wisconsin town, leaving workers and families to read every new opportunity as both promise and threat. One employee\'s professional opening becomes a moral test for everyone around her.',
    fallsContext:
      'The production belongs to the Gilman line that runs from Blue Surge through Luna Gale and Swing State, but here the emphasis is squarely on class, work, and the destabilizing language of corporate efficiency.',
    significance:
      'A 2016 Goodman production that deepens Falls\'s long-running artistic partnership with Rebecca Gilman while shifting attention from intimate domestic damage to workplace and community strain.',
    story:
      'What makes the title useful in the larger archive is its scale. Rather than an epic adaptation or a prestige transfer, this is a Midwestern pressure play about jobs, acquisition, and what happens when business language enters the moral core of a town. It helps show why the Falls/Gilman partnership remained central for so long: both artists keep returning to social systems through ordinary speech and behavior.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: soupsShowArt,
        alt: 'Show art for Soups, Stews, and Casseroles: 1976 featuring the Durst household gathered in a 1970s kitchen.',
        caption: 'Show art built from the production\'s warm but increasingly tense kitchen world.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: soups1,
        alt: 'The family gathers around a telephone in the 1970s kitchen set of Soups, Stews, and Casseroles: 1976.',
        caption: 'A full-stage kitchen image that makes the production\'s domestic pressure visible all at once.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: soups3,
        alt: 'JoAnne and Kat sit at the kitchen table in Soups, Stews, and Casseroles: 1976.',
        caption: 'A quieter table scene that emphasizes the play\'s attention to ordinary talk, labor, and worry.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: soups4,
        alt: 'A production still from Soups, Stews, and Casseroles: 1976 showing members of the family in the kitchen set.',
        caption: 'Another kitchen composition from the Goodman run, keeping family and work pressures in the same room.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: soups5,
        alt: 'A production still from Soups, Stews, and Casseroles: 1976 inside the Durst household.',
        caption: 'A domestic still from the Goodman production that reinforces the play\'s intimate, community-scale stakes.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: soupsReh2,
        alt: 'Rebecca Gilman laughs during a rehearsal-room moment for Soups, Stews, and Casseroles: 1976.',
        caption: 'Rebecca Gilman in rehearsal, a useful reminder that the page documents process as well as performance.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
      {
        src: soupsReh3,
        alt: 'Cast members sit around a rehearsal table for Soups, Stews, and Casseroles: 1976.',
        caption: 'A rehearsal-table image that places the ensemble inside the play\'s working-family world before it reaches the stage.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
      {
        src: soupsReh8,
        alt: 'Robert Falls and Rebecca Gilman sit with the company during rehearsal for Soups, Stews, and Casseroles: 1976.',
        caption: 'Falls and Gilman with the company in rehearsal, capturing the long collaboration behind the production.',
        orientation: 'landscape',
        kind: 'rehearsal',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Cliff Chamberlain' },
      { role: 'Cast highlight', name: 'Cora Vander Broek' },
    ],
    quickFacts: [
      { label: 'Run', value: 'May 21 - Jun 19, 2016' },
      { label: 'Venue', value: 'Owen Theatre' },
      { label: 'Runtime', value: '2 hr 15 min' },
      { label: 'Setting', value: 'Reynolds, Wisconsin' },
    ],
    cast: [
      { role: 'Kim Durst', name: 'Cliff Chamberlain' },
      { role: 'Kat', name: 'Cora Vander Broek' },
      { role: 'Kelly', name: 'Lindsay Stock' },
      { role: 'Kyle', name: 'Ty Olwin' },
      { role: 'Elaine', name: 'Angela Reed' },
      { role: 'JoAnne', name: 'Ann Whitney' },
    ],
    creativeTeam: [
      { role: 'Playwright', name: 'Rebecca Gilman' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Kevin Depinet' },
      { role: 'Costume Design', name: 'Jenny Mannis' },
      { role: 'Lighting Design', name: 'Jesse Klug' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Casting', name: 'Erica Sartini-Combs' },
      { role: 'Production Stage Manager', name: 'Kimberly Osgood' },
      { role: 'Stage Manager', name: 'Shannon Golden' },
    ],
    recognition: [
      {
        label: 'Gilman collaboration',
        detail: 'The production continues one of the defining playwright-director collaborations in Falls\'s Goodman years.',
      },
      {
        label: 'Chicago premiere',
        detail: "Goodman billed the engagement explicitly as a Chicago premiere, distinguishing it from the play's earlier St. Louis life.",
      },
      {
        label: 'Labor focus',
        detail: "The Goodman program frames the production around workers' rights, union decline, and the human cost of consolidation-era corporate power.",
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Gilman-Falls partnership',
        detail: 'The program identifies this as another major chapter in a long collaboration that also includes Blue Surge, Dollhouse, Luna Gale, and later Swing State.',
      },
      {
        label: 'Midwestern labor play',
        detail: 'Set in bicentennial-era Wisconsin, the production translates national economic shifts into a tightly observed family and factory story.',
      },
      {
        label: 'From workplace to kitchen table',
        detail: 'The material repeatedly stresses that the play is not only about a cheese plant takeover but about how corporate language invades home, marriage, neighborhood, and self-worth.',
      },
    ],
    contextNotes: [
      {
        label: 'Subject focus',
        text: 'The official Goodman page frames the play through workers\' rights, corporate consolidation, and the effects of big business on small-town life.',
      },
      {
        label: 'Program interview',
        text: 'In conversation with dramaturg Neena Arndt, Gilman links the play directly to anti-union politics in Wisconsin, Jefferson Cowie\'s writing on the decline of the working class, and her own fascination with the shift from community obligation toward self-empowerment and precarity.',
      },
      {
        label: 'Food history frame',
        text: 'The program\'s feature essay connects the fictional Farmstead plant to the rise of processed-food conglomerates, arguing that the play tracks not only job loss but a larger move away from knowing who makes what we consume.',
      },
      {
        label: 'Location mismatch',
        text: 'Surviving records list the play\'s setting alternately as Reynolds and Monroe, Wisconsin; this page follows the official synopsis\'s Reynolds setting.',
      },
      {
        label: 'Production history',
        text: 'Public sources note the play had premiered at the Repertory Theatre of St. Louis before the Goodman engagement, which the Goodman documents as the Chicago premiere.',
      },
      {
        label: 'Source package',
        text: 'The folder includes show art, large production stills, rehearsal photography, a cast-and-creative screenshot, a local video file, and a full accessibility program with essays, interview material, and artist bios.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/soups-stews-and-casseroles-1976/',
        summary:
          'The official page presents the production as a timely Rebecca Gilman drama about labor, corporate acquisition, and moral compromise.',
        note: 'Official production page',
      },
      {
        source: 'Goodman Press Room',
        href: 'https://www.goodmantheatre.org/press-rooms/soups-stews-and-casseroles-1976/',
        summary:
          'Goodman\'s press-room copy, which gives fuller synopsis language and explicitly labels the run as a Chicago premiere.',
        note: 'Press materials',
      },
      {
        source: 'Stage and Cinema',
        href: 'https://stageandcinema.com/2016/06/01/soups-stews-and-casseroles/',
        summary:
          'A review of the 2016 run.',
        note: 'Review',
      },
      {
        source: 'TheaterMania',
        href: 'https://www.theatermania.com/news/soups-stews-and-casseroles-1976_77341/',
        summary:
          'TheaterMania coverage of the Goodman production.',
        note: 'News',
      },
      {
        source: 'Becky Sarwate',
        href: 'https://beckysarwate.com/2016/06/03/rebecca-gilmans-soups-stews-and-casseroles-1976/',
        summary:
          'Another review or feature on the production.',
        note: 'Review',
      },
      {
        source: 'The Fourth Walsh',
        href: 'https://thefourthwalsh.com/2016/06/review-soups-stews-and-casseroles-goodman-theatre-familiar-recipe/',
        summary:
          'The folder preserves this Chicago review link as part of the local reception trail.',
        note: 'Review',
      },
      {
        source: 'Talkin\' Broadway',
        href: 'https://www.talkinbroadway.com/page/regional/chicago/ch516.html',
        summary:
          'Regional Chicago review coverage of the production.',
        note: 'Review',
      },
      {
        source: 'Windy City Times',
        href: 'https://windycitytimes.com/2016/06/08/theater-review-soups-stews-and-casseroles-1976/',
        summary:
          'Windy City Times review coverage of the Goodman engagement.',
        note: 'Review',
      },
      {
        source: 'ChicagoCritic',
        href: 'https://chicagocritic.com/soups-stews-and-casseroles-1976/',
        summary:
          'Another local review link included with the main production doc.',
        note: 'Review',
      },
      {
        source: 'TheaterMania Casting Announcement',
        href: 'https://www.theatermania.com/news/cast-announced-for-rebecca-gilmans-soups-stews-and-casseroles-1976-at-the-goodman_76784/',
        summary:
          'Casting coverage preserved alongside the reviews and official materials.',
        note: 'Casting',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/soups-stews-and-casseroles-1976/' },
      { label: 'Goodman press room', href: 'https://www.goodmantheatre.org/press-rooms/soups-stews-and-casseroles-1976/' },
      { label: 'Stage and Cinema review', href: 'https://stageandcinema.com/2016/06/01/soups-stews-and-casseroles/' },
      { label: 'TheaterMania news', href: 'https://www.theatermania.com/news/soups-stews-and-casseroles-1976_77341/' },
      { label: 'Becky Sarwate review', href: 'https://beckysarwate.com/2016/06/03/rebecca-gilmans-soups-stews-and-casseroles-1976/' },
      { label: 'The Fourth Walsh review', href: 'https://thefourthwalsh.com/2016/06/review-soups-stews-and-casseroles-goodman-theatre-familiar-recipe/' },
      { label: 'Talkin\' Broadway review', href: 'https://www.talkinbroadway.com/page/regional/chicago/ch516.html' },
      { label: 'Windy City Times review', href: 'https://windycitytimes.com/2016/06/08/theater-review-soups-stews-and-casseroles-1976/' },
      { label: 'ChicagoCritic review', href: 'https://chicagocritic.com/soups-stews-and-casseroles-1976/' },
      { label: 'Chicago Tribune casting item', href: 'https://www.chicagotribune.com/2016/04/20/casting-announced-for-goodmans-soups-stews-and-casseroles-1976/' },
      { label: 'BroadwayWorld casting item', href: 'https://www.broadwayworld.com/chicago/article/Cast-Creative-Team-Announced-for-SOUPS-STEWS-AND-CASSEROLES-1976-at-Goodman-Theatre-20160420' },
      { label: 'American Theatre on Gilman and Falls', href: 'https://www.americantheatre.org/2022/09/28/gilman-and-falls-a-match-made-at-the-goodman/' },
      { label: 'BroadwayWorld Swing State feature', href: 'https://www.broadwayworld.com/chicago/article/SWING-STATE-at-Goodman-Theatre-Adds-Two-Performances-in-Final-Week-20221022' },
    ],
    watchLinks: [
      {
        label: 'Soups, Stews, and Casseroles: 1976 | Local Video',
        href: '/media/productions/soups-stews-and-casseroles-1976/soups-stews-director-video.mp4',
        description: 'A director video for Soups, Stews, and Casseroles: 1976.',
        thumbnail: soupsShowArt,
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-jacksonian': {
    pageMode: 'featured',
    summary:
      'The Jacksonian enters the archive as a Beth Henley world premiere that began at the Geffen Playhouse and continued Off-Broadway, giving Falls a new-play record built around star casting, southern gothic unease, and a life beyond a single city.',
    publicSummary:
      'Beth Henley\'s darkly comic Mississippi drama pairs Ed Harris, Amy Madigan, Glenne Headly, Bill Pullman, and Bess Rous in a Falls-directed production that moved from its Geffen world premiere to The New Group Off-Broadway.',
    synopsis:
      'Jackson, Mississippi, 1964. When his wife kicks him out, respectable dentist Bill Perch moves into the seedy Jacksonian Motel, where his collapse plays out against encounters with his teenage daughter, a gold-digging motel employee, a treacherous bartender, and his estranged wife. Set against the investigation of a recent lynching and culminating in a crime of passion, the play mixes suspense, dark humor, and the eerie madness of a town poisoned by racism.',
    fallsContext:
      'The production shows Falls working in a playwright-centered contemporary mode outside the Goodman orbit that dominates so much of the later archive. What persists across venues is his attraction to pressure-cooker acting ensembles, morally unstable rooms, and American stories where violence and denial seep into everyday behavior.',
    significance:
      'A Beth Henley world premiere with a documented Off-Broadway continuation, extending Falls\'s archive into star-driven contemporary American playwriting beyond his core Goodman base.',
    story:
      'The Jacksonian matters because the folder preserves a two-stage life cycle rather than a single engagement. The Geffen materials frame it as a full world premiere event in Los Angeles, while the New Group links and production stills show how the play continued in New York with the same high-profile cast. That makes the page less about institutional affiliation and more about how Falls shepherded a new Beth Henley play through multiple public lives.',
    venueAnchor: 'Geffen Playhouse',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: jacksonianHero,
        alt: 'Amy Madigan and Ed Harris sit on a motel bed in a stage still from The Jacksonian.',
        caption: 'A Geffen stage still centered on Amy Madigan and Ed Harris in the uneasy intimacy of the motel room.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: jacksonianShowArt,
        alt: 'The Jacksonian world-premiere show art featuring Amy Madigan and Ed Harris with the Geffen run dates and credits.',
        caption: 'World-premiere show art from the Geffen Playhouse engagement, preserving the February 7 to March 25, 2012 run and the principal cast billing.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: jacksonian1,
        alt: 'Ed Harris and Glenne Headly face one another near the bar in The Jacksonian.',
        caption: 'A New Group production still that keeps the play\'s flirtation, exhaustion, and danger in the same frame.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: jacksonian2,
        alt: 'Bess Rous and Glenne Headly sit at a table while Bill Pullman stands behind the bar in The Jacksonian.',
        caption: 'A New Group ensemble image foregrounding Rosy, Eva, and Fred inside the motel-bar world.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: jacksonian3,
        alt: 'Ed Harris and Amy Madigan argue across the motel room in The Jacksonian.',
        caption: 'Another world-premiere still that leans into the couple\'s domestic volatility and the play\'s southern-gothic pressure.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Beth Henley' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Ed Harris' },
      { role: 'Cast highlight', name: 'Amy Madigan' },
      { role: 'Cast highlight', name: 'Bill Pullman' },
      { role: 'Cast highlight', name: 'Glenne Headly' },
    ],
    quickFacts: [
      { label: 'World premiere', value: 'Feb 7 - Mar 25, 2012' },
      { label: 'Venue', value: 'Geffen Playhouse, Los Angeles' },
      { label: 'Afterlife', value: 'The New Group, Off-Broadway' },
      { label: 'Setting', value: 'Jackson, Mississippi, 1964' },
    ],
    cast: [
      { role: 'Bill Perch', name: 'Ed Harris' },
      { role: 'Eva White', name: 'Glenne Headly' },
      { role: 'Susan Perch', name: 'Amy Madigan' },
      { role: 'Fred Weber', name: 'Bill Pullman' },
      { role: 'Rosy Perch', name: 'Bess Rous' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Beth Henley' },
      { role: 'Directed by', name: 'Robert Falls' },
    ],
    recognition: [
      {
        label: 'World premiere',
        detail: 'Geffen billed the engagement as the world premiere and extended the run through March 25, 2012.',
      },
      {
        label: 'Star ensemble',
        detail: 'The preserved materials repeatedly foreground Ed Harris, Amy Madigan, Glenne Headly, Bill Pullman, and Bess Rous as the production\'s central draw.',
      },
      {
        label: 'Transfer story',
        detail: 'The folder also preserves the production\'s New Group Off-Broadway life, showing Falls guiding the same Henley play into a second major run.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Outside-Goodman chapter',
        detail: 'Unlike many late-career pages in the archive, this one documents Falls\'s work through Geffen Playhouse and The New Group rather than through Goodman Theatre.',
      },
      {
        label: 'Henley collaboration',
        detail: 'The production adds Pulitzer Prize winner Beth Henley to the archive\'s playwright roster and places Falls in a darker, more surreal corner of contemporary American writing.',
      },
      {
        label: 'Racial and domestic pressure',
        detail: 'The local synopsis centers both intimate family collapse and the surrounding violence of 1964 Mississippi, making the production as political as it is psychological.',
      },
    ],
    contextNotes: [
      {
        label: 'Year-label mismatch',
        text: 'Some contemporary coverage clusters this production within the 2013-14 New Group season rather than a single 2014 date; this page follows the most commonly cited year while noting the cross-season run.',
      },
      {
        label: 'Official framing',
        text: 'The Geffen material describes the Jacksonian Motel as a place where secrets are buried, the subversive becomes commonplace, and time itself turns hauntingly unstable.',
      },
      {
        label: 'Source package',
        text: 'The folder includes show art, multiple stage stills from both the Geffen and New Group lives of the production, a cast-card screenshot, and a doc-based press trail that reaches from announcement coverage to reviews and listings.',
      },
    ],
    reviews: [
      {
        source: 'Geffen Playhouse',
        href: 'https://www.geffenplayhouse.org/shows/the-jacksonian/',
        summary:
          'The official page anchors the world premiere, principal cast, extension notice, and Geffen framing for the 2012 Los Angeles engagement.',
        note: 'Official production page',
      },
      {
        source: 'Playbill',
        href: 'https://playbill.com/article/the-jacksonian-with-ed-harris-amy-madigan-and-bill-pullman-opens-off-broadway-nov-7-com-211469',
        summary:
          'The preserved Playbill link ties the Geffen premiere directly to the later Off-Broadway opening and helps track the production\'s New Group afterlife.',
        note: 'Opening coverage',
      },
      {
        source: 'Stage and Cinema',
        href: 'https://stageandcinema.com/2013/11/07/the-jacksonian-acorn-theatre/',
        summary:
          'A review of the Off-Broadway run.',
        note: 'Review',
      },
      {
        source: 'Hollywood Reporter',
        href: 'https://www.hollywoodreporter.com/news/general-news/jacksonian-theater-review-295035/',
        summary:
          'Hollywood Reporter review coverage from the play\'s world-premiere run.',
        note: 'Review',
      },
      {
        source: 'American Theatre',
        href: 'https://www.americantheatre.org/2014/02/01/the-jacksonian/',
        summary:
          'A later feature on the production.',
        note: 'Feature',
      },
      {
        source: 'Chicago Magazine',
        href: 'https://www.chicagomag.com/arts-culture/december-2013/the-jacksonian-and-domesticated/',
        summary:
          'Chicago Magazine coverage situating the production in a broader theater conversation of the period.',
        note: 'Feature',
      },
      {
        source: 'TheaterMania Listing',
        href: 'https://www.theatermania.com/shows/new-york-city-theater/off-broadway/the-jacksonian_200910/',
        summary:
          'TheaterMania\'s listing link helps document the Off-Broadway presentation in New York.',
        note: 'Listing',
      },
      {
        source: 'TheaterMania News',
        href: 'https://www.theatermania.com/news/the-jacksonian_66583/',
        summary:
          'News coverage tracing the production\'s New York rollout.',
        note: 'News',
      },
    ],
    externalSources: [
      { label: 'Official Geffen production page', href: 'https://www.geffenplayhouse.org/shows/the-jacksonian/' },
      { label: 'Playbill opening coverage', href: 'https://playbill.com/article/the-jacksonian-with-ed-harris-amy-madigan-and-bill-pullman-opens-off-broadway-nov-7-com-211469' },
      { label: 'BroadwayWorld season announcement', href: 'https://www.broadwayworld.com/article/New-Groups-2013-14-Season-to-Include-THE-JACKSONIAN-with-Bill-Pullman-Ed-Harris-More-20130619' },
      { label: 'American Theatre coverage', href: 'https://www.americantheatre.org/2014/02/01/the-jacksonian/' },
      { label: 'TheaterMania listing', href: 'https://www.theatermania.com/shows/new-york-city-theater/off-broadway/the-jacksonian_200910/' },
      { label: 'TheaterMania news', href: 'https://www.theatermania.com/news/the-jacksonian_66583/' },
      { label: 'Hollywood Reporter review', href: 'https://www.hollywoodreporter.com/news/general-news/jacksonian-theater-review-295035/' },
      { label: 'Chicago Tribune announcement', href: 'https://www.chicagotribune.com/2013/06/24/robert-falls-to-direct-at-new-group/' },
      { label: 'Entertainment Weekly item', href: 'https://ew.com/article/2013/06/19/ed-harris-bill-pullman-stage-jacksonian/' },
      { label: 'Hollywood Reporter casting item', href: 'https://www.hollywoodreporter.com/news/general-news/ed-harris-star-broadway-jacksonian-571695/' },
      { label: 'Stage and Cinema review', href: 'https://stageandcinema.com/2013/11/07/the-jacksonian-acorn-theatre/' },
      { label: 'Chicago Magazine feature', href: 'https://www.chicagomag.com/arts-culture/december-2013/the-jacksonian-and-domesticated/' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'king-lear': {
    pageMode: 'featured',
    summary:
      'King Lear is one of the most visually audacious productions in the archive: a contemporary, Mafia-run, Tito-like dictatorship built by Falls and designer Walt Spangler, anchored by Stacy Keach, that opened at the Goodman in 2006 and returned for a full Washington remount in 2009.',
    publicSummary:
      'Falls resets Shakespeare\'s catastrophe inside a brutal, contemporary police state modeled on 1990s former Yugoslavia, with Stacy Keach\'s Lear at the center of both family implosion and political collapse.',
    synopsis:
      'An aging king divides his kingdom among his three daughters, rewarding flattery and banishing the daughter who tells him the truth. What follows is a long collapse through betrayal, exposure, and cruelty, as the kingdom and the king\'s mind disintegrate together, ending in a heap of bodies and the king carrying his dead daughter offstage.',
    fallsContext:
      'King Lear sits in the stretch when Falls was building large canonical events at Goodman scale, but it is also one of his most explicitly political stagings: rather than ornamental classicism, he and Walt Spangler built a contemporary, brutalist, Mafia-run state heavily reminiscent of 1990s former Yugoslavia, with Lear played as a "Tito-like" strongman whose rash division of his land spirals into ethnic and nationalist chaos.',
    significance:
      'A landmark, widely discussed 2006 Goodman Shakespeare production starring Stacy Keach, reset inside a contemporary war-zone dictatorship complete with a urinal-set opening scene and Gloucester\'s eyes seared on a kitchen grill, that proved durable enough to be remounted in full at Washington\'s Shakespeare Theatre Company in 2009 with Keach again in the title role.',
    story:
      'King Lear is one of the clearest examples in this archive of Falls using Shakespeare to argue about the present rather than preserve the past. Variety\'s Steven Oxman captured the production\'s divided reception precisely: even while criticizing it for prioritizing shock over emotional depth, he called it "ambitious, important," writing that it "leaves one feeling pummeled into shellshock rather than stimulated by dark beauty" - a backhanded compliment the Goodman\'s own marketing later quoted as unqualified praise. The Chicago Tribune was more enthusiastic, reportedly calling it "a colossal, eye-popping operatic production." Three years later, Shakespeare Theatre Company artistic director Michael Kahn invited Falls and Keach to remount the production in Washington, where critics again split: some called it "transgressive" and "transcendent," while DCist\'s Missy Frederick found Falls\'s decision to play Goneril and Regan as reality-television-style sisters in sequined fur coats tonally confused, arguing the production "turn[ed] the epic solemnity of King Lear into riveting, train-wreck theater" at the expense of tragic weight. Keach himself later wrote about the role at length, recalling that he swore he would "never do anything like it again" after Chicago, before Kahn talked him into five more years and "six hours of Shakespeare." He described adding small physical premonitions of Lear\'s failing heart throughout the production, drawing on a real heart condition of his own between the two engagements - a detail that gives the production\'s violence an unusually personal undercurrent.',
    venueAnchor: 'Goodman Theatre and Shakespeare Theatre Company, Washington',
    eraLabel: 'National and international period',
    images: [
      {
        src: kingLear1,
        alt: 'Two men stand at urinals in a tiled bathroom as a woman sits scrubbing nearby in the opening scene of King Lear.',
        caption: 'The production\'s contemporary, war-zone staging concept announces itself in its opening scene, set at a bank of urinals.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: kingLear3,
        alt: 'Gloucester, restrained with foil tape to a chair in a steel kitchen, is attacked by several men as a woman holds his head.',
        caption: 'Gloucester\'s blinding, staged in a stainless-steel kitchen, became one of the production\'s most discussed images.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear2,
        alt: 'Two men in dark suits stand beside a Mercedes sedan in a Mafia-styled scene from King Lear.',
        caption: 'The production reset Lear\'s court as a Mafia-run, Tito-like dictatorship modeled on 1990s former Yugoslavia.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear7,
        alt: 'Edmund in a tracksuit stands near a woman in lingerie seated on a satin-draped bed.',
        caption: 'Goneril and Regan were reimagined as ostentatious, reality-television-style sisters, a choice critics in both Chicago and Washington singled out.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear4,
        alt: 'A lone, bloodied figure walks through a field of smoke and rubble in King Lear.',
        caption: 'A figure walks through the production\'s war-torn rubble field, the staging\'s recurring visual language of collapse.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear6,
        alt: 'A man in a coat walks among rows of body bags laid out on a darkened stage.',
        caption: 'Rows of body bags reinforce the production\'s genocide-era, former-Yugoslavia staging concept.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear8,
        alt: 'Lear cradles Cordelia\'s body on a table as Kent and another man look on in the production\'s final scene.',
        caption: 'The production\'s final tableau, with Cordelia\'s body laid out as Lear collapses nearby.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear9,
        alt: 'Lear sits beside a blindfolded, bloodied Gloucester after his blinding.',
        caption: 'Stacy Keach as Lear beside Edward Gero\'s blinded Gloucester. Photo: Carol Rosegg.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: kingLear10,
        alt: 'Lear sits in a chair in formal vest and tie as Kent leans over to speak with him.',
        caption: 'A quieter register of the production, with Lear in formal dress before the kingdom\'s collapse accelerates.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear5,
        alt: 'The Fool kneels alone in a green coat amid stage rubble, lit by rows of harsh stage lights.',
        caption: 'The Fool kneels alone in the production\'s rubble-strewn storm aftermath.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLearCandid,
        alt: 'Robert Falls, Stacy Keach, and a third man pose together smiling in a rehearsal room.',
        caption: 'Robert Falls and Stacy Keach, likely with Shakespeare Theatre Company artistic director Michael Kahn, who invited the production\'s 2009 Washington remount.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLear11,
        alt: 'Kent and another figure kneel beside a collapsed Lear on the floor in King Lear.',
        caption: 'Stacy Keach at the production\'s most exhausted register, with the kingdom already beyond repair.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: kingLearTitle,
        alt: 'Orange title treatment text reading King Lear on a black background.',
        caption: 'Title treatment art for the production.',
        orientation: 'landscape',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'William Shakespeare' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Stacy Keach' },
      { role: 'Cast highlight', name: 'Edward Gero' },
    ],
    quickFacts: [
      { label: 'Goodman run', value: 'Sep 9 - Nov 4, 2006, Albert Theatre' },
      { label: 'DC remount', value: 'Summer 2009, Shakespeare Theatre Company' },
      { label: 'Runtime', value: '3 hr 15 min' },
      { label: 'Concept', value: 'Contemporary, Mafia-run, "Tito-like" dictatorship' },
    ],
    cast: [
      { role: 'Lear', name: 'Stacy Keach' },
      { role: 'Gloucester', name: 'Edward Gero' },
      { role: 'Cordelia', name: 'Laura Odeh' },
      { role: 'Goneril', name: 'Kim Martin-Cotten' },
      { role: 'Regan', name: 'Kate Arrington' },
      { role: 'Albany', name: 'Kevin Gudahl' },
      { role: 'Cornwall', name: 'Chris Genebach' },
      { role: 'Kent', name: 'Steve Pickering' },
      { role: 'Edmund', name: 'Jonno Roberts' },
      { role: 'Edgar', name: 'Joaquín Torres' },
      { role: 'Fool', name: 'Howard Witt' },
      { role: 'Oswald', name: 'Dieterich Gray' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'William Shakespeare' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Michael Philippi' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Fight Direction', name: 'Rick Sordelet' },
      { role: 'Vocal Coach', name: 'Ralph Zito' },
      { role: 'Dramaturgy', name: 'Tom Creamer' },
      { role: 'Production Stage Manager', name: 'Joseph Drummond' },
      { role: 'Stage Manager', name: 'T. Paul Lynch' },
    ],
    recognition: [
      {
        label: 'A widely discussed Shakespeare staging',
        detail: 'Multiple sources describe this as one of the most widely discussed Shakespearean revivals of its decade, driven by its contemporary, war-zone staging concept and Keach\'s performance.',
      },
      {
        label: 'A full Washington remount',
        detail: 'Shakespeare Theatre Company artistic director Michael Kahn invited Falls to remount the entire production in 2009, with Keach again playing Lear.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Helen Hayes context',
        detail: 'Local credits associate this production with a Helen Hayes Award; because the Helen Hayes Awards recognize Washington, D.C.-area theatre, that recognition almost certainly traces to the 2009 Shakespeare Theatre Company remount rather than the original Chicago run, though this page has not independently confirmed the specific award category.',
      },
      {
        label: 'A personal performance',
        detail: 'Stacy Keach has written that he built small physical premonitions of Lear\'s failing heart into his performance, drawing on a real heart condition he developed between the Chicago and Washington engagements.',
      },
    ],
    contextNotes: [
      {
        label: 'A divided critical reception',
        text: 'Variety\'s 2006 review is more divided than the Goodman\'s own marketing suggests: critic Steven Oxman called the production "ambitious, important" while also writing that it "leaves one feeling pummeled into shellshock rather than stimulated by dark beauty," criticizing it for prioritizing shock value over Shakespeare\'s emotional complexity. This page presents the fuller, more divided verdict rather than only the flattering fragment.',
      },
      {
        label: 'Two distinct cast lists',
        text: 'The cast and creative team above reflect the original 2006 Goodman production. The 2009 Shakespeare Theatre Company remount retained Keach, Gero, Odeh, Martin-Cotten, Arrington, Pickering, Roberts, Torres, Witt, and Gray, but replaced Albany (Andrew Long) and added a larger ensemble, with a different creative team handling sound, dramaturgy, and stage management for the Washington run.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/king-lear/',
        summary:
          'The official page frames the 2006 staging as a major Stacy Keach-led Shakespeare production and quotes Variety calling it "ambitious and important."',
        note: 'Official production page',
      },
      {
        source: 'Variety',
        href: 'https://variety.com/2006/legit/reviews/king-lear-12-1200513193/',
        summary: 'Steven Oxman called the production "ambitious, important" but argued Falls prioritized shock value over emotional depth, writing it left him "pummeled into shellshock rather than stimulated by dark beauty."',
        note: 'Mixed',
      },
      {
        source: 'DCist',
        href: 'https://dcist.com/story/09/06/24/a-king-lear-fit-for-bravo/',
        summary: 'Missy Frederick found the 2009 Washington remount visually inventive but tonally confused, arguing it played Lear\'s madness "for zany laughs" rather than tragedy.',
        note: 'Mixed (2009 remount)',
      },
      {
        source: 'Washington City Paper',
        href: 'https://washingtoncitypaper.com/article/228782/reviewed-shakespeare-theatre-companys-transgressive-transcendent-king-lear/',
        summary: 'Called the 2009 remount "transgressive" and "transcendent" in its headline assessment of the production.',
        note: 'Positive (2009 remount)',
      },
      {
        source: 'The Washington Post',
        href: 'https://www.washingtonpost.com/archive/style/2009/06/23/a-magnificent-king-lear-rises-to-the-madness/dc7dc794-bf40-4394-94b1-60808a2faefa/',
        summary: 'Reviewed the 2009 Shakespeare Theatre Company remount under the headline "A Magnificent King Lear Rises to the Madness."',
        note: 'Positive (2009 remount)',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2006/09/28/review-king-leargoodman-theatre/',
        summary:
          'Newcity\'s review of the original 2006 Goodman production.',
        note: 'Review',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/king-lear/' },
      { label: 'Shakespeare Theatre Company event page', href: 'https://www.shakespearetheatre.org/events/king-lear-08-09' },
      { label: 'Variety review (2006)', href: 'https://variety.com/2006/legit/reviews/king-lear-12-1200513193/' },
      { label: 'DCist review (2009)', href: 'https://dcist.com/story/09/06/24/a-king-lear-fit-for-bravo/' },
      { label: 'Washington City Paper review (2009)', href: 'https://washingtoncitypaper.com/article/228782/reviewed-shakespeare-theatre-companys-transgressive-transcendent-king-lear/' },
      { label: 'Washington Post review (2009)', href: 'https://www.washingtonpost.com/archive/style/2009/06/23/a-magnificent-king-lear-rises-to-the-madness/dc7dc794-bf40-4394-94b1-60808a2faefa/' },
      { label: 'Newcity Stage review (2006)', href: 'https://www.newcitystage.com/2006/09/28/review-king-leargoodman-theatre/' },
      { label: 'Chicago Tribune feature (2006)', href: 'https://www.chicagotribune.com/2006/09/21/extreme-lear-robert-falls-gets-audacious-with-the-great-tragedy-but-did-stacy-keach-get-the-memo/' },
    ],
    watchLinks: [
      {
        label: 'King Lear Interview with Stacy Keach and Robert Falls',
        href: 'https://www.youtube.com/watch?v=OONOW9pImiY&t=127s',
        description: 'Falls and Keach discuss the challenge of staging the production.',
        thumbnail: kingLear9,
      },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'a-life-in-the-theatre': {
    pageMode: 'featured',
    summary:
      'A Life in the Theatre gives Falls a smaller, actor-centered David Mamet chamber piece, staged as part of Goodman\'s 2006 Mamet festival, that watches an aging star and a young up-and-comer trade mentorship for rivalry across the length of a dressing-room friendship.',
    publicSummary:
      'David Mamet\'s backstage duet reduces theatre life to mentorship, rivalry, embarrassment, and survival in the dressing room, with David Darlow and Matt Schwader trading roles across a season of fragmentary performances.',
    synopsis:
      'Robert, an aging actor, sets out to teach John, an eager up-and-comer, the tricks and truths of the trade. As the two spar and critique each other\'s performances across a season together, the audience becomes a fly on the dressing-room wall, watching admiration curdle into irritation as the balance of power between mentor and protege quietly reverses.',
    fallsContext:
      'The production belongs to a recurring Falls interest in rehearsal rooms, theatrical labor, and performer psychology, but here everything is compressed to two actors and a dressing-room scale, and it sits inside a larger Goodman Mamet festival that paired the playwright\'s small-scale early work with the rest of the company\'s 2006 season.',
    significance:
      'A 2006 Goodman Mamet staging, part of a larger Mamet festival in the theatre\'s anniversary season, that complements the archive\'s larger public productions with a tight, well-reviewed meta-theatrical study of two actors watching each other age.',
    story:
      'This entry matters because it narrows the lens. Instead of civic argument or epic family collapse, A Life in the Theatre watches artists trying to hold onto status and technique under the pitiless passage of time. Newcity\'s review called the production an "awe-inspiring display of craft," crediting David Darlow\'s Robert with "depths of uncertainty and disappointment" beneath his expansive surface and Matt Schwader\'s John with hidden ambition under apparent naivety, and singled out Mark Wendland\'s set for making the dressing room feel "simultaneously claustrophobic and multidimensional." The review went further, predicting that the larger Mamet festival surrounding the production would be "a major event indeed for Chicago\'s theater" - useful confirmation that this 75-minute two-hander was conceived as one part of a broader Goodman celebration of Mamet\'s work, not a standalone booking.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'National and international period',
    images: [
      {
        src: lifeInTheatreShowArt,
        alt: 'Robert and John sit across from each other in a cluttered backstage dressing room in A Life in the Theatre.',
        caption: 'David Darlow (Robert) and Matt Schwader (John) in the production\'s dressing-room set.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: lifeInTheatreMakeup,
        alt: 'An older actor applies stage makeup with a pencil while looking into a small mirror.',
        caption: 'David Darlow\'s Robert applies stage makeup, one of the production\'s recurring backstage rituals.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: mametFestivalPortrait,
        alt: 'A sepia-toned portrait of playwright David Mamet, used as key art for Goodman\'s 2006 Mamet festival.',
        caption: 'David Mamet, photographed for the Goodman\'s 2006 festival of his work, of which this production was one part.',
        orientation: 'landscape',
        kind: 'art',
      },
      {
        src: lifeInTheatreTitle,
        alt: 'Pink title treatment text reading A Life in the Theatre on a black background.',
        caption: 'Title treatment art for the production.',
        orientation: 'landscape',
        kind: 'art',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'David Mamet' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'David Darlow' },
      { role: 'Cast highlight', name: 'Matt Schwader' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Mar 4 - Apr 9, 2006' },
      { label: 'Venue', value: 'Albert Theatre' },
      { label: 'Runtime', value: '75 minutes' },
      { label: 'Context', value: 'Part of Goodman\'s 2006 Mamet festival' },
    ],
    cast: [
      { role: 'Robert', name: 'David Darlow' },
      { role: 'John', name: 'Matt Schwader' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'David Mamet' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Mark Wendland' },
      { role: 'Costume Design', name: 'Birgit Rattenborg Wise' },
      { role: 'Lighting Design', name: 'Michael Philippi' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Production Stage Manager', name: 'Alden J. Vasquez' },
      { role: 'Stage Manager', name: 'Sascha Connor' },
    ],
    recognition: [
      {
        label: 'Mamet connection',
        detail: 'The production keeps Mamet inside the Falls archive not just as a Broadway transfer playwright but as a Goodman-stage contemporary classic, and as the centerpiece of a 2006 festival devoted to his work.',
      },
      {
        label: 'Newcity "Recommended"',
        detail: 'Newcity\'s review called the production "an awe-inspiring display of craft" and predicted the surrounding Mamet festival would be a major Chicago theatre event.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman page emphasizes the dressing-room view of theatre life, letting audiences watch performers critique one another onstage and off.',
      },
      {
        label: 'Source package',
        text: 'The folder includes show art, a backstage makeup detail shot, a title-treatment card, and a portrait of David Mamet used for the Goodman\'s broader 2006 festival of his work, alongside a cast-and-creative screenshot.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/a-life-in-the-theatre/',
        summary:
          'The official page presents the production as a 75-minute Mamet backstage drama directed by Robert Falls and centered on an aging actor mentoring a younger one.',
        note: 'Official production page',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2006/03/23/review-a-life-in-the-theatregoodman-theatre/',
        summary:
          'Rated the production "Recommended," praising David Darlow\'s and Matt Schwader\'s performances and Mark Wendland\'s claustrophobic, multidimensional dressing-room set.',
        note: 'Recommended',
      },
      {
        source: 'Chicago Reader',
        href: 'https://chicagoreader.com/arts-culture/a-life-in-the-theatre/',
        summary:
          'Chicago Reader coverage of the production.',
        note: 'Review',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/a-life-in-the-theatre/' },
      { label: 'Newcity Stage review', href: 'https://www.newcitystage.com/2006/03/23/review-a-life-in-the-theatregoodman-theatre/' },
      { label: 'Chicago Reader coverage', href: 'https://chicagoreader.com/arts-culture/a-life-in-the-theatre/' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'american-buffalo': {
    pageMode: 'featured',
    summary:
      'American Buffalo is one of the most candid entries in the archive: a star-driven 2008 Broadway revival of David Mamet\'s junk-shop classic that closed after just 20 previews and 8 performances under a wave of largely negative reviews.',
    publicSummary:
      'A starry, multicultural cast - John Leguizamo, Cedric the Entertainer, and Haley Joel Osment - brought David Mamet\'s 1976 classic back to Broadway in a short-lived revival directed by Falls.',
    synopsis:
      'Junk-shop owner Don sells a buffalo nickel for far less than it is worth, then enlists his young protege Bobby and his volatile friend Teach in a scheme to steal back the buyer\'s entire coin collection. What starts as petty revenge curdles into paranoia, betrayal, and violence among men who talk constantly about business and trust each other least.',
    fallsContext:
      'American Buffalo sits alongside Falls\'s other Mamet work as a rare Broadway revival of an existing classic rather than a Goodman-originated premiere or transfer, and it is one of the few entries in this archive where the dominant critical verdict was negative rather than mixed-to-positive - a useful, honest counterweight to the praise that surrounds most of his Broadway transfers.',
    significance:
      'A 2008 Broadway revival, at the Belasco Theatre, of Mamet\'s 1976 classic, cast with John Leguizamo as Teach, Cedric the Entertainer (in his Broadway debut) as Donny, and Haley Joel Osment (also a Broadway debut) as Bobby - a high-profile pairing of stage and screen names that drew heavy advance interest but closed within a week of opening after reviews judged Falls\'s pacing too deliberate for Mamet\'s usual velocity.',
    story:
      'American Buffalo had been a Broadway staple before Falls ever directed it: an Off-Broadway debut in 1976, a 1977 Broadway transfer, and a celebrated 1983 revival that starred Al Pacino as Teach. Falls\'s 2008 revival invited the comparison directly, and most critics found it wanting. Ben Brantley in The New York Times called it "deflated," comparing it to "a souped-up sports car\'s flat tire, built for speed but going nowhere." Variety, the Associated Press, the New York Post, and the New York Daily News were similarly unimpressed, generally agreeing that Falls\'s slower, more naturalistic approach drained the play of Mamet\'s characteristic anxiety and dark comic momentum, even as several singled out Santo Loquasto\'s richly detailed junk-shop set for praise. A smaller number of critics pushed back: USA Today\'s Elysa Gardner doubted "many productions have made the thwarted humanity of these men more accessible or moving," and The Record\'s Robert Feldberg found the production "more balanced, funnier and more humane" than the Pacino-led 1983 revival, if less dangerous. The show opened November 17, 2008, and closed November 23 after only 20 previews and 8 regular performances - one of the shortest runs in Falls\'s Broadway record, and a useful reminder that even an accomplished director\'s starry vehicles do not always land.',
    venueAnchor: 'Belasco Theatre, Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: americanBuffaloPlaybill,
        alt: 'Playbill cover for American Buffalo at the Belasco Theatre, showing Cedric the Entertainer, John Leguizamo, and Haley Joel Osment posed in a shop doorway.',
        caption: 'Playbill cover art for the Belasco Theatre engagement.',
        orientation: 'portrait',
        priority: true,
        kind: 'art',
      },
      {
        src: americanBuffaloLogo,
        alt: 'Official black-and-white American Buffalo logo art with Cedric the Entertainer, John Leguizamo, and Haley Joel Osment, credited to David Mamet and Robert Falls.',
        caption: 'Official production logo art, by David Mamet, directed by Robert Falls.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: americanBuffalo1,
        alt: 'Donny cradles an injured, bloodied Bobby near the end of American Buffalo.',
        caption: 'Cedric the Entertainer (Donny) and Haley Joel Osment (Bobby) in the production\'s violent final movement. Photo: Carol Rosegg.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: americanBuffalo2,
        alt: 'Teach grabs Bobby by the collar in a tense confrontation in the junk shop.',
        caption: 'John Leguizamo (Teach) confronts Haley Joel Osment\'s Bobby. Photo: Carol Rosegg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: americanBuffalo3,
        alt: 'Donny, Bobby, and Teach together in the cluttered junk-shop set of American Buffalo.',
        caption: 'Cedric the Entertainer, Haley Joel Osment, and John Leguizamo on Santo Loquasto\'s junk-shop set. Photo: Carol Rosegg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: americanBuffalo4,
        alt: 'Donny reclines in a chair as Teach leans over him mid-argument.',
        caption: 'Cedric the Entertainer and John Leguizamo. Photo: Carol Rosegg.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: americanBuffalo5,
        alt: 'Teach sits alone at a cluttered desk in the junk shop, mid-monologue.',
        caption: 'John Leguizamo as Teach. Photo: Carol Rosegg.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: americanBuffalo6,
        alt: 'Bobby sits alone at a table in the junk shop.',
        caption: 'Haley Joel Osment as Bobby. Photo: Carol Rosegg.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: americanBuffaloMarquee,
        alt: 'The Belasco Theatre marquee lit up at night, reading American Buffalo, by David Mamet, Directed by Robert Falls.',
        caption: 'The Belasco Theatre marquee, with Falls\'s directing credit visible beneath the title.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: americanBuffaloCurtainCall,
        alt: 'The three actors raise their joined hands together during a curtain call bow.',
        caption: 'Osment, Leguizamo, and Cedric the Entertainer take a curtain call bow.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: americanBuffaloAfterparty,
        alt: 'Haley Joel Osment, John Leguizamo, Cedric the Entertainer, and Robert Falls pose together at the opening-night after party.',
        caption: 'Osment, Leguizamo, Cedric the Entertainer, and Robert Falls at the opening-night after party.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'David Mamet' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'John Leguizamo' },
      { role: 'Cast highlight', name: 'Cedric the Entertainer' },
      { role: 'Cast highlight', name: 'Haley Joel Osment' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Nov 17 - Nov 23, 2008' },
      { label: 'Venue', value: 'Belasco Theatre, Broadway' },
      { label: 'Performances', value: '20 previews, 8 regular performances' },
      { label: 'Two Broadway debuts', value: 'Cedric the Entertainer and Haley Joel Osment' },
    ],
    cast: [
      { role: 'Walter "Teach" Cole', name: 'John Leguizamo' },
      { role: 'Donny Dubrow', name: 'Cedric the Entertainer' },
      { role: 'Bobby', name: 'Haley Joel Osment' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'David Mamet' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Assistant Director', name: 'Stephanie Yankwitt' },
      { role: 'Scenic and Costume Design', name: 'Santo Loquasto' },
      { role: 'Lighting Design', name: 'Brian MacDevitt' },
      { role: 'Fight Direction', name: 'Rick Sordelet' },
      { role: 'Casting', name: 'Marjorie Martin' },
      { role: 'Production Stage Manager', name: 'Robert Bennett' },
      { role: 'Stage Manager', name: 'Denise Yaney' },
    ],
    recognition: [
      {
        label: 'Praised design, mixed staging',
        detail: 'Even critics who disliked the pacing of Falls\'s production singled out Santo Loquasto\'s densely detailed junk-shop set as a highlight of the evening.',
      },
      {
        label: 'Two Broadway debuts',
        detail: 'The production marked the Broadway debuts of both Cedric the Entertainer and Haley Joel Osment, alongside Broadway veteran John Leguizamo.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'An honest counterweight',
        detail: 'Unlike most of the Broadway transfers in this archive, American Buffalo drew a dominant wave of negative reviews, making it a useful, candid record of a high-profile production that did not connect with critics.',
      },
      {
        label: 'Measured against Pacino',
        detail: 'Several reviewers explicitly compared the revival to the celebrated 1983 Broadway production starring Al Pacino as Teach, generally to Falls\'s production\'s disadvantage on intensity and danger, though The Record\'s Robert Feldberg found it more humane.',
      },
    ],
    contextNotes: [
      {
        label: 'A short run',
        text: 'The production played only 20 previews and 8 regular performances before closing, one of the shortest engagements in Falls\'s Broadway record.',
      },
      {
        label: 'Source package',
        text: 'The folder includes the Playbill cover, official logo art, eleven Carol Rosegg production photographs, a Belasco Theatre marquee photo, a curtain-call photo, and an opening-night after-party photo of the cast with Falls and his wife, Kat Falls.',
      },
    ],
    reviews: [
      {
        source: 'The New York Times',
        href: 'https://www.nytimes.com/2008/11/18/theater/reviews/18buff.html',
        summary: 'Ben Brantley called the revival "deflated," likening it to "a souped-up sports car\'s flat tire, built for speed but going nowhere," and found Leguizamo\'s Teach unconvincing.',
        note: 'Negative',
      },
      {
        source: 'Variety',
        href: 'http://www.variety.com/review/VE1117939046.html?categoryid=33&cs=1',
        summary: 'David Rooney wrote that the production "drains much of the humor, urgency and anxiety from the piece," leaving Mamet\'s commerce subtext "lost" in a static character study.',
        note: 'Negative',
      },
      {
        source: 'Associated Press',
        href: 'http://news.yahoo.com/s/ap/20081118/ap_en_re/theater_review_american_buffalo_1',
        summary: 'Michael Kuchwara found the revival "slack" and "unsatisfying," writing that little besides the profanity survived intact.',
        note: 'Negative',
      },
      {
        source: 'USA Today',
        href: 'http://www.usatoday.com/life/theater/reviews/2008-11-17-american-buffalo_N.htm',
        summary: 'Elysa Gardner offered a dissenting view, doubting "many productions have made the thwarted humanity of these men more accessible or moving."',
        note: 'Positive',
      },
      {
        source: 'The Record',
        href: 'http://www.northjersey.com/entertainment/stage/34629524.html',
        summary: 'Robert Feldberg judged Falls\'s staging "more balanced, funnier and more humane" than the 1983 Pacino-led Broadway revival, while noting it carried less danger.',
        note: 'Mixed-to-positive',
      },
      {
        source: 'Back Stage',
        href: 'http://www.backstage.com/bso/news_reviews/nyc/review_display.jsp?vnu_content_id=1003891970',
        summary: 'David Sheward credited Falls with "a solid, straightforward framework" for the play but felt the cast was unevenly balanced.',
        note: 'Mixed',
      },
      {
        source: 'New York Post',
        href: 'http://www.nypost.com/seven/11182008/entertainment/theater/barely_worth_a_plugged_nickel_139242.htm',
        summary: 'Barbara Hoffman wrote that the production had "all the profanity and none of the poetry," calling it "flatter than a cow plop."',
        note: 'Negative',
      },
      {
        source: 'New York Daily News',
        href: 'http://www.nydailynews.com/entertainment/arts/2008/11/18/2008-11-18_american_buffalo_not_worth_a_wooden_nick.html',
        summary: 'Joe Dziemianowicz called the starry revival "tepid," writing that it made the story "seem very slight."',
        note: 'Negative',
      },
      {
        source: 'BroadwayWorld',
        href: 'https://www.broadwayworld.com/shows/American-Buffalo-311722.html',
        summary: 'Production listing confirming the Belasco Theatre run, opening and closing dates, and full cast and creative credits.',
        note: 'Production record',
      },
    ],
    externalSources: [
      { label: 'New York Times review', href: 'https://www.nytimes.com/2008/11/18/theater/reviews/18buff.html' },
      { label: 'Variety review', href: 'http://www.variety.com/review/VE1117939046.html?categoryid=33&cs=1' },
      { label: 'Associated Press review', href: 'http://news.yahoo.com/s/ap/20081118/ap_en_re/theater_review_american_buffalo_1' },
      { label: 'USA Today review', href: 'http://www.usatoday.com/life/theater/reviews/2008-11-17-american-buffalo_N.htm' },
      { label: 'The Record review', href: 'http://www.northjersey.com/entertainment/stage/34629524.html' },
      { label: 'Back Stage review', href: 'http://www.backstage.com/bso/news_reviews/nyc/review_display.jsp?vnu_content_id=1003891970' },
      { label: 'New York Post review', href: 'http://www.nypost.com/seven/11182008/entertainment/theater/barely_worth_a_plugged_nickel_139242.htm' },
      { label: 'New York Daily News review', href: 'http://www.nydailynews.com/entertainment/arts/2008/11/18/2008-11-18_american_buffalo_not_worth_a_wooden_nick.html' },
      { label: 'Journal News review', href: 'http://www.lohud.com/article/20081118/ENTERTAINMENT/811180311/1186/Entertainment0801' },
      { label: 'IBDB production record', href: 'https://www.ibdb.com/broadway-production/american-buffalo-480742' },
      { label: 'BroadwayWorld production page', href: 'https://www.broadwayworld.com/shows/American-Buffalo-311722.html' },
      { label: 'TheaterMania listing', href: 'https://www.theatermania.com/shows/new-york-city-theater/broadway/american-buffalo_146735/' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'desire-under-the-elms': {
    pageMode: 'featured',
    summary:
      'Desire Under the Elms turns the Falls/Dennehy O\'Neill line into something harsher and more expressionistic: a stripped, hundred-minute family tragedy played on a blasted rock field, then carried intact from Goodman to Broadway.',
    publicSummary:
      'Falls stages O\'Neill as a fever dream of property, sex, and punishment, with Brian Dennehy, Carla Gugino, and Pablo Schreiber caught inside a brutal stone landscape.',
    synopsis:
      'On an isolated New England farm, patriarch Ephraim Cabot returns with a new wife, Abbie, igniting resentment among his sons and then a dangerous erotic bond between Abbie and Eben. Questions of inheritance, ownership, lust, and vengeance collapse into a tragedy where home itself feels cursed.',
    fallsContext:
      'This sits deep inside Falls\'s long O\'Neill collaboration with Brian Dennehy, but it is more compressed and feral than the larger Dennehy vehicles. Where The Iceman Cometh sprawls and Death of a Salesman devastates through accumulation, Desire Under the Elms hits as a single, concentrated wound: one act, one jagged landscape, one family tearing itself apart.',
    significance:
      'A major late Dennehy/O\'Neill collaboration and a full Goodman-to-Broadway transfer, remembered for Falls\'s one-act compression, Walt Spangler\'s boulder-field set, and the production\'s relentless sexual and familial violence.',
    story:
      'Desire Under the Elms matters because it shows Falls pushing canonical American tragedy away from heritage realism and toward nightmare. He cut O\'Neill\'s three acts into a swift one-act evening, stripped away the literal elm trees, and replaced pastoral setting with an immense field of hanging stones and boulders that made the Cabot farm feel less like property than a spiritual prison. Reviewers kept circling the same result from different angles: operatic scale, fever-dream sensuality, and a willingness to let the play become ugly, erotic, and overripe rather than tasteful. That approach also clarifies why the production transferred. It was not just another solid Goodman classic; it was an aggressive reinterpretation of O\'Neill that could announce itself on Broadway as an event.',
    venueAnchor: 'Goodman Theatre and Broadway',
    eraLabel: 'Broadway transfer years',
    images: [
      {
        src: desireUnderTheElmsHero,
        alt: 'A suspended farmhouse and field of boulders dominate the stage in Robert Falls\'s Desire Under the Elms.',
        caption: 'Falls and scenic designer Walt Spangler replace O\'Neill\'s naturalistic farm with a suspended house and punishing boulder field.',
        orientation: 'landscape',
        priority: true,
        kind: 'production-still',
      },
      {
        src: desireUnderTheElmsTable,
        alt: 'Brian Dennehy, Pablo Schreiber, and Carla Gugino sit in tense silence around a wooden table in Desire Under the Elms.',
        caption: 'Brian Dennehy, Pablo Schreiber, and Carla Gugino in the production\'s central family triangle.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: desireUnderTheElmsLovers,
        alt: 'Carla Gugino and Pablo Schreiber in an intimate scene from Desire Under the Elms.',
        caption: 'The production leans hard into the play\'s dangerous erotic charge between Abbie and Eben.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: desireUnderTheElmsAbbieEphraim,
        alt: 'Brian Dennehy stands closely behind Carla Gugino in Desire Under the Elms.',
        caption: 'Abbie and Ephraim, with Gugino and Dennehy playing the marriage as coercion, strategy, and desire all at once.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: desireUnderTheElmsArrival,
        alt: 'Carla Gugino looks up from the rocks at Brian Dennehy, who stands over her holding a suitcase.',
        caption: 'Abbie\'s arrival on the farm immediately turns the stage picture into a contest over place and power.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: desireUnderTheElms6,
        alt: 'Brian Dennehy embraces Carla Gugino from behind in Desire Under the Elms.',
        caption: 'Abbie and Ephraim in one of the production\'s most unsettling images of possession, intimacy, and control.',
        orientation: 'portrait',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Eugene O\'Neill' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Brian Dennehy' },
      { role: 'Cast highlight', name: 'Carla Gugino' },
      { role: 'Cast highlight', name: 'Pablo Schreiber' },
      { role: 'Scenic design', name: 'Walt Spangler' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Jan 17 - Mar 1, 2009' },
      { label: 'Venue', value: 'Albert Theatre' },
      { label: 'Form', value: '100-minute one-act adaptation' },
      { label: 'Afterlife', value: 'Transferred to the St. James Theatre on Broadway' },
    ],
    cast: [
      { role: 'Ephraim Cabot', name: 'Brian Dennehy' },
      { role: 'Abbie Putnam', name: 'Carla Gugino' },
      { role: 'Eben Cabot', name: 'Pablo Schreiber' },
      { role: 'Peter Cabot', name: 'Boris McGiver' },
      { role: 'Simeon Cabot', name: 'Daniel Stewart Sherman' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'Eugene O\'Neill' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Michael Philippi' },
      { role: 'Sound Design / Original Music', name: 'Richard Woodbury' },
      { role: 'Fight Direction', name: 'Rick Sordelet' },
      { role: 'Dialect Coaching', name: 'Linda Gates' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Dramaturgy', name: 'Tanya Palmer' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Production Stage Manager', name: 'Joseph Drummond' },
      { role: 'Stage Manager', name: 'T. Paul Lynch' },
    ],
    recognition: [
      {
        label: 'Broadway transfer',
        detail: 'The production moved from Goodman to Broadway\'s St. James Theatre, opening there on April 27, 2009.',
      },
      {
        label: 'Design recognition',
        detail: 'The Broadway transfer earned 2009 Drama Desk nominations for Richard Woodbury\'s music and Walt Spangler\'s set design.',
      },
      {
        label: 'Review consensus',
        detail: 'TheatreInChicago\'s local aggregate logged sixteen reviews with eleven Highly Recommended, two Recommended, and three Somewhat Recommended notices.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'Falls turns O\'Neill expressionist',
        detail: 'Instead of staging the title literally, Falls and Walt Spangler build a crushing landscape of boulders and suspended weight, making the farm feel psychological before it feels geographic.',
      },
      {
        label: 'A crucial Dennehy chapter',
        detail: 'This is one of the last major O\'Neill collaborations in the Falls/Dennehy line and one of the clearest examples of how their partnership could carry both scale and ferocity.',
      },
      {
        label: 'Compression as interpretation',
        detail: 'Falls\'s one-act cut was not just trimming; it re-tuned the play into a fast, oppressive descent driven by sex, inheritance, and humiliation.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman page explicitly calls the play a fever dream, and that is the right key for this staging: Falls heightens the subconscious and mythic side of O\'Neill more than the domestic-naturalist one.',
      },
      {
        label: 'What changed from the script',
        text: 'Local notes and later coverage agree that Falls compressed the traditional three-act structure into a roughly 100-minute one-act and removed the literal elms from the stage picture, replacing them with a boulder field and suspended stones.',
      },
      {
        label: 'Source package',
        text: 'Available materials include a detailed local notes document, multiple Goodman stills, cast-and-creative screenshots, design references, review aggregates, and several video links from the production\'s original run.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/desire-under-the-elms/',
        summary:
          'The official page frames the production as a fever dream of inheritance, desire, and tragic consequence and confirms the Goodman run dates and central cast.',
        note: 'Official production page',
      },
      {
        source: 'TheatreInChicago',
        href: 'https://www.theatreinchicago.com/desire-under-the-elms/2990/',
        summary:
          'Aggregates sixteen Chicago reviews of the Goodman run: eleven Highly Recommended, two Recommended, and three Somewhat Recommended.',
        note: 'Review aggregate',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://www.theatreinchicago.com/desire-under-the-elms/2990/',
        summary:
          'Hedy Weiss called Falls\'s staging "grandly operatic" and described the production as a founding myth of the American family staged in gargantuan terms.',
        note: 'Highly Recommended',
      },
      {
        source: 'Chicago Tribune',
        href: 'https://www.theatreinchicago.com/desire-under-the-elms/2990/',
        summary:
          'Chris Jones stressed the arid metaphor and the violent, animal quality of the characters trapped in Falls\'s landscape.',
        note: 'Recommended',
      },
      {
        source: 'Newcity',
        href: 'https://www.newcitystage.com/2009/01/27/review-desire-under-the-elmsgoodman-theatre/',
        summary:
          'Newcity focused on the production\'s bold physical scale and argued that Falls turned O\'Neill\'s domestic tragedy into a major event production.',
        note: 'Chicago review',
      },
      {
        source: 'New Yorker',
        href: 'https://www.newyorker.com/magazine/2009/05/11/no-place-like-home-3',
        summary:
          'John Lahr noted that Falls reshaped the play into a single act and sharpened its erotic tensions rather than its more antique misogyny.',
        note: 'Broadway review',
      },
      {
        source: 'The New York Times',
        href: 'https://www.nytimes.com/2009/02/04/theater/reviews/04elms.html',
        summary:
          'The Times praised the play\'s "poetry and terrible beauty," language reused prominently in later official framing of the production.',
        note: 'Referenced by Goodman',
      },
      {
        source: 'Variety',
        href: 'https://variety.com/2009/legit/reviews/desire-under-the-elms-3-1200473054/',
        summary:
          'Variety covered the Broadway transfer as a large-scale, highly physical O\'Neill staging shaped as much by design pressure as by performance.',
        note: 'Broadway review',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/desire-under-the-elms/' },
      { label: 'TheatreInChicago review aggregate', href: 'https://www.theatreinchicago.com/desire-under-the-elms/2990/' },
      { label: 'Playbill Broadway opening item', href: 'https://playbill.com/article/desire-under-the-elms-with-dennehy-gugino-and-schreiber-opens-on-broadway-com-160265' },
      { label: 'Newcity review', href: 'https://www.newcitystage.com/2009/01/27/review-desire-under-the-elmsgoodman-theatre/' },
      { label: 'Chicago Reader response', href: 'https://chicagoreader.com/blogs/oneill-maven-on-robert-fallss-desire-under-the-elms/' },
      { label: 'Walt Spangler design page', href: 'https://www.waltspangler.com/desire-under-the-elms' },
      { label: 'New Yorker Broadway review', href: 'https://www.newyorker.com/magazine/2009/05/11/no-place-like-home-3' },
      { label: 'Variety Broadway review', href: 'https://variety.com/2009/legit/reviews/desire-under-the-elms-3-1200473054/' },
      { label: 'Talkin\' Broadway review', href: 'https://www.talkinbroadway.com/page/world/DesireUnderElms.html' },
      { label: 'Behind-the-scenes design video', href: 'https://www.youtube.com/watch?v=qD3XlqzZYKU&t=144s' },
    ],
    watchLinks: [
      {
        label: 'Desire Under the Elms | Behind the Scenes',
        href: 'https://www.youtube.com/watch?v=QwaHqwAaQ48',
        description: 'Goodman featurette on the production\'s rehearsal and design world.',
        thumbnail: desireUnderTheElmsHero,
      },
      {
        label: 'Interview with Robert Falls',
        href: 'https://www.youtube.com/watch?v=lfT_2GZYYak',
        description: 'Falls discusses his approach to O\'Neill and the production\'s staging choices.',
        thumbnail: desireUnderTheElmsTable,
      },
      {
        label: 'Desire Under the Elms | In Performance',
        href: 'https://www.youtube.com/watch?v=CrO1y3ZbAIs',
        description: 'Performance footage from the original production campaign.',
        thumbnail: desireUnderTheElmsLovers,
      },
    ],
    pressQuotes: [
      { quote: 'Grandly operatic', source: 'Chicago Sun-Times' },
      { quote: 'A founding myth of the American family written in the most gargantuan terms', source: 'Chicago Sun-Times' },
      { quote: 'The play is full of odious characters... trapped in an arid landscape like purty little American rats', source: 'Chicago Tribune' },
      { quote: 'The Goodman production heightens the play\'s sensuality to fever pitch', source: 'Copley News Service' },
      { quote: 'A visceral, visually stunning, and masterfully performed event', source: 'EDGE' },
      { quote: 'There\'s artistry bordering on magic in the collaboration', source: 'Examiner' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'measure-for-measure': {
    pageMode: 'featured',
    summary:
      'Measure for Measure relocates Shakespeare\'s "problem play" to a gritty, disco-era 1970s Times Square, then ends it with Isabella stabbed to death mid-dance, a deliberate break from the text that turned the production into one of Falls\'s most argued-over Shakespeare stagings.',
    publicSummary:
      'Falls reset Shakespeare\'s dark comedy in seedy 1970s New York and rewrote its ending into a shocking, audience-dividing act of violence.',
    synopsis:
      'When the Duke hands Vienna over to the puritanical Angelo, a campaign of moral purification quickly reveals itself as another form of appetite and domination. After a pious novice, Isabella, pleads for her condemned brother\'s life, Angelo\'s response exposes a web of desire, hypocrisy, and coercion running through every level of the city.',
    fallsContext:
      'The production sharpens a recurring Falls trait: he approaches canonical work by leaning harder into danger rather than polishing it into respectability. Resetting the play in a chain-link, graffiti-soaked 1970s Times Square (designed by Walt Spangler) and then rewriting Shakespeare\'s own ending puts Measure for Measure alongside King Lear and, later, The Winter\'s Tale and An Enemy of the People as evidence of how far he is willing to push a classical text.',
    significance:
      'A widely reviewed (fifteen Chicago notices, eight of them "Highly Recommended" and none "Not Recommended") 2013 Goodman Shakespeare production, remembered specifically for an ending Falls invented himself: rather than the text\'s ambiguous marriage proposal, the staging has the prisoner Barnardine stab Isabella to death during a dance, a choice Falls defended on the grounds that the Duke is "an egocentric, incompetent ruler" undeserving of a tidy resolution.',
    story:
      'Measure for Measure earns its place in the archive less for its reviews, strong as they were, than for what Falls did to the last five minutes. Shakespeare\'s ending leaves Isabella\'s response to the Duke\'s marriage proposal unresolved; Falls treated that ambiguity as license, restaging the finale so that Barnardine kills Isabella mid-celebration, with the rest of the cast still dancing around her. Both the Chicago Sun-Times and Chicago magazine cover this choice directly: Falls cited the film Blow Out as an influence and said plainly that "the world is not always tied up neatly," acknowledging that at least one audience member protested loudly on the way out. Paired with Ana Kuzmanic\'s disco-era costuming and Walt Spangler\'s neon-and-chain-link Times Square set, the production turned a four-centuries-old "problem play" into a staging people left arguing about, which is exactly the kind of restless, confrontational classicism that runs through the rest of Falls\'s Shakespeare and Ibsen work.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: measureShowArt,
        alt: 'A nun-costumed Isabella stands center stage in the neon-lit, graffiti-covered set of Measure for Measure.',
        caption: 'Isabella (Alejandra Escalante) in the production\'s seedy, neon-lit 1970s Times Square hotel room.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: measurePoster,
        alt: 'Graffiti-textured Measure for Measure poster art with a masked woman\'s portrait beneath the title.',
        caption: 'Title art built from the production\'s graffiti-and-wheat-paste visual identity.',
        orientation: 'portrait',
        kind: 'art',
      },
      {
        src: measure1,
        alt: 'A wide view of the full Times Square set, lit with neon signs for peep shows and bars, with a lone figure center stage.',
        caption: 'Walt Spangler\'s full set: chain-link fence, barbed wire, and a skyline of neon adult-entertainment signage.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: measure2,
        alt: 'Isabella and Angelo stand close together in a tense, intimate confrontation.',
        caption: 'Isabella confronts Angelo, the scene at the center of the play\'s web of coercion and hypocrisy.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: measure3,
        alt: 'An older man embraces a crying woman in a pink dress.',
        caption: 'One of the production\'s emotional turns, staged with the period\'s heightened, melodramatic energy.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: measure4,
        alt: 'Isabella lies on a leather couch while a man in a suit sits nearby under a green banker\'s lamp.',
        caption: 'A quieter domestic-interior moment that grounds the production\'s 1970s setting in period furniture and lighting.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: measure5,
        alt: 'A line of men in suits, one wearing sunglasses, stands across the stage in a formal confrontation scene.',
        caption: 'The Duke\'s officials line up for the play\'s closing reckoning, shortly before Falls\'s rewritten ending.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: measure6,
        alt: 'A man in a clergy collar holds a young woman with curly hair in his arms.',
        caption: 'A disguised-Duke moment that keeps the production\'s religious imagery in constant tension with its street-level grime.',
        orientation: 'square',
        kind: 'production-still',
      },
      {
        src: measure7,
        alt: 'Sean Fortunato as Elbow, Kevin Fugaro as Claudio, and Travis A. Knight in an ensemble scene from Measure for Measure.',
        caption: 'Sean Fortunato (Elbow), Kevin Fugaro (Claudio), and Travis A. Knight (Ensemble) in one of the production\'s street scenes.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: measure8,
        alt: 'Three men escort a struggling prisoner through a dark street scene in Measure for Measure.',
        caption: 'One of the production\'s rougher street-tableau images, reinforcing the staging\'s police-state pressure and urban grime.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'William Shakespeare' },
      { role: 'Director', name: 'Robert Falls' },
      { role: 'Cast highlight', name: 'Jay Whittaker' },
      { role: 'Cast highlight', name: 'Alejandra Escalante' },
      { role: 'Cast highlight', name: 'James Newcomb' },
      { role: 'Cast highlight', name: 'Jeffrey Carlson' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Mar 9 - Apr 14, 2013' },
      { label: 'Venue', value: 'Albert Theatre' },
      { label: 'Runtime', value: '2 hr 30 min, one intermission' },
      { label: 'Setting', value: 'Disco-era 1970s Times Square' },
    ],
    cast: [
      { role: 'Angelo', name: 'Jay Whittaker' },
      { role: 'Isabella', name: 'Alejandra Escalante' },
      { role: 'Duke', name: 'James Newcomb' },
      { role: 'Lucio', name: 'Jeffrey Carlson' },
      { role: 'Claudio', name: 'Kevin Fugaro' },
      { role: 'Mistress Overdone', name: 'Cindy Gold' },
      { role: 'Provost', name: 'A.C. Smith' },
      { role: 'Pompey', name: 'Aaron Todd Douglas' },
      { role: 'Escalus', name: 'John Judd' },
      { role: 'Mariana', name: 'Kate LoConti' },
      { role: 'Elbow', name: 'Sean Fortunato' },
      { role: 'Conrad Thomas / Barnardine', name: 'Joe Foust' },
      { role: 'Abhorson', name: 'Daniel Smith' },
      { role: 'Froth', name: 'Billy Fenderson' },
      { role: 'Ensemble', name: 'John Victor Allen' },
      { role: 'Ensemble', name: 'Amanda Catania' },
      { role: 'Juliet', name: 'Celeste M Cooper' },
      { role: 'Ensemble', name: 'Anthony DiNicola' },
      { role: 'Ensemble', name: 'Amanda Drinkall' },
      { role: 'Ensemble', name: 'Isabel Ellson' },
      { role: 'Ensemble', name: 'LaNisa Frederick' },
      { role: 'Ensemble', name: 'Quinton Guyton' },
      { role: 'Ensemble', name: 'Carolyn Ann Hoerdemann' },
      { role: 'Ensemble', name: 'Travis A. Knight' },
      { role: 'Ensemble', name: 'Glenn Stanton' },
    ],
    creativeTeam: [
      { role: 'Written by', name: 'William Shakespeare' },
      { role: 'Directed by', name: 'Robert Falls' },
      { role: 'Scenic Design', name: 'Walt Spangler' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Marcus Doshi' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Production Stage Manager', name: 'Alden J. Vasquez' },
      { role: 'Stage Manager', name: 'Jamie Wolfe' },
    ],
    recognition: [
      {
        label: 'Strong critical consensus',
        detail: 'TheatreInChicago\'s aggregate of fifteen reviews shows eight "Highly Recommended," five "Recommended," two "Somewhat Recommended," and none "Not Recommended."',
      },
      {
        label: 'A rewritten ending',
        detail: 'Falls replaced the play\'s ambiguous final reconciliation with an invented act of violence: Barnardine stabs Isabella to death as the company dances, a choice covered directly by the Chicago Sun-Times and Chicago magazine.',
      },
      {
        label: 'Civic-scale reading',
        detail: 'Windy City Times\'s Mary Shen Barnidge praised Falls for keeping the focus on "the leaders responsible for societies in turmoil" rather than reducing the play to a safe Angelo-versus-Isabella scene study.',
      },
    ],
    awardsOrSignificance: [
      {
        label: 'A defining Falls Shakespeare',
        detail: 'A 2017 Sun-Times retrospective on Falls\'s career holds this production up as a signature example of his style, describing him as someone who "whittles material to a point and thrusts it into your eye."',
      },
      {
        label: 'Audacity over polish',
        detail: 'Reviewers across the spectrum, from the Tribune to Chicago Stage Review, single out the production\'s rawness and willingness to make a four-centuries-old "problem play" feel dangerous again.',
      },
    ],
    contextNotes: [
      {
        label: 'The rewritten ending',
        text: 'Chicago magazine and the Chicago Sun-Times both confirm Falls scrapped the play\'s ambiguous marriage-proposal ending in favor of having Barnardine kill Isabella mid-dance. Falls told Chicago magazine he was drawing on the film Blow Out and wanted to resist a tidy resolution, noting that at least one audience member protested loudly at a performance.',
      },
      {
        label: 'Source cleanup: unrelated 2022 production excluded',
        text: 'Not to be confused with Chicago Shakespeare Theater\'s unrelated 2022 staging of Measure for Measure, set amid Cuban political turmoil; that production was not directed by Falls and is separate from this 1970s Times Square staging.',
      },
      {
        label: 'Source package',
        text: 'The folder includes show art, poster art, several Goodman production stills, a full cast-and-creative screenshot, and an unusually complete review trail, including a 15-review critical-consensus tally from TheatreInChicago.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/measure-for-measure/',
        summary: 'The official page frames the production around law, desire, hypocrisy, and the abuse of power, and notes it was intended for mature audiences.',
        note: 'Official production page',
      },
      {
        source: 'Chicago Tribune',
        href: 'http://www.chicagotribune.com/entertainment/theater/theaterloop/ct-ent-0319-measure-review-20130318,0,3056852.column?track=rss',
        summary: 'Chris Jones called the staging "audacious, arresting (and) highly amusing," praising Falls\'s embrace of Shakespeare\'s tonal whiplash and Walt Spangler\'s "sea of soaring, graffiti-soaked neon."',
        note: 'Highly Recommended',
      },
      {
        source: 'Newcity',
        href: 'https://www.newcitystage.com/2013/03/18/review-measure-for-measuregoodman-theatre/',
        summary: 'Called the production raw and raucous, writing that "vice oozes from the very walls" and that "never in the history of this play has such a raw and raucous production been seen."',
        note: 'Review',
      },
      {
        source: 'Chicago Stage Review',
        href: 'http://www.chicagostagereview.com/measure-for-measure-review/',
        summary: 'Venus Zarris called it "a rare and wonderful theatrical triumph," adding that "this is Goodman Theatre at its bravest and best."',
        note: 'Highly Recommended',
      },
      {
        source: 'ChicagoCritic',
        href: 'http://chicagocritic.com/measure-measure-goodman-theatre/',
        summary: 'Anthony J. Mangini wrote that the production was "wickedly smart" and "as beautifully constructed as it is intellectually evocative."',
        note: 'Highly Recommended',
      },
      {
        source: 'Chicago Theatre Review',
        href: 'http://www.chicagotheatrereview.com/2013/03/goodman-measures-up/',
        summary: 'Lazlo Collins described the staging as "grimy, gritty, uncomfortable, and downright sinful," and "the most intriguing Shakespeare you have seen in a while."',
        note: 'Recommended',
      },
      {
        source: 'Chicago magazine',
        href: 'https://www.chicagomag.com/arts-culture/march-2013/measure-for-measure-ending/',
        summary: 'A feature on Falls\'s rewritten ending, in which he explains his reasoning for having Barnardine kill Isabella rather than staging the text\'s ambiguous final reconciliation.',
        note: 'Feature on the ending',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://chicago.suntimes.com/2017/2/11/18376221/when-you-see-a-bob-falls-play-you-remember-it',
        summary: 'A 2017 retrospective on Falls\'s directorial reputation that singles out this production\'s ending, describing Falls as a director who "whittles" source material "to a point and thrusts it into your eye."',
        note: 'Retrospective feature',
      },
      {
        source: 'TheatreInChicago',
        href: 'https://www.theatreinchicago.com/measure-for-measure/11197/',
        summary: 'Aggregates fifteen Chicago reviews of the production: eight Highly Recommended, five Recommended, two Somewhat Recommended, none Not Recommended.',
        note: 'Review aggregate',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/measure-for-measure/' },
      { label: 'TheatreInChicago review aggregate', href: 'https://www.theatreinchicago.com/measure-for-measure/11197/' },
      { label: 'Chicago magazine on the rewritten ending', href: 'https://www.chicagomag.com/arts-culture/march-2013/measure-for-measure-ending/' },
      { label: 'Chicago Sun-Times retrospective', href: 'https://chicago.suntimes.com/2017/2/11/18376221/when-you-see-a-bob-falls-play-you-remember-it' },
      { label: 'Newcity review', href: 'https://www.newcitystage.com/2013/03/18/review-measure-for-measuregoodman-theatre/' },
      { label: 'Chicago Stage Review', href: 'http://www.chicagostagereview.com/measure-for-measure-review/' },
      { label: 'Chicago Theatre Review', href: 'http://www.chicagotheatrereview.com/2013/03/goodman-measures-up/' },
      { label: 'Stage and Cinema review', href: 'http://www.stageandcinema.com/2013/03/19/measure-for-measure-goodman/' },
      { label: 'Chicago on the Aisle review', href: 'http://www.chicagoontheaisle.com/2013/03/21/review-of-shakespeares-measure-for-measure-at-goodman-theatre-directed-by-robert-falls/' },
      { label: 'Time Out Chicago review', href: 'http://timeoutchicago.com/arts-culture/theater/16154011/measure-for-measure-at-goodman-theatre-theater-review' },
      { label: 'Around the Town Chicago review', href: 'http://www.aroundthetownchicago.com/theatre-reviews/measure-for-measure/' },
      { label: 'BroadwayWorld first-look video feature', href: 'https://www.broadwayworld.com/chicago/article/BWW-TV-First-Look-at-Goodman-Theatres-MEASURE-FOR-MEASURE-20130313' },
    ],
    watchLinks: [
      {
        label: 'Measure for Measure | Trailer',
        href: 'https://www.youtube.com/watch?v=vz15owFkLBw',
        description: 'Official Goodman trailer for the production.',
        thumbnail: measureShowArt,
      },
      {
        label: 'Measure for Measure | Behind the Scenes',
        href: 'https://www.youtube.com/watch?v=aIMapfvRthc',
        description: 'Goodman behind-the-scenes feature on the production\'s design and rehearsal process.',
        thumbnail: measurePoster,
      },
    ],
    pressQuotes: [
      { quote: 'Audacious, arresting (and) highly amusing', source: 'Chicago Tribune' },
      { quote: 'Vice oozes from the very walls... never in the history of this play has such a raw and raucous production been seen', source: 'Newcity' },
      { quote: 'A rare and wonderful theatrical triumph... Goodman Theatre at its bravest and best', source: 'Chicago Stage Review' },
      { quote: 'Wickedly smart... as beautifully constructed as it is intellectually evocative', source: 'ChicagoCritic' },
      { quote: 'Bursting with a plethora of interlocking but distinct ideas', source: 'Chicago Tribune' },
      { quote: 'Grimy, gritty, uncomfortable, and downright sinful... the most intriguing Shakespeare you have seen in a while', source: 'Chicago Theatre Review' },
    ],
    relatedLinks: seedLinks,
    sourceStatus: 'featured-ready',
  },
  'the-seagull': {
    pageMode: 'featured',
    summary:
      'The Seagull stands at the center of Falls\'s Chekhov line in the archive: actor-driven, adapted from George Calderon, and personally important enough for him to later describe the rehearsal process as life-changing.',
    publicSummary:
      'Falls directs an intimate Owen Theatre Seagull that strips the play down to actors, subtext, and painful collisions between love, art, ambition, and self-invention.',
    synopsis:
      'When famed actress Arkadina visits her family with her young lover Trigorin in tow, they become ensnared in a tragicomic tangle of romance, intrigue, and unrequited love. Chekhov\'s artists, strivers, and dependents turn everyday conversation into a long crisis of desire, power, and disappointment.',
    fallsContext:
      'The local record consistently frames the production as a turning point for Falls. Review coverage and later timeline notes both suggest that the rehearsal process itself mattered as much as the opening: a return to Stanislavsky, a stripped-down approach, and a version of Chekhov that felt newly immediate rather than museum-bound.',
    significance:
      'A major Chekhov chapter for Falls: intimate in scale, rich in ensemble detail, and important enough in process and result to become part of his own career story.',
    story:
      'The Seagull matters because it lets the archive show process, not just product. Falls has repeatedly described a production built on spartan means, close actor work, and a fresh adaptation that made Chekhov feel like new writing. That makes the page more than a classic-play entry: it becomes a record of a rehearsal discovery that later echoed forward into Uncle Vanya and, eventually, The Cherry Orchard.',
    venueAnchor: 'Goodman Theatre',
    eraLabel: 'Late Goodman years',
    images: [
      {
        src: seagullShowArt,
        alt: 'Konstantin cups Arkadina\'s face in a stark black-space image used as The Seagull show art.',
        caption: 'Show art for Goodman Theatre\'s 2010 production of The Seagull, centered on the charged Arkadina-Konstantin relationship.',
        orientation: 'landscape',
        priority: true,
        kind: 'art',
      },
      {
        src: seagullEnsemble,
        alt: 'A wide ensemble image from The Seagull shows Sorin in a wheelchair, Nina seated on a bed, and the family clustered across a bare stage.',
        caption: 'A wide stage image that captures the production\'s stripped-down environment and ensemble geometry.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: seagull1,
        alt: 'Konstantin holds Arkadina\'s face in a tense close encounter.',
        caption: 'Konstantin and Arkadina in one of the production\'s most exposed mother-son confrontations.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: seagull2,
        alt: 'Arkadina argues face to face with Sorin.',
        caption: 'Arkadina and Sorin in a confrontation that pushes family history into the open.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: seagull3,
        alt: 'A group scene from The Seagull with Dorn standing apart while the rest of the family gathers around the playing space.',
        caption: 'The ensemble arranged across the open floor in Falls\'s spare, actor-centered staging.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: seagull4,
        alt: 'Arkadina gestures outward while lying across the stage beside Trigorin.',
        caption: 'A theatrical, half-comic image of Arkadina and Trigorin that keeps the production\'s humor and selfishness in play at once.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: seagull5,
        alt: 'Konstantin sits on the floor in front of Sorin\'s wheelchair.',
        caption: 'Sorin and Konstantin share one of the production\'s quietest, most vulnerable compositions.',
        orientation: 'portrait',
        kind: 'production-still',
      },
      {
        src: seagull6,
        alt: 'A large group from The Seagull sits and kneels across the stage in a communal scene.',
        caption: 'The ensemble gathered in a scene that shows how Falls let the play\'s social world breathe on a nearly bare floor.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: seagull7,
        alt: 'Masha hurls flowers in a comic burst of frustration.',
        caption: 'Masha supplies one of the production\'s sharpest flashes of comic pain.',
        orientation: 'landscape',
        kind: 'production-still',
      },
      {
        src: seagull8,
        alt: 'Arkadina dances closely with Konstantin beside a stack of suitcases.',
        caption: 'A top-lit embrace that turns maternal intimacy into something unsettled and theatrical.',
        orientation: 'landscape',
        kind: 'production-still',
      },
    ],
    collaborators: [
      { role: 'Playwright', name: 'Anton Chekhov' },
      { role: 'Director / adaptation', name: 'Robert Falls', note: 'Adapted from a translation by George Calderon.' },
    ],
    quickFacts: [
      { label: 'Run', value: 'Oct 16 - Nov 21, 2010' },
      { label: 'Venue', value: 'Owen Theatre, Goodman Theatre' },
      { label: 'Runtime', value: '3 hours' },
      { label: 'Mode', value: 'Falls adaptation from George Calderon' },
    ],
    cast: [
      { role: 'Konstantin', name: 'Stephen Louis Grush' },
      { role: 'Arkadina', name: 'Mary Beth Fisher' },
      { role: 'Trigorin', name: 'Cliff Chamberlain' },
      { role: 'Sorin', name: 'Francis Guinan' },
      { role: 'Dorn', name: 'Scott Jaeck' },
      { role: 'Nina', name: 'Heather Wood' },
      { role: 'Masha', name: 'Kelly O\'Sullivan' },
      { role: 'Polina', name: 'Janet Ulrich Brooks' },
      { role: 'Shamrayev', name: 'Steve Pickering' },
      { role: 'Medvedenko', name: 'Demetrios Troy' },
      { role: 'Yakov', name: 'Dieterich Gray' },
      { role: 'Cook', name: 'Laura T. Fisher' },
      { role: 'Servant', name: 'Will Allan' },
      { role: 'Maid', name: 'Rebecca Buller' },
    ],
    creativeTeam: [
      { role: 'By', name: 'Anton Chekhov' },
      { role: 'Directed and Adapted by', name: 'Robert Falls' },
      { role: 'Translation source', name: 'George Calderon' },
      { role: 'Scenic Design', name: 'Todd Rosenthal' },
      { role: 'Costume Design', name: 'Ana Kuzmanic' },
      { role: 'Lighting Design', name: 'Keith Parham' },
      { role: 'Sound Design', name: 'Richard Woodbury' },
      { role: 'Dramaturgy', name: 'Neena Arndt' },
      { role: 'Casting', name: 'Adam Belcuore' },
      { role: 'Production Stage Manager', name: 'Kimberly Osgood' },
      { role: 'Stage Manager', name: 'Jamie Wolfe' },
    ],
    recognition: [
      {
        label: 'Chekhov adaptation',
        detail: "Coverage frames the production as Falls's own adaptation from George Calderon, making the text part of his authorship story as well as his directing record.",
      },
      {
        label: 'Process significance',
        detail: 'Timeline notes that Falls later called the rehearsal process life-changing, a rare case where the archive explicitly treats rehearsal as career-defining.',
      },
      {
        label: 'Reception pattern',
        detail: 'The production drew a strongly positive review spread, including Chicago Sun-Times, Chicago Tribune, Time Out Chicago, and Chicago Theater Beat.',
      },
    ],
    contextNotes: [
      {
        label: 'Official framing',
        text: 'The Goodman one-sheet sells the production as an intimate Owen Theatre take on Chekhov\'s masterwork, emphasizing the passion and pathos of everyday life and the tragicomic tangle set off by Arkadina\'s visit.',
      },
      {
        label: 'Review consensus',
        text: 'Critics consistently praised the production\'s spontaneity and emotional truth, several noting the three-hour evening moved with the energy of new writing rather than academic revival.',
      },
      {
        label: 'Career context',
        text: 'The Seagull now reads as the key early chapter in Falls\'s late-career Chekhov line, with Uncle Vanya and The Cherry Orchard extending discoveries first made here.',
      },
    ],
    reviews: [
      {
        source: 'Goodman Theatre',
        href: 'https://www.goodmantheatre.org/show/the-seagull-11/',
        summary:
          'The official page frames the production as an intimate Owen Theatre Seagull directed by Falls, built around passion, pathos, and a tragicomic web of romance and artistic ambition.',
        note: 'Official production page',
      },
      {
        source: 'Theatre In Chicago',
        href: 'https://www.theatreinchicago.com/the-seagull/4166/',
        summary:
          'Theatre In Chicago\'s review roundup page, aggregating the local critical response to the Goodman staging.',
        note: 'Review hub',
      },
      {
        source: 'Chicago Tribune',
        href: 'https://www.theatreinchicago.com/the-seagull/4166/',
        summary:
          'Chris Jones praises the production\'s living, breathing spontaneity and ties it to Falls\'s own artistic journey through a play about art, theater, power, and starting again.',
        note: 'Quoted via review roundup',
      },
      {
        source: 'Chicago Sun-Times',
        href: 'https://www.theatreinchicago.com/the-seagull/4166/',
        summary:
          'Hedy Weiss writes that the three-hour running time races by and argues that the production makes the classic feel like a new play.',
        note: 'Quoted via review roundup',
      },
      {
        source: 'Time Out Chicago',
        href: 'https://www.theatreinchicago.com/the-seagull/4166/',
        summary:
          'Time Out highlights the splendid cast and Mary Beth Fisher\'s incandescent Arkadina, describing the evening as the kind of production meant to be talked about for years.',
        note: 'Quoted via review roundup',
      },
      {
        source: 'Chicago Theater Beat',
        href: 'https://www.theatreinchicago.com/the-seagull/4166/',
        summary:
          'The review calls Falls\'s stripped-down Seagull a stunning swerve from his larger productions and a thrilling example of storytelling at its most powerful.',
        note: 'Quoted via review roundup',
      },
      {
        source: 'Newcity Stage',
        href: 'https://www.newcitystage.com/2010/10/26/review-the-seagullgoodman-theatre/',
        summary:
          'Newcity\'s review of the Goodman staging.',
        note: 'Review',
      },
      {
        source: 'ChicagoCritic',
        href: 'https://chicagocritic.com/the-seagull/',
        summary:
          'Another review of the production.',
        note: 'Review',
      },
      {
        source: 'Theater In Chicago Feature',
        href: 'https://www.theatreinchicago.com/news/artistic-director-robert-falls-directs-an-intimate-fresh-take-on-chekhovs-the-seagull/227/',
        summary:
          'Preview and interview coverage of the production.',
        note: 'Feature',
      },
    ],
    externalSources: [
      { label: 'Official Goodman production page', href: 'https://www.goodmantheatre.org/show/the-seagull-11/' },
      { label: 'Theatre In Chicago review hub', href: 'https://www.theatreinchicago.com/the-seagull/4166/' },
      { label: 'Newcity Stage review', href: 'https://www.newcitystage.com/2010/10/26/review-the-seagullgoodman-theatre/' },
      { label: 'ChicagoCritic review', href: 'https://chicagocritic.com/the-seagull/' },
      { label: 'Theater In Chicago feature', href: 'https://www.theatreinchicago.com/news/artistic-director-robert-falls-directs-an-intimate-fresh-take-on-chekhovs-the-seagull/227/' },
      { label: 'YouTube stage clip', href: 'https://www.youtube.com/watch?v=8FoAYU8u0mI' },
      { label: 'Playbill casting announcement', href: 'https://playbill.com/article/goodmans-seagull-to-spotlight-mary-beth-fisher-francis-guinan-heather-wood-com-170796' },
      { label: 'Playbill run announcement', href: 'https://playbill.com/article/francis-guinan-mary-beth-fisher-feast-on-seagull-at-the-goodman-oct-16-nov-14-com-172710' },
      { label: 'BroadwayWorld feature', href: 'https://www.broadwayworld.com/chicago/article/Robert-Falls-Mary-Beth-Fisher-and-Francis-Guinan-Dish-on-The-Seagull-20010101' },
      { label: 'TheaterMania casting announcement', href: 'https://www.theatermania.com/news/mary-beth-fisher-stephen-louis-grush-francis-guinan-et-al-set-for-goodman-theatres-the-seagull_29578/' },
      { label: 'The Week mention', href: 'https://theweek.com/articles/489534/seagull' },
      { label: 'Chicago Maroon review', href: 'https://chicagomaroon.com/9192/artsandculture/modern-yet-misguided-don-t-flock-to-goodman-s-seagull/' },
    ],
    watchLinks: [
      {
        label: 'The Seagull | On Stage',
        href: 'https://www.youtube.com/watch?v=8FoAYU8u0mI',
        description: 'A YouTube stage clip from the production.',
        thumbnail: seagullShowArt,
      },
    ],
    pressQuotes: [
      {
        quote: 'Raw and Primal',
        source: 'Chicago Tribune',
      },
      {
        quote: 'Falls Succeeds Spectacularly',
        source: 'Chicago Tribune',
      },
      {
        quote: 'The play\'s three-hour running time races by',
        source: 'Chicago Sun-Times',
      },
      {
        quote: 'The Seagull is a lone, perfect pebble',
        source: 'Chicago Theater Beat',
      },
      {
        quote: 'the kind of production that aims to be talked about for years',
        source: 'Time Out Chicago',
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
      images: seed?.images?.length ? seed.images : [archiveFallbackImage],
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
      pressQuotes: seed?.pressQuotes ?? [],
      audienceFeedback: seed?.audienceFeedback ?? [],
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

// Some productions' images[0] is show art, an illustration, or otherwise a weak
// thumbnail at small sizes (Timeline avatars, homepage gallery). This points
// thumbnail callers to a stronger images[n] without reordering the production's
// own photo essay on its detail page.
const thumbnailOverrides: Record<string, number> = {
  'The Cherry Orchard': 2, // skip key art thumbnail, prefer production still
  'The Iceman Cometh': 1, // skip show art, use a production still
  'Uncle Vanya': 2, // skip show art, use the Sonya/Vanya embrace still
  '2666': 2, // skip the wide conference-table still, use the neon nightlife still
  Amadeus: 1, // skip the red show-art banner, use a production still
  'King Lear': 2, // skip the urinal-scene opener, use the Mafia/Mercedes still
  'American Buffalo': 3, // skip the text-heavy playbill cover, use the junk-shop ensemble still
  'We’re Only Alive for a Short Amount of Time': 2, // skip show art, use the performance still
  'Soups, Stews, and Casseroles: 1976': 1, // skip show art, use the kitchen-set production still
  'Measure for Measure': 2, // skip show art, use the Times Square set production still
  'Molly Sweeney': 1, // skip the eye-in-frame show art, use a production still
};

export function getFeaturedThumbnail(title: string): ProductionImage | null {
  const production = productions.find((p) => p.title === stripQualifier(title));
  if (!production || production.pageMode !== 'featured' || production.images.length === 0) return null;
  const overrideIndex = thumbnailOverrides[production.title];
  if (overrideIndex !== undefined && production.images[overrideIndex]) {
    return production.images[overrideIndex];
  }
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
