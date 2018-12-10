import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class NewHolding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holdingCode: '',
            totalHoldingAmount: 0.00,
            quantity: 0,
            sharePrice: 0.00,
            brokerageFee: 0.00
        }
    }
    onHoldingCodeChange = (e) => {
        this.setState({
            holdingCode: e.target.value
        });
    }
    onQuantityChange = (e) => {
        this.setState({
            quantity: e.target.value
        }, this.calculateTotalHoldingAmount());
    }
    onSharePriceChange = (e) => {
        this.setState({
            sharePrice: e.target.value
        }, this.calculateTotalHoldingAmount());
    }
    onBrokerageFeeChange = (e) => {
        this.setState({
            brokerageFee: e.target.value
        }, this.calculateTotalHoldingAmount());
    }
    calculateTotalHoldingAmount = () => {
        const {quantity, sharePrice, brokerageFee} = this.state;
        if (quantity > 0 && sharePrice > 0.00) {
            this.setState({
                totalHoldingAmount: (parseInt(quantity) * parseFloat(sharePrice)) + parseFloat(brokerageFee)
            });
        }
    }
    saveHoldingBtnOnClick = () => {
        if (this.state.quantity > 0 && this.state.sharePrice > 0.00) {
            this.props.AddNewHolding({
                holdingCode: this.state.holdingCode,
                quantity: this.state.quantity,
                sharePrice: this.state.sharePrice,
                brokerageFee: this.state.brokerageFee,
                amount: this.state.totalHoldingAmount
            });

        this.props.history.push('/Portfolio');
        }
    }
    render() {
        return (
            <div className="newHolding">
            <form className="newHoldingForm">
                <div className="form-group">
                    <label className="col-sm-3 form-label">Code:</label>
                    <input type="text" className="form-control" placeholder="TLS" onChange={this.onHoldingCodeChange}></input>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 form-label">Traded on:</label>
                    <input type="text" className="form-control" placeholder="Date"></input>
                </div>
                <div className="form-group row">
                    <div className="col-sm-3">
                        <label>Quantity</label>
                        <input type="text" className="form-control" placeholder="0" onChange={this.onQuantityChange}></input>
                    </div>
                    <div className="col-sm-3">
                        <label>Share Price</label>
                        <input type="text" className="form-control" placeholder="0.00" onChange={this.onSharePriceChange}></input>
                    </div>
                    <div className="col-sm-3">
                        <label>Brokerage</label>
                        <input type="text" className="form-control" placeholder="0.00" onChange={this.onBrokerageFeeChange}></input>
                    </div>
                    <div className="col-sm-3">
                        <label>Total</label>
                        <input type="text" className="form-control" placeholder="0.00" value={this.state.totalHoldingAmount} disabled></input>
                    </div>
                </div>
                <div className="form-group">
                    <input type="button" className="btn btn-warning btn-sm" value="Save this holding" onClick={this.saveHoldingBtnOnClick} />
                </div>
            </form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        holdings: state.holdings.holdings
    }
}

export default connect(mapStateToProps, actions)(NewHolding);