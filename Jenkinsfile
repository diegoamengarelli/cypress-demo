pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/QA/**")
        choice(name: "Browser", choices: ['chrome', 'firefox', 'electron'])
    }

    options { ansiColor('css') }

    stages{
        stage('Build'){
            steps{
                echo "Building application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'mochawesome-report/', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: 'test 1', useWrapperFileDirectly: true])
        }
    }
}