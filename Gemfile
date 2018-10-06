source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'
gem 'rails', '5.2.1'

gem 'pg'
gem 'puma'

gem 'sass-rails'
gem 'uglifier'
# gem 'therubyracer', platforms: :ruby
# gem 'mini_racer', platforms: :ruby
gem 'coffee-rails'
# gem 'turbolinks', '~> 5'
gem 'jbuilder'
gem 'jquery-rails'
gem 'mini_magick'
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  # gem 'web-console', '>= 3.5.1'
  gem 'listen', '~> 3.1.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.1'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'awesome_print', '~> 1.8'
  gem 'meta_request'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'
end

gem 'foundation-rails'#, '6.2.1.0'
gem 'haml-rails'
