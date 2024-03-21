import turkerImg from "./images/turkerfoto.png"

function Profile(){
    return(
     <img style={{margin : "100px"}} src={turkerImg} alt="Turker tuncer" />

     )
}

function Gallery() {
  return (
    <div>
    <Profile/>
    <Profile/>
    <Profile/>
    <h1>GALERY</h1>
    </div>
  )
}

export default Gallery


