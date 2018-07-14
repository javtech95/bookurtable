import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      return <div className="App">
          <header className="App-header">

              <nav className="navbar navbar-light bg-light">
                  <a className="navbar-brand" href="#">
                      <img src="./images/icons/jamon-serrano.png" className="d-inline-block align-top" alt=""/>

                  </a>
              </nav>
          </header>

          <div className="container">
              <div className="jumbotron">
                  <h1 className="text-center"><span className="title"/> booking.table</h1>
                  <hr/>
                  <h2 className="text-center">Feel like a regular before even walking through the door</h2>
                  <br/>
                  <div className="text-center">
                      <a href="/reserve">
                          <button type="button" className="btn btn-lg btn-success"><span
                              className=""/> Chat with a wine Liason
                          </button>
                      </a>
                      <br/>
                      <br/>
                      <a href="/reserve">
                          <button type="button" className="btn btn-lg btn-success"><span
                              className=""/> chat with our chefs
                          </button>
                      </a>


                  </div>
              </div>
              <div className='container'>
                  <div className='jumbotron'>
                      <section id="home-onepage-reservation" className="content-reservation-03">
                          <div className="container">
                              <div>
                                  <div className="col-content col-sm-10 col-md-8 col-lg-5">
                                      <h3> Any Allergies?</h3>

                                     <div>
                                         <select className="chose-people" name="chose-people">
                                             <option>None</option>
                                             <option>Shellfish</option>
                                             <option>Dairy</option>
                                             <option>Peppers</option>
                                             <option>Tomatoes</option>
                                             <option>Peanuts</option>
                                         </select>
                                     </div>
                                      <div>
                                          <select className="chose-people" name="chose-people">
                                              <option>None</option>
                                              <option>Shellfish</option>
                                              <option>Dairy</option>
                                              <option>Peppers</option>
                                              <option>Tomatoes</option>
                                              <option>Peanuts</option>
                                          </select>
                                      </div>
                                      <div>
                                          <select className="chose-people" name="chose-people">
                                              <option>None</option>
                                              <option>Shellfish</option>
                                              <option>Dairy</option>
                                              <option>Peppers</option>
                                              <option>Tomatoes</option>
                                              <option>Peanuts</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div className="col-content col-sm-10 col-md-8 col-lg-7">
                                      {/* title reservation 02 */}
                                      <div className="col-right-reservation-03 row">
                                          <div className="col-12 title-our-menu wow fadeInDown" data-wow-delay="0.5s">
                                              <h6>Reservation</h6>
                                              <h2>Book a table</h2>
                                              <p>
                                                  Here you can reserve a table for up to 6 Guest(bigger parties will need to be reserved over the phone)
                                              </p>
                                              {/*<p>*/}
                                                  {/*Here is a layout of our restaurant please let us know in the notes which area you would prefer to be seated. Keep in mind that some areas might not be available but dont worry if a table in your area becomes frees up close to your reservation we will save it for you until 5 minutes past your reserved time*/}
                                              {/*</p>*/}
                                          </div>
                                      </div>
                                      <form>
                                          <div className="col-right-reservation-03 row wow flipInX" data-wow-delay="1s">
                                              <div className="col-field-input left col-6">
                                                  <div> <h3> Guest</h3>
                                                      <select className="chose-people" name="chose-people">
                                                          <option>1 Guest</option>
                                                          <option>2 Guests</option>
                                                          <option>3 Guests</option>
                                                          <option>4 Guests</option>
                                                          <option>5 Guests</option>
                                                          <option>6+ Guests</option>
                                                      </select>
                                                  </div>
                                                  <div> <h3> Time</h3>
                                                      <select className="chose-time" name="chose-time">
                                                          <option>7:00 PM</option>
                                                          <option>8:00 PM</option>
                                                          <option>9:00 PM</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="col-field-input right col-6">
                                                  <div className="chose-calendar">
                                                      <input className="my-calendar" type="text" name="calender" />
                                                  </div>
                                                  <div className="btn-reservation-03">
                                                      <button className="btn-find-table">RESERVE A TABLE</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
              <footer className="footer">
                  <div className="container">
                      {/*<p><a href="/api/tables">API Table Link</a> | <a href="/api/wait">API Wait List</a> |*/}
                      {/*</p><h6 id="count"/>*/}
                      <p/>
                  </div>
              </footer>
          </div>

      </div>;
  }
}

export default App;
