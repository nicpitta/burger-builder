import React, { Component } from 'react';

import Auxilary from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate () {
    console.log()
  }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingredientKey => {
        return (
          <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
          </li>
        );
      });

    return (
      <Auxilary>
        <h3>Your Order</h3>
        <p>Your Burger</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout</p>

        <Button
          buttonType="Danger"
          clicked={this.props.purchaseCanceled}>
            Cancel
        </Button>

        <Button1
          buttonType="Success"
          clicked={this.props.purchaseContined}>
            Continue
        </Button>

      </Auxilary>
    );
  };
};

export default OrderSummary;
