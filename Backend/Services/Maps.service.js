import axios from 'axios';

const getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const results = response.data.results[0].geometry.location;
            return {
                lat: results.lat,
                lng: results.lng
            };
        } else {
            console.error('API responded with:', response.data);
            throw new Error('Unable to fetch coordinates');
        }
    } catch(error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
};

const getdestenceTime = async (origin, destination) => {
    if(!origin || !destination){
        throw new Error("origin and destination are required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}&mode=driving`;

    try {
        const response = await axios.get(url);
         if (
            response.data.status === 'OK' &&
            response.data.rows &&
            response.data.rows.length > 0 &&
            response.data.rows[0].elements &&
            response.data.rows[0].elements.length > 0
        ) {
            const element = response.data.rows[0].elements[0];
            if (element.status === 'OK') {
                return {
                    distance: element.distance, // {text, value}
                    duration: element.duration  // {text, value}
                };
            } else {
                // The element can have its own status like "NOT_FOUND"
                throw new Error(`Element status: ${element.status}`);
            }
        } else { 
            throw new Error("unable to fatch destence and time");
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { 
    getAddressCoordinate,
    getdestenceTime
};