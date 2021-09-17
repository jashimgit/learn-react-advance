import React from 'react';
import EmployeList from './EmployeList';
import { Heading } from './Heading';

export default function Home() {
    return (
        <div className='container mx-auto'>
            <h3 className='text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase'>
                CRUD with React Context API and Hooks
            </h3>
            <Heading />
            <EmployeList />
        </div>
    );
}
