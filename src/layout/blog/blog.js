import React from 'react'


class Blog extends React.Component {
    render() {
        console.log(this.props)
        return (
<div className="jumbotron">
<h1 className="display-3">Hello, Blog! {this.props.match.params.blog} </h1>
<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
<hr className="my-4" />
<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
<p className="lead">
<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</p>
</div>
)
    }
}





const Main = () => (
    <div className="jumbotron">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
)




const Music = () => (
    <div className="jumbotron">
        <h1 className="display-3">Hello, Music!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>

)



export {Blog, Main, Music}