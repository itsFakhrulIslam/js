const UsersCard = ({ user }) => {
  const { id, name, phone, email, website } = user;

  return (
    <div style={{border:'2px dashed', margin:'20px', borderRadius:'20px'}}>
      <h2>Users Card {id}</h2>
      <h3>Name: {name}</h3>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
      <p>
        website: <a href="">{website}</a>
      </p>
    </div>
  );
};

export default UsersCard;
