var mqtt;
var reconnectTimeout = 2000;
topic = "python/mqtt/ds4msg"

function MQTTconnect() {
    console.log("Initiate MQTT Connect ...")
    if (typeof path == "undefined") {
        path = '/mqtt';
    }
    mqtt = new Paho.MQTT.Client(
            host,
            port,
            path,
            "web_" + parseInt(Math.random() * 100, 10)
    );
    var options = {
        timeout: 3,
        useSSL: useTLS,
        cleanSession: cleansession,
        onSuccess: onConnect,
        onFailure: function (message) {
            console.log("Connection failed: " + message.errorMessage + "Retrying");
            setTimeout(MQTTconnect, reconnectTimeout);
        }
    };

    mqtt.onConnectionLost = onConnectionLost;
    mqtt.onMessageArrived = onMessageArrived;

    if (username != null) {
        options.userName = username;
        options.password = password;
    }
    console.log("Host="+ host + ", port=" + port + ", path=" + path + " TLS = " + useTLS + " username=" + username + " password=" + password);
    mqtt.connect(options);
}

function onConnect() {
    console.log('Connected to ' + host + ':' + port + path);
    // Connection succeeded; subscribe to our topic
    mqtt.subscribe(topic, {qos: 0});
}

function onConnectionLost(response) {
    setTimeout(MQTTconnect, reconnectTimeout);
    console.log("connection lost: " + responseObject.errorMessage + ". Reconnecting");
};

function onMessageArrived(message) {

    var topic_recv = message.destinationName;
    var payload_recv = message.payloadString;

    console.log(topic_recv);
    console.log(payload_recv);
};


$(document).ready(function() {
    MQTTconnect();
});

