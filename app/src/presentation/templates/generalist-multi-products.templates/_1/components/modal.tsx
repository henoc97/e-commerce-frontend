'use client';

import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import CloseIcon from './buttons.components/close-button';
import SubmitButton from './buttons.components/submit-button';
import Input from './input.components/input';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Logic
    };

    return (
        <>
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
                    className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-charcoalgrayP1 bg-opacity-30"
                >
                    <div className="max-w-xl relative bg-white rounded-lg shadow-lg p-0 max-w-md w-full overflow-hidden">
                        {/* Main Content */}
                        <div className="flex h-full flex-col sm:flex-row">
                            {/* Image secvtion*/}
                            <div className="w-1/2 h-auuto">
                                <Image
                                    src="/assets/images/newsletter.png"
                                    alt="Subsribe NewLetter"
                                    width={400}
                                    height={400}
                                    objectFit="cover"
                                    className="w-full h-full hidden sm:block"
                                />
                            </div>

                            <div className="sm:w-1/2 p-6 flex flex-col justify-center relative">
                                {/* Button for close modal */}
                                <CloseIcon onClick={toggleModal} />

                                {/* Newsletter content */}
                                <div className="text-center">
                                    <h3
                                        id="modal-title"
                                        className="text-xl font semibold mb-2"
                                    >
                                        <b>S'abonner à la Newsletter</b>
                                    </h3>
                                    <p className="text-gray-500 mb-4">
                                        Abonnez-vous à <b>Henoc-Shop</b> pour
                                        recevoir les derniers produits et les
                                        mises à jour des réductions.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Adresse email"
                                        required={true}
                                    />
                                    <SubmitButton label="Souscrire" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
