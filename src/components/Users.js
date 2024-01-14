import React from 'react'
import { useSearchParams} from 'react-router-dom';

const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const activeUsers = searchParams.get('filter') ? true: false;
    return (
        <div>
            <h1>Users List</h1>
            <h2>users 1</h2>
            <h2>users 2</h2>
            <h2>users 3</h2>
            <div>
                <button onClick={() => setSearchParams({ filter:'active', name:'ajmal'})}>Active Users</button>
                <button onClick={() => setSearchParams({}) }>Reset Filters</button>
            </div>
            {
               activeUsers && (<h1>Active Users</h1>)
            }
        </div>
    )
}

export default Users
