'use client';
import { FileEditIcon } from 'lucide-react';
import React, { useState } from 'react';

export const AddSections = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button className='btn btn-ghost hover:bg-primary-50 rounded-2xl' onClick={openModal}>
                <FileEditIcon />

                <p>Add section</p>
            </button>

            <dialog id="my_modal_3" className={`modal ${isModalOpen ? ' modal-open' : ''}`}>
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog>
        </>
    );
};
