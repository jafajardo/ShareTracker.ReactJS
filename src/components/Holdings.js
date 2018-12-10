import React from 'react';
import { withRouter } from 'react-router-dom';

import NewHolding from '../blocks/NewHolding';

class Holdings extends React.Component {
    render() {
        return (
            <div className="page">
              <div className="header-area"></div>
              <div className="content-header-area h3">Add Holdings</div>
              <div className="content-area">
                  <NewHolding history={this.props.history} />
              </div>
          </div>
        );
    }
}

export default Holdings;