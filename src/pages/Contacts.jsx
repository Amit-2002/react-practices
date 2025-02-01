// import { useLoaderData } from "react-router-dom";

import { Form } from "react-router-dom";

export const contactData = async ({request}) => {
    try{
        const response = await request.formData();
        const data = Object.fromEntries(response);
        console.log(data);
        
    }
    catch(err){
        console.log(err);
    }
}




const Contacts = () => {
    // const movieData = useLoaderData();
    // console.log(movieData);

    return(
        <section>
            <h1>Contacts page</h1>
            <Form method="POST" action="/contacts">
                <label htmlFor="username">User Name</label>
                <input type="text" 
                name="username"
                placeholder="enter name"
                id="username"
                />

                <label htmlFor="email">Email</label>
                <input type="email"
                name="email"
                id="email"
                placeholder="@.comsdf"
                />

                <label htmlFor="msg">Messege</label>
                <textarea name="msg" id="msg"
                cols='30' rows='10' placeholder="we are supporting you."
                ></textarea>

                <button>send Messege</button>
                
            </Form>
        </section>
    )
}
export default Contacts;