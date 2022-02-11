pipeline {
  agent any
  
  tools {nodejs "NodeJS"}
  
  
  stages {
    
    stage ('Install') {
      steps {
        bat 'npm install'
        bat 'npm install -g angular-cli'
      }
    }
    stage ('Build') {
      steps {
        bat 'ng build'
      }
    }
  }  
}
