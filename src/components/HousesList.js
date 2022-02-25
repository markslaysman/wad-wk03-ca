import { useState, useEffect } from 'react';

import House from './House';
import { housesApi } from '../rest/HousesApi.js';
import NewHouseForm from './NewHouseForm';

function HousesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [houses, setHouses] = useState([]);
    const [houseChange, houseHasChanged] = useState(false);
    
    useEffect( () => {

        const fetchHouses = async () => {
            setIsLoading(true);
            const houseList = await housesApi.get();
            //console.log(houseList);
            setHouses(houseList);
            setIsLoading(false);
        }
        console.log("House list useEffect called due to a change");
        fetchHouses();
        houseHasChanged(false);
        setIsLoading(false);
    }, [houseChange])

    const updateHouse = async(updatedHouse) => {
        await housesApi.put(updatedHouse);
        houseHasChanged(true);
    };

    const addHouse = async(house) => {
        await housesApi.post(house);
        houseHasChanged(true);
    }

    const deleteHouse = async(house) => {
        await housesApi.delete(house);
        houseHasChanged(true);
    }

    /*
    if (isLoading) {
        return (
            <div>
                <h1>LOADING.......</h1>
            </div>
        );
    }
*/
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