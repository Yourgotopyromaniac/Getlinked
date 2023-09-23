import React from 'react'
import Intro from './Intro'
import Rules from './Rules'
import Faq from './Faq'
import Rewards from './Rewards'
import Partners from './Partners'
import Privacy from './Privacy'
import Judge from './Judge'
import Timeline from './Timeline'


const Content = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-full flex flex-col gap-0 items-center'>
                <Intro/>
                <Rules/>
                <Judge/>
                <Faq/>
                <Timeline/>
                <Rewards/>
                <Partners/>
                <Privacy/>
            </div>
        </div>
    )
}

export default Content