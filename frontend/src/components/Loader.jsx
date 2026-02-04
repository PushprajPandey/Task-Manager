const Loader = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-5 h-5 border-2',
    medium: 'w-10 h-10 border-4',
    large: 'w-16 h-16 border-4'
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className={`${sizeClasses[size]} border-blue-600/30 rounded-full`}></div>
        <div className={`${sizeClasses[size]} border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0`}></div>
      </div>
    </div>
  );
};

export default Loader;
