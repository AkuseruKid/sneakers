
import '../css/app.scss';

// app.js

const $ = require('jquery');

require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});


