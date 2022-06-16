gdjs.NoInternetCode = {};
gdjs.NoInternetCode.GDNavigationUIObjects1= [];
gdjs.NoInternetCode.GDNavigationUIObjects2= [];
gdjs.NoInternetCode.GDNavProfileObjects1= [];
gdjs.NoInternetCode.GDNavProfileObjects2= [];
gdjs.NoInternetCode.GDNavMilestoneObjects1= [];
gdjs.NoInternetCode.GDNavMilestoneObjects2= [];
gdjs.NoInternetCode.GDNavHomeObjects1= [];
gdjs.NoInternetCode.GDNavHomeObjects2= [];
gdjs.NoInternetCode.GDNavCashoutObjects1= [];
gdjs.NoInternetCode.GDNavCashoutObjects2= [];
gdjs.NoInternetCode.GDProcessingObjects1= [];
gdjs.NoInternetCode.GDProcessingObjects2= [];
gdjs.NoInternetCode.GDEarnScorePointsObjects1= [];
gdjs.NoInternetCode.GDEarnScorePointsObjects2= [];
gdjs.NoInternetCode.GDcontentObjects1= [];
gdjs.NoInternetCode.GDcontentObjects2= [];
gdjs.NoInternetCode.GDRefreshObjects1= [];
gdjs.NoInternetCode.GDRefreshObjects2= [];

gdjs.NoInternetCode.conditionTrue_0 = {val:false};
gdjs.NoInternetCode.condition0IsTrue_0 = {val:false};
gdjs.NoInternetCode.condition1IsTrue_0 = {val:false};
gdjs.NoInternetCode.condition2IsTrue_0 = {val:false};
gdjs.NoInternetCode.condition3IsTrue_0 = {val:false};
gdjs.NoInternetCode.conditionTrue_1 = {val:false};
gdjs.NoInternetCode.condition0IsTrue_1 = {val:false};
gdjs.NoInternetCode.condition1IsTrue_1 = {val:false};
gdjs.NoInternetCode.condition2IsTrue_1 = {val:false};
gdjs.NoInternetCode.condition3IsTrue_1 = {val:false};


gdjs.NoInternetCode.eventsList0 = function(runtimeScene) {

{


gdjs.NoInternetCode.condition0IsTrue_0.val = false;
{
gdjs.NoInternetCode.condition0IsTrue_0.val = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.NoInternetCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.NoInternetCode.mapOfGDgdjs_46NoInternetCode_46GDRefreshObjects1Objects = Hashtable.newFrom({"Refresh": gdjs.NoInternetCode.GDRefreshObjects1});
gdjs.NoInternetCode.eventsList1 = function(runtimeScene) {

{


gdjs.NoInternetCode.condition0IsTrue_0.val = false;
{
gdjs.NoInternetCode.condition0IsTrue_0.val = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.NoInternetCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.NoInternetCode.eventsList2 = function(runtimeScene) {

{


gdjs.NoInternetCode.condition0IsTrue_0.val = false;
{
gdjs.NoInternetCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "checkInternet", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.NoInternetCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NoInternetCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Refresh"), gdjs.NoInternetCode.GDRefreshObjects1);

gdjs.NoInternetCode.condition0IsTrue_0.val = false;
gdjs.NoInternetCode.condition1IsTrue_0.val = false;
gdjs.NoInternetCode.condition2IsTrue_0.val = false;
{
gdjs.NoInternetCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NoInternetCode.condition0IsTrue_0.val ) {
{
gdjs.NoInternetCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NoInternetCode.mapOfGDgdjs_46NoInternetCode_46GDRefreshObjects1Objects, runtimeScene, true, false);
}if ( gdjs.NoInternetCode.condition1IsTrue_0.val ) {
{
{gdjs.NoInternetCode.conditionTrue_1 = gdjs.NoInternetCode.condition2IsTrue_0;
gdjs.NoInternetCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13665676);
}
}}
}
if (gdjs.NoInternetCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.NoInternetCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.NoInternetCode.condition0IsTrue_0.val = false;
{
gdjs.NoInternetCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NoInternetCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Refresh"), gdjs.NoInternetCode.GDRefreshObjects1);
{for(var i = 0, len = gdjs.NoInternetCode.GDRefreshObjects1.length ;i < len;++i) {
    gdjs.NoInternetCode.GDRefreshObjects1[i].setOpacity(0);
}
}}

}


};

gdjs.NoInternetCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NoInternetCode.GDNavigationUIObjects1.length = 0;
gdjs.NoInternetCode.GDNavigationUIObjects2.length = 0;
gdjs.NoInternetCode.GDNavProfileObjects1.length = 0;
gdjs.NoInternetCode.GDNavProfileObjects2.length = 0;
gdjs.NoInternetCode.GDNavMilestoneObjects1.length = 0;
gdjs.NoInternetCode.GDNavMilestoneObjects2.length = 0;
gdjs.NoInternetCode.GDNavHomeObjects1.length = 0;
gdjs.NoInternetCode.GDNavHomeObjects2.length = 0;
gdjs.NoInternetCode.GDNavCashoutObjects1.length = 0;
gdjs.NoInternetCode.GDNavCashoutObjects2.length = 0;
gdjs.NoInternetCode.GDProcessingObjects1.length = 0;
gdjs.NoInternetCode.GDProcessingObjects2.length = 0;
gdjs.NoInternetCode.GDEarnScorePointsObjects1.length = 0;
gdjs.NoInternetCode.GDEarnScorePointsObjects2.length = 0;
gdjs.NoInternetCode.GDcontentObjects1.length = 0;
gdjs.NoInternetCode.GDcontentObjects2.length = 0;
gdjs.NoInternetCode.GDRefreshObjects1.length = 0;
gdjs.NoInternetCode.GDRefreshObjects2.length = 0;

gdjs.NoInternetCode.eventsList2(runtimeScene);
return;

}

gdjs['NoInternetCode'] = gdjs.NoInternetCode;
