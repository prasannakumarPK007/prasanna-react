import './Assetcss/css/mj.css'
const App = () => {
  return (
      <>
          <form className="all">
              <h1 className='mt'>Forms</h1>
              <label>Name:</label><br/>
              <input type="text" name="name"/><br/>
              <label>PhoneNumber:</label><br/>
              <input type="number" ></input><br/>
              <label>Age:</label><br/>
              <input type="number"></input><br/>
              <label>Email:</label><br/>
              <input type="email" ></input><br/>
             <button className="mm">Submit</button>
          </form>
      </>
  )
}
export default App;