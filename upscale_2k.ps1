Add-Type -AssemblyName System.Drawing

function Upscale-Image {
    param (
        [string]$sourcePath,
        [string]$destPath,
        [int]$targetWidth = 2560,
        [int]$targetHeight = 1440
    )
    $srcImg = [System.Drawing.Image]::FromFile($sourcePath)
    $destBmp = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight
    $graphics = [System.Drawing.Graphics]::FromImage($destBmp)
    
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graphics.DrawImage($srcImg, 0, 0, $targetWidth, $targetHeight)

    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]95)

    $destBmp.Save($destPath, $encoder, $encoderParams)

    $graphics.Dispose()
    $destBmp.Dispose()
    $srcImg.Dispose()
}

$brainDir = "C:\Users\Diego\.gemini\antigravity\brain\aaf64f9c-f9db-4122-a44c-75aa898fe645"

$f1 = (Get-ChildItem -Path $brainDir -Filter "ai_modern_roof_1_*.jpg").FullName | Select-Object -Last 1
$f2 = (Get-ChildItem -Path $brainDir -Filter "ai_modern_roof_2_*.jpg").FullName | Select-Object -Last 1
$f3 = (Get-ChildItem -Path $brainDir -Filter "ai_modern_roof_3_*.jpg").FullName | Select-Object -Last 1
$f4 = (Get-ChildItem -Path $brainDir -Filter "ai_modern_roof_4_*.jpg").FullName | Select-Object -Last 1
$f5 = (Get-ChildItem -Path $brainDir -Filter "ai_modern_roof_5_*.jpg").FullName | Select-Object -Last 1

Upscale-Image $f1 "public\images\hero\hero-slide-1.jpg" 2560 1440
Upscale-Image $f2 "public\images\hero\hero-slide-2.jpg" 2560 1440
Upscale-Image $f3 "public\images\hero\hero-slide-3.jpg" 2560 1440
Upscale-Image $f4 "public\images\hero\hero-slide-4.jpg" 2560 1440
Upscale-Image $f5 "public\images\hero\hero-slide-5.jpg" 2560 1440

Write-Host "SUCCESS: All 5 hero slides scaled to 2560x1440 (2K QHD)"
