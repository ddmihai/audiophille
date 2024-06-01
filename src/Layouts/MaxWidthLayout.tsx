import React from 'react'

const MaxWidthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='max-w-7xl mx-auto'>
            {children}
        </section>
    )
}

export default MaxWidthLayout
