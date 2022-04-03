import React from 'react';
import { Link } from "react-router-dom";
import hospital from "./images/hospital.png";
import patient from "./images/patient.jpg";
import records from "./images/records.jpg";

const Home = () => {
    return ( // user is authenticated
      <div>
        <div class="md:grid md:grid-cols-2 items-center">
            <img src={records} alt="woman working on hospital computer" width="100%" class="items-center align-middle" />
            <div>
                <h1 class="text-2xl font-bold m-5">Your quickest way to securely share sensitive documents...</h1>
                <p class="m-5 text-xl">Now you can share medical documents with other hospitals at the snap of a finger. We use proprietary software to securely transfer patient information between hospitals. Many times hospitals are not able to see a patient due to inaccess to a patient's medical history. This can delay treatment and worsen the condition. We allow you do share that information at the click of a button.</p>
            </div>
        </div>
        <div class="md:grid md:grid-cols-2 items-center">
            <div>
                <h1 class="text-2xl font-bold m-5">How we do it...</h1>
                <p class="m-5 text-xl">We use a proprietary software called Botdoc to share documents from one hospital to another. With extremely confidential and important information on the line, Botdoc spends tons of resources to ensure the data transfer is even more secure than Fort Knox.</p>
            </div>
            <img src={hospital} alt="woman working on hospital computer" width="100%" class="items-center align-middle" />
        </div>
        <div class="md:grid md:grid-cols-2 items-center">
          <img src={patient} alt="woman working on hospital computer" width="100%" class="items-center align-middle" />
            <div>
                <h1 class="text-2xl font-bold m-5">Who we are...</h1>
                <p class="m-5 text-xl">We are just a group of college students changing the world one confidentially, shared document at a time.</p>
            </div>
        </div>
      </div>
    )
}

export default Home
