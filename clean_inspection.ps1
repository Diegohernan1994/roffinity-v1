Add-Type -AssemblyName System.Drawing

$src = (Get-Item "public\images\specs\specs-inspection.jpg").FullName
$img = [System.Drawing.Bitmap]::FromFile($src)
$graphics = [System.Drawing.Graphics]::FromImage($img)

# Smooth high quality
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

# 1. Helmet logo: smooth clean white
$whiteBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(246, 248, 252))
$graphics.FillEllipse($whiteBrush, 620, 275, 75, 45)

# 2. Vest left patch ("ROOF INSPECTOR"): sample high-vis yellow
$yellowBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(215, 235, 10))
$graphics.FillRectangle($yellowBrush, 520, 465, 120, 75)

# 3. Vest right patch ("FAA"): sample high-vis yellow
$graphics.FillRectangle($yellowBrush, 645, 420, 95, 115)

# 4. Badge lanyard clip:
$blackBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(20, 22, 25))
$graphics.FillRectangle($blackBrush, 620, 560, 80, 70)

# 5. Bottom clipboard: cover with dark black hard case
$graphics.FillRectangle($blackBrush, 890, 1300, 340, 210)

$graphics.Dispose()

$dest = (Get-Item "public\images\specs\specs-inspection.jpg").FullName
$tempDest = $dest + ".tmp.jpg"
$img.Save($tempDest, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()

Copy-Item $tempDest $dest -Force
Remove-Item $tempDest -Force

Write-Host "CLEANED: specs-inspection.jpg logos and text removed."
