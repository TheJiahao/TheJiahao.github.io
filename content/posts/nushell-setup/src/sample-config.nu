$env.ARGC_COMPLETIONS_ROOT = 'C:\Users\Jiahao\repositories\argc-completions'
$env.ARGC_COMPLETIONS_PATH = ($env.ARGC_COMPLETIONS_ROOT + '\completions')
$env.Path = ($env.Path | prepend ($env.ARGC_COMPLETIONS_ROOT + '\bin'))
#argc --argc-completions nushell | save -f 'C:\Users\Jiahao\repositories\argc-completions\tmp\argc-completions.nu'
source 'C:\Users\Jiahao\repositories\argc-completions\tmp\argc-completions.nu'

use ~/.config/nushell/completions/git-completions.nu *

$env.config.highlight_resolved_externals = true
$env.config.color_config = {
        shape_external_resolved: green
        shape_internalcall: green
        shape_external: white
        shape_externalarg: white

        shape_string: white
        shape_directory: purple_underline
        shape_filepath: purple_underline
}
$env.config.show_banner = false # 隐藏欢迎文本
$env.config.shell_integration = true # VS Code 集成
$env.config.filesize.metric = true # 使用公制单位 1 KB = 1000 B、1 MB = 1e6 B 等

$env.config.history.max_size = 10000
$env.config.history.file_format = "sqlite" # 将历史记录保存到数据库，而不是 txt 文件