const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
//const HOUSES_ENDPOINT = 'https://61ff088d5e1c4100174f6dd6.mockapi.io/api/houses';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            //console.log("API returned the following ");
            //console.log(data);
            return data;
        } catch (e) {
            console.log('Error with fetch houses - ', e);
        }
    }

    post = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log ('Error with adding house - ', e);
        }
    }  

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log ('Error with updating house - ', e);
        }
    }

    delete = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return await resp.json();
        } catch (e) {
            console.log ('Error with deleting house - ', e);
        }
    }
}

export const housesApi = new HousesApi();