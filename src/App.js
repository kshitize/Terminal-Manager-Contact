import React, { useState }  from 'react';
import "./App.css"

function App() {

  const [location, setLocation] = useState();
  const [dataJson, setDataJson] = useState();
  const [loading,setLoading] = useState(false);



  const searchGoogleSheet = async () => {
    setLoading(true);
    const url =  `https://sheetdb.io/api/v1/n7cvhozidyj7d/search?Location=${location}`
    //  console.log(dateFormat)
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setLoading(false);
    if(data.length > 0){
      setDataJson(data);
      
    }else{
      setDataJson();
    }
  };

  
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary sec">
        <div className="container-fluid justify-content-center fw-bold">
          <a className="navbar-brand" href="#">
            Terminal Manager Contact
          </a>
        </div>
      </nav>

      <section className="searchDateBox">
        <div className="container">
        <form>
            <div className="row form-group">
                <div className="col-sm-4">
                    {/* <div className="input-group date" id="datepicker"> */}
                        <input placeholder='Airport Name...' onChange={e=>setLocation(e.target.value)} type="text" className="form-control"/>
                
                    {/* </div> */}
                </div>
                <div className="col-sm-4">
                <button
            onClick={searchGoogleSheet}
            disabled={loading}
            type="button"
            className="btn btn-primary"
          >
            Check Status
          </button>
                </div>
            </div>
            
        </form>        
        </div>
      </section>




      <section className="table">
        {/* <div className="container"> */}
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">S.No.</th>
      {/* <th scope="col">Location</th> */}
      <th scope="col">Airport</th>
      <th scope="col">Contact</th>
      <th scope="col">Remarks</th>
      
    </tr>
  </thead>
  {dataJson && <tbody>
  {Object.keys(dataJson).map((id,index)=>{
      return(
        <tr key={id}>
          <th scope="row">{index+1}</th>
          {/* <td>{dataJson[id]["Location"]}</td> */}
          <td>{dataJson[id]["Airport Name"]}</td>
          <td>{dataJson[id]["Contact"]}</td>
          <td>{dataJson[id]["Remarks"]}</td>
        </tr>
      )
    })}
  </tbody>}
</table>
        {/* </div> */}
      </section>

      <nav className="navbar navbar-expand-lg bg-body-tertiary sec">
        <div className="container-fluid justify-content-center fw-bold">
          <a className="navbar-brand" href="#">
            Made By Kshitize Dimri
          </a>
        </div>
      </nav>

      
    </div>
  );
}

export default App;
