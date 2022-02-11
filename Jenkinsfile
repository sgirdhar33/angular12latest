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
        writeFile file: '/usr/Angular12/angular', text: 'ls -lrt'
        sshPut remote: remote, from: '/usr/Angular12/angular', into: '/bin'
      }
    }
  }  
}
