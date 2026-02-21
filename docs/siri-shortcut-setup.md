# Siri Shortcut Setup for Action Manager

This guide explains how to set up a Siri Shortcut to capture actions via voice.

## How It Works

1. You say "Hey Siri, Add Action" (or your custom phrase)
2. Siri asks "What's the action?"
3. You dictate your action (e.g., "Call John about the tax documents by Friday")
4. Siri confirms and sends it to Action Manager
5. The action appears in your app, AI-parsed with suggested next steps

## Setup Instructions

### Step 1: Open Shortcuts App

1. Open the **Shortcuts** app on your iPhone
2. Tap the **+** button to create a new shortcut

### Step 2: Add Dictation Action

1. Tap **Add Action**
2. Search for "Dictate Text"
3. Select **Dictate Text**
4. Configure:
   - Stop Listening: **After Pause**
   - Language: Your preferred language

### Step 3: Add Confirmation (Optional but Recommended)

1. Tap **+** to add another action
2. Search for "Show Alert"
3. Select **Show Alert**
4. Set the title to: `Save this action?`
5. Set the message to: `Dictated Text` (tap and select the variable)
6. Enable **Show Cancel Button**

### Step 4: Add Web Request

1. Tap **+** to add another action
2. Search for "Get Contents of URL"
3. Select **Get Contents of URL**
4. Configure:
   - URL: `https://your-server.com/api/sources/siri`
     - For local testing: `http://your-local-ip:3001/api/sources/siri`
   - Method: **POST**
   - Headers:
     - Key: `Content-Type`
     - Value: `application/json`
   - Request Body: **JSON**
     - Add key: `text`
     - Value: Select `Dictated Text` variable

### Step 5: Add Response Confirmation

1. Tap **+** to add another action
2. Search for "Get Dictionary Value"
3. Select **Get Dictionary Value**
4. Set Key to: `message`
5. Get value from: `Contents of URL`

6. Tap **+** to add another action
7. Search for "Speak Text"
8. Select **Speak Text**
9. Set text to: `Dictionary Value`

### Step 6: Name and Configure

1. Tap the shortcut name at the top
2. Rename to: **Add Action**
3. Tap **Add to Siri**
4. Record your phrase: "Add Action" (or any phrase you prefer)

## Complete Shortcut Flow

```
1. Dictate Text
   └─> Stop listening: After Pause

2. Show Alert (Optional)
   └─> Title: "Save this action?"
   └─> Message: [Dictated Text]
   └─> Show Cancel Button: Yes

3. Get Contents of URL
   └─> URL: https://your-server.com/api/sources/siri
   └─> Method: POST
   └─> Headers: Content-Type: application/json
   └─> Body: {"text": "[Dictated Text]"}

4. Get Dictionary Value
   └─> Key: message
   └─> From: [Contents of URL]

5. Speak Text
   └─> Text: [Dictionary Value]
```

## Testing

### Local Testing (Development)

1. Find your Mac's local IP address:
   ```bash
   ipconfig getifaddr en0
   ```

2. Start the Action Manager backend:
   ```bash
   cd ActionMgr
   npm run dev
   ```

3. In your shortcut, use: `http://YOUR_LOCAL_IP:3001/api/sources/siri`

4. Make sure your iPhone and Mac are on the same WiFi network

### Production Testing

1. Deploy your backend to Railway/Render
2. Update the shortcut URL to your production domain
3. Ensure HTTPS is configured

## API Response

The `/api/sources/siri` endpoint returns:

```json
{
  "success": true,
  "actionId": 123,
  "container": "CANDIDATES",
  "confidence": 0.85,
  "message": "Created: Call John about the tax documents"
}
```

## Troubleshooting

### "Could not connect to server"
- Check that the URL is correct
- Ensure the server is running
- Verify your iPhone can reach the server (same network for local testing)

### "Request failed"
- Check the server logs for errors
- Verify the Content-Type header is set to `application/json`
- Ensure the request body format is correct

### Siri doesn't understand the phrase
- Re-record the Siri phrase in shortcut settings
- Try a simpler phrase like "New action"

## Tips

- Speak clearly and include relevant details (who, what, when)
- The AI will extract dates, people, and urgency from natural language
- You can say things like:
  - "Call John tomorrow about the proposal"
  - "Buy groceries before the weekend"
  - "Schedule dentist appointment for next month"
  - "Follow up with Sarah about the contract when she returns from vacation"

## Alternative: Share Sheet Shortcut

You can also create a shortcut that captures selected text:

1. Create new shortcut
2. Tap **ⓘ** > **Show in Share Sheet** > Enable
3. Add "Get Contents of URL" action (same as above)
4. Use `Shortcut Input` instead of `Dictated Text`

This allows you to select text in any app and share it to Action Manager.
