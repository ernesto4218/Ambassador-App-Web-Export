gdjs.TestingCode = {};
gdjs.TestingCode.GDNavigationUIObjects1= [];
gdjs.TestingCode.GDNavigationUIObjects2= [];
gdjs.TestingCode.GDNavProfileObjects1= [];
gdjs.TestingCode.GDNavProfileObjects2= [];
gdjs.TestingCode.GDNavMilestoneObjects1= [];
gdjs.TestingCode.GDNavMilestoneObjects2= [];
gdjs.TestingCode.GDNavHomeObjects1= [];
gdjs.TestingCode.GDNavHomeObjects2= [];
gdjs.TestingCode.GDNavCashoutObjects1= [];
gdjs.TestingCode.GDNavCashoutObjects2= [];
gdjs.TestingCode.GDProcessingObjects1= [];
gdjs.TestingCode.GDProcessingObjects2= [];
gdjs.TestingCode.GDtext1Objects1= [];
gdjs.TestingCode.GDtext1Objects2= [];
gdjs.TestingCode.GDtext12Objects1= [];
gdjs.TestingCode.GDtext12Objects2= [];
gdjs.TestingCode.GDButtonObjects1= [];
gdjs.TestingCode.GDButtonObjects2= [];
gdjs.TestingCode.GDButton2Objects1= [];
gdjs.TestingCode.GDButton2Objects2= [];
gdjs.TestingCode.GDButton3Objects1= [];
gdjs.TestingCode.GDButton3Objects2= [];

gdjs.TestingCode.conditionTrue_0 = {val:false};
gdjs.TestingCode.condition0IsTrue_0 = {val:false};
gdjs.TestingCode.condition1IsTrue_0 = {val:false};
gdjs.TestingCode.condition2IsTrue_0 = {val:false};
gdjs.TestingCode.conditionTrue_1 = {val:false};
gdjs.TestingCode.condition0IsTrue_1 = {val:false};
gdjs.TestingCode.condition1IsTrue_1 = {val:false};
gdjs.TestingCode.condition2IsTrue_1 = {val:false};


gdjs.TestingCode.userFunc0xad0df8 = function(runtimeScene) {
"use strict";
var time_var = runtimeScene.getVariables().get("time_var");
var date_var = runtimeScene.getVariables().get("date_var");
var month_var = runtimeScene.getVariables().get("month_var");
var year_var = runtimeScene.getVariables().get("year_var");

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();


if (sec < 10) {
    time_var.setString(hour+":"+min+ ":0"+sec);
}else if (min < 10) {
    time_var.setString(hour+":0"+min+ ":"+sec);
}else {
    time_var.setString(hour+":"+min+ ":"+sec);
}


var date = d.getDate();


var day = d.getDay();
    var dayarr =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day=dayarr[day];
date_var.setString(date+ " " +day);

var month = d.getMonth();
    var montharr =["January","February","March","April","May","June","July","August","September","October","November","December"];
    month=montharr[month];
month_var.setString(month);

var year = d.getFullYear();

year_var.setString(year);




};
gdjs.TestingCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("text1"), gdjs.TestingCode.GDtext1Objects1);
gdjs.copyArray(runtimeScene.getObjects("text12"), gdjs.TestingCode.GDtext12Objects1);
{for(var i = 0, len = gdjs.TestingCode.GDtext12Objects1.length ;i < len;++i) {
    gdjs.TestingCode.GDtext12Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("googlesign")));
}
}{for(var i = 0, len = gdjs.TestingCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.TestingCode.GDtext1Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("signinstate")));
}
}}

}


{



}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13476316);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.auth.userManagement.dangerous.changePassword("test2@gmail.com", "Feb32003", "Ernesto4218", false, runtimeScene.getVariables().get("EditPassState"));
}}

}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13477972);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.auth.signInWithProvider("google", runtimeScene.getVariables().get("googlesign"));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestingCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.TestingCode.GDButton2Objects1);
{for(var i = 0, len = gdjs.TestingCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.TestingCode.GDButtonObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.TestingCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.TestingCode.GDButton2Objects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestingCode.GDButtonObjects1);

gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestingCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.TestingCode.GDButtonObjects1[i].getX() <= -(164) ) {
        gdjs.TestingCode.condition0IsTrue_0.val = true;
        gdjs.TestingCode.GDButtonObjects1[k] = gdjs.TestingCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.TestingCode.GDButtonObjects1.length = k;}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13479508);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestingCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.TestingCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.TestingCode.GDButtonObjects1[i].setX(720);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.TestingCode.GDButton2Objects1);

gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestingCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.TestingCode.GDButton2Objects1[i].getX() <= -(164) ) {
        gdjs.TestingCode.condition0IsTrue_0.val = true;
        gdjs.TestingCode.GDButton2Objects1[k] = gdjs.TestingCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.TestingCode.GDButton2Objects1.length = k;}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13475820);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestingCode.GDButton2Objects1 */
{for(var i = 0, len = gdjs.TestingCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.TestingCode.GDButton2Objects1[i].setX(720);
}
}}

}


{



}


{


gdjs.TestingCode.userFunc0xad0df8(runtimeScene);

}


};

gdjs.TestingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestingCode.GDNavigationUIObjects1.length = 0;
gdjs.TestingCode.GDNavigationUIObjects2.length = 0;
gdjs.TestingCode.GDNavProfileObjects1.length = 0;
gdjs.TestingCode.GDNavProfileObjects2.length = 0;
gdjs.TestingCode.GDNavMilestoneObjects1.length = 0;
gdjs.TestingCode.GDNavMilestoneObjects2.length = 0;
gdjs.TestingCode.GDNavHomeObjects1.length = 0;
gdjs.TestingCode.GDNavHomeObjects2.length = 0;
gdjs.TestingCode.GDNavCashoutObjects1.length = 0;
gdjs.TestingCode.GDNavCashoutObjects2.length = 0;
gdjs.TestingCode.GDProcessingObjects1.length = 0;
gdjs.TestingCode.GDProcessingObjects2.length = 0;
gdjs.TestingCode.GDtext1Objects1.length = 0;
gdjs.TestingCode.GDtext1Objects2.length = 0;
gdjs.TestingCode.GDtext12Objects1.length = 0;
gdjs.TestingCode.GDtext12Objects2.length = 0;
gdjs.TestingCode.GDButtonObjects1.length = 0;
gdjs.TestingCode.GDButtonObjects2.length = 0;
gdjs.TestingCode.GDButton2Objects1.length = 0;
gdjs.TestingCode.GDButton2Objects2.length = 0;
gdjs.TestingCode.GDButton3Objects1.length = 0;
gdjs.TestingCode.GDButton3Objects2.length = 0;

gdjs.TestingCode.eventsList0(runtimeScene);
return;

}

gdjs['TestingCode'] = gdjs.TestingCode;
