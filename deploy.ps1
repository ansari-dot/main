# Deploy script for 3Novator Tech Website

Write-Host "Deploying 3Novator Tech Website..." -ForegroundColor Green

# Step 1: Clean build
Write-Host "Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
}

# Step 2: Build project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

# Step 3: Verify assets
Write-Host "Verifying assets..." -ForegroundColor Yellow

if (Test-Path "dist/logo.png") {
    Write-Host "Logo found" -ForegroundColor Green
} else {
    Write-Host "Logo missing" -ForegroundColor Red
    exit 1
}

if (Test-Path "dist/video.mp4") {
    Write-Host "Video found" -ForegroundColor Green
} else {
    Write-Host "Video missing" -ForegroundColor Red
    exit 1
}

if ((Test-Path "dist/projects") -and (Get-ChildItem "dist/projects" | Measure-Object).Count -gt 0) {
    Write-Host "Project images found" -ForegroundColor Green
} else {
    Write-Host "Project images missing" -ForegroundColor Red
    exit 1
}

# Step 4: Deploy to Vercel
Write-Host "Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "Deployment complete!" -ForegroundColor Green
