import PropTypes from 'prop-types'; // Importez PropTypes depuis React

/**
 * checkbox avec un libellé sur la droite
 * @param {boolean} ckecked 
 * @param {(v: boolean)=> void} onChange 
 * @param {string} label
 * @param {string} id
 */
export function Checkbox({checked, onChange, label, id}){
    return <div className="form-check mt-3">
        <input 
            id={id}
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={(e)=> onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">
            {label}
        </label>
    </div>
}

// Définissez les types des props attendues par Checkbox
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired, // checked doit être un booléen et requis
    onChange: PropTypes.func.isRequired, // onChange doit être une fonction et requis
    label: PropTypes.string.isRequired, // label doit être une chaîne de caractères et requis
    id: PropTypes.string.isRequired, // id doit être une chaîne de caractères et requis
};