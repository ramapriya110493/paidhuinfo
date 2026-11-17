Add-Type -AssemblyName System.Drawing

$srcPath = Resolve-Path "public/assets/paidhu_bloom_cookies_clean.jpg"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$c1 = $src.GetPixel(400, 2)
$c2 = $src.GetPixel(700, 2)
Write-Host "Color at (400, 2): R=$($c1.R) G=$($c1.G) B=$($c1.B)"
Write-Host "Color at (700, 2): R=$($c2.R) G=$($c2.G) B=$($c2.B)"

$targetW = 1080
$targetH = 1440
$bmp = New-Object System.Drawing.Bitmap $targetW, $targetH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Exact top color: R=242, G=232, B=216
$creamColor = [System.Drawing.Color]::FromArgb($c1.R, $c1.G, $c1.B)
$bgBrush = [System.Drawing.SolidBrush]::new($creamColor)
$g.FillRectangle($bgBrush, 0, 0, $targetW, $targetH)
$bgBrush.Dispose()

# Crop source: from x=370 to 1000 (width 630), y=0 to 426
$cropX = 370
$cropY = 0
$cropW = 630
$cropH = 426

# Scale 630 to 1080
$destX = 0
$destY = 140
$destW = $targetW # 1080
$destH = [int](426 * ($targetW / $cropW)) # 730

$srcRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
$destRect = [System.Drawing.Rectangle]::new($destX, $destY, $destW, $destH)
$g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Top blend from destY down 60px
$topP1 = [System.Drawing.Point]::new(0, ($destY - 2))
$topP2 = [System.Drawing.Point]::new(0, ($destY + 60))
$topC1 = [System.Drawing.Color]::FromArgb(255, $creamColor.R, $creamColor.G, $creamColor.B)
$topC2 = [System.Drawing.Color]::FromArgb(0, $creamColor.R, $creamColor.G, $creamColor.B)
$topBlend = [System.Drawing.Drawing2D.LinearGradientBrush]::new($topP1, $topP2, $topC1, $topC2)
$g.FillRectangle($topBlend, 0, ($destY - 2), $targetW, 62)
$topBlend.Dispose()

# Bottom dark luxury gradient so text "Bloom Cookies" and "View All" has crystal contrast
$fadeStartY = $destY + $destH - 120
$botP1 = [System.Drawing.Point]::new(0, $fadeStartY)
$botP2 = [System.Drawing.Point]::new(0, $targetH)
$botC1 = [System.Drawing.Color]::FromArgb(0, 8, 10, 15)
$botC2 = [System.Drawing.Color]::FromArgb(255, 8, 10, 15)
$botGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new($botP1, $botP2, $botC1, $botC2)
$g.FillRectangle($botGrad, 0, $fadeStartY, $targetW, ($targetH - $fadeStartY))
$botGrad.Dispose()

$bmp.Save("public/assets/paidhu_bloom_cookies_mobile.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose()
$bmp.Dispose()
$src.Dispose()
Write-Host "Created public/assets/paidhu_bloom_cookies_mobile.jpg"
