function AppMain(){

}

AppMain.IsUIEventsBound = false;
AppMain.Initialize = function(){
    if(!AppMain.IsUIEventsBound){
        AppMain.BindUIEvents();
        AppMain.IsUIEventsBound = true;
    }
}

AppMain.TextCustomerEmailAddress = $("#CustomerEmailAddress");
AppMain.LabelErrorEmailAddress = $("#LabelErrorEmailAddress");
AppMain.BlockCustomerIdQRCode = $("#BlockCustomerIdQRCode");
AppMain.BtnGetCustomerIdQRCode = $("#BtnGetCustomerIdQRCode");
AppMain.ScrollTriggerGetCustomerIdQRCode = $("#ScrollTriggerGetCustomerIdQRCode");
AppMain.BindUIEvents = function(){
    AppMain.BtnGetCustomerIdQRCode.bind("click", AppMain.BtnGetCustomerIdQRCode_OnClicked);
    AppMain.TextCustomerEmailAddress.bind("keyup", AppMain.TextCustomerEmailAddress_OnKeyUp);
}


// ******************************
AppMain.BtnGetCustomerIdQRCode_OnClicked = function(){
    if(AppMain.ValidateEmail(AppMain.TextCustomerEmailAddress.val())){
        AppMain.LabelErrorEmailAddress.css("display", "none");
        AppMain.BlockCustomerIdQRCode.empty();
        AppMain.BlockCustomerIdQRCode.qrcode(btoa(AppMain.TextCustomerEmailAddress.val()));
        AppMain.ScrollTriggerGetCustomerIdQRCode.click();
    }
    else{
        AppMain.LabelErrorEmailAddress.css("display", "block");
    }
}

AppMain.TextCustomerEmailAddress_OnKeyUp = function(){
    if(AppMain.ValidateEmail(AppMain.TextCustomerEmailAddress.val())){
        AppMain.LabelErrorEmailAddress.css("display", "none");
    }
}


// ******************************
AppMain.ValidateEmail = function(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }