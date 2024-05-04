$env.ARGC_COMPLETIONS_ROOT = 'C:\Users\Jiahao\repositories\argc-completions'
$env.ARGC_COMPLETIONS_PATH = ($env.ARGC_COMPLETIONS_ROOT + '\completions')
$env.Path = ($env.Path | prepend ($env.ARGC_COMPLETIONS_ROOT + '\bin'))
argc --argc-completions nushell | save -f 'C:\Users\Jiahao\repositories\argc-completions\tmp\argc-completions.nu'
source 'C:\Users\Jiahao\repositories\argc-completions\tmp\argc-completions.nu'

use ~/.config/nushell/completions/git-completions.nu *

$env.config = {
    show_banner: false # 隐藏欢迎文本
    shell_integration: true # VS Code 集成
    highlight_resolved_externals: true
    color_config: {
        shape_external_resolved: green
        shape_internalcall: green
        shape_external: white
        shape_externalarg: white

        shape_string: white
        shape_directory: purple_underline
        shape_filepath: purple_underline
    }
    history: {
        max_size: 10000
        sync_on_enter: true # 输入命令后立刻保存历史记录
        file_format: "sqlite" # 将历史记录保存到数据库，而不是 txt 文件
    }
    filesize: {
        metric: true # 公制单位 1 KB = 1000 B、1 MB = 1e6 B 等
        format: "auto" # 自动决定单位，B、KB、MB 等
    }
    completions: {
        external: {
            max_results: 20
        }
    }
}