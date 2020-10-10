$App = 'tekkenthuuug/csg'
$Version = Read-Host -Prompt 'Which version you deploying?'
Write-Host "Deploying version to $($App):$($Version)"

docker build -t "$($App):$($Version)" .
docker push "$($App):$($Version)"

Write-Host "SSHing..."
ssh root@207.154.212.51 "docker pull $($App):$($Version) && docker tag $($App):$($Version) dokku/api:$Version && dokku tags:deploy api $Version"