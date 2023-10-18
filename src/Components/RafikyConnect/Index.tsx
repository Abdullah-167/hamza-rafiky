import React from 'react'
import Layout from '../Layout/Index'
import Hero from './Hero'
import Text from './Text'
import TextVedio from './TextVideo'
import ConnectService from './ConnectService'
import BgPronto from '../BgPronto'

const Index = () => {
    return (
        <Layout>
            <Hero />
            <Text />
            <TextVedio />
            <ConnectService />
            <BgPronto />
        </Layout>
    )
}

export default Index