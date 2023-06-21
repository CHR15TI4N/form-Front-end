const Input = ({label, inputName, errorMessage, value, onChange, type = "text"}) => {

    return (
        <div>
            <div>
                <label for={inputName}>{label}</label>
                <input 
                    type={type}
                    id={inputName}
                    name={inputName} 
                    value={value}
                    onChange={onChange}
                />
                {
                    errorMessage ? (
                        <p className='errorMessage'>{errorMessage}</p>
                    ) : <></>
                }
            </div>
        </div>
    );
}

export default Input;