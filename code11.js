gdjs.MaintenanceCode = {};
gdjs.MaintenanceCode.GDNavigationUIObjects1= [];
gdjs.MaintenanceCode.GDNavigationUIObjects2= [];
gdjs.MaintenanceCode.GDNavigationUIObjects3= [];
gdjs.MaintenanceCode.GDNavProfileObjects1= [];
gdjs.MaintenanceCode.GDNavProfileObjects2= [];
gdjs.MaintenanceCode.GDNavProfileObjects3= [];
gdjs.MaintenanceCode.GDNavMilestoneObjects1= [];
gdjs.MaintenanceCode.GDNavMilestoneObjects2= [];
gdjs.MaintenanceCode.GDNavMilestoneObjects3= [];
gdjs.MaintenanceCode.GDNavHomeObjects1= [];
gdjs.MaintenanceCode.GDNavHomeObjects2= [];
gdjs.MaintenanceCode.GDNavHomeObjects3= [];
gdjs.MaintenanceCode.GDNavCashoutObjects1= [];
gdjs.MaintenanceCode.GDNavCashoutObjects2= [];
gdjs.MaintenanceCode.GDNavCashoutObjects3= [];
gdjs.MaintenanceCode.GDProcessingObjects1= [];
gdjs.MaintenanceCode.GDProcessingObjects2= [];
gdjs.MaintenanceCode.GDProcessingObjects3= [];
gdjs.MaintenanceCode.GDMaintenanceObjects1= [];
gdjs.MaintenanceCode.GDMaintenanceObjects2= [];
gdjs.MaintenanceCode.GDMaintenanceObjects3= [];

gdjs.MaintenanceCode.conditionTrue_0 = {val:false};
gdjs.MaintenanceCode.condition0IsTrue_0 = {val:false};
gdjs.MaintenanceCode.condition1IsTrue_0 = {val:false};
gdjs.MaintenanceCode.condition2IsTrue_0 = {val:false};


gdjs.MaintenanceCode.eventsList0 = function(runtimeScene) {

{


gdjs.MaintenanceCode.condition0IsTrue_0.val = false;
{
gdjs.MaintenanceCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MaintenanceCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("defaultcameradown").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 500);
}{runtimeScene.getVariables().get("defaultcameraup").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("DefaultCameraReady"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("DisableDrag"), false);
}}

}


{



}


{


gdjs.MaintenanceCode.condition0IsTrue_0.val = false;
gdjs.MaintenanceCode.condition1IsTrue_0.val = false;
{
gdjs.MaintenanceCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.MaintenanceCode.condition0IsTrue_0.val ) {
{
gdjs.MaintenanceCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("DisableDrag"), false);
}}
if (gdjs.MaintenanceCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{


gdjs.MaintenanceCode.condition0IsTrue_0.val = false;
gdjs.MaintenanceCode.condition1IsTrue_0.val = false;
{
gdjs.MaintenanceCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.MaintenanceCode.condition0IsTrue_0.val ) {
{
gdjs.MaintenanceCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("DisableDrag"), false);
}}
if (gdjs.MaintenanceCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown")), "", 0);
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{



}


{


gdjs.MaintenanceCode.condition0IsTrue_0.val = false;
gdjs.MaintenanceCode.condition1IsTrue_0.val = false;
{
gdjs.MaintenanceCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPosUp")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup"));
}if ( gdjs.MaintenanceCode.condition0IsTrue_0.val ) {
{
gdjs.MaintenanceCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("DisableDrag"), false);
}}
if (gdjs.MaintenanceCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


};gdjs.MaintenanceCode.eventsList1 = function(runtimeScene) {

{


gdjs.MaintenanceCode.eventsList0(runtimeScene);
}


{


{
}

}


};

gdjs.MaintenanceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MaintenanceCode.GDNavigationUIObjects1.length = 0;
gdjs.MaintenanceCode.GDNavigationUIObjects2.length = 0;
gdjs.MaintenanceCode.GDNavigationUIObjects3.length = 0;
gdjs.MaintenanceCode.GDNavProfileObjects1.length = 0;
gdjs.MaintenanceCode.GDNavProfileObjects2.length = 0;
gdjs.MaintenanceCode.GDNavProfileObjects3.length = 0;
gdjs.MaintenanceCode.GDNavMilestoneObjects1.length = 0;
gdjs.MaintenanceCode.GDNavMilestoneObjects2.length = 0;
gdjs.MaintenanceCode.GDNavMilestoneObjects3.length = 0;
gdjs.MaintenanceCode.GDNavHomeObjects1.length = 0;
gdjs.MaintenanceCode.GDNavHomeObjects2.length = 0;
gdjs.MaintenanceCode.GDNavHomeObjects3.length = 0;
gdjs.MaintenanceCode.GDNavCashoutObjects1.length = 0;
gdjs.MaintenanceCode.GDNavCashoutObjects2.length = 0;
gdjs.MaintenanceCode.GDNavCashoutObjects3.length = 0;
gdjs.MaintenanceCode.GDProcessingObjects1.length = 0;
gdjs.MaintenanceCode.GDProcessingObjects2.length = 0;
gdjs.MaintenanceCode.GDProcessingObjects3.length = 0;
gdjs.MaintenanceCode.GDMaintenanceObjects1.length = 0;
gdjs.MaintenanceCode.GDMaintenanceObjects2.length = 0;
gdjs.MaintenanceCode.GDMaintenanceObjects3.length = 0;

gdjs.MaintenanceCode.eventsList1(runtimeScene);
return;

}

gdjs['MaintenanceCode'] = gdjs.MaintenanceCode;
