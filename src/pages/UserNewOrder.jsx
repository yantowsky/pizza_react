import React from 'react';
import "yup-phone-lite";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from '../components/Button/Button.jsx';
import basicSchema from '../schemes/schemas.jsx';

const UserNewOrder = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            firstName: "",
            phoneNum: "",
            address: 'Glinki Str., 1, Dnipro 49000 Ukraine',
            orderPriority: false
        },
        resolver: yupResolver(basicSchema)
    });

    const handleFormSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className="user__order">
            <h2 className='user__title'>
                Ready to order? Let's go!
            </h2>
            <form className="user__form" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='form__item'>
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input {...register('firstName')} type="text" placeholder="Enter your first name" id='firstName' />
                    {errors.firstName && <p className='form__error'>{errors.firstName.message}</p>}
                </div>
                <div className='form__item'>
                    <label htmlFor="phoneNum">
                        Phone number
                    </label>
                    <input {...register('phoneNum')} type="text" placeholder="Enter your phone number (UA format: +380675677667)" id='phoneNum' />
                    {errors.phoneNum && <p className='form__error'>{errors.phoneNum.message}</p>}
                </div>
                <div className='form__item'>
                    <label htmlFor="address">
                        Address
                    </label>
                    <input {...register('address')} type="text" placeholder="Enter your address" id='address' />
                    {errors.address && <p className='form__error'>{errors.address.message}</p>}
                </div>
                <div className='form__item form__item--mod '>
                    <input {...register('orderPriority')} type="checkbox" id='orderPriority' />
                    <label htmlFor="orderPriority">
                        Want to yo give your order priority?
                    </label>
                </div>
                <Button className='form__btn' type="submit" text="Order now for €39.00"/>
            </form>
        </div>
    );
}

export default UserNewOrder;