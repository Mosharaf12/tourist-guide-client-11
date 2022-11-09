import React, { useEffect } from 'react';

const UseTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Tourist Guide`;
    },[title])
   
};

export default UseTitle;