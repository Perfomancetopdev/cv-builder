'use client';
import { RedoIcon, UndoIcon, LayoutTemplate, PaletteIcon, Share2Icon, DownloadIcon, CrownIcon } from 'lucide-react';
import { AddSections } from './sections/AddSections';
import jsPDF from 'jspdf';

export const Tools = () => {

    const handleDownload = () => {
        const cvEditor = document.getElementById('cv-editor');
        if (cvEditor) {
            const doc = new jsPDF({
                orientation: 'portrait',
                format: 'a4',
                unit: 'px',
            });

            doc.setFont('Inter-Regular', 'normal');

            doc.html(cvEditor, {
                async callback(doc) {
                    doc.save('cv-by-emplohub');
                },
            });
        }
    };

    return (
        <div className='card shadow-md items-center flex flex-col gap-2 p-4 border w-fit'>

            <div className='flex gap-2'>

                <button className='btn btn-ghost hover:bg-primary-50 rounded-2xl'>
                    <UndoIcon />
                </button>

                <button className='btn btn-ghost hover:bg-primary-50 rounded-2xl'>
                    <RedoIcon />
                </button>
            </div>

            <AddSections />

            <button className='btn btn-ghost hover:bg-primary-50 rounded-2xl'>
                <LayoutTemplate />

                <p>Templates</p>
            </button>

            <button className='btn btn-ghost hover:bg-primary-50 rounded-2xl'>
                <PaletteIcon />

                <p>Design & Font</p>
            </button>

            <div className="divider" />

            <button className='btn btn-ghost hover:bg-primary-50 rounded-2xl' onClick={handleDownload}>
                <DownloadIcon />

                <p>Download</p>
            </button>

            <button className='btn btn-ghost hover:bg-primary-50 rounded-2xl'>
                <Share2Icon />

                <p>Share</p>
            </button>

            <div className="divider" />

            <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                    <CrownIcon className='stroke-secondary fill-secondary' />
                    <span className="label-text">Show brand</span>
                    <input type="checkbox" className="toggle toggle-secondary" />
                </label>
            </div>


        </div>
    );
};
