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

    stage('Deploy to VPS via SSH') {
      steps {
        script {
          def envType = env.BRANCH_NAME == 'main' ? 'prod' : 'qa'
          sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'bash $INFRA_PATH/deploy.sh $envType'"
        }
      }
    }
  }
}
