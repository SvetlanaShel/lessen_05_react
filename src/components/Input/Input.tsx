import './styles.css';
 homework07
import { InputProps } from './types';

function Input({
  placeholder,
  name,
  value,
  type = 'text',
  onChange,
  label,
  id
}: InputProps) {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        className='input-component'
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        id={id}
      />
    </div>
  )


function Input() { 
    return <input className="input-component" name="test" placeholder="Enter text" />
 main
}

export default Input;