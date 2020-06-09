import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { CardProvider } from 'base/cardContext'
import App from 'next/app'
import { GlobalTheme } from 'base/theme'
import { GlobalStyle } from 'base/styles'
import { Header } from 'components'


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
                <ThemeProvider theme={GlobalTheme}>
                    <Fragment>
                        <GlobalStyle />
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
