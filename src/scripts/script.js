'use strict';

const header = document.querySelector('.header');
const headerToggler = header.querySelector('.header__toggler');

headerToggler.addEventListener('click', function () {
  header.classList.toggle('header--open');
});
