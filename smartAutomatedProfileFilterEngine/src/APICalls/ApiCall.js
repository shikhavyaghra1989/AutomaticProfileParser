import axios from 'axios'
const PROFILE_SAVING_URL ="http://localhost:8080"

const api = axios.create({
    baseURL: PROFILE_SAVING_URL
})
class AutomaticProfileParserService{
      async saveUserProfile(profile){
        let result = []
        let request  = { applicant: profile}
        await api.post("/api/SaveProfile", request)
          .then(function (response) {
                result = Promise.resolve(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
        return  result
    }

    async saveDocs(profile, id){
        profile.certifications.forEach( async function (item) {
            let file = item.certificationFile;
            const formData = new FormData();
            formData.append('applicantId', id)
            formData.append('file',file)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            }
            await api.post("/files", formData, config)
                        .then(function (response) {console.log(response.responseMessage)})
                        .then((result) => {
                            console.log('Success:', result);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

        }
      )

      profile.educationalQualifications.forEach( async function (item) {
          let file = item.transcriptFile;
          const formData = new FormData();
          formData.append('applicantId', id)
          formData.append('file',file)
          const config = {
              headers: {
                  'content-type': 'multipart/form-data',
              }
          }
          await api.post("/files", formData, config)
                      .then(function (response) {console.log(response.responseMessage)})
                      .then((result) => {
                          console.log('Success:', result);
                      })
                      .catch((error) => {
                          console.error('Error:', error);
                      });

      }
    )
    }
    async getData(request) {
      let result = []
      await api.post('/api/FilterProfile', request)
          .then( response => {
              result =  Promise.resolve(response.data)
          })
          .catch(function (error) {
              console.log(error);
          });
      return result
    }
}

export default new AutomaticProfileParserService()