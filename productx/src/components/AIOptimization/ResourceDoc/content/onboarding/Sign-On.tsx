 
 

const SignOn: React.FC = () => {
  return (
    
    <div className="space-y-2">
      <h1 className=" text-lg md:text-3xl lg:text-4xl my-4 font-bricolage ">
         Single Sign-On (SSO) 
        </h1>

        <p className="font-quicksand text-lg leading-tight tracking-wide">CloudDIET supports single sign-on (SSO) through Azure Active Directory. Use your existing Azure credentials to access your account, removing the need to create or remember separate CloudDIET login details.  </p>

 <p className="font-quicksand text-lg leading-tight tracking-wide">
        CloudDIET uses Just-in-Time (JIT) provisioning. User accounts are automatically created upon first SSO login. </p>
 <p className="font-quicksand text-lg leading-tight tracking-wide">
Manage user access and permissions directly within the CloudDIET platform.</p>
      </div>
  );
};

export default SignOn;
