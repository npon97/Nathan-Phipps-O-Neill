host = "test.mosquitto.org";
port = 1883;
topic = "python/mqtt/ds4msg";

console.log("MQTT configuration complete")

// Called after form input is processed
function startConnect() {
    console.log("Starting MQTT connection ...");
    // Generate a random client ID
    clientID = "clientID_" + parseInt(Math.random() * 100);

    // Print output for the user in the messages div
    var msg = 'Connecting to: ' + host + ' on port: ' + port + '\n';
    document.getElementById("mqtt-output").innerHTML += msg;
    console.log(msg);
    document.getElementById("mqtt-output").innerHTML += 'Using the following client value: ' + clientID +'\n';

    // Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    client.connect({ 
        onSuccess: onConnect,
        onFailure: onFailure
    });
}

// Called when the client connects
function onConnect() {

    // Print output for the user in the messages div
    document.getElementById("mqtt-output").innerHTML += 'Subscribing to: ' + topic + '\n';

    // Subscribe to the requested topic
    client.subscribe(topic);
}

function onFailure() {
    document.getElementById("mqtt-output").innerHTML += 'ERROR: Connection to: ' + host + ' on port: ' + port + ' failed.\n'
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    document.getElementById("mqtt-output").innerHTML += 'ERROR: Connection lost';
    if (responseObject.errorCode !== 0) {
        document.getElementById("mqtt-output").innerHTML += 'ERROR: ' + responseObject.errorMessage + '\n';
    }
}

// Called when a message arrives
function onMessageArrived(message) {
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("mqtt-output").innerHTML += 'Topic: ' + message.destinationName + '  | ' + message.payloadString + '\n';
}

// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    document.getElementById("mqtt-output").innerHTML += 'Disconnected\n';
}


// Start MQTT connection
console.log("START CONNECT CALL REACHED");
startConnect();


console.log("MQTT JS END REACHED");