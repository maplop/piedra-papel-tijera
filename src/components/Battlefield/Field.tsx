interface FieldProps {
  children: React.ReactNode
}

const Field: React.FC<FieldProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-10">
      {children}
    </div>
  )
}
export default Field
