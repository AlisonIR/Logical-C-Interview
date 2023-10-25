// reducers/persons.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../../types/types';

interface PersonsState {
  data: Person[];
}

const initialState: PersonsState = {
  data: [],
};

const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    setPersons: (state, action: PayloadAction<Person[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setPersons } = personsSlice.actions;
export default personsSlice.reducer;
