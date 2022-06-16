gdjs.VerificationCode = {};
gdjs.VerificationCode.GDNavigationUIObjects1= [];
gdjs.VerificationCode.GDNavigationUIObjects2= [];
gdjs.VerificationCode.GDNavigationUIObjects3= [];
gdjs.VerificationCode.GDNavProfileObjects1= [];
gdjs.VerificationCode.GDNavProfileObjects2= [];
gdjs.VerificationCode.GDNavProfileObjects3= [];
gdjs.VerificationCode.GDNavMilestoneObjects1= [];
gdjs.VerificationCode.GDNavMilestoneObjects2= [];
gdjs.VerificationCode.GDNavMilestoneObjects3= [];
gdjs.VerificationCode.GDNavHomeObjects1= [];
gdjs.VerificationCode.GDNavHomeObjects2= [];
gdjs.VerificationCode.GDNavHomeObjects3= [];
gdjs.VerificationCode.GDNavCashoutObjects1= [];
gdjs.VerificationCode.GDNavCashoutObjects2= [];
gdjs.VerificationCode.GDNavCashoutObjects3= [];
gdjs.VerificationCode.GDProcessingObjects1= [];
gdjs.VerificationCode.GDProcessingObjects2= [];
gdjs.VerificationCode.GDProcessingObjects3= [];
gdjs.VerificationCode.GDEarnScorePointsObjects1= [];
gdjs.VerificationCode.GDEarnScorePointsObjects2= [];
gdjs.VerificationCode.GDEarnScorePointsObjects3= [];
gdjs.VerificationCode.GDcontent1Objects1= [];
gdjs.VerificationCode.GDcontent1Objects2= [];
gdjs.VerificationCode.GDcontent1Objects3= [];
gdjs.VerificationCode.GDcontent2Objects1= [];
gdjs.VerificationCode.GDcontent2Objects2= [];
gdjs.VerificationCode.GDcontent2Objects3= [];
gdjs.VerificationCode.GDcontent3Objects1= [];
gdjs.VerificationCode.GDcontent3Objects2= [];
gdjs.VerificationCode.GDcontent3Objects3= [];
gdjs.VerificationCode.GDAgreeBTNObjects1= [];
gdjs.VerificationCode.GDAgreeBTNObjects2= [];
gdjs.VerificationCode.GDAgreeBTNObjects3= [];
gdjs.VerificationCode.GDVerificationIDtextObjects1= [];
gdjs.VerificationCode.GDVerificationIDtextObjects2= [];
gdjs.VerificationCode.GDVerificationIDtextObjects3= [];
gdjs.VerificationCode.GDNametextObjects1= [];
gdjs.VerificationCode.GDNametextObjects2= [];
gdjs.VerificationCode.GDNametextObjects3= [];
gdjs.VerificationCode.GDDatetextObjects1= [];
gdjs.VerificationCode.GDDatetextObjects2= [];
gdjs.VerificationCode.GDDatetextObjects3= [];
gdjs.VerificationCode.GDHowdidyouhearObjects1= [];
gdjs.VerificationCode.GDHowdidyouhearObjects2= [];
gdjs.VerificationCode.GDHowdidyouhearObjects3= [];
gdjs.VerificationCode.GDFavclothingObjects1= [];
gdjs.VerificationCode.GDFavclothingObjects2= [];
gdjs.VerificationCode.GDFavclothingObjects3= [];
gdjs.VerificationCode.GDTellusmoreObjects1= [];
gdjs.VerificationCode.GDTellusmoreObjects2= [];
gdjs.VerificationCode.GDTellusmoreObjects3= [];
gdjs.VerificationCode.GDVerifiedObjects1= [];
gdjs.VerificationCode.GDVerifiedObjects2= [];
gdjs.VerificationCode.GDVerifiedObjects3= [];
gdjs.VerificationCode.GDblackbgObjects1= [];
gdjs.VerificationCode.GDblackbgObjects2= [];
gdjs.VerificationCode.GDblackbgObjects3= [];
gdjs.VerificationCode.GDwhitebgObjects1= [];
gdjs.VerificationCode.GDwhitebgObjects2= [];
gdjs.VerificationCode.GDwhitebgObjects3= [];
gdjs.VerificationCode.GDcloseObjects1= [];
gdjs.VerificationCode.GDcloseObjects2= [];
gdjs.VerificationCode.GDcloseObjects3= [];
gdjs.VerificationCode.GDbackObjects1= [];
gdjs.VerificationCode.GDbackObjects2= [];
gdjs.VerificationCode.GDbackObjects3= [];
gdjs.VerificationCode.GDproccessingObjects1= [];
gdjs.VerificationCode.GDproccessingObjects2= [];
gdjs.VerificationCode.GDproccessingObjects3= [];

