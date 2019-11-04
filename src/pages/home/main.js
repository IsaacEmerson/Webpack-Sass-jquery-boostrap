import $ from 'jquery';
import '../../sass/main.scss';
import { getUrlParam } from '../../js/utils';
import 'bootstrap';

$(document).ready(() => {
  console.log(getUrlParam('year'));
});

const $dropdown = $('.dropdown');
const $dropdownToggle = $('.dropdown-toggle');
const $dropdownMenu = $('.dropdown-menu');
const $navLink = $('.nav-link');
const showClass = 'show';

$(window).on('load resize', function() {
  if (this.matchMedia('(min-width: 768px)').matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr('aria-expanded', 'true');
        $this.find($dropdownMenu).addClass(showClass);
        $this.find($navLink).addClass('active-menu');
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr('aria-expanded', 'false');
        $this.find($dropdownMenu).removeClass(showClass);
        $this.find($navLink).removeClass('active-menu');
      }
    );
  } else {
    $dropdown.off('mouseenter mouseleave');
  }
});
