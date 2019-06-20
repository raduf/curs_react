import React from 'react'

const DisplayErrors = ( {formErrors} ) => (
    <div className="formErrors">
    {
        Object.keys(formErrors).map( (fieldName, i) => 
            formErrors[fieldName] && 
                <em key={i}><code>{fieldName} {formErrors[fieldName]}</code><br/></em> )
    }
    </div>
)

export default DisplayErrors;