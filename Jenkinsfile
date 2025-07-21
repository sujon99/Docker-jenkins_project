pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker images
                    sh 'docker-compose build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests here
                    // For example, you could run Django tests or React tests
                    echo 'Running tests...'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the application
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
