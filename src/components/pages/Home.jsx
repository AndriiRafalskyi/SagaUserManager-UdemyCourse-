import { MDBTableBody, MDBTableHead, MDBTable, MDBBtn, MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserError, deleteUserStart, loadUsersStart } from '../../redux/actions';
import { getFullUsersData } from '../../redux/selectors/usersSelector';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector(getFullUsersData);

    useEffect(() => {
        dispatch(loadUsersStart());
    }, []);

    const deleteUser = (userId) => {
        dispatch(deleteUserStart({ userId }))
    }

    return users && <MDBTable>
        <MDBTableHead dark>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {users.map((item, index) => <tr key={item.id}>
                <td scope="row">{index + 1}</td>
                <td scope="row">{item.name}</td>
                <td scope="row">{item.email}</td>
                <td scope="row">{item.phone}</td>
                <td scope="row">{item.address}</td>
                <td scope="row">
                    <MDBBtn className="m-1" tag="a" color="none" onClick={() => deleteUser(item.id)}>
                        <MDBTooltip title="Delete" tag="span">
                            <MDBIcon fas icon="trash" size="lg"/>
                        </MDBTooltip>
                    </MDBBtn>
                    <MDBBtn className="m-1" tag="a" color="none">
                        <MDBTooltip title="Edit" tag="a">
                            <MDBIcon fas icon="pen" size="lg"/>
                        </MDBTooltip>
                    </MDBBtn>
                    <MDBBtn className="m-1" tag="a" color="none">
                        <MDBTooltip title="View" tag="a">
                            <MDBIcon fas icon="eye" size="lg"/>
                        </MDBTooltip>
                    </MDBBtn>
                </td>
            </tr>)}
        </MDBTableBody>
    </MDBTable>
};

export default Home;