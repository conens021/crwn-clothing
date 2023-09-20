
export const sortingDirection = {
  ASC: 1,
  DESC: 2,
};

export const productsSorting = {
  newest: {
    value: "newest",
    sortBy: "CreatedAt",
    sortDirection: sortingDirection.DESC,
  },
  cheapest: {
    value: "cheapest",
    sortBy: "Price",
    sortDirection: sortingDirection.ASC,
  },
  "most-expensive": {
    value: "most-expensive",
    sortBy: "Price",
    sortDirection: sortingDirection.DESC,
  },
};



