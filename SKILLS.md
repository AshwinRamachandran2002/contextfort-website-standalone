# Skills & Lessons Learned

## Bash: Handling File Paths with Spaces

### Problem
When copying files with spaces in filenames, standard quoting methods failed repeatedly:

```bash
# ❌ FAILED
cp "/path/to/Screenshot 2026-01-12 at 3.38.51 PM.png" /destination/

# ❌ FAILED
cp 'Screenshot 2026-01-12 at 3.38.51 PM.png' /destination/

# ❌ FAILED
cp Screenshot\ 2026-01-12\ at\ 3.38.51\ PM.png /destination/
```

### Solution
**Use wildcards when dealing with problematic filenames:**

```bash
# ✅ WORKS
cd '/path/to/directory'
cp Screenshot*3.38.51*.png /destination/
```

### Key Takeaways
1. **Always CD first** when dealing with complex filenames
2. **Use wildcards** to avoid escaping issues with spaces
3. **Don't waste time** trying multiple quoting methods - go straight to wildcards
4. **Verify file exists** with `ls -1` before attempting operations

### Example Workflow
```bash
# 1. Navigate to directory
cd '/Users/ashwin/Desktop/Screenshots/2026'

# 2. List files to verify
ls -1

# 3. Use wildcards to match
cp Screenshot*3.38.51*.png /destination/file.png

# 4. Verify copy succeeded
ls -lh /destination/file.png
```

---

## Image Conversion for Web

### Chrome Web Store Requirements
**Small promo tile**: 440x280 pixels, JPEG or 24-bit PNG (no alpha)

### Conversion Command
```bash
sips -z 280 440 -s format jpeg source.png --out promo-tile.jpg
```

### Verification
```bash
sips -g pixelWidth -g pixelHeight -g format promo-tile.jpg
```

---

*Last Updated: 2026-01-13*
