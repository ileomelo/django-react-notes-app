import { useState, useEffect } from "react";
import api from "../../api";
import Note from "../components/note/Note"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../layout/Layout";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);



    const getNotes = () => {
        api
            .get("api/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this note?")

        if (shouldDelete) {
            api
                .delete(`api/notes/delete/${id}`)
                .then((res) => {
                    if (res.status === 204) {
                        toast.success("Note successfully deleted!");
                        getNotes();
                    }
                    else alert("Failed to delete note.");
                })
                .catch((error) => alert(error));
        }

    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("api/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Note created successfully!");
                    getNotes();
                }
                else alert("Failed to make note.");
            })
            .catch((err) => alert(err));
    };

    return (
        <>
            <ToastContainer />
            <Layout>

                <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Note</h2>
                    </div>
                    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={createNote}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        required
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                        type="text"
                                        name="title"
                                        id="title"
                                        autoComplete="title"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Content
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        required
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        name="content"
                                        id="content"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className="text-center pb-10 text-3xl">My notes</h2>
                    <div className="">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {notes.map((note) => (
                                <Note note={note} onDelete={deleteNote} key={note.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Home;