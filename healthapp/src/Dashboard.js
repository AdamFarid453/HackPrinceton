import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20 mb-20">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Transfer Patient Data</h2>
        
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Patient's Full Nume</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Hospital Email</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>  
                </div>

                <div>
                <div class="flex items-center justify-center mt-8 mb-8">
                <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-purple-600 rounded cursor-pointer hover:bg-purple-600">Import Patient Data from Hospital Portal</a>
                </div>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Required Machines</label>
                    <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>
                </div>

                <div class="flex justify-center">
                <div class="mb-3 w-96">
                  <label for="formFileMultiple" class="form-label inline-block mb-2 text-gray-200">Upload Patient Files</label>
                  <input class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple></input>
                </div>
              </div>

              
              {/*<script type="text/javascript">
                const checkbox = document.getElementById("flexCheckIndeterminate");
                checkbox.indeterminate = true;
                </script>*/}

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Administrative Notes</label>
                    <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>
                </div>
            </div>

            <div class="flex justify-end mt-6 mr-8">
                <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Send</button>
            </div>
        </form>
    </section>
      </div>
    </div>
  )
}

export default Dashboard
