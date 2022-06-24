source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

gem 'rails', '~> 6.1', '>= 6.1.1'

gem 'pg'
gem 'puma'
gem 'sassc-rails'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 5.2', '>= 5.2.1'
# gem 'turbolinks', '~> 5'
# 1-22-20: Foundation requires jquery, so .. keep JQuery for now
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
gem 'mini_magick'
# 6-24-22: upon Ruby bump up to 3.1.2, '% rails s' required net-smtp, so:
gem 'net-smtp'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '~> 1.5', '>= 1.5.1', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  # gem 'web-console', '>= 3.5.1'
  gem 'listen', '~> 3.4', '>= 3.4.1'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.1'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'awesome_print', '~> 1.8'
  # gem 'meta_request' #1-22-21: https://github.com/dejan/rails_panel/issues/178
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 3.34'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

gem 'foundation-rails'
# gem 'autoprefixer-rails'
gem 'haml-rails'
