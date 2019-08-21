import React from 'react';
import '../styles/CheckboxGroup.css';

const CheckboxGroup = ({ title, value }) => {
  return (
    <div className="checkbox-group-wrapper">
      <h6 className="border-bottom">
        {title}
      </h6>
      {
        value.map(
          ({ name, checked }, i) =>
            <label key={i}>
              <input type="checkbox" checked={checked} />
              <span>{name}</span>
            </label>
        )
      }
    </div>
  );
};

export default CheckboxGroup;
