export default function Input({ type = 'text', name, value, placeholder, onChange, className = '' }) {
    return <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`px-2 py-1 border rounded block ${className}`}
    />
}