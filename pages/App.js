import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import App from 'next/app'
// import Router from 'next/router'
import Head from 'next/head'
// import dynamic from 'next/dynamic'
import { GlobalStyle } from '../base/styles'
import { GlobalTheme } from '../base/theme'
import { Header } from '../components'

// import('../static/pwa/pwa.js')


class MyApp extends App {
    render() {
        // const { Component, pageProps } = this.props

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
                            <Header />
                            <Main>
                                {/* <Component {...pageProps} /> */}
                            </Main>
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
