const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false, fullWidth = false }) => {
  const baseClasses = 'px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1d29] transform hover:scale-[1.02] active:scale-[0.98]';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 disabled:from-blue-400 disabled:to-blue-500 disabled:opacity-50 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40',
    secondary: 'bg-[#2d3142] text-gray-200 hover:bg-[#363a4f] focus:ring-gray-500 disabled:bg-gray-700 disabled:opacity-50 border border-gray-600/50 hover:border-gray-500',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500 disabled:from-red-400 disabled:to-red-500 disabled:opacity-50 shadow-lg shadow-red-900/30 hover:shadow-xl hover:shadow-red-900/40',
    success: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 focus:ring-green-500 disabled:from-green-400 disabled:to-green-500 disabled:opacity-50 shadow-lg shadow-green-900/30 hover:shadow-xl hover:shadow-green-900/40'
  };

  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClasses} disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100`}
    >
      {children}
    </button>
  );
};

export default Button;
