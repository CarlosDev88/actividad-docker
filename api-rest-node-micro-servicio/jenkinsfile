pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
                echo 'Estapa build no disponible'
            }
        }
        stage('Test') {
            steps {
                echo 'Estapa build no disponible'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d --build'
            }
        }
    }
}