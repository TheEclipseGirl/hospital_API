# Hospital_API

### An Api for covid-19 patients for doctors.

## Dependencies

  #### using this command::
     npm install
     
## Introduction 

We’ve designed an API for the doctors of a Hospital which has been
allocated by the govt for testing and quarantine + well being of COVID-19
patients
### There are be 2 types of Users
  #### Doctors
  #### Patients
### Doctors can log in
### Each time a patient visits, the doctor will follow 2 steps
  #### Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
  #### After the checkup, create a Report
### Patient Report will have the following fields
  #### Created by doctor
  #### Status (You can use enums if you want to):
  #### Can be either of: [Negative, Travelled-Quarantine,Symptoms-Quarantine, Positive-Admit]
  #### Date
  
  ## Required Routes
  
 1. /doctors/register → with username and password
 2. /doctors/login → returns the JWT to be used
 3. /patients/register
 4. /patients/create_report/:id
 5. /patients/:id/all_reports → List all the reports of a patient oldest to latest
  6. /reports/:status → List all the reports of all the patients filtered by a specific
    status
   
  ## Use This command to run the Server:
   ### npm start
    

    
   
