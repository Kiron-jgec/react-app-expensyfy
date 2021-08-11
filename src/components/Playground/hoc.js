// Higher order componenets(HOC) - Acomponent thats renders other components

const Info = (props) => (
  <div>
    <h1> Info</h1>
    <p> The info is : {props.info} </p>
  </div>
);

const withAdminWorning = (WarappedComponent) => {
  return (props) => (
    <div>
      <WarappedComponent {...props} />
      {props.isAdmin && <p> This is private info dont share it.</p>}
    </div>
  );
};




// requered authentications
const requireAuthentication=(WarappedComponent)=>
{
return (props)=>(

    <div>
        {props.isAuthenticated ? (

           <WarappedComponent  {...props} /> 
        ):(

          <p> please login to wiew the info</p>  
        )}
    </div>
)
};




const Admininfo = withAdminWorning(Info);
const Authinfo = requireAuthentication(Info);


export default Authinfo;
