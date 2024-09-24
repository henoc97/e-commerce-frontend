"use client";

import { useState } from "react";
import Image from 'next/image'
import React from "react";



export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Logic
    }

    return (
        <React.Fragment>
            <button 
                className="bg-blue-500 text-white py-2 px-4 rounded justify-top-center"
                onClick={toggleModal}
            >
                ouvrir le modal
            </button>

            {isOpen && (
                <div
                    role="dialog"
                    aria-labelledby="modal-title"
                    arial-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <div className="max-w-2xl relative bg-white rounded-lg shadow-lg p-0 max-w-md w-full overflow-hidden">
                        
                        {/* Main Content */}
                        <div className="flex h-full">

                            {/* Image secvtion*/}
                            <div className="w-1/2 h-auuto">
                                <Image
                                    src="/assets/images/newsletter.png"
                                    alt="Subsribe NewLetter"
                                    width={400}
                                    height={400}
                                    objectFit="cover"
                                    className="w-full h-full"
                                />
                            </div>

                            <div className="w-1/2 p-6 flex flex-col justify-center relative">

                                {/* Button for close modal */}
                                <button
                                    className="absolute top-3 right-3 text-gray-400 hover: text-gray-600"
                                    onClick={toggleModal}
                                >
                                    <i className='bx bx-x text-2xl'></i>
                                </button>

                                {/* Newsletter content */}
                                <div className="text-center">
                                    <h3 id="modal-title" className="text-xl font semibold mb-2">
                                        <b>S'abonner à la newslette</b>
                                    </h3>
                                    <p className="text-gray-500 mb-4">
                                        Abonnez-vous à <b>Henoc-Shop</b> pour recevoir les derniers produits et les mises à jour des réductions.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        name="email"
                                        className="p-2 border border-black rounded-md mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Adresse email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        Souscrire
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

