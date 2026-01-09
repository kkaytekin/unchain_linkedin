# Unchain LinkedIn Firefox Extension

A Firefox extension that removes the LinkedIn news feed to help you stay focused and productive.

## Installation

### Option 1: Temporary Add-on (Recommended for Development)
1. Open Firefox
2. Navigate to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from the `firefox/src/` directory
6. Extension will be automatically removed when Firefox closes

### Option 2: Install .xpi Package

**⚠️ Important**: Unsigned .xpi files only work in **Firefox Developer Edition**, **Nightly**, or **ESR** versions. Standard Firefox will reject unsigned extensions.

**For Developer Edition/Nightly/ESR:**
1. Download `unchain_linkedin.xpi` from the `firefox/` directory
2. Go to `about:config` → set `xpinstall.signatures.required` to `false`
3. Go to `about:addons`
4. Click the gear icon → "Install Add-on From File"
5. Select the `.xpi` file
6. Extension persists across browser restarts

**For Standard Firefox:**
- Use Option 1 (Temporary Add-on) instead
- Or sign the extension through [addons.mozilla.org](https://addons.mozilla.org/developers/)

## Development & Updates

### For Temporary Add-ons
- Edit files in `firefox/src/`
- Changes are picked up automatically - just refresh the LinkedIn page
- No need to reload the extension

### For Installed .xpi
- Make changes in `firefox/src/`
- Rebuild the package: `cd firefox/src && zip -r ../unchain_linkedin.xpi manifest.json content.js`
- Remove old extension from `about:addons`
- Install the new `.xpi` file

## Automated Builds

A GitHub Action automatically updates the `.xpi` file when changes are detected in `firefox/src/`. The action:
- Detects changes in the source files
- Rebuilds the `.xpi` package
- Creates a new release with the updated extension
- Uses Git tags for versioning to avoid commit loops

## How it works

- Automatically detects LinkedIn feed pages (`linkedin.com/feed/*` and `linkedin.com/`)
- Removes news feed elements using multiple CSS selectors
- Replaces the feed area with a clean message
- Uses MutationObserver to handle dynamic content loading
- Runs periodic checks to ensure the feed stays hidden

## Files

- `manifest.json` - Extension configuration
- `content.js` - Content script that removes the news feed
- `README.md` - This file
- `../unchain_linkedin.xpi` - Packaged extension for installation

The extension runs automatically when you visit LinkedIn and continuously monitors for feed content to remove.