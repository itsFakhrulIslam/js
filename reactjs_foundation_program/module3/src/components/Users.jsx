export default function Users({ user, age }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>hello users</p>
      {`${user} ${age}`}
    </div>
  );
}
