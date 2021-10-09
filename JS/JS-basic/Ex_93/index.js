var recordCollection  = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let it Rock", "You Give Love a Bad Name"]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};

function updateRecords(object, id, prop, value) {
    if(prop !== "tracks" && value){
        object[id][prop] = value
    } else if(prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
        object[id][prop] = value
    } else if(prop === "tracks" && value ) {
        object[id][prop].push(value)
    } else if(!value) {
        delete object[id][prop]
    }
    
    return object
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"))
/* 
1245: {artist: 'Robert Palmer', tracks: Array(0)}
2468: {albumTitle: '1999', artist: 'Prince', tracks: Array(2)}
2548: {albumTitle: 'Slippery When Wet', artist: 'Bon Jovi', tracks: Array(2)}
5439: {albumTitle: 'ABBA Gold', artist: 'ABBA'}
*/