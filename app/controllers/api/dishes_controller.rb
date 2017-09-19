class Api::DishesController < ApplicationController
  before_action :set_api_dish, only: [:show, :update, :destroy]

  # GET /api/dishes
  # GET /api/dishes.json
  def index
    @api_dishes = Dish.all
  end

  # GET /api/dishes/1
  # GET /api/dishes/1.json
  def show
  end

  # POST /api/dishes
  # POST /api/dishes.json
  def create
    @api_dish = Dish.new(api_dish_params)

    if @api_dish.save
      render :show, status: :created, location: @api_dish
    else
      render json: @api_dish.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/dishes/1
  # PATCH/PUT /api/dishes/1.json
  def update
    if @api_dish.update(api_dish_params)
      render :show, status: :ok, location: @api_dish
    else
      render json: @api_dish.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/dishes/1
  # DELETE /api/dishes/1.json
  def destroy
    @api_dish.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_dish
      @api_dish = Dish.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_dish_params
      params.require(:dish).permit(:name, :description, :price)
    end
end
