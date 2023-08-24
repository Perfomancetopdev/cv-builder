'use client';
import { DropResult } from 'react-beautiful-dnd';
import dynamic from 'next/dynamic';

const DragDropContext = dynamic(() => import('react-beautiful-dnd').then(c => c.DragDropContext), {
    ssr: false,
})
const Draggable = dynamic(() => import('react-beautiful-dnd').then(c => c.Draggable), {
    ssr: false,
})
const Droppable = dynamic(() => import('react-beautiful-dnd').then(c => c.Droppable), {
    ssr: false,
})


import { useState } from "react";
import { EmploHubIcon } from '@emplohub/icons/server';
import { Education } from './sections/free/Education';

export const CVEditor = () => {
    const [sections, setSections] = useState([
        { id: 'education_free', content: <Education/> },
        { id: 'section2', content: 'Section 2' },
        { id: 'section3', content: 'Section 3' },
    ]);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const newSections = [...sections];
        const [movedSection] = newSections.splice(result.source.index, 1);
        newSections.splice(result.destination.index, 0, movedSection);

        setSections(newSections);
    };

    return (
        <div className='card shadow-lg border w-full h-full p-4' id='cv-editor'>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="sections">
                    {(provided) => (
                        <div
                            className="h-full"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {sections.map((section, index) => (
                                <Draggable
                                    key={section.id}
                                    draggableId={section.id}
                                    index={index}
                                >

                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="section p-4 bg-white mb-4 focus-within:shadow-md  focus-within:border rounded-lg"
                                        >
                                            {section.content}
                                        </div>
                                    )}

                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-4 justify-center'>
                    <p className='text-xs'>Powered by</p>

                    <div
                        className="text-primary flex flex-row items-center gap-2">
                        <EmploHubIcon className="h-6 w-6" />
                        <span className="text-md font-semibold normal-case">
                            EmploHub
                        </span>
                    </div>
                </div>

                <p className='text-xs stat-title mt-2'>emplohub.com</p>
            </div>
        </div>
    );
};
