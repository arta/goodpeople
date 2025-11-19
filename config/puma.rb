# 2025-11-19: >>> Start :: pasted Heroku's Rails 8.1 puma config (from thehouse)
# with modifications for the development environment.

# Thread per process count allows context switching on IO-bound tasks for better CPU utilization.
threads_count = ENV.fetch('RAILS_MAX_THREADS') { 3 }
threads(threads_count, threads_count)

# Processes count. Set to 0 in development to prevent issues with gems like better_errors.
# In production, allows better CPU utilization when executing Ruby code.
# Recommended to always run in at least one process so `rack-timeout` RACK_TERM_ON_TIMEOUT=1 can be used
# https://devcenter.heroku.com/articles/h12-request-timeout-in-ruby-mri
workers(ENV.fetch('RAILS_ENV') == 'development' ? 0 : ENV.fetch('WEB_CONCURRENCY') { 2 })

# Support IPv6 by binding to host `::` in production instead of `0.0.0.0` and `::1` instead of `127.0.0.1` in development.
host = ENV.fetch("RAILS_ENV") { "development" } == "production" ? "::" : "::1"

# PORT environment variable is set by Heroku in production.
port(ENV.fetch("PORT") { 3000 }, host)

# Allow Puma to be restarted by the `rails restart` command locally.
plugin(:tmp_restart)

# 2025-10-25: <<< End :: pasted Heroku's Rails 8.1 puma config (& modified)
