Add-Type -AssemblyName System.Drawing

function Create-BloomCookiesMobile {
    $srcPath = Resolve-Path "public/assets/paidhu_bloom_cookies_clean.jpg"
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $c1 = $src.GetPixel(400, 2)
    $creamColor = [System.Drawing.Color]::FromArgb($c1.R, $c1.G, $c1.B)

    $targetW = 1080
    $targetH = 1440
    $bmp = New-Object System.Drawing.Bitmap $targetW, $targetH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $bgBrush = [System.Drawing.SolidBrush]::new($creamColor)
    $g.FillRectangle($bgBrush, 0, 0, $targetW, $targetH)
    $bgBrush.Dispose()

    $cropX = 370
    $cropY = 0
    $cropW = 630
    $cropH = 426

    $destX = 0
    $destY = 140
    $destW = $targetW
    $destH = [int](426 * ($targetW / $cropW))

    $srcRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
    $destRect = [System.Drawing.Rectangle]::new($destX, $destY, $destW, $destH)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $topP1 = [System.Drawing.Point]::new(0, ($destY - 2))
    $topP2 = [System.Drawing.Point]::new(0, ($destY + 60))
    $topC1 = [System.Drawing.Color]::FromArgb(255, $creamColor.R, $creamColor.G, $creamColor.B)
    $topC2 = [System.Drawing.Color]::FromArgb(0, $creamColor.R, $creamColor.G, $creamColor.B)
    $topBlend = [System.Drawing.Drawing2D.LinearGradientBrush]::new($topP1, $topP2, $topC1, $topC2)
    $g.FillRectangle($topBlend, 0, ($destY - 2), $targetW, 62)
    $topBlend.Dispose()

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
}

function Create-PetalJamMobile {
    $srcPath = Resolve-Path "public/assets/paidhu_petal_jam_clean.jpg"
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $topColor = $src.GetPixel(600, 2)

    $targetW = 1080
    $targetH = 1440
    $bmp = New-Object System.Drawing.Bitmap $targetW, $targetH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $bgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb($topColor.R, $topColor.G, $topColor.B))
    $g.FillRectangle($bgBrush, 0, 0, $targetW, $targetH)
    $bgBrush.Dispose()

    # The 4 jars on the pedestal are from x=450 to 980 (width 530), y=0 to 426
    $cropX = 430
    $cropY = 0
    $cropW = 570
    $cropH = 426

    $destX = 0
    $destY = 160
    $destW = $targetW
    $destH = [int](426 * ($targetW / $cropW))

    $srcRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
    $destRect = [System.Drawing.Rectangle]::new($destX, $destY, $destW, $destH)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $fadeStartY = $destY + $destH - 120
    $botP1 = [System.Drawing.Point]::new(0, $fadeStartY)
    $botP2 = [System.Drawing.Point]::new(0, $targetH)
    $botC1 = [System.Drawing.Color]::FromArgb(0, 8, 10, 15)
    $botC2 = [System.Drawing.Color]::FromArgb(255, 8, 10, 15)
    $botGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new($botP1, $botP2, $botC1, $botC2)
    $g.FillRectangle($botGrad, 0, $fadeStartY, $targetW, ($targetH - $fadeStartY))
    $botGrad.Dispose()

    $bmp.Save("public/assets/paidhu_petal_jam_mobile.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Created public/assets/paidhu_petal_jam_mobile.jpg"
}

function Create-MedleyTeasMobile {
    $srcPath = Resolve-Path "public/assets/paidhu_medley_teas_clean.jpg"
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $topColor = $src.GetPixel(600, 2)

    $targetW = 1080
    $targetH = 1440
    $bmp = New-Object System.Drawing.Bitmap $targetW, $targetH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $bgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb($topColor.R, $topColor.G, $topColor.B))
    $g.FillRectangle($bgBrush, 0, 0, $targetW, $targetH)
    $bgBrush.Dispose()

    # The 4 tins are from x=460 to 980 (width 520), y=0 to 426
    $cropX = 460
    $cropY = 0
    $cropW = 540
    $cropH = 426

    $destX = 0
    $destY = 160
    $destW = $targetW
    $destH = [int](426 * ($targetW / $cropW))

    $srcRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
    $destRect = [System.Drawing.Rectangle]::new($destX, $destY, $destW, $destH)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $fadeStartY = $destY + $destH - 120
    $botP1 = [System.Drawing.Point]::new(0, $fadeStartY)
    $botP2 = [System.Drawing.Point]::new(0, $targetH)
    $botC1 = [System.Drawing.Color]::FromArgb(0, 8, 10, 15)
    $botC2 = [System.Drawing.Color]::FromArgb(255, 8, 10, 15)
    $botGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new($botP1, $botP2, $botC1, $botC2)
    $g.FillRectangle($botGrad, 0, $fadeStartY, $targetW, ($targetH - $fadeStartY))
    $botGrad.Dispose()

    $bmp.Save("public/assets/paidhu_medley_teas_mobile.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Created public/assets/paidhu_medley_teas_mobile.jpg"
}

function Create-FloffiMobile {
    $srcPath = Resolve-Path "public/assets/paidhu_floffi_clean.jpg"
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $topColor = $src.GetPixel(600, 2)

    $targetW = 1080
    $targetH = 1440
    $bmp = New-Object System.Drawing.Bitmap $targetW, $targetH
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $bgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb($topColor.R, $topColor.G, $topColor.B))
    $g.FillRectangle($bgBrush, 0, 0, $targetW, $targetH)
    $bgBrush.Dispose()

    # The products and toast/dosa are from x=300 to 980 (width 680), y=0 to 469
    $cropX = 300
    $cropY = 0
    $cropW = 680
    $cropH = 469

    $destX = 0
    $destY = 160
    $destW = $targetW
    $destH = [int](469 * ($targetW / $cropW))

    $srcRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
    $destRect = [System.Drawing.Rectangle]::new($destX, $destY, $destW, $destH)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $fadeStartY = $destY + $destH - 120
    $botP1 = [System.Drawing.Point]::new(0, $fadeStartY)
    $botP2 = [System.Drawing.Point]::new(0, $targetH)
    $botC1 = [System.Drawing.Color]::FromArgb(0, 8, 10, 15)
    $botC2 = [System.Drawing.Color]::FromArgb(255, 8, 10, 15)
    $botGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new($botP1, $botP2, $botC1, $botC2)
    $g.FillRectangle($botGrad, 0, $fadeStartY, $targetW, ($targetH - $fadeStartY))
    $botGrad.Dispose()

    $bmp.Save("public/assets/paidhu_floffi_mobile.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Created public/assets/paidhu_floffi_mobile.jpg"
}

Create-BloomCookiesMobile
Create-PetalJamMobile
Create-MedleyTeasMobile
Create-FloffiMobile
