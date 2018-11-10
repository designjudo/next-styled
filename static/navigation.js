import { faFolderOpen, faHome, faMedkit, faEdit, faDollarSign, faGem } from 'fa5-pro-light'
import Logo from '../components/Logo'

const navigation = {
  applogolink: {
    label: 'Connect',
    href: '/',
    applogo: Logo
  },
  usernavlinks: [
    { label: 'Settings', href: '/settings' },
    { label: 'Feedback', href: '/feedback' }
  ],
  sidenavlinks: [
    { icon: faHome, label: 'Home', href: '/' },
    { icon: faFolderOpen, label: 'Appeals', href: '/appeals' },
    { icon: faDollarSign, label: 'Billing', href: '/billing' },
    { icon: faGem, label: 'Claims', href: '/claims' },
    { icon: faMedkit, label: 'Benefits', href: '/benefits' },
    { icon: faEdit, label: 'Enrollment', href: '/enrollment' }
  ],
  connectnavlinks: [{ label: 'Connect 1' }, { label: 'Connect 2' }, { label: 'Connect 3' }]
}

export default navigation

// {
//   type: 'nested',
//   icon: faDollarSign,
//   label: 'Payments',
//   id: 'payments',
//   nestedlinks: [
//     { label: 'Invoices', href: '/payments/invoices' },
//     { label: 'Transactions', href: '/payments/transactions' },
//     { label: 'Payments', href: '/payments/payments' },
//     { label: 'Communications', href: '/payments/communications' }
//   ]
// },
