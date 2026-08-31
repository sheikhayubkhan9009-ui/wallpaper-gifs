# 🌌 wallpaper-gifs

A curated collection of static and animated GIF wallpapers optimized for Linux window managers (Hyprland, Sway, i3, bspwm) and desktop environments.

Open `index.html` in your browser or publish this repository with GitHub Pages to browse the wallpaper collection.

---

## 🖼️ Previews

| Preview | File |
| :---: | :---: |
| ![Wallpaper](./wallpapers/1FlyI.jpg) | `1FlyI.jpg` |

*(Add more rows above using `![Name](./wallpapers/your-file.gif)` as you add wallpapers to the folder)*

---

## 🚀 How to Set Wallpaper on Linux

### Wayland (Hyprland / Sway)

**Using `swww` (Animated & Static):**
```bash
# Start the daemon (if not already running)
swww-daemon &

# Set a static or GIF wallpaper with custom transition options
swww img ./wallpapers/1FlyI.jpg \
  --transition-type grow \
  --transition-pos center \
  --transition-fps 60

# Target a specific monitor (e.g., HDMI-A-1 or eDP-1)
swww img ./wallpapers/1FlyI.jpg -o HDMI-A-1
