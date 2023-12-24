import { Outlet, Link } from "react-router-dom";
export default function Root () {
    return (
        <>
        <div id="sidebar" >
            <h3 style={{textAlign:'center'}}> React Router Contacts</h3>
            <div 
            //   style={{display:'block'}}
            >
                <form id="search-form" role="search" 
                  style={{display:'block'}}
                >
                    <input style={{borderRadius:'0.3rem'}}
                      id="q"
                      aria-label="Search contacts"
                      placeholder="Search"
                      type="search"
                      name="q"
                    />
                    <div id="search-spinner" aria-hidden hidden={true} />
                    <div className="sr-only" aria-live="polite" ></div>
                </form>
                <form method="post" >
                    <button style={{borderRadius:'0.15rem'}}
                      type="submit" >New</button>
                </form>
            </div>
            <nav>
                <ul>
                    <li><a href={`/contacts/1`} >Your Name</a></li>
                    <li><a href={`/contacts/2`} >Your Wife</a></li>
                    <li><a href={`/about`} >About</a></li>
                </ul>
            </nav>
        </div>
        <div id="detail"><Outlet /></div>
        </>
    );
} ;
