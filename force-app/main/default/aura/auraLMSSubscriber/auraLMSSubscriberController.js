({
    handleChange: function(component, message) { 
        debugger;
        //message.getParam("recordData")
        // Read the message argument to get the values in the message payload
        if (component.get("v.isSubscribed") && message != null && message._params) {
            component.set("v.payload", JSON.stringify(message._params, null, 2));
        } 
    },
    
    subscribe : function(component, event){
        if(!component.get("v.isSubscribed")){
            component.set("v.indication","SUBSCRIBED");
            component.set("v.isSubscribed",true);
        }
    },
    
    unsubscribe : function(component, event){
        if(component.get("v.isSubscribed")){
            component.set("v.isSubscribed",false);
            component.set("v.indication","UNSUBSCRIBED");
            component.set("v.payload","");
        }
    }
})