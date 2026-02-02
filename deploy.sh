#!/bin/bash

echo "🚀 Deploying 3Novator Tech Website..."

# Step 1: Clean build
echo "📦 Cleaning previous build..."
rm -rf dist

# Step 2: Build project
echo "🔨 Building project..."
npm run build

# Step 3: Verify assets
echo "🔍 Verifying assets..."
if [ -f "dist/logo.png" ]; then
    echo "✅ Logo found"
else
    echo "❌ Logo missing"
    exit 1
fi

if [ -f "dist/video.mp4" ]; then
    echo "✅ Video found"
else
    echo "❌ Video missing"
    exit 1
fi

if [ -d "dist/projects" ] && [ "$(ls -A dist/projects)" ]; then
    echo "✅ Project images found"
else
    echo "❌ Project images missing"
    exit 1
fi

# Step 4: Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
