Rails.application.routes.draw do
  get 'intro'         => 'static_pages#intro', as: :intro
  get 'type_of_care'  => 'static_pages#type_of_care'
  get 'caregivers'    => 'static_pages#caregivers'
  get 'procedure'     => 'static_pages#procedure'
  get 'servicearea'   => 'static_pages#servicearea'
  get 'cost'          => 'static_pages#cost'
  get 'testimonials'  => 'static_pages#testimonials', as: :testimonials # to specify anchor
  get 'contactus'     => 'static_pages#contactus', as: :contactus
  get 'print'         => 'static_pages#print'

  root 'static_pages#index'
end
