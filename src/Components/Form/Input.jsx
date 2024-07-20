
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
