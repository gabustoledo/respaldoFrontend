pipeline {
    agent any

    tools{
        gradle 'gradle-6.8.3'
    }

    stages {

        stage('SonarQube'){
            steps{
                dir("/var/lib/jenkins/workspace/frontend/frontend"){
                    withSonarQubeEnv('sonarcloud_frontend_gabriel'){
                        sh 'chmod +x ./gradlew'
                        sh './gradlew sonarqube'
                    }
                }
            }
        }
    }
}