import React, { useState, useEffect } from 'react';
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart } from '../../redux/actions';
import { getToast} from '../../redux/selectors/usersSelector';
import { toast } from 'react-toastify';

const AddEditUser = () => {
    const [{ name, email, phone, address }, setFormValue] = useState({
       name: '',
       email: '',
       phone: '',
       address: '' 
    });
    const toastMessage = useSelector(getToast);
    const dispatch = useDispatch();

    useEffect(() => {
        if (toastMessage) {
            toast.success(toastMessage);
        }
    }, [toastMessage]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && phone && address) {
            dispatch(createUserStart({ name, email, phone, address }));
        }
    }

    const onInputChanged = (e) => {
        const { name:fieldName, value } = e.target;
        setFormValue({name, email, phone, address, [fieldName]: value})
    }

    return <div className="col-4 m-auto">
        <MDBValidation className="row g-4" noValidate onSubmit={handleSubmit}>
        <p className="fs-2 fw-bold text-center">Add User Details</p>
        <MDBInput 
            value={name}
            name="name"
            type="text"
            required
            label="Name"
            validation="Please provide a name"
            invalid
            onChange={onInputChanged}/>
        <MDBInput 
            value={email}
            name="email"
            type="email"
            required
            label="Email"
            validation="Please provide an email"
            invalid
            onChange={onInputChanged}/>
        <MDBInput 
            value={phone}
            name="phone"
            type="number"
            required
            label="Phone"
            validation="Please provide a phone number"
            invalid
            onChange={onInputChanged}/>
        <MDBInput 
            value={address}
            name="address"
            type="text"
            required
            label="Address"
            validation="Please provide an address"
            invalid
            onChange={onInputChanged}/>
        <div className="col-6 m-auto">
            <MDBBtn className="m-2" type="submit">
                Save
            </MDBBtn>
            <MDBBtn className="m-2" color='danger' onClick={() => history.push('/')}>
                Cancel
            </MDBBtn>
        </div>
    </MDBValidation>
    </div>
};

export default AddEditUser;