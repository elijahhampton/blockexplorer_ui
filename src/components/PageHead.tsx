import Head from "next/head";

interface IPageHead {
    title: string;
    description: string;
    content: string;
}
const PageHead = (props: IPageHead) => {
    const { title, description, content } = props

    return (
        <Head>
        <title>{title}</title>
        <meta
          name={description}
          content={content}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

export default PageHead