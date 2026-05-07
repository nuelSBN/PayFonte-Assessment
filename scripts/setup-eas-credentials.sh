#!/bin/bash

# EAS Credentials Setup Script
# This script helps configure build credentials for EAS

set -e

echo "🔐 EAS Build Credentials Setup"
echo "=============================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if eas-cli is installed
if ! command -v eas &> /dev/null; then
    echo -e "${RED}❌ EAS CLI not found!${NC}"
    echo "Install it with: npm install -g eas-cli"
    exit 1
fi

# Check if user is logged in
echo "Checking Expo authentication..."
if ! eas whoami &> /dev/null; then
    echo -e "${YELLOW}⚠️  Not logged into Expo${NC}"
    echo "Run: eas login"
    exit 1
fi

echo -e "${GREEN}✅ Authenticated with Expo${NC}"
echo ""

# Menu for platform selection
echo "Select platforms to configure:"
echo "1) Android only"
echo "2) iOS only"
echo "3) Both (Android & iOS)"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        PLATFORMS=("android")
        ;;
    2)
        PLATFORMS=("ios")
        ;;
    3)
        PLATFORMS=("android" "ios")
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🔧 Configuring credentials..."
echo ""

# Configure credentials for each platform
for platform in "${PLATFORMS[@]}"; do
    echo "Configuring ${platform^}..."
    echo "================================"
    
    case $platform in
        android)
            echo ""
            echo "Android credentials setup:"
            echo "1. You'll need a keystore file (or create a new one)"
            echo "2. Follow the prompts to create/upload your keystore"
            echo ""
            eas credentials configure-build --platform android
            ;;
        ios)
            echo ""
            echo "iOS credentials setup:"
            echo "1. You'll need an Apple Developer account"
            echo "2. Follow the prompts for certificates and provisioning profiles"
            echo ""
            eas credentials configure-build --platform ios
            ;;
    esac
    
    echo ""
    echo -e "${GREEN}✅ ${platform^} credentials configured${NC}"
    echo ""
done

echo ""
echo "================================"
echo -e "${GREEN}✅ All credentials configured!${NC}"
echo ""
echo "Next steps:"
echo "1. Add EXPO_TOKEN to GitHub secrets (Settings → Secrets and variables → Actions)"
echo "2. Commit and push your code to GitHub"
echo "3. Run: eas build --platform all --profile production"
echo ""
