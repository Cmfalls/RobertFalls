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
      { title: 'The Speed of Darkness', venue: 'Belasco Theatre, Broadway', year: '1991', note: 'Goodman world premiere transfer' },
      { title: 'The Rose Tattoo', venue: 'Circle in the Square, Broadway', year: '1995', note: 'Tony-nominated, Best Revival; 73 performances' },
      { title: 'The Night of the Iguana', venue: 'Criterion Center Stage Right, Broadway', year: '1996', note: '69 performances' },
      { title: 'The Young Man from Atlanta', venue: 'Longacre Theatre, Broadway', year: '1997', note: 'Tony nominations, Best Play, Best Actress, Best Featured Actor' },
      { title: 'Death of a Salesman', venue: 'Eugene O’Neill Theatre, Broadway', year: '1999', note: 'Best Revival Tony; Falls won Best Direction; 274 performances' },
      { title: 'Aida', venue: 'Palace Theatre, Broadway', year: '2000', note: 'Director & co-book writer; 1,852 performances; 4 Tony wins' },
      { title: 'Long Day’s Journey Into Night', venue: 'Plymouth Theatre, Broadway', year: '2003', note: 'Drama Desk Award; major Tony wins; 117 performances' },
      { title: 'Shining City', venue: 'Manhattan Theatre Club, Broadway', year: '2006', note: 'Tony nomination, Best Play; 80 performances' },
      { title: 'American Buffalo', venue: 'Broadway', year: '2008' },
      { title: 'Desire Under the Elms', venue: 'Goodman Theatre & Broadway', year: '2009', note: 'Goodman transfer' },
      { title: 'Talk Radio', venue: 'Longacre Theatre, Broadway', year: '2007', note: '121 performances' },
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
      { title: 'King Lear', venue: 'Goodman Theatre', year: '2006', note: 'Remounted at Shakespeare Theatre Company, DC, 2009; Helen Hayes Award context ties to that remount' },
      { title: 'Finishing the Picture', venue: 'Goodman Theatre', year: '2004', note: 'World premiere — Arthur Miller’s final play' },
      { title: 'The Seagull', venue: 'Goodman Theatre', year: '2010' },
      { title: 'Measure for Measure', venue: 'Goodman Theatre', year: '2013' },
      { title: 'Luna Gale', venue: 'Goodman Theatre', year: '2014', note: 'World premiere — Rebecca Gilman' },
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
      { title: 'Of Mice and Men', venue: 'Wisdom Bridge Theatre', year: '1977', note: 'Led to his appointment as Artistic Director; Jeff Award' },
      { title: 'Ladyhouse Blues', venue: 'Wisdom Bridge Theatre', year: '1977' },
      { title: 'The Idiots Karamazov', venue: 'Wisdom Bridge Theatre', year: '1978' },
      { title: 'The Runner Stumbles', venue: 'Wisdom Bridge Theatre', year: '1978', note: 'Midwest premiere' },
      { title: 'Tartuffe', venue: 'Wisdom Bridge Theatre', year: '1979', note: 'Co-directed with Michael Maggio' },
      { title: 'Wings', venue: 'Wisdom Bridge Theatre', year: '1979', note: 'Midwest premiere — Arthur Kopit' },
      { title: 'Bagtime', venue: 'Wisdom Bridge Theatre', year: '1979', note: 'World premiere' },
      { title: 'Getting Out', venue: 'Wisdom Bridge Theatre', year: '1980', note: 'Midwest premiere — Marsha Norman' },
      { title: 'The Importance of Being Earnest and Travesties', venue: 'Wisdom Bridge Theatre', year: '1980', note: 'Wilde / Stoppard rotating repertory' },
      { title: 'Yentl', venue: 'Wisdom Bridge Theatre', year: '1980', note: 'Midwest premiere' },
      { title: 'Standing on My Knees', venue: 'Wisdom Bridge Theatre', year: '1981', note: 'World premiere; later transferred to Manhattan Theatre Club' },
      { title: 'Bent', venue: 'Wisdom Bridge Theatre', year: '1981', note: 'Midwest premiere — Martin Sherman' },
      { title: 'Mother Courage and Her Children', venue: 'Wisdom Bridge Theatre', year: '1981' },
      { title: 'We Won\'t Pay, We Won\'t Pay', venue: 'Wisdom Bridge Theatre', year: '1982', note: 'Midwest premiere — Dario Fo' },
      { title: 'Sister Mary Ignatius / The Actor\'s Nightmare', venue: 'Wisdom Bridge Theatre', year: '1982', note: 'Midwest premiere — Christopher Durang double bill' },
      { title: 'A Streetcar Named Desire', venue: 'Wisdom Bridge Theatre', year: '1982' },
      { title: 'In the Belly of the Beast', venue: 'Wisdom Bridge at Goodman Studio Theatre', year: '1983', note: 'World premiere; toured internationally in 1985' },
      { title: 'Losing It', venue: 'Wisdom Bridge Theatre', year: '1983' },
      { title: 'Terra Nova', venue: 'Wisdom Bridge Theatre', year: '1984', note: 'Ted Tally\'s Antarctic drama' },
      { title: 'Careless Love', venue: 'Wisdom Bridge Theatre', year: '1984' },
      { title: 'Life and Limb', venue: 'Wisdom Bridge Theatre', year: '1984', note: 'World premiere — Keith Reddin' },
      { title: 'Hamlet', venue: 'Wisdom Bridge Theatre', year: '1985', note: 'Starring Aidan Quinn; valedictory Wisdom Bridge production' },
    ],
  },
  {
    label: 'Opera',
    count: 'Lyric Opera of Chicago & others',
    credits: [
      { title: 'Susannah', venue: 'Lyric Opera of Chicago', year: '1993', note: 'Opera directing debut' },
      { title: 'The Consul', venue: 'Lyric Opera of Chicago', year: '1996' },
      { title: 'Susannah', venue: 'Metropolitan Opera, New York', year: '1999' },
      { title: 'Don Giovanni', venue: 'Lyric Opera of Chicago', year: '2014', note: 'Remounted at Dallas Opera, 2018' },
      { title: 'Don Giovanni', venue: 'Lyric Opera of Chicago', year: '2019' },
      { title: 'Don Giovanni', venue: 'Lyric Opera of Chicago', year: '2026', note: 'Third Lyric revival of the 2014 staging' },
    ],
  },
  {
    label: 'Recent Work',
    count: '2023–2026',
    credits: [
      { title: "You Don't Know the Lonely One", venue: 'Ancram Opera House', year: '2023', note: 'First-look staged production with David Cale, Dael Orlandersmith, and Matthew Dean Marsh' },
      { title: 'Amadeus', venue: 'Steppenwolf Theatre Company', year: '2025', note: 'Steppenwolf directorial debut' },
      { title: 'Holiday', venue: 'Goodman Theatre', year: '2026', note: 'First Goodman production since stepping down as Artistic Director' },
    ],
  },
];
