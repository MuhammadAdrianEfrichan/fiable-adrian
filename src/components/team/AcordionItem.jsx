export default function AccordionItem({ title, isOpen, onToggle, children }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-376.75">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6"
      >
        <div className="flex items-center gap-4">
          <span className="w-5 h-5 bg-black rotate-45 shrink-0" />
          <span className="font-bold uppercase text-[35px]">{title}</span>
        </div>
        <svg
        className={`w-10 h-10 cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        >
          <path strokeWidth="2" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-8">
          {children}
        </div>
      )}
    </div>
  );
}