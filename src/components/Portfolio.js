import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Portfolio extends Component {
    newHoldingBtnOnClick = () => {
        this.props.history.push('/Holdings');
    }

    render() {
        return (
          <div class="page">
              <div class="header-area"></div>
              <div class="content-header-area h3">My Portfolio</div>
              <div class="content-area">
                  <div class="button-area">
                    <div class="row">
                        <input class="btn btn-warning btn-sm" type="button" value="Add New Holding" onClick={this.newHoldingBtnOnClick}/>
                    </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Portfolio;