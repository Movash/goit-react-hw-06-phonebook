import { nanoid } from "@reduxjs/toolkit";

export const createObjectContacts = data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
}