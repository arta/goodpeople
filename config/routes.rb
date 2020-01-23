Rails.application.routes.draw do
  get 'intro',        to: 'static_pages#intro', as: :intro
  get 'type_of_care', to: 'static_pages#type_of_care'
  get 'caregivers',   to: 'static_pages#caregivers'
  get 'procedure',    to: 'static_pages#procedure'
  get 'servicearea',  to: 'static_pages#servicearea'
  get 'cost',         to: 'static_pages#cost'
  get 'testimonials', to: 'static_pages#testimonials', as: :testimonials # to specify anchor
  get 'contactus',    to: 'static_pages#contactus', as: :contactus
  get 'print',        to: 'static_pages#print'

  root 'static_pages#index'
end
