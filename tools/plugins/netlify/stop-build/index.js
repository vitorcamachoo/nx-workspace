module.exports = {
    onPreBuild: ({ utils }) => {
      const currentProject = process.env.PROJECT_NAME || 'application-1';
      const lastDeployedCommit = process.env.CACHED_COMMIT_REF;
      const latestCommit = 'HEAD';
      const projectHasChanged = projectChanged(
        currentProject,
        lastDeployedCommit,
        latestCommit
      );
      if (!projectHasChanged) {
        utils.build.cancelBuild(
          `Build was cancelled because ${currentProject} was not affected by the latest changes`
        );
      }
    }
  };
  
  function projectChanged(currentProject, fromHash, toHash) {
    const execSync = require('child_process').execSync;
    const getAffected = `npx nx affected:apps --silent --base=${fromHash} --head=${toHash} --plain`;
    const output = execSync(getAffected).toString();
    if(output.length == 0) return false
    const parsedOutput = output.replace('\n', '').split(' ') 

    //get the list of changed projects from the output
    if (parsedOutput.find(project => project === currentProject)) {
      return true;
    } else {
      return false;
    }
  }