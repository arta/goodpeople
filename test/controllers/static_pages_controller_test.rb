require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get intro" do
    get :intro
    assert_response :success
  end

  test "should get care" do
    get :care
    assert_response :success
  end

  test "should get caregivers" do
    get :caregivers
    assert_response :success
  end

  test "should get procedure" do
    get :procedure
    assert_response :success
  end

  test "should get servicearea" do
    get :servicearea
    assert_response :success
  end

  test "should get cost" do
    get :cost
    assert_response :success
  end

  test "should get testimonials" do
    get :testimonials
    assert_response :success
  end

  test "should get contactus" do
    get :contactus
    assert_response :success
  end

  test "should get print" do
    get :print
    assert_response :success
  end

end
