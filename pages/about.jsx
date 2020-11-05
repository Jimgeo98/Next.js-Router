import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function about() {

    return (

        <div className="cont2">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>About</title>
            </Head>
            <div className="ab">
                <h1 id="h12">Hello from About <span>About</span></h1>
            </div>
            <div className="nav2">
                <Link href="/"><a>Home</a></Link>
                <Link href="/services"><a>Services</a></Link>
            </div>
        </div>

    )
}


export default about
