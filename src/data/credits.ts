export interface Credit {
  title: string;
  venue: string;
  year: string;
  note?: string;
}

export interface CreditGroup {
  label: string;
  count: string;
  credits: Credit[];
}

export const creditGroups: CreditGroup[] = [
  {
    label: 'Broadway',
    count: '16 productions',
    credits: [
      { title: 'The Speed of Darkness', venue: 'Belasco Theatre', year: '1991', note: 'Goodman world premiere transfer' },
      { title: 'The Rose Tattoo', venue: 'Circle in the Square', year: '1995', note: 'Tony-nominated, Best Revival; 73 performances' },
      { title: 'The Night of the Iguana', venue: 'Criterion Center Stage Right', year: '1996', note: '69 performances' },
      { title: 'The Young Man from Atlanta', venue: 'Longacre Theatre', year: '1997', note: 'Tony nominations, Best Play, Best Actress, Best Featured Actor' },
      { title: 'Death of a Salesman', venue: 'Eugene O’Neill Theatre', year: '1999', note: 'Best Revival Tony; Falls won Best Direction; 274 performances' },
      { title: 'Aida', venue: 'Palace Theatre', year: '2000', note: 'Director & co-book writer; 1,852 performances; 4 Tony wins' },
      { title: 'Long Day’s Journey Into Night', venue: 'Plymouth Theatre', year: '2003', note: 'Drama Desk Award; major Tony wins; 117 performances' },
      { title: 'Shining City', venue: 'Biltmore Theatre', year: '2006', note: 'Tony nomination, Best Play; 80 performances' },
      { title: 'American Buffalo', venue: 'Broadway', year: '2008' },
      { title: 'Desire Under the Elms', venue: 'Broadway', year: '2009', note: 'Goodman transfer' },
      { title: 'Chinglish', venue: 'Broadway', year: '2011', note: 'Goodman world premiere transfer' },
      { title: 'The Rose Tattoo', venue: 'Roundabout Theatre', year: '2019', note: 'Tony nomination' },
      { title: 'Talk Radio', venue: 'Longacre Theatre', year: '2007', note: '121 performances' },
    ],
  },
  {
    label: 'Goodman Theatre',
    count: '1986–2026',
    credits: [
      { title: 'Galileo', venue: 'Goodman Theatre', year: '1987', note: 'Goodman directorial debut' },
      { title: 'The Tempest', venue: 'Goodman Theatre', year: '1987' },
      { title: 'The Iceman Cometh', venue: 'Goodman Theatre', year: '1990', note: 'Revisited 2012 & 2015' },
      { title: 'The Speed of Darkness', venue: 'Goodman Theatre', year: '1989', note: 'World premiere' },
      { title: 'The Night of the Iguana', venue: 'Goodman Theatre', year: '1994' },
      { title: 'Death of a Salesman', venue: 'Goodman Theatre', year: '1998', note: 'Basis for Tony-winning Broadway revival' },
      { title: 'Long Day’s Journey into Night', venue: 'Goodman Theatre', year: '2002' },
      { title: 'Lobby Hero', venue: 'Goodman Theatre', year: '2002' },
      { title: 'King Lear', venue: 'Goodman Theatre', year: '2006', note: 'Helen Hayes Award' },
      { title: 'Finishing the Picture', venue: 'Goodman Theatre', year: '2004', note: 'World premiere — Arthur Miller’s final play' },
      { title: 'The Seagull', venue: 'Goodman Theatre', year: '2010' },
      { title: 'Measure for Measure', venue: 'Goodman Theatre', year: '2013' },
      { title: 'Luna Gale', venue: 'Goodman Theatre', year: '2013', note: 'World premiere — Rebecca Gilman' },
      { title: '2666', venue: 'Goodman Theatre', year: '2016', note: 'World premiere, adapted with Seth Bockley' },
      { title: 'Uncle Vanya', venue: 'Goodman Theatre', year: '2017', note: 'Adaptation by Annie Baker' },
      { title: 'An Enemy of the People', venue: 'Goodman Theatre', year: '2018', note: 'Falls’s own adaptation' },
      { title: 'The Winter’s Tale', venue: 'Goodman Theatre', year: '2019' },
      { title: 'Swing State', venue: 'Goodman Theatre', year: '2022', note: 'World premiere — Rebecca Gilman' },
      { title: 'The Cherry Orchard', venue: 'Goodman Theatre', year: '2023', note: 'Falls’s own adaptation; valedictory production' },
      { title: 'Holiday', venue: 'Goodman Theatre', year: '2026', note: 'First Goodman production since stepping down; Centennial Season' },
    ],
  },
  {
    label: 'Wisdom Bridge Theatre',
    count: '1977–1985',
    credits: [
      { title: 'Of Mice and Men', venue: 'Wisdom Bridge Theatre', year: '1977', note: 'Led to his appointment as Artistic Director' },
      { title: 'Mother Courage and Her Children', venue: 'Wisdom Bridge Theatre', year: '1981' },
      { title: 'A Streetcar Named Desire', venue: 'Wisdom Bridge Theatre', year: '1982' },
      { title: 'In the Belly of the Beast', venue: 'Wisdom Bridge at Goodman Studio', year: '1983', note: 'Toured internationally in 1985' },
      { title: 'Hamlet', venue: 'Wisdom Bridge Theatre', year: '1985', note: 'Starring Aidan Quinn' },
    ],
  },
  {
    label: 'Opera',
    count: 'Lyric Opera of Chicago & others',
    credits: [
      { title: 'Susannah', venue: 'Lyric Opera of Chicago', year: '1993', note: 'Opera directing debut' },
      { title: 'The Consul', venue: 'Lyric Opera of Chicago', year: '1996' },
      { title: 'Susannah', venue: 'Metropolitan Opera, New York', year: '1999' },
      { title: 'Don Giovanni', venue: 'Lyric Opera of Chicago', year: '2014–15', note: 'Remounted in Dallas, 2020' },
      { title: 'Don Giovanni', venue: 'Lyric Opera of Chicago', year: '2019–20' },
    ],
  },
  {
    label: 'Recent Work',
    count: '2025–2026',
    credits: [
      { title: 'Amadeus', venue: 'Steppenwolf Theatre Company', year: '2025', note: 'Steppenwolf directorial debut' },
      { title: 'Holiday', venue: 'Goodman Theatre', year: '2026', note: 'First Goodman production since stepping down as Artistic Director' },
    ],
  },
];
