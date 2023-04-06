const DeleteConfirmation = ({ datae }) => {
  const handleDelete = async (id) => {
    const res = await fetch(
      `https://todo-server-farhatmahi.vercel.app/tasks/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    return data;
  };

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-black">Are you sure?</h3>
          <p className="py-4 text-black">
            Are you sure you want to delete {datae.task_name} task?
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => handleDelete(datae._id)}
              className="btn bg-accent border-accent text-white mr-4"
            >
              Yes
            </button>
            <label
              htmlFor="my-modal-4"
              className="btn bg-accent border-accent text-white"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmation;
