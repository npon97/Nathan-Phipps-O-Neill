host = "ws://test.mosquitto.org";
port = "8080";
topic = "python/mqtt/ds4msg";

console.log("MQTT configuration complete")

const client = mqtt.connect(host + ":" + port)
client.subscribe(topic)

client.on("message", function (topic, payload) {
  alert([topic, payload].join(": "))
  client.end()
})

client.publish(topic, "hello world!")