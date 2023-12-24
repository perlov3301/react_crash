import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError();
    console.error(error);
    return(
    <div id="error-page">
      <h1 style={{textAlign:'center'}}>error</h1>
      <p style={{textAlign:'center'}}>
        message:<i>{error.statusText || error.message}</i>
      </p>
    </div>);
} ;

export default ErrorPage;