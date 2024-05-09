import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";

const contactsSlise = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = true;
                state.loading = false;
                //state.items = [];
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload)
            }).addCase(addContact.rejected, (state) => {
                state.error = true;
            })
});

//export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
export const getContacts = (state) => state.contacts;