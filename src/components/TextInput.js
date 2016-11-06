import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0){
    wrapperClass +=" " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
        <div className="field input-group ">
          <label htmlFor={name}></label>
          <input
            type="search"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}/><span className="input-group-addon fa fa-search"></span>
          {error && <div className="alert alert-danger">{error}</div>}
         </div>
   </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
