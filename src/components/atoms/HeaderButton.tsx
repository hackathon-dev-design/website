export interface HeaderButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  active?: boolean
}

export default function HeaderButton({
  children,
  className,
  onClick,
  active,
}: HeaderButtonProps) {
  return (
    <button
      className="relative font-medium text-gray-300 hover:text-white transition-colors underline-offset-4 decoration-2 group"
      onClick={onClick}
    >
      {children}
      <div className="absolute bottom-0 w-full mb-[-4px] flex flex-col justify-center items-center">
        <div className="w-[0%] bg-gray-300 h-[3px] transition-all group-hover:w-full group-hover:bg-white " />
      </div>
    </button>
  )
}
