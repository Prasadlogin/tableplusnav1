sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TablePlusNav1.controller.Table1", {

onInit : function() {
	var oTable = this.getView().byId("Table1ID");
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.loadData("model/Objects1.json");
	oTable.setModel(oModel);
	var a;
},

onPress: function(){
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	oRouter.navTo("Table2");
}


		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TablePlusNav1.view.Table1
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TablePlusNav1.view.Table1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TablePlusNav1.view.Table1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TablePlusNav1.view.Table1
		 */
		//	onExit: function() {
		//
		//	}

	});

});