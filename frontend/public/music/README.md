# Background Music Setup

To add background music to the quiz:

1. **Obtain the music legally:**
   - Purchase "Goodnight and Go" by Imogen Heap from iTunes, Amazon Music, or other licensed services
   - Or use a streaming service that allows downloads
   - Ensure you have the rights to use it in your application

2. **Add the file:**
   - Place your audio file (MP3, OGG, or WAV format) in this `/music/` directory
   - Name it `background-music.mp3` (or update the filename in BackgroundMusic.jsx)

3. **Enable playback:**
   - Open `/app/frontend/src/components/BackgroundMusic.jsx`
   - Find the commented line: `// audioRef.current.src = '/music/background-music.mp3';`
   - Uncomment it to enable music playback

4. **Restart the frontend:**
   ```bash
   sudo supervisorctl restart frontend
   ```

The music will then play in the background with a volume control button in the bottom-right corner.
