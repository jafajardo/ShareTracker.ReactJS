import React from 'react';

import NewHolding from '../blocks/NewHolding';

class Holdings extends React.Component {
    render() {
        return (
            <div class="page">
              <div class="header-area"></div>
              <div class="content-header-area h3">Add New Holding</div>
              <div class="content-area">
                  <NewHolding />
              </div>
          </div>
        );
    }
}

export default Holdings;