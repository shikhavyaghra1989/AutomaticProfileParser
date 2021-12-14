export default function validateInput(values) {
    console.log(values)
    let isValid = true;
    let errors = {
                   name: '',
                   emailId: '',
                   mobileNumber: '',
                   professionalExperiences: [],
                   educationalQualifications: [],
                   certifications: [],
                   applicantSkills: []
                 }

    if(!values.name.trim()){
        errors.name = "Username required"
        isValid = false
    }

    if(!values.emailId){
        errors.emailId = "Email required"
        isValid = false
    } else if(!/\S+@\S+\.\S+/.test(values.emailId)){
        errors.emailId = "Email address is invalid"
        isValid = false
    }

    var pattern = new RegExp(/^[0-9\b]+$/);
    if(!values.mobileNumber){
            errors.mobileNumber = "Contact number required"
            isValid = false
    }else if(!pattern.test(values.mobileNumber)){
             errors.mobileNumber = "Contact number is invalid"
             isValid = false
    }

    if( values.professionalExperiences.length > 0) {
         values.professionalExperiences.forEach(function (item, idx) {
                const errorItem = {
                      title: "",
                      employementType: "",
                      companyName: "",
                      location: "",
                      startDate: "",
                      endDate: "",
                      industry: ""
                };

               if( errors.professionalExperiences.length > 0) {
                   if(errors.professionalExperiences.includes(idx)) {

                        if(item.companyName != null && !item.startDate){
                            errors.professionalExperiences[idx] = {
                              ...errors.professionalExperiences[idx],
                              startDate: "Start date of professional experience is required"
                            };
                            isValid = false
                        }

                        if(item.companyName != null && !item.workingCurrently && !item.endDate){
                            errors.professionalExperiences[idx] = {
                              ...errors.professionalExperiences[idx],
                              endDate: "End date of professional experience is required"
                             };
                             isValid = false
                        }
                   } else {
                        errors.professionalExperiences.splice(idx, 0, errorItem);

                        if(item.companyName != null && !item.startDate){
                            errors.professionalExperiences[idx] = {
                                ...errors.professionalExperiences[idx],
                                startDate: "Start date of professional experience is required"
                            };
                            isValid = false
                        }

                        if(item.companyName != null && !item.workingCurrently && !item.endDate){
                                errors.professionalExperiences[idx] = {
                                  ...errors.professionalExperiences[idx],
                                  endDate: "End date of professional experience is required"
                                 };
                                 isValid = false
                        }

                   }
               } else {
                    errors.professionalExperiences.push(errorItem);

                    if(item.companyName != null && !item.startDate){
                        errors.professionalExperiences[idx] = {
                          ...errors.professionalExperiences[idx],
                          startDate: "Start date of professional experience is required"
                        };
                        isValid = false
                    }

                    if(item.companyName != null && !item.workingCurrently && !item.endDate){
                        errors.professionalExperiences[idx] = {
                          ...errors.professionalExperiences[idx],
                          endDate: "End date of professional experience is required"
                        };
                        isValid = false
                    }

               }


            });
    }

    if( values.applicantSkills.length > 0) {
             values.applicantSkills.forEach(function (item, idx) {
                    const errorItem = {
                            skillName: "",
                            rate: "",
                            workedProfessionally: 0,
                            quizRating: 0,
                            takenQuiz: 0
                          };

                   if( errors.applicantSkills.length > 0) {
                       if(errors.applicantSkills.includes(idx)) {
                            if(item.takenQuiz && item.quizRating <= 5 && item.rate == 10){
                                errors.applicantSkills[idx] = {
                                  ...errors.applicantSkills[idx],
                                  rate: "Rate 10 is invalid if quiz score is less than 6"
                                };
                                isValid = false
                            }
                       } else {
                            errors.applicantSkills.splice(idx, 0, errorItem);

                            if(item.takenQuiz && item.quizRating <= 5 && item.rate == 10){
                                errors.applicantSkills[idx] = {
                                  ...errors.applicantSkills[idx],
                                  rate: "Rate 10 is invalid if quiz score is less than 6"
                                };
                                isValid = false
                            }
                       }
                   } else {
                        errors.applicantSkills.push(errorItem);

                        if(item.takenQuiz && item.quizRating <= 5 && item.rate == 10){
                            errors.applicantSkills[idx] = {
                              ...errors.applicantSkills[idx],
                              rate: "Rate 10 is invalid if quiz score is less than 6"
                            };
                            isValid = false
                        }

                   }


                });
        }

    if( values.educationalQualifications.length > 0) {
                 values.educationalQualifications.forEach(function (item, idx) {
                        const errorItem = {
                                school: "",
                                degree: "",
                                fieldOfStudy: "",
                                location: "",
                                startDate: "",
                                endDate: "",
                                coursesTaken: "",
                                transcriptFile: "",
                                gpa: ""
                        };

                       if( errors.educationalQualifications.length > 0) {
                           if(errors.educationalQualifications.includes(idx)) {
                                if(item.degree.trim() && !item.tillDate && !item.endDate){
                                    errors.educationalQualifications[idx] = {
                                      ...errors.educationalQualifications[idx],
                                      endDate: "End date of educational qualification is required"
                                     };
                                     isValid = false
                                }


                                if(item.degree && (!item.gpa ||item.gpa=== 0)){
                                    errors.educationalQualifications[idx] = {
                                      ...errors.educationalQualifications[idx],
                                      gpa: "GPA is required"
                                     };
                                     isValid = false
                                }

//                                if(item.gpa){
//                                    if(!item.gpa<=4){
//                                        errors.educationalQualifications[idx] = {
//                                          ...errors.educationalQualifications[idx],
//                                          gpa: "Please enter a valid GPA less than 4 and numeric"
//                                         };
//                                         isValid = false
//                                    }
//                                }
                           } else {
                                errors.educationalQualifications.splice(idx, 0, errorItem);
                                if(item.degree && !item.tillDate && !item.endDate){
                                    errors.educationalQualifications[idx] = {
                                      ...errors.educationalQualifications[idx],
                                      endDate: "End date of educational qualification is required"
                                     };
                                     isValid = false
                                }
                                if(item.degree && (!item.gpa ||item.gpa=== 0)){
                                    errors.educationalQualifications[idx] = {
                                      ...errors.educationalQualifications[idx],
                                      gpa: "GPA is required"
                                     };
                                     isValid = false
                                }

//                                if(item.gpa){
//                                    if(!item.gpa<=4){
//                                        errors.educationalQualifications[idx] = {
//                                          ...errors.educationalQualifications[idx],
//                                          gpa: "Please enter a valid GPA less than 4 and numeric"
//                                         };
//                                         isValid = false
//                                    }
//                                }

                           }
                       } else {
                            errors.educationalQualifications.push(errorItem);
                            if(item.degree && !item.tillDate && !item.endDate){
                                errors.educationalQualifications[idx] = {
                                  ...errors.educationalQualifications[idx],
                                  endDate: "End date of educational qualification is required"
                                 };
                                 isValid = false
                            }

                            if(item.degree && (!item.gpa ||item.gpa=== 0)){
                                errors.educationalQualifications[idx] = {
                                  ...errors.educationalQualifications[idx],
                                  gpa: "GPA is required"
                                 };
                                 isValid = false
                            }

//                            if(item.gpa){
//                                if(!item.gpa<=4){
//                                    errors.educationalQualifications[idx] = {
//                                      ...errors.educationalQualifications[idx],
//                                      gpa: "Please enter a valid GPA less than 4 and numeric"
//                                     };
//                                     isValid = false
//                                }
//                            }

                       }


                    });
            }

    return {errors, isValid}
}
