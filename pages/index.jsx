import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function index() {

    return (
        
        <div className="cont">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon.ico" />
                <title>Home</title>
            </Head>

            <div className="hom">
                <h1 id="h11">Hello from <span>Home</span></h1>
            </div>
            <div className="nav">
                <Link href="/about"><a>About</a></Link>
                <Link href="/services"><a>Services</a></Link>
            </div>
        </div>

    )
}


export default index
