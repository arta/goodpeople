class StaticPagesController < ApplicationController
  before_action :set_pages_for_print, only: :print

  # The root is routed here
  def index
    render layout: "index"
  end

  def intro
  end

  def type_of_care
  end

  def caregivers
  end

  def procedure
  end

  def servicearea
  end

  def cost
  end

  def testimonials
  end

  def contactus
  end

  def print
    render layout: "print"
  end

  private

  def set_pages_for_print
    @pages_for_print = [
      { title: 'Intro', action: 'intro' },
      { title: 'Care', action: 'type_of_care' },
      { title: 'Caregivers', action: 'caregivers' },
      { title: 'Procedure', action: 'procedure' },
      { title: 'Service area', action: 'servicearea' },
      { title: 'Cost', action: 'cost' },
      { title: 'Contact us', action: 'contactus' }
    ]
  end
end
