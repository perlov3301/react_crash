import { Form, useParams } from "react-router-dom";

const Contact = (id) => {
    const par = useParams();
    let imgUrl="";
    console.log("Contactjs; params.key:"+ Object.keys(par));
        const Mary = "https://upload.wikimedia.org/wikipedia/commons/0/08/Mary-anne-disraeli.jpg"
        const Disraeli = 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Benjamin_Disraeli_by_H_Lenthall.jpg/800px-Benjamin_Disraeli_by_H_Lenthall.jpg";
    if (par.contactId==1) { imgUrl=Disraeli;}
     else {
        if (par.contactId==2) { imgUrl= Mary;  }
        else {imgUrl="../../../../downloads/disraeli_queenVictoria.jpg";}
    }
    
    const contact = {
        first: "Your",
        last: "Name",
        avatar: imgUrl ,
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
    };
    return (
        <div id="contact">
            <div style={{textAlign:"center"}}>
                <img 
                  key={contact.avatar}
                  src={contact.avatar || imgUrl}
                  width="300"
                />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    ) } {" "}
                  <Favorite contact={contact} />
                </h1>
                {contact.twitter && (
                    <p>
                        <a target="_blanc" href={`https://twitter.com/${contact.twitter}`} >
                           {contact.twitter}
                        </a>
                    </p>
                )}
                {contact.notes && <p>{contact.notes}</p>}
            <div> 
                <Form action="edit">
                    <button type="submit">Edit</button>
                </Form>
                <Form 
                  method="post"
                  action="destroy"
                  onSubmit={(event) =>{
                    // if ( !confirm("please confirm you want to delete this record"))
                     { event.preventDefault.Default(); }
                  }}
                >
                    <button type="submit">Delete</button>
                </Form>
            </div>
        </div>
    </div>
    );
};

export default Contact;

function Favorite({contact}) {
    // this is a `let` for later
    let favorite = contact.favorite;
    return (
        <Form method="post">
            <button 
              name="favorite"
              value={favorite? "false":"true"}
              aria-label={
                favorite ? "Remove from favorites" :
                           "Add to favorites"
              }
            >
            {favorite ? "★ " : "☆"}
            </button>
            <h3 style={{fontSize: '1rem', fontWeight:"170"}}> stars with code
                "&#9734":&#9734;   "&#9733":&#9733;
            </h3>
           
        </Form>
        
    );
}