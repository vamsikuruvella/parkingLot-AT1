let connectDB = require('./connectToDB');
let dbClass =
    class building {
        constructor() {
            console.log("Building Instance Created");
        }
        hasFreeSpace(vehicle) {
            let wheels = vehicle.wheels;
            let plate = vehicle.plate;
            (async () => {
                const cc = new connectDB();
                await cc.makeConnection();
                const query = { spots: { $gt: 0 } };
                const data = await cc.query('test_db', 'building', query);

                if (data.length === 0) {
                    console.log("No available space for vehicle:", vehicle.plate);
                } else {
                    console.log("Available buildings for", vehicle.plate, ":", data);
                }
            })();
        }
    }

module.exports=dbClass;

/**
 let vhImp=require('./vehicle');
 let veh=new vhImp('TN1',2,'car');
 let build=require('./building');
 build=new build();
 build.hasFreeSpace(veh);
 */