// src/components/Button/Button.jsx
import './Button.css'

// COMPONENTE COM PROPS
function Button({ texto, cor, onClick }) {
  return (
    <button 
      className={`btn btn-${cor}`}
      onClick={onClick}
    >
      {texto}
    </button>
  )
}

export default Button