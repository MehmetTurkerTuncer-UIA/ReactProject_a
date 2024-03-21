// CSS DOSYALARI IMPORT ETME 
import "./Main.css" 
import turkerImg from "./images/turkerfoto.png"

function Main() {
    const headerStyle = {
        color : 'blue',
        backgroundColor :'gray',
        fontSize : "2rem",
        fontWeight : "bold",
        margin : "50px"
    }
  return (
    <main>
        {/* INLINE CSS */}
        <h2 style={{color: 'red', backgroundColor:'yellow', margin : "100px"}}>Main Section</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, corrupti? Ducimus ipsam asperiores sint eos maiores totam eligendi omnis non consectetur rerum nam soluta praesentium quisquam at odio, aliquam tenetur. Ut optio alias, assumenda repellendus, nisi dolorem itaque, sapiente quisquam dicta qui beatae ab ipsa sequi hic odit placeat! Pariatur.</p>

        <h2>yeni baslik</h2>
        <h3 style={headerStyle}>Other Header</h3>

        <p className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur mollitia optio voluptates neque a ea reiciendis veritatis officiis inventore fuga, cumque tempore suscipit assumenda possimus nostrum, iusto, at excepturi recusandae itaque. Quisquam recusandae officia dolore illo ipsum dignissimos doloribus officiis dolorum blanditiis ipsa. Veritatis incidunt ullam unde dolore tempore fugit!</p>

        <div>
            <img className="img" src="https://cdn.pixabay.com/photo/2024/03/05/19/26/duck-8615153_1280.jpg" alt="ordek" />

            <img className="img" src="https://cdn.pixabay.com/photo/2024/01/27/00/46/capra-8535002_1280.jpg" alt="keci" />

            <img src={turkerImg} alt="turker" />
        </div>


    </main>
  )
}

export default Main