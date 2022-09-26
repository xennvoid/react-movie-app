import { useState } from 'react';
import styles from './FormInput.module.scss';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
    label: string;
    type: string;
    pattern?: string;
    errorMessage: string;
    required: boolean;
    placeholder?: string;
}

const FormInput: React.FC<Props> = (props) => {

    const [focused, setFocused] = useState<boolean>(false);
    const { onChange, label, errorMessage, ...inputProps } = props;

    return (
        <div className={styles.form__input}>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                onFocus={(e) => e.target.name === 'confirm' && setFocused(true)}
                data-focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput