import jenkins.model.Jenkins

def remote = [:]
remote.name = 'devserver'
remote.host = 'devserver.tyvfdx01quee1cf1ytggu2itxc.bx.internal.cloudapp.net'
remote.user = 'Saurav'
remote.password = 'Venuka@20221987'
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
      steps {
        bat '"C:\\Program Files\\git\\usr\\bin\\scp.exe" -i "C:\\Users\\Saurav\\.ssh\\id_rsa" C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Angular12\\dist\\angular12\\3rdpartylicenses.txt Saurav@40.71.189.81:/usr/'
        bat '"C\\Program Files//git\\usr\\bin\\ssh.exe" -i "C:\\Users\\Saurav\\.ssh\\id_rsa" Saurav@40.71.189.81'
      }
    }
  }  
}
