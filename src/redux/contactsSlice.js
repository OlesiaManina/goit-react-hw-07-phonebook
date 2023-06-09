import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts} from 'redux/operations'

export const initialContacts = 
  {
    items: [],
    isLoading: false,
    error: null
  }

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
      addContact: (state, action) => {
        state.items = [...state.items, action.payload]
    },
      deleteContactAct: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload)
  },
},
extraReducers: {
  [fetchContacts.pending](state) {
    state.isLoading = true;
  },
  [fetchContacts.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  },
  [fetchContacts.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;

		state.items = initialContacts.items;
  },
},
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContactAct } = contactsSlice.actions;
