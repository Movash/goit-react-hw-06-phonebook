import React from "react";
import { FilterCont } from './Filter.styled';
import { useDispatch, useSelector } from "react-redux";
import { saveFilter } from "redux/filter/slice";

const Filter = () => {
  const { filter } = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    dispatch(saveFilter(value));
  };
  return (
    <FilterCont>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterCont>
  );
}

export default Filter
