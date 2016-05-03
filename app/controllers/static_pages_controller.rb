class StaticPagesController < ApplicationController

	def type_of_care
		@body_id = 'care'
	end

	def caregivers
		@body_id = 'caregivers'
	end

	def contactus
		@body_id = 'contactus'
	end

	def cost
		@body_id = 'cost'
	end

	# The root is routed here
	def index
		render :layout => false
	end

	def intro
		@body_id = 'intro'
	end

	def print
		@body_id = 'print'
		render :layout => false
	end

	def procedure
		@body_id = 'procedure'
	end

	def servicearea
		@body_id = 'servicearea'
	end

	def testimonials
		@body_id = 'testimonials'
	end

end
