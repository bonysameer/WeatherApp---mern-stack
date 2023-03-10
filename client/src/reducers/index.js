import { combineReducers } from 'redux'
import weather from './weather';
import zipCode from './zipcode';
import temperature from "./temperature";
import history from "./history";

export default combineReducers({
    zipCode,
    weather,
    temperature,
    history
})