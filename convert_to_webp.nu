let images = ls --long | each {|file| $file.name}

for $image in $images {
    let $file = $image | path basename
    let $basename = $image | path parse | get stem
    let output = [$basename, ".webp"] | str join
    
    cwebp -preset picture $file -lossless -o $output
}