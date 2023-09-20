import { ISorting } from "../interfaces/ISorting";
import { sortingDirection } from "./sorting";

interface ICategoriesSorting {
    readonly newest: ISorting;
    readonly ["last-updated"]: ISorting;
    readonly ["A-Z"]: ISorting;
    readonly ["Z-A"]: ISorting;
  }

export const defaultCategoriesSorting = "A-Z";

export const categoriesSorting: ICategoriesSorting = {
  ["newest"]: {
    value: "newest",
    sortBy: "CreatedAt",
    sortDirection: sortingDirection.DESC,
  },
  ["last-updated"]: {
    value: "last-updated",
    sortBy: "UpdatedAt",
    sortDirection: sortingDirection.DESC,
  },
  ["A-Z"]: {
    value: "A-Z",
    sortBy: "Name",
    sortDirection: sortingDirection.ASC,
  },
  ["Z-A"]: {
    value: "Z-A",
    sortBy: "Name",
    sortDirection: sortingDirection.DESC,
  },
};