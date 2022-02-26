import { useState } from 'react';

function NewHouseForm (props) {
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
            <h1>Add New House</h1>
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

export default NewHouseForm;