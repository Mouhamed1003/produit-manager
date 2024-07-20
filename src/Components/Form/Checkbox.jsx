
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
