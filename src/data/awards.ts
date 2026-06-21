export interface Award {
  name: string;
  work?: string;
  year?: string;
}

export const awards: Award[] = [
  { name: 'Joseph Jefferson Award', work: 'Moonchildren', year: '1976–77' },
  { name: 'Joseph Jefferson Award', work: 'Of Mice and Men', year: '1977' },
  { name: 'Special Tony Award, Outstanding Regional Theatre', work: 'Goodman Theatre', year: '1992' },
  { name: 'Obie Award for Direction', work: 'subUrbia', year: '1995' },
  { name: 'Tony Award, Best Direction of a Play', work: 'Death of a Salesman', year: '1999' },
  { name: 'Illinois Arts Council Governor’s Award', year: '1999' },
  { name: 'Chicagoan of the Year', work: 'Chicago Magazine', year: '2000' },
  { name: 'Drama Desk Award, Outstanding Director of a Play', work: 'Long Day’s Journey Into Night', year: '2003' },
  { name: 'Fellow, American Academy of Arts and Sciences', year: '2003' },
  { name: 'Artistic Leadership Award', work: 'League of Chicago Theatres', year: '2003' },
  { name: 'Jeff Special Award', work: 'with Roche Schulfer', year: '2005–06' },
  { name: 'Honorary Doctor of Fine Arts', work: 'Lake Forest College', year: '2006' },
  { name: 'Helen Hayes Award', work: 'King Lear', year: '2009' },
  { name: 'O’Neill Medallion', work: 'Eugene O’Neill Society' },
  { name: 'Savva Morozov Diamond Award', work: 'Moscow Art Theatre' },
  { name: 'Distinguished Service to the Arts Award', work: 'Lawyers for the Creative Arts' },
  { name: 'Jeff Award', work: 'The Iceman Cometh', year: '2012' },
  { name: 'Theater Hall of Fame Induction', year: '2015' },
  { name: 'Jeff Special Award', work: 'Lifelong commitment to Chicago theatre', year: '2022–23' },
];
