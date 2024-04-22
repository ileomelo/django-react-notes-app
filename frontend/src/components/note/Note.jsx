/* eslint-disable react/prop-types */
import { Trash2 } from "lucide-react";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.create_at).toLocaleDateString('en-US')

    return (
        <>
            <div>
                <div className="rounded">
                    <div className="w-full h-64 flex flex-col justify-between items-start dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{note.title}</h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">{note.content}</p>
                        </div>
                        <div className="w-full flex flex-col items-start">
                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 w-full">
                                <p className="text-sm">{formattedDate}</p>
                                <button
                                onClick={() => onDelete(note.id)}
                                className="w-8 h-8 rounded-full bg-gray-800 dark:text-white dark:bg-red-500 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black" aria-label="edit note" role="button">
                                    <Trash2/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Note