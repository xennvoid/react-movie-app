import React, { FormEvent, useState } from 'react';
import styles from './Form.module.scss';
import FormInput from '../FormInput/FormInput';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/typedHooks';
import { changeAuthStatus } from '../../redux/slices/authSlice';

const Form: React.FC = () => {

    interface IInput {
        id: number;
        name: string;
        label: string;
        type: string;
        pattern?: string;
        errorMessage: string;
        required: boolean;
        placeholder?: string;
    }

    interface IFormData {
        login: string,
        email: string,
        password: string,
        confirm: string;
    }

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [formData, setFormData] = useState<IFormData>({
        login: "",
        email: "",
        password: "",
        confirm: "",
    })

    const inputs: IInput[] = [
        {
            id: 1,
            name: "login",
            label: "login",
            type: "label",
            pattern: `^[A-Za-z0-9_-]{3,16}$`,
            errorMessage: "Login must consist of 3-16 symbols and contain only letters, numbers and _ or - symbols!",
            required: true
        },
        {
            id: 2,
            name: "email",
            label: "email",
            type: "email",
            placeholder: 'example@gmail.com',
            errorMessage: "It should be an email!",
            required: true,
        },
        {
            id: 3,
            name: "password",
            label: "password",
            type: "password",
            pattern: `^[A-Za-z0-9_-]{3,16}$`,
            errorMessage: "Password must consist of 3-16 symbols and contain only letters, numbers and _ or - symbols!",
            required: true,
        },
        {
            id: 4,
            name: "confirm",
            label: "confirm password",
            type: "password",
            pattern: `${formData.password}`,
            errorMessage: "Passwords don`t match!",
            required: true,
        },
    ]

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        dispatch(changeAuthStatus({ ...formData }));

        navigate('/', { replace: true });
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Register form</h2>
                {inputs.map(input =>
                    <FormInput value={formData[input.name as keyof IFormData]} key={input.id} onChange={onChange} {...input} />
                )}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
