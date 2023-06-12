import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from 'redux/operations'

export const initialContacts = 
  {
    items: [],
    isLoading: false,
    error: null
  }

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    
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

  [addContact.pending](state) {
    state.isLoading = true;
  },
  [addContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = [...state.items, action.payload]
  },
  [addContact.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;

		state.items = initialContacts.items;
  },

  [deleteContact.pending](state) {
    state.isLoading = true;
  },
  [deleteContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(el => el.id !== action.payload.id)
  },
  [deleteContact.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;

		state.items = initialContacts.items;
  },
},
});

export const contactsReducer = contactsSlice.reducer;

