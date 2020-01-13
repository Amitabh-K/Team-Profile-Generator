function addCards(response, roleQ) {
    if (response.role === 'Manager') {
      const officenumber = roleQ.officenumber;
      //const manager = new Manager(response.name, response.id, response.email, officenumber);
      //console.log(manager);
      const managerCard =
        `<div class="col-4">
                <div class="card bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white">
                        <h5 class="card-title">${response.name}</h5>
                        <h5 class="card-subtitle">Manager</h5>
                    </div>
                    <div class="card-body bg-light">
                        <div class="bg-white m-3">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${response.id}</li>
                                <li class="list-group-item">Email: ${response.email}</span></li>
                                <li class="list-group-item">Office Number: ${officenumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
  
      try {
        fs.appendFileSync("./output/main.html", `${managerCard}`);
      }
      catch {
        console.error("Unable to write to engineer file.");
      };
    }

    else if (response.role === 'Engineer') {
        const github = roleQ.github;
        //const engineer = new Engineer(response.name, response.id, response.email, github);
        //console.log(engineer);
        const engineerCard =
          `<div class="col-4">
                  <div class="card bg-primary mb-3" style="max-width: 18rem;">
                      <div class="card-header text-white">
                          <h5 class="card-title">${response.name}</h5>
                          <h5 class="card-subtitle">Engineer</h5>
                      </div>
                      <div class="card-body bg-light">
                          <div class="bg-white m-3">
                              <ul class="list-group">
                                  <li class="list-group-item">ID: ${response.id}</li>
                                  <li class="list-group-item">Email: ${response.email}</span></li>
                                  <li class="list-group-item">Github: ${github}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>`;
    
        try {
          fs.appendFileSync("./output/main.html", `${engineerCard}`);
        }
        catch {
          console.error("Unable to write to engineer file.");
        }
      }

      else if (response.role === 'Intern') {
        const school = roleQ.school;
        //const intern = new Intern(response.name, response.id, response.email, school);
        //console.log(intern);
        const engineerCard =
          `<div class="col-4">
                  <div class="card bg-primary mb-3" style="max-width: 18rem;">
                      <div class="card-header text-white">
                          <h5 class="card-title">${response.name}</h5>
                          <h5 class="card-subtitle">Intern</h5>
                      </div>
                      <div class="card-body bg-light">
                          <div class="bg-white m-3">
                              <ul class="list-group">
                                  <li class="list-group-item">ID: ${response.id}</li>
                                  <li class="list-group-item">Email: ${response.email}</span></li>
                                  <li class="list-group-item">School: ${school}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>`;
    
        try {
          fs.appendFileSync("./output/main.html", `${engineerCard}`);
        }
        catch {
          console.error("Unable to write to engineer file.");
        }
      }
    }

    module.exports = addCards;