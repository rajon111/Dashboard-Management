import React from 'react';

const Portfolio = () => {
    return (
        <>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Educational Background
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Institute
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Golam Mostofa Rajon
                            </th>
                            <td class="px-6 py-4">
                                mostofarajon111@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                CSE
                            </td>
                            <td class="px-6 py-4">
                                Southeast University
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
            <div>


                <div>
                    <h1 className='text-2xl bg-rose-200 pt-4 pb-4 pl-4 '>skills</h1>

                    <div className='ml-3'>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>python</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Stripe(payment gatway)</li>
                        <li>SDLC</li>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl text-center bg-rose-200 pt-4 pb-4 m-4'>Recent Project:1</h1>
                        <h1 className='text-2xl  ml-5'>Live Link: </h1>
                        <h1 className='text-2xl  ml-5'>Git Repo: </h1>
                        <h1 className='text-2xl  ml-5'>Git Repo: </h1>

                    </div>
                    <div>
                        <h1 className='text-2xl text-center bg-rose-200 pt-4 pb-4 m-4'>Recent Project:2</h1>
                        <h1 className='text-2xl  ml-5'>Live Link: </h1>
                        <h1 className='text-2xl  ml-5'>Git Repo: </h1>
                        <h1 className='text-2xl  ml-5'>Git Repo: </h1>

                    </div>
                    <div>
                        <h1 className='text-2xl text-center bg-rose-200 pt-4 pb-4 m-4'>Recent Project:3</h1>
                        <h1 className='text-2xl  ml-5'>Live Link: </h1>
                        <h1 className='text-2xl  ml-5'>Git Repo: </h1>
                        <h1 className='text-2xl  ml-5'>Git Repo: </h1>

                    </div>
                </div>
            </div>


        </>
    );
};

export default Portfolio;