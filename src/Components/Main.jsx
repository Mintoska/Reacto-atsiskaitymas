const Main = () => {
  return ( 
    <main>
    <h1>Main</h1>
    {jsonData.map((item) => (
      <div key={item.id} className="card">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ))}
  </main>
   );
}
 
export default Main;