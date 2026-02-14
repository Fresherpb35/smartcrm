const SelectField = ({ label, options }) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-slate-700">
        {label}*
      </label>

      <select className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500">
        {options.map((opt, index) => (
          <option key={index}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
