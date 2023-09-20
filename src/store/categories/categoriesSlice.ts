import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoriesWithProductsThunk } from "./categoriesThunk";
import config from "../../config.json";
import {
  categoriesSorting,
  defaultCategoriesSorting,
} from "../../constants/categoriesSorting";
import ICategory from "../../interfaces/ICategory";
import { ISorting } from "../../interfaces/ISorting";
import { ReduxAction } from "../../interfaces/ReduxAction";

const categoriesPerPage = config.PAGE_SIZE.CATEGORIES;
const defaultSort = categoriesSorting[defaultCategoriesSorting];

interface IRootCategoriesState {
  items: Array<ICategory>;
  activeCategory: {
    category: ICategory | null;
  };
  pagination: {
    page: number;
    perPage: number;
  };
  sorting: ISorting;
  isLoading: boolean;
  success: boolean;
  error: null;
}

const initialState: IRootCategoriesState = {
  items: [],
  activeCategory: {
    category: null,
  },
  pagination: {
    page: 1,
    perPage: categoriesPerPage,
  },
  sorting: {
    ...defaultSort,
  },
  isLoading: false,
  success: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllCategoriesWithProductsThunk.pending,
      (state: IRootCategoriesState) => {
        state.error = null;
        state.success = false;
        state.isLoading = true;
      }
    );
    builder.addCase(
      getAllCategoriesWithProductsThunk.fulfilled,
      (state: IRootCategoriesState, action: ReduxAction) => {
        const { payload } = action;

        state.items = payload;
        state.isLoading = false;
        state.success = true;
      }
    );
    builder.addCase(
      getAllCategoriesWithProductsThunk.rejected,
      (state, action: ReduxAction) => {
        const { payload } = action;
        const { message } = payload;

        state.isLoading = false;
        state.error = message;
      }
    );
  },
});

export default categoriesSlice.reducer;
