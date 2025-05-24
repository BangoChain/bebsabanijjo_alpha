import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  isSidebarCollapsed: boolean;
}

const initialState: GlobalState = {
  isSidebarCollapsed: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  },
});

export const { setIsSidebarCollapsed, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;
