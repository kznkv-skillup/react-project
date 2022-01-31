import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return <h1>Hello App component </h1>
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

const App = () => {
    return (
        <>
            <Header />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
