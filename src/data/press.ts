export interface PressItem {
  outlet: string;
  title: string;
  date: string;
  url: string;
}

const monthOrder: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

function pressSortValue(date: string): number {
  const normalized = date.trim().toLowerCase();
  const yearMatch = normalized.match(/\d{4}/);
  if (!yearMatch) return 0;

  const year = parseInt(yearMatch[0], 10);
  const month = Object.entries(monthOrder).find(([name]) => normalized.includes(name))?.[1] ?? 0;
  return year * 100 + month;
}

const rawPressItems: PressItem[] = [
  {
    outlet: 'Chicago Classical Review',
    title: 'Don Giovanni, Susannah, Herodiade on tap in Lyric Opera’s 2026-27 season',
    date: 'April 2026',
    url: 'https://chicagoclassicalreview.com/2026/04/don-giovanni-susannah-herodiade-on-tap-in-lyric-operas-2026-27-season/',
  },
  {
    outlet: 'WBEZ Chicago',
    title: 'For theater director Robert Falls, one stage door closes and another opens',
    date: 'November 2025',
    url: 'https://www.wbez.org/theater-stages/2025/11/12/amadeus-steppenwolf-goodman-theatre-robert-falls-director',
  },
  {
    outlet: 'WBEZ Chicago',
    title: 'Robert Falls leaves legacy at Goodman Theatre',
    date: 'June 2023',
    url: 'https://www.wbez.org/culture-the-arts/2023/06/08/robert-falls-leaves-legacy-at-goodman-theatre',
  },
  {
    outlet: 'American Theatre',
    title: 'Goodman, Teatro Vista Take Centerstage at Equity Jeff Awards',
    date: 'October 2023',
    url: 'https://www.americantheatre.org/2023/10/04/goodman-teatro-vista-take-centerstage-at-equity-jeff-awards/',
  },
  {
    outlet: 'American Theatre',
    title: 'Robert Falls: Letting Go of the Goodman',
    date: 'March 2023',
    url: 'https://www.americantheatre.org/2023/03/29/robert-falls-letting-go-of-the-goodman/',
  },
  {
    outlet: 'CBS News Chicago',
    title: 'Goodman Theatre Artistic Director Robert Falls To Step Down After 35 Years',
    date: '2021',
    url: 'https://www.cbsnews.com/chicago/news/goodman-theatre-robert-falls-artistic-director-retiring-stepping-down/',
  },
  {
    outlet: 'Playbill',
    title: 'Robert Falls to Step Down as Goodman Theatre Artistic Director',
    date: '2021',
    url: 'https://playbill.com/article/robert-falls-to-step-down-as-goodman-theatre-artistic-director',
  },
  {
    outlet: 'University of Illinois Alumni Association',
    title: 'Falls’ Reign',
    date: '2018',
    url: 'https://uiaa.org/2018/12/12/falls-reign/',
  },
  {
    outlet: 'Chicago Magazine',
    title: 'Robert Falls, 30 years at the Goodman',
    date: 'March 2017',
    url: 'https://www.chicagomag.com/chicago-magazine/march-2017/robert-falls/',
  },
  {
    outlet: 'Daily Herald',
    title: 'Robert Falls Celebrates 30 Years as Goodman’s Driving Artistic Force',
    date: 'March 2017',
    url: 'https://www.dailyherald.com/20170303/entertainment/robert-falls-celebrates-30-years-as-goodmans-driving-artistic-force/',
  },
  {
    outlet: 'Chicago Magazine',
    title: 'Inside the Mind of Goodman Theatre Artistic Director Robert Falls',
    date: 'October 2010',
    url: 'https://www.chicagomag.com/chicago-magazine/october-2010/inside-the-mind-of-goodman-theatre-artistic-director-robert-falls/',
  },
  {
    outlet: 'TheatreInChicago',
    title: 'Artistic Director Robert Falls Celebrates 20 Years At The Goodman',
    date: '',
    url: 'https://www.theatreinchicago.com/articles/artistic-director-robert-falls-celebrates-20-years-at-the-goodman/137/',
  },
  {
    outlet: 'Variety',
    title: 'Review: Death of a Salesman',
    date: '1999',
    url: 'https://variety.com/1999/legit/reviews/death-of-a-salesman-11-1200456637/',
  },
  {
    outlet: 'Encyclopaedia Britannica',
    title: 'Robert Falls — Award-Winning American Theatre Director',
    date: '',
    url: 'https://www.britannica.com/biography/Robert-Falls',
  },
];

export const pressItems: PressItem[] = [...rawPressItems].sort(
  (a, b) => pressSortValue(b.date) - pressSortValue(a.date) || a.outlet.localeCompare(b.outlet),
);
