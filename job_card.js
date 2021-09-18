frappe.ui.form.on('Job Card', {
    jewellery_weight:function(frm) {
	    if(frm.doc.operation=="Gillete/ Rhodium"){
	        frm.set_value("total_price",frm.doc.jewellery_weight * frm.doc.rate_per_gram);
	    }
	},
	rate_per_gram:function(frm) {
	    if(frm.doc.operation=="Gillete/ Rhodium"){
	        frm.set_value("total_price",frm.doc.jewellery_weight * frm.doc.rate_per_gram);
	    }
	},
	no_of_shots:function(frm) {
	    if(frm.doc.operation=="Laser"){
	        frm.set_value("total_price",frm.doc.no_of_shots * frm.doc.price_per_shot);
	    }
	},
	price_per_shot:function(frm) {
	    if(frm.doc.operation=="Laser"){
	        frm.set_value("total_price",frm.doc.no_of_shots * frm.doc.price_per_shot);
	    }
	}
})