gdjs.VerificationCode.conditionTrue_0 = {val:false};
gdjs.VerificationCode.condition0IsTrue_0 = {val:false};
gdjs.VerificationCode.condition1IsTrue_0 = {val:false};
gdjs.VerificationCode.condition2IsTrue_0 = {val:false};
gdjs.VerificationCode.condition3IsTrue_0 = {val:false};
gdjs.VerificationCode.condition4IsTrue_0 = {val:false};
gdjs.VerificationCode.condition5IsTrue_0 = {val:false};
gdjs.VerificationCode.condition6IsTrue_0 = {val:false};
gdjs.VerificationCode.conditionTrue_1 = {val:false};
gdjs.VerificationCode.condition0IsTrue_1 = {val:false};
gdjs.VerificationCode.condition1IsTrue_1 = {val:false};
gdjs.VerificationCode.condition2IsTrue_1 = {val:false};
gdjs.VerificationCode.condition3IsTrue_1 = {val:false};
gdjs.VerificationCode.condition4IsTrue_1 = {val:false};
gdjs.VerificationCode.condition5IsTrue_1 = {val:false};
gdjs.VerificationCode.condition6IsTrue_1 = {val:false};


gdjs.VerificationCode.userFunc0xa16c38 = function(runtimeScene) {
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
gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects2Objects = Hashtable.newFrom({"Verified": gdjs.VerificationCode.GDVerifiedObjects2});
gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects2Objects = Hashtable.newFrom({"Verified": gdjs.VerificationCode.GDVerifiedObjects2});
gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects1Objects = Hashtable.newFrom({"Verified": gdjs.VerificationCode.GDVerifiedObjects1});
gdjs.VerificationCode.eventsList0 = function(runtimeScene) {

{


gdjs.VerificationCode.condition0IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VerificationCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("defaultcameradown").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 2200);
}{runtimeScene.getVariables().get("defaultcameraup").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("DefaultCameraReady"), true);
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Verified"), gdjs.VerificationCode.GDVerifiedObjects2);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
gdjs.VerificationCode.condition2IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("PerformTaskInfo"), false);
}if ( gdjs.VerificationCode.condition1IsTrue_0.val ) {
{
gdjs.VerificationCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects2Objects, runtimeScene, true, true);
}}
}
if (gdjs.VerificationCode.condition2IsTrue_0.val) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verified"), gdjs.VerificationCode.GDVerifiedObjects2);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
gdjs.VerificationCode.condition2IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("PerformTaskInfo"), false);
}if ( gdjs.VerificationCode.condition1IsTrue_0.val ) {
{
gdjs.VerificationCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects2Objects, runtimeScene, true, true);
}}
}
if (gdjs.VerificationCode.condition2IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown")), "", 0);
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Verified"), gdjs.VerificationCode.GDVerifiedObjects1);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPosUp")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup"));
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.VerificationCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


};gdjs.VerificationCode.eventsList1 = function(runtimeScene) {

{


gdjs.VerificationCode.condition0IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VerificationCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Datetext"), gdjs.VerificationCode.GDDatetextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nametext"), gdjs.VerificationCode.GDNametextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VerificationIDtext"), gdjs.VerificationCode.GDVerificationIDtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.VerificationCode.GDbackObjects1);
{for(var i = 0, len = gdjs.VerificationCode.GDDatetextObjects1.length ;i < len;++i) {
    gdjs.VerificationCode.GDDatetextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("date_var")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("month_var")) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("year_var")));
}
}{for(var i = 0, len = gdjs.VerificationCode.GDNametextObjects1.length ;i < len;++i) {
    gdjs.VerificationCode.GDNametextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("user").getChild("FullName")));
}
}{runtimeScene.getVariables().get("IDGenerator").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), 0, 4));
}{runtimeScene.getVariables().get("Number").setNumber(gdjs.random(1000));
}{for(var i = 0, len = gdjs.VerificationCode.GDVerificationIDtextObjects1.length ;i < len;++i) {
    gdjs.VerificationCode.GDVerificationIDtextObjects1[i].setString(gdjs.evtTools.string.toUpperCase(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("IDGenerator")) + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Number"))));
}
}{for(var i = 0, len = gdjs.VerificationCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.VerificationCode.GDbackObjects1[i].setOpacity(0);
}
}}

}


};gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDAgreeBTNObjects2Objects = Hashtable.newFrom({"AgreeBTN": gdjs.VerificationCode.GDAgreeBTNObjects2});
gdjs.VerificationCode.eventsList2 = function(runtimeScene) {

{


gdjs.VerificationCode.condition0IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.VerificationCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Datetext"), gdjs.VerificationCode.GDDatetextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Favclothing"), gdjs.VerificationCode.GDFavclothingObjects2);
gdjs.copyArray(runtimeScene.getObjects("Howdidyouhear"), gdjs.VerificationCode.GDHowdidyouhearObjects2);
gdjs.copyArray(runtimeScene.getObjects("Nametext"), gdjs.VerificationCode.GDNametextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tellusmore"), gdjs.VerificationCode.GDTellusmoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("VerificationIDtext"), gdjs.VerificationCode.GDVerificationIDtextObjects2);
{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ProfileInfo.Verification.Name", (( gdjs.VerificationCode.GDNametextObjects2.length === 0 ) ? "" :gdjs.VerificationCode.GDNametextObjects2[0].getString()), runtimeScene.getVariables().get("namestate"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ProfileInfo.Verification.ID", (( gdjs.VerificationCode.GDVerificationIDtextObjects2.length === 0 ) ? "" :gdjs.VerificationCode.GDVerificationIDtextObjects2[0].getString()), runtimeScene.getVariables().get("idstate"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ProfileInfo.Verification.Date", (( gdjs.VerificationCode.GDDatetextObjects2.length === 0 ) ? "" :gdjs.VerificationCode.GDDatetextObjects2[0].getString()), runtimeScene.getVariables().get("datestate"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ProfileInfo.Verification.Q1", (( gdjs.VerificationCode.GDHowdidyouhearObjects2.length === 0 ) ? "" :gdjs.VerificationCode.GDHowdidyouhearObjects2[0].getString()), runtimeScene.getVariables().get("q1state"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ProfileInfo.Verification.Q2", (( gdjs.VerificationCode.GDFavclothingObjects2.length === 0 ) ? "" :gdjs.VerificationCode.GDFavclothingObjects2[0].getString()), runtimeScene.getVariables().get("q2state"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ProfileInfo.Verification.Q3", (( gdjs.VerificationCode.GDTellusmoreObjects2.length === 0 ) ? "" :gdjs.VerificationCode.GDTellusmoreObjects2[0].getString()), runtimeScene.getVariables().get("q3state"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Tags.Verified", "true", runtimeScene.getVariables().get("verifiedstate"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Variables.Balance", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Variables").getChild("Balance")), runtimeScene.getVariables().get("BalanceState"));
}}

}


};gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDcloseObjects2Objects = Hashtable.newFrom({"close": gdjs.VerificationCode.GDcloseObjects2});
gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.VerificationCode.GDbackObjects1});
gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects1Objects = Hashtable.newFrom({"Verified": gdjs.VerificationCode.GDVerifiedObjects1});
gdjs.VerificationCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AgreeBTN"), gdjs.VerificationCode.GDAgreeBTNObjects2);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
gdjs.VerificationCode.condition2IsTrue_0.val = false;
gdjs.VerificationCode.condition3IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDAgreeBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.VerificationCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.VerificationCode.GDAgreeBTNObjects2.length;i<l;++i) {
    if ( !(gdjs.VerificationCode.GDAgreeBTNObjects2[i].getBehavior("Tween").exists("back")) ) {
        gdjs.VerificationCode.condition2IsTrue_0.val = true;
        gdjs.VerificationCode.GDAgreeBTNObjects2[k] = gdjs.VerificationCode.GDAgreeBTNObjects2[i];
        ++k;
    }
}
gdjs.VerificationCode.GDAgreeBTNObjects2.length = k;}if ( gdjs.VerificationCode.condition2IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition3IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13735228);
}
}}
}
}
if (gdjs.VerificationCode.condition3IsTrue_0.val) {
/* Reuse gdjs.VerificationCode.GDAgreeBTNObjects2 */
gdjs.copyArray(runtimeScene.getObjects("proccessing"), gdjs.VerificationCode.GDproccessingObjects2);
gdjs.copyArray(runtimeScene.getObjects("whitebg"), gdjs.VerificationCode.GDwhitebgObjects2);
{for(var i = 0, len = gdjs.VerificationCode.GDAgreeBTNObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDAgreeBTNObjects2[i].getBehavior("Tween").addObjectScaleTween("clicked", (gdjs.VerificationCode.GDAgreeBTNObjects2[i].getScaleX()) - 0.5, (gdjs.VerificationCode.GDAgreeBTNObjects2[i].getScaleY()) - 0.5, "bounce", 100, false, true);
}
}{gdjs.evtTools.firebaseTools.firestore.getDocument("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("FetchDocData"), runtimeScene.getVariables().get("FetchedDataStatus"));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{for(var i = 0, len = gdjs.VerificationCode.GDwhitebgObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDwhitebgObjects2[i].setX(0);
}
}{for(var i = 0, len = gdjs.VerificationCode.GDproccessingObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDproccessingObjects2[i].setX(0);
}
}{for(var i = 0, len = gdjs.VerificationCode.GDwhitebgObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDwhitebgObjects2[i].setZOrder((( gdjs.VerificationCode.GDproccessingObjects2.length === 0 ) ? 0 :gdjs.VerificationCode.GDproccessingObjects2[0].getZOrder()) - 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AgreeBTN"), gdjs.VerificationCode.GDAgreeBTNObjects2);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VerificationCode.GDAgreeBTNObjects2.length;i<l;++i) {
    if ( gdjs.VerificationCode.GDAgreeBTNObjects2[i].getBehavior("Tween").hasFinished("clicked") ) {
        gdjs.VerificationCode.condition0IsTrue_0.val = true;
        gdjs.VerificationCode.GDAgreeBTNObjects2[k] = gdjs.VerificationCode.GDAgreeBTNObjects2[i];
        ++k;
    }
}
gdjs.VerificationCode.GDAgreeBTNObjects2.length = k;}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition1IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13737556);
}
}}
if (gdjs.VerificationCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VerificationCode.GDAgreeBTNObjects2 */
{for(var i = 0, len = gdjs.VerificationCode.GDAgreeBTNObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDAgreeBTNObjects2[i].getBehavior("Tween").removeTween("clicked");
}
}{for(var i = 0, len = gdjs.VerificationCode.GDAgreeBTNObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDAgreeBTNObjects2[i].getBehavior("Tween").addObjectScaleTween("back", (gdjs.VerificationCode.GDAgreeBTNObjects2[i].getScaleX()) + 0.5, (gdjs.VerificationCode.GDAgreeBTNObjects2[i].getScaleY()) + 0.5, "bounce", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AgreeBTN"), gdjs.VerificationCode.GDAgreeBTNObjects2);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VerificationCode.GDAgreeBTNObjects2.length;i<l;++i) {
    if ( gdjs.VerificationCode.GDAgreeBTNObjects2[i].getBehavior("Tween").hasFinished("back") ) {
        gdjs.VerificationCode.condition0IsTrue_0.val = true;
        gdjs.VerificationCode.GDAgreeBTNObjects2[k] = gdjs.VerificationCode.GDAgreeBTNObjects2[i];
        ++k;
    }
}
gdjs.VerificationCode.GDAgreeBTNObjects2.length = k;}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition1IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13733836);
}
}}
if (gdjs.VerificationCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VerificationCode.GDAgreeBTNObjects2 */
{for(var i = 0, len = gdjs.VerificationCode.GDAgreeBTNObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDAgreeBTNObjects2[i].getBehavior("Tween").removeTween("back");
}
}}

}


