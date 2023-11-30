
import React from 'react'
import Select from 'react-select'



const SelectDropdown = ({onChange, options, value, classNane}) => {
    // const options = [
    //     { value:"dogs", label: 'Dogs' },
    //     { value: 'cats', label: 'Cats' },
    //     { value: 'rabbits', label: 'Rabbits' },
    //     { value: 'fishes', label: 'Fishes' },
    //     { value: 'horse', label: 'Horse' },
    //     { value: 'birds', label: 'Birds' }
    //   ]
    const defaultValue = (options,value)=>{
        return options ? options.find(option=>option.value === value) : ""
    }
  return (
    <div>
        <Select 
        options={options}
        onChange={value=>onChange(value)}
        value={defaultValue(options,value)}
        ></Select>
    </div>
  )
}

export default SelectDropdown;
