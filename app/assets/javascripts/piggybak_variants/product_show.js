var piggybak_variants = {
	getTheMagicId: function() {
		var selected_key = $('.variant_options select').val();
		if(variant_map[selected_key]) {
			$('.variant_options form').show();
			$('#sellable_id').val(selected_key);
			$('#variant_price span').html(variant_map[selected_key].price);
			$('span[itemprop="sku"]').html(variant_map[selected_key].sku);
		} else { 
			$('.variant_options form').hide();
			$('.unavailable').show();
		}
	}
	
}

$(function() {
	$('.variant_options input[type=radio]').click(function() { piggybak_variants.toggleVariantForm(); });
	$('.variant_options select').change(function() { piggybak_variants.getTheMagicId(); });
	piggybak_variants.getTheMagicId();
});

