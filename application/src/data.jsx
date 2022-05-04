const TableHeaders = [
  { movies: true, directors: true, field: "Name" },
  { movies: true, directors: false, field: "Genre" },
  { movies: true, directors: false, field: "Rate" },
  { movies: true, directors: false, field: "Director" },
  { movies: true, directors: false, field: "Watched" },
  { movies: false, directors: true, field: "Age" },
  { movies: false, directors: true, field: "Movies" },
  { movies: true, directors: true, field: "Actions" },
];

export default TableHeaders;
