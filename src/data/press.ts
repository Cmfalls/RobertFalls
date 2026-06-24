export type PressCategory = 'profile' | 'review' | 'retrospective' | 'announcement';

export interface PressItem {
  id: string;
  outlet: string;
  title: string;
  url: string;
  dateLabel: string;
  year: number;
  month?: number;
  category: PressCategory;
  featured: boolean;
  summary: string;
  productionSlug?: string;
  productionTitle?: string;
}

export interface PressSection {
  category: PressCategory;
  title: string;
  description: string;
  items: PressItem[];
}

const categoryOrder: PressCategory[] = ['profile', 'review', 'retrospective', 'announcement'];

const sectionMeta: Record<PressCategory, { title: string; description: string }> = {
  profile: {
    title: 'Profiles & Interviews',
    description:
      'Long-form portraits, interviews, and personality pieces following Falls as director, institutional leader, and working Chicago theater figure.',
  },
  review: {
    title: 'Signature Reviews',
    description:
      'Key notices tied to the productions that best define the archive, from Goodman transfers to late-career revivals and opera remounts.',
  },
  retrospective: {
    title: 'Retrospectives & Career Milestones',
    description:
      'Legacy coverage, departure reporting, and milestone stories that look back across the Goodman years and their afterlife.',
  },
  announcement: {
    title: 'Recent Announcements',
    description:
      'Forward-looking coverage of new productions, transfers, season reveals, and major booking news.',
  },
};

function sortValue(item: PressItem): number {
  return item.year * 100 + (item.month ?? 0);
}

function comparePressItems(a: PressItem, b: PressItem): number {
  return (
    categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) ||
    sortValue(b) - sortValue(a) ||
    a.outlet.localeCompare(b.outlet) ||
    a.title.localeCompare(b.title)
  );
}

