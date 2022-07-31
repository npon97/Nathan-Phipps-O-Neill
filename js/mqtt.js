host = "ws://test.mosquitto.org";
port = "8080";
topic = "python/mqtt/ds4msg";

console.log("MQTT configuration complete")

const client = mqtt.connect(host + ":" + port)
client.subscribe(topic)

client.on("message", function (topic, payload) {
  document.getElementById("mqtt-output").innerHTML += "["+topic+"]\t"+payload+"\n";
})

client.publish(topic, 
    "If you're seeing this message, it's coming from a public mqtt broker.");