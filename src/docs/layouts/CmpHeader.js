import React from 'react';
import HeaderSlider from '../components/Header/HeaderSlider';
import HeaderService from '../components/Header/HeaderService';

const CmpHeader = () => {

 const services = [
  {
    'title': '24/7 SUPPORT',
    'desc': 'Support every time',
    'icon': 'fas fa-headphones'
  },
  {
    'title': 'ACCEPT PAYMENT',
    'desc': 'Visa, Paypal, Master',
    'icon': 'fas fa-credit-card'
  },
  {
    'title': 'SECURED PAYMENT',
    'desc': '100% secured',
    'icon': 'fas fa-shield-alt'
  },
  {
    'title': 'FREE SHIPPING',
    'desc': 'order over ₹999',
    'icon': 'fas fa-paper-plane'
  },
  {
    'title': '30 DAYS RETURN',
    'desc': '30 days guarantee',
    'icon': 'fas fa-calendar'
  }
 ]

  return (
    <>
      <HeaderSlider />
      <HeaderService services={services} />
    </>
  );
}

export default CmpHeader;