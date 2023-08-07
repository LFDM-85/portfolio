pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/LFDM-85/portfolio', branch: 'main')
      }
    }

    stage('Logs') {
      parallel {
        stage('Logs') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Run WebSite') {
          steps {
            sh '''npm install --global yarn

yarn
yarn run'''
          }
        }

      }
    }

  }
}