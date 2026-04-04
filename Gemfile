source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.4.2"

gem "rails", "~> 8.1.0"

gem "pg"
gem "puma"

gem "bootsnap", require: false
gem "haml-rails"
gem "importmap-rails", "~> 2.0"
gem "jbuilder"
gem "mini_magick"
gem "mutex_m", "~> 0.3.0"
gem "net-imap", require: false
gem "net-pop", require: false
gem "net-smtp", require: false
gem "propshaft"
gem "stimulus-rails"
gem "turbo-rails"
gem "thruster", require: false

group :development, :test do
  gem "brakeman", require: false
  gem "debug", platforms: :mri
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "awesome_print", "~> 1.8"
  gem "better_errors"
  gem "binding_of_caller"
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
