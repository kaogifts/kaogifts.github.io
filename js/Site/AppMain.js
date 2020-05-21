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
AppMain.BlockCustomerIdQRCode = $("#CustomerIdQRCode");
AppMain.BtnGetCustomerIdQRCode = $("#GetCustomerIdQRCode");
AppMain.ScrollTriggerGetCustomerIdQRCode = $("#GetCustomerIdQRCodeScrollTrigger");
AppMain.BindUIEvents = function(){
    AppMain.BtnGetCustomerIdQRCode.bind("click", AppMain.BtnGetCustomerIdQRCode_OnClicked);
    AppMain.TextCustomerEmailAddress.bind("keyup", AppMain.TextCustomerEmailAddress_OnKeyPress);
}


// ******************************
AppMain.BtnGetCustomerIdQRCode_OnClicked = function(){
    AppMain.BlockCustomerIdQRCode.empty();
    AppMain.BlockCustomerIdQRCode.qrcode(btoa(AppMain.TextCustomerEmailAddress.val()));
    AppMain.ScrollTriggerGetCustomerIdQRCode.click();
}

AppMain.TextCustomerEmailAddress_OnKeyPress = function(){
    if(AppMain.ValidateEmail(AppMain.TextCustomerEmailAddress.val())){
        AppMain.BtnGetCustomerIdQRCode.attr("disabled", false);
    }
    else{
        AppMain.BtnGetCustomerIdQRCode.attr("disabled", true);
    }
}

// ******************************
AppMain.ValidateEmail = function(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }