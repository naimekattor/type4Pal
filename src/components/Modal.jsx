const Modal = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🚀 Coming Soon
        </h2>
        <p className="text-gray-600 mb-6">
          We’re working hard to launch this feature. Stay tuned!
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-2 bg-[#004f42] text-white rounded-lg hover:bg-[#05332b] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
