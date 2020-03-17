import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import filterReducer1 from './filterReducer1';
import filterReducer2 from './filterReducer2';
import filterReducer3 from './filterReducer3';
import filterReducer4 from './filterReducer4';
import filterReducer5 from './filterReducer5';
import filterReducer6 from './filterReducer6';
import filterReducer7 from './filterReducer7';
import sortDownReducer1 from './sortDownReducer1';
import sortUpReducer1 from './sortUpReducer1';
import sortDownReducer4 from './sortDownReducer4';
import sortUpReducer4 from './sortUpReducer4';
import visibleReducer1 from './visibleReducer1';
import visibleReducer2 from './visibleReducer2';
import visibleReducer3 from './visibleReducer3';
import visibleReducer4 from './visibleReducer4';
import visibleReducer5 from './visibleReducer5';
import visibleReducer6 from './visibleReducer6';
import visibleReducer7 from './visibleReducer7';

const allReducers=combineReducers({
  rows: tableReducer,
  filter1: filterReducer1,
  filter2: filterReducer2,
  filter3: filterReducer3,
  filter4: filterReducer4,
  filter5: filterReducer5,
  filter6: filterReducer6,
  filter7: filterReducer7,
  sortDown1: sortDownReducer1,
  sortUp1: sortUpReducer1,
  sortDown4: sortDownReducer4,
  sortUp4: sortUpReducer4,
  visible1: visibleReducer1,
  visible2: visibleReducer2,
  visible3: visibleReducer3,
  visible4: visibleReducer4,
  visible5: visibleReducer5,
  visible6: visibleReducer6,
  visible7: visibleReducer7,
})

export default allReducers;