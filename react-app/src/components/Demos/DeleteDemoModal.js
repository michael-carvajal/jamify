
export default function DeleteDemoModal({ demo, handleDelete, closeModal }) {

    return (
        <div className="delete-songsheet">
            <h2>Are you sure you want to delete demo '{demo.name}'?</h2>
            <div className="user-login-signup">
                <p onClick={() => handleDelete(demo)} id="signup-btn" style={{ backgroundColor: "var(--ug-red)" }}>Yes (Delete Demo)</p>
                <p onClick={closeModal} id="login-btn">No (Keep Demo)</p>

            </div>
        </div>
    )
}
