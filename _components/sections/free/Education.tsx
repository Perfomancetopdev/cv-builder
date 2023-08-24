'use client';


export const Education = () => {

    return (
        <div className="flex flex-col">
            <input type="text" placeholder="School" className="input input-ghost w-full max-w-xs text-xl font-semibold underline" />
            <input type="text" placeholder="Degree" className="input input-ghost w-full max-w-xs" />
            <textarea className="textarea textarea-ghost" placeholder="Location"></textarea>
            <textarea className="textarea textarea-ghost" placeholder="Description"></textarea>


        </div>
    );
};
