import PropTypes from 'prop-types'; // Importez PropTypes depuis React

/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void } onChange
 */
export function Input({placeholder, value, onChange}){
    const tableStyle = {
        boxShadow: '1px 1px 10px 3px  aqua' // Box-shadow bleu clair
    };
    return <div>
        <input 
        style={tableStyle}
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e)=> onChange(e.target.value)} 
        />
    </div>
}

// Définissez les types des props attendues par Input
Input.propTypes = {
    placeholder: PropTypes.string.isRequired, // placeholder doit être une chaîne de caractères et requis
    value: PropTypes.string.isRequired, // value doit être une chaîne de caractères et requis
    onChange: PropTypes.func.isRequired, // onChange doit être une fonction et requis
};