const rawPressItems: PressItem[] = [
  {
    id: 'wbez-stage-door-2025',
    outlet: 'WBEZ Chicago',
    title: 'For theater director Robert Falls, one stage door closes and another opens',
    url: 'https://www.wbez.org/theater-stages/2025/11/12/amadeus-steppenwolf-goodman-theatre-robert-falls-director',
    dateLabel: 'November 2025',
    year: 2025,
    month: 11,
    category: 'profile',
    featured: true,
    summary:
      "A post-Goodman profile built around Falls's Steppenwolf debut, framing his current chapter as selective, active, and still very much in motion.",
  },
  {
    id: 'broadwayworld-holiday-review-2026',
    outlet: 'BroadwayWorld',
    title: 'Review: Holiday at Goodman Theatre',
    url: 'https://www.broadwayworld.com/chicago/article/Review-HOLIDAY-at-Goodman-Theatre-20260210',
    dateLabel: 'February 2026',
    year: 2026,
    month: 2,
    category: 'review',
    featured: false,
    summary:
      'Rachel Weinberg reviews Falls\'s Goodman return and records the production as a lively romantic comedy with a stellar cast.',
    productionSlug: 'holiday',
    productionTitle: 'Holiday',
  },
  {
    id: 'broadwayworld-holiday-extension-2026',
    outlet: 'BroadwayWorld',
    title: 'Holiday Starring Wesley Taylor, Molly Griggs and More Extends at The Goodman',
    url: 'https://www.broadwayworld.com/chicago/article/HOLIDAY-Starring-Wesley-Taylor-Molly-Griggs-and-More-Extends-at-The-Goodman-20260212',
    dateLabel: 'February 2026',
    year: 2026,
    month: 2,
    category: 'announcement',
    featured: false,
    summary:
      'Announcement confirming the popular-demand extension of Falls\'s Centennial Season Goodman return through March 8, 2026.',
    productionSlug: 'holiday',
    productionTitle: 'Holiday',
  },
  {
    id: 'broadwayworld-holiday-video-2026',
    outlet: 'BroadwayWorld',
    title: 'Video: Wesley Taylor, Molly Griggs and More in Holiday at Goodman Theatre',
    url: 'https://www.broadwayworld.com/chicago/article/Video-Wesley-Taylor-Molly-Griggs-and-More-in-HOLIDAY-at-Goodman-Theatre-20260210',
    dateLabel: 'February 2026',
    year: 2026,
    month: 2,
    category: 'announcement',
    featured: false,
    summary:
      'Video coverage for the Goodman production, paired in the source packet with the official Holiday montage.',
    productionSlug: 'holiday',
    productionTitle: 'Holiday',
  },
  {
    id: 'broadwayworld-don-giovanni-lyric-2026',
    outlet: 'BroadwayWorld',
    title: 'Don Giovanni, La Traviata and More Set for Lyric Opera of Chicago 2026/27 Season',
    url: 'https://www.broadwayworld.com/chicago/article/DON-GIOVANNI-LA-TRAVIATA-and-More-Set-for-Lyric-Opera-of-Chicago-202627-Season-20260409',
    dateLabel: 'April 2026',
    year: 2026,
    month: 4,
    category: 'announcement',
    featured: false,
    summary:
      'Season coverage confirming Falls\'s Don Giovanni returns to Lyric October 10-November 1, 2026, conducted by Enrique Mazzola.',
    productionSlug: 'don-giovanni',
    productionTitle: 'Don Giovanni',
  },
  {
    id: 'broadwayworld-amadeus-review-2025',
    outlet: 'BroadwayWorld',
    title: 'Review: Amadeus at Steppenwolf Theatre Company',
    url: 'https://www.broadwayworld.com/chicago/article/Review-AMADEUS-at-Steppenwolf-Theatre-Company-20251117',
    dateLabel: 'November 2025',
    year: 2025,
    month: 11,
    category: 'review',
    featured: false,
    summary:
      'Rachel Weinberg reviews Falls\'s Steppenwolf debut and notes the 18-member cast and extended January 2026 run.',
    productionSlug: 'amadeus',
    productionTitle: 'Amadeus',
  },
  {
    id: 'broadwayworld-amadeus-photos-2025',
    outlet: 'BroadwayWorld',
    title: 'Photos: Amadeus Opens at Steppenwolf Theatre Company',
    url: 'https://www.broadwayworld.com/article/Photos-AMADEUS-Opens-at-Steppenwolf-Theatre-Company-20251121',
    dateLabel: 'November 2025',
    year: 2025,
    month: 11,
    category: 'announcement',
    featured: false,
    summary:
      'Opening-night photo coverage documenting the public arrival of Falls\'s first Steppenwolf production.',
    productionSlug: 'amadeus',
    productionTitle: 'Amadeus',
  },
  {
    id: 'broadwayworld-amadeus-full-cast-2025',
    outlet: 'BroadwayWorld',
    title: 'Full Cast Set for Amadeus at Steppenwolf Theatre Company',
    url: 'https://www.broadwayworld.com/chicago/article/Full-Cast-Set-for-AMADEUS-at-Steppenwolf-Theatre-Company-20250828',
    dateLabel: 'August 2025',
    year: 2025,
    month: 8,
    category: 'announcement',
    featured: false,
    summary:
      'Casting announcement for Falls\'s Steppenwolf debut, confirming the November 2025 opening frame.',
    productionSlug: 'amadeus',
    productionTitle: 'Amadeus',
  },
  {
    id: 'broadwayworld-amadeus-extension-2025',
    outlet: 'BroadwayWorld',
    title: 'Amadeus Now Extended at Steppenwolf Theatre Company',
    url: 'https://www.broadwayworld.com/chicago/article/AMADEUS-Now-Extended-at-Steppenwolf-Theatre-Company-20251006',
    dateLabel: 'October 2025',
    year: 2025,
    month: 10,
    category: 'announcement',
    featured: false,
    summary:
      'Early extension notice for the Steppenwolf run before the later January 25, 2026 extension captured elsewhere.',
    productionSlug: 'amadeus',
    productionTitle: 'Amadeus',
  },
  {
    id: 'broadwayworld-holiday-cast-2025',
    outlet: 'BroadwayWorld',
    title: 'Wesley Taylor and More to Star in Holiday at The Goodman',
    url: 'https://www.broadwayworld.com/connecticut/article/Wesley-Taylor-and-More-to-Star-in-HOLIDAY-at-The-Goodman-20251113',
    dateLabel: 'November 2025',
    year: 2025,
    month: 11,
    category: 'announcement',
    featured: false,
    summary:
      'Casting announcement for Falls\'s Goodman return in the Centennial Season.',
    productionSlug: 'holiday',
    productionTitle: 'Holiday',
  },
  {
    id: 'broadwayworld-aida-25-2025',
    outlet: 'BroadwayWorld',
    title: 'Back to Nubia: Stories from the Making of Aida After 25 Years',
    url: 'https://www.broadwayworld.com/article/Back-to-Nubia-Stories-from-the-Making-of-AIDA-After-25-Years-20251206',
    dateLabel: 'December 2025',
    year: 2025,
    month: 12,
    category: 'retrospective',
    featured: false,
    summary:
      'A 25-year look-back with Heather Headley, Adam Pascal, and Sherie Rene Scott that refreshes the archive record for Falls\'s Disney-scale Broadway musical.',
    productionSlug: 'aida',
    productionTitle: 'Aida',
  },
  {
    id: 'broadwayworld-outer-critics-2024',
    outlet: 'BroadwayWorld',
    title: '2024 Outer Critics Circle Awards - Full List of Nominees',
    url: 'https://www.broadwayworld.com/article/DEAD-OUTLAW-STEREOPHONIC-More-Lead-in-Nominations-for-2024-Outer-Critics-Circle-Awards-20240423',
    dateLabel: 'April 2024',
    year: 2024,
    month: 4,
    category: 'announcement',
    featured: false,
    summary:
      'Nomination coverage listing Falls for Outstanding Direction of a Play for Swing State.',
    productionSlug: 'swing-state',
    productionTitle: 'Swing State',
  },
  {
    id: 'broadwayworld-jeff-winners-2023',
    outlet: 'BroadwayWorld',
    title: "Goodman Theatre's The Who's Tommy and More Take Home Equity Jeff Awards",
    url: 'https://www.broadwayworld.com/article/Goodman-Theatre-and-More-Take-Home-Equity-Jeff-Awards-Full-List-of-Winners-20231003',
    dateLabel: 'October 2023',
    year: 2023,
    month: 10,
    category: 'announcement',
    featured: false,
    summary:
      'Equity Jeff winners coverage confirming Robert Falls\'s Direction - Play recognition for The Cherry Orchard.',
    productionSlug: 'the-cherry-orchard',
    productionTitle: 'The Cherry Orchard',
  },
  {
    id: 'broadwayworld-jeff-special-2023',
    outlet: 'BroadwayWorld',
    title: 'The Jeff Awards to Honor Robert Falls With Special Equity Theater Award',
    url: 'https://www.broadwayworld.com/chicago/article/The-Jeff-Awards-to-Honor-Robert-Falls-With-Special-Equity-Theater-Award-20230922',
    dateLabel: 'September 2023',
    year: 2023,
    month: 9,
    category: 'retrospective',
    featured: false,
    summary:
      'Coverage of the special Equity Jeff honor recognizing Falls\'s lifelong commitment to Chicago theatre.',
  },
  {
    id: 'broadwayworld-lonely-one-2023',
    outlet: 'BroadwayWorld',
    title: "You Don't Know the Lonely One Returns to Ancram Opera House in October",
    url: 'https://www.broadwayworld.com/bwwopera/article/YOU-DONT-KNOW-THE-LONELY-ONEReturns-ToAncram-Opera-House-In-October-20231004',
    dateLabel: 'October 2023',
    year: 2023,
    month: 10,
    category: 'announcement',
    featured: false,
    summary:
      'Announcement for the Ancram Opera House first-look staged production directed by Falls with David Cale, Dael Orlandersmith, and Matthew Dean Marsh.',
    productionSlug: 'you-dont-know-the-lonely-one',
    productionTitle: "You Don't Know the Lonely One",
  },
  {
    id: 'broadwayworld-step-down-2021',
    outlet: 'BroadwayWorld',
    title: 'Robert Falls to Step Down as Goodman Theatre Artistic Director in Summer 2022',
    url: 'https://www.broadwayworld.com/chicago/article/Robert-Falls-to-Step-Down-as-Goodman-Theatre-Artistic-Director-in-Summer-2022-20210915',
    dateLabel: 'September 2021',
    year: 2021,
    month: 9,
    category: 'retrospective',
    featured: false,
    summary:
      'A detailed institutional announcement covering the leadership transition, Falls\'s statement, and the major Goodman achievements under his tenure.',
  },
  {
    id: 'broadwayworld-sondheim-roundtable-2021',
    outlet: 'BroadwayWorld',
    title: 'Raul Esparza, Judy Kuhn, Robert Falls, Lonny Price & More Join Porchlight for Final Episodes of Sondheim @ 90 Roundtable',
    url: 'https://www.broadwayworld.com/article/Ral-Esparza-Judy-Kuhn-Robert-Falls-Lonny-Price-More-Join-Porchlight-for-Final-Episodes-of-SONDHEIM-90-ROUNDTABLE-20210126',
    dateLabel: 'January 2021',
    year: 2021,
    month: 1,
    category: 'announcement',
    featured: false,
    summary:
      'A digital appearance from the source packet, documenting Falls in Porchlight\'s Sondheim @ 90 roundtable series.',
  },
  {
    id: 'americantheatre-letting-go-2023',
    outlet: 'American Theatre',
    title: 'Robert Falls: Letting Go of the Goodman',
    url: 'https://www.americantheatre.org/2023/03/29/robert-falls-letting-go-of-the-goodman/',
    dateLabel: 'March 2023',
    year: 2023,
    month: 3,
    category: 'profile',
    featured: true,
    summary:
      'A substantial transition-era interview about stepping away from the institution he shaped for decades and deciding what work should follow.',
  },
  {
    id: 'uillinois-falls-reign-2018',
    outlet: 'University of Illinois Alumni Association',
    title: "Falls' Reign",
    url: 'https://uiaa.org/2018/12/12/falls-reign/',
    dateLabel: 'December 2018',
    year: 2018,
    month: 12,
    category: 'profile',
    featured: false,
    summary:
      'An alma mater feature looking at Falls as a statewide cultural figure, with attention to his leadership style and long Chicago career.',
  },
  {
    id: 'chicagomag-30-years-2017',
    outlet: 'Chicago Magazine',
    title: 'Robert Falls, 30 years at the Goodman',
    url: 'https://www.chicagomag.com/chicago-magazine/march-2017/robert-falls/',
    dateLabel: 'March 2017',
    year: 2017,
    month: 3,
    category: 'profile',
    featured: false,
    summary:
      'A broad portrait from the middle of the Goodman era, useful for understanding how Chicago saw Falls at the thirty-year mark.',
  },
  {
    id: 'dailyherald-30-years-2017',
    outlet: 'Daily Herald',
    title: "Robert Falls Celebrates 30 Years as Goodman's Driving Artistic Force",
    url: 'https://www.dailyherald.com/20170303/entertainment/robert-falls-celebrates-30-years-as-goodmans-driving-artistic-force/',
    dateLabel: 'March 2017',
    year: 2017,
    month: 3,
    category: 'profile',
    featured: false,
    summary:
      'A suburban Chicago profile keyed to the anniversary season and the scale of Falls\'s institutional influence.',
  },
  {
    id: 'chicagomag-inside-the-mind-2010',
    outlet: 'Chicago Magazine',
    title: 'Inside the Mind of Goodman Theatre Artistic Director Robert Falls',
    url: 'https://www.chicagomag.com/chicago-magazine/october-2010/inside-the-mind-of-goodman-theatre-artistic-director-robert-falls/',
    dateLabel: 'October 2010',
    year: 2010,
    month: 10,
    category: 'profile',
    featured: false,
    summary:
      'A sustained interview from the middle period of his tenure, focused on taste, risk, and how he thought about directing and programming.',
  },
  {
    id: 'theatreinchicago-20-years-2006',
    outlet: 'TheatreInChicago',
    title: 'Artistic Director Robert Falls Celebrates 20 Years At The Goodman',
    url: 'https://www.theatreinchicago.com/articles/artistic-director-robert-falls-celebrates-20-years-at-the-goodman/137/',
    dateLabel: '2006',
    year: 2006,
    category: 'profile',
    featured: false,
    summary:
      'A twenty-year checkpoint piece that captures how Falls and the Goodman were being discussed before the final stretch of the tenure.',
  },
  {
    id: 'newyorker-leading-ladies-1999',
    outlet: 'The New Yorker',
    title: 'Leading Ladies',
    url: 'https://www.newyorker.com/magazine/1999/03/15/leading-ladies-3',
    dateLabel: 'March 1999',
    year: 1999,
    month: 3,
    category: 'profile',
    featured: false,
    summary:
      "A Broadway-run profile of Elizabeth Franz that helps show how Falls's Death of a Salesman revival was being discussed beyond Brian Dennehy's central performance.",
    productionSlug: 'death-of-a-salesman',
    productionTitle: 'Death of a Salesman',
  },
  {
    id: 'newyorker-willy-loman-1999',
    outlet: 'The New Yorker',
    title: 'Arthur Miller and the Making of Willy Loman',
    url: 'https://www.newyorker.com/magazine/1999/01/25/making-willy-loman',
    dateLabel: 'January 1999',
    year: 1999,
    month: 1,
    category: 'review',
    featured: true,
    summary:
      "John Lahr uses the Goodman-to-Broadway revival to revisit the play's fiftieth anniversary and the American force of Miller's most famous creation.",
    productionSlug: 'death-of-a-salesman',
    productionTitle: 'Death of a Salesman',
  },
  {
    id: 'variety-salesman-1999',
    outlet: 'Variety',
    title: 'Review: Death of a Salesman',
    url: 'https://variety.com/1999/legit/reviews/death-of-a-salesman-11-1200456637/',
    dateLabel: '1999',
    year: 1999,
    category: 'review',
    featured: false,
    summary:
      "A trade review from the Broadway revival that marks the production's arrival as a major commercial and awards-season event.",
    productionSlug: 'death-of-a-salesman',
    productionTitle: 'Death of a Salesman',
  },
  {
    id: 'newyorker-barfiles-2012',
    outlet: 'The New Yorker',
    title: 'Barflies',
    url: 'https://www.newyorker.com/magazine/2012/05/21/barflies',
    dateLabel: 'May 2012',
    year: 2012,
    month: 5,
    category: 'review',
    featured: false,
    summary:
      "Hilton Als's review of the Goodman return gives the production a sharp New Yorker reading before the later BAM engagement.",
    productionSlug: 'the-iceman-cometh',
    productionTitle: 'The Iceman Cometh',
  },
  {
    id: 'nyt-iceman-2015',
    outlet: 'The New York Times',
    title: "Review: 'The Iceman Cometh' Revived, With Nathan Lane and Brian Dennehy",
    url: 'https://www.nytimes.com/2015/02/13/theater/review-the-iceman-cometh-revived-with-nathan-lane-and-brian-dennehy.html',
    dateLabel: 'February 2015',
    year: 2015,
    month: 2,
    category: 'review',
    featured: true,
    summary:
      'A major New York review of the BAM run, confirming that the Goodman revival carried real national weight once it moved east.',
    productionSlug: 'the-iceman-cometh',
    productionTitle: 'The Iceman Cometh',
  },
  {
    id: 'variety-iceman-2015',
    outlet: 'Variety',
    title: "Off Broadway Review: 'The Iceman Cometh' Starring Nathan Lane",
    url: 'https://variety.com/2015/legit/reviews/iceman-cometh-review-nathan-lane-bam-1201432373/',
    dateLabel: 'February 2015',
    year: 2015,
    month: 2,
    category: 'review',
    featured: false,
    summary:
      'A trade verdict on the BAM engagement, useful both for national reception and for how Lane and Dennehy were framed outside Chicago.',
    productionSlug: 'the-iceman-cometh',
    productionTitle: 'The Iceman Cometh',
  },
  {
    id: 'seenheard-don-giovanni-2014',
    outlet: 'Seen and Heard International',
    title: "Robert Falls' Carnal, Noirish Don Giovanni",
    url: 'https://seenandheard-international.com/2014/10/robert-falls-carnal-noirish-don-giovanni/',
    dateLabel: 'October 2014',
    year: 2014,
    month: 10,
    category: 'review',
    featured: false,
    summary:
      "A detailed opening-run opera review that fixed Falls's original Lyric staging as dark, sensual, and sharply modern.",
    productionSlug: 'don-giovanni',
    productionTitle: 'Don Giovanni',
  },
  {
    id: 'wttw-don-giovanni-2019',
    outlet: 'WTTW News',
    title: "Stunning 'Don Giovanni' a Surprisingly Ideal Fit for #MeToo Era",
    url: 'https://news.wttw.com/2019/11/15/stunning-don-giovanni-surprisingly-ideal-fit-metoo-era',
    dateLabel: 'November 2019',
    year: 2019,
    month: 11,
    category: 'review',
    featured: false,
    summary:
      'A 2019 revival review that updates the production\'s frame and argues for its continued cultural bite years after the premiere.',
    productionSlug: 'don-giovanni',
    productionTitle: 'Don Giovanni',
  },
  {
    id: 'suntimes-2666-2016',
    outlet: 'Chicago Sun-Times',
    title: "Labyrinthine voyage through '2666' a bravura feat at Goodman Theatre",
    url: 'https://chicago.suntimes.com/2016/2/17/18472099/labyrinthine-voyage-through-2666-a-bravura-feat-at-goodman-theatre',
    dateLabel: 'February 2016',
    year: 2016,
    month: 2,
    category: 'review',
    featured: true,
    summary:
      'A major Chicago review that treats the adaptation as an event piece and one of the most ambitious Goodman undertakings of its period.',
    productionSlug: '2666',
    productionTitle: '2666',
  },
  {
    id: 'newcity-2666-2016',
    outlet: 'Newcity Stage',
    title: 'Review: 2666/Goodman Theatre',
    url: 'https://www.newcitystage.com/2016/02/17/review-2666goodman-theatre/',
    dateLabel: 'February 2016',
    year: 2016,
    month: 2,
    category: 'review',
    featured: false,
    summary:
      "A local critical response that helps show how Chicago's theater press registered the scale and difficulty of the production.",
    productionSlug: '2666',
    productionTitle: '2666',
  },
  {
    id: 'washpost-king-lear-2009',
    outlet: 'The Washington Post',
    title: 'A Magnificent King Lear Rises to the Madness',
    url: 'https://www.washingtonpost.com/archive/style/2009/06/23/a-magnificent-king-lear-rises-to-the-madness/dc7dc794-bf40-4394-94b1-60808a2faefa/',
    dateLabel: 'June 2009',
    year: 2009,
    month: 6,
    category: 'review',
    featured: false,
    summary:
      'A prominent Washington notice from the Shakespeare Theatre Company remount, showing the production carrying beyond Chicago.',
    productionSlug: 'king-lear',
    productionTitle: 'King Lear',
  },
  {
    id: 'washingtoncitypaper-king-lear-2009',
    outlet: 'Washington City Paper',
    title: "Reviewed: Shakespeare Theatre Company's Transgressive, Transcendent King Lear",
    url: 'https://washingtoncitypaper.com/article/228782/reviewed-shakespeare-theatre-companys-transgressive-transcendent-king-lear/',
    dateLabel: 'June 2009',
    year: 2009,
    month: 6,
    category: 'review',
    featured: false,
    summary:
      'A more ecstatic Washington response that captures the remount as a forceful, polarizing Shakespeare event.',
    productionSlug: 'king-lear',
    productionTitle: 'King Lear',
  },
  {
    id: 'wttw-sound-inside-2021',
    outlet: 'WTTW News',
    title: "Goodman Theatre Play Reflects on Life, Death, Love and 'The Sound Inside'",
    url: 'https://news.wttw.com/2021/05/14/goodman-theatre-play-reflects-life-death-love-and-sound-inside',
    dateLabel: 'May 2021',
    year: 2021,
    month: 5,
    category: 'review',
    featured: false,
    summary:
      'A strong piece on the Goodman Theatre Live staging, useful for documenting how Falls\'s pandemic-era work was received in Chicago.',
    productionSlug: 'the-sound-inside',
    productionTitle: 'The Sound Inside',
  },
  {
    id: 'nyt-shining-city-2006',
    outlet: 'The New York Times',
    title: "Shining City, Conor McPherson's Study of Loneliness in a Haunted House",
    url: 'https://www.nytimes.com/2006/05/10/theater/reviews/shining-city-conor-mcphersons-study-of-loneliness-in-a.html',
    dateLabel: 'May 2006',
    year: 2006,
    month: 5,
    category: 'review',
    featured: false,
    summary:
      'Ben Brantley\'s review of the Broadway staging, marking Falls\'s entry into McPherson\'s intimate, haunted register.',
    productionSlug: 'shining-city',
    productionTitle: 'Shining City',
  },
  {
    id: 'newyorker-plant-life-2023',
    outlet: 'The New Yorker',
    title: 'Plant Life',
    url: 'https://www.newyorker.com/magazine/2023/10/02/swing-state-dig-theatre-reviews',
    dateLabel: 'October 2023',
    year: 2023,
    month: 10,
    category: 'review',
    featured: false,
    summary:
      'A New Yorker review of the New York transfer that helps place Rebecca Gilman and Falls in the current national conversation.',
    productionSlug: 'swing-state',
    productionTitle: 'Swing State',
  },
  {
    id: 'playbill-were-only-alive-2019',
    outlet: 'Playbill',
    title: 'What Did Critics Think of We\'re Only Alive for a Short Amount of Time at the Public Theater',
    url: 'https://playbill.com/article/what-did-critics-think-of-were-only-alive-for-a-short-amount-of-time-at-the-public-theater',
    dateLabel: 'June 2019',
    year: 2019,
    month: 6,
    category: 'review',
    featured: false,
    summary:
      'A critics-roundup link for the Public Theater transfer, useful because it records the Chicago production\'s afterlife in New York.',
    productionSlug: 'were-only-alive-for-a-short-amount-of-time',
    productionTitle: "We're Only Alive for a Short Amount of Time",
  },
  {
    id: 'wbez-legacy-2023',
    outlet: 'WBEZ Chicago',
    title: 'Robert Falls leaves legacy at Goodman Theatre',
    url: 'https://www.wbez.org/culture-the-arts/2023/06/08/robert-falls-leaves-legacy-at-goodman-theatre',
    dateLabel: 'June 2023',
    year: 2023,
    month: 6,
    category: 'retrospective',
    featured: false,
    summary:
      'A legacy-focused public-radio piece that looks back at the institutional and artistic shape of the Goodman years after his departure.',
  },
  {
    id: 'americantheatre-jeffs-2023',
    outlet: 'American Theatre',
    title: 'Goodman, Teatro Vista Take Centerstage at Equity Jeff Awards',
    url: 'https://www.americantheatre.org/2023/10/04/goodman-teatro-vista-take-centerstage-at-equity-jeff-awards/',
    dateLabel: 'October 2023',
    year: 2023,
    month: 10,
    category: 'retrospective',
    featured: false,
    summary:
      'A milestone item that registers how Goodman-related work continued to be honored in the years immediately after Falls stepped down.',
  },
  {
    id: 'playbill-step-down-2021',
    outlet: 'Playbill',
    title: 'Robert Falls to Step Down as Goodman Theatre Artistic Director',
    url: 'https://playbill.com/article/robert-falls-to-step-down-as-goodman-theatre-artistic-director',
    dateLabel: 'September 2021',
    year: 2021,
    month: 9,
    category: 'retrospective',
    featured: false,
    summary:
      'A national theater-industry marker of the succession moment at Goodman and what it meant inside the field.',
  },
  {
    id: 'cbs-step-down-2021',
    outlet: 'CBS News Chicago',
    title: 'Goodman Theatre Artistic Director Robert Falls To Step Down After 35 Years',
    url: 'https://www.cbsnews.com/chicago/news/goodman-theatre-robert-falls-artistic-director-retiring-stepping-down/',
    dateLabel: 'September 2021',
    year: 2021,
    month: 9,
    category: 'retrospective',
    featured: false,
    summary:
      'A local television-news version of the retirement story, useful for how widely the succession news moved beyond theater-only outlets.',
  },
  {
    id: 'axios-stepping-down-2021',
    outlet: 'Axios Chicago',
    title: "Chicago's theater icon Robert Falls on why he's stepping down",
    url: 'https://www.axios.com/local/chicago/2021/09/21/chicago-tony-award-winning-theater-icon-robert-falls-why-hes-stepping-down',
    dateLabel: 'September 2021',
    year: 2021,
    month: 9,
    category: 'retrospective',
    featured: false,
    summary:
      'A concise exit interview that captures Falls explaining the timing of his departure and the shape of the career he built in Chicago.',
  },
  {
    id: 'chicagoclassicalreview-don-giovanni-2026',
    outlet: 'Chicago Classical Review',
    title: 'Don Giovanni, Susannah, Herodiade on tap in Lyric Opera\'s 2026-27 season',
    url: 'https://chicagoclassicalreview.com/2026/04/don-giovanni-susannah-herodiade-on-tap-in-lyric-operas-2026-27-season/',
    dateLabel: 'April 2026',
    year: 2026,
    month: 4,
    category: 'announcement',
    featured: false,
    summary:
      "A current season-announcement item confirming the next revival of Falls's Don Giovanni and keeping the press page tied to active work.",
    productionSlug: 'don-giovanni',
    productionTitle: 'Don Giovanni',
  },
  {
    id: 'axios-amadeus-2025',
    outlet: 'Axios Chicago',
    title: 'Chicago theater legend Robert Falls joins Steppenwolf for 50th anniversary season',
    url: 'https://www.axios.com/local/chicago/2025/07/01/director-robert-falls-steppenwolf-50th-anniversary-season-amadeus-goodman',
    dateLabel: 'July 2025',
    year: 2025,
    month: 7,
    category: 'announcement',
    featured: false,
    summary:
      "An early announcement of Falls's Steppenwolf debut, useful as a marker of his post-Goodman visibility inside Chicago's top-tier institutions.",
    productionSlug: 'amadeus',
    productionTitle: 'Amadeus',
  },
  {
    id: 'playbill-iceman-bam-2015',
    outlet: 'Playbill',
    title: "O'Neill Epic The Iceman Cometh, With Nathan Lane and Brian Dennehy, Opens at BAM",
    url: 'https://playbill.com/article/oneill-epic-the-iceman-cometh-with-nathan-lane-and-brian-dennehy-opens-at-bam-com-341515',
    dateLabel: 'February 2015',
    year: 2015,
    month: 2,
    category: 'announcement',
    featured: false,
    summary:
      'An industry-opening item that marks the Goodman revival\'s move into a New York showcase run at BAM.',
    productionSlug: 'the-iceman-cometh',
    productionTitle: 'The Iceman Cometh',
  },
  {
    id: 'broadwaycom-shining-city-2006',
    outlet: 'Broadway.com',
    title: "Robert Falls to Helm Conor McPherson's Shining City at the Biltmore",
    url: 'https://www.broadway.com/buzz/94978/robert-falls-to-helm-conor-mcphersons-shining-city-at-the-biltmore/',
    dateLabel: '2006',
    year: 2006,
    category: 'announcement',
    featured: false,
    summary:
      'Advance coverage placing Falls at the center of the Broadway mounting before reviews arrived, useful for the production\'s public launch story.',
    productionSlug: 'shining-city',
    productionTitle: 'Shining City',
  },
];

export const featuredPress: PressItem[] = rawPressItems.filter((item) => item.featured);

export const pressItems: PressItem[] = [...rawPressItems].sort(comparePressItems);

export const pressSections: PressSection[] = categoryOrder.map((category) => ({
  category,
  title: sectionMeta[category].title,
  description: sectionMeta[category].description,
  items: pressItems.filter((item) => item.category === category && !item.featured),
}));

export const pressStats = {
  totalItems: rawPressItems.length,
  featuredItems: featuredPress.length,
  earliestYear: Math.min(...rawPressItems.map((item) => item.year)),
  latestYear: Math.max(...rawPressItems.map((item) => item.year)),
  linkedProductionCount: new Set(rawPressItems.flatMap((item) => (item.productionSlug ? [item.productionSlug] : []))).size,
};
