
export default function DeleteDemoModal({ demo, handleDelete, closeModal }) {

    return (
        <div className="delete-songsheet">
            <h2>Are you sure you want to delete demo '{demo.name}'?</h2>
            <div className="user-login-signup flex flex-col gap-5">
                <button onClick={() => handleDelete(demo)} className="bg-ug-red w-full hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4  hover:border-ug-red rounded text-sm md:text-base">
                    Yes (Delete Demo)
                </button>
                <button onClick={closeModal} className="bg-none w-full hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4  hover:border-gray-600 rounded text-sm md:text-base">
                    No (Keep Demo)
                </button>
            </div>
        </div>
    )
}
