import React, {Fragment} from 'react';
import CheckoutSteps from './CheckoutSteps';
import { useSelector } from 'react-redux';
import MetaData from '../layout/MetaData';
import "./ConfirmOrder.css";
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';


const ConfirmOrder = () => {

  const { deliveryInfo, cartItems } = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.user)
  return (
    <div>ConfirmOrder</div>
  )
}

export default ConfirmOrder