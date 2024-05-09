source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

gem 'rails', '~> 7.0.0'

gem 'pg'
gem 'puma'

gem 'bootsnap', '~> 1.5', '>= 1.5.1', require: false
gem 'foundation-rails'
gem 'haml-rails'
gem 'jbuilder', '~> 2.7'
gem 'jquery-rails'
gem 'mini_magick'
gem 'net-imap', require: false
gem 'net-pop', require: false
gem 'net-smtp', require: false
gem 'sassc-rails'
gem 'webpacker', '~> 5.2', '>= 5.2.1'

group :development do
  gem 'awesome_print', '~> 1.8'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'listen', '~> 3.4', '>= 3.4.1'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.1'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :test do
  gem 'capybara', '~> 3.34'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end


# gem 'autoprefixer-rails'
# gem 'image_processing', '~> 1.2'
# gem 'turbolinks'


### Development:

# gem 'meta_request' #1-22-21: https://github.com/dejan/rails_panel/issues/178
# gem 'web-console', '>= 3.5.1'


### Gem Notes:

# 6-24-22: gem net-smtp, -pop, -imap, for Ruby 3.1.2 (for heroku-22 stack),
# see debbugging.txt

# 1-22-20: Foundation requires jquery, so .. keep JQuery for now
