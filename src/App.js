
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import database from './firebase';
import "./card.css";




function App() {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);

  // Push Function
  const Push = () => {
    database.ref().set({
      A: first,
      B: second,
      C: third,
      D: fourth

    }).catch(alert);
  }


  return (
    <>
      <div class="protected content bg-indigo">

        <p class="text-center"> LET'S AUTOMATE YOUR HOME WITH</p>
        <div class="container py-0 is-big section-cta to-reveal">
          <div class="container-fluid fancy-border">
            <div class="row">
              <div class="col-lg-12  align-middle black-bg">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center   align-middle">

                      <a href='/#'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        W E B - I O T
                      </a>

                    </div>
                  </div>
                </div>
                <div class="container">

                  <div class="row">
                    <div class="col-md-3 col-sm-6">
                      <div class="card border-success mb-4">
                        <div class="card-header">Bedroom</div>
                        <div class="card-body text-success">
                          <h5 class="card-title">TV</h5>
                          <div class="d-flex justify-content-center">

                            <span class="material-symbols-outlined">
                              desktop_windows
                            </span>
                          </div>

                          <div class="d-flex justify-content-center">




                          <input type="checkbox" class="toggle" checked={first}
                              onChange={e => setfirst(e.target.checked)} />
                            <div class="switch">
                              <div class="inner">
                                <div class="disc" id='1st'></div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>



                    <div class="col-md-3 col-sm-6">
                      <div class="card border-light mb-4">
                        <div class="card-header">Kitchen</div>
                        <div class="card-body">
                          <h5 class="card-title">Fridge</h5>
                          <div class="d-flex justify-content-center">

                            <span class="material-symbols-outlined">
                              kitchen
                            </span>
                          </div>


                          <div class="d-flex justify-content-center">
                            <input type="checkbox" class="toggle" checked={second}
                              onChange={e => setsecond(e.target.checked)} />
                            <div class="switch">
                              <div class="inner">
                                <div class="disc" id='2nd'></div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                      <div class="card border-info mb-4">
                        <div class="card-header">Drawing Room</div>
                        <div class="card-body text-info">
                          <h5 class="card-title">Light</h5>
                          <div class="d-flex justify-content-center">
                            <span class="material-symbols-outlined">
                              tips_and_updates
                            </span>
                          </div>


                          <div class="d-flex justify-content-center">
                            <input type="checkbox" class="toggle" checked={third}
                              onChange={e => setthird(e.target.checked)} />
                            <div class="switch">
                              <div class="inner">
                                <div class="disc" id='3rd'></div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                      <div class="card border-danger fancy-border mb-4">
                        <div class="card-header">Bedroom</div>
                        <div class="card-body text-danger">
                          <h5 class="card-title">Fan</h5>
                          <div class="d-flex justify-content-center">
                            <span class="material-symbols-outlined">
                              mode_fan
                            </span>
                          </div>

                          <div class="d-flex justify-content-center">
                            <input type="checkbox" class="toggle" checked={fourth}
                              onChange={e => setfourth(e.target.checked)} />
                            <div class="switch">
                              <div class="inner">
                                <div class="disc" id="4th"></div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="container">
                  <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center pb-2 align-middle">


                      <button class="custom-btn btn-12" onClick={Push}><span>Click!</span><span>Apply changes</span></button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <main role="main">





        </main>



      </div>


    </>

  );
}

export default App;

