import React, { useState } from 'react';

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.trim() !== '') {
            props.addNewHouse({name});
            setName('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add New House</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type='submit'>Add House</button>
            </form>
        </div>
    )
}

