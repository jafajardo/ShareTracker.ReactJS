import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Portfolio extends Component {
    newHoldingBtnOnClick = () => {
        this.props.history.push('/Holdings');
    }

    render() {
        return (
          <div className="page">
              <div className="header-area"></div>
              <div className="content-header-area h3">My Portfolio</div>
              <div className="content-area">
                  <div className="button-area">
                    <div className="row">
                        <input className="btn btn-warning btn-sm" type="button" value="Add New Holding" onClick={this.newHoldingBtnOnClick}/>
                    </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Portfolio;