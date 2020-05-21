function AppMain(){

}

AppMain.IsUIEventsBound = false;
AppMain.Initialize = function(){
    if(!AppMain.IsUIEventsBound){
        AppMain.BindUIEvents();
    }
}

AppMain.TextCustomerEmailAddress = $("#CustomerEmailAddress");
AppMain.BlockCustomerIdQRCode = $("#CustomerIdQRCode");
AppMain.BtnGetCustomerIdQRCode = $("#GetCustomerIdQRCode");
AppMain.BindUIEvents = function(){
    AppMain.BtnGetCustomerIdQRCode.bind("click", AppMain.BtnGetCustomerIdQRCode_OnClicked);
    AppMain.TextCustomerEmailAddress.bind("change", AppMain.TextCustomerEmailAddress_OnChange);
}


// ******************************
AppMain.BtnGetCustomerIdQRCode_OnClicked = function(){
    AppMain.BlockCustomerIdQRCode.empty();
    AppMain.BlockCustomerIdQRCode.qrcode(btoa(AppMain.TextCustomerEmailAddress.val()));
}

AppMain.TextCustomerEmailAddress_OnChange = function(){
    
}

// ******************************
AppMain.ValidateEmail = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }