import React from 'react';
import CheckboxGroup from './CheckboxGroup.js';
import '../styles/FilterSidebar.css';

const FilterSidebar = () => {
  const options = [
    {
      title: 'LOCATION(USA)',
      value: [
        { name: "West", checked: true },
        { name: "Midwest", checked: false },
        { name: "Southeast", checked: true },
        { name: "Northeast", checked: false },
        { name: "Southwest", checked: true },
      ]
    },
    {
      title: 'MSRP Percent Off',
      value: [
        { name: "0-20%", checked: true },
        { name: "20-50%", checked: false },
        { name: "50-80%", checked: false },
      ]
    },
    {
      title: 'LOCATION(USA)',
      value: [
        { name: "New", checked: true },
        { name: "Like New", checked: false },
        { name: "Uninspected Returns", checked: true },
        { name: "Used", checked: true },
        { name: "Salvage", checked: false },
        { name: "Mixed", checked: false },
      ]
    }
  ];

  const checkboxGroups = options.map((props, i) => <CheckboxGroup key={i} {...props} />);

  return (
    <aside className="sidebar-wrapper">
      <div className="heading-btn">
        <h3>Filter</h3>
        <button className="text-btn">Clear</button>
      </div>
      <h6 className="upper">Price</h6>
      <div className="select-wrapper">
        <div className="select-with-icon">
          <select>
            <option>$ Min</option>
          </select>
          <span>▼</span>
        </div>
        <div className="select-with-icon">
          <select>
            <option>$ Max</option>
          </select>
          <span>▼</span>
        </div>
      </div>
      {
        checkboxGroups
      }
    </aside>
  );
};

export default FilterSidebar;
