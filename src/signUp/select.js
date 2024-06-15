import React from 'react';

export default function Select(props){
    const{title, options, name, onChange} = props;

    return(
        <select title={title}  className='options' onChange={onChange} name={name}>
            
            {
                options.map((el, index)=>(

                    <option key={index}
                        title={el.title}
                        value={el.value}
                    >
                        {el.title}
                    </option>
                ))
            }

        </select>
    )
}

