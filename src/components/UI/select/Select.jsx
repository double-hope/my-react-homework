import React from 'react';

const Select = ({options, selectName, defaultValue, onChange}) => {
    return (
        <select
            name={selectName}
            onChange={e => onChange(e.target.value)}
        >
            <option value="">{defaultValue}</option>
            {options.map(option=>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;