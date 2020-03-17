var stations = [];
var lines = [];

class Persistence {
    
    static addDevice(topic, message){
        try{
            let id = topic.split('/')[topic.split('/').length - 2];
            let messageParsed = JSON.parse(message);

            let lineToAdd = {
                name: messageParsed.lineName,
                updated: false,
                stations: []
            }

            let stationToAdd = {
                id: id || '',
                name: messageParsed.friendlyName || id,
                switch: messageParsed.status.toUpperCase() || '',
                lineName: messageParsed.lineName,
                status: '',
                color: '#fff',
                test: {
                    name: 'Wating Informations',
                    testDeviceName: '',
                    status: '',
                    info: '',
                    color: '#fff'
                }
            };

            if(!lines.some(line => line.name === lineToAdd.name)){
                lines.push(lineToAdd);
            }

            lines.map(line => {
                if(line.name === stationToAdd.lineName){
                    if(!line.stations.some(station => station.id === stationToAdd.id)){
                        line.stations.push(stationToAdd);
                    }else{
                        line.stations = line.stations.map((station) => {
                            if(station.id === stationToAdd.id){
                                station = stationToAdd;
                            }
                            return station;
                        });
                    }
                    line.stations.sort((a, b) => a.switch > b.switch ? -1 : 1);
                    line.updated = true;
                }
            });
        }catch(e){
            console.error(`Unable to add new device: ${e}`);
            return false;
        }
    }
    
    static getDevices(){
        try{
            return lines;
        }catch(e){
            console.error(`Unable to get devices: ${e}`);
            return false;
        }
    }
}

module.exports = { Persistence: Persistence };