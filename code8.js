gdjs.TasksCode = {};
gdjs.TasksCode.GDNavigationUIObjects1= [];
gdjs.TasksCode.GDNavigationUIObjects2= [];
gdjs.TasksCode.GDNavProfileObjects1= [];
gdjs.TasksCode.GDNavProfileObjects2= [];
gdjs.TasksCode.GDNavMilestoneObjects1= [];
gdjs.TasksCode.GDNavMilestoneObjects2= [];
gdjs.TasksCode.GDNavHomeObjects1= [];
gdjs.TasksCode.GDNavHomeObjects2= [];
gdjs.TasksCode.GDNavCashoutObjects1= [];
gdjs.TasksCode.GDNavCashoutObjects2= [];
gdjs.TasksCode.GDProcessingObjects1= [];
gdjs.TasksCode.GDProcessingObjects2= [];
gdjs.TasksCode.GDTask1Objects1= [];
gdjs.TasksCode.GDTask1Objects2= [];
gdjs.TasksCode.GDTask2Objects1= [];
gdjs.TasksCode.GDTask2Objects2= [];
gdjs.TasksCode.GDTask3Objects1= [];
gdjs.TasksCode.GDTask3Objects2= [];
gdjs.TasksCode.GDnoTaskObjects1= [];
gdjs.TasksCode.GDnoTaskObjects2= [];
gdjs.TasksCode.GDBackObjects1= [];
gdjs.TasksCode.GDBackObjects2= [];

gdjs.TasksCode.conditionTrue_0 = {val:false};
gdjs.TasksCode.condition0IsTrue_0 = {val:false};
gdjs.TasksCode.condition1IsTrue_0 = {val:false};
gdjs.TasksCode.condition2IsTrue_0 = {val:false};
gdjs.TasksCode.condition3IsTrue_0 = {val:false};
gdjs.TasksCode.conditionTrue_1 = {val:false};
gdjs.TasksCode.condition0IsTrue_1 = {val:false};
gdjs.TasksCode.condition1IsTrue_1 = {val:false};
gdjs.TasksCode.condition2IsTrue_1 = {val:false};
gdjs.TasksCode.condition3IsTrue_1 = {val:false};


gdjs.TasksCode.mapOfGDgdjs_46TasksCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.TasksCode.GDBackObjects1});
gdjs.TasksCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TasksCode.GDBackObjects1);

gdjs.TasksCode.condition0IsTrue_0.val = false;
gdjs.TasksCode.condition1IsTrue_0.val = false;
gdjs.TasksCode.condition2IsTrue_0.val = false;
{
gdjs.TasksCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TasksCode.mapOfGDgdjs_46TasksCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TasksCode.condition0IsTrue_0.val ) {
{
gdjs.TasksCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TasksCode.condition1IsTrue_0.val ) {
{
{gdjs.TasksCode.conditionTrue_1 = gdjs.TasksCode.condition2IsTrue_0;
gdjs.TasksCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13760364);
}
}}
}
if (gdjs.TasksCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}

}


{


gdjs.TasksCode.condition0IsTrue_0.val = false;
{
gdjs.TasksCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TasksCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TasksCode.GDBackObjects1);
{for(var i = 0, len = gdjs.TasksCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.TasksCode.GDBackObjects1[i].setOpacity(0);
}
}}

}


{



}


{


gdjs.TasksCode.condition0IsTrue_0.val = false;
gdjs.TasksCode.condition1IsTrue_0.val = false;
{
gdjs.TasksCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "checkInternet", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.TasksCode.condition0IsTrue_0.val ) {
{
gdjs.TasksCode.condition1IsTrue_0.val = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}
if (gdjs.TasksCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "NoInternet");
}}

}


{


{
}

}


};

gdjs.TasksCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TasksCode.GDNavigationUIObjects1.length = 0;
gdjs.TasksCode.GDNavigationUIObjects2.length = 0;
gdjs.TasksCode.GDNavProfileObjects1.length = 0;
gdjs.TasksCode.GDNavProfileObjects2.length = 0;
gdjs.TasksCode.GDNavMilestoneObjects1.length = 0;
gdjs.TasksCode.GDNavMilestoneObjects2.length = 0;
gdjs.TasksCode.GDNavHomeObjects1.length = 0;
gdjs.TasksCode.GDNavHomeObjects2.length = 0;
gdjs.TasksCode.GDNavCashoutObjects1.length = 0;
gdjs.TasksCode.GDNavCashoutObjects2.length = 0;
gdjs.TasksCode.GDProcessingObjects1.length = 0;
gdjs.TasksCode.GDProcessingObjects2.length = 0;
gdjs.TasksCode.GDTask1Objects1.length = 0;
gdjs.TasksCode.GDTask1Objects2.length = 0;
gdjs.TasksCode.GDTask2Objects1.length = 0;
gdjs.TasksCode.GDTask2Objects2.length = 0;
gdjs.TasksCode.GDTask3Objects1.length = 0;
gdjs.TasksCode.GDTask3Objects2.length = 0;
gdjs.TasksCode.GDnoTaskObjects1.length = 0;
gdjs.TasksCode.GDnoTaskObjects2.length = 0;
gdjs.TasksCode.GDBackObjects1.length = 0;
gdjs.TasksCode.GDBackObjects2.length = 0;

gdjs.TasksCode.eventsList0(runtimeScene);
return;

}

gdjs['TasksCode'] = gdjs.TasksCode;
