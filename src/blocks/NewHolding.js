import React, {Component} from 'react';

class NewHolding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalHoldingAmount: 0.00,
            quantity: 0,
            sharePrice: 0.00,
            brokerageFee: 0.00
        }
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
    render() {
        return (
            <div className="newHolding">
            <form className="newHoldingForm">
                <div className="form-group">
                    <label className="col-sm-3 form-label">Code:</label>
                    <input type="text" className="form-control" placeholder="TLS"></input>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 form-label">Traded on:</label>
                    <input type="text" className="form-control" placeholder="Date"></input>
                </div>
                <div className="row">
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
            </form>
        </div>
        );
    }
}

export default NewHolding;