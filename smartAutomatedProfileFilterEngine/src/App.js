import React, { useState } from 'react';
import AddProfile from './AddProfile.js'
import Admin from './AdminComponents/Admin.js'
import ProfileSubmitted from './ProfileSubmitted.js'
import AutomaticProfileParserService  from './APICalls/ApiCall.js'


    const ApplicantProfilePage = () => {
        const [isSubmitted, setIsSubmitted] = useState(false)
        const [applicantID, setApplicantID] = useState()

        function handleSubmission(profile) {
            AutomaticProfileParserService.saveUserProfile(profile)
                .then(res => {
                    setApplicantID(res.applicantId)
                    console.log(res)
                    if(res.applicantId != null) {
                        setIsSubmitted(true)
                        AutomaticProfileParserService.saveDocs(profile, res.applicantId)
                    }
                })
        }
        return(

            <div>
            {isSubmitted === false &&
                <AddProfile onSubmit= {handleSubmission}/>
            }
            {
                isSubmitted === true && <ProfileSubmitted id = {applicantID}/>
            }
            </div>

        )
    }

    const AdminPage = () => {
        return(
            <div>
                <Admin/>
            </div>

        )
    }


export {ApplicantProfilePage, AdminPage }