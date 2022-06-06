gdjs.InviteCode = {};
gdjs.InviteCode.GDNavigationUIObjects1= [];
gdjs.InviteCode.GDNavigationUIObjects2= [];
gdjs.InviteCode.GDNavigationUIObjects3= [];
gdjs.InviteCode.GDNavProfileObjects1= [];
gdjs.InviteCode.GDNavProfileObjects2= [];
gdjs.InviteCode.GDNavProfileObjects3= [];
gdjs.InviteCode.GDNavMilestoneObjects1= [];
gdjs.InviteCode.GDNavMilestoneObjects2= [];
gdjs.InviteCode.GDNavMilestoneObjects3= [];
gdjs.InviteCode.GDNavHomeObjects1= [];
gdjs.InviteCode.GDNavHomeObjects2= [];
gdjs.InviteCode.GDNavHomeObjects3= [];
gdjs.InviteCode.GDNavCashoutObjects1= [];
gdjs.InviteCode.GDNavCashoutObjects2= [];
gdjs.InviteCode.GDNavCashoutObjects3= [];
gdjs.InviteCode.GDProcessingObjects1= [];
gdjs.InviteCode.GDProcessingObjects2= [];
gdjs.InviteCode.GDProcessingObjects3= [];
gdjs.InviteCode.GDContentObjects1= [];
gdjs.InviteCode.GDContentObjects2= [];
gdjs.InviteCode.GDContentObjects3= [];
gdjs.InviteCode.GDReferralCodeTXTObjects1= [];
gdjs.InviteCode.GDReferralCodeTXTObjects2= [];
gdjs.InviteCode.GDReferralCodeTXTObjects3= [];
gdjs.InviteCode.GDBackObjects1= [];
gdjs.InviteCode.GDBackObjects2= [];
gdjs.InviteCode.GDBackObjects3= [];

gdjs.InviteCode.conditionTrue_0 = {val:false};
gdjs.InviteCode.condition0IsTrue_0 = {val:false};
gdjs.InviteCode.condition1IsTrue_0 = {val:false};
gdjs.InviteCode.condition2IsTrue_0 = {val:false};
gdjs.InviteCode.condition3IsTrue_0 = {val:false};
gdjs.InviteCode.conditionTrue_1 = {val:false};
gdjs.InviteCode.condition0IsTrue_1 = {val:false};
gdjs.InviteCode.condition1IsTrue_1 = {val:false};
gdjs.InviteCode.condition2IsTrue_1 = {val:false};
gdjs.InviteCode.condition3IsTrue_1 = {val:false};


gdjs.InviteCode.eventsList0 = function(runtimeScene) {

{


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("defaultcameradown").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 200);
}{runtimeScene.getVariables().get("defaultcameraup").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("DefaultCameraReady"), true);
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("PerformTaskInfo"), false);
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("PerformTaskInfo"), false);
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown")), "", 0);
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPosUp")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup"));
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


};gdjs.InviteCode.mapOfGDgdjs_46InviteCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.InviteCode.GDBackObjects1});
gdjs.InviteCode.eventsList1 = function(runtimeScene) {

{


gdjs.InviteCode.eventsList0(runtimeScene);
}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.InviteCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReferralCodeTXT"), gdjs.InviteCode.GDReferralCodeTXTObjects1);
{for(var i = 0, len = gdjs.InviteCode.GDReferralCodeTXTObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDReferralCodeTXTObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ProfileInfo").getChild("ReferralCode")));
}
}{for(var i = 0, len = gdjs.InviteCode.GDReferralCodeTXTObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDReferralCodeTXTObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InviteCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDBackObjects1[i].setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.InviteCode.GDBackObjects1);

gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
gdjs.InviteCode.condition2IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InviteCode.mapOfGDgdjs_46InviteCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InviteCode.condition1IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition2IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12802892);
}
}}
}
if (gdjs.InviteCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "checkInternet", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "NoInternet");
}}

}


};

gdjs.InviteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InviteCode.GDNavigationUIObjects1.length = 0;
gdjs.InviteCode.GDNavigationUIObjects2.length = 0;
gdjs.InviteCode.GDNavigationUIObjects3.length = 0;
gdjs.InviteCode.GDNavProfileObjects1.length = 0;
gdjs.InviteCode.GDNavProfileObjects2.length = 0;
gdjs.InviteCode.GDNavProfileObjects3.length = 0;
gdjs.InviteCode.GDNavMilestoneObjects1.length = 0;
gdjs.InviteCode.GDNavMilestoneObjects2.length = 0;
gdjs.InviteCode.GDNavMilestoneObjects3.length = 0;
gdjs.InviteCode.GDNavHomeObjects1.length = 0;
gdjs.InviteCode.GDNavHomeObjects2.length = 0;
gdjs.InviteCode.GDNavHomeObjects3.length = 0;
gdjs.InviteCode.GDNavCashoutObjects1.length = 0;
gdjs.InviteCode.GDNavCashoutObjects2.length = 0;
gdjs.InviteCode.GDNavCashoutObjects3.length = 0;
gdjs.InviteCode.GDProcessingObjects1.length = 0;
gdjs.InviteCode.GDProcessingObjects2.length = 0;
gdjs.InviteCode.GDProcessingObjects3.length = 0;
gdjs.InviteCode.GDContentObjects1.length = 0;
gdjs.InviteCode.GDContentObjects2.length = 0;
gdjs.InviteCode.GDContentObjects3.length = 0;
gdjs.InviteCode.GDReferralCodeTXTObjects1.length = 0;
gdjs.InviteCode.GDReferralCodeTXTObjects2.length = 0;
gdjs.InviteCode.GDReferralCodeTXTObjects3.length = 0;
gdjs.InviteCode.GDBackObjects1.length = 0;
gdjs.InviteCode.GDBackObjects2.length = 0;
gdjs.InviteCode.GDBackObjects3.length = 0;

gdjs.InviteCode.eventsList1(runtimeScene);
return;

}

gdjs['InviteCode'] = gdjs.InviteCode;
