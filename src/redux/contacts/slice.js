import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './initialState';
import { createObjectContacts } from "./helpers";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContactAction: {
      prepare: createObjectContacts,
      reducer: (state, { payload }) => {
        if (state.contacts) {
          const isAlreadyExist = state.contacts.find(
            el => el.name.toLowerCase() === payload.name.toLowerCase()
          );
          if (isAlreadyExist)
            return alert(`${payload.name} is already in contacts`);
          state.contacts.push(payload);
        } else {
          state.contacts = [payload];
        }
      }
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((el) => el.id !== payload)
    }
  }
})

export const contactsReducer = contactsSlice.reducer
export const { createContactAction, deleteContact } = contactsSlice.actions;