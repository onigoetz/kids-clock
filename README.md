
# Kids Clock

A Raspberry pi with a touch screen to show time and if a kid should go to/stay in bed.

## Hardware

- A raspberry PI 
- [A touch screen](https://www.aliexpress.com/item/32697314519.html?spm=a2g0s.9042311.0.0.50954c4d4U5GmI)

## Install full image

- From raspbian site https://www.raspberrypi.org/downloads/raspbian/
- Find disk `diskutil list`
- Unmount disk `diskutil unmountDisk /dev/disk2`
- Copy image `sudo dd bs=1m if=/Users/onigoetz/Downloads/2020-02-13-raspbian-buster.img of=/dev/rdisk2 conv=sync`

## Configure

- set keyboard
- set wifi
- set timezone
- updates
- enable SSH (username:pi, password:raspberry) (change to something else to avoid alerts)

## Install touch screen

- Disconnect HDMI
- Restart

(from https://www.elecrow.com/wiki/index.php?title=4_Inch_HD_480x320_TFT_Display_with_Touch_Screen_for_Rapberry_Pi )

```bash
ssh pi@raspberrypi.local
git clone https://github.com/Elecrow-keen/Elecrow-LCD4.git
cd Elecrow-LCD4
sudo ./Elecrow-LCD4
```

## Configure to start chromium automatically

/etc/lightdm/lightdm.conf

```
autologin-user=kiosk-user
user-session=openbox
```


## Autostart script 

```
sudo apt install unclutter
mkdir $HOME/.config/openbox
nano $HOME/.config/openbox/autostart
```

```
xset -dpms                      # turn off display power management system
xset s noblank          # turn off screen blanking
xset s off                      # turn off screen saver

unclutter -idle 0.5 -root &


# Remove exit errors from the config files that could trigger a warning
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' ~/.config/chromium/'Local State'
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/; s/"exit_type":"[^"]\+"/"exit_type":"Normal"/' ~/.config/chromium/Default/Preferences


/usr/bin/chromium-browser \
    --no-first-run \
    --disable \
    --disable-translate \
    --disable-infobars \
    --disable-suggestions-service \
    --disable-save-password-bubble \
    --start-maximized \
    --kiosk "https://kids-clock.netlify.com" &
```

## Sources

- https://willhaley.com/blog/debian-fullscreen-gui-kiosk/
- https://desertbot.io/blog/raspberry-pi-touchscreen-kiosk-setup
- https://github.com/elalemanyo/raspberry-pi-kiosk-screen
- https://blockdev.io/raspberry-pi-2-and-3-chromium-in-kiosk-mode/


