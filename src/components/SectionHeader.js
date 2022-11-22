import React from 'react'

const SectionHeader = ({ heading, paragraph }) => {
    return (
        <div className="row">
            <div className='header'>
                <h1 style={{ fontWeight: '600' }}>{heading}</h1>
                <p className='w-75'>{paragraph}</p>
            </div>
        </div>
    )
}

export default SectionHeader
