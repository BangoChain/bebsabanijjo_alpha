pipeline {
  agent any

  environment {
    IMAGE_NAME = "bangochain/bb-presentation"
    DOCKER_CREDENTIALS = credentials('dockerhub-credentials')
    REMOTE_HOST = 'root@69.62.85.8'
    INFRA_PATH = '/opt/infrastructure'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build & Tag Docker Image') {
      steps {
        script {
          def tag = env.BRANCH_NAME == 'main' ? 'latest' : 'qa'
          sh "docker build -t $IMAGE_NAME:$tag ."
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        script {
          def tag = env.BRANCH_NAME == 'main' ? 'latest' : 'qa'
          sh "echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin"
          sh "docker push $IMAGE_NAME:$tag"
        }
      }
    }

  }
}
