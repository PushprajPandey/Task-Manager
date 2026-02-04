import Button from './Button';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="group bg-gradient-to-br from-[#252836] to-[#1f2230] border border-gray-700/50 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 animate-slide-up">
      <div className="flex items-start justify-between">
        <div className="flex items-start flex-1">
          <div className="relative">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task)}
              className="mt-1 mr-4 h-6 w-6 rounded-lg border-2 border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#252836] bg-[#1a1d29] cursor-pointer transition-all hover:border-blue-500"
            />
            {task.completed && (
              <svg className="absolute top-1 left-0 w-6 h-6 text-blue-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`text-lg font-bold mb-1 transition-all ${task.completed ? 'line-through text-gray-500' : 'text-white group-hover:text-blue-100'}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className={`text-sm mt-2 leading-relaxed ${task.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                {task.description}
              </p>
            )}
            <div className="flex items-center gap-2 mt-3">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs text-gray-500 font-medium">
                {new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              {task.completed && (
                <span className="ml-2 px-2 py-0.5 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full border border-green-700/30">
                  ✓ Completed
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => onEdit(task)}
            className="p-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-lg transition-all duration-200 border border-blue-600/30 hover:border-blue-500"
            title="Edit task"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-lg transition-all duration-200 border border-red-600/30 hover:border-red-500"
            title="Delete task"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
