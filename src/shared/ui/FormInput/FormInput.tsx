import { ChangeEvent, Fragment } from 'react';
import './FormInput.css';
import { FormInputType } from './types';

type Config = {
    label: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type: FormInputType;
};

export const FormInput = ({ label, onChange, name, type }: Config) => {
    return (
        <Fragment>
            <label className="form-label" htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                className="form-input"
                id={name}
                type={type}
            />
        </Fragment>
    )
};