import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function services() {

    return (

        <div className="cont3">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>services</title>
            </Head>

            <div className="ser">
                <h1 id="h13">Hello from <span>Services</span></h1>
            </div>
            <div className="nav3">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>
        </div>
    )
}



export default services
