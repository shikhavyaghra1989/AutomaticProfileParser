export function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
          //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
          var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

          var CSV = '' + '\n';

          if (ShowLabel) {
            var row = "";

            for (var index in arrData[0]) {
              row += index + ',';
            }

            row = row.slice(0, -1);

            CSV += row + '\r\n';
          }
          for (var i = 0; i < arrData.length; i++) {
            var row = "";
            for (var index in arrData[i]) {
             if(index === 'education') {
                var education = ''
                arrData[i][index].forEach(ed => {
                    education += (ed.degree + '(' + ed.gpa +') \n')
                })
                row += '"' + education + '",';
              } else if (index === 'experience'){
                var experience = ''
                arrData[i][index].forEach(ed => {
                    experience += (ed.companyName + '(' + ed.years +') \n')
                })
                row += '"' + experience + '",';
              } else if (index === 'skills'){
                var skills = ''
                arrData[i][index].forEach(ed => {
                    skills += (ed.name + '(' + ed.rating +') \n')
                })
                row += '"' + skills + '",';
              } else {
                row += '"' + arrData[i][index] + '",';
              }
            }

            row.slice(0, row.length - 1);

            //add a line break after each row
            CSV += row + '\r\n';
          }

          if (CSV == '') {
            alert("Invalid data");
            return;
          }
          var fileName = "Excel_";
          fileName += ReportTitle.replace(/ /g, "_");
          var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
          var link = document.createElement("a");
          link.href = uri;
          link.style = "visibility:hidden";
          link.download = fileName + ".csv";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }