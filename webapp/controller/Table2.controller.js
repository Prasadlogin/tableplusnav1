sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TablePlusNav1.controller.Table2", {

onInit: function(){
		var oTable = this.getView().byId("Table2ID");
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/Objects1.json");
		oTable.setModel(oModel);
		// new sap.ui.model.json.JSONModel("model/Objects.json");
	},
	
	onSearch: function(oEvt){
		var aFilters = [];
		var sQuery = oEvt.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("Productname", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.getView().byId("Table2ID");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},
	onBack: function() {
	 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	 oRouter.navTo("Table1");
	}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TablePlusNav1.view.Table2
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TablePlusNav1.view.Table2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TablePlusNav1.view.Table2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TablePlusNav1.view.Table2
		 */
		//	onExit: function() {
		//
		//	}

	});

});