/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM PropTypes */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/no-multi-comp": "off" */
/* eslint "no-alert": "off" */


// eslint-disable-next-line react/prefer-stateless-function

import ItemList from './ItemList.jsx';

const element = <ItemList />;

ReactDOM.render(element, document.getElementById('contents'));
