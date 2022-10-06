import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    return (
        <Html>
            <Head>
                <meta name="description" content='GuitarLA - Venta de Guitarras y blog de música' />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans&family=Outfit:wght@400;700;900&family=PT+Sans:ital,wght@0,700;1,400&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://necolas.github.io/normalize.css/" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>

        </Html>
    )
}