import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { CardProvider } from 'base/cardContext'
import App from 'next/app'
// import Router from 'next/router'
import Head from 'next/head'
// import dynamic from 'next/dynamic'
import { GlobalTheme } from 'base/theme'
import { GlobalStyle } from 'base/styles'
import { Header } from 'components'

// import('../static/pwa/pwa.js')


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            // <Provider>
                <ThemeProvider theme={GlobalTheme}>
                    <Fragment>
                        <GlobalStyle />
                        <Head>
                            {/* <meta
                                id="viewport"
                                name="viewport"
                                content="initial-scale=1.0, width=device-width"
                            /> */}
                        </Head>
                        <Wrapper>
                            <CardProvider>
                                <Header />
                                <Main>
                                    <Component {...pageProps} />              
                                </Main>
                            </CardProvider>
                        </Wrapper>
                    </Fragment>
                </ThemeProvider>
            // </Provider>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Main = styled.main`
    flex: 1;
`

export default MyApp
