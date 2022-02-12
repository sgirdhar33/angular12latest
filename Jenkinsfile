import jenkins.model.Jenkins

def remote = [:]
remote.name = 'devserver'
remote.host = '20.127.134.213'
remote.user = 'Saurav'
remote.allowAnyhosts = true

pipeline {
  agent any
  
  tools {nodejs "NodeJS"}
  
  
  stages {
    
    stage ('Install') {
      steps {
        bat 'npm install'
        bat 'npm install -g @angular/cli'
      }
    }
    stage ('Build') {
      steps {
        bat 'ng build'
      }
    }
    stage ('Deploy') {
      steps{
        withCredentials([usernamePassword(credentialsId: '6b53c70e-ed39-4fb9-a6fc-dcdd3ba5cca8', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) 
        {
          remote.password = "$PASSWORD"
        /*bat '"C:\\Program Files\\git\\usr\\bin\\scp.exe" -i "C:\\Users\\Saurav\\.ssh\\id_rsa" C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Angular12\\dist\\angular12\\3rdpartylicenses.txt Saurav@40.71.189.81:/usr/'
        bat '"C\\Program Files\\git\\usr\\bin\\ssh.exe" -i "C:\\Users\\Saurav\\.ssh\\id_rsa" Saurav@40.71.189.81'*/
        sshPut remote: remote, from: 'dist/angular12', into: '/usr/Angular12/'
        }
      }
    } 
  }
}
