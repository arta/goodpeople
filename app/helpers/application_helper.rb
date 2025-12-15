module ApplicationHelper
  def javascript_google_tag
    return unless ENV['GA_MEASUREMENT_ID']

    content_tag(:script, "",
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=#{ENV['GA_MEASUREMENT_ID']}",
      data: {
        controller: "google-tag",
        # Pass server-side (ENV var, here) value to the client (JS; Stimulus)
        google_tag_measurement_id_value: ENV['GA_MEASUREMENT_ID']
      }
    )
  end

  def javascript_fontawesome_kit_tag
    content_tag(:script, "",
      src: "https://kit.fontawesome.com/a46ffabf68.js",
      crossorigin: "anonymous"
    )
  end
end
