pipeline {
    agent any

    stages {
        stage('Checkout from GitHub') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sidverse07/Cake-Shop-Website.git'
            }
        }

        stage('Validate Files') {
            steps {
                powershell '''
                    if (!(Test-Path "index.html")) {
                        throw "index.html is missing"
                    }
                    if (!(Test-Path "style.css")) {
                        throw "style.css is missing"
                    }
                    if (!(Test-Path "script.js")) {
                        throw "script.js is missing"
                    }
                    Write-Host "All website files are present."
                '''
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Cake Shop website validation completed successfully.'
            }
        }
    }
}
