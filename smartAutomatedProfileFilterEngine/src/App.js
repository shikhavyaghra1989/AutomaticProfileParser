import React, { useState, useEffect } from 'react';
import AddProfile from './AddProfile.js'
import Admin from './AdminComponents/Admin.js'
import ProfileSubmitted from './ProfileSubmitted.js'
import AutomaticProfileParserService  from './APICalls/ApiCall.js'


    const ApplicantProfilePage = () => {
        const [isSubmitting, setIsSubmitting] = useState(false)
        const [isSubmitted, setIsSubmitted] = useState(false)
        const [applicantID, setApplicantID] = useState()


        function handleSubmission(profile) {
            setIsSubmitting(true)
            AutomaticProfileParserService.saveUserProfile(profile)
                .then(res => {
                    setApplicantID(res.applicantId)
                    console.log(res)
                    if(applicantID) {
                        AutomaticProfileParserService.saveDocs(profile, applicantID)
                    }
                })
            setIsSubmitted(applicantID != 0? true : false)
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