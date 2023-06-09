import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import {addFilter} from 'redux/filterSlice'

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <label className={css.labelFilter}> Find contacts by name
            <input type="text"  onChange={(e) => dispatch(addFilter(e.target.value))} className={css.inputFilter}/>
        </label>
        )
}

export default Filter;

