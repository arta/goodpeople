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
      { title: 'Intro', link_action: :intro, partial: 'intro' },
      { title: 'Care', link_action: :type_of_care, partial: 'type_of_care' },
      { title: 'Caregivers', link_action: :caregivers, partial: 'caregivers' },
      { title: 'Procedure', link_action: :procedure, partial: 'procedure' },
      { title: 'Service area', link_action: :servicearea, partial: 'servicearea' },
      { title: 'Cost', link_action: :cost, partial: 'cost' },
      { title: 'Contact us', link_action: :contactus, partial: 'contactus' }
    ]
  end
end