{



}


{


gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedDataStatus")) == "ok";
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition1IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13739876);
}
}}
if (gdjs.VerificationCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Variables").getChild("Balance").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchDocData").getChild("Variables").getChild("Balance")) + 10);
}
{ //Subevents
gdjs.VerificationCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
gdjs.VerificationCode.condition2IsTrue_0.val = false;
gdjs.VerificationCode.condition3IsTrue_0.val = false;
gdjs.VerificationCode.condition4IsTrue_0.val = false;
gdjs.VerificationCode.condition5IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("namestate")) == "ok";
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("idstate")) == "ok";
}if ( gdjs.VerificationCode.condition1IsTrue_0.val ) {
{
gdjs.VerificationCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("datestate")) == "ok";
}if ( gdjs.VerificationCode.condition2IsTrue_0.val ) {
{
gdjs.VerificationCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("verifiedstate")) == "ok";
}if ( gdjs.VerificationCode.condition3IsTrue_0.val ) {
{
gdjs.VerificationCode.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("BalanceState")) == "ok";
}if ( gdjs.VerificationCode.condition4IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition5IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13745900);
}
}}
}
}
}
}
if (gdjs.VerificationCode.condition5IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Verified"), gdjs.VerificationCode.GDVerifiedObjects2);
gdjs.copyArray(runtimeScene.getObjects("blackbg"), gdjs.VerificationCode.GDblackbgObjects2);
gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.VerificationCode.GDcloseObjects2);
gdjs.copyArray(runtimeScene.getObjects("proccessing"), gdjs.VerificationCode.GDproccessingObjects2);
gdjs.copyArray(runtimeScene.getObjects("whitebg"), gdjs.VerificationCode.GDwhitebgObjects2);
{for(var i = 0, len = gdjs.VerificationCode.GDVerifiedObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDVerifiedObjects2[i].setX(0);
}
}{for(var i = 0, len = gdjs.VerificationCode.GDcloseObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDcloseObjects2[i].setX(522);
}
}{for(var i = 0, len = gdjs.VerificationCode.GDblackbgObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDblackbgObjects2[i].setX(0);
}
}{for(var i = 0, len = gdjs.VerificationCode.GDblackbgObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDblackbgObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.VerificationCode.GDcloseObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDcloseObjects2[i].setOpacity(0);
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{for(var i = 0, len = gdjs.VerificationCode.GDwhitebgObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDwhitebgObjects2[i].setX(-(1795));
}
}{for(var i = 0, len = gdjs.VerificationCode.GDproccessingObjects2.length ;i < len;++i) {
    gdjs.VerificationCode.GDproccessingObjects2[i].setX(-(2908));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.VerificationCode.GDcloseObjects2);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
gdjs.VerificationCode.condition2IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDcloseObjects2Objects, runtimeScene, true, false);
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.VerificationCode.condition1IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition2IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13748404);
}
}}
}
if (gdjs.VerificationCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verified"), gdjs.VerificationCode.GDVerifiedObjects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.VerificationCode.GDbackObjects1);

gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
gdjs.VerificationCode.condition2IsTrue_0.val = false;
gdjs.VerificationCode.condition3IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationCode.mapOfGDgdjs_46VerificationCode_46GDVerifiedObjects1Objects, runtimeScene, true, true);
}if ( gdjs.VerificationCode.condition1IsTrue_0.val ) {
{
gdjs.VerificationCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.VerificationCode.condition2IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition3IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13749716);
}
}}
}
}
if (gdjs.VerificationCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}

}


};gdjs.VerificationCode.eventsList4 = function(runtimeScene) {

{


gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Tags").getChild("Verified")) == "true";
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
{gdjs.VerificationCode.conditionTrue_1 = gdjs.VerificationCode.condition1IsTrue_0;
gdjs.VerificationCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13750564);
}
}}
if (gdjs.VerificationCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}

}


};gdjs.VerificationCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.VerificationCode.userFunc0xa16c38(runtimeScene);

}


