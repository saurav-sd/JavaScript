// Map data to frontend format. The main element is location key and we
// need to map all data to it.

const loc = [
    {
    location_key: [32,22,11],
    autoassign: 1
    },
    {
    location_key: [41,42],
    autoassign: 1
    }
]
    
    const bulkConfig = [
    {
    dataValues: {
    config_key: 100
    }
    },
    {
    dataValues: {
    config_key: 200
    }
    }
]
    
const result = loc.map((locEl, index) => {
    return locEl.location_key.map((locationkey) => {
        return {
            location_key: locationkey,
            config_key: bulkConfig[index].dataValues.config_key,
            autoassign: locEl.autoassign,
        }
    })
}).reduce((arr, acc) => arr.concat(acc), []);


console.log(result);
    