//function to sir

const sortByReleaseDate = (a, b) => {
  const dateA = new Date(a["release_date"]);
  const dateB = new Date(b["release_date"]);
  return dateA - dateB;
};

module.exports = sortByReleaseDate;
