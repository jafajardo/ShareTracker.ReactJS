import React from 'react';
import axios from 'axios';

import {
    ADD_NEW_HOLDING
} from '../config';

export function AddNewHolding(newHolding) {
    return dispatch => {
        //TODO: invoke axios to make an HTTP post request to the server
        dispatch({
            type: ADD_NEW_HOLDING,
            payload: newHolding
        });
    }
}
