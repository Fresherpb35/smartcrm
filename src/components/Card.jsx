const Card = ({ children }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      {children}
    </div>
  )
}

export default Card
