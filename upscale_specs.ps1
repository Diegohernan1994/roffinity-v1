Add-Type -AssemblyName System.Drawing

New-Item -ItemType Directory -Force -Path 'public\images\specs' | Out-Null

function Upscale-Image {
    param (
        [string]$sourcePath,
        [string]$destPath,
        [int]$targetWidth = 2048,
        [int]$targetHeight = 1536
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

$brainDir = 'C:\Users\Diego\.gemini\antigravity\brain\aaf64f9c-f9db-4122-a44c-75aa898fe645'

$f1 = (Get-ChildItem -Path $brainDir -Filter 'specs_residential_*.jpg').FullName | Select-Object -Last 1
$f2 = (Get-ChildItem -Path $brainDir -Filter 'specs_commercial_*.jpg').FullName | Select-Object -Last 1
$f3 = (Get-ChildItem -Path $brainDir -Filter 'specs_inspection_*.jpg').FullName | Select-Object -Last 1

Upscale-Image $f1 'public\images\specs\specs-residential.jpg' 2048 1536
Upscale-Image $f2 'public\images\specs\specs-commercial.jpg' 2048 1536
Upscale-Image $f3 'public\images\specs\specs-inspection.jpg' 2048 1536

Write-Host "SUCCESS: All 3 specs images converted to 2K (2048x1536)"
