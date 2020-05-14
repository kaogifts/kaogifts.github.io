function AppMain(){

}

AppMain.IsUIEventsBound = false;
AppMain.Initialize = function(){
    if(!AppMain.IsUIEventsBound){
        AppMain.BindUIEvents();
    }
}

AppMain.TextCustomerEmailAddress = $("#CustomerEmailAddress");
AppMain.TextCustomerIdQRCode = $("#CustomerIdQRCode");
AppMain.BtnGetCustomerIdQRCode = $("#GetCustomerIdQRCode");
AppMain.BindUIEvents = function(){
    AppMain.BtnGetCustomerIdQRCode.bind("click", AppMain.BtnGetCustomerIdQRCode_OnClicked);
}


// ******************************
AppMain.BtnGetCustomerIdQRCode_OnClicked = function(){
    AppMain.TextCustomerIdQRCode.empty();
    AppMain.TextCustomerIdQRCode.qrcode(AppMain.TextCustomerEmailAddress.val());
}