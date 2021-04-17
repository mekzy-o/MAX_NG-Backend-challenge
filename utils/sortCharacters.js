//Using closure concept to create ascending and descending sort functions

const sortByAscending = (field) => {
  return function (a, b) {
    const result =
      (typeof a[field] && typeof b[field]) == "string"
        ? a[field].localeCompare(b[field])
        : a[field] - b[field];
    return result;
  };
};

const sortByDescending = (field) => {
  return function (a, b) {
    const result =
      (typeof a[field] && typeof b[field]) == "string"
        ? b[field].localeCompare(a[field])
        : b[field] - a[field];
    return result;
  };
};

module.exports = { sortByAscending, sortByDescending };
