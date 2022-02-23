import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    function RemoveHouse () {
        console.log(`Delete House Click for ${house._id} ${house.name}`);
        deleteHouse(house);
    }

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => {
        return updateHouse({...house, rooms: [...house.rooms, room]})
    };

    const rooms = () => (
        <ul>
           {house.rooms.map((room, index) => (
               <li key={index}>
                   <label>{`${room.name} Area: ${room.area}`}</label>
                   <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
               </li>
           ))} 
        </ul>
    );

    return (
        <div>
            <div>
                <h1>{house.name}<button onClick={RemoveHouse}>Delete House</button></h1>
            </div>
            
            {
                rooms({rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )
};