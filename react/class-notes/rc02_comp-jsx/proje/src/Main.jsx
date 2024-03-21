import "./Main.css" 

function Main() {
    const headerStyle = {
        color : 'blue',
        backgroundColor :'gray',
        fontSize : "2rem",
        fontWeight : "bold"
    }
  return (
    <main>
        {/* INLINE CSS */}
        <h2 style={{color: 'red', backgroundColor:'yellow'}}>Main Section</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, corrupti? Ducimus ipsam asperiores sint eos maiores totam eligendi omnis non consectetur rerum nam soluta praesentium quisquam at odio, aliquam tenetur. Ut optio alias, assumenda repellendus, nisi dolorem itaque, sapiente quisquam dicta qui beatae ab ipsa sequi hic odit placeat! Pariatur.</p>

        <h2>yeni baslik</h2>
        <h3 style={headerStyle}>Other Header</h3>

        <p className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur mollitia optio voluptates neque a ea reiciendis veritatis officiis inventore fuga, cumque tempore suscipit assumenda possimus nostrum, iusto, at excepturi recusandae itaque. Quisquam recusandae officia dolore illo ipsum dignissimos doloribus officiis dolorum blanditiis ipsa. Veritatis incidunt ullam unde dolore tempore fugit!</p>


    </main>
  )
}

export default Main