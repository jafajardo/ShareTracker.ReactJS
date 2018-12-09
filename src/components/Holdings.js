import React from 'react';

import NewHolding from '../blocks/NewHolding';

class Holdings extends React.Component {
    render() {
        return (
            <div className="page">
              <div className="header-area"></div>
              <div className="content-header-area h3">Add Holdings</div>
              <div className="content-area">
                  <NewHolding />
              </div>
          </div>
        );
    }
}

export default Holdings;