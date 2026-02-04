const Input = ({ label, type = 'text', value, onChange, placeholder, error, required = false }) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block text-gray-300 text-sm font-semibold mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3.5 bg-[#1a1d29] text-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 transition-all duration-200 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-700/50 hover:border-gray-600'
        }`}
      />
      {error && <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1"><span>⚠</span> {error}</p>}
    </div>
  );
};

export default Input;
