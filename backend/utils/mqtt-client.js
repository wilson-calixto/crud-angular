const mqtt = require('mqtt');
var isConnected = false;
const { TestLogCtrl } = require('../src/controllers/test-log');
const { Persistence } = require('./persistence');

class MqttClient {
    
    constructor(){
        this.mqttClient = null;
        this.host = 'mqtt://brmas028.tpvaoc.com';
        this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
        this.password = 'YOUR_PASSWORD';
    }
  
    connect(cSocket){
        try{
            // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
            if(!this.mqttClient){
                this.mqttClient = mqtt.connect(this.host);

                 // Connection callback
                this.mqttClient.on('connect', () => {
                    isConnected = true;
                });

                // Mqtt error calback
                this.mqttClient.on('error', (err) => {
                    console.log(err);
                    this.mqttClient.end();
                });
                
                cSocket.sockets.on('connection', function (socket) {
                    console.log("Socket Client Connected");
                    socket.on('disconnect', function(){
                        console.log("Saiu");
                    });
                });
            
                // When a message arrives, console.log it
                this.mqttClient.on('message', async function (topic, message) {
                    switch(topic.split('/')[topic.split('/').length-1]){
                        case 'status':
                            Persistence.addDevice(topic, message);
                            cSocket.emit('updatedStations', {stations: Persistence.getDevices()});
                            break;
                        case 'testResult':
                            cSocket.emit('testStatus', {topic: topic, message: String(message)});
                            await TestLogCtrl.addTestLog(JSON.parse(message));
                            break;
                        case 'stationStatus':
                            cSocket.emit('stationStatus', {topic: topic, message: String(message)});
                            break;
                        default:
                            break
                    }
                });

                this.mqttClient.on('close', () => {
                    console.log(`mqtt client disconnected`);
                });
            }
            return true;
        }catch(e){
            console.error(`Unable connect mqtt client: ${e}`);
            return false;
        }
    }
    
    publish(topic, payload, qos){
        try{
            if(qos){
                this.mqttClient.publish(topic, payload, {qos: qos});
            }else{
                this.mqttClient.publish(topic, payload);
            }
            return true;
        }catch(e){
            console.error(`Unable connect mqtt client: ${e}`);
            return false;
        }
    }
    
    subscribeTopic(topic){
        try{
            // mqtt subscriptions
            this.mqttClient.subscribe(topic, {qos: 0});
            if(topic.split('/')[topic.split('/').length-1] === 'status'){
                return Persistence.getDevices();
            }else{
                return true;
            }
        }catch(e){
            console.error(`Unable subscribe in topic ${topic}: ${e}`);
            return false;
        }
    }
    
    unsubscribeTopic(topic){
        try{
            // mqtt unsubscriptions
            this.mqttClient.unsubscribe(topic);
            return true;
        }catch(e){
            console.error(`Unable unsubscribe in topic ${topic}: ${e}`);
            return false;
        }
    }
    
    clientConnected(){
        try{
            return isConnected;
        }catch(e){
            console.error(`Unable to check client connected: ${e}`);
            return false;
        }
    }
    
    stop(){
        try{
            this.mqttClient.end();
            isConnected = false;
        }catch(e){
            console.error(`Unable to end mqtt client: ${e}`);
            return false;
        }
    }
}

module.exports = { MqttClient: MqttClient };