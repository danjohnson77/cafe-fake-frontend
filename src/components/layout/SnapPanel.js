import React from 'react'

const SnapPanel = ({children, customClasses}) => {
    return (
        <section className={`snap-panel ${customClasses ? customClasses : ''}`}>
            {children}
        </section>
    )
}

export default SnapPanel
