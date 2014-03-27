module PiggybakVariantsHelper
  def variant_cart_form(object, options = {:controls => 'radio_buttons'})
    render "piggybak_variants/cart/#{options[:controls]}_form", :object => object
  end

  def options_for_klass(klass)
    options = ::PiggybakVariants::OptionConfiguration.where(klass: klass).collect { |oc| oc.option }
  end

  def variant_map(object)
    map = {}
    object.variants.available.each_with_index do |variant, i|
      map[variant.piggybak_sellable.id] = { :title => variant.title, :id => variant.piggybak_sellable.id, :sku => variant.piggybak_sellable.sku, :price => number_to_currency(variant.piggybak_sellable.price, :unit => "€") }
    end
    map.to_json
  end
end
