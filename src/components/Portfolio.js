import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import HoldingsTable from '../blocks/HoldingsTable';

class Portfolio extends Component {
    componentDidMount = () => {
        console.dir(this.props.holdings)
    }
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
                  <div className="holdings-table">
                      <div className="row">
                          <HoldingsTable />
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        holdings: state.holdings.holdings
    }
}
export default connect(mapStateToProps, null)(Portfolio);