import TheNav from "../components/TheNav"

const imageStyles = {
    height:"500px"
}
export default ()=>{
    console.log('about pages')
    return(
        <div>
            <TheNav />
            <img src="/static/images/desktop.jpg" style={imageStyles} />
            <div>I am about page</div>
        </div>
    )
}