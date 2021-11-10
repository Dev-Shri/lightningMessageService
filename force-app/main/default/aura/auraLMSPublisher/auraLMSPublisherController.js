({
	send: function(component, event, helper) {
        let msg = component.get("v.message");
        const payload = {
            source: "Aura Component",
            data: msg
        };
        component.find("messageChannel").publish(payload);
    },
})