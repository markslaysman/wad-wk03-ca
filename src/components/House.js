import NewRoomForm from './NewRoomForm';
import Card from './ui/Card';
import classes from './House.module.css';

function House (props) {
    const { house, updateHouse } = props;

    const RemoveHouse = () => {
        props.deleteHouse(house);
    };

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    };

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
        <div className={classes.housedata}>
            <Card>
                <div className={classes.housetitle}>
                    <h1>{house.name}</h1>
                    <button onClick={RemoveHouse}>Delete House</button>
                </div>

                {
                    rooms({rooms, houseId: house._id, deleteRoom})
                }

                <NewRoomForm addNewRoom={addNewRoom} />
            </Card>
        </div>
    );
}

export default House;