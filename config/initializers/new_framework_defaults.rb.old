# Be sure to restart your server when you modify this file.
#
# This file contains migration options to ease your Rails 5.0 upgrade.
#
# Once upgraded flip defaults one by one to migrate to the new default.
#
# Read the Guide for Upgrading Ruby on Rails for more info on each option.

# Enable per-form CSRF tokens. Previous versions had false.
Rails.application.config.action_controller.per_form_csrf_tokens = true

# Enable origin-checking CSRF mitigation. Previous versions had false.
Rails.application.config.action_controller.forgery_protection_origin_check = true

# Make Ruby 2.4 preserve the timezone of the receiver when calling `to_time`.
# Previous versions had false.
ActiveSupport.to_time_preserves_timezone = true

# Require `belongs_to` associations by default. Previous versions had false.
Rails.application.config.active_record.belongs_to_required_by_default = true

# Do not halt callback chains when a callback returns false. Previous versions had true.
# 10-5-18: upgrading to Rails 5.2
# thehouse $ rails s
# /Users/arta/sites/thehouse/config/initializers/new_framework_defaults.rb:23: i
# n `<main>': undefined method `halt_callback_chains_on_return_false=' for Activ
# eSupport:Module (NoMethodError)
# .. so, commenting it out
# (also: https://github.com/rails/rails/issues/32653#issuecomment-383063063)
# ActiveSupport.halt_callback_chains_on_return_false = false
