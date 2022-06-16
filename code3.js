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
gdjs.TestingCode.GDEarnScorePointsObjects1= [];
gdjs.TestingCode.GDEarnScorePointsObjects2= [];
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
gdjs.TestingCode.GDBlockObjects1= [];
gdjs.TestingCode.GDBlockObjects2= [];
gdjs.TestingCode.GDBlock2Objects1= [];
gdjs.TestingCode.GDBlock2Objects2= [];
gdjs.TestingCode.GDBlock3Objects1= [];
gdjs.TestingCode.GDBlock3Objects2= [];

gdjs.TestingCode.conditionTrue_0 = {val:false};
gdjs.TestingCode.condition0IsTrue_0 = {val:false};
gdjs.TestingCode.condition1IsTrue_0 = {val:false};
gdjs.TestingCode.condition2IsTrue_0 = {val:false};
gdjs.TestingCode.conditionTrue_1 = {val:false};
gdjs.TestingCode.condition0IsTrue_1 = {val:false};
gdjs.TestingCode.condition1IsTrue_1 = {val:false};
gdjs.TestingCode.condition2IsTrue_1 = {val:false};


gdjs.TestingCode.userFunc0x8e8a30 = function(runtimeScene) {
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



}


{



}


{



}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Block2"), gdjs.TestingCode.GDBlock2Objects1);
{for(var i = 0, len = gdjs.TestingCode.GDBlock2Objects1.length ;i < len;++i) {
    gdjs.TestingCode.GDBlock2Objects1[i].setX(gdjs.TestingCode.GDBlock2Objects1[i].getX() - (100));
}
}}

}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TestingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.auth.signInWithEmail("ernesto@gmail.com", "Feb32003", gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13686316);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.getDocument("users", "test", runtimeScene.getVariables().get("Stamp"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.firestore.writeField("users", "test", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("date_var")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("month_var")) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("year_var")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("time_var")), "A friend used invite code", gdjs.VariablesContainer.badVariable, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("text1"), gdjs.TestingCode.GDtext1Objects1);
{for(var i = 0, len = gdjs.TestingCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.TestingCode.GDtext1Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Date")));
}
}}

}


{



}


{


gdjs.TestingCode.userFunc0x8e8a30(runtimeScene);

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
gdjs.TestingCode.GDEarnScorePointsObjects1.length = 0;
gdjs.TestingCode.GDEarnScorePointsObjects2.length = 0;
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
gdjs.TestingCode.GDBlockObjects1.length = 0;
gdjs.TestingCode.GDBlockObjects2.length = 0;
gdjs.TestingCode.GDBlock2Objects1.length = 0;
gdjs.TestingCode.GDBlock2Objects2.length = 0;
gdjs.TestingCode.GDBlock3Objects1.length = 0;
gdjs.TestingCode.GDBlock3Objects2.length = 0;

gdjs.TestingCode.eventsList0(runtimeScene);
return;

}

gdjs['TestingCode'] = gdjs.TestingCode;