{


gdjs.VerificationCode.eventsList0(runtimeScene);
}


{


gdjs.VerificationCode.eventsList1(runtimeScene);
}


{


gdjs.VerificationCode.eventsList3(runtimeScene);
}


{


gdjs.VerificationCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.VerificationCode.condition0IsTrue_0.val = false;
gdjs.VerificationCode.condition1IsTrue_0.val = false;
{
gdjs.VerificationCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "checkInternet", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.VerificationCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationCode.condition1IsTrue_0.val = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}
if (gdjs.VerificationCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "NoInternet");
}}

}


};

gdjs.VerificationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VerificationCode.GDNavigationUIObjects1.length = 0;
gdjs.VerificationCode.GDNavigationUIObjects2.length = 0;
gdjs.VerificationCode.GDNavigationUIObjects3.length = 0;
gdjs.VerificationCode.GDNavProfileObjects1.length = 0;
gdjs.VerificationCode.GDNavProfileObjects2.length = 0;
gdjs.VerificationCode.GDNavProfileObjects3.length = 0;
gdjs.VerificationCode.GDNavMilestoneObjects1.length = 0;
gdjs.VerificationCode.GDNavMilestoneObjects2.length = 0;
gdjs.VerificationCode.GDNavMilestoneObjects3.length = 0;
gdjs.VerificationCode.GDNavHomeObjects1.length = 0;
gdjs.VerificationCode.GDNavHomeObjects2.length = 0;
gdjs.VerificationCode.GDNavHomeObjects3.length = 0;
gdjs.VerificationCode.GDNavCashoutObjects1.length = 0;
gdjs.VerificationCode.GDNavCashoutObjects2.length = 0;
gdjs.VerificationCode.GDNavCashoutObjects3.length = 0;
gdjs.VerificationCode.GDProcessingObjects1.length = 0;
gdjs.VerificationCode.GDProcessingObjects2.length = 0;
gdjs.VerificationCode.GDProcessingObjects3.length = 0;
gdjs.VerificationCode.GDEarnScorePointsObjects1.length = 0;
gdjs.VerificationCode.GDEarnScorePointsObjects2.length = 0;
gdjs.VerificationCode.GDEarnScorePointsObjects3.length = 0;
gdjs.VerificationCode.GDcontent1Objects1.length = 0;
gdjs.VerificationCode.GDcontent1Objects2.length = 0;
gdjs.VerificationCode.GDcontent1Objects3.length = 0;
gdjs.VerificationCode.GDcontent2Objects1.length = 0;
gdjs.VerificationCode.GDcontent2Objects2.length = 0;
gdjs.VerificationCode.GDcontent2Objects3.length = 0;
gdjs.VerificationCode.GDcontent3Objects1.length = 0;
gdjs.VerificationCode.GDcontent3Objects2.length = 0;
gdjs.VerificationCode.GDcontent3Objects3.length = 0;
gdjs.VerificationCode.GDAgreeBTNObjects1.length = 0;
gdjs.VerificationCode.GDAgreeBTNObjects2.length = 0;
gdjs.VerificationCode.GDAgreeBTNObjects3.length = 0;
gdjs.VerificationCode.GDVerificationIDtextObjects1.length = 0;
gdjs.VerificationCode.GDVerificationIDtextObjects2.length = 0;
gdjs.VerificationCode.GDVerificationIDtextObjects3.length = 0;
gdjs.VerificationCode.GDNametextObjects1.length = 0;
gdjs.VerificationCode.GDNametextObjects2.length = 0;
gdjs.VerificationCode.GDNametextObjects3.length = 0;
gdjs.VerificationCode.GDDatetextObjects1.length = 0;
gdjs.VerificationCode.GDDatetextObjects2.length = 0;
gdjs.VerificationCode.GDDatetextObjects3.length = 0;
gdjs.VerificationCode.GDHowdidyouhearObjects1.length = 0;
gdjs.VerificationCode.GDHowdidyouhearObjects2.length = 0;
gdjs.VerificationCode.GDHowdidyouhearObjects3.length = 0;
gdjs.VerificationCode.GDFavclothingObjects1.length = 0;
gdjs.VerificationCode.GDFavclothingObjects2.length = 0;
gdjs.VerificationCode.GDFavclothingObjects3.length = 0;
gdjs.VerificationCode.GDTellusmoreObjects1.length = 0;
gdjs.VerificationCode.GDTellusmoreObjects2.length = 0;
gdjs.VerificationCode.GDTellusmoreObjects3.length = 0;
gdjs.VerificationCode.GDVerifiedObjects1.length = 0;
gdjs.VerificationCode.GDVerifiedObjects2.length = 0;
gdjs.VerificationCode.GDVerifiedObjects3.length = 0;
gdjs.VerificationCode.GDblackbgObjects1.length = 0;
gdjs.VerificationCode.GDblackbgObjects2.length = 0;
gdjs.VerificationCode.GDblackbgObjects3.length = 0;
gdjs.VerificationCode.GDwhitebgObjects1.length = 0;
gdjs.VerificationCode.GDwhitebgObjects2.length = 0;
gdjs.VerificationCode.GDwhitebgObjects3.length = 0;
gdjs.VerificationCode.GDcloseObjects1.length = 0;
gdjs.VerificationCode.GDcloseObjects2.length = 0;
gdjs.VerificationCode.GDcloseObjects3.length = 0;
gdjs.VerificationCode.GDbackObjects1.length = 0;
gdjs.VerificationCode.GDbackObjects2.length = 0;
gdjs.VerificationCode.GDbackObjects3.length = 0;
gdjs.VerificationCode.GDproccessingObjects1.length = 0;
gdjs.VerificationCode.GDproccessingObjects2.length = 0;
gdjs.VerificationCode.GDproccessingObjects3.length = 0;

gdjs.VerificationCode.eventsList5(runtimeScene);
return;

}

gdjs['VerificationCode'] = gdjs.VerificationCode;
