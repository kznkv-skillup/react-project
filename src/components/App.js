import React from 'react'

const Header = (props) => {
    return (
        <h1>
            {props.id}. Hello {props.title}
        </h1>
    )
}

const Text = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur eos totam similique commodi, cumque amet veritatis
                animi? Facilis voluptatem nulla ipsam, ab quidem consectetur.
                Facere voluptates eos possimus rerum accusamus?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur eos totam similique commodi, cumque amet veritatis
                animi? Facilis voluptatem nulla ipsam, ab quidem consectetur.
                Facere voluptates eos possimus rerum accusamus?
            </p>
        </>
    )
}

export const App = () => {
    return (
        <>
            <Header title="React" id={1} />
            <Header title="App.js" id={2} />
            <Text />
        </>
    )
}
