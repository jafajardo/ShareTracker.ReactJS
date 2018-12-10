import React from 'react';

import {
    ADD_NEW_HOLDING
} from '../config';

const INITIAL_STATE = {
    holdings: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_NEW_HOLDING: {
            return {...state, holdings: [...state.holdings, action.payload]}
        }
    }
    return state;
}
