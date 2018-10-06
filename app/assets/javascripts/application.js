// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

//= require jquery
//= require rails-ujs
//= require activestorage
//= require foundation
//= require_tree .

// 6-21-17: tried to simplify by using the line from github docs:
// $(document).foundation(); // but that screws up orbit (hm, code seems ok ..)
// 4-27-16: $ rails g foundation:install
$(function(){ $(document).foundation(); });
// ... and the above `require foundation`
