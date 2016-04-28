// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
// 5/12/15: http://blog.steveklabnik.com/posts/2013-06-25-removing-turbolinks-from-rails-4
// require turbolinks (removed the leading `=`)
//= require_tree .

// 4-27-16: $ rails g foundation:install
$(function(){ $(document).foundation(); });
// ... and the above `require foundation`
