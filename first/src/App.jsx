import Button from "./componets/button.jsx";


function App(){
    return (
      <>
          <div>

              <div className='flex justify-center items-center  flex-col w-full h-screen mt-[20px] sm:mt-[0px] '>
                  <div className='flex items-start flex-col w-3/4'>
                      <h1 className="font-bold text-4xl item-start text">
                          No ads. No problems.
                      </h1>

                      <p>your privacy stays yours. we don't still your data or target you with ads. Ever  </p>






                      <div className='grid sm:grid-cols-2 gap-4 mt-5'>

                          <div className='flex justify-start items-end mb-0 sm:mb-20' >

                              <Button buttonName='GET STARTED' />

                          </div>


                          <div >

                              <h3>We do things differently  </h3>
                              <p>
                                  Medium is not like any other platform on the internet. <br/>
                                  <span className='bg-green-200'>Our sole purpose is to help you find compelling ideas, <br/> knowledge, and perspectives.</span>
                                  We don't serve ads—we <br/> serve you, the curious reader who loves to learn new <br/> things. Medium is home to thousands of independent <br/> voices, and we combine humans and technology to find <br/> the best reading for you-and filter out the rest.

                              </p>

                          </div>

                      </div >

                  </div>













              </div>




          </div>

      </>
    )

}


export default App




