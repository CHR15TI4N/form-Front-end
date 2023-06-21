import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import './UserList.css';

const TDE2106 = () => {

    const [userData, setUserData] = useState([])

    const fetchUsers = useCallback(async () => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setUserData(data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [])

    const renderToDoData = () => {
        return (
            <div>
                <h2 className="ajust">Dados dos usuários: </h2>
                {userData.map(todos => (
                    <div className="usersContainer">
                        <h4>UserId: {todos.userId}</h4>
                        <h4>Id: {todos.id}</h4>
                        <h4>Title: {todos.title}</h4>
                        <h4>{todos.completed ? "Completed" : "Incompleted"}</h4>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="container">
            <h2>Listagem dos usuários</h2>
            {renderToDoData()}
        </div>
    );
}

export default TDE2106;