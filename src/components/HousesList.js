import { useState, useEffect } from 'react';

import House from './House';
import { housesApi } from '../rest/HousesApi.js';
import { NewHouseForm } from './NewHouseForm';

function HousesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [houses, setHouses] = useState([]);
    const [houseChange, houseHasChanged] = useState(false);
    
    useEffect( () => {

        const fetchHouses = async () => {
            setIsLoading(true);
            const houseList = await housesApi.get();
            setHouses(houseList);
            setIsLoading(false);
        }
        fetchHouses();
        houseHasChanged(false);
    }, [houseChange])

    const updateHouse = async(updatedHouse) => {
        await housesApi.put(updatedHouse);
        //fetchHouses();
        houseHasChanged(true);
    };

    const addHouse = async(house) => {
        await housesApi.post(house);
        //fetchHouses();
        houseHasChanged(true);
    }

    const deleteHouse = async(house) => {
        await housesApi.delete(house);
        //fetchHouses();
        houseHasChanged(true);
    }

    if (isLoading) {
        return (
            <div>
                <h1>LOADING.......</h1>
            </div>
        );
    }

    return (
        <div>
            <div className="newhouse-form">
                <NewHouseForm addNewHouse={addHouse} />
            </div>
            <div className="house-list">
                {houses.map((house) => (
                    <House 
                        house={house}
                        key={house._id}
                        updateHouse={updateHouse}
                        deleteHouse={deleteHouse}
                    />
                ))}
            </div>
        </div>
    )
}

export default HousesList;